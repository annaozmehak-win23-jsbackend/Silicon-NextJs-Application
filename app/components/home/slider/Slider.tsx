import styles from './Slider.module.css';

export default function Slider() {
    return (
        <section id={styles.slider}>
            <div className={styles.backgroundContainer}>
                <div className={`${styles.half} ${styles.darkMode}`}></div>
                <div className={`${styles.half} ${styles.lightMode}`}></div>
            </div>
    
            <div className={`container ${styles.container}`}>
                <div className={styles.titleBox}>
                    <h3 className={`${styles.title}`}>Switch Between</h3>
                    <h3 className={`${styles.darkText} ${styles.title}`}>Light & Dark Mode</h3>
                </div>
    
                <img className={styles.mockup} src="https://siliconannaozmehak.blob.core.windows.net/images/mockup.svg" alt="@slider.AltText" />
            </div>
        </section>
    );
  }