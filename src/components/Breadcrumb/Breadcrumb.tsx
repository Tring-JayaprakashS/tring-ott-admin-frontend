import { useLocation, Link } from 'react-router-dom';
// import { IC_RIGHT_ARROW } from '../../utlis/images';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = () => {
  const location = useLocation();
  const pathsegment: string[] = location.pathname.split('/').filter(Boolean);
  let breadcrumblabel = '';
  if (pathsegment.includes('AppConfiguration')) {
    breadcrumblabel = 'AppConfiguration';
  } else {
    const lastsegment = pathsegment[pathsegment.length - 1];
    breadcrumblabel = lastsegment;
  }

  return (
    <div>
      <p className={styles.breadcrumb}>
        <Link to='/Dashboard' className={styles.dashboard}>
          Dashboard
        </Link>
        <span className={styles.slash}> / </span>
        <span> {breadcrumblabel}</span>
      </p>
    </div>
  );
};

export default Breadcrumb;
