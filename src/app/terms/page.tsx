import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, FileCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Norvalor",
  description: "Terms of Service for Norvalor Class I medical device quality, regulatory, and engineering consultancy.",
};

export default function TermsOfServicePage() {
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
            <FileCheck className="size-3.5" />
            <span>LEGAL &middot; TERMS OF SERVICE</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Terms of Service
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-zinc-400 font-mono">
            Last Updated: November 2026 &middot; Norvalor Medical Device Consulting
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-zinc-300 space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of Norvalor (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) or engaging our medical device regulatory, quality assurance, and manufacturing engineering services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not access this website or contract our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              2. Scope of Professional Consulting Services
            </h2>
            <p>
              Norvalor provides advisory and hands-on consulting services specializing in Class I and Class II medical devices, including but not limited to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-neutral-600 dark:text-zinc-400">
              <li>FDA QMSR (21 CFR Part 820) and ISO 13485:2016 quality management system build-out and gap assessments.</li>
              <li>EU MDR (Regulation 2017/745) Annex II/III technical documentation authoring and GSPR compilation.</li>
              <li>Unique Device Identification (UDI) 2D Data Matrix laser direct part marking and verification.</li>
              <li>ISO 14971 risk management files and IQ/OQ/PQ manufacturing process validation.</li>
            </ul>
            <p className="mt-3">
              All formal consulting engagements are governed by an executed Master Services Agreement (MSA) or formal Statement of Work (SOW), which supersedes these general website terms in the event of any conflict.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              3. Regulatory &amp; Legal Disclaimers
            </h2>
            <p>
              <strong className="text-neutral-900 dark:text-white">Advisory Nature:</strong> Norvalor provides expert technical, regulatory, and quality consulting based on our professional engineering judgment and applicable standards. While we build defensible, audit-ready quality systems and technical files, final regulatory clearance, CE marking, Notified Body approvals, and FDA decisions remain within the sole discretion of the respective regulatory authorities.
            </p>
            <p className="mt-2">
              <strong className="text-neutral-900 dark:text-white">Not Legal Counsel:</strong> Our consulting deliverables and regulatory assessments do not constitute formal legal advice. Clients are encouraged to consult qualified legal counsel for statutory legal disputes or corporate compliance interpretations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              4. Client Responsibilities &amp; Technical Accuracy
            </h2>
            <p>
              Client acknowledges that the efficacy of regulatory documentation and quality systems relies on the accuracy and completeness of technical data, manufacturing specifications, material certifications, and testing reports provided by the client. Client represents that all technical inputs provided to Norvalor are true, accurate, and non-infringing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              5. Intellectual Property Rights
            </h2>
            <p>
              <strong className="text-neutral-900 dark:text-white">Client Work Product:</strong> Upon receipt of full payment under an executed SOW, all customized technical files, device master records (DMR), SOPs, and project documentation created specifically for the client belong exclusively to the client.
            </p>
            <p className="mt-2">
              <strong className="text-neutral-900 dark:text-white">Pre-existing Frameworks:</strong> Norvalor retains ownership of our pre-existing proprietary templates, audit checklists, diagnostic algorithms, and methodology frameworks utilized across engagements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              6. Fixed-Fee Proposals &amp; Payment Terms
            </h2>
            <p>
              Norvalor champions transparent, predictable fixed-fee scopes. Specific milestone payment schedules, deliverables, and review rounds are detailed in each executed proposal or SOW. Out-of-scope work requires written mutual agreement prior to execution.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Norvalor, its founders, or affiliates be liable for indirect, incidental, punitive, or consequential damages resulting from regulatory audits, manufacturing downtime, or commercial product launches. Norvalor&rsquo;s aggregate liability arising out of any engagement shall not exceed the total fees paid by the client under the applicable SOW.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              8. Contact Information
            </h2>
            <p>
              For legal inquiries regarding these terms or commercial service contracts:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 font-mono text-xs text-neutral-700 dark:text-zinc-300">
              <div>NORVALOR Legal &amp; Contracts Department</div>
              <div>Email: info@norvalor.com</div>
              <div>Website: https://norvalor.com</div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}