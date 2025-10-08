import { Layout } from "@/components/Layout";
import { FeedSection } from "@/components/FeedSection";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Clock, Users } from "lucide-react";

const Feed = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex items-center justify-between mb-8 glass-card p-4 rounded-xl">
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="gap-2">
                <TrendingUp className="w-4 h-4" />
                Популярное
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Clock className="w-4 h-4" />
                Новое
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Users className="w-4 h-4" />
                Подписки
              </Button>
            </div>
            <Button className="gap-2 glow-effect">
              <Plus className="w-4 h-4" />
              Создать пост
            </Button>
          </div>

          <FeedSection />
        </div>
      </div>
    </Layout>
  );
};

export default Feed;
