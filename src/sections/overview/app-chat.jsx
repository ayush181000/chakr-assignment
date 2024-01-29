import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';

// ----------------------------------------------------------------------

export default function AppChat({ title, list, ...other }) {
  const subheader = (
    <Typography sx={{ fontWeight: 400, mt: '2px' }}>{`${list.reduce(
      (accumulator, chat) => (chat.messages === true ? accumulator + 1 : accumulator),
      0
    )} unread messages`}</Typography>
  );

  return (
    <Card {...other} sx={{ minHeight: '250px' }}>
      <CardHeader title={title} subheader={subheader} />
      <Box display="flex" sx={{ ml: '24px', mt: '12px', gap: '16px', pt: '12px' }}>
        {list.map((customer) => (
          <Box
            key={customer.id}
            sx={
              ({
                // display: 'flex',
                padding: '24px',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '14px',
                position: 'relative',
                display: 'inline-block',
              },
              customer.messages && {
                backgroundColor: '#FFF7E8',
                borderRadius: '14px',
              })
            }
          >
            <img
              src={customer.img}
              alt="avatar"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '100px',
                margin: '18px',
              }}
            />

            {customer.message && <div>{msgDot}</div>}
          </Box>
        ))}
      </Box>
    </Card>
  );
}

AppChat.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

const msgDot = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, zIndex: 100 }}
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
  >
    <circle cx="4" cy="4" r="3" fill="#EB5050" stroke="#FFF7E8" strokeWidth="2" />
  </svg>
);
