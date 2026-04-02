'use client'

import { motion } from 'framer-motion'
import { Phone, Users, Clock, TrendingUp, Activity, Settings } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const mockCallData = [
  { time: '00:00', calls: 45 },
  { time: '04:00', calls: 32 },
  { time: '08:00', calls: 78 },
  { time: '12:00', calls: 92 },
  { time: '16:00', calls: 85 },
  { time: '20:00', calls: 65 },
]

const mockAgentData = [
  { name: 'Agent 1', calls: 45, rating: 4.8 },
  { name: 'Agent 2', calls: 38, rating: 4.6 },
  { name: 'Agent 3', calls: 52, rating: 4.9 },
  { name: 'Agent 4', calls: 41, rating: 4.7 },
]

const COLORS = ['#0ea5e9', '#06b6d4', '#14b8a6', '#f59e0b']

export default function Dashboard() {
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

  const stats = [
    { icon: Phone, label: 'Active Calls', value: '12', color: 'from-blue-500 to-cyan-400' },
    { icon: Users, label: 'Online Agents', value: '8', color: 'from-green-500 to-emerald-400' },
    { icon: Clock, label: 'Avg Duration', value: '4m 32s', color: 'from-purple-500 to-pink-400' },
    { icon: TrendingUp, label: 'Today Calls', value: '342', color: 'from-orange-500 to-red-400' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">GasCall Dashboard</h1>
              <p className="text-sm text-slate-400">Real-time call management</p>
            </div>
          </div>
          <button className="p-2 hover:bg-slate-800 rounded-lg transition-all">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div className="text-sm text-green-400">↑ 12%</div>
                </div>
                <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Line Chart */}
          <motion.div 
            className="lg:col-span-2 p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">Call Volume Today</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockCallData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Line 
                  type="monotone" 
                  dataKey="calls" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  dot={{ fill: '#0ea5e9', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div 
            className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Agent Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockAgentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name }) => name}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="calls"
                >
                  {mockAgentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Agent Performance */}
        <motion.div 
          className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Agent Performance
          </h2>
          <div className="space-y-4">
            {mockAgentData.map((agent, idx) => (
              <motion.div 
                key={idx}
                className="p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">{agent.name}</p>
                    <p className="text-sm text-slate-400">{agent.calls} calls handled</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-400">{agent.rating}⭐</p>
                  </div>
                </div>
                <div className="w-full bg-slate-600/50 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(agent.calls / 52) * 100}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
