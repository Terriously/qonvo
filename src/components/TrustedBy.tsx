import barfootLogo from "@/assets/barfoot-thompson-logo.svg";
import rayWhiteLogo from "@/assets/ray-white-logo.png";
import harcourtsLogo from "@/assets/harcourts-logo.png";

const logos = [
  { src: harcourtsLogo, alt: "Harcourts" },
  { src: barfootLogo, alt: "Barfoot & Thompson" },
  { src: rayWhiteLogo, alt: "Ray White" },
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border/40">
      <div className="container px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by leading real estate franchises
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
