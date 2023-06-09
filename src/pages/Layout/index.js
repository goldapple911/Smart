import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "components/Header";

const Layout = () => {
  return (
    <Box>
      <header>
        <Header />
      </header>


      <Outlet />
    </Box>
  );
};

export default Layout;
