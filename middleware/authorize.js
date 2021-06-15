const authorize = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(req.headers, " headers");
    console.log(authorization, "authorization");
    console.log(siteId, "SiteId");
    if (authorization !== undefined) {
        try {
            const userData = await verifyIdToken(authorization.split(" ")[1]);
            req.user = userData;
            next();
        } catch (error) {
            return res
                .status(401)
                .json({ success: false, message: "UnAuthorize to perform this actions", result: error });
        }
    } else {
        return res.status(401).json({ success: false, message: "Authentication required" });
    }
};
module.exports = authorize;