import { useEffect } from 'react';

export default function useDynamicStyles(globalStyles, backgroundColor) {
  useEffect(() => {
    globalStyles.container.backgroundColor = backgroundColor;
  }, [backgroundColor]);
  return globalStyles;
}