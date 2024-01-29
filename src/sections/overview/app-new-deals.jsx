import { Box, Card, CardHeader, Typography, CardContent } from '@mui/material';

export default function AppNewDeals({ ...other }) {
  return (
    <Box>
      <Card>
        <CardHeader title="New deals" />
        <CardContent>
          <Box sx={{ display: 'flex', flexWrap: 'wrap ', gapX: '4px' }}>
            {deals.map((deal) => (
              <div
                key={deal}
                style={{
                  background: '#FFF7E8',
                  // background:
                  //   'linear-gradient(90deg, rgba(255,205,113,1) 50%, rgba(255,255,255,1) 100%)',
                  padding: '10px',
                  margin: '6px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: '3px',
                  alignItems: 'center',
                }}
              >
                {plusSvg}
                <Typography sx={{ fontSize: '14px', fontWeight: 400, letterSpacing: '-0.3px' }}>
                  {deal}
                </Typography>
              </div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

AppNewDeals.propTypes = {};

const deals = [
  'Fruit2Go',
  "Marshall's MKT",
  'CCNT',
  'Joana Mini-market',
  'Little Brazil Vegan',
  'Target',
  'Organic Place',
  "Morello's",
];

const plusSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path
      d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
      stroke="#FFA500"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
