import styles from './CourseContent.module.css';

export default function CourseContent() {
    return (
        <div className={styles.courseContent}>
            <div className={styles.details}>
                <h3 className={styles.title}>Course Description</h3>
                <p className={styles.description}>Suspendisse natoque sagittis, consequat turpis. Sed tristique tellus morbi magna. At vel senectus accumsan, arcu mattis id tempor. Tellus sagittis, euismod porttitor sed tortor est id. Feugiat velit velit, tortor ut. Ut libero cursus nibh lorem urna amet tristique leo. Viverra lorem arcu nam nunc at ipsum quam. A proin id sagittis dignissim mauris condimentum ornare. Tempus mauris sed dictum ultrices.</p>
                <h5>What you`ll learn</h5>
                <ul className={styles.list}>
                    <li><i className={`${styles.stepsIcon} icon fa-sharp fa-regular fa-circle-check`}></i> Sed lectus donec amet eu turpis interdum.</li>
                    <li><i className={`${styles.stepsIcon} icon fa-sharp fa-regular fa-circle-check`}></i> Nulla at consectetur vitae dignissim porttitor.</li>
                    <li><i className={`${styles.stepsIcon} icon fa-sharp fa-regular fa-circle-check`}></i> Phasellus id vitae dui aliquet mi.</li>
                    <li><i className={`${styles.stepsIcon} icon fa-sharp fa-regular fa-circle-check`}></i> Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus.</li>
                    <li><i className={`${styles.stepsIcon} icon fa-sharp fa-regular fa-circle-check`}></i> In aenean dolor diam tortor orci eu.</li>
                </ul>
            </div>
            <div className={styles.includes}>
                <h5 className={styles.includesTitle}>This course includes:</h5>
                <ul className={styles.list}>
                    <li className={styles.listItem}><i className={`${styles.listIcon} icon fa-solid fa-display`}></i> @Model.Hours hours on-demand video</li>
                    <li className={styles.listItem}><i className={`${styles.listIcon} icon fa-regular fa-newspaper`}></i> 18 articles</li>
                    <li className={styles.listItem}><i className={`${styles.listIcon} icon fa-solid fa-download`}></i> 25 downloadable resources</li>
                    <li className={styles.listItem}><i className={`${styles.listIcon} icon fa-solid fa-infinity`}></i> Full lifetime access</li>
                    <li className={styles.listItem}><i className={`${styles.listIcon} icon fa-solid fa-trophy`}></i> Certificate of completion</li>
                </ul>
                    <div className={styles.priceWithSale}>
                        <p className={styles.discountPrice}>$100</p>
                        <p className={styles.regularPrice}>$200</p>
                    </div>
                    {/* <p className="price">$@Model.Price</p> */}

                <button className={`${styles.joinBtn} btn btn-theme-s`}>Join course</button>
            </div>
        </div>
    );
}