import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "components/Header";

const Layout = () => {
  return (
    <Box
    // sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   overflow: "hidden",
    //   height: "100vh",
    // }}
    >
      <header>
        <Header />
      </header>

      {/* <Box sx={{ overflow: "auto" }}> */}
      <Outlet />
    </Box>
  );
};

export default Layout;
