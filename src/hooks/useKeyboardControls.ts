import { useEffect } from 'react';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const useKeyboardControls = ({ onPrev, onNext }: Props) => {
  useEffect(() => {
    const handleKBNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext();
      }

      if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKBNavigation);

    return () => {
      document.removeEventListener('keydown', handleKBNavigation);
    };
  }, [onNext, onPrev]);
};
