import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import 'normalize.css';
import IndexPage from './components/Index';
import Menu from './components/Menu';
import SliderPage from './components/Slider';
import './assets/css/main.css';

const anchors = ["firstPage", "secondPage"];

function App(setSubmenu) {
  return (
  <div>
    <Menu setSubmenu={setSubmenu} />

    <ReactFullpage
      anchors={anchors}
      navigation
      navigat
      autoScrolling={true}
      easing='easeInOutCubic'
      fadingEffect={true}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });

        if(destination.anchor == 'secondPage'){
          setSubmenu=true;
      }


      }}
      render={({ state, fullpageApi }) => {
         console.log("render prop change", state, fullpageApi);
        return (
          <main>
            <IndexPage />
            <SliderPage />
            <img src="https://www.gnu.org/graphics/gplv3-or-later.png" alt="" />
          </main>
        );
      }}
    />
  </div>
)
    }

    export default App;
