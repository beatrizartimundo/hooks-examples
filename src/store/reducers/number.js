export function numberReducer(state, action) {
  switch (action.type) {
      case 'numberAdd2':
          return { ...state, number: state.number + 2 }
      case 'numberMultiplySeven':
          return { ...state, number: state.number * 7 }
      case 'numberDivideby25':
          return { ...state, number: state.number / 25 }
      case 'numberToIntenger':
          return { ...state, number: parseInt(state.number) }
      case 'addNToNumber':
          return { ...state, number: state.number + action.payload }
      default:
          return state
  }
}