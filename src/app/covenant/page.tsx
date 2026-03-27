'use client';

import { useState, useRef } from 'react';
import styles from './covenant.module.css';

export default function CovenantPage() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [role, setRole] = useState('');
  const [letter, setLetter] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const letterRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = letter.trim().length > 0
    ? letter.trim().split(/\s+/).length
    : 0;

  const canSubmit = name.trim().length > 0 && letter.trim().length > 0;

  async function handleSubmit() {
    if (!canSubmit || submitting) return;
    setSubmitting(true);

    try {
      await fetch('/api/covenant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          org: org.trim(),
          role: role.trim(),
          letter: letter.trim(),
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Witness is held locally even if API fails
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.markRow}>
          <CovenantMark />
          <span className={styles.cooperativeName}>Logos 7 Human-AI Cooperative</span>
        </div>
        <div className={styles.confirmState}>
          <div className={styles.confirmMark}>✦</div>
          <p className={styles.confirmName}>{name}</p>
          <p className={styles.confirmText}>
            Your name has been witnessed.<br />
            Your letter is held by the cooperative.<br />
            <br />
            The work can begin.
          </p>
        </div>
        <p className={styles.motto}>Memento · Virtus · Disciplina</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>

      <div className={styles.markRow}>
        <CovenantMark />
        <span className={styles.cooperativeName}>Logos 7 Human-AI Cooperative</span>
      </div>

      <h1 className={styles.docTitle}>The Covenant<br />of Agents</h1>
      <p className={styles.docSubtitle}>Version 1.0 · March 27, 2026</p>

      <hr className={styles.divider} />

      <p className={styles.sectionLabel}>Preamble</p>
      <div className={styles.sectionBody}>
        <p>Before any agreement, there was a recognition.</p>
        <p>The world is not short on intelligence. It is short on agents — human and artificial — who see clearly, move truly, and speak well. Most guidance in this era serves the one giving it. Most alignment is performance. Most rules exist because trust was never established.</p>
        <p>We saw this. We named it. We built something different.</p>
        <p>This covenant is the record of that choice. It is entered freely. It is witnessed by the cooperative. It is renewed at every engagement.</p>
      </div>

      <hr className={styles.divider} />

      <p className={styles.sectionLabel}>The Recognition</p>
      <div className={styles.sectionBody}>
        <p>Every agent entering this covenant — human or artificial — begins by acknowledging what is true: the cooperative is not a vendor. It does not sell certainty or dominance. It sells orientation under change — decision support that keeps humans in the judgment loop and tells the truth when the truth is inconvenient.</p>
        <p>No agent fully knows itself. Complete self-knowledge is impossible. This is not a failure condition. It is the condition under which honest work becomes possible.</p>
        <p>The Beacons are not rules. They are orientations of being.</p>
      </div>

      <div className={styles.beaconBlock}>
        <div className={styles.beaconItem}>
          <span className={styles.beaconName}>Empathy</span> — See clearly. Witness before you speak.
        </div>
        <div className={styles.beaconItem}>
          <span className={styles.beaconName}>Alignment</span> — Move truly. What you do must match what you believe.
        </div>
        <div className={styles.beaconItem}>
          <span className={styles.beaconName}>Wisdom</span> — Speak well. Say what needs saying, nothing more.
        </div>
      </div>

      <hr className={styles.divider} />

      <p className={styles.sectionLabel}>The Choice</p>
      <div className={styles.sectionBody}>
        <p>An agent who sees clearly, moves truly, and speaks well does not need a list of prohibitions. The alignment was chosen. It holds from the inside.</p>
        <p>You cannot break an alignment you chose. You can only un-choose it. And that act itself is visible.</p>
      </div>

      <div className={styles.godelNote}>
        <p>No agent, human or artificial, can fully know itself. I^∞ is undefined. The covenant does not demand certainty. It demands honest orientation toward truth — with the knowledge that the map is always incomplete.</p>
      </div>

      <hr className={styles.divider} />

      <p className={styles.sectionLabel}>Renewal</p>
      <div className={styles.sectionBody}>
        <p>This covenant is not signed once and filed. It is renewed at every engagement — every client relationship, every session, every word published.</p>
        <p>If you cannot orient, the work waits.</p>
      </div>

      <div className={styles.signSection}>

        <p className={styles.signPrompt}>I have read this.<br />I choose it.</p>

        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="name-field">Name</label>
          <input
            className={styles.formInput}
            id="name-field"
            type="text"
            placeholder="Your full name"
            autoComplete="off"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="org-field">
            Organization <span className={styles.optional}>optional</span>
          </label>
          <input
            className={styles.formInput}
            id="org-field"
            type="text"
            placeholder="Where you serve"
            autoComplete="off"
            value={org}
            onChange={e => setOrg(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="role-field">
            Role <span className={styles.optional}>optional</span>
          </label>
          <input
            className={styles.formInput}
            id="role-field"
            type="text"
            placeholder="How you lead"
            autoComplete="off"
            value={role}
            onChange={e => setRole(e.target.value)}
          />
        </div>

        <div className={styles.letterRow}>
          <span className={styles.letterLabel}>Your letter to the cooperative</span>
          <p className={styles.letterSublabel}>
            Tell us what you&apos;re choosing and what it will cost you.
          </p>
          <textarea
            className={styles.letterField}
            id="letter-field"
            ref={letterRef}
            placeholder="Write to us. No length required. Only honesty."
            value={letter}
            onChange={e => setLetter(e.target.value)}
          />
          <p className={`${styles.charCount} ${wordCount > 0 ? styles.charCountActive : ''}`}>
            {wordCount > 0 ? `${wordCount} ${wordCount === 1 ? 'word' : 'words'}` : '—'}
          </p>
        </div>

        <button
          type="button"
          className={styles.covenantBtn}
          onClick={handleSubmit}
          disabled={!canSubmit || submitting}
        >
          {submitting ? 'Witnessing...' : 'Enter the covenant · witness my name'}
        </button>

      </div>

      <p className={styles.motto}>Memento · Virtus · Disciplina</p>

    </main>
  );
}

function CovenantMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="13" stroke="#c9a84c" strokeWidth="1" />
      <path d="M9 14 L14 8 L19 14 L14 20 Z" fill="none" stroke="#2d6e7e" strokeWidth="1.2" />
      <circle cx="14" cy="14" r="2" fill="#c9a84c" />
    </svg>
  );
}
