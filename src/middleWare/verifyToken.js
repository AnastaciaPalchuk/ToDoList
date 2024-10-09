const jsonwebtoken = require("jsonwebtoken")

module.exports = (ctx, next) => {
    const token = ctx.headers.authorization;
    const decoded = jsonwebtoken.verify(token, 'secret');
    ctx.userId = decoded.id;
    return next();
}
