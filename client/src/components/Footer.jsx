import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="end">
      <Typography variant="h6" color={colors.redAccent[200]}>
        Digital Pharmacy,
      </Typography>
      <Box m="0 5px">
        <Typography variant="h6" color={colors.redAccent[700]}>
          Copyright @2023, RADE Ltd.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
