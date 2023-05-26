const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/item",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7101',
        secure: false
    });

    app.use(appProxy);
};
