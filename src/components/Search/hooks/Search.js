import useDebounce from '../../../hooks/useDebounce';
import { changeSearchWordAction } from '../../../contexts/reducers/search';
import { useDispatch } from 'react-redux';

export default function useSearch() {
  const dispatch = useDispatch();
  const searchCountry = word => {
    dispatch(changeSearchWordAction(word));
  };

  const debounceSearchCountry = useDebounce(searchCountry, 250);
  const onChange = e => debounceSearchCountry(e.target.value);
  return { onChange };
}
