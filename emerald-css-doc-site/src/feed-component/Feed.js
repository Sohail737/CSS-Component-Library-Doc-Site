import "./Feed.css";
import {useAside} from "../aside-component/AsideContext"
import { CodeHighlight } from "../code-highlight-component/CodeHighlight";

const buttonContained = `<button class="btn">Default</button>
<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn disabled">Disabled</button>`;

const buttonText = `<button class="btn text">Default</button>
<button class="btn text primary">Primary</button>
<button class="btn text secondary">Secondary</button>
<button class="btn text disabled">Disabled</button>`;

const buttonOutlined = `<button class="btn outline">Default</button>
<button class="btn outline primary">Primary</button>
<button class="btn outline secondary">Secondary</button>
<button class="btn outline disabled">Disabled</button>`;

const buttonCTA = `<button class="cta">+</button>
<button class="cta text">button</button>`;

const buttonCTACSS = `
.cta{
  right:20px;
  bottom:20px;
}
  
.cta.text{
  left:20px;
  bottom:20px;
}`;

const buttonSize = `<button class="btn small">Small Button</button>
<button class="btn large">Large Button</button>`;

const input = `<label class="input-label"> Name </label>
<input class="input" placeholder="Type Here" type="text" />`;

const badge = `<span class="badge">4</span>`;

const badgeCSS = `
.badge {
  top: 5px;
  left: 9px;
}`;

const cardSimple = `<div class="card">
<div class="card-heading">
  <h2>This is card heading</h2>
  <span class="card-sub-heading">This sub heading</span>
</div>

<div class="card-content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
    harum dolor obcaecati repellat, aperiam ex enim suscipit vero
    consequuntur autem modi officiis nesciunt repellendus adipisci
    aspernatur molestiae tempora labore. Laudantium.
  </p>
</div>
<div class="card-footer">
  <button class="btn primary text">Go Somewhere</button>
</div>
</div>`;

const cardWithMedia = `<div class="card">
<div class="card-img">
  <img
    src="https://cesarkaikarate.com/wp-content/uploads/2017/04/default-image.jpg"
    alt=""
  />
  <span class="badge">4</span>
</div>
<div class="card-heading">
  <h2>This is card with image and badge</h2>
  <span class="card-sub-heading">This sub heading</span>
</div>
<div class="card-content">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Repellat voluptatibus odit nobis recusandae repudiandae quos
    excepturi voluptatum officiis est unde!
  </p>
</div>
<div class="card-footer">
  <button class="btn primary text">Go Somewhere</button>
</div>
</div>`;

const badgeForCardWithMedia = `
.badge {
  top: 10px;
  right: 10px;
}`;

const modalSimple=`<div class="modal">
<h2 class="modal-heading">This is Modal Heading</h2>
<div class="modal-content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    blanditiis quia sint laudantium adipisci eaque. Voluptate cumque
    sint ex debitis?
  </p>
</div>
<div class="modal-buttons">
  <button class="btn primary text">Agree</button>
  <button class="btn primary text">Disagree</button>
</div>
</div>`

const emeraldImport=`@import "https://emerald-css.netlify.app/emerald.css";`

