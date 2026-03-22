import { Download, MessageCircle, Shield, Zap, Eye, EyeOff, Swords, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import gameplayImg from "@/assets/gameplay.jpg";

const DOWNLOAD_URL = "https://github.com/IamNespola/OpenMyau-Plus/releases";

const features = [
  { icon: EyeOff, title: "Undetectable", desc: "Bypasses all major anti-cheats including Watchdog, Vulcan, and Grim." },
  { icon: Zap, title: "Zero Lag", desc: "Optimized rendering pipeline. Get more FPS than vanilla Minecraft." },
  { icon: Swords, title: "PvP Modules", desc: "KillAura, Velocity, AutoClicker, Reach — all fully configurable." },
  { icon: Shield, title: "Self-Destruct", desc: "Panic key instantly wipes all traces. No evidence, no bans." },
  { icon: Settings, title: "Custom HUD", desc: "Drag-and-drop HUD editor. Arraylist, watermark, keystroke overlay." },
  { icon: Eye, title: "ESP & Tracers", desc: "See players, mobs, and chests through walls with color-coded rendering." },
];

const stats = [
  { value: "50K+", label: "Downloads" },
  { value: "99.8%", label: "Bypass Rate" },
  { value: "0.3ms", label: "Avg Latency" },
  { value: "200+", label: "Modules" },
];

const faqs = [
  { q: "Is OpenMyau+ really free?", a: "Yes, completely free with no hidden fees. Premium cosmetics are optional." },
  { q: "Which servers does it work on?", a: "Hypixel, Minemen, MMC, BlocksMC, and 50+ other major servers." },
  { q: "Will I get banned?", a: "Our bypass engine is updated daily. With proper config, the detection rate is near zero." },
  { q: "What Minecraft versions are supported?", a: "Currently optimized for 1.8.9 via Forge. 1.19+ support is in beta." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono" style={{ backgroundImage: 'var(--gradient-top)', backgroundSize: '100% 600px', backgroundRepeat: 'no-repeat' }}>
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(120 60% 50% / 0.1) 2px, hsl(120 60% 50% / 0.1) 4px)' }} />
      
      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-mono font-bold text-primary text-lg tracking-wider">
          <span className="text-muted-foreground">user@arch</span><span className="text-foreground">:</span><span className="text-primary">~</span><span className="text-foreground">$</span> <span className="font-extrabold text-foreground">OpenMyau+</span>
        </span>
        <div className="hidden md:flex items-center gap-6 font-mono text-sm text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">[features]</a>
          <a href="#stats" className="hover:text-primary transition-colors">[stats]</a>
          <a href="#faq" className="hover:text-primary transition-colors">[faq]</a>
          <Button size="sm" className="rounded-full gap-2 ml-2 font-mono" asChild>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <Download className="w-3.5 h-3.5" />
              ./install.sh
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <motion.div className="flex-1 space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Forge 1.8.9
            </span>
            <h1 className="font-mono font-extrabold text-foreground text-5xl md:text-6xl leading-tight tracking-tight">
              Dominate.<br />Unfairly.
            </h1>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Stop playing fair. OpenMyau+ is the optimized, undetectable client built for players who want to win – no excuses, no mercy.
            </p>
            <div className="flex gap-3 pt-2">
              <Button className="rounded-full gap-2 px-6" asChild>
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  Download (free)
                </a>
              </Button>
              <Button variant="outline" className="rounded-full gap-2 px-6 border-foreground/20 text-foreground hover:bg-foreground/5">
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </Button>
            </div>
          </motion.div>
          <motion.div className="flex-shrink-0 w-full lg:w-[340px] mt-4 lg:mt-16" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <img src={gameplayImg} alt="Gameplay preview" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div className="mt-10 max-w-md rounded-xl border border-border bg-card p-5 font-mono text-sm space-y-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="flex gap-1.5 mb-3">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 90% 60%)' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(140 60% 50%)' }} />
          </div>
          <p className="text-muted-foreground"># easy install on all devices</p>
          <p className="text-foreground">$ <span className="text-primary font-bold">install</span> the mod</p>
          <p className="text-foreground">$ <span className="text-primary font-bold">launch</span> minecraft</p>
          <p className="text-muted-foreground">&gt; injected successfully.</p>
        </motion.div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="text-center space-y-1" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i}>
              <p className="font-mono font-extrabold text-4xl text-primary">{s.value}</p>
              <p className="text-muted-foreground text-sm font-mono">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <motion.div className="text-center mb-12 space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary">
            <Zap className="w-3 h-3" /> Modules
          </span>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl">
            Everything you need to win
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            200+ modules, all configurable, all undetectable. Here are the highlights.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} className="group rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-mono font-bold text-foreground text-lg">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <motion.div className="text-center mb-12 space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl">FAQ</h2>
          <p className="text-muted-foreground">Got questions? We've got answers.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details key={faq.q} className="group rounded-xl border border-border bg-card overflow-hidden" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} custom={i}>
              <summary className="flex items-center justify-between cursor-pointer p-5 font-mono font-semibold text-foreground text-sm hover:bg-primary/5 transition-colors">
                {faq.q}
                <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div className="rounded-3xl bg-primary/10 border border-primary/20 p-10 md:p-16 text-center space-y-6" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl">
            Ready to dominate?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join 50,000+ players already using OpenMyau+. Free forever.
          </p>
          <div className="flex gap-3 justify-center">
            <Button className="rounded-full gap-2 px-8 text-base h-12" asChild>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Now
              </a>
            </Button>
            <Button variant="outline" className="rounded-full gap-2 px-8 text-base h-12 border-foreground/20 text-foreground hover:bg-foreground/5">
              <MessageCircle className="w-5 h-5" />
              Discord
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted-foreground">© 2026 OpenMyau+. Not affiliated with Mojang.</span>
        <div className="flex gap-5 font-mono text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Discord</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
