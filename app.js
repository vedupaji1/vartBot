// const express = require("express");
// const app = express();
// const http = require("http").createServer(app);
// const puppeteer = require('puppeteer');
// let port = process.env.PORT || 8000;

// app.get("/", async (req, res) => {
//     const chromeOptions = {
//         headless: true,
//         defaultViewport: null,
//         args: [
//             "--incognito",
//             "--no-sandbox",
//             "--single-process",
//             "--no-zygote"
//         ]
//     };
//     const browser = await puppeteer.launch(chromeOptions);
//     const page = await browser.newPage();
//     await page.goto("https://github.com/");
//     let image = await page.screenshot();
//     await browser.close();
//     res.setHeader("Content-Type", "image/png");
//     res.send(image);
// })

// http.listen(port, () => {
//     console.log("Ok");
// })
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const puppeteer = require('puppeteer');

let port = process.env.PORT || 8000;
let browser = null;
let page = null;
const devices = puppeteer.devices;
const iPhonex = devices['iPhone X'];
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

const sleepForTime = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, time)
    })
}

app.get("/", async (req, res) => {
    res.send({browser:browser,page:page});
//     try {
//         if (req.query.username.length > 0 && req.query.message.length > 0 && req.query.times.length > 0) {
//             if (req.query.times <= 20 && req.query.times >= 1) {
//                 if (req.query.message.length <= 20) {
//                     try {
//                         page = await browser.newPage();
//                         await page.emulate(iPhonex);
//                         await page.goto(`https://www.instagram.com/${req.query.username}/`);
//                         await page.waitForSelector("#react-root > section > main > div > ul > li:nth-child(2)");
//                         let result = await page.evaluate(() => {
//                             if (document.querySelector("#react-root > section > main > div > ul > li:nth-child(2)").childNodes[0].href !== undefined) {
//                                 return true;
//                             } else {
//                                 return false;
//                             }
//                         })
//                         console.log(result);
//                         if (result == true) {
//                             await page.evaluate(async () => {
//                                 if (!(document.querySelector("#react-root > section > main > div > header > section > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div").childElementCount > 1)) {
//                                     document.querySelector("#react-root > section > main > div > header > section > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div > span > span.vBF20._1OSdk > button").click()
//                                 }
//                             })
//                             await page.waitForSelector("#react-root > section > main > div > header > section > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div.qF0y9.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > button");
//                             await page.click("#react-root > section > main > div > header > section > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div.qF0y9.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > button");
//                             await page.waitForSelector("#react-root > section > div.IEL5I > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi > textarea");
//                             for (let i = 0; i < req.query.times; i++) {
//                                 let mess = req.query.message;
//                                 await sleepForTime(500);
//                                 await page.type("#react-root > section > div.IEL5I > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi > textarea", mess);
//                                 await page.click("#react-root > section > div.IEL5I > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
//                             }
//                             await page.close();
//                             res.send("Done");
//                         } else {
//                             await page.close();
//                             res.send("Username Is Private Or Not Available");
//                         }
//                     } catch (error) {
//                         console.log(error);
//                         res.send("Something Went Wrong");
//                     }
//                 } else {
//                     res.send("Your Message Length Should Not Greater Than 20");
//                 }
//             } else {
//                 res.send("At A Time You Can Send Upto 20 Messages");
//             }
//         } else {
//             res.send("Invalid Request, Please Check Your Request URL");
//         }
//     } catch (error) {
//         res.send("Invalid Request, Please Check Your Request URL");
//     }

})

const initBot = async () => {
    try {
        browser = await puppeteer.launch(chromeOptions);
        page = await browser.newPage();
        await page.emulate(iPhonex);
        await page.goto('https://www.instagram.com/accounts/login/');
//         await page.waitForSelector("#loginForm > div > div:nth-child(3)");
//         await page.type("[name=username]", "oneshreeram");
//         await page.type("[name=password]", "8490856735v");
//         await sleepForTime(2000);
//         await page.keyboard.press("Enter");
//         await page.waitForSelector("#react-root > div > div:nth-child(3) > a._3m3RQ._7XMpj");
//         await sleepForTime(2000);
//         await page.click("#react-root > div > div:nth-child(3) > a._3m3RQ._7XMpj");
//         await page.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");
//         await sleepForTime(3000);
//         await page.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");
//         page.setDefaultTimeout(30000);
//         await sleepForTime(500);
//         await page.mouse.wheel({
//             deltaY: 100
//         })
//         await page.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");
//         await sleepForTime(2000);
//         await page.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");
        await page.close();
    } catch (error) {
        console.log(error);
    }
}
//initBot();

http.listen(port, () => {
    console.log("Ok");
})
