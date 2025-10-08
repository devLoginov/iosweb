import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Sparkles } from "lucide-react";
const mockPosts = [{
  author: "Алексей Новиков",
  time: "2 часа назад",
  content: "Только что закончил работу над новым AI-проектом. Результаты превзошли все ожидания! 🚀 Скоро поделюсь подробностями.",
  likes: 234,
  comments: 45
}, {
  author: "Мария Соколова",
  time: "5 часов назад",
  content: "Восход солнца в городе — это всегда магия. Делюсь своим утренним настроением с вами ✨",
  likes: 567,
  comments: 89,
  image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80"
}, {
  author: "Дмитрий Петров",
  time: "8 часов назад",
  content: "Новый трек готов! Работал над ним последние 3 месяца. Ambient electronic с элементами neo-classical. Скоро релиз 🎵",
  likes: 892,
  comments: 156
}, {
  author: "Екатерина Иванова",
  time: "12 часов назад",
  content: "Мысли о будущем дизайна: минимализм + эмоции = идеальный баланс. Что думаете?",
  likes: 421,
  comments: 78
}];
export const FeedSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {mockPosts.map((post, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};