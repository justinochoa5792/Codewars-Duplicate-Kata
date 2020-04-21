//CodeWar duplicate kata
function onlyDuplicates(str) {
    strArr = str.split("");
    strArr2 = [];
      for (let i=0; i < strArr.length; i++) {
      if (strArr.indexOf(str[i]) !== strArr.lastIndexOf(str[i])) {
      strArr2.push(strArr[i]);
      }
      }
      str2 = strArr2.join("");
      return str2
    }