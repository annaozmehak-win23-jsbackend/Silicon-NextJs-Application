import styles from './DownloadApp.module.css';

export default function DownloadApp() {
    const data = [
        {
            storeName: 'App Store',
            awardTitle: 'Editor\'s Choice',
            awardRating: 'rating 4.7, 187K+ reviews',
            altText: 'App Store',
            storeImage: 'images/appstore.svg'
        },
        {
            storeName: 'Google Play',
            awardTitle: 'App of the Day',
            awardRating: 'rating 4.8, 30K+ reviews',
            altText: 'Google play',
            storeImage: 'images/googleplay.svg'
        }
    ]
  return (
        <section id={styles.downloadSection} className="download-section">
            <div className={`container ${styles.container}`}>
                <img className={styles.mobileImg} src="images/download-app.svg" alt="" />
                <div className={styles.content}>
                    <h3 className={styles.title}>Download Our App for Any Devices:</h3>
                        <div className={styles.downloadOption}>
                            {
                                data.map((app) => (
                                    <div className={styles.storeContent} key={app.storeName}>
                                        <div>
                                            <p className={styles.storeName}>{app.storeName}</p>
                                            <div className={styles.star}></div>
                                            <div className={styles.star}></div>
                                            <div className={styles.star}></div>
                                            <div className={styles.star}></div>
                                            <div className={styles.star}></div>
                                            <div className={styles.rating}>
                                                <h5 className={styles.awardTitle}>{app.awardTitle}</h5>
                                                <p className={styles.awardRating}>{app.awardRating}</p>
                                            </div>
                                        </div>
                                        <img className={styles.storeImage} src={app.storeImage} alt={app.altText} />
                                    </div>
                                
                                ))
                            }
                        </div>
                </div>
            </div>
        </section>
  );
}
