import barfootLogo from "@/assets/barfoot-thompson-logo.svg";
import luminoLogo from "@/assets/lumino-logo.png.asset.json";

const TrustedBy = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border/40">
      <div className="container px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by leading kiwi brands
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          <img
            src={barfootLogo}
            alt="Barfoot & Thompson"
            loading="lazy"
            className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src={luminoLogo.url}
            alt="Lumino The Dentists"
            loading="lazy"
            className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <span className="text-xl md:text-2xl font-bold text-foreground/70 hover:text-foreground transition-colors tracking-tight">
            Chang Construction Legal
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
