let audioInstance: HTMLAudioElement | null = null;

export const toggleAudio = () => {
  if (!audioInstance) {
    audioInstance = new Audio('https://pouch.jumpshare.com/download/eTVk8szJglQZFjw5wuEFM7edCAMR-jdtn1CP3JsBk9o');
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