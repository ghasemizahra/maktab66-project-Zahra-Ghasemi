import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Assest/Images/logo.png'
import { Link } from 'react-router-dom';


const pages = ['مدیریت','سبدخرید'  ];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
    <AppBar  position="static"  sx={{ objectFit:"cover" ,backgroundColor:"rgb(248, 223, 155)"}}>
      <Container maxWidth="xl"  >
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              {/* <MenuIcon /> */}
              menue
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <Box 
                sx={{ my: 2, display: 'flex',justifyContent:'space-between' ,width:'15%'}}
              >
            <Link to='/paneladmin' className="pages" >{pages[0]}</Link>
            <Link to='/cart' className="pages">{pages[1]}</Link>
              </Box>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <Box display={'flex'}>
              <Typography sx={{display:{xs:'none' , sm:'block'}}}>مسکن اندیشه</Typography>
              <Link to="/"><Avatar className="logo" alt="logo" title="صفحه اصلی" src={logo} /></Link>
              </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>   
   <div className='header'></div> 
</>
  );
};
export default ResponsiveAppBar;
