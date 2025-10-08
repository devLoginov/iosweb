import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  author: string;
  avatar?: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  image?: string;
}

export const PostCard = ({ author, avatar, time, content, likes, comments, image }: PostCardProps) => {
  return (
    <article className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-primary/20 text-primary font-bold">
              {author.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-foreground">{author}</h3>
            <p className="text-sm text-muted-foreground">{time}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-card">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-foreground leading-relaxed">{content}</p>

        {/* Image */}
        {image && (
          <div className="rounded-xl overflow-hidden border border-border/50">
            <img src={image} alt="Post content" className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2 hover:text-primary hover:bg-primary/10 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 hover:text-accent hover:bg-accent/10 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">{comments}</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 transition-colors">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 transition-colors">
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
