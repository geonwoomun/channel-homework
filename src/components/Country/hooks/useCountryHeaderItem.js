import { useDispatch } from 'react-redux';
import { sortCountryAction } from '../../../contexts/reducers/country';

export default function useCountryHeaderItem({ item, order, onSort }) {
  const dispatch = useDispatch();

  const onClick = () => {
    onSort(item.key)();
    dispatch(sortCountryAction({ key: item.key, order }));
  };

  return { onClick };
}
