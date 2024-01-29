/* eslint-disable import/no-extraneous-dependencies */
// import { Line } from 'react-chartjs-2';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card, Typography } from '@mui/material';

// import { data } from '../chart';
import { chats } from '../chats';
import AppChat from '../app-chat';
import { customers } from '../customers';
import AppNewDeals from '../app-new-deals';
import AppTopStates from '../app-top-states';
import AppSemicircle from '../app-semicircle';
import AppWidgetSummary from '../app-widget-summary';
import AppCustomersUpdate from '../app-customers-update';

// ----------------------------------------------------------------------

export default function AppView() {
  // const chartData = {
  //   labels: data.map((d) => d.Timestamp),
  //   datasets: [
  //     {
  //       label: 'Users Gained ',
  //       data: data.map((d) => d['Profit Percentage']),
  //       backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
  //       borderColor: 'black',
  //       borderWidth: 2,
  //     },
  //   ],
  // };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} columns={16}>
        <Grid xs={16} sm={6} md={6}>
          <AppWidgetSummary
            heading="Revenues"
            title="Increase compared to last week"
            total={15}
            logo
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            link="Revenues Report"
          />
        </Grid>

        <Grid xs={16} sm={6} md={6}>
          <AppWidgetSummary
            heading="Lost deals"
            title="You close 96 out of 100 deals"
            total={4}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            link="All Deals"
          />
        </Grid>

        <Grid xs={16} sm={4} md={4}>
          <AppSemicircle title="Quarter Goals" subheader="84%" link="All goals" />
        </Grid>

        <Grid xs={16} md={8} lg={8}>
          <AppCustomersUpdate title="Customers" list={customers} />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <Grid container spacing={1} columns={12} direction="column">
            <Grid xs={12} md={12} lg={12}>
              <Card sx={{ width: '100%', minHeight: '250px' }}>
                {/* <Line
                  data={chartData}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    // elements: {
                    //   point: { radius: 0 },
                    // },
                  }}
                /> */}
              </Card>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <Grid
                container
                spacing={1}
                columns={12}
                direction="row"
                sx={{ display: 'flex', width: '100%' }}
              >
                <Grid xs={12} lg={4}>
                  <Card sx={{ width: '100%', flexGrow: 1, minHeight: '140px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        padding: '16px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '16px',
                        flex: '1 0 0',
                        alignSelf: 'stretch',
                        transform: 'translate(-4px,0px)',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#7D7D7D',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: 'normal',
                          letterSpacing: '-0.4px',
                        }}
                      >
                        Top month
                      </Typography>
                      <Typography
                        sx={{
                          color: '#734A00',
                          fontFamily: 'Inter',
                          fontSize: '24px',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: 'normal',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        November
                      </Typography>
                      <Typography
                        sx={{
                          color: '#FFA500',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: 'normal',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        2019
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid xs={12} lg={4}>
                  <Card sx={{ width: '100%', flexGrow: 1, minHeight: '140px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        padding: '16px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        flex: '1 0 0',
                        alignSelf: 'stretch',
                        transform: 'translate(-4px,0px)',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#7D7D7D',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: 'normal',
                          letterSpacing: '-0.4px',
                          mb: '20px',
                        }}
                      >
                        Top year
                      </Typography>
                      <Typography
                        sx={{
                          color: '#734A00',
                          fontFamily: 'Inter',
                          fontSize: '24px',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: 'normal',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        2023
                      </Typography>
                      <Typography
                        sx={{
                          color: '#454545',
                          fontFamily: 'Inter',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                          letterSpacing: '-0.3px',
                        }}
                      >
                        96K sold so far
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid lg={4}>
                  <Card sx={{ width: '100%', minHeight: '140px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        padding: '16px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        flex: '1 0 0',
                        alignSelf: 'stretch',
                        transform: 'translate(-4px,0px)',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#7D7D7D',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: 'normal',
                          letterSpacing: '-0.4px',
                          mb: '12px',
                        }}
                      >
                        Top buyer
                      </Typography>
                      <img
                        src="/avatar.png"
                        alt="avatar"
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '100px',
                          marginBottom: '12px',
                        }}
                      />
                      <Typography
                        sx={{
                          color: '#131313',
                          fontFamily: 'Inter',
                          fontSize: '12px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: 'normal',
                          letterSpacing: '-0.3px',
                          mb: '6px',
                        }}
                      >
                        Maggie Johnson
                      </Typography>
                      <Typography
                        sx={{
                          color: '#454545',
                          fontFamily: 'Inter',
                          fontSize: '10px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                          letterSpacing: '-0.3px',
                        }}
                      >
                        Oasis Organic Inc.
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid lg={5}>
          <AppChat title="Chats" list={chats} />
        </Grid>

        <Grid lg={5}>
          <AppTopStates />
        </Grid>

        <Grid lg={6}>
          <AppNewDeals />
        </Grid>
      </Grid>
    </Container>
  );
}
