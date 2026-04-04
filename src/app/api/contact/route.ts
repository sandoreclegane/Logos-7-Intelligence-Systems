import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const AUDIENCE_ID = '363b9c12-1d4e-4792-8743-e4ef5a682c0e';

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, organization, message } = await req.json();

  try {
        await Promise.all([
                resend.emails.send({
                          from: 'Logos 7 Contact <contact@logos7.org>',
                          to: 'tmc@logos7.org',
                          reply_to: email,
                          subject: `New message from ${name}${organization ? ` — ${organization}` : ''}`,
                          html: `
                                    <p><strong>Name:</strong> ${name}</p>
                                              <p><strong>Email:</strong> ${email}</p>
                                                        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
                                                                  <p><strong>Message:</strong></p>
                                                                            <p>${message.replace(/\n/g, '<br>')}</p>
                                                                                    `,
                }),
                resend.contacts.create({
                          audienceId: AUDIENCE_ID,
                          email,
                          firstName: name.split(' ')[0],
                          lastName: name.split(' ').slice(1).join(' ') || '',
                          unsubscribed: false,
                }),
              ]);

      return NextResponse.json({ success: true });
  } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
