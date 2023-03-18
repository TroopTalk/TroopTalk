import { getUser, updateUser } from "../controllers/user.js";
import { express } from "../packages.js";

const router = express.Router();

router.get("/find/:userId", getUser);
router.put("/", updateUser);

export default router;