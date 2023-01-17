import React from 'react';
import { Tabs, Tab, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Calendar from './calendar';
import FAQ from './faq';
import Documentation from './documentation';
import {
  DocumentScannerOutlined,
  CalendarMonthOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import { Box } from '@mui/system';


const Miscellaneous = () => {
  // const { match } = props;
  // const { params } = match;
  // const { page } = params;
  // console.log(page);

  // const tabNameToIndex = {
  //   0: "calendar",
  //   1: "faq",
  //   2: "documentation"
  // };

  // const indexTotabName = {
  //   calendar: "0",
  //   faq: "1",
  //   documentation: "2",
  // };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedTab, setselectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };

  return (
    <>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Miscellaneous tabs page"
        >
          <Tab
            label="Calendar"
            icon={<CalendarMonthOutlined />}
            iconPosition="start"
          />
          <Tab
            label="FAQ"
            icon={<HelpOutlineOutlined />}
            iconPosition="start"
          />
          <Tab
            label="Documentation"
            icon={<DocumentScannerOutlined />}
            iconPosition="start"
          />
        </Tabs>
      {selectedTab === 0 && <Calendar />}
      {selectedTab === 1 && <FAQ />}
      {selectedTab === 2 && <Documentation />}
    </>
  );
};

export default Miscellaneous;