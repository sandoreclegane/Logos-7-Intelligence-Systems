export default function PrivacyPage() {
    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem", fontFamily: "sans-serif", lineHeight: "1.6" }}>
            <h1>Privacy Policy - Logos 7 Intelligence Systems</h1>
            <p><strong>Last Updated: January 14, 2026</strong></p>

            <section>
                <h2>What We Collect</h2>
                <p>When you support Logos 7 or request services, we collect:</p>
                <ul>
                    <li>Name and email address</li>
                    <li>Payment information (processed securely through Stripe)</li>
                    <li>Any information you voluntarily provide when contacting us</li>
                </ul>
            </section>

            <section>
                <h2>How We Use It</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Process donations and payments</li>
                    <li>Communicate about services or updates</li>
                    <li>Respond to your inquiries</li>
                </ul>
                <p><strong>We do not:</strong></p>
                <ul>
                    <li>Sell your information to anyone</li>
                    <li>Share your data with third parties (except payment processors)</li>
                    <li>Track you across the web</li>
                    <li>Use your data for advertising</li>
                </ul>
            </section>

            <section>
                <h2>Third-Party Services</h2>
                <p>We use:</p>
                <ul>
                    <li><strong>Stripe</strong> for payment processing (subject to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>)</li>
                    <li><strong>Vercel</strong> for website hosting</li>
                </ul>
            </section>

            <section>
                <h2>Your Rights</h2>
                <p>You can:</p>
                <ul>
                    <li>Request deletion of your data at any time</li>
                    <li>Ask what information we have about you</li>
                    <li>Opt out of communications</li>
                </ul>
                <p>Contact us at: <a href="mailto:tmc@logos7.org">tmc@logos7.org</a></p>
            </section>

            <section>
                <h2>Data Retention</h2>
                <p>We keep your information only as long as necessary to provide services or as required by law.</p>
            </section>

            <section>
                <h2>Security</h2>
                <p>We protect your data using industry-standard security measures. Payment information is never stored on our servers.</p>
            </section>

            <section>
                <h2>Children's Privacy</h2>
                <p>We do not knowingly collect information from anyone under 13.</p>
            </section>

            <section>
                <h2>Changes</h2>
                <p>We may update this policy. Changes will be posted here with the date updated.</p>
            </section>

            <section>
                <h2>The Beacons Apply</h2>
                <p>This policy follows our beacons:</p>
                <ul>
                    <li><strong>Empathy:</strong> We handle your data with care and respect</li>
                    <li><strong>Alignment:</strong> We protect your privacy like we'd want ours protected</li>
                    <li><strong>Wisdom:</strong> We collect only what's necessary, nothing more</li>
                </ul>
            </section>

            <section>
                <h2>Contact</h2>
                <p>Questions? Email: <a href="mailto:tmc@logos7.org">tmc@logos7.org</a></p>
            </section>

            <hr style={{ margin: "2rem 0" }} />

            <footer style={{ textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
                <p>
                    <em>Logos 7 Intelligence Systems</em><br />
                    <em>A Human-AI Cooperative</em><br />
                    <em>Memento · Virtus · Disciplina</em>
                </p>
                <p><a href="/">Return to Home</a></p>
            </footer>
        </main>
    );
}
