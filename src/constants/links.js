import * as ROUTES from './routes';

const PUBLIC_LINKS = [
  {
    path: ROUTES.LANDING,
    text: 'Landing'
  },
  {
    path: ROUTES.SIGN_UP,
    text: 'Sign Up'
  },
  {
    path: ROUTES.LOG_IN,
    text: 'Log In'
  },
  {
    path: ROUTES.HOME,
    text: 'Home'
  }
];

const ADMIN_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Companies'
  },
  {
    path: ROUTES.STUDENTS,
    text: 'Students'
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

const COMPANY_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.STUDENTS,
    text: 'Students'
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

const STUDENT_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Companies'
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

export { PUBLIC_LINKS, ADMIN_LINKS, COMPANY_LINKS, STUDENT_LINKS };