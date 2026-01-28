import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

import visionImg from "@/assets/project-vision.png";
import financeImg from "@/assets/project-finance.png";
import genomicImg from "@/assets/project-genomic.png";

const projects = [
  { 
    title: "Neural Vision", 
    desc: "Real-time object detection and spatial mapping.", 
    img: visionImg,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  { 
    title: "Vortex Analytics", 
    desc: "Predictive engine for high-frequency financial markets.", 
    img: financeImg,
    color: "from-purple-500/20 to-indigo-500/20"
  },
  { 
    title: "GenomX", 
    desc: "3D molecular visualization for genomic research.", 
    img: genomicImg,
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold">SELECTED WORKS</h2>
            <p className="text-muted-foreground text-lg">Exploring the intersection of data and art.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass glass-hover p-4 rounded-[2.5rem] border-0 flex flex-col h-full group">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`} />
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <div className="px-4 pb-4 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground font-light">{project.desc}</p>
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <span className="text-xs font-mono opacity-40">2026 / CASE STUDY</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
