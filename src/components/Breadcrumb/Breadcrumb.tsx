import { useLocation, Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const formatLabel = (segment: string) => {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const prevSegment =
    pathSegments.length > 1 ? pathSegments[pathSegments.length - 2] : null;
  const currentSegment = pathSegments[pathSegments.length - 1];

  return (
    <div className={styles.breadcrumb}>
      {prevSegment && (
        <>
          <Link
            to={`/${pathSegments.slice(0, -1).join('/')}`}
            className={styles.link}>
            {formatLabel(prevSegment)}
          </Link>
          <span className={styles.slash}> / </span>
        </>
      )}
      <span className={styles.current}>{formatLabel(currentSegment)}</span>
    </div>
  );
};

export default Breadcrumb;
