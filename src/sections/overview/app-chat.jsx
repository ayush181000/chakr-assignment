import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

// ----------------------------------------------------------------------

export default function AppChat({ title, list, ...other }) {
  return (
    <Card {...other} sx={{ minHeight: '150px' }}>
      <CardHeader
        title={title}
        subheader={`${list.reduce(
          (accumulator, chat) => (chat.messages === true ? accumulator + 1 : accumulator),
          0
        )} unread messages`}
      />
      <Box display="flex" sx={{ ml: '24px', mt: '12px', gap: '16px' }}>
        {list.map((customer) => (
          <Box
            key={customer.id}
            sx={
              ({
                display: 'flex',
                padding: '24px',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '14px',
              },
              customer.messages && {
                backgroundColor: '#FFF7E8',
                borderRadius: '14px',
              })
            }
          >
            {customer.message && <div style={{ zIndex: 1 }}>{msgDot}</div>}
            <img
              src={customer.img}
              alt="avatar"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '100px',
                margin: '8px',
              }}
            />
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
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
    <circle cx="4" cy="4" r="3" fill="#EB5050" stroke="#FFF7E8" strokeWidth="2" />
  </svg>
);
