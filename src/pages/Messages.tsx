import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send, Paperclip } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const mockChats = [
    {
      id: 1,
      name: "Мария Соколова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      lastMessage: "Привет! Как дела?",
      time: "5 мин",
      unread: 2,
    },
    {
      id: 2,
      name: "Дмитрий Петров",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      lastMessage: "Отправил тебе файлы",
      time: "1 ч",
      unread: 0,
    },
  ];

  const mockMessages = [
    { id: 1, text: "Привет!", sender: "other", time: "14:30" },
    { id: 2, text: "Как дела?", sender: "other", time: "14:31" },
    { id: 3, text: "Отлично, спасибо! У тебя как?", sender: "me", time: "14:32" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="glass-card rounded-2xl overflow-hidden h-[calc(100vh-12rem)]">
          <div className="flex h-full">
            {/* Chat List */}
            <div className="w-80 border-r border-border/50 flex flex-col">
              <div className="p-4 border-b border-border/50">
                <h2 className="text-2xl font-black mb-4">Сообщения</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Поиск..."
                    className="pl-10 bg-muted border-0"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {mockChats.map((chat, index) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(index)}
                    className={`w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors ${
                      selectedChat === index ? "bg-muted" : ""
                    }`}
                  >
                    <Avatar>
                      <AvatarImage src={chat.avatar} />
                      <AvatarFallback>{chat.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{chat.name}</span>
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold">
                        {chat.unread}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={mockChats[selectedChat].avatar} />
                  <AvatarFallback>{mockChats[selectedChat].name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{mockChats[selectedChat].name}</h3>
                  <p className="text-sm text-muted-foreground">онлайн</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Input
                    placeholder="Написать сообщение..."
                    className="flex-1 bg-muted border-0"
                  />
                  <Button size="icon" className="glow-effect">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
