export const playDemoAudio = () => {
  const audio = new Audio('https://pouch.jumpshare.com/download/8oYDPEvJsRfxhQ6y7BVoXe30bSyHqPVLazuSWgyHB655QYGE0KhY_CfnjVlpsgxTXgs2nWcJCa-q8aVA3GU5ng');
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
  });
};