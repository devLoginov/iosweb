import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Users, Plus } from "lucide-react";

const Groups = () => {
  const mockGroups = [
    {
      id: 1,
      name: "Технологии будущего",
      description: "Обсуждаем последние новости в мире AI, Web3 и квантовых вычислений",
      cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      members: 12450,
    },
    {
      id: 2,
      name: "Ambient Music Lovers",
      description: "Сообщество любителей ambient, downtempo и experimental music",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
      members: 8920,
    },
    {
      id: 3,
      name: "Design & UI/UX",
      description: "Делимся работами, обсуждаем тренды, помогаем друг другу расти",
      cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
      members: 15230,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black gradient-text mb-4">Сообщества</h1>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Поиск сообществ..."
                className="pl-10 glass-card border-border/50"
              />
            </div>
          </div>
          <Button className="gap-2 glow-effect">
            <Plus className="w-4 h-4" />
            Создать сообщество
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGroups.map((group) => (
            <Link key={group.id} to={`/groups/${group.id}`}>
              <div className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform">
                <div className="relative aspect-video">
                  <img
                    src={group.cover}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-xl mb-1">{group.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Users className="w-4 h-4" />
                      {group.members.toLocaleString()} участников
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {group.description}
                  </p>
                  <Button variant="outline" className="w-full mt-4">
                    Вступить
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Groups;
