import styles from './styles';

type ProgressBarProps = {
  currentStep: number;
  lastStep: number;
};

export const ProgressBar = ({ currentStep, lastStep }: ProgressBarProps) => {
  const progressPercentage = currentStep * 100 / lastStep;
  const css = styles({ progress: progressPercentage });

  return (
    <div css={css.container}>
      <div css={css.line} />
    </div>
  );
};
