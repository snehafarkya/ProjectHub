import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

export interface Project {
  id: number;
  name: string;
  client: string;
  description: string;
  status: 'Planning' | 'In Progress' | 'Completed';
  progress: number;
  members: number;
  startDate: string;
  endDate: string;
  priority?: 'Low' | 'Medium' | 'High';
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Website Redesign ',
    client: 'Acme Corp',
    description: 'Complete redesign of the company website',
    status: 'In Progress',
    progress: 65,
    members: 4,
    startDate: '2024-01-10',
    endDate: '2024-03-15',
    priority: 'High',

  },
  {
    id: 2,
    name: 'Mobile App',
    client: 'Nova Labs',
    description: 'iOS and Android mobile application',
    status: 'Planning',
    progress: 25,
    members: 6,
    startDate: '2024-02-01',
    endDate: '2024-05-20',
    priority: 'Medium',
  },
  {
    id: 3,
    name: 'API Integration',
    client: 'FinEdge',
    description: 'Third-party API integration and testing',
    status: 'Completed',
    progress: 100,
    members: 3,
    startDate: '2023-10-05',
    endDate: '2024-01-15',
    priority: 'Low',
  },
  {
    id: 4,
    name: 'Webpage Optimization',
    client: 'Tech Solutions',
    description: 'Complete optimization of the company webpage for better performance',
    status: 'In Progress',
    progress: 65,
    members: 4,
    startDate: '2024-04-20',
    endDate: '2024-05-15',
    priority: 'High',
  },
  {
    id: 5,
    name: 'Food Delivery App',
    client: 'XYZ Inc',
    description: 'New iOS and Android food delivery application',
    status: 'Planning',
    progress: 28,
    members: 6,
    startDate: '2024-04-01',
    endDate: '2024-06-20',
    priority: 'Medium',
  },
{
    id: 6,
    name: 'Ecommerce Platform',
    client: 'XYZ Inc',
    description: '',
    status: 'Planning',
    progress: 66,
    members: 2,
    startDate: '2024-04-01',
    endDate: '',
    priority: 'Medium',
  },
];

export const activities = [
  {
    id: 1,
    type: 'comment',
    user: 'Sarah Chen',
    action: 'commented on Website Redesign',
    time: '2 hours ago',
    avatar: 'SC',
  },
  {
    id: 2,
    type: 'completed',
    user: 'Mike Johnson',
    action: 'completed task in Mobile App',
    time: '4 hours ago',
    avatar: 'MJ',
  },
  {
    id: 3,
    type: 'joined',
    user: 'Emily Rodriguez',
    action: 'joined API Integration project',
    time: '1 day ago',
    avatar: 'ER',
  },
  {
    id: 4,
    type: 'update',
    user: 'Alex Kim',
    action: 'updated project status to In Progress',
    time: '2 days ago',
    avatar: 'AK',
  },
];

export const stats = [
    {
      label: 'Completed',
      value: '24',
      icon: CheckCircle2,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      label: 'In Progress',
      value: '12',
      icon: Clock,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      label: 'Blocked',
      value: '3',
      icon: AlertCircle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
  ];

  
