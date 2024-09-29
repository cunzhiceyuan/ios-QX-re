// 设置访问的 URL
const query_addr = `https://witty-gratis-actor.glitch.me/`;

// 构建请求头
const myRequest = {
  url: query_addr,
  headers: {
    'referer': 'https://witty-gratis-actor.glitch.me/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
  }
};

// 发送请求并处理结果，兼容 Loon 和 QuantumultX
function fetch(request, callback) {
  if (typeof $task !== "undefined") {
    // QuantumultX 请求方式
    $task.fetch(request).then(response => {
      callback(null, response, response.body);
    }, reason => {
      callback(reason.error, null, null);
    });
  } else if (typeof $httpClient !== "undefined") {
    // Loon 请求方式
    $httpClient.get(request, (error, response, body) => {
      callback(error, response, body);
    });
  } else {
    console.log("不支持的脚本环境");
    callback("不支持的脚本环境", null, null);
  }
}

// 发起请求
fetch(myRequest, (error, response, data) => {
  if (error) {
    console.log(`访问网站失败, URL=${query_addr}`);
    notify("网站访问", "请求失败", "请检查网络或反馈给开发者");
    $done({});
    return;
  }

  console.log(`访问慢速网站开始：${query_addr}`);
  
  // 响应体数据
  const reg_content = /<title>(.*)<\/title>/gm;
  var titleMatch = reg_content.exec(data);
  
  if (titleMatch && titleMatch[1]) {
    console.log(`网站标题解析成功: ${titleMatch[1]}`);
    notify("网站访问成功", "解析成功", `网站标题: ${titleMatch[1]}`);
    $done({});
  } else {
    console.log(`解析失败, URL=${query_addr}`);
    notify("网站访问", "解析失败", "请检查网站内容或反馈给开发者");
    $done({});
  }
});

// Loon 和 QuantumultX 通知兼容
function notify(title, subtitle, message) {
  if (typeof $loon !== "undefined") {
    $notification.post(title, subtitle, message); // Loon
  } else if (typeof $notify !== "undefined") {
    $notify(title, subtitle, message); // QuantumultX
  } else {
    console.log(`${title}\n${subtitle}\n${message}`);
  }
}
