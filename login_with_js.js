let request = require('request');
// const qs = require("querystring");

request = request.defaults({ jar: true });

const url = 'http://192.171.139.69/api/api-auth/login/';

request.get(url, (err, data) => {
    console.log('--------', data.headers['set-cookie'][0]);
    const csrf = data.headers['set-cookie'][0]
        .split(';')[0]
        .split('csrftoken=')[1];

    console.log(csrf);
    // console.log("--------", data.headers["set-cookie"][0] + `Referer=${url};`);
    request.post(
        url,
        {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                // cookie: data.headers["set-cookie"][0] + `Referer=${url};`,
                Referer: url
            },
            form: {
                csrfmiddlewaretoken: data.headers['set-cookie'][0]
                    .split(';')[0]
                    .split('csrftoken=')[1],
                username: 'prise',
                password: 'pestsinspace',
                next: '/api/pests/'
            }
        },
        (postErr, postData) => {
            request.get(
                'http://192.171.139.69/api/pests/?county=Kiambu&date__gte=2019-02-10',
                (err, data) => {
                    // `http://192.171.139.69/api/pests/?county=${countyname}&date__gte=${date}`
                    if (err) return console.error('oops', err);
                    console.log('woopie!', data);
                }
            );
            console.log(postErr, postData.statusCode, postData.body);
        }
    );
});
