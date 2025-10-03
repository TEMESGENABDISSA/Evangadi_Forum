const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function Auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED) // 401 Unauthorized
      .json({
        msg: "Authentication invalid (Missing or malformed Bearer token)",
      });
  }

  // 2. Extract the token from the "Bearer <token>" string

  const token = authHeader.split(" ")[1];

  try {
    // 3. Verify the token using the secret key

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET // Secret key loaded from environment variables
    );

    // 4. Attach user data to the request object

    const { username, userid } = decoded;
    req.user = { username, userid };

    // 5. Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // 6. Handle verification errors (e.g., expired token, bad signature)
    console.error("JWT Verification Error:", error.message);
    return res
      .status(StatusCodes.UNAUTHORIZED) // 401 Unauthorized
      .json({ msg: "Authentication invalid (Token verification failed)" });
  }
}

module.exports = Auth;
