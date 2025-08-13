import React from "react";
// import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
// import { Education } from "./components/sections/Team";
import { Research } from "./components/sections/Research";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
// import Education from "./components/sections/Team";
import { About } from "./components/sections/About";
import { Redisigning } from "./components/sections/Redisigning";
import { Elevation } from "./components/sections/Elevation";
import { D3view } from "./components/sections/D3view";
import { Grisidence } from "./components/sections/Grisidence";
import { Haydrolic } from "./components/sections/Haydrolic";
import { D13view } from "./components/sections/D13view";
import { Headquarter } from "./components/sections/Headquarter";
import { Elevation1 } from "./components/sections/Elevation1";
import { D32view } from "./components/sections/D32view";
import { ThreeD } from "./components/sections/ThreeD";
import { Hotel } from "./components/sections/Hotel";
import { Frontright } from "./components/sections/Forntright";
import { Siteplane } from "./components/sections/Siteplane";
import { D33VIEW } from "./components/sections/D33VIEW";
import Openmarket from "./components/sections/Openmarket";
import Cityofhossahna from "./components/sections/Cityofhossana";
import Bamoo from "./components/sections/Banmo";
import Vegetable from "./components/sections/Vegetable";
import Singlepage1 from "./components/sections/Singlepage1";
import Singlepage2 from "./components/sections/Singlepage2";
import Cinmahall from "./components/sections/Cinmahall";
import Elevation25 from "./components/sections/Elevation25";
import Interor3d from "./components/sections/Interor3d";
import Kitchen from "./components/sections/Kitchen";
import Switchsoket from "./components/sections/Switchsocket";
import Render from "./components/sections/Render";
import LivingRoomDesign from "./components/sections/Livingromm";
import Lighting from "./components/sections/Lighting";
import Singlerender from "./components/sections/Singlernder";
import BedroomDesign from "./components/sections/Bedroom";
import Render2 from "./components/sections/Reder2";
import OfficeRender2 from "./components/sections/Officerender";
import Exhibtionwork from "./components/sections/Exhibtionwork";
import { Lastpage } from "./components/sections/Lastpage";
// import Videopage from "./components/sections/VideoPage";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>;

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* <Header /> */}
        <main>
          <Hero />
          <About />
         

          <Services />
          <Portfolio />
          <Redisigning />
          <Elevation />
          <D3view />
          <Grisidence />

          <Haydrolic />
          <D32view />
          <Headquarter />
          <Elevation1 />
          {/* <D3view/> */}
          <ThreeD />
          <Hotel />
          <Frontright />
          <Siteplane />
          <D33VIEW />
          <Openmarket />
          <Cityofhossahna />
          <Bamoo />
          <Vegetable />
          <Singlepage1 />
          <Singlepage2 />
          <Cinmahall />
          <Elevation25 />
          <Interor3d />
          <Kitchen />
          <Switchsoket />
          <Render />
          <LivingRoomDesign />
          <Lighting />
          <Singlerender />
          <BedroomDesign />
          <Render2 />
          <OfficeRender2 />
          <Exhibtionwork />
          <Lastpage />
          {/* Uncomment the following lines if you want to include these sections */}
          {/* <Education />
          {/* <Lastpage />
          <Education />
          <Research />
          <Contact /> */}
        </main>
        {/* <Footer /> */}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
