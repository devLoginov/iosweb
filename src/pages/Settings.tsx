import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { User, Lock, Bell, Palette, Shield } from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-black gradient-text mb-8">Настройки</h1>

        <Tabs defaultValue="profile" className="max-w-4xl">
          <TabsList className="glass-card w-full justify-start mb-8">
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2">
              <Shield className="w-4 h-4" />
              Приватность
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" />
              Уведомления
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Lock className="w-4 h-4" />
              Безопасность
            </TabsTrigger>
            <TabsTrigger value="appearance" className="gap-2">
              <Palette className="w-4 h-4" />
              Внешний вид
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Никнейм</Label>
                <Input id="username" placeholder="@username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Биография</Label>
                <Textarea id="bio" placeholder="Расскажите о себе..." rows={4} />
              </div>
              <Button className="glow-effect">Сохранить изменения</Button>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Кто видит мои посты</p>
                  <p className="text-sm text-muted-foreground">Все пользователи</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Кто может писать мне</p>
                  <p className="text-sm text-muted-foreground">Только друзья</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Показывать онлайн-статус</p>
                  <p className="text-sm text-muted-foreground">Видно всем</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Лайки и реакции</p>
                  <p className="text-sm text-muted-foreground">Уведомления о лайках</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Комментарии</p>
                  <p className="text-sm text-muted-foreground">Новые комментарии</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Заявки в друзья</p>
                  <p className="text-sm text-muted-foreground">Новые заявки</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Сообщения</p>
                  <p className="text-sm text-muted-foreground">Новые сообщения</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Текущий пароль</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Новый пароль</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="glow-effect">Изменить пароль</Button>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Темная тема</p>
                  <p className="text-sm text-muted-foreground">Включена по умолчанию</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Ambient Mode</p>
                  <p className="text-sm text-muted-foreground">Эффекты glassmorphism</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Анимации</p>
                  <p className="text-sm text-muted-foreground">Плавные переходы</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
