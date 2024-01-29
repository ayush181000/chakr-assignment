import { Box, Card, CardHeader, Typography, CardContent } from '@mui/material';

export default function AppNewDeals({ ...other }) {
  return (
    <Box>
      <Card>
        <CardHeader title="Top states" />
        <CardContent>
          {states.map((state) => (
            <div
              key={state.state}
              style={{
                width: state.width,
                // background: 'rgb(255,205,113)',
                background:
                  'linear-gradient(90deg, rgba(255,205,113,1) 50%, rgba(255,255,255,1) 100%)',
                padding: '6px',
                margin: '6px',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{state.state}</Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 500,
                }}
              >
                {state.data}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

AppNewDeals.propTypes = {};

const states = [
  {
    state: 'NY',
    data: '120K',
    width: '272px',
  },
  {
    state: 'MA',
    data: '80K',
    width: '229px',
  },
  {
    state: 'NH',
    data: '70K',
    width: '207px',
  },
  {
    state: 'OR',
    data: '50K',
    width: '150px',
  },
];
