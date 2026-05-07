import { socialLinks } from "@/lib/info-data";

export function SocialSection() {
  return (
    <section className="px-5 py-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h2>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-card rounded-xl border border-border/50 p-4 flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/30">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{social.platform}</p>
                <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}