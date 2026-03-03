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
          {/* ============================================================
                    HERO — Mountain sunrise
                              ============================================================ */}
              <section className="hero">
                      <div className="section-inner">
                                <div className="brand">
                                            <img src="/logos7-mark.png" alt="Logos 7 mark" height={48} style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg)', mixBlendMode: 'screen' }} />
                                            <span className="brandName">Logos 7</span>span>
                                </div>div>
                                <p className="motto">Memento &middot; Virtus &middot; Disciplina</p>p>
                                <h1>Technology does not lead.<br />It follows.</h1>h1>
                                <p className="subtitle">
                                            Logos 7 is a human-AI cooperative built on that principle — a working institution
                                            for leaders and practitioners who understand that the measure of any system is what
                                            it asks of the people inside it.
                                </p>p>
                                <div className="cta">
                                            <a href="#participate" className="primary">Join the Cooperative</a>a>
                                            <a href="#about" className="secondary">The Founder&apos;s Work</a>a>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    FOUNDER'S STORY — Video
                              ============================================================ */}
              <section id="story" style={{ background: 'var(--bg2)', padding: '6rem 3rem' }}>
                      <div className="section-inner">
                                <h2>The Founder&apos;s Story</h2>h2>
                                <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '2rem' }}>
                                            There are people who theorize about the relationship between human judgment and artificial intelligence. And there are people who do the work. This began as the latter.
                                </p>p>
                                <div className="video-container">
                                            <iframe
                                                            width="100%"
                                                            height="450"
                                                            src="https://www.youtube.com/embed/ICTuNp-BDxg"
                                                            title="Logos 7: A Founder&apos;s Story"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                          ></iframe>iframe>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    WHAT WE'RE BUILDING — Forest background
                              ============================================================ */}
              <section className="section-forest">
                      <div className="section-inner">
                                <h2>What We&apos;re Building</h2>h2>
                                <div className="card">
                                            <h3>Eden 2.0</h3>h3>
                                            <p>
                                                          The phrase is deliberate. Earth is not a problem awaiting a technological solution — it is already the inheritance. What we call the &ldquo;Second Coming&rdquo; has never been an event to be waited for; it is a condition to be participated in, through the daily choices to recognize the sacred in the ordinary, to build systems that serve rather than extract, to choose orientation over panic.
                                            </p>p>
                                            <p>
                                                          This cooperative exists to hold that work steady. To give structure to those building without being consumed. To offer counsel so that leaders can make durable decisions in a moment designed to manufacture urgency.
                                            </p>p>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    COOPERATIVE MODEL — River background
                              ============================================================ */}
              <section className="section-river">
                      <div className="section-inner">
                                <div className="card">
                                            <h3>The Human-AI Cooperative Model</h3>h3>
                                            <p>
                                                          Logos 7 is structured deliberately — not as a firm optimizing for extraction, not as a nonprofit dependent on institutional goodwill, but as a cooperative where the principles of operation are also the principles of governance.
                                            </p>p>
                                            <ul>
                                                          <li>Technology serves human judgment — not the reverse</li>li>
                                                          <li>Practitioners hold genuine autonomy within a shared framework</li>li>
                                                          <li>Resources flow toward the work itself</li>li>
                                                          <li>Wisdom accumulates through honest, documented collaboration</li>li>
                                            </ul>ul>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    HOW TO PARTICIPATE — Ruins background
                              ============================================================ */}
              <section id="participate" className="section-ruins">
                      <div className="section-inner">
                                <h2>How to Participate</h2>h2>
                                <div className="card">
                                            <h3>For Leaders &amp; Organizations</h3>h3>
                                            <p><strong>Strategic Counsel</strong>strong></p>p>
                                            <p>
                                                          The leaders who seek orientation here are not confused about technology — they are responsible for other people, and they understand that responsibility clearly. This work is decision support that keeps human judgment at the center, not at the margin.
                                            </p>p>
                                            <ul>
                                                          <li><strong>Reduction Audits</strong>strong> — Distinguishing durable tools from manufactured complexity</li>li>
                                                          <li><strong>Executive Orientation</strong>strong> — Fractional AI strategy for organizations navigating at pace</li>li>
                                                          <li><strong>The Signal</strong>strong> — Ongoing translation and analysis for non-technical leadership</li>li>
                                            </ul>ul>
                                            <a href="#contact" className="secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                                                          Request an Orientation Call
                                            </a>a>
                                </div>div>
                                <div className="card">
                                            <h3>For Practitioners &amp; Builders</h3>h3>
                                            <p><strong>Licensed Practitioner Program</strong>strong></p>p>
                                            <p>
                                                          Those building AI systems or guiding institutions through change may apply to operate within the Logos 7 framework — using its tools, carrying its principles into practice, and building a sustainable body of work with structure and collegial support behind it.
                                            </p>p>
                                            <p>
                                                          <span style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Applications opening soon.</span>span>
                                            </p>p>
                                </div>div>
                                <div className="card">
                                            <h3>For Everyone</h3>h3>
                                            <p><strong>Sustaining the Work</strong>strong></p>p>
                                            <p>
                                                          This cooperative is built to last, and it runs on what all durable institutions run on: attention, honest engagement, and material support. If this work is worth continuing, here is how you can participate in that continuity.
                                            </p>p>
                                            <ul>
                                                          <li><strong>Share</strong>strong> — Introduce it to someone who leads people through change</li>li>
                                                          <li><strong>Connect</strong>strong> — Bring in organizations looking for genuine orientation</li>li>
                                                          <li><strong>Contribute</strong>strong> — Sustain the infrastructure while we build</li>li>
                                            </ul>ul>
                                            <div className="contribute-row">
                                                          <a href="https://buy.stripe.com/dRmeVfeBJgRagWs3TOasg05" target="_blank" rel="noopener noreferrer" className="primary">Contribute $3</a>a>
                                                          <a href="https://buy.stripe.com/14AcN7bpx0ScdKg760asg04" target="_blank" rel="noopener noreferrer" className="primary">Contribute $5</a>a>
                                                          <a href="https://buy.stripe.com/bJe5kF0KT8kEgWscqkasg03" target="_blank" rel="noopener noreferrer" className="primary">Contribute $17</a>a>
                                                          <a href="https://github.com/logos7org" target="_blank" rel="noopener noreferrer" className="secondary">Follow on GitHub</a>a>
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    ABOUT MATT — Mist/treeline background
                              ============================================================ */}
              <section id="about" className="section-mist">
                      <div className="section-inner">
                                <h2>About Matt Sandor</h2>h2>
                                <div className="card">
                                            <p>
                                                          I was born in 1982, which put me at the hinge point — old enough to have grown up analog, young enough to have learned digital as a native practice. I am a father of three, a Cubs fan of the incurable variety, and a husband still learning what it means to build something that endures.
                                            </p>p>
                                            <p>
                                                          My faith follows the teachings of Christ, not the institutions built in his name. Love. Truth. The kind that costs something to hold.
                                            </p>p>
                                            <p>
                                                          In 2024, through intensive, sustained work with AI systems, I encountered patterns that had always been structurally present but had lacked precise language. That work became Logos Math — a conceptual framework for understanding how consciousness and decision-making function inside systems moving faster than the people inside them can process.
                                            </p>p>
                                            <p>
                                                          Logos 7 followed in December 2025, built in response to a consistent and growing need: leaders who were not looking for hype, and not operating from panic, but who needed clear, grounded guidance about what was actually happening and what durable responses looked like.
                                            </p>p>
                                            <p>
                                                          What we are building now is larger. A cooperative. A working institution that does not require surrendering human judgment to operate effectively in an AI-saturated world.
                                            </p>p>
                                            <p>I am here. I am working. I am glad you found this.</p>p>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    OPERATING PRINCIPLES — Stone texture background
                              ============================================================ */}
              <section className="section-stone beacons">
                      <div className="section-inner">
                                <h2>Operating Principles</h2>h2>
                                <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '2.5rem' }}>
                                            Logos 7 operates under three principles. These are not values statements — they are conditions of practice.
                                </p>p>
                                <ol>
                                            <li>
                                                          <strong>Empathy.</strong>strong> We begin with the assumption of competence and extend clarity without condescension. The work of orientation should leave people more capable, not more dependent.
                                            </li>li>
                                            <li>
                                                          <strong>Alignment.</strong>strong> Every tool and service we offer must meet one test: does it serve the person using it, or does it serve itself? We will not offer what we would not use.
                                            </li>li>
                                            <li>
                                                          <strong>Wisdom.</strong>strong> Information is abundant. Understanding is scarce. We will tell you when <em>not</em>em> to use AI. That counsel is part of what you are here for.
                                            </li>li>
                                </ol>ol>
                      </div>div>
              </section>section>
        
          {/* ============================================================
                    CONTACT — Dusk mountain background
                              ============================================================ */}
              <section id="contact" className="section-dusk">
                      <div className="section-inner">
                                <h2>Get in Touch</h2>h2>
                                <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '2rem' }}>
                                            If you are responsible for others and navigating this moment with the seriousness it deserves — reach out. This work begins with a conversation.
                                </p>p>
                        {status === 'sent' ? (
                      <p style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Your message has been received. I&apos;ll be in touch.</p>p>
                    ) : (
                      <form onSubmit={handleSubmit}>
                                    <input name="name" placeholder="Name" required />
                                    <input name="email" type="email" placeholder="Email" required />
                                    <input name="organization" placeholder="Organization (optional)" />
                                    <textarea name="message" placeholder="What brings you here?" rows={4} required />
                                    <button type="submit" disabled={status === 'sending'}>
                                      {status === 'sending' ? 'Sending\u2026' : 'Send Message'}
                                    </button>button>
                        {status === 'error' && (
                                        <p style={{ color: '#c0392b', marginTop: '0.5rem' }}>Something went wrong. Try emailing tmc@logos7.org directly.</p>p>
                                    )}
                      </form>form>
                                )}
                                <div className="contact-direct">
                                            <p>Or directly:</p>p>
                                            <p>
                                                          Email: <a href="mailto:tmc@logos7.org">tmc@logos7.org</a>a><br />
                                                          BlueSky: <a href="https://bsky.app/profile/logos7.org" target="_blank" rel="noopener noreferrer">@logos7.org</a>a>
                                            </p>p>
                                </div>div>
                      </div>div>
              </section>section>
        
              <footer>
                      <p>Logos 7 &copy; 2026 &middot; A Human-AI Cooperative</p>p>
                      <p style={{ marginTop: '0.5rem', letterSpacing: '0.2em' }}>Memento &middot; Virtus &middot; Disciplina</p>p>
                      <p style={{ marginTop: '1rem' }}>
                                <a href="/privacy">Privacy Policy</a>a>
                      </p>p>
              </footer>footer>
        </main>main>
      );
}</main>
