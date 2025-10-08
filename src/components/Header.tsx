import { Search, Home, Users, Music, Video, MessageCircle, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinkClass = (path: string) =>
    isActive(path)
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:text-foreground hover:bg-muted";

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-effect">
              <span className="text-2xl font-black">N</span>
            </div>
            <span className="text-2xl font-black tracking-tight gradient-text">NOVA</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/feed">
              <Button variant="ghost" size="sm" className={`gap-2 ${navLinkClass("/feed")}`}>
                <Home className="w-4 h-4" />
                Главная
              </Button>
            </Link>
            <Link to="/groups">
              <Button variant="ghost" size="sm" className={`gap-2 ${navLinkClass("/groups")}`}>
                <Users className="w-4 h-4" />
                Сообщества
              </Button>
            </Link>
            <Link to="/music">
              <Button variant="ghost" size="sm" className={`gap-2 ${navLinkClass("/music")}`}>
                <Music className="w-4 h-4" />
                Музыка
              </Button>
            </Link>
            <Link to="/video">
              <Button variant="ghost" size="sm" className={`gap-2 ${navLinkClass("/video")}`}>
                <Video className="w-4 h-4" />
                Видео
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="sm" className={`gap-2 ${navLinkClass("/messages")}`}>
                <MessageCircle className="w-4 h-4" />
                Сообщения
              </Button>
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск людей, постов, тегов..."
                className="pl-10 glass-card border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link to="/notifications">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
