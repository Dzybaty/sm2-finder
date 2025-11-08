import image0 from '@/assets/images/01_inferno/0.webp';
import image1 from '@/assets/images/01_inferno/1.webp';
import image2 from '@/assets/images/01_inferno/2.webp';
import image3 from '@/assets/images/01_inferno/3.webp';
import image4 from '@/assets/images/01_inferno/4.webp';
import image5 from '@/assets/images/01_inferno/5.webp';
import image6 from '@/assets/images/01_inferno/6.webp';
import image7 from '@/assets/images/01_inferno/7.webp';
import image8 from '@/assets/images/01_inferno/8.webp';

import { MISSION_MAP, COLLECTABLE_MAP } from '@/constants';
import type { OperationT } from '@/types';

export const Inferno: OperationT = {
  name: MISSION_MAP.INFERNO,
  collectables: [
    {
      id: 0,
      type: COLLECTABLE_MAP.GENESEED,
      image: image0,
    },
    {
      id: 1,
      type: COLLECTABLE_MAP.DATASLATE,
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
      type: COLLECTABLE_MAP.GENESEED,
      image: image5,
    },
    {
      id: 6,
      type: COLLECTABLE_MAP.GENESEED,
      image: image6,
    },
    {
      id: 7,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image7,
    },
    {
      id: 8,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image8,
    },
  ],
};
