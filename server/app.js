const Koa = require("koa");
const Router = require("koa-router");
const proxy = require("koa-server-http-proxy");
const koaStatic = require("koa-static");
const fs = require("fs");
const path = require("path");
const cors = require("koa2-cors");

const router = Router();
const app = new Koa();

const PORT = 3030;

// views
// router.get("/*", async (ctx, next) => {
//   // let str = fs.readFileSync(path.resolve(__dirname, "../build/index.html"), "utf-8");
//   ctx.response.body = "xxx";
// });
app.use(
  cors({
    origin: function (ctx) {
      return "*";
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
    allowHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"], //设置服务器支持的所有头信息字段
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
  })
);
router.get("/*", async (ctx, next) => {
  // let str = fs.readFileSync(path.resolve(__dirname, "../build/index.html"), "utf-8");
  ctx.response.body = "xxx";
});
// // proxy
// app.use(
//   proxy("/api", {
//     target: "http://api.douban.com/",
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": "/v2", // 重写路径
//     },
//   })
// );
// app.use(
//   proxy("/bing", {
//     target: "https://www.bing.com/",
//     changeOrigin: true,
//     pathRewrite: {
//       "^/bing": "/", // 重写路径
//     },
//   })
// );

const proxyTable = {
  "/api": {
    target: "https://douban.uieee.com/",
    pathRewrite: { "^/api": "/v2" },
    changeOrigin: true,
  },
  "/bing": {
    target: "https://www.bing.com/",
    pathRewrite: { "^/bing": "/" },
    changeOrigin: true,
  },
};

Object.keys(proxyTable).forEach((context) => {
  var options = proxyTable[context];
  app.use(proxy(context, options));
});

// static
// app.use(koaStatic(path.resolve(__dirname, "../build")));

// routes
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
