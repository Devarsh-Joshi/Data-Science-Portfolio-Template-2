import { motion } from "framer-motion";

const categories = [
  {
    title: "ANALYSIS",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"]
  },
  {
    title: "DEEP LEARNING",
    skills: ["PyTorch", "TensorFlow", "Keras", "Transformers"]
  },
  {
    title: "CREATIVE",
    skills: ["Three.js", "WebGL", "Framer Motion", "D3.js"]
  },
  {
    title: "PLATFORM",
    skills: ["AWS", "Docker", "FastAPI", "PostgreSQL"]
  }
];

export default function Skills() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold">TECH STACK</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-8 rounded-[2rem]"
            >
              <h3 className="text-primary font-bold tracking-widest text-sm mb-8">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-all" />
                    <span className="text-lg font-light text-muted-foreground group-hover:text-white transition-all">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
