const user = (state = {
  name: 'Kamar',
  age: 62
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'SET_AGE':
      return {
        ...state,
        age: action.payload
      }
    default:
      return state
  }
}

export default user
