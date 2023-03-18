import { login, register, logout } from "../controllers/auth.js";
import { express } from "../packages.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;