import { cookieParser, cors, dotenv, express } from "./packages.js";
import Routes from "./routes/index.js";

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

app.use("/api/auth", Routes.authRoutes);
app.use("/api/comments", Routes.commentRoutes);
app.use("/api/likes", Routes.likeRoutes);
app.use("/api/posts", Routes.postRoutes);
app.use("/api/relationships", Routes.relationshipRoutes);
app.use("/api/users", Routes.userRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("API working!");
});
