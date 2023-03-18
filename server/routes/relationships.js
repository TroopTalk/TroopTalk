import { getRelationships, addRelationship, deleteRelationship } from "../controllers/relationship.js";
import { express } from "../packages.js";

const router = express.Router();

router.get("/", getRelationships);
router.post("/", addRelationship);
router.delete("/", deleteRelationship);

export default router;