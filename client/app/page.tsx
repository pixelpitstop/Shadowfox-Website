"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Design1 from "@/Assets/Design1.png"
import Design2 from "@/Assets/Design2.png"
import Design3 from "@/Assets/Design3.png"
import Design4 from "@/Assets/Design4.png"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const carouselImages = [
   Design1,
   Design2,
   Design3,
   Design4
]

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-900/80 border-b border-purple-500/20 transition-all duration-500">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-3xl font-black text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Shadowfox.
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg font-semibold hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-lg font-semibold hover:text-purple-400 transition-all duration-300 hover:scale-105">
                <span>Programs</span>
                <ChevronDown className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800/95 backdrop-blur-xl border-purple-500/20">
                <DropdownMenuItem>
                  <Link href="/internships" className="text-white hover:text-purple-400 font-medium">
                    Internships
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/bootcamps" className="text-white hover:text-purple-400 font-medium">
                    Bootcamps
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/testimonials"
              className="text-lg font-semibold hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              Testimonials
            </Link>
            <a
              href="#faqs"
              className="text-lg font-semibold hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              FAQ's
            </a>
            <a
              href="#contact-us"
              className="text-lg font-semibold hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-32 pt-58">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-purple-400 text-lg font-bold uppercase tracking-wider mb-6 animate-pulse">
              CREATIVE MINDS, CREATIVE WORKS
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                We develop{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  amazing websites
                </span>{" "}
                for your business.
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed font-medium">
                At Shadowfox, we create fast, modern, and mobile-friendly websites designed to grow your business. From
                idea to launch, we turn your vision into reality.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-7 rounded-3xl text-2xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 group">
                Get Started
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Enhanced Sliding Carousel */}
            <div
              className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10"></div>
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((src, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <Image src={src || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-purple-400 scale-125" : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-pink-600/20 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-white group-hover:text-purple-300 transition-colors duration-300">
                Future Concept.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                We create modern, innovative solutions with a complete focus on your business goals.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-pink-600/20 via-purple-500/10 to-purple-600/20 p-10 rounded-3xl border border-purple-500/30 hover:border-pink-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-white group-hover:text-pink-300 transition-colors duration-300">
                The Big Idea.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                Creating powerful digital experiences that drive your business forward.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-purple-600/20 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-white group-hover:text-purple-300 transition-colors duration-300">
                Creative Solutions
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                Innovative ideas combined with cutting-edge digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black mb-10">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  About
                </span>{" "}
                <span className="text-purple-400">Us.</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-xl font-medium">
                At Shadowfox, we are passionate about building stunning, high-performance websites that help businesses
                thrive in the digital landscape. Our team of skilled developers and designers brings years of experience
                and a deep understanding of tech trends. Our internship program offers hands-on experience with
                real-world projects to empower aspiring developers and designers to grow their skills and advance their
                careers.
              </p>
            </div>
            <div className="space-y-8">
              <div className="group bg-gradient-to-r from-purple-600/30 to-purple-500/20 p-8 rounded-2xl border border-purple-500/40 hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-black mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  Custom Web <span className="text-purple-400">Experiences</span>
                </h3>
              </div>
              <div className="group bg-gradient-to-r from-pink-600/30 to-purple-500/20 p-8 rounded-2xl border border-purple-500/40 hover:border-pink-400/70 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-black mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  Digital <span className="text-purple-400">Solutions</span>
                </h3>
              </div>
              <div className="group bg-gradient-to-r from-purple-600/30 to-pink-500/20 p-8 rounded-2xl border border-purple-500/40 hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-black mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  Agile <span className="text-purple-400">Experts</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Past Works */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-16">
            Our Past <span className="text-purple-400">Works.</span>
          </h2>
          <div className="group bg-gradient-to-br from-gray-800/60 to-purple-900/30 rounded-xl p-10 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm shadow-2xl justify-center">
            <div className="overflow-hidden rounded-2xl mb-8">
              <Image src="/Coffeedesign.png"
                alt="Tanjore Coffee Website"
                width={300}
                height={300}
                className="rounded-xl transition-transform duration-500 group-hover:scale-100 "
              />
            </div>
            <h3 className="text-3xl font-black mb-6 group-hover:text-purple-300 transition-colors duration-300">
              Client - <span className="text-purple-400">Tanjore Coffee Website</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              We designed a warm, elegant, and user-friendly website for Tanjore Coffee, capturing the brand's rich
              South Indian heritage. The site blends traditional aesthetics with modern design, offering a seamless
              experience that brings the essence of their coffee culture to life online.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Client Stories */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">
            Our Client <span className="text-purple-400">Stories.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group bg-gradient-to-br from-gray-800/60 to-purple-900/30 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-6 shadow-lg"></div>
                <div>
                  <h4 className="text-xl font-black group-hover:text-purple-300 transition-colors duration-300">
                    Ravi Kishore
                  </h4>
                  <p className="text-purple-400 font-semibold">Owner of Medi Hemp</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                ShadowFox transformed our website into a stunning, modern, and highly user-friendly platform. From the
                very beginning, their team was attentive, creative, and incredibly professional.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-gray-800/60 to-pink-900/30 p-10 rounded-3xl border border-purple-500/30 hover:border-pink-400/60 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full mr-6 shadow-lg"></div>
                <div>
                  <h4 className="text-xl font-black group-hover:text-pink-300 transition-colors duration-300">
                    Abhishek
                  </h4>
                  <p className="text-purple-400 font-semibold">CEO Of World Communications</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                We are incredibly pleased with the e-commerce website that ShadowFox built for us. The platform is not
                only visually stunning but also incredibly intuitive and easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faqs"className="px-6 py-24 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            Frequently Asked <span className="text-purple-400">Questions.</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem
              value="item-1"
              className="bg-gradient-to-r from-gray-800/60 to-purple-900/30 rounded-2xl border border-purple-500/30 px-8 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-xl font-bold hover:text-purple-400 transition-colors duration-300">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg font-medium">
                We offer web development, UI/UX design, mobile app development, and digital marketing services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-gradient-to-r from-gray-800/60 to-purple-900/30 rounded-2xl border border-purple-500/30 px-8 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-xl font-bold hover:text-purple-400 transition-colors duration-300">
                How long does it take to build a website?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg font-medium">
                Typically 2-8 weeks depending on complexity and requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-gradient-to-r from-gray-800/60 to-purple-900/30 rounded-2xl border border-purple-500/30 px-8 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-xl font-bold hover:text-purple-400 transition-colors duration-300">
                Do you provide website hosting and domain registration?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg font-medium">
                Yes, we provide complete hosting solutions and domain registration services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-gradient-to-r from-gray-800/60 to-purple-900/30 rounded-2xl border border-purple-500/30 px-8 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-xl font-bold hover:text-purple-400 transition-colors duration-300">
                How do I get a quote for my project?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg font-medium">
                Contact us through our website or email with your project details for a free quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-16 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-6 text-purple-400">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/privacypolicy"
                    className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/t&c"
                    className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund"
                    className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
                  >
                    Refund and Cancellation
                  </Link>
                </li>
                <li>
                  <Link
                  href="/verify"
                  className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"> 
                  Verify
                  </Link>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 text-purple-400">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/shadowfoxinfo/"
                  className="text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
            <div>
              <h3 id="contact-us" className="text-2xl font-black mb-6 text-purple-400">Contact Us</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg font-medium">info@shadowfox.in</p>
                <p className="text-lg font-medium">+918095778765</p>
                <p className="text-lg font-medium">8501 3A 13th Main Road, Anna Nagar West, Chennai - 600040.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-16 pt-10 flex justify-between items-center">
            <p className="text-gray-400 text-lg font-medium">© 2025 All Reserved By ShadowFox</p>
            <Link
              href="#"
              className="text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors duration-300"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
