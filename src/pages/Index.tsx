import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gameplayImg from "@/assets/gameplay.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" style={{ backgroundImage: 'var(--gradient-top)', backgroundSize: '100% 600px', backgroundRepeat: 'no-repeat' }}>
      {/* Nav */}
      <nav className="px-6 py-5">
        <span className="font-mono font-bold text-foreground text-lg">// <span className="font-extrabold">OpenMyau+</span></span>
      </nav>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Forge 1.8.9
            </span>

            {/* Heading */}
            <h1 className="font-mono font-extrabold text-foreground text-5xl md:text-6xl leading-tight tracking-tight">
              Dominate.<br />Unfairly.
            </h1>

            {/* Description */}
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Stop playing fair. OpenMyau+ is the optimized, undetectable client built for players who want to win – no excuses, no mercy.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button className="rounded-full gap-2 px-6">
                <Download className="w-4 h-4" />
                Download (free)
              </Button>
              <Button variant="outline" className="rounded-full gap-2 px-6 border-foreground/20 text-foreground hover:bg-foreground/5">
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </Button>
            </div>
          </div>

          {/* Gameplay image */}
          <div className="flex-shrink-0 w-full lg:w-[340px] mt-4 lg:mt-16">
            <div className="rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <img src={gameplayImg} alt="Gameplay preview" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="mt-10 max-w-md rounded-xl border border-border bg-card p-5 font-mono text-sm space-y-1">
          <div className="flex gap-1.5 mb-3">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 90% 60%)' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(140 60% 50%)' }} />
          </div>
          <p className="text-muted-foreground"># easy install on all devices</p>
          <p className="text-foreground">$ <span className="text-primary font-bold">install</span> the mod</p>
          <p className="text-foreground">$ <span className="text-primary font-bold">launch</span> minecraft</p>
          <p className="text-muted-foreground">&gt; injected successfully.</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
