import { Instagram, Music2, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-16 text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl">Isabella</span>
              <span className="font-script text-2xl text-gold">Cortina</span>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Luxury makeup artistry — bridal, social and editorial beauty crafted in
              Barranquilla, Colombia.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Atelier</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:text-foreground" href="#services">Services</a></li>
              <li><a className="hover:text-foreground" href="#about">About</a></li>
              <li><a className="hover:text-foreground" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Connect</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="https://tiktok.com/" target="_blank" rel="noreferrer"><Music2 className="h-4 w-4" /> TikTok</a></li>
              <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="https://wa.me/573001234567" target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
              <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:hola@isabellacortina.com"><Mail className="h-4 w-4" /> hola@isabellacortina.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Isabella Cortina · All rights reserved</span>
          <span>Barranquilla · Colombia</span>
        </div>
      </div>
    </footer>
  );
}
