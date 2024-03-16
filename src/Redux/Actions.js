export const Deposit = (amount) => {
  return {
    type: "Deposit",
    playload: amount,
  };
};

export const Withdraw = (amount) => {
  return {
    type: "Deposit",
    playload: amount,
  };
};

export const Name = (name) => {
  return {
    type: "Name",
    playload: name,
  };
};
export const Mobile = (mobile) => {
  return {
    type: "Mobile",
    playload: mobile,
  };
};

export const Increment = () => {
  return {
    type: "Increment",
    playload: 10,
  };
};

export const Decrement = () => {
  return {
    type: "Decrement",
    playload: 10,
  };
};
