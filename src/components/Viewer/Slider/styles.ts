import { css } from '@emotion/react';

export default {
  container: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Impact, serif',
    fontSize: '2rem',
    textShadow: '2px 2px black',
    color: '#CCB69C',

    '@media (max-width: 700px)': {
      fontSize: '1rem',
    },

    img: {
      display: 'flex',
      height: '100dvh',

      '@media (max-width: 1900px)': {
        width: '100vw',
        height: 'auto',
      },
    },
  }),

  stepButton: css({
    position: 'absolute',
    height: '100%',
    width: '10%',
    opacity: 0.1,
    cursor: 'pointer',
    zIndex: 1,

    ':disabled': {
      display: 'none',
    }
  }),

  prevButton: css({
    left: -1,
  }),

  nextButton: css({
    right: -1,
  }),

  header: css({
    position: 'absolute',
    bottom: 5,
    left: 5,
  }),

  label: css({
    position: 'absolute',
    bottom: 5,
    right: 5,
  }),
};