export const Feed = () => {

  const {setOpenAside}=useAside();

  return (
    <div onTouchStart={()=>{setOpenAside(false)}} className="row">
      <div className="row-pills">
        <h3 id="usage">Usage</h3>
        <p>To use Emerald's CSS Components just import the CSS FIle.</p>
        <CodeHighlight code={emeraldImport} language="css" />
      </div>
      <div className="row-pills">
        <h3 id="button">Button</h3>
        <p>
          Buttons are one of the most important way a user interacts with UI.
          Use Emerald's Classic buttons to make your user interaction a notch
          above all.
        </p>
        <h4>Contained Buttons</h4>
        <p>
          Contained buttons are high-emphasis and have interactions primary to
          app
        </p>
        <div className="component-container">
          <button className="btn">Default</button>
          <button className="btn primary">Primary</button>
          <button className="btn secondary">Secondary</button>
          <button className="btn disabled">Disabled</button>
        </div>
        <CodeHighlight code={buttonContained} language="js" />
        <h4>Text Buttons</h4>
        <p>
          Text buttons are used for less pronounced interactions like on Cards
          and Modals
        </p>
        <div className="component-container">
          <button className="btn text">Default</button>
          <button className="btn text primary">Primary</button>
          <button className="btn text secondary">Secondary</button>
          <button className="btn text disabled">Disabled</button>
        </div>
        <CodeHighlight code={buttonText} language="js" />
        <h4>Outlined Buttons</h4>
        <p>
          Outlined buttons medium emphasis button, important than text buttons
          but secondary to contained buttons
        </p>
        <div className="component-container">
          <button className="btn outline">Default</button>
          <button className="btn outline primary">Primary</button>
          <button className="btn outline secondary">Secondary</button>
          <button className="btn outline disabled">Disabled</button>
        </div>
        <CodeHighlight code={buttonOutlined} language="js" />
        <h4>Call To Action Buttons</h4>
        <p>
          A Call To Action button is a high emphasis button, used to lure
          customers in subscribing to news letter or placing an order.
        </p>
        <div className="component-container">
          <button className="cta">+</button>
          <button className="cta text">button</button>
        </div>
        <CodeHighlight code={buttonCTA} language="js" />
        <CodeHighlight code={buttonCTACSS} language="css" />
        <h4>Button Sizes</h4>
        <p>
          Two additional button sizes are provided by Emeald, small and large
          other than normal button size.
        </p>
        <div className="component-container">
          <button className="btn small">Small Button</button>
          <button className="btn large">Large Button</button>
        </div>
        <CodeHighlight code={buttonSize} language="js" />
      </div>
      <div class="row-pills">
        <h3 id="input">Input</h3>
        <p>Input are intergal to taking data from user.</p>
        <div className="component-container">
          <label className="input-label"> Name </label>
          <input className="input" placeholder="Type Here" type="text" />
        </div>
        <CodeHighlight code={input} language="js" />
      </div>
      <div class="row-pills">
        <h3 id="badge">Badge</h3>
        <p>
          Badges are the count you get over icons and buttons that specify if
          you got anything new inside what that icon and button redirects to
        </p>
        <div className="component-container">
          <a className="badge-container">
            <img
              src="https://emerald-css.netlify.app/assets/MdiCart.svg"
              alt=""
            ></img>
            <span className="badge-container-text">cart</span>
            <span className="badge">4</span>
          </a>
        </div>
        <CodeHighlight code={badge} language="js" />
        <CodeHighlight code={badgeCSS} language="css" />
      </div>
      <div className="row-pills">
        <h3 id="card">Card</h3>
        <p>
          Cards display data for a single entity, sometimes, it acts as entry
          point to more complex logic.
        </p>
        <h4>Simple Card</h4>
        <p>Simple cards does not contain any image, and only texts</p>
        <div className="component-container">
          <div className="card">
            <div className="card-heading">
              <h2>This is card heading</h2>
              <span className="card-sub-heading">This sub heading</span>
            </div>

            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                harum dolor obcaecati repellat, aperiam ex enim suscipit vero
                consequuntur autem modi officiis nesciunt repellendus adipisci
                aspernatur molestiae tempora labore. Laudantium.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn primary text">Go Somewhere</button>
            </div>
          </div>
        </div>
        <CodeHighlight code={cardSimple} language="js" />

        <h4>Card with media</h4>
        <p>
          Card with media is used for more emphasis. The badge shows, if
          anything is hapening inside the complex UI
        </p>
        <div className="component-container">
          <div className="card">
            <div className="card-img">
              <img
                src="https://cesarkaikarate.com/wp-content/uploads/2017/04/default-image.jpg"
                alt=""
              />
              <span className="badge">4</span>
            </div>
            <div className="card-heading">
              <h2>This is card with image and badge</h2>
              <span className="card-sub-heading">This sub heading</span>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat voluptatibus odit nobis recusandae repudiandae quos
                excepturi voluptatum officiis est unde!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn primary text">Go Somewhere</button>
            </div>
          </div>
        </div>
        <CodeHighlight code={cardWithMedia} language="js" />
        <CodeHighlight code={badgeForCardWithMedia} language="js" />
      </div>
      <div className="row-pills">
        <h3 id="modal">Modal</h3>
        <p>
          A Modal is a type of window that opens in front of everything on page
          to display important content or take input from user.
        </p>
        <h4>Simple Modal</h4>
        <p>A simple modal opens to show important information to the user</p>
        <div className="component-container">
          <div className="modal">
            <h2 className="modal-heading">This is Modal Heading</h2>
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                blanditiis quia sint laudantium adipisci eaque. Voluptate cumque
                sint ex debitis?
              </p>
            </div>
            <div className="modal-buttons">
              <button className="btn primary text">Agree</button>
              <button className="btn primary text">Disagree</button>
            </div>
          </div>
        </div>
        <CodeHighlight code={modalSimple} language="js" />
      </div>
    </div>
  );
};
