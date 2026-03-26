import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Work — Logos 7',
    description: 'Tools and applications built within the Logos 7 cooperative framework.',
};

const apps = [
  {
        name: '7 Steps',
        tagline: 'Goal Architecture Tool',
        description:
                'A structured framework for building goals that endure. Seven steps drawn from the principles of orientation, discipline, and honest self-assessment. Built for people who want to move deliberately rather than reactively.',
        url: 'https://steps.logos7.org',
        status: 'live',
        category: 'Productivity',
  },
  {
        name: 'ELS Torah',
        tagline: 'Equidistant Letter Sequences',
        description:
                'An exploration of pattern recognition within ancient text. Tools for examining equidistant letter sequences in the Torah — not as proof of anything, but as a lens for understanding how humans find and assign meaning in structure.',
        url: 'https://github.com/sandoreclegane/ELS.Torah',
        status: 'open source',
        category: 'Research',
  },
  {
        name: 'To-Teej.',
        tagline: 'Personal Correspondence Tool',
        description:
                'A private tool for intentional communication. Built for sustained, meaningful correspondence — the kind that builds relationships rather than manages them.',
        url: null,
        status: 'in development',
        category: 'Communication',
  },
  {
        name: 'The American Testament',
        tagline: 'Historical Orientation Framework',
        description:
                'A document and interpretive framework for understanding American civic identity — not as myth, but as a working proposition. Built for leaders who need grounded orientation in a moment of narrative confusion.',
        url: null,
        status: 'in development',
        category: 'Civic',
  },
  {
        name: 'L7IS',
        tagline: 'Logos 7 Intelligence Systems',
        description:
                'The core intelligence architecture behind the Logos 7 cooperative. An open framework for building AI systems that serve human judgment rather than displacing it.',
        url: 'https://github.com/sandoreclegane/L7IS',
        status: 'open source',
        category: 'Infrastructure',
  },
  {
        name: 'Travel Ball Side Gig',
        tagline: 'Resource Hub for Baseball Families',
        description:
                'A practical tool built from lived experience. Resources, planning frameworks, and orientation for families navigating the competitive youth baseball circuit without losing their footing.',
        url: 'https://github.com/sandoreclegane/travel-ball-side-gig',
        status: 'open source',
        category: 'Community',
  },
  ];

const statusColors: Record<string, string> = {
    live: '#4caf82',
    'open source': '#c9a84c',
    'in development': '#8a8a7a',
    'coming soon': '#8a8a7a',
};

