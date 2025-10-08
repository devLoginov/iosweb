import { Layout } from "@/components/Layout";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Settings } from "lucide-react";
import { PostCard } from "@/components/PostCard";

const GroupDetail = () => {
  const { id } = useParams();

  const mockGroup = {
    name: "Технологии будущего",
    description: "Обсуждаем последние новости в мире AI, Web3 и квантовых вычислений. Делимся опытом, обучаемся вместе.",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    members: 12450,
    posts: 342,
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        {/* Group Header */}
        <div className="glass-card rounded-2xl overflow-hidden mb-8">
          <div className="relative h-64">
            <img
              src={mockGroup.cover}
              alt={mockGroup.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-black mb-2">{mockGroup.name}</h1>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {mockGroup.members.toLocaleString()} участников
                </div>
                <div>{mockGroup.posts} постов</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-muted-foreground mb-6">{mockGroup.description}</p>
            <div className="flex gap-4">
              <Button className="gap-2 glow-effect">
                <UserPlus className="w-4 h-4" />
                Вступить
              </Button>
              <Button variant="outline" className="gap-2">
                <Settings className="w-4 h-4" />
                Настройки
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="feed" className="max-w-4xl mx-auto">
          <TabsList className="glass-card w-full justify-start">
            <TabsTrigger value="feed">Лента</TabsTrigger>
            <TabsTrigger value="members">Участники</TabsTrigger>
            <TabsTrigger value="media">Медиа</TabsTrigger>
            <TabsTrigger value="info">Информация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="feed" className="space-y-6 mt-6">
            <PostCard
              author="Алексей Новиков"
              time="2 часа назад"
              content="Новая статья о квантовых компьютерах от IBM. Впечатляющий прогресс! 🚀"
              likes={234}
              comments={45}
            />
          </TabsContent>
          
          <TabsContent value="members" className="mt-6">
            <div className="text-center text-muted-foreground py-12">
              Список участников
            </div>
          </TabsContent>
          
          <TabsContent value="media" className="mt-6">
            <div className="text-center text-muted-foreground py-12">
              Медиафайлы сообщества
            </div>
          </TabsContent>
          
          <TabsContent value="info" className="mt-6">
            <div className="text-center text-muted-foreground py-12">
              Информация о сообществе
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default GroupDetail;
