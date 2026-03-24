import { Download, MessageCircle, Shield, Zap, Eye, EyeOff, Swords, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

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
  { value: "1.5K+", label: "Downloads" },
  { value: "99.8%", label: "Bypass Rate" },
  { value: "0.3ms", label: "Avg Latency" },
  { value: "48", label: "Modules" },
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
          <a href="#pricing" className="hover:text-primary transition-colors">[pricing]</a>
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
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1 text-xs font-mono font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              v1.6+3 :: forge-1.8.9
            </span>
            <h1 className="font-mono font-extrabold text-foreground text-5xl md:text-6xl leading-tight tracking-tight">
              <span className="text-primary">$</span> Dominate.<br /><span className="text-muted-foreground"># </span>Unfairly.
            </h1>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed font-mono">
              &gt; Stop playing fair. OpenMyau+ is the optimized, undetectable client built for players who want to win – no excuses, no mercy.
            </p>
            <div className="flex gap-3 pt-2">
              <Button className="rounded-md gap-2 px-6 font-mono" asChild>
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  sudo ./install.sh
                </a>
              </Button>
              <Button variant="outline" className="rounded-md gap-2 px-6 border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/40 font-mono">
                <MessageCircle className="w-4 h-4" />
                /join #discord
              </Button>
            </div>
          </motion.div>
          <motion.div className="flex-shrink-0 w-full lg:w-[400px] mt-4 lg:mt-16" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-lg overflow-hidden border border-border shadow-[0_0_30px_hsl(120_60%_50%/0.1)]">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/8Hf1e1YLqFg?si=Tmowl5jj0PejjtoL"
                  title="OpenMyau+ Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div className="mt-10 max-w-lg rounded-lg border border-border bg-card p-5 font-mono text-sm space-y-1 shadow-[0_0_20px_hsl(120_60%_50%/0.05)]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs border-b border-border pb-2">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 80% 50%)' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(120 60% 45%)' }} />
            <span className="ml-2">bash — 80×24</span>
          </div>
          <p className="text-muted-foreground"># pacman -S openmyau-plus</p>
          <p className="text-foreground"><span className="text-primary">[root@arch ~]$</span> git clone https://github.com/...</p>
          <p className="text-foreground"><span className="text-primary">[root@arch ~]$</span> cd OpenMyau-Plus && ./build.sh</p>
          <p className="text-muted-foreground">[<span className="text-primary">✓</span>] compiled 48 modules</p>
          <p className="text-muted-foreground">[<span className="text-primary">✓</span>] bypass engine loaded</p>
          <p className="text-foreground"><span className="text-primary">[root@arch ~]$</span> java -jar openmyau.jar</p>
          <p className="text-primary animate-pulse">▋</p>
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
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1 text-xs font-mono font-semibold text-primary">
            <Zap className="w-3 h-3" /> cat /etc/modules.conf
          </span>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl">
            <span className="text-primary">$</span> Everything you need to win
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-mono text-sm">
            48 modules, all configurable, all undetectable. Here are the highlights.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} className="group rounded-lg border border-border bg-card p-6 space-y-3 hover:border-primary/40 hover:shadow-[0_0_15px_hsl(120_60%_50%/0.08)] transition-all" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={i} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
              <div className="w-10 h-10 rounded-md border border-border bg-primary/10 flex items-center justify-center text-primary">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-mono font-bold text-primary text-lg">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-mono">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div className="text-center mb-12 space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1 text-xs font-mono font-semibold text-primary">
            💰 cat /etc/pricing.conf
          </span>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl">
            <span className="text-primary">$</span> Choose your plan
          </h2>
          <p className="text-muted-foreground font-mono text-sm">Free forever. Or go pro for the real ones.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <motion.div className="rounded-lg border border-border bg-card p-8 space-y-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="space-y-2">
              <p className="font-mono text-xs text-muted-foreground">// free tier</p>
              <h3 className="font-mono font-extrabold text-foreground text-2xl">Free</h3>
              <p className="font-mono font-extrabold text-primary text-4xl">$0<span className="text-muted-foreground text-base font-normal">/forever</span></p>
            </div>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> 48 modules included</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Anti-cheat bypass</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Custom HUD editor</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Community support</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Regular updates</li>
            </ul>
            <Button className="w-full rounded-md gap-2 font-mono" asChild>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                sudo ./install.sh
              </a>
            </Button>
          </motion.div>

          {/* Pro */}
          <motion.div className="rounded-lg border border-primary/50 bg-card p-8 space-y-6 relative shadow-[0_0_30px_hsl(120_60%_50%/0.1)]" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <span className="absolute -top-3 right-6 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 rounded-md">RECOMMENDED</span>
            <div className="space-y-2">
              <p className="font-mono text-xs text-muted-foreground">// pro tier</p>
              <h3 className="font-mono font-extrabold text-foreground text-2xl">Pro</h3>
              <p className="font-mono font-extrabold text-primary text-4xl">?<span className="text-muted-foreground text-base font-normal">/coming soon</span></p>
            </div>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Everything in Free</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Priority bypass updates</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Exclusive modules</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Config sharing & presets</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Direct dev support</li>
            </ul>
            <Button variant="outline" className="w-full rounded-md gap-2 font-mono border-primary/40 text-primary hover:bg-primary/10" disabled>
              <span className="animate-pulse">Coming Soon...</span>
            </Button>
          </motion.div>
        </div>
      </section>


      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <motion.div className="text-center mb-12 space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl"><span className="text-primary">$</span> man openmyau</h2>
          <p className="text-muted-foreground font-mono text-sm">Got questions? RTFM — or just read below.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
             <motion.details key={faq.q} className="group rounded-lg border border-border bg-card overflow-hidden" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} custom={i}>
              <summary className="flex items-center justify-between cursor-pointer p-5 font-mono font-semibold text-foreground text-sm hover:bg-primary/5 hover:text-primary transition-colors">
                <span><span className="text-primary mr-2">?</span>{faq.q}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed font-mono border-t border-border pt-4">
                <span className="text-primary">&gt;</span> {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div className="rounded-lg bg-card border border-primary/30 p-10 md:p-16 text-center space-y-6 shadow-[0_0_40px_hsl(120_60%_50%/0.08)]" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-mono font-extrabold text-foreground text-3xl md:text-4xl">
            <span className="text-primary">$</span> Ready to dominate<span className="text-primary animate-pulse">?</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-mono text-sm">
            Join 1,500+ players already using OpenMyau+. Free as in freedom.
          </p>
          <div className="flex gap-3 justify-center">
            <Button className="rounded-md gap-2 px-8 text-base h-12 font-mono" asChild>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                sudo ./install.sh
              </a>
            </Button>
            <Button variant="outline" className="rounded-md gap-2 px-8 text-base h-12 border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/40 font-mono">
              <MessageCircle className="w-5 h-5" />
              /join
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">© 2026 OpenMyau+ — licensed under GPLv3. Not affiliated with Mojang.</span>
        <div className="flex gap-5 font-mono text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">[discord]</a>
          <a href="#" className="hover:text-primary transition-colors">[github]</a>
          <a href="#" className="hover:text-primary transition-colors">[terms]</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
