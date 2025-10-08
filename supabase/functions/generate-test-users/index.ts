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
    const { count = 100 } = await req.json()
    
    // Create Supabase admin client
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

    const createdUsers = []
    const errors = []

    // Generate test users
    for (let i = 1; i <= Math.min(count, 1000); i++) {
      try {
        const email = `testuser${i}@nova.social`
        const password = 'TestPassword123!'
        
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: {
            nickname: `testuser${i}`,
            first_name: `TestИмя${i}`,
            last_name: `TestФамилия${i}`,
          }
        })

        if (error) {
          errors.push({ email, error: error.message })
        } else {
          createdUsers.push(email)
        }

        // Add delay to avoid rate limiting
        if (i % 10 === 0) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      } catch (error) {
        errors.push({ index: i, error: error instanceof Error ? error.message : String(error) })
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        created: createdUsers.length,
        errors: errors.length,
        details: { createdUsers, errors }
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
