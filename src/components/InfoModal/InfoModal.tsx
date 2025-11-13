import { useRef } from 'react';

import styles from './styles';

type InfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
  const outsideRef = useRef(null);

  if (!isOpen) {
    return null;
  }

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return (
    <div css={styles.infoModal} ref={outsideRef} onClick={handleClickOutside}>
      <div css={styles.infoContainer}>
        <div css={styles.header}>
          <button onClick={onClose}>x</button>
        </div>
        <p>
          You can use Left/Right arrows on keyboard on desktop, or swipes on
          mobile to navigate between images.
        </p>
        <p>
          You can also enable "Media session" from menu and use Back/Forward
          media keys on the keyboard for navigation on desktop. This way you
          dont need to switch to brower window if you have another monitor.
          Note, that this feature can be unavailable in some browsers. It can
          also interfere with another active media sessions like Youtube, or
          Spotify.
        </p>
        <p>
          Some images show only general direction to a collectible, this way it
          is easier not to skip it.
        </p>
        <p>
          Mostly all images are taken from{' '}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3456143071"
            target="_blank"
          >
            this Steam guide
          </a>{' '}
          made by{' '}
          <a href="https://steamcommunity.com/id/Dr_Faith" target="_blank">
            Dr_Faith
          </a>
          ,{' '}
          <a href="https://steamcommunity.com/id/starwolker" target="_blank">
            starwolker
          </a>{' '}
          and{' '}
          <a href="https://steamcommunity.com/id/balltazar3" target="_blank">
            balltazar3
          </a>
          . So you can go there for additional guidance if you need.
        </p>
        <p>
          I have started updating images with my own with more convenient
          format, but it is a very long and boring process, so I will probably
          abandon this idea.
        </p>
      </div>
    </div>
  );
};
