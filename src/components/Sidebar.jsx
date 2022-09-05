import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'Inbox', value: 'inbox' },
  { label: 'Today', value: 'today' },
  { label: 'Next', value: 'next' },
  { label: 'Filter', value: 'filter' },
];

const logo = 'https://fontmeme.com/permalink/220905/98111c92b80054103e9c0ef057a82787.png';

function Sidebar() {
  return (
    <>
      <Link to="/" className="flex justify-center p-[10%]">
        <img className="w-[70%]" src={logo} alt="to-do react logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className="text-black" to="/">
            <ListItem onClick={() => {}} button>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
export default Sidebar;
