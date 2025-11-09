import { useState, useEffect } from 'react';

import { Slider } from './Slider/Slider';
import styles from './styles';
import {
  useMediaSessionControls,
  useKeyboardControls,
  useSwipeControls,
} from '@/hooks';

import type { OperationT } from '@/types';

type ViewerProps = {
  operation: OperationT;
  isMediaSessionEnabled: boolean;
};

export const Viewer = ({ operation, isMediaSessionEnabled }: ViewerProps) => {
  const [currentStepId, setCurrentStepId] = useState(0);

  useEffect(() => {
    setCurrentStepId(0);
  }, [operation.name]);

  const currentStep = operation.collectables[currentStepId];
  const isPrevStepDisabled = currentStepId === 0;
  const lastStepId = operation.collectables.length - 1;
  const isNextStepDisabled = currentStepId === lastStepId;

  const handleNextStep = () => {
    if (!isNextStepDisabled) {
      setCurrentStepId((prev) => (prev += 1));
    }
  };

  const handlePrevStep = () => {
    if (!isPrevStepDisabled) {
      setCurrentStepId((prev) => (prev -= 1));
    }
  };

  useKeyboardControls({
    onNext: handleNextStep,
    onPrev: handlePrevStep,
  });

  useMediaSessionControls({
    isMediaSessionEnabled,
    onNext: handleNextStep,
    onPrev: handlePrevStep,
  });

  const swipeHandlers = useSwipeControls({
    onNext: handleNextStep,
    onPrev: handlePrevStep,
  });

  return (
    <div css={styles.container}>
      {currentStep && (
        <Slider
          currentStep={currentStep}
          operationName={operation.name}
          isNextStepDisabled={isNextStepDisabled}
          isPrevStepDisabled={isPrevStepDisabled}
          lastStepId={lastStepId}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          swipeHandlers={swipeHandlers}
        />
      )}
    </div>
  );
};
