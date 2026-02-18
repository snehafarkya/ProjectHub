import { Card } from '@/components/ui/card';
import { BarChart3, Check } from 'lucide-react';

interface Project {
  progress: number;
}

export function ProjectProgress({ project }: { project: Project }) {
  const progressSegments = [
    { label: 'Planning', value: 20 },
    { label: 'Development', value: 35 },
    { label: 'Testing', value: 30 },
    { label: 'Deployment', value: 15 },
  ];

  return (
    <Card className="border border-gray-300 bg-card p-8">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg">
            <BarChart3 className="w-5 h-5 " />
          </div>
          <h2 className="text-lg font-semibold ">Project Progress</h2>
        </div>

        {/* Main Progress Bar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium ">Overall Completion</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold ">{project.progress}%</span>
              <Check className="w-5 h-5 text-green-500" />
            </div>
          </div>

          <div className="relative w-full h-4 rounded-full overflow-hidden ">
            <div
              className="h-full bg-linear-to-r from-blue-200 to-blue-600 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Project Phases</h3>
          <div className="grid grid-cols-4 gap-4">
            {progressSegments.map((segment) => (
              <div key={segment.label} className="space-y-2">
                <div className="h-2 bg-muted rounded-full overflow-hidden border border-gray-100">
                  <div
                    className="h-full bg-[hsl(221_83%_53%)] rounded-full"
                    style={{ width: `${segment.value}%` }}
                  />
                </div>
                <p className="text-xs  text-center">{segment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
