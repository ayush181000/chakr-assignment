import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { alpha } from '@mui/material/styles';
import { TextField, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import SvgColor from 'src/components/svg-color';
// import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import brand from './brand.svg';
import search from './search.svg';
import { NAV } from './config-layout';
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderAccount = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10, display: 'flex' }}>
      <img
        src="/avatar.png"
        alt="avatar"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '100px',
          marginBottom: '12px',
          marginRight: '20px',
          marginLeft: '16px',
        }}
      />
      <Box display="flex" flexDirection="column">
        <Typography sx={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.25px' }}>
          Gustavo Xavier
        </Typography>
        <Box
          sx={{ borderRadius: '24px', background: '#FFCD71', padding: '0px 6px', width: '48px' }}
        >
          <Typography
            sx={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '-0.25px',
              textAlign: 'center',
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const renderSettings = (
    <Box sx={{ px: 2.5, pb: 3 }}>
      <NavItem item={{ title: 'setting', path: '#', icon: icon('ic_settings') }} />
      <NavItem item={{ title: 'logout', path: '#', icon: icon('ic_logout') }} color />
    </Box>
  );

  const renderSearchBar = (
    <Box sx={{ marginBottom: '20px' }}>
      <TextField
        id="outlined-basic"
        value="  Search"
        variant="outlined"
        sx={{ marginLeft: '20px' }}
        size="sm"
        InputProps={{
          startAdornment: <img src={search} alt="icon" />,
          style: {
            borderRadius: '100px',
            color: 'grey',
            height: '40px',
          },
          shrink: true,
        }}
      />
    </Box>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <img src={brand} alt="logo" />

      {renderSearchBar}

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
      <Box>
        {renderAccount}
        {renderSettings}
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
            backgroundColor: '#fff',
            borderRadius: '16px',
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item, color }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span" sx={color && { color: '#B01212' }}>
        {item.title}{' '}
      </Box>
    </ListItemButton>
  );
}

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

NavItem.propTypes = {
  item: PropTypes.object,
  color: PropTypes.string,
};
