import { useState, useEffect } from 'react';

import { Slider } from './Slider/Slider';
import styles from './styles';

import type { OperationT } from '@/types';

type ViewerProps = {
  operation?: OperationT;
};

export const Viewer = ({ operation }: ViewerProps) => {
  const [currentStepId, setCurrentStepId] = useState(0);

  useEffect(() => {
    setCurrentStepId(0);
  }, [operation?.name]);

  if (!operation) {
    return null;
  }

  const handleNextStep = () => {
    setCurrentStepId((prev) => (prev += 1));
  };

  const handlePrevStep = () => {
    setCurrentStepId((prev) => (prev -= 1));
  };

  const currentStep = operation.collectables?.[currentStepId];
  const lastStepId = operation.collectables.length - 1;

  return (
    <div css={styles.container}>
      {currentStep && (
        <Slider
          currentStep={currentStep}
          operationName={operation.name}
          lastStepId={lastStepId}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      )}
    </div>
  );
};
