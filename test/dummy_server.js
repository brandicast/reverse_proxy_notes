// 載入 http 模組
const http = require('http');

// 從命令列參數獲取埠號，預設為 3000
const port = process.argv[2] || 3000;

// 設定主機名
const hostname = '0.0.0.0';

// 建立伺服器
const server = http.createServer((req, res) => {
  // 設定回應的 HTTP 狀態碼與內容類型
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n'); // 回應內容
  console.log ("Request coming in");
  console.log ("Request URI", req.url);
});

// 啟動伺服器並監聽指定埠號
server.listen(port, hostname, () => {
  console.log(`伺服器運行於 http://${hostname}:${port}/`);
});
