<<<<<<< HEAD:src/pages/Onboarding/index.tsx
import UserContext from "../../context/user-context";
import "./Onboarding.css";
=======
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import OBStyles from "./Onboarding.module.css";
>>>>>>> 3f5e31fccb61f7c39b3a0ef98e681875d94fb0c6:frontend/src/pages/Onboarding/index.tsx

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const isUsernameTaken = async (username: string) => {
    let res;
    if (Math.random() > 0.5) {
      res = await fetch("https://supunitytester.free.beeceptor.com/");
    } else {
      res = await fetch("https://supunitytester.free.beeceptor.com/found");
    }
    const { status } = await res.json();
    if (status === "No user found.") {
      return false;
    }

    return true;
  };

  const navigate = useNavigate();

  const updateUsername = async (e: React.FormEvent) => {
    e.preventDefault();
    const taken = await isUsernameTaken(username);
    if (taken) {
      setError(true);
      setUsername("");
    } else {
      setUser({ username: username });
      navigate("/logged-in");
      console.log("Not taken.");
    }
  };

  return (
    <main>
      <div className={OBStyles.pageWrapper}>
        <h1>Onboarding:</h1>
        <form onSubmit={(e) => updateUsername(e)}>
          <label>
            Username:
            <input
              type="text"
              id="onboarding-username"
              className={OBStyles.onboardingUsername}
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          {error ? (
            <p className={`${OBStyles.error} ${OBStyles.textCenter}`}>
              Username already taken.
            </p>
          ) : null}
          <button type="submit" className={OBStyles.blockCenter}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default OnboardingPage;
