import Link from "next/link";
import { ArrowLeft, Calendar, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
interface Project {
  id: number;
  name: string;
  client: string;
  status: string;
  priority?: string;
  startDate: string;
  members: number;
}

export function ProjectDetailHeader({ project }: { project: Project }) {
  const statusConfig: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    Completed: {
      bg: "bg-green-50 dark:bg-green-950",
      text: "text-green-700 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
    },
    "In Progress": {
      bg: "bg-blue-50 dark:bg-blue-950",
      text: "text-blue-700 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
    },
    Planning: {
      bg: "bg-yellow-50 dark:bg-yellow-950",
      text: "text-yellow-700 dark:text-yellow-400",
      border: "border-yellow-200 dark:border-yellow-800",
    },
  };

  const priorityConfig: Record<
    string,
    { bg: string; text: string; icon: string }
  > = {
    High: {
      bg: "bg-red-50 dark:bg-red-950",
      text: "text-red-700 dark:text-red-400",
      icon: "🔴",
    },
    Medium: {
      bg: "bg-orange-50 dark:bg-orange-950",
      text: "text-orange-700 dark:text-orange-400",
      icon: "🟠",
    },
    Low: {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-700 dark:text-gray-400",
      icon: "⚪",
    },
  };

  const statusStyle = statusConfig[project.status] || statusConfig["Planning"];
  const priorityStyle = project.priority
    ? priorityConfig[project.priority]
    : null;

  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium hover:bg-gray-100 p-2 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="flex flex-col ">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
          <h1 className="md:text-4xl text-2xl font-bold tracking-tight">
            {project.name}
          </h1>
          <p className="text-lg ">{project.client}</p>
          </div>
          <div className="flex flex-col items-end md:gap-3 gap-2">
            <Badge
              className={`${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border} font-medium`}
              variant="outline"
            >
              {project.status}
            </Badge>
            {priorityStyle && (
              <Badge
                className={`${priorityStyle.bg} ${priorityStyle.text} font-medium`}
                variant="outline"
              >
                <Zap className="w-3 h-3 mr-1" />
                {project.priority} Priority
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center md:gap-6 gap-2 pt-2">
          <div className="flex items-center gap-2 text-sm ">
            <Calendar className="w-4 h-4" />
            <span> {formatDate(project.startDate)} </span>
          </div>
          <div className="flex items-center gap-2 text-sm ">
            <Users className="w-4 h-4" />
            <span>{project.members} members</span>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="h-px bg-gray-100" />
    </div>
  );
}
