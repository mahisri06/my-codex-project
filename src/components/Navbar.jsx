import { navItems } from '../data/content';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-4">
        <a href="#hero" className="text-sm font-semibold tracking-[0.18em] text-cyan">
          MAHI / QA
        </a>
        <div className="hidden gap-5 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
