import { profile } from '../data/profile';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} {profile.name} • {profile.role} • Revenue-focused quality ownership
    </footer>
  );
}

export default Footer;
