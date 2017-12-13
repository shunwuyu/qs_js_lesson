let ecDo = {
  trim(str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, "");
      case 2:
        // ()分组 ^ $ | 或者 * 有或者没有
        return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:
        return str.replace(/(^\s*)/g, "");
      case 4:
        return str.replace(/(\s*$)/g, "");
      default:
        return str;
    }
  },
  // navigator对象
  browserInfo(type) {
    switch (type) {
      case 'android':
        return navigator.userAgent.toLowerCase().indexOf('android') !== -1;
      case 'iphone':
        return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
      case 'ipad':
        return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
      case 'weixin':
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
      default:
        return navigator.userAgent.toLowerCase()  
    }
  },
  getUrlPrmt(url) {
    url = url ? url: window.location.href;
    let _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};
    
    for(let val of _arrS) {
      let pos = val.indexOf('=');
      if (pos == -1) {
        continue;
      }
      let name = val.substring(0, pos),
        value = window.decodeURIComponent(val.substring(pos+1));
      _rs[name] = value;
    }
    return _rs;
  },
  randomNumber(n1, n2) {
    // 返回两数之间的范围整数
    if (arguments.length === 2) {
      return Math.round(n1 + Math.random()*(n2 - n1));
    } else if (arguments.length === 1) {
      // 返回0-10的随机整数
      return Math.round(Math.random()*n1);
    } else {
      return Math.round(Math.random()*255);
    }

  },
  randomColor() {
    return '#' + Math.random().toString(16).substring(2).substr(0, 6)
  }
}

console.log(ecDo.trim("  mel  ody  ", 1));
console.log(ecDo.trim("  mel  ody  ", 2))
console.log(ecDo.trim("  mel  ody  ", 3).length);
console.log(ecDo.trim("  mel  ody  ", 4));
console.log(ecDo.randomNumber(1,7));
console.log(ecDo.randomNumber(99));
console.log(ecDo.randomNumber());
