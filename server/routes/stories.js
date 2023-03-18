import { getStories, addStory, deleteStory } from "../controllers/story.js";
import { express } from "../packages.js";

const router = express.Router();

router.get("/", getStories);
router.post("/", addStory);
router.delete("/:id", deleteStory);

export default router;