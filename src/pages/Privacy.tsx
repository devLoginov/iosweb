import { Layout } from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8">
          <h1 className="text-4xl font-black gradient-text mb-8">Политика конфиденциальности</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Сбор информации</h2>
              <p className="leading-relaxed">
                При регистрации на NOVA мы собираем следующую информацию: имя, адрес электронной почты, 
                дату рождения. Также автоматически собирается техническая информация: IP-адрес, тип 
                браузера, операционная система.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Использование информации</h2>
              <p className="leading-relaxed mb-4">Собранная информация используется для:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Предоставления доступа к функционалу платформы</li>
                <li>Персонализации контента и рекомендаций</li>
                <li>Отправки уведомлений и новостей (с вашего согласия)</li>
                <li>Улучшения качества сервиса</li>
                <li>Обеспечения безопасности</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Передача данных третьим лицам</h2>
              <p className="leading-relaxed">
                Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением 
                случаев, предусмотренных законодательством. Мы можем использовать сервисы аналитики и 
                облачного хранения данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p className="leading-relaxed">
                NOVA использует файлы cookie для улучшения работы сайта, сохранения пользовательских 
                настроек и анализа трафика. Вы можете отключить cookie в настройках браузера, но это 
                может ограничить функционал платформы.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Безопасность данных</h2>
              <p className="leading-relaxed">
                Мы применяем современные технологии защиты данных, включая шифрование и защищенные 
                соединения (HTTPS). Однако мы не можем гарантировать абсолютную безопасность при 
                передаче данных через интернет.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Ваши права</h2>
              <p className="leading-relaxed mb-4">Вы имеете право:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Получить доступ к своим персональным данным</li>
                <li>Исправить неточные данные</li>
                <li>Удалить свою учетную запись и данные</li>
                <li>Ограничить обработку данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Изменения в политике</h2>
              <p className="leading-relaxed">
                Мы можем обновлять настоящую Политику конфиденциальности. О существенных изменениях 
                мы уведомим вас по электронной почте или через уведомления на платформе.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Контакты</h2>
              <p className="leading-relaxed">
                По вопросам обработки персональных данных вы можете связаться с нами через форму 
                обратной связи в разделе "Помощь и поддержка".
              </p>
            </section>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
