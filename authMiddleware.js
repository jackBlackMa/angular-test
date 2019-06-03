const jwt = require('jsonwebtoken')

const APP_SERECT = 'myappserect';
const USERNAME = 'admin';
const PASSWORD = 'serect';
const METHOD = {
    POST: "POST",
    GET: "GET",
};



module.exports = function (req, res, next) {
    if (req.url === "/login" && req.method === METHOD.POST) {
        if (req.body !== null && req.body.name == USERNAME && PASSWORD === req.body.password) {
            let token = jwt.sign({ data: USERNAME, expriseIn: '1h' }, APP_SERECT);
            res.json({ success: true, token });
        } else {
            res.json({ success: false });
        }
        res.end()
    } else if ((req.url.startsWith("/productions")) && METHOD.GET !== req.method ||
        (req.url.startsWith("/orders")) && METHOD.POST !== req.method
    ) {
        let token = req.headers['authorization'];
        if (null !== token && token.startsWith("Bearer<")) {
            token = token.substring(7, token.length - 1);
            try {
                jwt.verify(token, APP_SERECT);
                next();
                return;
            } catch (e) {

            }
        }

        res.statusCode = 401;
        res.end();
        return;
    }
    next()
}