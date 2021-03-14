import { useCallback, useState } from 'react';

export default function useCountryHeader() {
  const [sortKey, setSortKey] = useState({
    key: '',
    order: ''
  });

  const onSort = useCallback(
    key => () => {
      setSortKey(prevState => {
        if (prevState.key === key) {
          return {
            key,
            order: prevState.order === 'desc' ? 'asc' : 'desc'
          };
        }

        return {
          key,
          order: 'desc'
        };
      });
    },
    []
  );

  return { sortKey, onSort };
}
