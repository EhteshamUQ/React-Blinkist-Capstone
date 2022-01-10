import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "../src/theme";
import { icons, titles } from "./components/icons/icons";
import DropDownMenu from "./components/organisms/dropDownMenu";
import Footer from "./components/organisms/footer";
import Navbar from "./components/organisms/navbar";
import EntrePage from "./components/pages/entrePage";
import LandingPage from "./components/pages/landingpage";
import ViewBookDetail from "./components/pages/ViewBookDetail";
function App(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const onToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar onClickExplore={onToggleDrawer} isDrawerOpen={isDrawerOpen} />
        {isDrawerOpen ? (
          <DropDownMenu icons={icons} titles={titles} toggleDrawer = {onToggleDrawer} />
        ) : null}{" "}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="entrepreneurship" element={<EntrePage />} />
          <Route path="bookView">
            <Route path=":bookName" element={<ViewBookDetail />}></Route>
          </Route>
          <Route path="*" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </ThemeProvider>
  );
}

export default App;
