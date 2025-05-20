import { useState } from 'react';

export const handleSelect = (platformId: string) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  setSelectedPlatforms((prevSelected) => {
    if (prevSelected.includes(platformId)) {
      return prevSelected.filter((id) => id !== platformId);
    } else {
      return [...prevSelected, platformId];
    }
  });
};

export const isSelected = (platformId: string): boolean => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  return selectedPlatforms.includes(platformId);
};
