'use client'

import { motion } from 'framer-motion'
import { Settings, Save, Key, Bell, Users, Shield, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Settings() {
  const [savedMessage, setSavedMessage] = useState('')

  const handleSave = () => {
    setSavedMessage('Settings saved successfully!')
    setTimeout(() => setSavedMessage(''), 3000)
  }

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

  const settingsSections = [
    {
      icon: Key,
      title: 'API Configuration',
      description: 'Manage API keys and authentication',
      settings: [
        { label: 'API Key', value: '••••••••••••••••' },
        { label: 'Secret Key', value: '••••••••••••••••' },
      ],
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure notification preferences',
      settings: [
        { label: 'Email Notifications', type: 'toggle', value: true },
        { label: 'SMS Alerts', type: 'toggle', value: false },
        { label: 'Push Notifications', type: 'toggle', value: true },
      ],
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Manage team members and permissions',
      settings: [
        { label: 'Add New User', type: 'button' },
        { label: 'Team Members', value: '8 active' },
      ],
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security and privacy settings',
      settings: [
        { label: 'Two-Factor Authentication', type: 'toggle', value: false },
        { label: 'Password Reset', type: 'button' },
        { label: 'Active Sessions', value: '2 sessions' },
      ],
    },
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
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>

        {/* Success Message */}
        {savedMessage && (
          <motion.div 
            className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-3 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            ✓ {savedMessage}
          </motion.div>
        )}
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Settings Sections */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {settingsSections.map((section, idx) => {
            const Icon = section.icon
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl"
                whileHover={{ borderColor: 'rgba(100, 116, 139, 0.5)' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-slate-400 text-sm">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {section.settings.map((setting, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all">
                      <label className="text-sm font-medium">{setting.label}</label>
                      {setting.type === 'toggle' ? (
                        <motion.button 
                          className={`w-10 h-6 rounded-full transition-all ${
                            setting.value ? 'bg-green-500' : 'bg-slate-600'
                          } relative`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div 
                            className="absolute top-1 w-4 h-4 bg-white rounded-full"
                            animate={{ x: setting.value ? 20 : 2 }}
                          />
                        </motion.button>
                      ) : setting.type === 'button' ? (
                        <motion.button 
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {setting.label === 'Add New User' ? 'Add' : 'Reset'}
                        </motion.button>
                      ) : (
                        <span className="text-slate-300 text-sm">{setting.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Danger Zone */}
        <motion.div 
          className="p-6 bg-red-500/10 border border-red-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-400">Danger Zone</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-red-500/20 rounded-lg">
              <div>
                <p className="font-medium">Logout</p>
                <p className="text-sm text-red-300">Sign out from all devices</p>
              </div>
              <motion.button 
                className="px-4 py-2 border border-red-500 text-red-400 rounded hover:bg-red-500/20 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </motion.button>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-500/20 rounded-lg">
              <div>
                <p className="font-medium">Delete Account</p>
                <p className="text-sm text-red-300">Permanently delete your account and data</p>
              </div>
              <motion.button 
                className="px-4 py-2 border border-red-500 text-red-400 rounded hover:bg-red-500/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
