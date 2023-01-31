const { clearHash } = require('../services/cache');

module.exportss = async (req, res, next) => {
    await next();

    clearHash(req.user.id);
};