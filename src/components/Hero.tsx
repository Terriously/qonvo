
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Play, Pause } from "lucide-react";
import { toggleAudio, isAudioPlaying } from "@/utils/audio";
import { useState } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fadeIn">
            AI Cold Callers that book more meetings than a human
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            Instantly send calls from your lead list. Automatically handle inbound calls 24/7. Get an AI-powered phone operator tailored for you
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
