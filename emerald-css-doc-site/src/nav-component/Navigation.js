import "./Navigation.css";
import "./Navigation.mobile.css";
import {useAside} from "../aside-component/AsideContext"

export const Navigation = ({ route, setRoute }) => {
  const {setOpenAside}=useAside();

  const routeHandler = (route) => {
    switch (route) {
      case "home":
        setRoute("home");
        break;
      case "docs":
        setRoute("docs");
        break;
      case "about":
        setRoute("about");
        break;
      default:
        console.log("Some Error in Routing");
    }
  };

  return (
    <div onTouchStart={()=>{setOpenAside(false)}} className={route==="home"?"header":"header doc-open"}>
      <div className={route==="home"?"logo":"logo doc-open"}>
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h6v-2h-4v-2h4v-2h-4V9h4V7H9z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <nav className="heading">
        <ul className="nav">
          <li className={route === "home" ? "nav-item active" : "nav-item"}>
            <a onClick={() => routeHandler("home")}>Home</a>
            {/* <button onClick={() => routeHandler("home")}>Home</button> */}
          </li>

          <li className={route === "docs" ? "nav-item active" : "nav-item"}>
            <a onClick={() => routeHandler("docs")}>Docs</a>
            {/* <button onClick={() => routeHandler("docs")}>Docs</button> */}
          </li>
          {/* <li className={route === "about" ? "nav-item active" : "nav-item"}>
            <a onClick={() => routeHandler("about")}>About</a>
          </li> */}
        </ul>
      </nav>
      <div onClick={()=>setOpenAside(openAside=>!openAside)} className={route==="home"?"hamburger hidden":"hamburger"}>
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
