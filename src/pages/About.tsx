import { Layout } from "@/components/Layout";
import { Sparkles, Users, Globe, Zap } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 glow-effect">
              <span className="text-4xl font-black">N</span>
            </div>
            <h1 className="text-6xl font-black gradient-text mb-4">NOVA</h1>
            <p className="text-xl text-muted-foreground">
              Социальная сеть нового поколения
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-black mb-4">Наша миссия</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NOVA создана для того, чтобы объединить людей через технологии будущего. 
              Мы верим в открытое общение, креативность и инновации. Наша платформа 
              предоставляет пространство для самовыражения, обмена идеями и создания 
              сообществ единомышленников.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6">
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Инновационный дизайн</h3>
              <p className="text-muted-foreground">
                Neo-urban aesthetic с элементами glassmorphism и ambient эффектами
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Сообщества</h3>
              <p className="text-muted-foreground">
                Создавайте и вступайте в группы по интересам
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Глобальная платформа</h3>
              <p className="text-muted-foreground">
                Общайтесь с людьми со всего мира
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Молниеносная скорость</h3>
              <p className="text-muted-foreground">
                Современные технологии для мгновенной загрузки
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-black mb-6">Технологический стек</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-4xl mb-2">⚛️</div>
                <p className="font-semibold">React</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🎨</div>
                <p className="font-semibold">Tailwind CSS</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🗄️</div>
                <p className="font-semibold">Supabase</p>
              </div>
              <div>
                <div className="text-4xl mb-2">⚡</div>
                <p className="font-semibold">Vite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
