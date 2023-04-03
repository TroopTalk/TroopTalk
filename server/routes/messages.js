import { getMessages, addMessage, deleteMessage } from "../controllers/message.js";
import { express } from "../packages.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", addMessage);
router.delete("/:messageId", deleteMessage);

export default router;
