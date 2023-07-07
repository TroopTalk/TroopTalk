// * Dep Imports
import { bodyParser, cookieParser, cors, dotenv, express, mongoose } from "./packages.js";

// * Route imports
import authRouter from "./routes/auth.js";

// * express as const
const app = express();

// * dotenv config
dotenv.config();

// * Server config
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cookieParser());

// * Middleware
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS.split(", "),
    credentials: true,
  }),
);

// * Router mounts
app.use(process.env.AUTH_ROUTE, authRouter);

// * Database and Server connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on port: ${process.env.PORT}`)))
  .catch((error) => console.log(error.message));
