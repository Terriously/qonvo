let audioInstance: HTMLAudioElement | null = null;

export const toggleAudio = () => {
  if (!audioInstance) {
    audioInstance = new Audio('https://pouch.jumpshare.com/download/RtBB7d_dQLtmGSwZEdxwWLlc0D4CNYcneN9nwGS1ogg');
  }

  if (audioInstance.paused) {
    audioInstance.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  } else {
    audioInstance.pause();
  }

  return !audioInstance.paused;
};

export const isAudioPlaying = () => {
  return audioInstance && !audioInstance.paused;
};