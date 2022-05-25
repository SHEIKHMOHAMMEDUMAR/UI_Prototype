const date = new Date("2022/04/07");
console.log(date.toLocaleString());
date.setDate(date.getUTCDate() - 7);
console.log(date.toLocaleString());