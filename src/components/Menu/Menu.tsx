import { useState } from 'react';

import MenuIcon from '@/assets/icons/menu.svg?react';

import { MISSION_LIST } from '@/constants';

import styles from './styles';

type MenuProps = {
  isMediaSessionEnabled: boolean;
  onMediaSessionChange: (enabled: boolean) => void;
  onElementClick: (name: string) => void;
  onInfoClick: () => void;
};

export const Menu = ({
  isMediaSessionEnabled,
  onMediaSessionChange,
  onElementClick,
  onInfoClick,
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMissionSelect = (mission: string) => {
    setIsOpen(false);
    onElementClick(mission);
  };

  const handleToggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMediaSessionControl = () => {
    onMediaSessionChange(!isMediaSessionEnabled);
  };

  return (
    <div css={[styles.container, !isOpen && styles.containerHidden]}>
      <div css={styles.menu}>
        {MISSION_LIST.map((mission) => (
          <div
            key={mission}
            css={styles.menuItem}
            onClick={() => handleMissionSelect(mission)}
          >
            {mission}
          </div>
        ))}
        <div css={styles.mediaSessionControl}>
          <input
            type="checkbox"
            checked={isMediaSessionEnabled}
            onChange={handleMediaSessionControl}
          />
          <label>Enable media session</label>
        </div>
        <div css={styles.info} onClick={onInfoClick}>
          Information
        </div>
        <div css={styles.toogleButton} onClick={handleToggleButton}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};
