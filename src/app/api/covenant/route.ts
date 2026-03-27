import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, org, role, letter, timestamp } = body;

    if (!name?.trim() || !letter?.trim()) {
      return NextResponse.json({ error: 'Name and letter are required.' }, { status: 400 });
    }

    const entry = {
      timestamp: timestamp || new Date().toISOString(),
      name: name.trim(),
      org: org?.trim() || null,
      role: role?.trim() || null,
      letter: letter.trim(),
    };

    // Write to a local witness file (append-only)
    // In production, swap this for your preferred store (DB, Notion, email, etc.)
    const witnessDir = path.join(process.cwd(), 'data');
    const witnessFile = path.join(witnessDir, 'covenant-witness.jsonl');

    if (!fs.existsSync(witnessDir)) {
      fs.mkdirSync(witnessDir, { recursive: true });
    }

    fs.appendFileSync(witnessFile, JSON.stringify(entry) + '\n', 'utf8');

    // Optional: send notification email here
    // await sendWitnessEmail(entry);

    return NextResponse.json({ witnessed: true }, { status: 200 });

  } catch (err) {
    console.error('Covenant API error:', err);
    return NextResponse.json({ error: 'Witness failed.' }, { status: 500 });
  }
}
