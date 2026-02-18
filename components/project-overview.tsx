"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Calendar,
  X,
} from "lucide-react";
import { projectsData } from "@/lib/data";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/formatDate";

const allStatuses = ["Planning", "In Progress", "Completed"];

export function ProjectOverview() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(project.status);

      const matchesSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.client.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [selectedStatuses, search]);
  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };
  const statusStyles: Record<string, string> = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Planning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Search project or client..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm  focus:outline-none focus:ring-2 focus:ring-gray-300 transition w-sm "
            />

            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full md:w-auto transition"
              >
                Status
                <ChevronDown className="w-4 h-4" />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg p-4 space-y-2 ">
                  {allStatuses.map((status) => (
                    <label
                      key={status}
                      className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md px-2 py-1 transition"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStatuses.includes(status)}
                        onChange={() => toggleStatus(status)}
                      />
                      {status}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Chips */}
          {selectedStatuses.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedStatuses.map((status) => (
                <div
                  key={status}
                  className="flex items-center gap-2 px-3 py-1 text-xs text-gray-800 rounded-full border border-gray-300 hover:bg-gray-100 transition "
                >
                  {status}
                  <button
                    onClick={() => toggleStatus(status)}
                    className=" hover:text-red-500 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}

              <button
                onClick={() => setSelectedStatuses([])}
                className="text-xs  hover:text-red-500 transition"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cards */}
      {filteredProjects.length === 0 ? (
        <div className="col-span-full text-center py-16 ">
          No matching projects found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="group bg-white border border-gray-200 cursor-pointer rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Top Section */}
              <div className=" border-b border-gray-200 pb-2">
                <h3 className="text-lg font-semibold  line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-sm ">{project.client}</p>
              </div>

              {/* Description */}
              <p className="text-sm line-clamp-2 mt-3">
                {project.description
                  ? project.description
                  : "No description provided"}
              </p>

              {/* Dates */}
              <div className="mt-4 space-y-2 text-xs text-gray-600">
                <div className="flex items-center justify-between rounded-lg  py-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-gray-500">Start</span>
                  </div>
                  <span className="font-medium">
                    {formatDate(project.startDate)}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg  ">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-gray-500">Due</span>
                  </div>
                  <span className="font-medium">
                    {formatDate(project.endDate)}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-5 ">
                <div className="flex justify-between text-xs mb-1">
                  <span className="">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-5">
                <span className="text-xs ">{project.members} members</span>

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
