const date = new Date("2022/04/07");
console.log(date.toLocaleString());
date.setDate(date.getUTCDate() - 7);
console.log(date.toLocaleString());

const re = new RegExp(/[0-9][a-z]*/);
console.log(re.test('dashboard/abcd/12'));