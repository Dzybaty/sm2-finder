import image0 from '@/assets/images/03_vox_liberatis/01.webp';
import image1 from '@/assets/images/02_decapitation/02.webp';
import image2 from '@/assets/images/02_decapitation/03.webp';
import image3 from '@/assets/images/02_decapitation/04.webp';
import image4 from '@/assets/images/02_decapitation/05.webp';
import image5 from '@/assets/images/02_decapitation/06.webp';
import image6 from '@/assets/images/02_decapitation/07.webp';
import image7 from '@/assets/images/02_decapitation/08.webp';
import image8 from '@/assets/images/02_decapitation/09.webp';
import image9 from '@/assets/images/02_decapitation/10.webp';

import { MISSION_MAP } from '@/constants';
import type { OperationT } from '@/types';

export const VoxLiberatis: OperationT = {
  name: MISSION_MAP.VOX_LIBERATIS,
  collectables: [
    {
      id: 0,
      type: 'Gene-Seed',
      image: image0,
    },
    {
      id: 1,
      type: 'Dataslate',
      image: image1,
    },
    {
      id: 2,
      type: 'Gene-Seed',
      image: image2,
    },
    {
      id: 3,
      type: 'Dataslate',
      image: image3,
    },
    {
      id: 4,
      type: 'Gene-Seed',
      image: image4,
    },
    {
      id: 5,
      type: 'Dataslate',
      image: image5,
    },
    {
      id: 6,
      type: 'Gene-Seed',
      image: image6,
    },
    {
      id: 7,
      type: 'Dataslate',
      image: image7,
    },
    {
      id: 8,
      type: 'Gene-Seed',
      image: image8,
    },
    {
      id: 9,
      type: 'Dataslate',
      image: image9,
    },
  ],
};
