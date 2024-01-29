import Chart from 'chart.js/auto';
import { useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card, Typography } from '@mui/material';

import { data } from '../chart';
import { chats } from '../chats';
import AppChat from '../app-chat';
import { customers } from '../customers';
import AppNewDeals from '../app-new-deals';
import AppTopStates from '../app-top-states';
import AppSemicircle from '../app-semicircle';
import AppWidgetSummary from '../app-widget-summary';
import AppCustomersUpdate from '../app-customers-update';

// ----------------------------------------------------------------------

function aggregateByDate(d) {
  const aggregatedData = {};

  d.forEach((entry) => {
    // Assuming entry is an object with 'timestamp' and 'profit' properties
    const timestamp = entry.Timestamp;
    const profit = entry['Profit Percentage'];

    // Convert timestamp to date
    const date = new Date(timestamp).toISOString().split('T')[0].split('-').splice(0, 2).join('-');
    // console.log(date);

    // Aggregate profits based on date
    if (aggregatedData[date]) {
      aggregatedData[date].profit += profit;
      aggregatedData[date].entry += 1;
    } else {
      aggregatedData[date] = { profit, entry: 1 };
    }
  });

  const resultArray = Object.entries(aggregatedData).map(([date, aggregatedProfit]) => ({
    date,
    aggregatedProfit: aggregatedProfit.profit / aggregatedProfit.entry,
  }));

  return resultArray;
}

export default function AppView() {
  useEffect(() => {
    const chartData = aggregateByDate(data);

    console.log(chartData);

    const ctx = document.getElementById('myLineChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(37, 205, 37, 0.4)');
    gradient.addColorStop(1, 'rgba(37, 205, 37, 0)');
    // eslint-disable-next-line no-unused-vars
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.map((entry) => entry.date),
        datasets: [
          {
            fill: {
              target: 'origin',
              above: gradient, // Use the gradient for the fill
            },
            label: 'My Data',
            data: chartData.map((entry) => entry.aggregatedProfit),
            borderColor: '#25CD25', // Line color
            borderWidth: 2,
            borderDash: [5, 5],
            // Do not fill the area under the line
          },
        ],
      },
      options: {
        elements: {
          point: { radius: 0 },
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Time',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Profite Percentage',
            },
          },
        },
      },
    });
  }, []);

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
                  data={newChartData}
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
                <canvas id="myLineChart" width="400" height="200" />
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
                          mb: '40px',
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
                          mb: '4px',
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
                          mb: '40px',
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
