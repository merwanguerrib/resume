import { useEffect } from 'react';

const emojis = [
  '😀',
  '😎',
  '👨‍💻',
  '👨🏼‍🍳',
  '💻',
  '📖',
  '🍔',
  '🍕',
  '🌮',
  '👟',
  '🏀',
  '🎾',
  '🎉',
  '🚀',
];

const useDynamicFavicon = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Check if ctx is not null
        ctx.font = '48px serif';
        ctx.fillText(emoji, 0, 48);

        const link: HTMLLinkElement =
          document.querySelector("link[rel*='icon']") ||
          document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL();
        document.getElementsByTagName('head')[0].appendChild(link);
      }
    }, 60000); // Change every minute

    return () => clearInterval(intervalId);
  }, []);
};

export default useDynamicFavicon;
