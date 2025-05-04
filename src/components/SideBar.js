// Sidebar.js
import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Achievement', path: '/crud-achviement' },
    { text: 'Skills', path: '/crud-skills' },
    { text: 'Experience', path: '/crud-expierence' },
    { text: 'Education', path: '/crud-education' },
    { text: 'Project', path: '/crud-project' },
    { text: 'Chatbot', path: '/chatbot' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/LandingPage');
  };

  return (
    <Box>
      {/* Toggle Button */}
      <IconButton onClick={toggleDrawer(true)} sx={{ m: 1 }}>
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, bgcolor: '#0d47a1', color: 'white', height: '100%' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={() => navigate(item.path)}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <Divider sx={{ bgcolor: '#1976d2' }} />
            <ListItem button onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 1 }} />
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
