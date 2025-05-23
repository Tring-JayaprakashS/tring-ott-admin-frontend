import styles from './SelectPlatform.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import { TV_PLATFORMS, WEB_MOBILE_PLATFORMS } from '../../../data/PlatformCard';
import { useAddClient } from '../../../context/AddClientContext';

const SelectPltaform = () => {
  const { formData } = useAddClient();
  const selectedTVPlatforms = TV_PLATFORMS.filter((platform) =>
    formData.selectedPlatforms.includes(platform.id)
  );
  const selectedWebPlatforms = WEB_MOBILE_PLATFORMS.filter((platform) =>
    formData.selectedPlatforms.includes(platform.id)
  );
  const hasSelectedPlatforms =
    selectedTVPlatforms.length > 0 || selectedWebPlatforms.length > 0;

  return (
    <TitleCard title='Platform Configuration'>
      {!hasSelectedPlatforms ? (
        <div className={styles.no_platforms}>
          <p>No platforms selected</p>
        </div>
      ) : (
        <div className={styles.selected_platforms_container}>
          <div className={styles.client_details_mainwrap_para}>
            <p className={styles.paragraph}>Selected Platforms</p>
          </div>
          <div className={styles.selected_platforms_grid}>
            {[...selectedTVPlatforms, ...selectedWebPlatforms].map(
              (platform) => (
                <div key={platform.id} className={styles.static_platform_card}>
                  <div className={styles.platform_card_static}>
                    <img
                      src={platform.image}
                      alt={platform.alt}
                      className={styles.platform_image}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </TitleCard>
  );
};

export default SelectPltaform;
