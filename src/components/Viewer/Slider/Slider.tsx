import { useEffect, useMemo } from 'react';
import { useSwipeable, LEFT, RIGHT } from 'react-swipeable';

import { ProgressBar } from './ProgressBar/ProgressBar';

import styles from './styles';

import type { CollectableT } from '@/types';

type SliderProps = {
  currentStep: CollectableT;
  operationName: string;
  lastStepId: number;
  onNext: () => void;
  onPrev: () => void;
};

export const Slider = ({
  currentStep,
  lastStepId,
  operationName,
  onNext,
  onPrev,
}: SliderProps) => {
  const isPrevStepDisabled = useMemo(() => currentStep.id === 0, [currentStep]);
  const isNextStepDisabled = useMemo(
    () => currentStep.id === lastStepId,
    [currentStep, lastStepId],
  );

  useEffect(() => {
    const handleKBNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !isNextStepDisabled) {
        onNext();
      }

      if (e.key === 'ArrowLeft' && !isPrevStepDisabled) {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKBNavigation);

    return () => {
      document.removeEventListener('keydown', handleKBNavigation);
    };
  }, [
    currentStep,
    isNextStepDisabled,
    isPrevStepDisabled,
    lastStepId,
    onNext,
    onPrev,
  ]);

  const swipeHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === LEFT && !isNextStepDisabled) {
        onNext();
      }

      if (dir === RIGHT && !isPrevStepDisabled) {
        onPrev();
      }
    },
  });

  return (
    <div css={styles.container} {...swipeHandlers}>
      <ProgressBar currentStep={currentStep.id} lastStep={lastStepId} />
      <button
        css={[styles.stepButton, styles.prevButton]}
        onClick={onPrev}
        disabled={isPrevStepDisabled}
      />
      <img src={currentStep.image} />
      <button
        css={[styles.stepButton, styles.nextButton]}
        onClick={onNext}
        disabled={isNextStepDisabled}
      />
      <div css={styles.header}>{operationName}</div>
      <div css={styles.label}>{currentStep.type}</div>
    </div>
  );
};
