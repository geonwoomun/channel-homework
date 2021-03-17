import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCountryListRequestAction,
  increaseDisplayCountAction,
  resetDisplayCountAction
} from '../../../contexts/reducers/country';
import useThrottle from '../../../hooks/useThrottle';

export default function useCountryList() {
  const dispatch = useDispatch();
  const {
    country: { data, loading, error },
    displayCount
  } = useSelector(state => state.country);
  const { searchWord } = useSelector(state => state.search);

  const countries = useMemo(() => {
    if (!searchWord) return data.slice(0, displayCount);
    if (displayCount !== 50) dispatch(resetDisplayCountAction());

    const lowerSearchWord = searchWord.toLowerCase();
    return data
      .filter(country => {
        const { name, alpha2Code, callingCodes, capital, region } = country;
        const [lowName, lowAlpha, lowCapital, lowRegion] = [
          name,
          alpha2Code,
          capital,
          region
        ].map(value => value.toLowerCase());

        if (
          lowName.includes(lowerSearchWord) ||
          lowAlpha.includes(lowerSearchWord) ||
          lowCapital.includes(lowerSearchWord) ||
          lowRegion.includes(lowerSearchWord)
        ) {
          return true;
        }

        if (callingCodes.some(value => value.includes(lowerSearchWord)))
          return true;
        return false;
      })
      .slice(0, displayCount);
  }, [searchWord, data, displayCount]);

  const upDateDisplayCount = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      dispatch(increaseDisplayCountAction());
    }
  }, []);

  const throttleUpdateDisplayCount = useThrottle(upDateDisplayCount, 250);

  useEffect(() => {
    dispatch(getCountryListRequestAction());
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', throttleUpdateDisplayCount);

    return () => document.removeEventListener(throttleUpdateDisplayCount);
  }, []);

  return { countries, loading, error };
}
