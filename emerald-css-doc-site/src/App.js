import "./App.css";
import "./App.mobile.css";
import { Navigation } from "./nav-component/Navigation";
import { Aside } from "./aside-component/Aside";
import { Footer } from "./footer-component/Footer";
import { Feed } from "./feed-component/Feed";
import { Home } from "./home-component/Home";
import { useState } from "react";
import { useAside } from "./aside-component/AsideContext";

export default function App() {
  const [route, setRoute] = useState("home");

  const {openAside} = useAside();

  return (
    <div className="App">
      <div className={openAside ? "layout aside-open" : "layout"}>
        <Navigation route={route} setRoute={setRoute} />
        {route === "docs" && <Aside route={route} />}
        {route === "docs" && <Feed />}
        {/* {true && <div className="overlay"></div>} */}
        {route === "home" && <Home setRoute={setRoute} />}
        <Footer />
      </div>
      <button onClick={() => window.scroll(0, 0)} class="cta">
        ▲
      </button>
    </div>
  );
}
