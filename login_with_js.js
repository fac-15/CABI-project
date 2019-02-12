const request = require("request");
const qs = require("querystring");

const url = "http://192.171.139.69/api/api-auth/login/";

request.get(url, (err, data) => {
  console.log("--------", data.headers["set-cookie"][0]);
  // console.log("--------", data.headers["set-cookie"][0] + `Referer=${url};`);
  request.post(
    url,
    {
      headers: {
        // "content-type": "application/json",
        // cookie: data.headers["set-cookie"][0] + `Referer=${url};`,
        Referer: url
      },
      body: JSON.stringify({
        csrfmiddlewaretoken: data.headers["set-cookie"][0]
          .split(";")[0]
          .split("csrftoken=")[1],
        username: "prise",
        password: "pestsinspace",
        next: "/api/pests/"
      })
    },
    (postErr, postData) => {
      //console.log(postErr, postData.statusCode, postData.body);
    }
  );
});
