import css from "./App.module.css";
import clsx from "clsx";

import Profile from "../Profile/Profile";

import userData from "../../data/userData.json";


function App () {
  return (
     <div className={clsx(css.container)} >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

    </div>
  )
  
}

export default App;
