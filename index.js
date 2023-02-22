const addDays = require("date-fns/addDays");
const gotoAfterNdays = (days) => {
  const result = addDays(new Date(2020, 07, 22), days);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
};
module.exports = gotoAfterNdays;
