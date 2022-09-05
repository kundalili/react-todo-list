import React, { useState } from 'react';
import { Drawer, useMediaQuery, AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import Sidebar from './Sidebar';

const drawerWidth = 240;

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position="fixed" className="bg-teal-600">
        <Toolbar className="h-[80px] flex justify-between md:ml-[240px] ml-[10px] sm:flex-wrap">
          {isMobile && (
          <IconButton
            color="default"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className="md:hidden text-white"
          >
            <Menu />
          </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <nav className="md:w-[240px] flex-shrink-0">
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            // classes={{ paper: { width: 240 } }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer classes={{ paper: { width: drawerWidth } }} variant="permanent" open>
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </>
  );
}

export default NavBar;
