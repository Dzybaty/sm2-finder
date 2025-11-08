import image0 from '@/assets/images/08_obelisk/01.webp';
import image1 from '@/assets/images/08_obelisk/02.webp';
import image2 from '@/assets/images/08_obelisk/03.webp';
import image3 from '@/assets/images/08_obelisk/04.webp';
import image4 from '@/assets/images/08_obelisk/05.webp';
import image5 from '@/assets/images/08_obelisk/06.webp';
import image6 from '@/assets/images/08_obelisk/07.webp';
import image7 from '@/assets/images/08_obelisk/08.webp';
import image8 from '@/assets/images/08_obelisk/09.webp';
import image9 from '@/assets/images/08_obelisk/10.webp';
import image10 from '@/assets/images/08_obelisk/11.webp';
import image11 from '@/assets/images/08_obelisk/12.webp';
import image12 from '@/assets/images/08_obelisk/13.webp';
import image13 from '@/assets/images/08_obelisk/14.webp';
import image14 from '@/assets/images/08_obelisk/15.webp';

import { MISSION_MAP, COLLECTABLE_MAP } from '@/constants';
import type { OperationT } from '@/types';

export const Obelisk: OperationT = {
  name: MISSION_MAP.OBELISK,
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
      type: 'Dataslate',
      image: image4,
    },
    {
      id: 5,
      type: COLLECTABLE_MAP.GENESEED,
      image: image5,
    },
    {
      id: 6,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image13,
    },
    {
      id: 7,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image6,
    },
    {
      id: 8,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image7,
    },
    {
      id: 9,
      type: COLLECTABLE_MAP.GENESEED,
      image: image8,
    },
    {
      id: 10,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image9,
    },
    {
      id: 11,
      type: COLLECTABLE_MAP.GENESEED,
      image: image10,
    },
    {
      id: 12,
      type: COLLECTABLE_MAP.GENESEED,
      image: image11,
    },
    {
      id: 13,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image12,
    },
    {
      id: 14,
      type: COLLECTABLE_MAP.DATASLATE,
      image: image14,
    },
  ],
};
