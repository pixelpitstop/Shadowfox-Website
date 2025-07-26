"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Users } from "lucide-react"

export default function AdminPanel() {
  const [bootcamps, setBootcamps] = useState([
    { id: 1, name: "Full Stack Development", hours: 150, lessons: 120, enabled: true },
    { id: 2, name: "UI/UX Design", hours: 150, lessons: 120, enabled: true },
    { id: 3, name: "Data Science", hours: 150, lessons: 120, enabled: false },
  ])

  const [monthlyStats, setMonthlyStats] = useState({ count: 0, byProgram: {} })

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('/api/admin/bootcamp-data')
      const data = await res.json()
      setMonthlyStats(data)
    }

    fetchStats()
  }, [])

  const toggleBootcamp = (id: number) => {
    setBootcamps((prev) =>
      prev.map((bootcamp) => (bootcamp.id === id ? { ...bootcamp, enabled: !bootcamp.enabled } : bootcamp))
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-900/80 border-b border-purple-500/20">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-3xl font-black text-purple-400 hover:text-purple-300 transition-colors duration-300">Shadowfox.</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg font-semibold hover:text-purple-400">Home</Link>
            <Link href="/why-us" className="text-lg font-semibold hover:text-purple-400">Why Us</Link>
            <Link href="/careers" className="text-lg font-semibold hover:text-purple-400">Careers</Link>
            <Link href="/testimonials" className="text-lg font-semibold hover:text-purple-400">Testimonials</Link>
            <Link href="/faqs" className="text-lg font-semibold hover:text-purple-400">FAQ's</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 py-20 pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black mb-6 text-gray-400">ShadowFox</h1>
          <p className="text-purple-400 text-2xl font-bold mb-4">LEARN • CREATE • LEAD</p>
          <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Admin Panel</h2>
        </div>
      </section>

      {/* Main Panel */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Overview Card */}
          <div className="mb-10">
            <div className="group bg-gradient-to-r from-purple-600/30 to-purple-500/20 p-8 rounded-3xl border border-purple-500/40">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-black text-purple-300">Overview</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full shadow-lg"></div>
                  <div>
                    <p className="font-black text-xl text-purple-300">Aakash</p>
                    <p className="text-lg text-purple-400 font-semibold">administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-purple-700 p-6 rounded-xl text-center shadow-md">
              <p className="text-lg font-bold text-purple-200">Total Bootcamp Enrollments</p>
              <p className="text-3xl font-black text-white mt-2">{monthlyStats.byProgram["Bootcamp"] || 0}</p>
            </div>
            <div className="bg-pink-600 p-6 rounded-xl text-center shadow-md">
              <p className="text-lg font-bold text-pink-200">Total Internship Enrollments</p>
              <p className="text-3xl font-black text-white mt-2">{monthlyStats.byProgram["Internship"] || 0}</p>
            </div>
          </div>

          {/* Bootcamp Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bootcamps.map((bootcamp) => (
              <div
                key={bootcamp.id}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-3xl border border-purple-500/30"
              >
                <div className="h-40 bg-gray-700/30 rounded-2xl mb-6"></div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-black text-xl text-purple-300">{bootcamp.name}</h4>
                    <p className="text-lg text-gray-400">{bootcamp.hours} hours</p>
                  </div>
                  <Switch
                    checked={bootcamp.enabled}
                    onCheckedChange={() => toggleBootcamp(bootcamp.id)}
                    className="scale-125"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-lg mb-6">
                  <p className="text-gray-400 font-semibold">
                    {monthlyStats.byProgram[bootcamp.name] || 0} Students
                  </p>
                  <p className="text-gray-400 font-semibold">{bootcamp.lessons}+ lessons</p>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    bootcamp.enabled
                      ? "bg-green-600/20 text-green-400 border border-green-500/30"
                      : "bg-red-600/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {bootcamp.enabled ? "ACTIVE" : "DISABLED"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-16 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 text-lg font-medium">© 2025 All Reserved By ShadowFox</p>
          <Link href="#" className="text-purple-400 hover:text-purple-300 text-lg font-medium">LinkedIn</Link>
        </div>
      </footer>
    </div>
  )
}
