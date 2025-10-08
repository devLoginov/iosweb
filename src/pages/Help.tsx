import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Help = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black gradient-text mb-8">Помощь и поддержка</h1>

          {/* FAQ */}
          <div className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-black mb-6">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как создать пост?</AccordionTrigger>
                <AccordionContent>
                  Нажмите кнопку "Создать пост" в ленте новостей, введите текст и добавьте медиафайлы при необходимости.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Как добавить друзей?</AccordionTrigger>
                <AccordionContent>
                  Перейдите в профиль пользователя и нажмите "Добавить в друзья". После подтверждения заявки вы станете друзьями.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Как создать сообщество?</AccordionTrigger>
                <AccordionContent>
                  Откройте раздел "Сообщества" и нажмите "Создать сообщество". Заполните информацию о группе и загрузите обложку.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Как изменить настройки приватности?</AccordionTrigger>
                <AccordionContent>
                  Перейдите в Настройки → Приватность и настройте параметры видимости постов и профиля.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Как загрузить музыку или видео?</AccordionTrigger>
                <AccordionContent>
                  Откройте соответствующий раздел (Музыка или Видео) и нажмите кнопку загрузки. Выберите файл и заполните описание.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-black mb-6">Связаться с поддержкой</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="Тема обращения" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Опишите вашу проблему..." rows={6} />
              </div>
              <Button className="w-full glow-effect">Отправить</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
