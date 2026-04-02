// /* eslint-disable react/prop-types */
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import {  useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const Item = ({ title, path, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  return (
    <MenuItem
      component={<Link to={path} />}
      icon={icon}
      rootStyles={{
        color: location.pathname === path ?  colors.greenAccent[500] : undefined,
      }}
    >
      {title}
    </MenuItem>
  );
};

export default Item;

/* eslint-disable react/prop-types */
// import { MenuItem } from "react-pro-sidebar";
// import { Link, useLocation } from "react-router-dom";

// const Item = ({ title, path, icon }) => {
//   const location = useLocation();

//   return (
//     <MenuItem
//       component={<Link to={path} />}
//       active={location.pathname === path}
//       icon={icon}
//       rootStyles={{
//         color: location.pathname === path && "#a6a8ff",
//       }}
//     >
//       {title}
//     </MenuItem>
//   );
// };

// export default Item;

