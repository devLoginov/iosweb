import { Layout } from "@/components/Layout";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, MessageCircle, MapPin, Calendar } from "lucide-react";
import { PostCard } from "@/components/PostCard";

const Profile = () => {
  const { username } = useParams();

  const mockUser = {
    name: "Алексей Новиков",
    username: username || "alexnov",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    bio: "Full-stack разработчик | AI энтузиаст | Создаю будущее",
    location: "Москва, Россия",
    joinDate: "Март 2023",
    postsCount: 156,
    friendsCount: 892,
    views: 12450,
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <Avatar className="w-32 h-32 border-4 border-primary glow-effect">
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-black mb-2">{mockUser.name}</h1>
              <p className="text-muted-foreground mb-4">@{mockUser.username}</p>
              <p className="text-lg mb-6">{mockUser.bio}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {mockUser.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {mockUser.joinDate}
                </div>
              </div>

              <div className="flex gap-8 mb-6">
                <div>
                  <div className="text-2xl font-black">{mockUser.postsCount}</div>
                  <div className="text-sm text-muted-foreground">Постов</div>
                </div>
                <div>
                  <div className="text-2xl font-black">{mockUser.friendsCount}</div>
                  <div className="text-sm text-muted-foreground">Друзей</div>
                </div>
                <div>
                  <div className="text-2xl font-black">{mockUser.views}</div>
                  <div className="text-sm text-muted-foreground">Просмотров</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="gap-2 glow-effect">
                  <UserPlus className="w-4 h-4" />
                  Добавить в друзья
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Написать
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="posts" className="max-w-4xl mx-auto">
          <TabsList className="glass-card w-full justify-start">
            <TabsTrigger value="posts">Посты</TabsTrigger>
            <TabsTrigger value="friends">Друзья</TabsTrigger>
            <TabsTrigger value="music">Музыка</TabsTrigger>
            <TabsTrigger value="videos">Видео</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="space-y-6 mt-6">
            <PostCard
              author="Алексей Новиков"
              time="2 часа назад"
              content="Работа над новым проектом идет отлично! 🚀"
              likes={234}
              comments={45}
            />
          </TabsContent>
          
          <TabsContent value="friends" className="mt-6">
            <div className="text-center text-muted-foreground py-12">
              Список друзей
            </div>
          </TabsContent>
          
          <TabsContent value="music" className="mt-6">
            <div className="text-center text-muted-foreground py-12">
              Музыкальная коллекция
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-6">
            <div className="text-center text-muted-foreground py-12">
              Видеоколлекция
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
