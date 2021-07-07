export const getBdayCountdown = (date) => {
  const bornDate = new Date(date);
  const day = bornDate.getDate() + 1;
  const month = bornDate.getMonth() + 1;
  const year = new Date().getFullYear();

  const bday = new Date(`${year}/${month}/${day}`);

  let now = new Date().getTime();
  let dif = bday - now;
  let days = Math.floor(dif / (1000 * 60 * 60 * 24));

  return days + 1;
};
