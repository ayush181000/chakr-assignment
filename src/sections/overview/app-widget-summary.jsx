import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({
  heading,
  title,
  total,
  icon,
  color = 'primary',
  sx,
  logo = false,
  link = '',
  ...other
}) {
  return (
    <Card
      component={Stack}
      direction="row"
      sx={{
        px: 3,
        py: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1 0 0',
        ...sx,
      }}
      {...other}
    >
      <Typography
        variant="h4"
        sx={{
          paddingBottom: '16px',
          alignItems: 'flex-start',
          gap: '8px',
          alignSelf: 'stretch',
        }}
      >
        {heading}
      </Typography>

      <Typography
        sx={{
          marginLeft: 0,
          fontFamily: 'Inter',
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          letterSpacing: '-2px',
        }}
      >
        {total} %
        {logo && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333"
              stroke="#25CD25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          paddingTop: '5px',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          letterSpacing: '-0.3px',
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          marginTop: '54px',
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

AppWidgetSummary.propTypes = {
  heading: PropTypes.string,
  logo: PropTypes.bool,
  color: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
