const str = "im   g000009.png";
const reg = /(\D*)([0-9]{0,5})/i;
console.log(reg.exec(str));