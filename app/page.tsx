'use client'

import React from 'react'
import { Sidebar } from '../components/layout/Sidebar'
import { Header } from '../components/layout/Header'
import { StatCard } from '../components/dashboard/StatCard'
import { SalesChart } from '../components/dashboard/SalesChart'
import { RevenueChart } from '../components/dashboard/RevenueChart'
import { RecentActivity } from '../components/dashboard/RecentActivity'
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Package,
  Target
} from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: 20.1,
      changeType: 'positive' as const,
      icon: DollarSign,
      iconColor: 'text-green-600'
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: 15.3,
      changeType: 'positive' as const,
      icon: Users,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Sales',
      value: '12,234',
      change: -2.4,
      changeType: 'negative' as const,
      icon: ShoppingCart,
      iconColor: 'text-purple-600'
    },
    {
      title: 'Growth',
      value: '+23.5%',
      change: 8.2,
      changeType: 'positive' as const,
      icon: TrendingUp,
      iconColor: 'text-orange-600'
    }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  changeType={stat.changeType}
                  icon={stat.icon}
                  iconColor={stat.iconColor}
                />
              ))}
            </div>

            {/* Charts and activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sales Chart */}
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              
              {/* Recent Activity */}
              <div>
                <RecentActivity />
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="mt-6">
              <RevenueChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 