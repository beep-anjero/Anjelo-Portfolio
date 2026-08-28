import { useEffect } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export function Certifications() {
  useEffect(() => {
    const scriptId = 'credly-embed-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 14 },
    },
  };

  return (
    <section
      id="credentials"
      className="relative overflow-hidden border-b-2 border-[#946D6D]/20 bg-[#FDF4D2] py-20 px-4 text-[#946D6D] transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#251D1D] dark:text-[#FDF4D2] dark:border-[#FDF4D2]/20"
    >
      <div className="absolute inset-0 portfolio-grid opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b-2 border-[#946D6D]/20 pb-8 dark:border-[#FDF4D2]/20">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#A290B7] dark:text-[#B0CDE6]">
            Credentials & Certifications
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#946D6D] dark:text-[#FDF4D2]">
            Industry Certifications.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-14 items-center"
        >
          {/* Credly Badge Bento Container */}
          <motion.div
            variants={itemVariants}
            className="bento-card flex flex-col items-center justify-center p-7 w-full max-w-[300px] min-h-[340px] mx-auto lg:mx-0 bg-white border-2 border-[#946D6D]/30 shadow-[4px_4px_0px_rgba(148,109,109,0.3)] dark:bg-[#322727] dark:border-[#FDF4D2]/30"
          >
            <div className="relative flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm border border-[#946D6D]/15 w-full">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="8bcb7d31-34c1-4028-bcb8-8c1c28d9aa2d"
                data-share-badge-host="https://www.credly.com"
                className="bg-transparent"
              />
            </div>
            <span className="mt-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#A290B7] dark:text-[#B0CDE6]">
              Verified Digital Credential
            </span>
          </motion.div>

          {/* Certification Details */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#A290B7] dark:text-[#B0CDE6]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#946D6D]/70 dark:text-[#FDF4D2]/70">
                Certiport · A Pearson VUE Business
              </span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-tight text-[#946D6D] sm:text-3xl lg:text-4xl dark:text-[#FDF4D2]">
              Information Technology Specialist: Databases
            </h3>

            <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#946D6D]/85 dark:text-[#FDF4D2]/85">
              Validates fundamental competency in relational database architecture, SQL query formulation, and structured transaction management. Assessed knowledge domains include:
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 max-w-2xl text-sm">
              <li className="flex items-start gap-2.5 rounded-xl border border-[#946D6D]/20 bg-white/70 p-3 shadow-sm dark:bg-[#322727] dark:border-[#FDF4D2]/20">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#A290B7] dark:text-[#B0CDE6] shrink-0 mt-0.5" />
                <span className="text-[#946D6D] dark:text-[#FDF4D2] font-medium">Database Design & Schema Normalization</span>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl border border-[#946D6D]/20 bg-white/70 p-3 shadow-sm dark:bg-[#322727] dark:border-[#FDF4D2]/20">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#A290B7] dark:text-[#B0CDE6] shrink-0 mt-0.5" />
                <span className="text-[#946D6D] dark:text-[#FDF4D2] font-medium">SQL Data Manipulation Language (DML)</span>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl border border-[#946D6D]/20 bg-white/70 p-3 shadow-sm dark:bg-[#322727] dark:border-[#FDF4D2]/20">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#A290B7] dark:text-[#B0CDE6] shrink-0 mt-0.5" />
                <span className="text-[#946D6D] dark:text-[#FDF4D2] font-medium">SQL Data Definition Language (DDL)</span>
              </li>
              <li className="flex items-start gap-2.5 rounded-xl border border-[#946D6D]/20 bg-white/70 p-3 shadow-sm dark:bg-[#322727] dark:border-[#FDF4D2]/20">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#A290B7] dark:text-[#B0CDE6] shrink-0 mt-0.5" />
                <span className="text-[#946D6D] dark:text-[#FDF4D2] font-medium">Security, Admin & Transaction Control</span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://www.credly.com/badges/8bcb7d31-34c1-4028-bcb8-8c1c28d9aa2d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-xl border-2 border-[#946D6D] bg-[#946D6D] px-6 font-display text-xs font-extrabold uppercase tracking-wider text-[#FDF4D2] shadow-[3px_3px_0px_rgba(148,109,109,0.35)] hover:shadow-[4px_4px_0px_rgba(148,109,109,0.5)] active:translate-y-0.5 transition-all dark:bg-[#B0CDE6] dark:text-[#251D1D] dark:border-[#B0CDE6]"
              >
                <span>Verify on Credly</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
