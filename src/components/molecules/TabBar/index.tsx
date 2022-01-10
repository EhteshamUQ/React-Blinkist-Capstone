import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "../TabPanel";

const TabBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const cssRules = {
    height: "39px",
    width: "33%",
    alignItems: "flex-start",
    padding: "0",
    margin: "0",
  };
  return (
    <>
      <Box sx = {{ borderBottom:"1px solid" , borderColor:"divider" ,width:"63%"}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Currently Reading" sx={cssRules} value={0} />
          <Tab label="Finished Reading" sx={cssRules} value={1} />
        </Tabs>
      </Box>
      <TabPanel value={value} />
    </>
  );
};

export default TabBar;
