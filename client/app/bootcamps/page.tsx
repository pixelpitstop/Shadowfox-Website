'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useRouter } from 'next/navigation'

const bootcamps = [
  {
    id: 1,
    name: "Full Stack Development",
    description: "Master both frontend and backend development with modern technologies.",
    duration: "10 weeks",
    sessions: 70,
    fee: 4999,
    instructor: "Mr.Dhanush A",
    rating: 4.8,
    reviews: 650,
    enabled: false,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "UI/UX Design",
    description: "Create beautiful and user-friendly digital experiences.",
    duration: "8 weeks",
    sessions: 50,
    fee: 3999,
    instructor: "Ms. Kavya",
    rating: 4.9,
    reviews: 420,
    enabled: false,
    tags: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 3,
    name: "Data Science",
    description: "Transform Data into Insights – Solve Real-World Problems.",
    duration: "10 weeks",
    sessions: 70,
    fee: 4999,
    instructor: "Mr Arun Kumar",
    rating: 4.7,
    reviews: 650,
    enabled: false,
    tags: ["Python", "Machine Learning", "Analytics"],
  },
]

export default function BootcampsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          Shadowfox.
        </Link>
      </nav>

      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-purple-400">Bootcamps</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Intensive Learning Programs</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bootcamps.map((bootcamp) => (
              <div key={bootcamp.id} className="relative">
                <div
                  className={`bg-gray-800/50 p-8 rounded-2xl border transition-all duration-300 transform hover:scale-[1.02] ${
                    bootcamp.enabled
                      ? "border-purple-500/30 hover:border-purple-400/50"
                      : "border-gray-600/30 opacity-60"
                  }`}
                >
                  <div className="h-48 bg-gray-700/30 rounded-xl mb-6 overflow-hidden">
                    <Image
                      src="/Bootcamps.png"
                      alt={bootcamp.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>


                  <div className="flex items-center mb-4">
                    <div className="flex mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(bootcamp.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{bootcamp.reviews} reviews</span>
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{bootcamp.instructor}</h4>
                      <p className="text-sm text-gray-400">Instructor</p>
                    </div>
                  </div>

                  {/* Bootcamp Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{bootcamp.name}</h3>
                    <p className="text-gray-300">{bootcamp.description}</p>

                    <div className="bg-gray-700/50 p-4 rounded-xl space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration:</span>
                        <span>{bootcamp.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sessions:</span>
                        <span>{bootcamp.sessions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tags:</span>
                        <span className="text-purple-400">{bootcamp.tags.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fee:</span>
                        <span className="text-xl font-bold">₹{bootcamp.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Certificates:</span>
                        <span>Yes</span>
                      </div>
                    </div>

                    {bootcamp.enabled ? (
                      <Button
                        onClick={() => router.push('/bootcamps/form')}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 transition-all duration-300 transform hover:scale-105"
                      >
                        Enroll Now
                      </Button>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-2xl font-bold text-gray-400">-CURRENTLY UNAVAILABLE-</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2025 All Reserved By ShadowFox</p>
            <Link href="https://www.linkedin.com/company/shadowfoxinfo/" className="text-purple-400 hover:text-purple-300">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
