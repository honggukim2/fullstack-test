const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/boot',  // '/boot' 경로로 들어오는 모든 요청에 대해 프록시 설정
    createProxyMiddleware("/boot",{
      target: 'http://localhost:8090',  // 백엔드 Spring Boot 서버 주소 (8090 포트 사용)
      changeOrigin: true,
      ws: true,  // WebSocket 지원 활성화 (필요한 경우)
      // pathRewrite 옵션 제거: 프록시에서 경로를 그대로 유지하도록 설정
    })
  );
};
