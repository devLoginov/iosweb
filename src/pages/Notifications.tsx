import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, UserPlus, Users, CheckCheck } from "lucide-react";

const Notifications = () => {
  const mockNotifications = [
    {
      id: 1,
      type: "like",
      user: "Мария Соколова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      message: "понравился ваш пост",
      time: "5 минут назад",
      read: false,
    },
    {
      id: 2,
      type: "comment",
      user: "Дмитрий Петров",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      message: "прокомментировал ваш пост",
      time: "1 час назад",
      read: false,
    },
    {
      id: 3,
      type: "friend",
      user: "Екатерина Иванова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kate",
      message: "отправила заявку в друзья",
      time: "2 часа назад",
      read: true,
    },
    {
      id: 4,
      type: "group",
      user: "Технологии будущего",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Tech",
      message: "пригласили вас в сообщество",
      time: "5 часов назад",
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "comment":
        return <MessageCircle className="w-5 h-5 text-primary" />;
      case "friend":
        return <UserPlus className="w-5 h-5 text-accent" />;
      case "group":
        return <Users className="w-5 h-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-black gradient-text">Уведомления</h1>
            <Button variant="outline" className="gap-2">
              <CheckCheck className="w-4 h-4" />
              Отметить все
            </Button>
          </div>

          <div className="space-y-2">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`glass-card rounded-xl p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors ${
                  !notification.read ? "bg-primary/5" : ""
                }`}
              >
                <Avatar>
                  <AvatarImage src={notification.avatar} />
                  <AvatarFallback>{notification.user[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getIcon(notification.type)}
                    <span className="font-semibold">{notification.user}</span>
                    <span className="text-muted-foreground">{notification.message}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                </div>

                {!notification.read && (
                  <div className="w-2 h-2 bg-primary rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
