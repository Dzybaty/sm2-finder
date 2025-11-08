import image0 from '@/assets/images/04_reliquary/01.webp';
import image1 from '@/assets/images/04_reliquary/02.webp';
import image2 from '@/assets/images/04_reliquary/03.webp';
import image3 from '@/assets/images/04_reliquary/04.webp';
import image4 from '@/assets/images/04_reliquary/05.webp';
import image5 from '@/assets/images/04_reliquary/06.webp';
import image6 from '@/assets/images/04_reliquary/07.webp';
import image7 from '@/assets/images/04_reliquary/08.webp';
import image8 from '@/assets/images/04_reliquary/09.webp';
import image9 from '@/assets/images/04_reliquary/10.webp';

import { MISSION_MAP, COLLECTABLE_MAP } from '@/constants';
import type { OperationT } from '@/types';

export const Reliquary: OperationT = {
  name: MISSION_MAP.RELIQUARY,
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
      type: COLLECTABLE_MAP.DATASLATE,
      image: image2,
    },
    {
      id: 3,
      type: COLLECTABLE_MAP.GENESEED,
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
    {
      id: 6,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image6,
    },
    {
      id: 7,
      type: COLLECTABLE_MAP.GENESEED,
      image: image7,
    },
    {
      id: 8,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image8,
    },
    {
      id: 9,
      type: COLLECTABLE_MAP.GENESEED,
      image: image9,
    },
  ],
};
