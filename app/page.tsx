"use client";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ProjectOverview } from "@/components/project-overview";
import { RecentActivity } from "@/components/recent-activity";
import { TaskSummary } from "@/components/task-summary";

export default function Home() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold ">Projects Dashboard</h1>
              <p className=" mt-1">
                Manage and track your projects in one place
              </p>
            </div>
            <ProjectOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <RecentActivity />
              </div>
              <div className="space-y-6">
                <TaskSummary />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
