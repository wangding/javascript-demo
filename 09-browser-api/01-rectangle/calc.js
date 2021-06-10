class Util {
  /**
    * 保留小数点后第 n 位
    *
    * @param {Number} x 做近似处理的数
    * @param {Number} n 小数点后第 n 位
    * @returns {Number} 近似处理后的数
    */
  static roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }

  /**
  * 检查按键是否合法
  *
  * @param {String} key 键盘按键
  * @param {String} content 文本框中已有的内容（字符串）
  * @param {Number} pos 文本框中光标位置
  * @returns {Boolean} 按键是否合法，true 合法，false 非法
  */
  static isLegalKey(key, content, pos) {
    // 过滤非法字符
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(key)) {
      return false;
    }

    // 合法字符：. 小数点
    if(key === '.') {
      // 规则：小数点不能出现在数字的首位
      if(pos === 0) return false;

      // 规则：小数点不能出现在小数中
      if(content.indexOf('.') !== -1) return false;

      // 规则：小数点不能出现在负号以及 e 或 E 后面
      if(pos > 0 && /[-eE]/.test(content.slice(0, pos))) return false;
    }

    // 合法字符：e 和 E 科学计数法指数符号
    if(key === 'e' || key === 'E') {
      // 规则：e 和 E 不能出现在数字的首位
      if(pos === 0) return false;

      // 规则：e 和 E 不能出现在科学计数法的数字中
      if(content.indexOf('e') !== -1 || content.indexOf('E') !== -1) return false;

      // 规则：e 和 E 不能出现在负号和小数点后面
      if(pos > 0 && /[-.]/.test(content.slice(pos - 1, pos))) return false;

      // 规则：e 和 E 不能出现在小数点前面
      if(content.slice(pos, content.length).indexOf('.') !== -1) return false;
    }

    // 合法字符：- 负号
    if(key === '-') {
      // 规则：负号不能出现在数字的首位
      if(pos === 0) return false;

      // 规则：负号不能出现在数字和小数点后面
      if(pos > 0 && /[0-9.]/.test(content.slice(pos -1, pos))) return false;

      // 规则：负号不能重复出现
      if(pos > 0 && content.indexOf('-') !== -1) return false;
    }

    return true;
  }

  /**
  * 对数据进行合法性校验
  *
  * @param {String} data 被验证的信息
  * @returns {Object} result 有两个字段
  *          {Boolean} isOK 验证通过为 true，验证不通过为 false
  *          {String} reason 验证不通过的理由
  */
  static validate(data) {
    var result = {
      isOK: false,
      reason: ''
    };

    if(data === '') {
      result.reason = '不能为空！';
      return result;
    }

    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
      result.reason = '必须是数值';
      return result;
    }

    if(Number(data) < 0) {
      result.reason = '必须大于零';
      return result;
    }

    result.isOK = true;
    return result;
  }
}

class Rectangle {
  #w = 0;
  #h = 0;

  constructor(width, height) {
    this.#w = Number(width);
    this.#h = Number(height);
  }

  get area() {
    return Util.roundFractional(this.#w * this.#h, 2);
  }

  get perimeter() {
    return Util.roundFractional(2 * (this.#w + this.#h), 2);
  }
}
