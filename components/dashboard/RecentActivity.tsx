import React from 'react'
import { Card } from '../ui/Card'
import { Clock, DollarSign, Users, ShoppingCart } from 'lucide-react'

interface Activity {
  id: string
  type: 'sale' | 'purchase' | 'user' | 'system'
  title: string
  description: string
  time: string
  amount?: number
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'sale',
    title: 'New Sale',
    description: 'Product XYZ sold to Customer ABC',
    time: '2 minutes ago',
    amount: 1250
  },
  {
    id: '2',
    type: 'purchase',
    title: 'Inventory Purchase',
    description: 'Ordered 500 units of Product DEF',
    time: '15 minutes ago',
    amount: 3500
  },
  {
    id: '3',
    type: 'user',
    title: 'New User Registration',
    description: 'John Doe registered as a new customer',
    time: '1 hour ago'
  },
  {
    id: '4',
    type: 'system',
    title: 'System Update',
    description: 'Database backup completed successfully',
    time: '2 hours ago'
  },
  {
    id: '5',
    type: 'sale',
    title: 'Bulk Order',
    description: 'Corporate client placed order for 1000 units',
    time: '3 hours ago',
    amount: 15000
  }
]

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'sale':
      return <DollarSign className="w-4 h-4 text-green-600" />
    case 'purchase':
      return <ShoppingCart className="w-4 h-4 text-blue-600" />
    case 'user':
      return <Users className="w-4 h-4 text-purple-600" />
    case 'system':
      return <Clock className="w-4 h-4 text-gray-600" />
  }
}

export function RecentActivity() {
  return (
    <Card title="Recent Activity" subtitle="Latest business activities">
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 mt-1">
              {getIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              {activity.amount && (
                <p className="text-sm font-medium text-green-600 mt-1">
                  ${activity.amount.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
} 