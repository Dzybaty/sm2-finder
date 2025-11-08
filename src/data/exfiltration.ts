import image0 from '@/assets/images/09_exfiltration/01.webp';
import image1 from '@/assets/images/09_exfiltration/02.webp';
import image2 from '@/assets/images/09_exfiltration/03.webp';
import image3 from '@/assets/images/09_exfiltration/04.webp';
import image4 from '@/assets/images/09_exfiltration/05.webp';
import image5 from '@/assets/images/09_exfiltration/06.webp';
import image6 from '@/assets/images/09_exfiltration/07.webp';
import image7 from '@/assets/images/09_exfiltration/08.webp';

import { MISSION_MAP, COLLECTABLE_MAP } from '@/constants';
import type { OperationT } from '@/types';

export const Exfiltration: OperationT = {
  name: MISSION_MAP.EXFILTRATION,
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
      type: COLLECTABLE_MAP.DATASLATE,
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
  ],
};
