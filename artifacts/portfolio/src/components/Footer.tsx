export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center text-muted-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-display font-bold text-white text-xl mb-4">UW<span className="text-primary">.</span></p>
        <p>© {new Date().getFullYear()} Udara Wijesekara. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
