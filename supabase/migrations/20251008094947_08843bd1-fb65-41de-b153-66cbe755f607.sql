-- Create a function to generate test data based on existing users
CREATE OR REPLACE FUNCTION public.generate_test_data()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  users_count INTEGER;
BEGIN
  -- Check if we have enough users
  SELECT COUNT(*) INTO users_count FROM public.profiles;
  
  IF users_count < 5 THEN
    RAISE EXCEPTION 'Need at least 5 registered users to generate test data. Please create users first.';
  END IF;

  -- Insert test posts (100 posts using existing users)
  INSERT INTO public.posts (author_id, content, media_urls, tags)
  SELECT 
    p.id,
    'Пост #' || s || ': ' || (ARRAY[
      'Привет всем! Отличный день сегодня 🌞',
      'Только что закончил интересный проект. Делюсь впечатлениями!',
      'Кто-нибудь смотрел новый фильм? Стоит ли?',
      'Завтра еду в путешествие! Не могу дождаться ✈️',
      'Изучаю новые технологии. React такой крутой!',
      'Погода сегодня прекрасная, иду гулять 🌳',
      'Кто хочет присоединиться к нашему проекту?',
      'Делюсь своими мыслями о последних событиях...',
      'Спасибо всем за поддержку! Вы лучшие! ❤️',
      'Новый пост в блоге уже готов, читайте!'
    ])[1 + (s % 10)],
    CASE WHEN s % 3 = 0 THEN ARRAY['https://picsum.photos/800/600?random=' || s] ELSE NULL END,
    ARRAY['новости', 'жизнь']
  FROM generate_series(1, LEAST(100, users_count * 10)) s
  CROSS JOIN LATERAL (
    SELECT id FROM public.profiles ORDER BY RANDOM() LIMIT 1
  ) p;

  RAISE NOTICE 'Test data generated successfully!';
END;
$$;