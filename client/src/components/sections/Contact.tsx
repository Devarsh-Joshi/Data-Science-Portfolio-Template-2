import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="pt-24 pb-4 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[3rem] text-center space-y-12 overflow-hidden relative shadow-2xl">
        <div className="blob -top-20 -right-20 opacity-20" />
        
        <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-tight">
          LET'S BUILD <br />
          <span className="text-primary italic">SOMETHING NEW.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Currently taking on new projects. Reach out to start a conversation.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-white text-black rounded-full px-12 h-16 text-lg font-bold hover:scale-105 transition-all"
            onClick={() => window.location.href = 'mailto:hi@alexnova.dev'}
          >
            GET IN TOUCH
          </Button>
          <a href="mailto:hi@alexnova.dev" className="text-lg font-medium border-b border-white/20 hover:border-white transition-all pb-1">
            HI@ALEXNOVA.DEV
          </a>
        </div>
      </div>
    </section>
  );
}
