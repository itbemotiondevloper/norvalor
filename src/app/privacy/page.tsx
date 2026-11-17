import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Norvalor",
  description: "Privacy Policy for Norvalor Class I medical device quality, regulatory, and engineering consultancy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#121212] dark:bg-[#06090e] dark:text-[#f1f4f9] transition-colors duration-300">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-36 sm:pt-44 pb-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-brand-500 transition-colors mb-8"
        >
          <ArrowLeft className="size-3.5" />
          <span>BACK TO HOME</span>
        </Link>

        {/* Header */}
        <div className="pb-8 border-b border-neutral-200 dark:border-white/10 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono mb-4">
            <Shield className="size-3.5" />
            <span>LEGAL &middot; DATA PRIVACY</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-zinc-400 font-mono">
            Last Updated: November 2026 &middot; Norvalor Medical Device Consulting
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-zinc-300 space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              1. Commitment to Client Confidentiality &amp; NDA
            </h2>
            <p>
              Norvalor (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides specialized Class I and Class II medical device quality management system (QMS) implementation, EU MDR technical documentation authoring, and shop-floor engineering consulting. We understand that our clients entrust us with proprietary medical device designs, manufacturing processes, clinical data, and regulatory filing strategies.
            </p>
            <p className="mt-2">
              All proprietary technical documentation, DHR/DMR files, device blueprints, and consultation inquiries are treated under strict confidentiality standards, governed by mutual non-disclosure agreements (NDAs) executed prior to or during our engagements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to provide our consulting services and respond to project inquiries:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-neutral-600 dark:text-zinc-400">
              <li>
                <strong className="text-neutral-900 dark:text-white">Contact Information:</strong> Name, professional email address, company name, phone number, and job title submitted via our consultation request forms.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Diagnostic &amp; Readiness Data:</strong> Responses voluntarily provided through the Class I Readiness Check (e.g., target regulatory jurisdictions, device classification status, laser marking validation readiness).
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-white">Technical &amp; Log Data:</strong> Non-identifying analytics such as browser type, operating system, and referral URLs collected automatically to ensure website security and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use collected data solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-neutral-600 dark:text-zinc-400">
              <li>To evaluate device classification and draft transparent fixed-fee proposals.</li>
              <li>To communicate regarding scheduled technical consultations.</li>
              <li>To fulfill regulatory consulting deliverables under active contracts.</li>
              <li>To maintain website security and prevent fraudulent inquiries.</li>
            </ul>
            <p className="mt-3 font-semibold text-neutral-900 dark:text-white">
              We never sell, rent, or monetize your contact or proprietary device information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              4. Data Protection &amp; Security Standards
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect your personal and proprietary technical information against unauthorized access, disclosure, or destruction. Communications and project deliverables are stored in encrypted, access-controlled repositories adhering to ISO 27001 and SOC 2 aligned protocols.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              5. Cookies &amp; Tracking
            </h2>
            <p>
              Our website uses only essential session cookies and local storage tokens strictly required for website functionality (such as remembering your dark/light theme preference). We do not employ invasive cross-site advertising trackers or third-party behavioral profiling scripts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              6. Your Rights (GDPR &amp; US Regulations)
            </h2>
            <p>
              Depending on your location, you have rights under the EU General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and applicable US state privacy laws, including the right to request access, correction, or deletion of your personal data.
            </p>
            <p className="mt-2">
              To exercise these rights, please contact our privacy compliance officer directly at:{" "}
              <a href="mailto:info@norvalor.com" className="text-brand-500 underline underline-offset-4 font-mono">
                info@norvalor.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our client confidentiality protocols, please contact:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 font-mono text-xs text-neutral-700 dark:text-zinc-300">
              <div>NORVALOR Medical Device Engineering &amp; Consulting</div>
              <div>Quality, Regulatory &amp; Manufacturing Practice</div>
              <div className="mt-1 text-brand-600 dark:text-brand-400">info@norvalor.com</div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}