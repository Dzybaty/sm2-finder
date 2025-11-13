import { css } from '@emotion/react';

export default {
  container: css({
    position: 'fixed',
    display: 'flex',
    left: 0,
    zIndex: 10,
    transition: 'transform 0.5s',
    backfaceVisibility: 'hidden',
  }),

  containerHidden: css({
    transform: 'translateX(-150px)',
  }),

  menu: css({
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    gap: 4,
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
    backdropFilter: 'blur(4px)',
    borderRadius: '0 0 10px 0',
  }),

  menuItem: css({
    padding: '0 5px',
    cursor: 'pointer',
    fontFamily: 'Impact, serif',
    fontSize: '1.1rem',
    lineHeight: 1.6,

    '&:hover': {
      backgroundColor: 'rgba(5, 5, 5, 0.7)',

      '&:last-child': {
        borderRadius: '0 0 10px 0',
      },
    },
  }),

  mediaSessionControl: css({
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
    fontSize: 14,
  }),

  info: css({
    margin: '8px 0',
    textAlign: 'center',
    textDecoration: 'underline',
    cursor: 'pointer',
  }),

  toogleButton: css({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 150,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
    backdropFilter: 'blur(4px)',
    borderRadius: '0 10px 10px 0',
    cursor: 'pointer',
  }),
};
