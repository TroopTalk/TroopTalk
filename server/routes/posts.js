import { getPosts, addPost, deletePost } from "../controllers/post.js";
import { express } from "../packages.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;