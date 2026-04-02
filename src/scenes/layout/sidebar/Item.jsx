// /* eslint-disable react/prop-types */
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const Item = ({ title, path, icon }) => {
  const location = useLocation();

  return (
    <MenuItem
      component={<Link to={path} />}
      icon={icon}
      rootStyles={{
        color: location.pathname === path ? "#a6a8ff" : undefined,
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

