import { cookieParser, cors, dotenv, express } from "./packages.js";
import Routes from "./routes/export.js";

dotenv.config();
const app = express();
app.use(express.json());

//middlewares
app.use((req, res, next) => {
  res.header(process.env.CORS_MSG, true);
  next();
});
app.use(
  cors({
    origin: process.env.CORS_ORG,
  }),
);
app.use(cookieParser());

app.use(process.env.AUTH_ROUTE, Routes.authRoutes);
app.use(process.env.COMMENT_ROUTE, Routes.commentRoutes);
app.use(process.env.LIKE_ROUTE, Routes.likeRoutes);
app.use(process.env.POST_ROUTE, Routes.postRoutes);
app.use(process.env.RELATIONSHIP_ROUTE, Routes.relationshipRoutes);
app.use(process.env.STORY_ROUTE, Routes.storyRoutes);
app.use(process.env.USER_ROUTE, Routes.userRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is UP!");
});