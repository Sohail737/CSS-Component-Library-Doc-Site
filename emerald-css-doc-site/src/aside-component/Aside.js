import "./Aside.css";
import "./Aside.mobile.css";
import { useAside } from "../aside-component/AsideContext";

const components = [
  { name: "Button", anchor: "#button" },
  { name: "Input", anchor: "#input" },
  { name: "Badge", anchor: "#badge" },
  { name: "Card", anchor: "#card" },
  { name: "Modal", anchor: "#modal" },
];

export const Aside = () => {
  const { openAside, setOpenAside } = useAside();
  return (
    <div className={openAside ? "aside open" : "aside"}>
      <div className="aside-nav">
        <h4>Getting Started</h4>
        <ul className="stacked-list">
          <li className="list-item">
            <a href="#usage">Usage</a>
          </li>
        </ul>
        <h4>Components</h4>
        <ul className="stacked-list">
          {components.map((comp) => {
            return (
              <li  key={comp.anchor} className="list-item">
                <a href={comp.anchor} onTouchEnd={()=>setTimeout(()=>setOpenAside(false),0)}>{comp.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
