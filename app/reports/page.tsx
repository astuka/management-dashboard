'use client'

import React, { useState } from 'react'
import { Sidebar } from '../../components/layout/Sidebar'
import { Header } from '../../components/layout/Header'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Download, FileText, Calendar, TrendingUp, Users, DollarSign, Filter } from 'lucide-react'

interface Report {
  id: string
  name: string
  type: 'sales' | 'revenue' | 'customers' | 'inventory'
  format: 'pdf' | 'csv' | 'excel'
  size: string
  lastGenerated: string
  status: 'ready' | 'generating' | 'failed'
}

const reports: Report[] = [
  {
    id: '1',
    name: 'Monthly Sales Report',
    type: 'sales',
    format: 'pdf',
    size: '2.4 MB',
    lastGenerated: '2024-01-15',
    status: 'ready'
  },
  {
    id: '2',
    name: 'Revenue Analysis Q4 2023',
    type: 'revenue',
    format: 'excel',
    size: '1.8 MB',
    lastGenerated: '2024-01-10',
    status: 'ready'
  },
  {
    id: '3',
    name: 'Customer Database Export',
    type: 'customers',
    format: 'csv',
    size: '3.2 MB',
    lastGenerated: '2024-01-12',
    status: 'ready'
  },
  {
    id: '4',
    name: 'Inventory Status Report',
    type: 'inventory',
    format: 'pdf',
    size: '1.5 MB',
    lastGenerated: '2024-01-08',
    status: 'ready'
  }
]

const getTypeIcon = (type: Report['type']) => {
  switch (type) {
    case 'sales':
      return <TrendingUp className="w-5 h-5 text-blue-600" />
    case 'revenue':
      return <DollarSign className="w-5 h-5 text-green-600" />
    case 'customers':
      return <Users className="w-5 h-5 text-purple-600" />
    case 'inventory':
      return <FileText className="w-5 h-5 text-orange-600" />
  }
}

const getStatusColor = (status: Report['status']) => {
  switch (status) {
    case 'ready':
      return 'bg-green-100 text-green-800'
    case 'generating':
      return 'bg-yellow-100 text-yellow-800'
    case 'failed':
      return 'bg-red-100 text-red-800'
  }
}

export default function Reports() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedFormat, setSelectedFormat] = useState<string>('all')

  const filteredReports = reports.filter(report => {
    const matchesType = selectedType === 'all' || report.type === selectedType
    const matchesFormat = selectedFormat === 'all' || report.format === selectedFormat
    return matchesType && matchesFormat
  })

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
                  <p className="text-gray-600 mt-2">Generate and download business reports</p>
                </div>
                <Button>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate New Report
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                  <p className="text-sm text-green-600 mt-1">+3 this month</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
                  <p className="text-sm text-green-600 mt-1">+2 from last month</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Storage Used</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">45 MB</p>
                  <p className="text-sm text-blue-600 mt-1">12% of quota</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Downloads</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
                  <p className="text-sm text-green-600 mt-1">+23 this week</p>
                </div>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex gap-2">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="sales">Sales</option>
                    <option value="revenue">Revenue</option>
                    <option value="customers">Customers</option>
                    <option value="inventory">Inventory</option>
                  </select>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Formats</option>
                    <option value="pdf">PDF</option>
                    <option value="csv">CSV</option>
                    <option value="excel">Excel</option>
                  </select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </Card>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(report.type)}
                      <div>
                        <h3 className="font-semibold text-gray-900">{report.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{report.type} Report</p>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Format:</span>
                      <span className="font-medium text-gray-900 uppercase">{report.format}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium text-gray-900">{report.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Generated:</span>
                      <span className="font-medium text-gray-900">{report.lastGenerated}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Scheduled Reports */}
            <div className="mt-8">
              <Card title="Scheduled Reports" subtitle="Automatically generated reports">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Weekly Sales Summary</h4>
                        <p className="text-sm text-gray-500">Every Monday at 9:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-600 font-medium">Active</span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Monthly Revenue Report</h4>
                        <p className="text-sm text-gray-500">First day of each month</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-600 font-medium">Active</span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 