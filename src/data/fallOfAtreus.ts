import image0 from '@/assets/images/05_fall_of_atreus/01.webp';
import image1 from '@/assets/images/05_fall_of_atreus/02.webp';
import image2 from '@/assets/images/05_fall_of_atreus/03.webp';
import image3 from '@/assets/images/05_fall_of_atreus/04.webp';
import image4 from '@/assets/images/05_fall_of_atreus/05.webp';
import image5 from '@/assets/images/05_fall_of_atreus/06.webp';

import { MISSION_MAP, COLLECTABLE_MAP } from '@/constants';
import type { OperationT } from '@/types';

export const FallOfAtreus: OperationT = {
  name: MISSION_MAP.FALL_OF_ATREUS,
  collectables: [
    {
      id: 0,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image0,
    },
    {
      id: 1,
      type: COLLECTABLE_MAP.GENESEED,
      image: image1,
    },
    {
      id: 2,
      type: COLLECTABLE_MAP.GENESEED,
      image: image2,
    },
    {
      id: 3,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image3,
    },
    {
      id: 4,
      type: COLLECTABLE_MAP.GENESEED,
      image: image4,
    },
    {
      id: 5,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image5,
    },
  ],
};
