module.exports = {
    sendMail: (who,who64) => {
        const nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "peacelovewww@gmail.com",  // lab 3.2
                pass: "peace&loveapple" // lab 3.2
            }
        });

        var mailOptions = {
            from: "peacelovewww@gmail.com",  // lab 3.3
            to: who, // lab 3.3
            subject: "信箱驗證_Love&Peace",  // lab 3.5
            html: `<h3>請點擊下方連結開通帳號</h3>
            <a href='http://localhost:3000/register/active/${who64}'>請點擊此連結前往認證</a>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });
    },

    codeMail: (who,code) => {
        const nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "peacelovewww@gmail.com",  // lab 3.2
                pass: "peace&loveapple" // lab 3.2
            }
        });

        var mailOptions = {
            from: "peacelovewww@gmail.com",  // lab 3.3
            to: who, // lab 3.3
            subject: "密碼重置_Love&Peace",  // lab 3.5
            html: `<h5>您的驗證碼為${code}</h5>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });
    },
    
    //寄送信用卡交易密碼
    sendVisaMail: (mailOptions) => {
        const nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "peacelovewww@gmail.com",  // lab 3.2
                pass: "peace&loveapple" // lab 3.2
            }
        });

        // var mailOptions = {
        //     from: "peacelovewww@gmail.com",  // lab 3.3
        //     to: who, // lab 3.3 靠杯這邊寫who是沙小啦 這才是收件人信箱在那邊寫who
        //     subject: "Visa信用卡交易密碼_Love&Peace",  // lab 3.5
        //     html: `<h5>您的交易密碼為${visaCode}</h5>`
        // };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("訊息發送: " + info.response);
            }
        });
    }

}