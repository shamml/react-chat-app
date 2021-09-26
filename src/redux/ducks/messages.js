const initialState = {
  messages: [],
  filter: '',
  loading: false,
  messageText: '',
  loadingMessage: false,
  loadingDeleteMessage: false,
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'message/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'message/load/success':
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case 'message/send/start':
      return {
        ...state,
        loadingMessage: true,
        messageText: '',
      };
    case 'message/send/success':
      return {
        ...state,
        loadingMessage: false,
        messages: [...state.messages, action.payload],
      };
    case 'message/delete/start':
      return {
        ...state,
        loadingDeleteMessage: true,
      };
    case 'message/delete/success':
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message._id !== action.payload,
        ),
        loadingDeleteMessage: false,
      };
    case 'set/message/text':
      return {
        ...state,
        messageText: action.payload,
      };
    case 'set/messages/filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

// тут экшн креэйторы

export const setFilterMessages = (e) => {
  return (dispatch) => {
    dispatch({
      type: 'set/messages/filter',
      payload: e,
    });
  };
};

export const setMessageText = (messageText) => {
  return {
    type: 'set/message/text',
    payload: messageText,
  };
};

// тут санки

//подгрузка сообщений

export const loadMessages = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'message/load/start',
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'message/load/success',
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// добавление сообщений

export const sendMessage = (myId, contactId, messageText) => {
  return (dispatch) => {
    dispatch({
      type: 'message/send/start',
    });
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        myId: `${myId}`,
        contactId: `${contactId}`,
        type: 'text',
        content: messageText,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'message/send/success',
          payload: json,
        });
      });
  };
};

//удаление сообщений

export const removeMessage = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'message/delete/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages/${id}`, {
      method: 'DELETE',
    }).then((json) => {
      dispatch({
        type: 'message/delete/success',
        payload: id,
      });
    });
  };
};

export default messages;
