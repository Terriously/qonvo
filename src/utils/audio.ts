let audioInstance: HTMLAudioElement | null = null;

export const toggleAudio = () => {
  if (!audioInstance) {
    audioInstance = new Audio('https://pouch.jumpshare.com/download/8oYDPEvJsRfxhQ6y7BVoXe30bSyHqPVLazuSWgyHB655QYGE0KhY_CfnjVlpsgxTXgs2nWcJCa-q8aVA3GU5ng');
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