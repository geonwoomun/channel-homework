import { useDispatch } from 'react-redux';
import { deleteCountryByCodeAction } from '../../../contexts/reducers/country';

export default function useCountryItem(country) {
  const dispatch = useDispatch();
  const { name, alpha2Code, callingCodes, capital, region } = country;
  const onDelete = () => {
    dispatch(deleteCountryByCodeAction(alpha2Code));
  };

  return { name, alpha2Code, callingCodes, capital, region, onDelete };
}
