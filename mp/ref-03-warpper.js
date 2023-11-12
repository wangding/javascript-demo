#!/usr/bin/env node

const log  = console.log;

class ExternalSystemWrapper {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.methods = {}; // 存储外部系统的方法
  }

  // 元编程：当调用不存在的方法时，自动添加并转发给外部系统
  get(target, propertyName) {
    if (!(propertyName in this.methods)) {
      const method = this.createMethod(propertyName);
      this.methods[propertyName] = method;
    }

    return this.methods[propertyName];
  }

  // 创建动态方法，用于转发调用给外部系统
  createMethod(propertyName) {
    return async (...args) => {
      const response = await this.makeRequest(propertyName, args);
      return response;
    };
  }

  // 调用外部系统的方法
  async makeRequest(methodName, args) {
    const url = `${this.endpoint}/${methodName}`;
    // 进行网络请求，将请求参数和方法名发送给外部系统
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(args)
    });

    // 处理外部系统返回的数据
    const data = await response.json();
    return data;
  }
}

// 创建连接外部系统的包装器
const externalSystem = new Proxy(new ExternalSystemWrapper('http://localhost:8080/api'), {
  get: function(target, propertyName) {
    return target.get(target, propertyName);
  }
});

// 调用外部系统的方法并获取结果
(async () => {
  const result1 = await externalSystem.someMethod('param1', 'param2');
  console.log(result1);

  const result2 = await externalSystem.anotherMethod(123);
  console.log(result2);
})();

