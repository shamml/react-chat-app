const initState = {
  profile: [],
  loading: false,
  open: true,
};

const profile = (state = initState, action) => {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'profile/load/success':
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case 'profile/open':
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

// тут экшн креэйторы

export const openProfile = () => {
  return {
    type: 'profile/open',
  };
};

// тут санки

// подгрузка профиля

export const loadProfile = () => {
  return (dispatch) => {
    dispatch({
      type: 'profile/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'profile/load/success',
          payload: json,
        });
      });
  };
};

export default profile;
