import { useEffect } from 'react';
import silence from '@/assets/audio/silence.mp3';

type Props = {
  isMediaSessionEnabled: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export const useMediaSessionControls = ({
  isMediaSessionEnabled,
  onNext,
  onPrev,
}: Props) => {
  useEffect(() => {
    if (!isMediaSessionEnabled) {
      return;
    }

    const audio = new Audio();
    audio.src = silence;
    audio.loop = true;
    audio.volume = 0;

    audio
      .play()
      .then(() => {
        if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: 'sm2-finder background audio session',
          });

          navigator.mediaSession.setActionHandler('previoustrack', () =>
            onPrev(),
          );
          navigator.mediaSession.setActionHandler('nexttrack', () => onNext());
        }
      })
      .catch(() => {});

    return () => {
      audio.pause();
    };
  }, [isMediaSessionEnabled, onNext, onPrev]);
};
