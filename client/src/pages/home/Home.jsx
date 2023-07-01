import { Posts, Share, } from "../../components/export.js";
import "./home.scss";

const Home = () => {
  return (
    <div className="HOME__">
      {/* <Stories /> */}
      <Share />
      <Posts />
    </div>
  );
};

export default Home;