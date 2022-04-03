const express = require("express");
const app = express();
const http = require("http").createServer(app);
const puppeteer = require('puppeteer');
let port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
    const chromeOptions = {
        headless: true,
        defaultViewport: null,
        args: [
            "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ]
    };
    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    await page.goto("https://github.com/");
    let image = await page.screenshot();
    await browser.close();
    res.setHeader("Content-Type", "image/png");
    res.send(image);
})

http.listen(port, () => {
    console.log("Ok");
})