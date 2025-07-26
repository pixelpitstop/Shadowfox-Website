import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-900/80 border-b border-purple-500/20">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-3xl font-black text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Shadowfox.
          </Link>
          <div className="hidden md:flex items-center space-x-8">
          </div>
        </div>
      </nav>

      {/* Enhanced Header */}
      <section className="px-6 py-32 pt-40">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          <h1 className="text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Testimonies.
            </span>
          </h1>
          <p className="text-3xl text-gray-300 font-medium">
            What our <span className="text-purple-400 font-black">client's</span> say....
          </p>
        </div>
      </section>

      {/* Enhanced Bento Grid Testimonials */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto">
            {/* Large testimonial - spans 2 columns */}
            <div className="lg:col-span-2 group bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-pink-600/20 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm">
              <p className="text-xl leading-relaxed mb-8 font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                ShadowFox transformed our website into a stunning, modern, and highly user-friendly platform. From the
                very beginning, their team was attentive, creative, and incredibly professional. They took the time to
                understand our brand, our goals, and our audience—and delivered a design that exceeded all expectations.
                Our clients have given us fantastic feedback on the new look and feel of the site, and we've seen a
                remarkable increase in user engagement, time on site, and overall sales since the launch.
              </p>
            </div>

            {/* Small testimonial with profile */}
            <div className="group bg-gradient-to-br from-gray-800/60 to-purple-900/30 p-10 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-black text-xl group-hover:text-purple-300 transition-colors duration-300">
                    Ravi Kishore
                  </h4>
                  <p className="text-purple-400 font-bold text-lg">Owner of Medi Hemp</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-medium text-lg group-hover:text-gray-200 transition-colors duration-300">
                Ravi Kishore is the visionary owner of Medi Hemp, a company dedicated to providing high-quality, organic
                hemp-based wellness products. With a strong focus on natural healing and sustainable practices, Ravi
                leads Medi Hemp in delivering trusted solutions that promote health and well-being.
              </p>
            </div>

            {/* Medium testimonial */}
            <div className="group bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-pink-600/20 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm">
              <p className="text-xl leading-relaxed mb-8 font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                We are incredibly pleased with the e-commerce website that ShadowFox built for us. The platform is not
                only visually stunning but also incredibly intuitive and easy to navigate—for both our team and our
                customers. The design perfectly reflects our brand identity, and the seamless user experience has played
                a major role in boosting our online visibility, customer satisfaction, and overall sales performance.
              </p>
              <p className="text-lg text-purple-400 font-bold group-hover:text-purple-300 transition-colors duration-300">
                ShadowFox's attention to detail, responsiveness, and customer-first approach truly set them apart.
              </p>
            </div>

            {/* Large testimonial with profile */}
            <div className="lg:col-span-2 group bg-gradient-to-br from-gray-800/60 to-purple-900/30 p-10 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <h4 className="font-black text-2xl group-hover:text-pink-300 transition-colors duration-300">
                      Abhishek
                    </h4>
                    <p className="text-purple-400 font-bold text-lg">CEO OF World Communications</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-medium text-lg group-hover:text-gray-200 transition-colors duration-300">
                    Abhishek is the dynamic CEO of World Communications, a leading firm specializing in innovative
                    telecom and digital communication solutions. With a forward-thinking mindset and a strong focus on
                    technology, Abhishek drives the company's mission to connect people and businesses through reliable,
                    cutting-edge communication services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-16 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
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
