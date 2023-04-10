
// Min
// let num3 = 0.1;
// let num4 = 0.2;
// let c = Number((num3 + num4).toFixed(1));
// let d = 0.3;
// alert(c == d);

// let firstString = '1';
// let secondNum = 2;
// let result3 = +firstString + secondNum;
// alert(result3 == 3);

// let usbVolum = (Number(prompt('Який обсяг флешки в Гб?'))) * 1024;
// const volumMb = 820;
// let example = ((usbVolum / volumMb).toFixed(0));
// alert(`Вміститься ${example} файлів`);

// Norma

// let summWallet = Number(prompt('Яка сума грошей у Вас в гаманці в грн?'));
// const priceChocolate = 30;
// let howManyChocolates = Number(Math.trunc(summWallet / priceChocolate));
// let change = Number(summWallet - (howManyChocolates * priceChocolate));
// alert(`Можно купити ${howManyChocolates} шоколадок`);
// alert(`Залишиться ${change}грн`);

// let threeDigitNumber = Number(prompt('Назвіть тризначне число'));
// let last = threeDigitNumber % 10;
// let middleHelp = threeDigitNumber % 100;
// let middle = ((threeDigitNumber % 100) -  last) / 10;
// let first = ((threeDigitNumber % 1000) - middleHelp) / 100;
// alert(`${last}${middle}${first}`);

// Max
 let deposit = Number(prompt('Введіть суму вкладу в долларах'));
const percent = 0.05;
const month = 2;
let summPersent = (((deposit * percent) / 12) * 2).toFixed(2);
alert(`Ваша сума нарахованих відсотків за 2 місяці складатиме ${summPersent}$`)







