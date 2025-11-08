import { useState } from 'react';

import { Menu } from '@/components/Menu/Menu';
import { Viewer } from '@/components/Viewer/Viewer';
import './App.css';

import { operations } from '@/data';
import type { OperationT } from '@/types';

function App() {
  const [operation, setOperation] = useState<undefined | OperationT>(undefined);

  const handleOperationSelect = (missionKey: string) => {
    const missionData = operations.find((op) => op.name === missionKey);
    setOperation(missionData);
  };

  return (
    <>
      <Menu onElementClick={handleOperationSelect}/>
      <Viewer operation={operation} />
    </>
  );
}

export default App;
