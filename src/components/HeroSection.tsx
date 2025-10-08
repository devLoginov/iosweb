import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Globe } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Neo-Urban Minimalism 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
            Будущее общения{" "}
            <span className="gradient-text">уже здесь</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Переосмысление концепции контента и личного пространства в цифровом мире
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center pt-4">
            <Button variant="hero" className="animate-pulse-glow">
              <Zap className="w-5 h-5" />
              Присоединиться
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI-рекомендации</h3>
              <p className="text-sm text-muted-foreground">Умные алгоритмы подбирают контент специально для вас</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Живые эмоции</h3>
              <p className="text-sm text-muted-foreground">Аватары с реальными эмоциями и WebGL эффектами</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Ambient Mode</h3>
              <p className="text-sm text-muted-foreground">Мягкое свечение вокруг контента для комфорта глаз</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
