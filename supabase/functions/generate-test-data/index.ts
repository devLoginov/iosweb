import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.74.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Get all profiles
    const { data: profiles, error: profilesError } = await supabaseAdmin
      .from('profiles')
      .select('id')
      .limit(1000)

    if (profilesError || !profiles || profiles.length < 5) {
      throw new Error('Need at least 5 users. Please create users first using generate-test-users function.')
    }

    const results = {
      posts: 0,
      comments: 0,
      likes: 0,
      groups: 0,
      music: 0,
      videos: 0,
      friends: 0,
      messages: 0,
      notifications: 0
    }

    // Generate posts
    const posts = []
    const postContents = [
      'Привет всем! Отличный день сегодня 🌞',
      'Только что закончил интересный проект. Делюсь впечатлениями!',
      'Кто-нибудь смотрел новый фильм? Стоит ли?',
      'Завтра еду в путешествие! Не могу дождаться ✈️',
      'Изучаю новые технологии. React такой крутой!'
    ]

    for (let i = 0; i < Math.min(500, profiles.length * 5); i++) {
      const randomProfile = profiles[Math.floor(Math.random() * profiles.length)]
      posts.push({
        author_id: randomProfile.id,
        content: postContents[i % postContents.length] + ' #пост' + i,
        media_urls: i % 3 === 0 ? [`https://picsum.photos/800/600?random=${i}`] : null,
        tags: ['новости', 'жизнь']
      })
    }

    const { error: postsError } = await supabaseAdmin.from('posts').insert(posts)
    if (!postsError) results.posts = posts.length

    // Generate groups
    const groupNames = [
      'Программисты России', 'Путешественники', 'Фотографы-любители',
      'Музыканты и композиторы', 'Книжный клуб', 'Киноманы',
      'Геймеры', 'Спортсмены', 'Художники', 'Кулинары'
    ]

    const groups = groupNames.map((name, i) => ({
      name,
      description: `Добро пожаловать в сообщество "${name}"!`,
      owner_id: profiles[i % profiles.length].id
    }))

    const { data: createdGroups, error: groupsError } = await supabaseAdmin
      .from('groups')
      .insert(groups)
      .select()
    
    if (!groupsError) results.groups = groups.length

    // Generate music
    const musicTracks = []
    const trackNames = ['Летняя мелодия', 'Ночной город', 'Танцуй со мной']
    
    for (let i = 0; i < 30; i++) {
      const randomProfile = profiles[Math.floor(Math.random() * profiles.length)]
      musicTracks.push({
        author_id: randomProfile.id,
        title: trackNames[i % trackNames.length] + ' ' + i,
        audio_url: `https://example.com/audio/track${i}.mp3`,
        cover_url: `https://picsum.photos/400/400?random=music${i}`,
        duration: 180 + Math.floor(Math.random() * 240)
      })
    }

    const { error: musicError } = await supabaseAdmin.from('music').insert(musicTracks)
    if (!musicError) results.music = musicTracks.length

    // Generate videos
    const videos = []
    for (let i = 0; i < 20; i++) {
      const randomProfile = profiles[Math.floor(Math.random() * profiles.length)]
      videos.push({
        author_id: randomProfile.id,
        video_url: `https://example.com/video/video${i}.mp4`,
        description: `Видео ${i}`,
        views_count: Math.floor(Math.random() * 10000)
      })
    }

    const { error: videosError } = await supabaseAdmin.from('videos').insert(videos)
    if (!videosError) results.videos = videos.length

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Test data generated successfully!',
        results
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})