export default function AppsPage() {
    return (
          <main>
                <section
                          className="section-ruins"
                          style={{ minHeight: '45vh', display: 'flex', alignItems: 'center' }}
                        >
                        <div className="section-inner" style={{ width: '100%' }}>
                                  <div className="brand" style={{ marginBottom: '1.5rem' }}>
                                              <a
                                                              href="/"
                                                              style={{
                                                                                color: '#c9a84c',
                                                                                textDecoration: 'none',
                                                                                fontSize: '0.78rem',
                                                                                letterSpacing: '0.18em',
                                                                                textTransform: 'uppercase',
                                                                                borderBottom: '1px solid rgba(201,168,76,0.35)',
                                                                                paddingBottom: '1px',
                                                              }}
                                                            >
                                                            &larr; Logos 7
                                              </a>a>
                                  </div>div>
                                  <p className="motto">The Work</p>p>
                                  <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)' }}>
                                              Tools built on<br />the framework.
                                  </h1>h1>
                                  <p className="subtitle">
                                              Each project here is an application of the Logos 7 principle &mdash; technology
                                              that serves a specific human need, built with the same discipline that governs
                                              everything else in this cooperative.
                                  </p>p>
                        </div>div>
                </section>section>
          
                <section style={{ background: 'var(--bg2)', padding: '5rem 3rem' }}>
                        <div className="section-inner">
                                  <div
                                                style={{
                                                                display: 'grid',
                                                                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                                                gap: '1.5rem',
                                                }}
                                              >
                                    {apps.map((app) => (
                                                              <div
                                                                                key={app.name}
                                                                                className="card"
                                                                                style={{
                                                                                                    display: 'flex',
                                                                                                    flexDirection: 'column',
                                                                                                    justifyContent: 'space-between',
                                                                                                    margin: 0,
                                                                                }}
                                                                              >
                                                                              <div>
                                                                                                <div
                                                                                                                      style={{
                                                                                                                                              display: 'flex',
                                                                                                                                              justifyContent: 'space-between',
                                                                                                                                              alignItems: 'flex-start',
                                                                                                                                              marginBottom: '0.5rem',
                                                                                                                        }}
                                                                                                                    >
                                                                                                                    <span
                                                                                                                                            style={{
                                                                                                                                                                      fontSize: '0.68rem',
                                                                                                                                                                      letterSpacing: '0.16em',
                                                                                                                                                                      textTransform: 'uppercase',
                                                                                                                                                                      color: '#8a8a7a',
                                                                                                                                              }}
                                                                                                                                          >
                                                                                                                      {app.category}
                                                                                                                      </span>span>
                                                                                                                    <span
                                                                                                                                            style={{
                                                                                                                                                                      fontSize: '0.65rem',
                                                                                                                                                                      letterSpacing: '0.14em',
                                                                                                                                                                      textTransform: 'uppercase',
                                                                                                                                                                      color: statusColors[app.status] ?? '#8a8a7a',
                                                                                                                                                                      background: 'rgba(0,0,0,0.35)',
                                                                                                                                                                      padding: '0.2rem 0.55rem',
                                                                                                                                                                      borderRadius: '2px',
                                                                                                                                              }}
                                                                                                                                          >
                                                                                                                      {app.status}
                                                                                                                      </span>span>
                                                                                                  </div>div>
                                                                                                <h3 style={{ marginBottom: '0.25rem' }}>{app.name}</h3>h3>
                                                                                                <p
                                                                                                                      style={{
                                                                                                                                              color: '#f0ede6',
                                                                                                                                              fontStyle: 'italic',
                                                                                                                                              fontSize: '0.95rem',
                                                                                                                                              marginBottom: '0.9rem',
                                                                                                                        }}
                                                                                                                    >
                                                                                                  {app.tagline}
                                                                                                  </p>p>
                                                                                                <p style={{ fontSize: '0.93rem', color: 'rgba(240,237,230,0.75)', marginBottom: '1.4rem' }}>
                                                                                                  {app.description}
                                                                                                  </p>p>
                                                                              </div>div>
                                                                              <div>
                                                                                {app.url ? (
                                                                                                    <a
                                                                                                                            href={app.url}
                                                                                                                            target={app.url.startsWith('http') ? '_blank' : undefined}
                                                                                                                            rel={app.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                                                                                            className="secondary"
                                                                                                                            style={{ fontSize: '0.8rem' }}
                                                                                                                          >
                                                                                                      {app.status === 'open source' ? 'View on GitHub' : 'Open App'}
                                                                                                      </a>a>
                                                                                                  ) : (
                                                                                                    <span
                                                                                                                            style={{
                                                                                                                                                      display: 'inline-block',
                                                                                                                                                      padding: '0.75rem 1.9rem',
                                                                                                                                                      border: '1px solid #2a2a26',
                                                                                                                                                      borderRadius: '2px',
                                                                                                                                                      color: '#8a8a7a',
                                                                                                                                                      fontSize: '0.8rem',
                                                                                                                                                      letterSpacing: '0.12em',
                                                                                                                                                      textTransform: 'uppercase',
                                                                                                                                                      fontFamily: "'EB Garamond', Georgia, serif",
                                                                                                                              }}
                                                                                                                          >
                                                                                                                          In Development
                                                                                                      </span>span>
                                                                                                )}
                                                                              </div>div>
                                                              </div>div>
                                                            ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
                <section className="section-stone" style={{ padding: '5rem 3rem' }}>
                        <div className="section-inner">
                                  <div className="card">
                                              <h3>Build Within the Framework</h3>h3>
                                              <p>
                                                            The tools here were built by applying the Logos 7 principles to specific,
                                                            real problems. If you are a practitioner building something that belongs in
                                                            this cooperative &mdash; something that serves people rather than extracting
                                                            from them &mdash; the Licensed Practitioner Program is how you do it with
                                                            structure and support behind you.
                                              </p>p>
                                              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                                            <a href="/#participate" className="secondary">
                                                                            Learn About Licensing
                                                            </a>a>
                                                            <a href="/#contact" className="primary">
                                                                            Start a Conversation
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
                <footer>
                        <p>Logos 7 &copy; 2026 &middot; A Human-AI Cooperative</p>p>
                        <p style={{ marginTop: '0.5rem', letterSpacing: '0.2em' }}>
                                  Memento &middot; Virtus &middot; Disciplina
                        </p>p>
                        <p style={{ marginTop: '1rem' }}>
                                  <a href="/">Home</a>a>
                                  &nbsp;&middot;&nbsp;
                                  <a href="/privacy">Privacy Policy</a>a>
                        </p>p>
                </footer>footer>
          </main>main>
        );
}</main>
