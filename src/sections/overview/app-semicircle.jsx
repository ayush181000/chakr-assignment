import PropTypes from 'prop-types';

import { Box, Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppSemicircle({ title, subheader, list, link, ...other }) {
  return (
    <Card
      {...other}
      sx={{
        minWidth: '260px',
        minHeight: '238px',
        padding: '24px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'stretch',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal',
          letterSpacing: '-0.2px',
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: '209.389px',
          height: '102px',
          flexShrink: 0,
          paddingTop: '20px',
          transform: 'translate(16px,0px)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="209"
          height="102"
          viewBox="0 0 209 102"
          fill="none"
          style={{ zIndex: '1', position: 'absolute' }}
        >
          <path
            d="M8.31555 102C3.68987 102 -0.0966435 98.2433 0.292654 93.6341C1.86113 75.0633 8.62873 57.2069 19.9349 42.0459C32.9304 24.6194 51.2549 11.6485 72.282 4.99223C93.3092 -1.66408 115.96 -1.66408 136.987 4.99225C155.265 10.7785 171.502 21.3364 183.971 35.4448C187.059 38.9396 186.197 44.2665 182.39 46.9612C178.714 49.563 173.663 48.727 170.644 45.3856C160.256 33.8891 146.857 25.2766 131.81 20.5135C114.148 14.9222 95.1212 14.9222 77.4584 20.5135C59.7956 26.1048 44.403 37.0003 33.4868 51.6386C24.2607 64.0103 18.6325 78.5187 17.1108 93.6383C16.6476 98.2407 12.9412 102 8.31555 102Z"
            fill="#FFCD71"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="209"
          height="102"
          viewBox="0 0 209 102"
          fill="none"
          style={{ zIndex: '-1' }}
        >
          <path
            d="M8.31555 102C3.68987 102 -0.0966179 98.2435 0.292719 93.6343C1.18207 83.1055 3.74648 72.7578 7.90939 62.9663C13.1708 50.5911 20.8825 39.3467 30.6043 29.8751C40.326 20.4035 51.8675 12.8903 64.5696 7.76428C77.2717 2.6383 90.8857 -1.75652e-06 104.634 0C118.383 1.75652e-06 131.997 2.63831 144.699 7.76429C157.401 12.8903 168.943 20.4035 178.664 29.8751C188.386 39.3467 196.098 50.5911 201.359 62.9663C205.522 72.7578 208.087 83.1055 208.976 93.6343C209.365 98.2436 205.579 102 200.953 102C196.327 102 192.621 98.2409 192.158 93.6385C191.314 85.2548 189.204 77.0226 185.883 69.2117C181.464 58.8165 174.986 49.3712 166.82 41.4151C158.653 33.459 148.959 27.1478 138.289 22.842C127.619 18.5362 116.183 16.32 104.634 16.32C93.0855 16.32 81.6497 18.5362 70.9799 22.842C60.3102 27.1478 50.6154 33.459 42.4491 41.4151C34.2828 49.3712 27.805 58.8165 23.3854 69.2117C20.0646 77.0225 17.9547 85.2547 17.1109 93.6384C16.6477 98.2409 12.9412 102 8.31555 102Z"
            fill="#FFF7E8"
          />
        </svg>
      </Box>

      <Typography
        sx={{
          transform: 'translate(0px,-22px)',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          letterSpacing: '-1.592px',
        }}
      >
        {subheader}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          marginTop: '3px',
          color: '#734A00',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          letterSpacing: '-0.3px',
        }}
      >
        {link}{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
            stroke="#734A00"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Typography>
    </Card>
  );
}

AppSemicircle.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
