import { site } from "@/content/site";

const linkClass =
  "font-mono text-[0.68rem] font-bold text-dim uppercase no-underline hover:text-pink";

export function SiteFooter() {
  return (
    <footer className="relative z-[1] py-[50px]">
      <div className="wrap flex items-end justify-between gap-[30px] max-mid:flex-col max-mid:items-start">
        <div>
          <div className="text-[1.3rem]">{site.wordmark}</div>
          <div className="mt-[9px] font-mono text-[0.68rem] text-dim">
            © {site.year} · A student organization at UCLA · Westwood, California
          </div>
        </div>
        <div className="flex gap-[22px]">
          <a className={linkClass} href={`mailto:${site.email}`}>
            Email
          </a>
          <a
            className={linkClass}
            href={site.github}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
