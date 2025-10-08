import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Heart, MoreVertical } from "lucide-react";

const Music = () => {
  const mockTracks = [
    {
      id: 1,
      title: "Cosmic Dreams",
      artist: "Алексей Новиков",
      duration: "4:23",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80",
      plays: 12450,
    },
    {
      id: 2,
      title: "Neon Nights",
      artist: "Мария Соколова",
      duration: "3:45",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80",
      plays: 8920,
    },
    {
      id: 3,
      title: "Digital Horizon",
      artist: "Дмитрий Петров",
      duration: "5:12",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
      plays: 15230,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black gradient-text mb-4">Музыка</h1>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Поиск треков, исполнителей..."
              className="pl-10 glass-card border-border/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTracks.map((track) => (
            <div key={track.id} className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform">
              <div className="relative aspect-square">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 glow-effect">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{track.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{track.artist}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{track.duration}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground mt-2">
                  {track.plays.toLocaleString()} прослушиваний
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Music;
