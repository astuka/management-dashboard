import React from 'react'
import { Card } from '../ui/Card'

interface ChartCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

export function ChartCard({ title, subtitle, children, className, action }: ChartCardProps) {
  return (
    <Card title={title} subtitle={subtitle} action={action} className={className}>
      <div className="h-64">
        {children}
      </div>
    </Card>
  )
} 