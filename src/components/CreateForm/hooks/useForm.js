import { useDispatch, useSelector } from 'react-redux';
import { createCountryAction } from '../../../contexts/reducers/country';
import { firstStringToUpper } from '../../../lib/utils/util';

export default function useForm({ handleSubmit, reset }) {
  const dispatch = useDispatch();
  const {
    country: { data: countries }
  } = useSelector(state => state.country);

  const onSubmit = handleSubmit(formValues => {
    if (
      !countries.every(country => {
        const { name, alpha2Code } = country;

        if (
          name.toLowerCase() === formValues.name.toLowerCase() ||
          alpha2Code.toLowerCase() === formValues.alpha2Code.toLowerCase()
        ) {
          return false;
        }
        return true;
      })
    ) {
      alert('중복된 값입니다.');
      return;
    }

    const { name, alpha2Code, capital, region, callingCodes } = formValues;
    dispatch(
      createCountryAction({
        name: firstStringToUpper(name),
        alpha2Code: firstStringToUpper(alpha2Code),
        capital: firstStringToUpper(capital),
        region: firstStringToUpper(region),
        callingCodes: callingCodes.split(' ')
      })
    );
    reset();
  });

  return { countries, onSubmit };
}
