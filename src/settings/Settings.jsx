import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import { Link } from 'react-router-dom';

export default function Settings() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                backgroundColor: '#F0F4FC',
                margin: '0 20px 10px',
                padding: '10px 5px',
              }}
            >
              <Link underline="hover" color="inherit" to="/dashboard">
                Home
              </Link>
              <Link underline="hover" color="inherit" to="/settings">
                Settings
              </Link>
              <Typography color="text.primary">General</Typography>
            </Breadcrumbs>
          </div>
          <SettingsTabs />
        </Box>
      </Box>
    </div>
  );
}
