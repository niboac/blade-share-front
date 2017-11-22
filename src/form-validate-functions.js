// 数字（包括小数）验证，适用于 el-input 元素
export const numberRequired = function(rule, value, callback) {
  if (+value >= 0) {
    callback();
  } else {
    callback(new Error('请输入正数'));
  }
};

// 正数验证 ，适用于 el-input-number 元素
export const checkPositiveNumber = function(rule, value, callback) {
  if (typeof value === 'number') {
    if (value <= 0) {
      callback(new Error('必须大于0'));
    } else {
      callback();
    }
  } else {
    callback(new Error('必须是数字'));
  }
}
export const validateEmail = (rule, value, callback) => {
  callback();
};
export const validatePass = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码不能小于6位'));
  } else {
    callback();
  }
}


function IdentityCodeValid(code) {
  let city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  };
  let tip = '';
  let pass = true;

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    tip = '身份证号格式错误';
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = '地址编码错误';
    pass = false;
  } else {
    // 18位身份证需要验证最后一位校验位
    if (code.length === 18) {
      code = code.split('');
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      // 校验位
      let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      let sum = 0;
      let ai = 0;
      let wi = 0;
      for (let i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      let last = parity[sum % 11];
      if (last * 1 !== code[17] * 1) {
        tip = '校验位错误';
        pass = false;
      }
    }
  }
  return { pass, tip };
}

export function idVerify(value) {
  // console.log('idVerify,value = ', value)
  // let { pass, tip } = IdentityCodeValid(value)
  let { pass, tip } = { pass: true, tip: undefined }
  // console.log('tip = ', tip, ' pass = ', pass)
  if (pass) {
    return { valid: true }
  } else {
    return { valid: false, msg: tip }
  }
}
export function positiveNumbeVerify(value) {
  // console.log('!!!!!!!positiveNumbeVerify ', value)
  // console.log('typeof value = ', typeof value)
  if (typeof +value === 'number') {

    let tmp = { valid: +value > 0 }
    if (!tmp.valid) {
      tmp.msg = '请输入正数'
    }
    return tmp
  } else {
    return { valid: true }
  }
}