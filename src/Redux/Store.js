import { createStore } from "redux";
const AccountDetails = {
  AccountBal: 0,
  Name: "",
  Mobile: null,
  Counter: 0,
};

const Reducer = (state = AccountDetails, action) => {
  // console.log(action)

  if (action.type === "Deposit") {
    return { ...state, AccountBal: state.AccountBal + +action.playload };
  } else if (action.type === "Withdraw") {
    return { ...state, AccountBal: state.AccountBal - +action.playload };
  } else if (action.type === "Mobile") {
    return { ...state, Mobile: action.playload };
  } else if (action.type === "Name") {
    return { ...state, Name: action.playload };
  } else if (action.type === "reset") {
    return AccountDetails;
  }
  if (action.type === "Increment") {
    return { ...state, Counter: state.Counter + +action.playload };
  } else if (action.type === "Decrement") {
    return { ...state, Counter: state.Counter - +action.playload };
  } else {
    return state;
  }
};
const store = createStore(Reducer);

// console.log(store.getState())

// store.dispatch({type:"Deposit",playload:25000})
// store.dispatch({type:"Withdraw",playload:5000})
// store.dispatch({type:"Mobile",playload:9603049161})
// store.dispatch({type:"Name",playload:"Prashanth"})
// console.log(store.getState())
export default store;
