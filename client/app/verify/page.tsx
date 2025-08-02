"use client";

import { useState } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [verificationId, setVerificationId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`/api/verify?id=${verificationId}`);
      const data = await res.json();

      if (!res.ok || !data) {
        throw new Error("No record found for this Verification ID.");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
      <header className="pt-40 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Verify Certificate
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Enter your Verification ID to confirm authenticity.
        </p>
      </header>

      {/* Verification Form */}
      <main className="px-6 pb-24">
        <div className="max-w-lg mx-auto bg-gray-800/50 p-8 rounded-xl border border-purple-500/20">
          <input
            type="text"
            placeholder="Enter Verification ID"
            value={verificationId}
            onChange={(e) => setVerificationId(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400 mb-4"
          />
          <button
            onClick={handleVerify}
            disabled={loading || !verificationId.trim()}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

          {/* Error Message */}
          {error && <p className="text-red-400 mt-4">{error}</p>}

          {/* Result Display */}
          {result && (
            <div className="mt-6 text-left">
              <h2 className="text-xl font-bold text-purple-300 mb-3">Verification Result</h2>
              <div className="space-y-2">
                {Object.entries(result).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-semibold text-purple-400">{key}:</span>{" "}
                    <span className="text-gray-200">{String(value)}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-16 bg-gradient-to-t from-gray-900 to-transparent text-center">
        <p className="text-gray-400 text-lg font-medium">© 2025 All Rights Reserved by ShadowFox</p>
      </footer>
    </div>
  );
}
