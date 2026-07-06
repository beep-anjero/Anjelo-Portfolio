import { useEffect } from "react";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  useEffect(() => {
    // Dynamically append the Credly utility script to the DOM
    const scriptId = "credly-embed-script";
    const existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 14 },
    },
  };

  return (
    <section id="certifications" className="relative overflow-hidden border-b border-border bg-background py-20 px-4 text-foreground transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 portfolio-grid opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b border-border/60 pb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Credentials</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Licenses & Certifications.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-16 items-center"
        >
          {/* Credly Badge Bento Box */}
          <motion.div 
            variants={itemVariants}
            className="bento-card flex items-center justify-center p-8 w-full max-w-[280px] min-h-[340px] mx-auto lg:mx-0"
          >
            {/* The Badge Container - White Background for readability */}
            <div className="relative flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm border border-black/5">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="8bcb7d31-34c1-4028-bcb8-8c1c28d9aa2d" 
                data-share-badge-host="https://www.credly.com"
                className="bg-transparent"
              />
            </div>
          </motion.div>

          {/* Certification Text Details */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-[var(--accent)]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Verified Certification
              </span>
            </div>
            
            <h3 className="mt-4 text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
              Information Technology Specialist: Databases
            </h3>
            
            <p className="mt-2 font-semibold text-[var(--accent)]">
              Certiport, a Pearson VUE business
            </p>
            
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Demonstrates foundational knowledge and proficiency in database design, SQL querying, and relational database systems management. Certified domains include:
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 max-w-xl text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4.5 w-4.5 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Database Design & Schema Normalization</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4.5 w-4.5 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-muted-foreground">SQL DML (Data Manipulation Language)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4.5 w-4.5 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-muted-foreground">SQL DDL (Data Definition Language)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="h-4.5 w-4.5 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Security, Administration & Transaction Control</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.credly.com/badges/8bcb7d31-34c1-4028-bcb8-8c1c28d9aa2d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-[var(--accent)] hover:text-[#080809] hover:border-[var(--accent)] transition-all duration-300 active:scale-95 shadow-sm"
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
