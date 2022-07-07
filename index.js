require('dotenv').config();
const Koa = require('koa');
const app = new Koa();

function index(ctx){
    const data = { 
        code: 200, 
        message: "WELCOME TO KOA HTTP SERVER",
        made_by: "Koa.js, Node.js",
        author: "https://github.com/gnwncpta/"
    };
    const body = JSON.stringify(data);
    ctx.status = 200;
    ctx.body = body;
}

function randomQuotes(ctx){
    const quotes = [
        { quote: "GG GAMING GAK GAES!???", author: "Windah Basudara" },
        { quote: "SIAPA YANG CITA CITANYA ???", author: "Windah Basudara" },
        { quote: "WELCOME DI TAG BLASSSTTT KKRGGHHHH :V", author: "Tara Arts & Gema" },
        { quote: "Kembali lagi yaa bersama sama host yang ganteng disini :D", author: "Tara Arts" },
        { quote: "Yo guys! balik lagi sama gw di Detective Aldo", author: "Detective Aldo" },
    ];

    const pickedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const data = { code: 200, result: pickedQuote };
    const body = JSON.stringify(data);
    ctx.status = 200;
    ctx.body = body;
}

app.use(async (ctx) => {
    const { request } = ctx;
    
    switch(request.url){
        case "/":
            index(ctx);

        case "/randomQuotes":
            randomQuotes(ctx);

        default:
            return new Error();
    }
});

app.listen(process.env.PORT || 3000, () => console.log("Server running on port 3000"));