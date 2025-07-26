// components/InternshipsPage.tsx (or wherever your component is located)
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"

export default function InternshipsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    yearOfStudy: "",
    address: "",
    fieldOfStudy: "",
    experience: "",
    cgpa: "",
    linkedin: "",
    howHeard: "",
    duration: "",
    firstInternship: "",
    goals: "",
    skills: "",
    interests: [],
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsSubmitting(true);
  setSubmissionStatus(null);

  // Validation
  const requiredFields = [
    "fullName", "email", "phone", "school",
    "yearOfStudy", "address", "fieldOfStudy", "agreeTerms"
  ];

  const hasMissingFields = requiredFields.some((field) =>
    formData[field as keyof typeof formData] === "" ||
    formData[field as keyof typeof formData] === false
  );

  if (hasMissingFields) {
    setSubmissionStatus({
      type: "error",
      message: "Please fill in all required fields and agree to the terms.",
    });
    setIsSubmitting(false);
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/api/submit-bootcamp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Raw Error Response:", errorText);
      throw new Error("Server responded with an error");
    }

    const result = await res.json();
    console.log("Success:", result);

    setSubmissionStatus({
      type: "success",
      message: result.message || "Application submitted successfully!",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      school: "",
      yearOfStudy: "",
      address: "",
      fieldOfStudy: "",
      experience: "",
      cgpa: "",
      linkedin: "",
      howHeard: "",
      duration: "",
      firstInternship: "",
      goals: "",
      skills: "",
      interests: [],
      agreeTerms: false,
    });
  } catch (error: any) {
    console.error("Submission error:", error);
    setSubmissionStatus({
      type: "error",
      message: "Network error or server issue: " + error.message,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          Shadowfox.
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/why-us" className="hover:text-purple-400 transition-colors">
            Why Us
          </Link>
          <Link href="/testimonials" className="hover:text-purple-400 transition-colors">
            Testimonials
          </Link>
          <Link href="/faqs" className="hover:text-purple-400 transition-colors">
            FAQ's
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">What we offer?</h1>
          <p className="text-2xl text-purple-400 mb-8">Virtual Internships | Bootcamps</p>
          <div className="h-64 bg-gray-800/50 rounded-2xl border border-purple-500/20 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Virtual Internship Environment"
              width={400}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Shadowfox Bootcamp Program</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Join our immersive bootcamp programs to master in-demand tech skills through structured learning, expert mentorship, and hands-on projects. Whether you're a beginner or looking to level up, our bootcamps are designed to fast-track your career with real results.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6">What You’ll Do in a Shadowfox Bootcamp</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Learn modern tools and technologies used by top companies
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Attend live, mentor-led sessions and expert walkthroughs
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Build real-world applications and industry-grade projects
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Collaborate with peers in a dynamic, feedback-driven environment
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Complete weekly challenges and capstone assignments
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6">The Bootcamp Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Onboarding & Orientation</h4>
                    <p className="text-gray-300 text-sm">Kick off with a structured introduction to the platform, roadmap, and project expectations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-2"> Skill Foundation</h4>
                    <p className="text-gray-300 text-sm">Get personalized learning plans tailored to your experience level and bootcamp type (UI/UX, Full Stack, or Data Science)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Project Work</h4>
                    <p className="text-gray-300 text-sm">Apply your learning by building full-scale projects with mentor feedback and real-world scenarios.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Certification & Portfolio</h4>
                    <p className="text-gray-300 text-sm">Complete your bootcamp with an official certificate, GitHub contributions, and a polished portfolio to showcase to employers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center"> Bootcamp Registration Form </h2>

          <form onSubmit={handleSubmit} className="bg-gray-800/50 p-8 rounded-2xl border border-purple-500/20 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                  required // Added required attribute
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                  required // Added required attribute
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                  required // Added required attribute
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Current School/College *</label>
                <Input
                  value={formData.school}
                  onChange={(e) => handleInputChange("school", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                  required // Added required attribute
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Year of Study *</label>
                <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)} value={formData.yearOfStudy}>
                  <SelectTrigger className="bg-gray-700/50 border-purple-500/30">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st">1st Year</SelectItem>
                    <SelectItem value="2nd">2nd Year</SelectItem>
                    <SelectItem value="3rd">3rd Year</SelectItem>
                    <SelectItem value="4th">4th Year</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Field of Study *</label>
                <Input
                  value={formData.fieldOfStudy}
                  onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                  required // Added required attribute
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Address (Street, City, State, ZIP, Country) *</label>
              <Textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="bg-gray-700/50 border-purple-500/30"
                rows={3}
                required // Added required attribute
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Current CGPA</label>
                <Input
                  value={formData.cgpa}
                  onChange={(e) => handleInputChange("cgpa", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                <Input
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  className="bg-gray-700/50 border-purple-500/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Prior Internship or Work Experience</label>
              <Textarea
                value={formData.experience}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                className="bg-gray-700/50 border-purple-500/30"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">How did you hear about Shadowfox?</label>
                <Select onValueChange={(value) => handleInputChange("howHeard", value)} value={formData.howHeard}>
                  <SelectTrigger className="bg-gray-700/50 border-purple-500/30">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Batch of Bootcamp</label>
                <Select onValueChange={(value) => handleInputChange("duration", value)} value={formData.duration}>
                  <SelectTrigger className="bg-gray-700/50 border-purple-500/30">
                    <SelectValue placeholder="Select batch"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="2-months">2 Months</SelectItem>
                    <SelectItem value="3-months">3 Months</SelectItem>
                    <SelectItem value="6-months">6 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Is this your first bootcamp?</label>
              <Select onValueChange={(value) => handleInputChange("firstInternship", value)} value={formData.firstInternship}>
                <SelectTrigger className="bg-gray-700/50 border-purple-500/30">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                What do you hope to learn from this bootcamp?
              </label>
              <Textarea
                value={formData.goals}
                onChange={(e) => handleInputChange("goals", e.target.value)}
                className="bg-gray-700/50 border-purple-500/30"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                What projects or tech skills are you looking to build?
              </label>
              <Textarea
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                className="bg-gray-700/50 border-purple-500/30"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Areas of Interest (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Data Science",
                  "Cybersecurity",
                  "Python",
                  "Web Development",
                  "UI/UX Design",
                  "Mobile Development",
                ].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                    />
                    <label htmlFor={interest} className="text-sm">
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                required // Added required attribute
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions and consent to data usage for internship purposes
              </label>
            </div>

            {submissionStatus && (
              <div
                className={`p-4 rounded-md text-center ${
                  submissionStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}
              >
                {submissionStatus.message}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting} // Disable button during submission
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Interns Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800/50 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Amazing experience! I learned so much and worked on real projects that I can showcase in my
                  portfolio."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Student Name</p>
                    <p className="text-sm text-gray-400">College Name</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Partners */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Educational Networking</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 flex items-center justify-center"
              >
                <Image
                  src="/placeholder.svg?height=80&width=120"
                  alt={`Partner ${i}`}
                  width={120}
                  height={80}
                  className="opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What services do you offer?",
                a: "We offer web development, UI/UX design, and comprehensive internship programs.",
              },
              {
                q: "How long does it take to build a website?",
                a: "Typically 2-8 weeks depending on complexity and requirements.",
              },
              {
                q: "Do you provide hosting/domain registration?",
                a: "Yes, we provide complete hosting solutions and domain registration services.",
              },
              {
                q: "How do I get a quote?",
                a: "Contact us through our website or email with your project details for a free quote.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/faq" className="hover:text-purple-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-purple-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-purple-400">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="hover:text-purple-400">
                    Refund and Cancellation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/verify" className="hover:text-purple-400">
                    Verify
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <Link href="#" className="text-purple-400 hover:text-purple-300">
                LinkedIn
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>info@shadowfox.in</p>
                <p>+918095778765</p>
                <p>8501 3A 13th Main Road, Anna Nagar West, Chennai - 600040.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-400">© 2025 All Reserved By ShadowFox</p>
            <Link href="#" className="text-purple-400 hover:text-purple-300">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
