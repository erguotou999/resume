"use client";

export function ShadowLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black/10 selection:text-black p-6 lg:p-12 font-mono">
      <div className="max-w-[1600px] mx-auto">{children}</div>

      <style jsx global>{`
        /* The original Calibre webfont is no longer bundled with the repo, so we
           fall back to the same stack the template was designed around. */
        body {
          font-family: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system,
            system-ui, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
          color: black;
          line-height: 1.1;
        }

        .font-mono {
          font-family: 'Fira Code', 'SF Mono', 'Fira Mono', 'Roboto Mono',
            ui-monospace, monospace;
        }
      `}</style>
    </div>
  );
}
