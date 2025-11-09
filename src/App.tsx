import { useState } from 'react';

import { Menu } from '@/components/Menu/Menu';
import { Viewer } from '@/components/Viewer/Viewer';
import './App.css';

import { operations } from '@/data';
import type { OperationT } from '@/types';

function App() {
  const [operation, setOperation] = useState<undefined | OperationT>(undefined);
  const [isMediaSessionEnabled, setIsMediaSessionEnabled] = useState(false);

  const handleOperationSelect = (missionKey: string) => {
    const missionData = operations.find((op) => op.name === missionKey);
    setOperation(missionData);
  };

  return (
    <>
      <Menu
        isMediaSessionEnabled={isMediaSessionEnabled}
        onMediaSessionChange={(isEnabled) =>
          setIsMediaSessionEnabled(isEnabled)
        }
        onElementClick={handleOperationSelect}
      />
      {operation && (
        <Viewer
          operation={operation}
          isMediaSessionEnabled={isMediaSessionEnabled}
        />
      )}
    </>
  );
}

export default App;
