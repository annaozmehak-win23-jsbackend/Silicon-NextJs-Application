import { Content as CourseContentType, Price } from '@/app/interfaces/coursesTypes';
import styles from './CourseContent.module.css';

interface CourseContentProps {
   courseContent: CourseContentType;
   price: Price;
}

export default function CourseContentComponent({ courseContent, price }: CourseContentProps) {
    return (
        <div className={styles.courseContent}>
            <div className={styles.details} dangerouslySetInnerHTML={{ __html: courseContent.description }}>
            
            </div>
            <div className={styles.includes}>
                <h5 className={styles.includesTitle}>This course includes:</h5>
                <ul className={styles.list}>
                    {
                        courseContent.includes.map((item, index) => (
                            <li key={index} className={styles.listItem}><i className={`${styles.listIcon} icon fa-solid fa-check`}></i> {item}</li>
                        ))
                    }
                </ul>
                {
                    price.discount > 0 ? (
                        <div className={styles.priceWithSale}>
                        <p className={styles.discountPrice}>${price.discount}</p>
                        <p className={styles.regularPrice}>${price.price}</p>
                    </div>
                    )
                    :
                        <p className="price">${price.price}</p>
                }
                 
                <button className={`${styles.joinBtn} btn btn-theme-s`}>Join course</button>
            </div>
        </div>
    );
}