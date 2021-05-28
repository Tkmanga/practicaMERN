const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //comprobar que existe el token
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "acceso no autorizado" });
  } else {
    //comprobar la validez del token
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "wololo", (err, decode) => {
      if (err) {
        res
          .status(500)
          .json({ msg: "ocurrio un problema al deco del toquen", err });
      } else {
        req.user = decode;
        next();
      }
    });
  }
};
