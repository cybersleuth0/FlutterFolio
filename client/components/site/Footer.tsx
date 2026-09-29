export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Ayush Shende</p>
        <p>Built with React, since the portfolio is the one thing I don't ship in Flutter.</p>
      </div>
    </footer>
  );
}
