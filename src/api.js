let request = require('request');
require('dotenv').config();
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;


request = request.defaults({ jar: true });

const url = 'http://192.171.139.69/api/api-auth/login/';

const Api = region =>
    new Promise((resolve, reject) => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        const lastWeek =
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate();

        request.get(url, (err, data) => {
            const csrf = data.headers['set-cookie'][0]
                .split(';')[0]
                .split('csrftoken=')[1];

            request.post(
                url,
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        Referer: url
                    },
                    form: {
                        csrfmiddlewaretoken: csrf,
                        username: `${username}`,
                        password: `${password}`,
                        next: '/api/pests/'
                    }
                },
                (postErr, postData) => {
                    request.get(
                        `http://192.171.139.69/api/pests/?county=${region}&date__gte=${lastWeek}`,
                        (err, data) => {
                            if (err) reject(err);
                            resolve(data.body);
                        }
                    );
                }
            );
        });

    });

module.exports = Api;
