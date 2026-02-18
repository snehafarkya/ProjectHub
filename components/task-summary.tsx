import {stats} from "@/lib/data";

export function TaskSummary() {

  return (
    <div className="border border-gray-300 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Task Summary</h2>

      <div className="space-y-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-300">
        <div className="space-y-3">
          <p className="text-sm">Overall Progress</p>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-blue-400"></div>
          </div>
          <p className="text-sm font-medium">66.7% Complete</p>
        </div>
      </div>

      <button className="w-full cursor-pointer mt-6 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-medium text-sm">
        View All Tasks
      </button>
    </div>
  );
}
