import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface Project {
  description?: string;
}

export function ProjectDescription({ project }: { project: Project }) {
  return (
    <Card className="border border-gray-300 bg-card p-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-semibold ">Overview</h2>
        </div>

        <p className="text-base">
          {project.description ? project.description : 'No description provided for this project yet.'}
        </p>
      </div>
    </Card>
  );
}
