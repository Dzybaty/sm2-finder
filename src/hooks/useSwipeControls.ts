import { useSwipeable, LEFT, RIGHT } from 'react-swipeable';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const useSwipeControls = ({ onPrev, onNext }: Props) => {
  const swipeHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === LEFT) {
        onNext();
      }

      if (dir === RIGHT) {
        onPrev();
      }
    },
  });

  return swipeHandlers;
};
