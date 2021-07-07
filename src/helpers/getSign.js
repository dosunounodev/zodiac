export const getSign = (date) => {
  const bornDate = new Date(date);
  const day = bornDate.getDate() + 1;
  const month = bornDate.getMonth() + 1;

  const getZodiacSign = (day, month) => {
    if ((month === 1 && day <= 20) || (month === 12 && day >= 21)) {
      return 'capricornio';
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
      return 'acuario';
    } else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
      return 'piscis';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
      return 'aries';
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      return 'tauro';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'geminis';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return 'libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 22)) {
      return 'escorpion';
    } else if ((month === 11 && day >= 23) || (month === 12 && day <= 20)) {
      return 'sagitario';
    }
  };

  return getZodiacSign(day, month);
};
