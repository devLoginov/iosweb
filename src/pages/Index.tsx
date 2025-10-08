import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeedSection } from "@/components/FeedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeedSection />
      </main>
    </div>
  );
};

export default Index;
