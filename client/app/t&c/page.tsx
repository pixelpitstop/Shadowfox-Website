import Link from "next/link";

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-2xl text-gray-300 font-medium">
            Last updated: <span className="text-purple-400 font-bold">28th July 2025</span>
          </p>
        </div>
      </header>

      {/* Terms Content */}
      <main className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-16 text-lg leading-relaxed text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">1. Introduction</h2>
            <p>1.1 Welcome to ShadowFox Virtual Internship Program. By participating, you agree to comply with these terms.</p>
            <p>1.2 ShadowFox reserves the right to modify these terms at any time. Interns are responsible for staying updated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">2. Eligibility</h2>
            <p>2.1 Interns must meet the skills and qualifications required for each level of the internship program.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">3. Levels and Progression</h2>
            <p>3.1 ShadowFox offers multiple levels. Completion of one is required before progressing to the next.</p>
            <p>3.2 Criteria for completion will be clearly communicated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">4. Goodies and Swags</h2>
            <p>4.1 Interns who complete a level may receive goodies or swags.</p>
            <p>4.2 ShadowFox may modify the types offered.</p>
            <p>4.3 Distribution depends on availability; delays may occur due to unforeseen issues.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">5. Code of Conduct</h2>
            <p>5.1 Professional conduct is expected throughout.</p>
            <p>5.2 Harassment, discrimination, or inappropriate behavior will lead to termination.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">6. Intellectual Property</h2>
            <p>6.1 Work completed during the internship may belong to ShadowFox.</p>
            <p>6.2 Interns grant ShadowFox permission to use submitted work for promotion or education.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">7. Confidentiality</h2>
            <p>7.1 Interns must keep all confidential information private.</p>
            <p>7.2 Confidentiality obligations continue beyond the internship duration.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">8. Termination</h2>
            <p>8.1 Violation of terms or misconduct may result in termination.</p>
            <p>8.2 Interns may leave the program anytime by providing written notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">9. Documentation and Delivery Fees</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>A delivery fee is applicable for swags and certificates. Payment is optional.</li>
              <li>Third-party couriers manage delivery; ShadowFox isn’t liable for damage or delays.</li>
              <li>Fraudulent task submissions result in termination and partial refund.</li>
              <li>No refunds for incorrect form submissions or payment mistakes.</li>
              <li>Refunds are only issued if delivery fails due to courier issues (not intern error).</li>
              <li>Packages sent to universities are the intern’s responsibility once marked 'delivered'.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">10. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All program payments must be made before the start date.</li>
              <li>Payments accepted via bank transfer, cards, or digital wallets.</li>
              <li>Unpaid dues can result in suspension or termination.</li>
              <li>Refunds are only available as per specific policy clauses.</li>
              <li>For payment disputes, contact ShadowFox directly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">11. Disclaimer</h2>
            <p>11.1 ShadowFox is not liable for technical issues or data loss during the program.</p>
            <p>11.2 The program is provided "as is" without any warranties.</p>
          </section>

          <section>
            <p className="mt-8 text-xl text-purple-200 font-semibold">
              By participating in any of our programs, you confirm that you have read, understood, and agree to abide by these terms.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-16 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 text-lg font-medium">© 2025 All Rights Reserved by ShadowFox</p>
        </div>
      </footer>
    </div>
  );
}
