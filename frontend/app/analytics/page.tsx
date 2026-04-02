'use client'

import { motion } from 'framer-motion'
import { DownloadCloud, Filter, TrendingUp, Calendar } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const callVolumeData = [
  { day: 'Mon', calls: 120, duration: 4200 },
  { day: 'Tue', calls: 150, duration: 4500 },
  { day: 'Wed', calls: 180, duration: 5100 },
  { day: 'Thu', calls: 165, duration: 4800 },
  { day: 'Fri', calls: 210, duration: 5400 },
  { day: 'Sat', calls: 95, duration: 3600 },
  { day: 'Sun', calls: 85, duration: 3200 },
]

const agentPerformance = [
  { name: 'Agent 1', calls: 120, rating: 4.8, satisfaction: 95 },
  { name: 'Agent 2', calls: 105, rating: 4.6, satisfaction: 92 },
  { name: 'Agent 3', calls: 140, rating: 4.9, satisfaction: 98 },
  { name: 'Agent 4', calls: 98, rating: 4.5, satisfaction: 88 },
]

const callTypeDistribution = [
  { name: 'Support', value: 45 },
  { name: 'Sales', value: 30 },
  { name: 'Inquiry', value: 15 },
  { name: 'Complaint', value: 10 },
]

const COLORS = ['#0ea5e9', '#06b8a6', '#f59e0b', '#ef4444']

export default function Analytics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Analytics & Reports</h1>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2">
              <DownloadCloud className="w-5 h-5" />
              Export Report
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last 7 Days
            </button>
            <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Metrics */}
        <motion.div 
          className="grid md:grid-cols-4 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: 'Total Calls', value: '1,253', change: '+12%' },
            { label: 'Avg Duration', value: '4m 32s', change: '+5%' },
            { label: 'Customer Satisfaction', value: '4.7/5', change: '+3%' },
            { label: 'Agent Utilization', value: '87%', change: '+8%' },
          ].map((metric, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-slate-400 text-sm mb-2">{metric.label}</p>
              <div className="flex justify-between items-end">
                <p className="text-2xl font-bold">{metric.value}</p>
                <span className="text-green-400 text-sm">{metric.change}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Call Volume & Duration */}
          <motion.div 
            className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Weekly Call Volume & Duration
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={callVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Bar dataKey="calls" fill="#0ea5e9" name="Calls" />
                <Bar dataKey="duration" fill="#06b8a6" name="Avg Duration (sec)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Call Type Distribution */}
          <motion.div 
            className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Call Type Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={callTypeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {callTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Agent Performance Table */}
        <motion.div 
          className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">Agent Performance Ranking</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Agent</th>
                  <th className="px-4 py-3 text-center font-semibold">Calls Handled</th>
                  <th className="px-4 py-3 text-center font-semibold">Rating</th>
                  <th className="px-4 py-3 text-center font-semibold">Satisfaction</th>
                  <th className="px-4 py-3 text-right font-semibold">Trend</th>
                </tr>
              </thead>
              <tbody>
                {agentPerformance.map((agent, idx) => (
                  <motion.tr 
                    key={idx}
                    className="border-b border-slate-700/50 hover:bg-slate-700/50 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold">
                          {idx + 1}
                        </div>
                        {agent.name}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">{agent.calls}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-green-400">{agent.rating}⭐</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="w-32 bg-slate-600/50 rounded-full h-2 mx-auto">
                        <motion.div 
                          className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${agent.satisfaction}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right text-green-400">↑ 5%</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
