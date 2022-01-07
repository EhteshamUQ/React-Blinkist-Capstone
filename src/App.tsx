import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import theme from "../src/theme";
import { icons, titles } from "./components/icons/icons";
import DropDownMenu from "./components/organisms/dropDownMenu";
import Footer from "./components/organisms/footer";
import Navbar from "./components/organisms/navbar";
import LandingPage from "./components/pages/landingpage";
function App(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const onToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div color="#e5e5e5">
        <Navbar onClickExplore={onToggleDrawer} isDrawerOpen={isDrawerOpen} />
        {isDrawerOpen ? (
          <DropDownMenu icons={icons} titles={titles} onClick={() => {}} />
        ) : null}{" "}
        <LandingPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
