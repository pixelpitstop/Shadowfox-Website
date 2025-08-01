import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-900/80 border-b border-purple-500/20">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-3xl font-black text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Shadowfox.
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-40 pb-12 px-6">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-2xl text-gray-300 font-medium">
            Last updated: <span className="text-purple-400 font-bold">28th July 2025</span>
          </p>
        </div>
      </header>

      {/* Privacy Content */}
      <main className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-16 text-lg leading-relaxed text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">1. Introduction</h2>
            <p>
              Welcome to ShadowFox. We are committed to protecting your personal information and your right to privacy.
              If you have any questions or concerns about this Privacy Policy, please contact us at:{" "}
              <span className="text-purple-400">info@shadowfox.in</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us, such as when:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Contact information</li>
              <li>Demographic information</li>
              <li>Payment details (e.g., credit card info)</li>
              <li>Educational information (records, degrees, institutions)</li>
              <li>Application form or survey responses</li>
              <li>Any other information requested by us or provided by you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Fulfill and manage your requests</li>
              <li>Facilitate account creation and logins</li>
              <li>Send administrative information</li>
              <li>Improve our services and website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">4. Sharing Your Information</h2>
            <p>We may share your information in the following scenarios:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>With third-party service providers who help operate our services</li>
              <li>In response to legal requests</li>
              <li>To protect ShadowFox’s rights and property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">5. Data Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards to protect your personal information
              against unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">6. Your Privacy Rights</h2>
            <p>You may have the following rights depending on your jurisdiction:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Access:</strong> Request copies of your personal data.</li>
              <li><strong>Rectification:</strong> Request corrections to inaccurate information.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data.</li>
              <li><strong>Restriction:</strong> Request limitations on how we process your data.</li>
              <li><strong>Objection:</strong> Object to how your data is being processed.</li>
              <li><strong>Portability:</strong> Request transfer of your data to another organization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. Changes will be reflected by posting the new version on
              this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">8. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:{" "}
              <span className="text-purple-400">info@shadowfox.in</span>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-16 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 text-lg font-medium">© 2025 All Rights Reserved by ShadowFox</p>
          <Link
            href="#"
            className="text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors duration-300"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
}
