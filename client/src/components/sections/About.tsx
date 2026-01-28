import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 relative z-10" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square glass border-0">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-[15rem] font-display font-black opacity-10 select-none">DATA</div>
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/10 blur-[100px] rounded-full animate-pulse delay-700" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                HUMAN INSIGHT.<br />
                <span className="text-primary italic">ALGORITHMIC RIGOR.</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed"
            >
              <p>
                I am Alexander Nova, a Data Architect specializing in the synthesis of complex computational models and high-end visual experiences. 
              </p>
              <p>
                With over a decade of experience in <span className="text-white font-medium">Neural Architecture</span> and <span className="text-white font-medium">Predictive Analytics</span>, I transform abstract data streams into tangible strategic assets.
              </p>
              <p>
                My philosophy is simple: Data is not just a resource to be mined—it is a narrative to be told. I build the bridges that allow stakeholders to see through the noise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5"
            >
              <div>
                <p className="text-3xl font-display font-bold text-white">10+</p>
                <p className="text-sm font-mono text-primary uppercase tracking-widest">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">50+</p>
                <p className="text-sm font-mono text-primary uppercase tracking-widest">Projects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
