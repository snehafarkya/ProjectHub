import { Card } from '@/components/ui/card';
import { BarChart3, Users, Zap, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/lib/formatDate';
interface Project {
  members: number;
  startDate: string;
  endDate: string;
  priority?: string;
  status: string;
}

export function ProjectMetrics({ project }: { project: Project }) {
  const metrics = [
    {
      icon: Users,
      label: 'Team Members',
      value: project.members.toString(),
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950',
    },
    {
      icon: Calendar,
      label: 'Start Date',
      value: formatDate(project.startDate),
      color: 'text-green-600',
      bg: 'bg-green-50 dark:bg-green-950',
    },
    {
      icon: Calendar,
      label: 'End Date',
      value: project.endDate,
      color: 'text-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-950',
    },
    {
      icon: Zap,
      label: 'Priority',
      value: project.priority || 'N/A',
      color: 'text-orange-600',
      bg: 'bg-orange-50 dark:bg-orange-950',
    },
  ];

  return (
    <Card className="border border-gray-300 bg-card p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2  rounded-lg">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-semibold">Project Details</h2>
        </div>

        <div className="space-y-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${metric.bg}`}>
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                    <span className="text-sm ">{metric.label}</span>
                  </div>
                  <span className="font-semibold text-right">{metric.value}</span>
                </div>
                {index < metrics.length - 1 && <Separator className="mt-4" />}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
