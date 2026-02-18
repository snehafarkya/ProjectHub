import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProjectDetailHeader } from '@/components/project-detail/project-header';
import { ProjectDescription } from '@/components/project-detail/project-description';
import { ProjectProgress } from '@/components/project-detail/project-progress';
import { ProjectMetrics } from '@/components/project-detail/project-metrics';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) return notFound();

  return (
    <div className="flex min-h-screen ">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-7xl mx-auto space-y-8">
            <ProjectDetailHeader project={project} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <ProjectDescription project={project} />
                <ProjectProgress project={project} />
              </div>

              <div className="space-y-8">
                <ProjectMetrics project={project} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
