import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-verdemar text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 xl:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo height={104} />
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Maintenance and operations, built for engineering firms in Ghana.
              Simple, field-ready, and coming soon.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MantroOps. All rights reserved.</p>
          <p>Built in Ghana, for Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
