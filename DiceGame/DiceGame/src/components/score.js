let totalScore = 10;

const updateValue = (value, flag) => {
  if (!flag) totalScore += value;
  else totalScore = 0;
};

export { updateValue, totalScore };
