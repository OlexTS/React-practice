// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getNewsThunk } from "../../redux/news/thunk";
import { logOut } from "../../redux/auth/authSlice";
import { delToken } from "../../services/auth-service";
// import { getProfileThunk } from "../../redux/auth/thunk";

const Header = ({ showModal }) => {
  const { profile} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    dispatch(logOut());
    delToken();
  };
  const handleRegister = () => {
    navigate("/signUp");
  };

  // useEffect(() => {
  //   access_token&&dispatch(getProfileThunk())
  // }, [access_token, dispatch])

  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link text-white" aria-current="page" to="/">
              Home
            </NavLink>
            {/* {access_token && (
              <> */}
                <NavLink className="nav-link text-white" to="/news">
                  News
                </NavLink>
                <NavLink className="nav-link text-white" to="/todo">
                  Todo
                </NavLink>
                <NavLink className="nav-link text-white" to="/products">
                  Products
                </NavLink>
              {/* </>
            )} */}
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button>
        <button
          className="btn btn-outline-success"
          onClick={profile ? handleLogOut : handleLogin}
        >
          {profile ? "LogOut" : "Login"}
        </button>
        <button className="btn btn-outline-success" onClick={handleRegister}>
          Registration
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            dispatch(getNewsThunk());
          }}
        >
          Thunk
        </button>
        {profile && <div className="text-white">{profile.name}</div>}
      </div>
    </nav>
  );
};

export default Header;

/**
 HEADER ON MUI
 */

// import {  useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { getNewsThunk } from "../../redux/news/thunk";
// import { logOut } from "../../redux/auth/authSlice";
// import { delToken } from "../../services/auth-service";
// import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
// import AdbIcon from '@mui/icons-material/Adb';
// import MenuIcon from '@mui/icons-material/Menu';
// // import { getProfileThunk } from "../../redux/auth/thunk";

// const pages = ['Home', 'News', 'Todo', 'Products'];

// const Header = ({ showModal }) => {
//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const { profile} = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleCloseNavMenu = (page) => {
//     setAnchorElNav(null);
//    page === 'Home'? navigate('/'): navigate(`${page.toLowerCase()}`)
//   };
//   const handleLogin = () => {
//     navigate("/login");
//   };
//   const handleLogOut = () => {
//     dispatch(logOut());
//     delToken();
//   };
//   const handleRegister = () => {
//     navigate("/signUp");
//   };
//   // useEffect(() => {
//   //   access_token&&dispatch(getProfileThunk())
//   // }, [access_token, dispatch])

//   return (
//      <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={()=>handleCloseNavMenu(page)}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//         );
//   };