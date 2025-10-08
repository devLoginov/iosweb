import { Layout } from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8">
          <h1 className="text-4xl font-black gradient-text mb-8">Пользовательское соглашение</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
              <p className="leading-relaxed">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
                администрацией социальной сети NOVA (далее — «Администрация») и пользователями сети 
                (далее — «Пользователь»).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Регистрация и учетная запись</h2>
              <p className="leading-relaxed">
                Для использования функционала NOVA необходимо пройти процедуру регистрации. При регистрации 
                Пользователь обязуется предоставить достоверную информацию. Пользователь несет ответственность 
                за сохранность данных своей учетной записи.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Правила использования</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Запрещено размещать материалы, нарушающие законодательство</li>
                <li>Запрещена публикация спама и рекламы без согласования</li>
                <li>Запрещено использование автоматизированных средств</li>
                <li>Запрещено нарушение авторских прав третьих лиц</li>
                <li>Запрещена публикация оскорбительного контента</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Интеллектуальная собственность</h2>
              <p className="leading-relaxed">
                Все материалы, размещенные на NOVA, являются объектами интеллектуальной собственности. 
                Пользователь сохраняет авторские права на размещенный контент, но предоставляет NOVA 
                неисключительную лицензию на его использование.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Ответственность</h2>
              <p className="leading-relaxed">
                Администрация не несет ответственности за контент, размещаемый Пользователями. 
                Пользователь самостоятельно несет ответственность за свои действия в сети.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Изменение условий</h2>
              <p className="leading-relaxed">
                Администрация оставляет за собой право изменять условия настоящего Соглашения. 
                Изменения вступают в силу с момента их публикации.
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

export default Terms;
