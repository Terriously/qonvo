import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  type: string
  message?: string
  consent: boolean
}

interface EmailRequest {
  to: string
  subject: string
  formData: FormData
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    const { to, subject, formData } = await req.json() as EmailRequest
    console.log('Received request:', { to, subject, formData })

    const emailHtml = `
      <h2>New Lead Details:</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Type:</strong> ${formData.type}</p>
      ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Qunvo <onboarding@resend.dev>',
        to: [to],
        subject: subject,
        html: emailHtml,
      }),
    })

    const responseText = await res.text()
    console.log('Resend API response:', responseText)

    if (!res.ok) {
      console.error('Resend API error:', responseText)
      throw new Error(`Failed to send email: ${responseText}`)
    }

    return new Response(responseText, {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in send-lead-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})