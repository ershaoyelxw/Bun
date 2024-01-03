const serve = Bun.serve({
  port: 3001,
  fetch(req) {
    // throw new Error("woops!");
    console.log(`监听url改变：${req.url}`)
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
  // error(error) {
  //   return new Response(`<pre>${error}\n${error.stack}</pre>`, {
  //     headers: {
  //       "Content-Type": "text/html",
  //     },
  //   });
  // },
});

console.log(`正在监听：${serve.port}`)