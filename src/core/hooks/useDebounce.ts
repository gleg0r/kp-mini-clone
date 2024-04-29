import { useEffect, useState } from 'react';

export default function useDebounce(initValue: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState<string>(initValue);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(initValue);
    }, delay);

    return () => clearTimeout(debounce);
  }, [delay, initValue]);

  return debouncedValue;
}
