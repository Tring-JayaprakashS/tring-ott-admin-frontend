import { IMG_FRAME, IMG_SIGIN_ADMIN_BG } from '../../../utlis/images';
import Styles from './AuthFrame.module.scss';
import { Outlet } from 'react-router-dom';

const AuthFrame = () => {
  return (
    <div className={Styles.authframe_container}>
      <img
        src={IMG_FRAME}
        alt=''
        className={Styles.authframe_container_bg_frame}
      />
      <div className={Styles.authframe_container_inner}>
        <div className={Styles.authframe_container_imagecontainer}>
          <img
            src={IMG_SIGIN_ADMIN_BG}
            className={Styles.authframe_container_imagecontainer_img}
            alt='signin_admin_bg'
          />
        </div>
        <div className={Styles.authframe_container_outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;
