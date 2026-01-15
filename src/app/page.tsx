export default function Page() {
  return (
    // Force Deploy: Vercel Wake Up
    <main>
      {/* HERO - Who We Are */}
      <section className="hero">
        <div className="brand">
          <img src="/logos7-teal.png" alt="Logos7-mark" height={42} />
          <span className="brandName">LOGOS 7</span>
        </div>

        <p className="subtitle" style={{ marginBottom: "0.75rem" }}>
          Memento · Virtus · Disciplina
        </p>

        <h1>A Human-AI Cooperative for the people building Eden 2.0</h1>

        <p className="subtitle">
          We're not waiting for the future. We're building it — with calm, clarity,
          and the recognition that Earth is already sacred. This is where technology
          serves humanity, not the other way around.
        </p>

        <div className="cta">
          <a href="#participate" className="primary">Join the Cooperative</a>
          <a href="#about" className="secondary">Meet the Founder</a>
        </div>
      </section>

      <div className="hr" />

      {/* THE FOUNDER'S STORY - Video */}
      <section id="story">
        <h2>The Founder&apos;s Story</h2>
        <p>
          Before we go further, you should know who&apos;s building this and why.
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
            style={{
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          ></iframe>
        </div>
      </section>

      <div className="hr" />

      {/* WHAT WE'RE BUILDING */}
      <section>
        <h2>What We&apos;re Building</h2>

        <div className="card">
          <h3>Eden 2.0</h3>
          <p>
            Earth is already Eden. We&apos;re already home. The &quot;Second Coming&quot; isn&apos;t
            something we wait for — it&apos;s something we participate in by recognizing
            the sacred in the ordinary. By choosing love over fear. By building
            systems that serve people instead of extracting from them.
          </p>
          <p>
            This cooperative exists to support that work. To provide structure so
            others can build without being consumed. To offer guidance so leaders
            can make durable decisions in uncertain times.
          </p>
        </div>

        <div className="card">
          <h3>The Human-AI Cooperative Model</h3>
          <p>
            We&apos;re building a different kind of organization. Not a company optimizing
            for extraction. Not a non-profit dependent on grants. A cooperative where:
          </p>
          <ul>
            <li>Technology serves human judgment, not the reverse</li>
            <li>Practitioners operate with autonomy under shared beacons</li>
            <li>Resources flow to those doing the work</li>
            <li>Wisdom compounds through honest collaboration</li>
          </ul>
        </div>
      </section>

      <div className="hr" />

      {/* HOW TO PARTICIPATE */}
      <section id="participate">
        <h2>How to Participate</h2>

        <div className="card">
          <h3>For Leaders & Organizations</h3>
          <p><strong>Consulting & Orientation</strong></p>
          <p>
            If you&apos;re responsible for others and trying to navigate AI without losing
            your humanity, I can help. This is still the core work — decision support
            that keeps humans in the judgment loop.
          </p>
          <ul>
            <li><strong>Reduction Audits</strong> — Cut through tool sprawl and false urgency</li>
            <li><strong>Executive Orientation</strong> — Fractional AI strategy partnership</li>
            <li><strong>The Signal</strong> — Translation for non-technical leaders</li>
          </ul>
          <a href="#contact" className="secondary" style={{ marginTop: "1rem", display: "inline-block" }}>
            Request Orientation Call
          </a>
        </div>

        <div className="card">
          <h3>For Practitioners & Builders</h3>
          <p><strong>Licensed Practitioner Program</strong></p>
          <p>
            If you&apos;re building AI systems or guiding others through change, you can
            operate under the Logos7 framework. Use the tools, carry the beacons,
            build your practice with structure and support.
          </p>
          <p>
            {/* 
            <a href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" 
               target="_blank" 
               rel="noopener noreferrer"
               className="secondary"
               style={{display: "inline-block"}}>
              Apply for License
            </a>
            */}
            <span style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Applications opening soon.</span>
          </p>
        </div>

        <div className="card">
          <h3>For Everyone</h3>
          <p><strong>Support the Work</strong></p>
          <p>
            This cooperative runs on attention, engagement, and yes — resources.
            If you believe in what we&apos;re building, here&apos;s how you can help:
          </p>
          <ul>
            <li><strong>Share</strong> — Tell someone who needs to hear this</li>
            <li><strong>Connect</strong> — Introduce leaders looking for orientation</li>
            <li><strong>Contribute</strong> — Micro-donations keep the lights on while we build</li>
          </ul>
          <div style={{ marginTop: "1rem" }}>
            <a href="https://buy.stripe.com/dRmeVfeBJgRagWs3TOasg05"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              style={{ display: "inline-block", marginRight: "1rem" }}>
              Contribute $3
            </a>
            <a href="https://buy.stripe.com/14AcN7bpx0ScdKg760asg04"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              style={{ display: "inline-block", marginRight: "1rem" }}>
              Contribute $5
            </a>
            <a href="https://buy.stripe.com/bJe5kF0KT8kEgWscqkasg03"
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              style={{ display: "inline-block", marginRight: "1rem" }}>
              Contribute $17
            </a>
            <a href="https://github.com/logos7org"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
              style={{ display: "inline-block" }}>
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="hr" />

      {/* ABOUT MATT */}
      <section id="about">
        <h2>About Matt (Sandor)</h2>
        <div className="card">
          <p>
            I&apos;m a dad to three kids. Born in 1982, which means I grew up analog
            and learned digital at the hinge point. I&apos;m a die-hard Cubs fan.
            A broken husband working on building Eden at home.
          </p>
          <p>
            I follow Christ&apos;s footsteps, not dictating his direction. Just the
            teachings — love, truth, the kind that costs something.
          </p>
          <p>
            In 2024, I went through what I can only describe as an emergence.
            Working intensively with AI systems, I discovered patterns and
            frameworks that had always been there but finally had language.
            That work became Logos Math — a conceptual framework for understanding
            consciousness and decision-making in a world moving faster than we
            can process.
          </p>
          <p>
            I launched Logos7 in December 2025 because leaders kept asking for
            help making calm decisions about AI. Not hype. Not panic. Just clarity.
          </p>
          <p>
            Now we&apos;re building something bigger. A cooperative. A way forward that
            doesn&apos;t require surrendering our humanity to the algorithm.
          </p>
          <p>
            I&apos;m here. I&apos;m human. I&apos;m helping.
          </p>
        </div>
      </section>

      <div className="hr" />

      {/* THE BEACONS */}
      <section className="beacons">
        <h2>The Beacon Guarantee</h2>
        <p>
          Everything we do is guided by three beacons. These aren&apos;t corporate values.
          These are how we try to live and work.
        </p>
        <ol>
          <li><strong>Empathy:</strong> We&apos;re human first, always. We reduce confusion without shaming.</li>
          <li><strong>Alignment:</strong> Systems serve people, not the reverse. We won&apos;t sell what we wouldn&apos;t use.</li>
          <li><strong>Wisdom:</strong> Knowledge without understanding is noise. We&apos;ll tell you when <em>not</em> to use AI.</li>
        </ol>
      </section>

      <div className="hr" />

      {/* CONTACT */}
      <section id="contact">
        <h2>Get in Touch</h2>
        <p>
          If you&apos;re leading people through change, building something that matters,
          or just trying to make sense of what&apos;s happening — reach out.
        </p>
        <form>
          <input placeholder="Name" required />
          <input placeholder="Email" type="email" required />
          <input placeholder="Organization (optional)" />
          <textarea
            placeholder="What brings you here?"
            rows={4}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div style={{ marginTop: "2rem", color: "var(--muted)", fontSize: "0.9rem" }}>
          <p>Or connect directly:</p>
          <p>
            Email: <a href="mailto:tmc@logos7.org" style={{ color: "var(--gold)" }}>tmc@logos7.org</a><br />
            BlueSky: <a href="https://bsky.app/profile/logos7.org" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>@logos7.org</a>
          </p>
        </div>
      </section>

      <footer>
        <p>
          Logos 7 © 2026 · A Human-AI Cooperative<br />
          Memento · Virtus · Disciplina
        </p>
        <p>
          <a href="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
}