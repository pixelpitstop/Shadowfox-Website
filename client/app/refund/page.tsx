import Link from "next/link";

export default function RefundPolicyPage() {
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
            Refund & Cancellation Policy
          </h1>
          <p className="text-2xl text-gray-300 font-medium">
            Last updated: <span className="text-purple-400 font-bold">28th July 2025</span>
          </p>
        </div>
      </header>

      {/* Policy Content */}
      <main className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-16 text-lg leading-relaxed text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">1. Introduction</h2>
            <p>
              This Refund and Cancellation Policy outlines the conditions under which refunds and cancellations are
              handled for the services provided by ShadowFox. By enrolling in our programs, you agree to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">2. Refunds</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>2.1.1</strong> Refunds will be issued if a payment error occurs due to technical issues or if a
                payment is made in excess.
              </li>
              <li>
                <strong>2.1.2</strong> No refunds will be issued for services already initiated or completed.
              </li>
              <li>
                <strong>2.1.3</strong> In exceptional circumstances, refunds may be issued if ShadowFox is unable to
                deliver the agreed service.
              </li>
              <li>
                <strong>2.2</strong> Refund requests must be submitted in writing within 7 days of the payment date,
                including the reason and relevant transaction details.
              </li>
              <li>
                <strong>2.3</strong> Approved refunds will be processed within 14 business days to the original payment
                method.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">3. Cancellations</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>3.1</strong> Participants may cancel enrollment before the program start date. No refunds will be
                provided after the start date.
              </li>
              <li>
                <strong>3.2</strong> Written notice must be provided at least 7 days before the start date with full
                name, program details, and reason for cancellation.
              </li>
              <li>
                <strong>3.3</strong> ShadowFox reserves the right to cancel programs due to low enrollment or unforeseen
                issues. In such cases, participants will receive a full refund.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">4. Non-Refundable Fees</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>4.1</strong> Administrative, documentation, delivery, and third-party service fees are
                non-refundable. These will be communicated clearly before payment.
              </li>
              <li>
                <strong>4.2</strong> It is the participant’s responsibility to confirm refund eligibility before making
                payment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">5. Chargebacks</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>5.1</strong> ShadowFox reserves the right to dispute chargebacks and provide supporting evidence
                of the transaction and services.
              </li>
              <li>
                <strong>5.2</strong> Fraudulent chargebacks may result in legal action and permanent disqualification
                from all ShadowFox programs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">6. Dispute Resolution</h2>
            <p>
              All refund or cancellation-related disputes must be directed to ShadowFox. We aim to resolve issues
              promptly and fairly through direct communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">7. Contact Information</h2>
            <p>
              For any questions regarding this policy, reach us at:{" "}
              <span className="text-purple-400">info@shadowfox.in</span>
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Address:</strong> 859J, 3A 13th Main Road, Anna Nagar West, Chennai - 600040.
            </p>
          </section>

          <section>
            <p className="mt-8 text-xl text-purple-200 font-semibold">
              By enrolling in any ShadowFox program, you confirm that you have read, understood, and agree to this
              Refund and Cancellation Policy.
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
