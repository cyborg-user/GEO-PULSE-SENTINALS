'use client'

import { useEffect, useState } from 'react'
import {
  Shield,
  Wifi,
  Satellite,
  Bell,
  Radio,
  Activity,
} from 'lucide-react'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour12: false,
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
})

const STATUS_INDICATORS = [
  { label: 'DATA FEED', icon: Wifi, status: 'active' },
  { label: 'SAT LINK', icon: Satellite, status: 'active' },
  { label: 'SIGINT', icon: Radio, status: 'active' },
  { label: 'ANALYTICS', icon: Activity, status: 'active' },
] as const

export default function DashboardHeader() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(timeFormatter.format(now))
      setDate(dateFormatter.format(now))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-4 bg-sentinel-surface border-b border-border relative z-50">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-8 h-8">
          <Shield className="w-6 h-6 text-primary" />
          <div className="absolute inset-0 rounded-full animate-pulse-dot" style={{ boxShadow: '0 0 8px rgba(0, 229, 255, 0.3)' }} />
        </div>
        <div className="flex flex-col leading-none">
          <h1 className="text-sm font-bold tracking-[0.3em] text-primary font-[var(--font-orbitron)]">
            GEOPULSE SENTINEL
          </h1>
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest">
            GLOBAL INTELLIGENCE MONITORING SYSTEM
          </span>
        </div>
      </div>

      {/* Center: Status Indicators */}
      <div className="hidden md:flex items-center gap-6">
        {STATUS_INDICATORS.map(({ label, icon: Icon, status }) => (
          <StatusBadge key={label} icon={<Icon className="w-3 h-3" />} label={label} status={status} />
        ))}
      </div>

      {/* Right: Time + Alerts */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-sentinel-red animate-pulse-dot" />
        </div>
        <div className="flex flex-col items-end leading-none">
          <span className="text-sm font-mono text-primary tracking-wider animate-data-flicker">
            {time}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
            {date} UTC
          </span>
        </div>
      </div>
    </header>
  )
}

const STATUS_COLORS = {
  active: { bg: 'bg-sentinel-green', text: 'text-sentinel-green' },
  warning: { bg: 'bg-sentinel-amber', text: 'text-sentinel-amber' },
  offline: { bg: 'bg-sentinel-red', text: 'text-sentinel-red' },
} as const

function StatusBadge({
  icon,
  label,
  status,
}: {
  icon: React.ReactNode
  label: string
  status: 'active' | 'warning' | 'offline'
}) {
  const { bg, text } = STATUS_COLORS[status]

  return (
    <div className="flex items-center gap-1.5">
      <span className="relative flex h-1.5 w-1.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${bg}`} />
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${bg}`} />
      </span>
      <span className={text}>{icon}</span>
      <span className="text-[10px] font-mono text-muted-foreground tracking-wider">{label}</span>
    </div>
  )
}
