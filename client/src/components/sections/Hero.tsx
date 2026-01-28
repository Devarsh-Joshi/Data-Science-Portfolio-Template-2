import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start relative z-10 px-6 md:px-12 pt-20 overflow-hidden max-w-7xl mx-auto">
      <div className="blob -top-20 -left-20 animate-pulse opacity-20" />
      <div className="blob bottom-0 -right-20 animate-pulse delay-700 opacity-20" />
      
      <div className="w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="px-5 py-1.5 border-primary/30 bg-primary/10 text-primary rounded-full mb-6 backdrop-blur-md text-xs font-mono tracking-widest uppercase">
            // STATUS: SYSTEM_ONLINE
          </Badge>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[9rem] font-display font-black tracking-tight leading-[0.85]"
          >
            DECODING<br />
            <span className="text-gradient">REALITY.</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-primary rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl font-light text-muted-foreground leading-tight max-w-lg"
          >
            Expert in <span className="text-white font-medium">Data Intelligence</span> and 
            <span className="text-white font-medium"> Neural Architectures</span>. I build systems 
            that transform raw signals into strategic foresight.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="flex flex-wrap gap-4 md:justify-end"
          >
            <Button 
              size="lg" 
              className="bg-primary text-background rounded-full px-12 h-16 font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              INITIATE EXPLORATION 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="ghost" className="text-white rounded-full px-8 h-16 font-bold hover:bg-white/5 border border-white/10 group">
              <Play className="mr-2 w-4 h-4 fill-current" /> WATCH REEL
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[10px] tracking-[0.2em] uppercase"
        >
          <div>
            <p className="text-primary mb-1">01/ NEURAL.NETS</p>
            <p className="text-white">99.8% ACCURACY</p>
          </div>
          <div>
            <p className="text-primary mb-1">02/ VISUAL.ENG</p>
            <p className="text-white">WEBGL / CANVAS</p>
          </div>
          <div>
            <p className="text-primary mb-1">03/ BIG.DATA</p>
            <p className="text-white">PETABYTE SCALE</p>
          </div>
          <div>
            <p className="text-primary mb-1">04/ STRATEGY</p>
            <p className="text-white">QUANT DRIVEN</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
