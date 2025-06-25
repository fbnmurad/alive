function calcLuhn(number) {
  const arr = (number + '').split('').reverse().map(x => parseInt(x));
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (i % 2 === 0) n *= 2;
    if (n > 9) n -= 9;
    sum += n;
  }
  return (10 - (sum % 10)) % 10;
}

function validarLuhn(number) {
  const arr = (number + '').split('').reverse().map(x => parseInt(x));
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (i % 2 === 1) n *= 2;
    if (n > 9) n -= 9;
    sum += n;
  }
  return (sum % 10) === 0;
}

module.exports = { calcLuhn, validarLuhn };

