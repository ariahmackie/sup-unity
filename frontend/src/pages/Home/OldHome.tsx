import LoginForm from "../../components/LoginForm";
import Banner from "./components/Banner";
import HelpBtns from "./components/HelpBtns";
import Post from "../../components/Posts/Post";
import "./homepage.css";

<<<<<<< HEAD:frontend/src/pages/Home/OldHome.tsx
import { useState } from "react";
=======
import HPStyles from "./HomePage.module.scss";
>>>>>>> 3f5e31fccb61f7c39b3a0ef98e681875d94fb0c6:src/pages/Home/index.tsx

type TSortBy = "POPULAR" | "LOCAL" | "NEW";

const Home = () => {
  const [sortBy, setSortBy] = useState<TSortBy>("POPULAR");
  return (
    <div className="container">
      <div className="row">
        <div className="u-full-width mt-10p">
          <div className="centerText">
            <Banner />
            <hr />
            <LoginForm />
            <hr />
            <HelpBtns />
            <hr />
            <p>
              <b>SORT BY</b>
              <span
                className={`${HPStyles.sortChoice} ${
                  sortBy === "POPULAR" && HPStyles.selected
                }`}
                onClick={() => setSortBy("POPULAR")}
              >
                POPULAR
              </span>
              -
              <span
                className={`${HPStyles.sortChoice} ${
                  sortBy === "LOCAL" && HPStyles.selected
                }`}
                onClick={() => setSortBy("LOCAL")}
              >
                LOCAL
              </span>
              -
              <span
                className={`${HPStyles.sortChoice} ${
                  sortBy === "NEW" && HPStyles.selected
                }`}
                onClick={() => setSortBy("NEW")}
              >
                NEW
              </span>
            </p>
          </div>
          <hr />
          <Post
            city="Portland!"
            state="OR"
            zipCode={97225}
            userName="User5234555"
            postText="HELP! Need a bit of money to get through the week"
            completed={false}
            raised={500}
            goal={1200}
            communityServiceRequirements={["Clean up route 123"]}
            likes={150}
          />
          <Post
            city="Portland"
            state="OR"
            zipCode={97225}
            userName="Registered-User212334"
            postText="HELP! Need new braces!"
            imgUrl="https://images.unsplash.com/photo-1552873816-636e43209957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            completed={true}
            raised={1300}
            goal={1000}
            likes={225}
          />
          <Post
            city="Beaverton"
            state="OR"
            zipCode={97003}
            userName="Registered-User12333"
            postText="Intiative: Community Barbeque"
            imgUrl="https://static.vecteezy.com/system/resources/previews/002/166/592/original/barbecue-fire-spatula-template-badge-design-isolated-free-vector.jpg"
            imgAlt="cartoon spatula, grill with flames, and two pronged fork. no color"
            completed={false}
            raised={100}
            goal={1000}
            communityServiceRequirements={[
              "1 Person to bring soda",
              "1 Person to bring chips",
            ]}
            likes={15}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
