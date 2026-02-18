import { MessageSquare, CheckCircle, Users, Zap } from 'lucide-react';
import { activities } from '@/lib/data';

const iconMap = {
  comment: MessageSquare,
  completed: CheckCircle,
  joined: Users,
  update: Zap,
};

export function RecentActivity() {
  return (
    <div className="border border-gray-300 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type as keyof typeof iconMap];
          return (
            <div key={activity.id} className={`flex items-start gap-4 pb-4 ${
              index !== activities.length - 1 ? 'border-b border-gray-300' : ''
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                activity.type === 'comment'
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                  : activity.type === 'completed'
                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200'
                  : activity.type === 'joined'
                  ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200'
                  : 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-200'
              }`}>
                {activity.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm ">
                  <span className="font-medium">{activity.user}</span>
                  {' '}
                  <span >{activity.action}</span>
                </p>
                <p className="text-xs mt-1">{activity.time}</p>
              </div>

              <Icon className="w-4 h-4 shrink-0 mt-0.5" />
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-sm font-medium border cursor-pointer border-gray-300 hover:bg-gray-100 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
}
