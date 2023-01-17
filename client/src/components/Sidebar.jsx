import { useState } from "react";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import logoImage from "../assets/logo.jpg";
import {
  HomeOutlined,
  DocumentScannerOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PointOfSaleOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  ContactsOutlined,
  PieChartOutlined,
  HelpOutlineOutlined,
  MenuOutlined,
  BarChartOutlined,
  TimelineOutlined,
  MapOutlined,
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  TodayOutlined,
  PublicOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                {/* <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={logoImage}
                  style={{ cursor: "pointer", borderRadius: "25%" }}
                />
              </Box> */}
                <Typography variant="h3" color={colors.grey[100]}>
                  PHARMACY
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* {!isCollapsed && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="150px"
                height="50px"
                src={logoImage}
                style={{ cursor: "pointer", borderRadius: "5%" }}
              />
            </Box>
          )} */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu title="Reports" icon={<PieChartOutlined />}>
              <Item
                title="Sales"
                to="/reports/sales"
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Revenue"
                to="/reports/revenue"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Inventory
            </Typography>
            <Item
              title="Suppliers"
              to="/suppliers"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Medicines"
              to="/medicines"
              icon={<PointOfSaleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Purchases"
              to="/purchases"
              icon={<TrendingUpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Sales
            </Typography>
            <Item
              title="Orders"
              to="/orders"
              icon={<ShoppingCartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transactions"
              to="/transactions"
              icon={<ReceiptLongOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Admin
            </Typography>
            <Item
              title="Team"
              to="/team"
              icon={<Groups2Outlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<AdminPanelSettingsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Others
            </Typography>
            <Item
              title="Miscellaneous"
              to="/miscellaneous"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;