import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '#',
    icon: icon('ic_analytics'),
  },
  {
    title: 'customers',
    path: '#',
    icon: icon('ic_user'),
  },
  {
    title: 'all reports',
    path: '#',
    icon: icon('ic_cart'),
  },
  {
    title: 'geography',
    path: '#',
    icon: icon('ic_blog'),
  },
  {
    title: 'conversations',
    path: '#',
    icon: icon('ic_lock'),
  },
  {
    title: 'deals',
    path: '#',
    icon: icon('ic_deals'),
  },
  {
    title: 'export',
    path: '#',
    icon: icon('ic_export'),
  },
];

export default navConfig;
