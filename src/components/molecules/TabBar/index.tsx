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
    width: "367px",
    alignItems: "flex-start",
    padding: "0",
    margin: "0",
  };
  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Currently Reading" sx={cssRules} />
          <Tab label="Finished Reading" sx={cssRules} />
        </Tabs>
      </Box>
      <TabPanel />
    </>
  );
};

export default TabBar;
