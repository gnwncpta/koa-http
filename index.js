require('dotenv').config();
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    const data = { code: 200, message: "WELCOME TO KOA HTTP SERVER" };
    const body = JSON.stringify(data);
    ctx.status = 200;
    ctx.body = body;
});

app.listen(process.env.PORT || 3000, () => console.log("Server running on port 3000"));