import { COLLECTABLE_MAP } from '@/constants';

export type CollectableT = {
  id: number;
  type: typeof COLLECTABLE_MAP[keyof typeof COLLECTABLE_MAP];
  image: string;
  pathVariant?: string;
};

export type OperationT = {
  name: string;
  collectables: CollectableT[];
};
