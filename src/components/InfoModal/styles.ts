import { css } from '@emotion/react';

export default {
  infoModal: css({
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 11,
  }),

  infoContainer: css({
    display: 'flex',
    flexDirection: 'column',
    background: '#323232',
    maxWidth: '90%',
    borderRadius: 6,

    '@media (min-width: 1080px)': {
      maxWidth: '40%',
    },

    p: {
      padding: '0 10px',
      margin: '6px 0',
      fontSize: '1.2rem',

      a: {
        color: 'darkgray',
      },
    }
  }),

    header: css({
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: 6,

    button: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    },
  }),
};
