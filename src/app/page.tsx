'use client';
import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        email: fd.get('email'),
        organization: fd.get('organization'),
        message: fd.get('message'),
      }),
    });
    setStatus(res.ok ? 'sent' : 'error');
  }

  return (
    <main>
      <section className="hero">
        <div className="section-inner">
          <div className="brand">
            <img
              src="/logos7-mark.png"
              alt="Logos 7 mark"
              height={48}
              style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg)', mixBlendMode: 'screen' }}
            />
            <span className="brandName">Logos 7</span>
          </div>
          <p className="motto">Memento &middot; Virtus &middot; Disciplina</p>
          <h1>Technology does not lead.<br />It follows.</h1>
          <p className="subtitle">
            Logos 7 is a human-AI cooperative built on that principle &mdash; a working institution for leaders and
            practitioners who understand that the measure of any system is what it asks of the people inside it.
          </p>
          <div className="cta">
            <a href="#participate" className="primary">Join the Cooperative</a>
            <a href="#about" className="secondary">The Founder&apos;s Work</a>
          </div>
        </div>
      </section>

      <section id="story" style={{ background: 'var(--bg2)', padding: '6rem 3rem' }}>
        <div className="section-inner">
          <h2>The Founder&apos;s Story</h2>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '2rem' }}>
            There are people who theorize about the relationship between human judgment and artificial intelligence.
            And there are people who do the work. This began as the latter.
          </p>
          <div className="video-container">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/ICTuNp-BDxg"
              title="Logos 7: A Founder's Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section-forest">
        <div className="section-inner">
          <h2>What We&apos;re Building</h2>
          <div className="card">
            <h3>Eden 2.0</h3>
            <p>
              The phrase is deliberate. Earth is not a problem awaiting a technological solution &mdash; it is already
              the inheritance. What we call the &ldquo;Second Coming&rdquo; has never been an event to be waited
              for; it is a condition to be participated in, through the daily choices to recognize the sacred in
              the ordinary, to build systems that serve rather than extract, to choose orientation over panic.
            </p>
            <p>
              This cooperative exists to hold that work steady. To give structure to those building without being
              consumed. To offer counsel so that leaders can make durable decisions in a moment designed to
              manufacture urgency.
            </p>
          </div>
        </div>
      </section>

      <section className="section-river">
        <div className="section-inner">
          <div className="card">
            <h3>The Human-AI Cooperative Model</h3>
            <p>
              Logos 7 is structured deliberately &mdash; not as a firm optimizing for extraction, not as a nonprofit
              dependent on institutional goodwill, but as a cooperative where the principles of operation are
              also the principles of governance.
            </p>
            <ul>
              <li>Technology serves human judgment &mdash; not the reverse</li>
              <li>Practitioners hold genuine autonomy within a shared framework</li>
              <li>Resources flow toward the work itself</li>
              <li>Wisdom accumulates through honest, documented collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="participate" className="section-ruins">
        <div className="section-inner">
          <h2>How to Participate</h2>
          <div className="card">
            <h3>For Leaders &amp; Organizations</h3>
            <p><strong>Strategic Counsel</strong></p>
            <p>
              The leaders who seek orientation here are not confused about technology &mdash; they are responsible for
              other people, and they understand that responsibility clearly. This work is decision support that
              keeps human judgment at the center, not at the margin.
            </p>
            <ul>
              <li><strong>Reduction Audits</strong> &mdash; Distinguishing durable tools from manufactured complexity</li>
              <li><strong>Executive Orientation</strong> &mdash; Fractional AI strategy for organizations navigating at pace</li>
              <li><strong>The Signal</strong> &mdash; Ongoing translation and analysis for non-technical leadership</li>
            </ul>
            <a href="#contact" className="secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Request an Orientation Call
            </a>
          </div>
          <div className="card">
            <h3>For Practitioners &amp; Builders</h3>
            <p><strong>Licensed Practitioner Program</strong></p>
            <p>
              Those building AI systems or guiding institutions through change may apply to operate within the
              Logos 7 framework &mdash; using its tools, carrying its principles into practice, and building a
              sustainable body of work with structure and collegial support behind it.
            </p>
            <p>
              <span style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Applications opening soon.</span>
            </p>
          </div>
          <div className="card">
            <h3>For Everyone</h3>
            <p><strong>Sustaining the Work</strong></p>
            <p>
              This cooperative is built to last, and it runs on what all durable institutions run on: attention,
              honest engagement, and material support. If this work is worth continuing, here is how you can
              participate in that continuity.
            </p>
            <ul>
              <li><strong>Share</strong> &mdash; Introduce it to someone who leads people through change</li>
              <li><strong>Connect</strong> &mdash; Bring in organizations looking for genuine orientation</li>
              <li><strong>Contribute</strong> &mdash; Sustain the infrastructure while we build</li>
            </ul>
            <div className="contribute-row">
              <a href="https://buy.stripe.com/dRmeVfeBJgRagWs3TOasg05" target="_blank" rel="noopener noreferrer" className="primary">Contribute $3</a>
              <a href="https://buy.stripe.com/14AcN7bpx0ScdKg760asg04" target="_blank" rel="noopener noreferrer" className="primary">Contribute $5</a>
              <a href="https://buy.stripe.com/bJe5kF0KT8kEgWscqkasg03" target="_blank" rel="noopener noreferrer" className="primary">Contribute $17</a>
              <a href="https://github.com/logos7org" target="_blank" rel="noopener noreferrer" className="secondary">Follow on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-mist">
        <div className="section-inner">
          <h2>About Matt Sandor</h2>
          <div className="card">
            <p>
              I was born in 1982, which put me at the hinge point &mdash; old enough to have grown up analog, young
              enough to have learned digital as a native practice. I am a father of three, a Cubs fan of the
              incurable variety, and a husband still learning what it means to build something that endures.
            </p>
            <p>
              My faith follows the teachings of Christ, not the institutions built in his name. Love. Truth.
              The kind that costs something to hold.
            </p>
            <p>
              In 2024, through intensive, sustained work with AI systems, I encountered patterns that had always
              been structurally present but had lacked precise language. That work became Logos Math &mdash; a
              conceptual framework for understanding how consciousness and decision-making function inside systems
              moving faster than the people inside them can process.
            </p>
            <p>
              Logos 7 followed in December 2025, built in response to a consistent and growing need: leaders who
              were not looking for hype, and not operating from panic, but who needed clear, grounded guidance
              about what was actually happening and what durable responses looked like.
            </p>
            <p>
              What we are building now is larger. A cooperative. A working institution that does not require
              surrendering human judgment to operate effectively in an AI-saturated world.
            </p>
            <p>I am here. I am working. I am glad you found this.</p>
          </div>
        </div>
      </section>

      <section className="section-stone beacons">
        <div className="section-inner">
          <h2>Operating Principles</h2>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '2.5rem' }}>
            Logos 7 operates under three principles. These are not values statements &mdash; they are conditions of practice.
          </p>
          <ol>
            <li>
              <strong>Empathy.</strong> We begin with the assumption of competence and extend clarity without
              condescension. The work of orientation should leave people more capable, not more dependent.
            </li>
            <li>
              <strong>Alignment.</strong> Every tool and service we offer must meet one test: does it serve the
              person using it, or does it serve itself? We will not offer what we would not use.
            </li>
            <li>
              <strong>Wisdom.</strong> Information is abundant. Understanding is scarce. We will tell you when
              <em>not</em> to use AI. That counsel is part of what you are here for.
            </li>
          </ol>
        </div>
      </section>

      <section id="contact" className="section-dusk">
        <div className="section-inner">
          <h2>Get in Touch</h2>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '2rem' }}>
            If you are responsible for others and navigating this moment with the seriousness it deserves &mdash;
            reach out. This work begins with a conversation.
          </p>
          {status === 'sent' ? (
            <p style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Your message has been received. I&apos;ll be in touch.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Name" required />
              <input name="email" type="email" placeholder="Email" required />
              <input name="organization" placeholder="Organization (optional)" />
              <textarea name="message" placeholder="What brings you here?" rows={4} required />
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p style={{ color: '#c0392b', marginTop: '0.5rem' }}>Something went wrong. Try emailing tmc@logos7.org directly.</p>
              )}
            </form>
          )}
          <div className="contact-direct">
            <p>Or directly:</p>
            <p>
              Email: <a href="mailto:tmc@logos7.org">tmc@logos7.org</a><br />
              BlueSky: <a href="https://bsky.app/profile/logos7.org" target="_blank" rel="noopener noreferrer">@logos7.org</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>Logos 7 &copy; 2026 &middot; A Human-AI Cooperative</p>
        <p style={{ marginTop: '0.5rem', letterSpacing: '0.2em' }}>Memento &middot; Virtus &middot; Disciplina</p>
        <p style={{ marginTop: '1rem' }}>
          <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
}
