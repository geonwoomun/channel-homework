import {
  handleAsyncActions,
  reducerUtils
} from '../../../lib/utils/asyncUtils';

export const GET_COUNTRY_LIST = 'GET_COUNTRY_LIST';
export const GET_COUNTRY_LIST_SUCCESS = 'GET_COUNTRY_LIST_SUCCESS';
export const GET_COUNTRY_LIST_ERROR = 'GET_COUNTRY_LIST_ERROR';

export const CREATE_COUNTRY = 'CREATE_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTY';

export const SORT_COUNTRY = 'SORT_COUNTRY';
export const INCREASE_DISPLAY_COUNT = 'INCREASE_DISPLAY_COUNT';

export const getCountryListRequestAction = () => ({
  type: GET_COUNTRY_LIST
});

export const createCountryAction = payload => ({
  type: CREATE_COUNTRY,
  payload
});

export const deleteCountryByCodeAction = code => ({
  type: DELETE_COUNTRY,
  payload: code
});

export const sortCountryAction = ({ key, order }) => ({
  type: SORT_COUNTRY,
  payload: {
    key,
    order
  }
});

export const increaseDisplayCountAction = () => ({
  type: INCREASE_DISPLAY_COUNT,
  payload: 20
});

const initialState = {
  country: reducerUtils.initial([]),
  displayCount: 50
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_LIST:
    case GET_COUNTRY_LIST_SUCCESS:
    case GET_COUNTRY_LIST_ERROR:
      return handleAsyncActions(
        GET_COUNTRY_LIST,
        'country',
        true
      )(state, action);

    case CREATE_COUNTRY:
      const {
        alpha2Code,
        name,
        capital,
        region,
        callingCodes
      } = action.payload;
      return {
        ...state,
        country: {
          ...state.country,
          data: state.country.data.concat({
            name,
            alpha2Code,
            capital,
            region,
            callingCodes
          })
        }
      };

    case DELETE_COUNTRY:
      return {
        ...state,
        country: {
          ...state.country,
          data: state.country.data.filter(
            countryData => countryData.alpha2Code !== action.payload
          )
        }
      };

    case SORT_COUNTRY:
      return {
        ...state,
        country: {
          ...state.country,
          data: [...state.country.data].sort((a, b) => {
            const { key, order } = action.payload;
            if (key === 'callingCodes') {
              const aKey = a[key][0] || '999999';
              const bKey = b[key][0] || '999999';
              const aKeyNumber = parseInt(aKey);
              const bKeyNumber = parseInt(bKey);

              return order === 'desc'
                ? aKeyNumber - bKeyNumber
                : bKeyNumber - aKeyNumber;
            }

            const aKey = a[key] || 'zzzzzzzzzz';
            const bkey = b[key] || 'zzzzzzzzzz';

            if (order === 'desc') {
              return aKey > bkey ? -1 : 1;
            }
            return aKey > bkey ? 1 : -1;
          })
        }
      };

    case INCREASE_DISPLAY_COUNT:
      return {
        ...state,
        displayCount: state.displayCount + action.payload
      };

    default:
      return state;
  }
}
