import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_htlwt4j'      // ganti setelah daftar
const EMAILJS_TEMPLATE_ID = 'template_gkchgda'     // ganti setelah daftar
const EMAILJS_PUBLIC_KEY  = 'kNhF1NcKIhiWzoIvN'        // ganti setelah daftar
const GSHEET_ENDPOINT     = 'https://script.google.com/macros/s/AKfycbwDGAywEYETumGW6dpwx7FwqSnUaEIfZB9rQo1j_4pgBTZYfne2Y76GeCDvZ3H2fehQdQ/exec'   

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function sendContact(payload: ContactPayload): Promise<void> {
  try {
    // Primary: EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message,
        to_email: 'wifacorp.dev@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    )
  } catch (emailErr) {
    console.warn('[EmailJS] failed, falling back to GSheets:', emailErr)

    // Fallback: Google Sheets
    const res = await fetch(GSHEET_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error('Both EmailJS and GSheets fallback failed.')
  }
}