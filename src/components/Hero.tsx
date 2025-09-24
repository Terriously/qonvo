
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Play, Pause } from "lucide-react";
import { toggleAudio, isAudioPlaying } from "@/utils/audio";
import { useState, useEffect } from "react";


const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const professions = ["real estate", "finance", "law"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [professions.length]);

  const handleAudioToggle = () => {
    const playing = toggleAudio();
    setIsPlaying(playing);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/95"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fadeIn">
            AI Callers for <span className="text-[#0EA5E9]">{professions[currentTextIndex]}</span>
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            No more chasing cold leads. Provide 24/7 customer support. Get a tailored AI phone assistant for your professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary border-primary hover:bg-white/90" 
              onClick={handleAudioToggle}
            >
              {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />} {isPlaying ? 'Pause Demo' : 'Hear it in Action'}
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90" 
              onClick={() => scrollToSection("contact-form")}
            >
              Tell us your use case
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

