import styles from './Error.module.css';

export default function Error() {
    return (
        <section id={styles.error}>
            <div className={`container ${styles.container}`}>
                <img src="images/404.png" alt="Error image" id="error-image" />
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Ooops!</h2>
                    <p className={styles.subtext}>The page you are looking for is not available.</p>
                    <a className="btn btn-theme" href="/"><i className="fa-solid fa-house icon"></i> Go to homepage</a>
                </div>
            </div>
        </section>
    );
  }