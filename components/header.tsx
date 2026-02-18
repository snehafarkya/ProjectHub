"use client";

import { Bell, Search, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isNotified, setIsNotified] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Profile dropdown outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen(true);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(query.toLowerCase()) ||
      project.client.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-300">

        <div className="px-6 py-4 flex items-center justify-between">

          {/* Command Palette Trigger */}
          <div className="flex-1 max-w-md">
            <button
              onClick={() => setCommandOpen(true)}
              className="w-full md:flex hidden cursor-pointer items-center gap-3 px-4 py-2 bg-muted border border-gray-300 text-gray-400 rounded-lg text-sm  hover:outline-none hover:ring-2 hover:ring-gray-300  transition"
            >
              <Search className="w-4 h-4" />
              <span className="flex-1 text-left">
                Search projects...
              </span>
            </button>
          </div>

          <div className="flex items-center gap-4 relative">
            <button
              onClick={() => setIsNotified(!isNotified)}
              className={`relative p-2 transition-colors duration-200 ${
                isNotified
                  ? "text-red-500"
                  : ""
              }`}
            >
              <Bell
                className={`w-5 cursor-pointer hover:fill-red-500 hover:stroke-red-500  h-5 ${
                  isNotified ? "fill-red-500 stroke-red-500" : ""
                }`}
              />
              {isNotified && (
                <span className="absolute top-1 right-1 w-2 h-2  rounded-full"></span>
              )}
            </button>

            {/* Settings */}
            <button className="p-2 hidden lg:flex transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            {/* Profile */}
            <div
              ref={dropdownRef}
              className="relative flex items-center gap-3 pl-4 border-l border-gray-300"
            >
              <div
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full border-gray-300 border flex items-center justify-center font-semibold cursor-pointer  transition"
              >
                JD
              </div>

              {open && (
                <div className="absolute z-20 right-0 top-12 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="mb-3">
                    <p className="text-sm font-medium">
                      John Doe
                    </p>
                    <p className="text-xs text-muted-foreground">
                      john@example.com
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-2 space-y-2 text-sm">
                    <button className="w-full hover:bg-gray-100 cursor-pointer text-left px-2 py-1 rounded ">
                      Profile
                    </button>
                    <button className="w-full hover:bg-gray-100 cursor-pointer  text-left px-2 py-1 rounded ">
                      Settings
                    </button>
                    <button className="w-full text-left px-2 py-1 rounded hover:bg-red-50 text-red-500">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Command Palette Modal */}
      {commandOpen && (
        <div
          className="fixed inset-0 z-50 lg:flex hidden items-start justify-center bg-black/40 backdrop-blur-sm pt-32"
          onClick={() => setCommandOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200  overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="border-b p-4">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full cursor-pointer border-gray-300 text-gray-300 placeholder:text-gray-300 outline-none text-sm"
              />
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto">
              {filteredProjects.length === 0 ? (
                <div className="p-6 text-sm  text-center">
                  No results found.
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      router.push(`/projects/${project.id}`);
                      setCommandOpen(false);
                      setQuery("");
                    }}
                    className="w-full cursor-pointer text-left px-6 py-4 hover:bg-gray-100 transition border-b border-gray-300 last:border-none"
                  >
                    <p className="font-medium">
                      {project.name}
                    </p>
                    <p className="text-xs ">
                      {project.client}
                    </p>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t px-6 py-3 text-xs flex justify-between">
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
