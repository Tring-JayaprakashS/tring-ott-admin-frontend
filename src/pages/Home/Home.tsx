import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home_wraper}>
      <Sidebar />
      <main className={styles.home_wraper_mian}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
