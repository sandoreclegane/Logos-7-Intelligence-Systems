import type { ReactNode } from 'react';

export default function CovenantLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ all: 'initial', display: 'block' }}>
      {children}
    </div>
  );
}
