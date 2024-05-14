import { symlink } from 'fs';
import styles from './Showcase.module.css';

export default function Showcase() {
    const showcaseData = [
        {
            imageUrl: 'images/brands/brand1.svg',
            altText: 'Brand 1'
        },
        {
            imageUrl: 'images/brands/brand2.svg',
            altText: 'Brand 2'
        },
        {
            imageUrl: 'images/brands/brand3.svg',
            altText: 'Brand 3'
        },
        {
            imageUrl: 'images/brands/brand4.svg',
            altText: 'Brand 3'
        }
    ]

  return (
        <section id='overview' className={styles.showcase}>
            <img className={styles.backgroundImage} src="images/showcase-background.svg" alt="" />
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Task Management Assistant You Gonna Love</h1>
                    <p className={styles.showcaseText}>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
                    <a className={`btn btn-theme-s ${styles.btnThemeS}`} href=''>Get started for free</a>
                    <h6 className={styles.brandsText}>Largest companies use our tool to work efficiently</h6>
                    <div className={styles.brands}>
                        
                        {
                            showcaseData.map((brand, index) => (
                                <img key={index} className={styles.brand} src={brand.imageUrl} alt={brand.altText} />
                            ))
                        
                        }

                    </div>
                </div>
            </div>
        </section>
  );
}
