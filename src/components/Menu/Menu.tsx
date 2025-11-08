import { useState } from 'react';

import MenuIcon from '@/assets/icons/menu.svg?react';

import { MISSION_LIST } from '@/constants';

import styles from './styles';

type MenuProps = {
  onElementClick: (name: string) => void;
};

export const Menu = ({ onElementClick }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMissionSelect = (mission: string) => {
    setIsOpen(false);
    onElementClick(mission);
  };

  const handleToggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div css={[styles.container, !isOpen && styles.containerHidden]}>
      <div css={styles.menu}>
        {MISSION_LIST.map((mission) => (
          <div
            css={styles.menuItem}
            onClick={() => handleMissionSelect(mission)}
          >
            {mission}
          </div>
        ))}
        <div css={styles.toogleButton} onClick={handleToggleButton}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};
