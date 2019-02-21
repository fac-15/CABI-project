let request = require("request");
require("dotenv").config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

request = request.defaults({ jar: true });
const axios = require("axios");

const url = "http://192.171.139.69/api/api-auth/login/";

const Api = region =>
  new Promise((resolve, reject) => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const lastWeek =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    request.get(url, (err, data) => {
      const csrf = data.headers["set-cookie"][0]
        .split(";")[0]
        .split("csrftoken=")[1];

      // console.log("--------", data.headers["set-cookie"][0] + `Referer=${url};`);
      request.post(
        url,
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            // cookie: data.headers["set-cookie"][0] + `Referer=${url};`,
            Referer: url
          },
          form: {
            csrfmiddlewaretoken: data.headers["set-cookie"][0]
              .split(";")[0]
              .split("csrftoken=")[1],
            username: `${username}`,
            password: `${password}`,
            next: "/api/pests/"
          }
        },
        (postErr, postData) => {
          request.get(
            `http://192.171.139.69/api/pests/?county=${region}&date__gte=${lastWeek}`,
            (err, data) => {
              // `http://192.171.139.69/api/pests/?county=${countyname}&date__gte=${date}`
              if (err) return console.error("oops", err);
              resolve(data.body);
            }
          );
        }
      );
    });
  });

module.exports = Api;
