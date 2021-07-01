import {navigate} from 'gatsby';

// Gatsby and router-friendly page 'reload'
export const reload = () => navigate(window.location.pathname);
