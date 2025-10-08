import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Eye, Heart, MessageCircle } from "lucide-react";

const Video = () => {
  const mockVideos = [
    {
      id: 1,
      title: "Путешествие в будущее технологий",
      author: "Алексей Новиков",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      duration: "12:34",
      views: 24500,
      likes: 892,
      comments: 156,
    },
    {
      id: 2,
      title: "Ambient Music Session",
      author: "Мария Соколова",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
      duration: "8:45",
      views: 15230,
      likes: 567,
      comments: 89,
    },
    {
      id: 3,
      title: "Дизайн будущего: Neo-Minimalism",
      author: "Дмитрий Петров",
      thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
      duration: "15:20",
      views: 32100,
      likes: 1240,
      comments: 234,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black gradient-text mb-4">Видео</h1>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Поиск видео..."
              className="pl-10 glass-card border-border/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVideos.map((video) => (
            <div key={video.id} className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 glow-effect">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{video.author}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {video.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {video.comments}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Video;
