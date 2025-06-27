// cors.js
module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ou un domaine précis
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
