import styles from './ManageWork.module.css';

export default function ManageWork() {
    const data = [
        {
            text: "Powerful project management"
        },
        {
            text: "Transparent work management"
        },
        {
            text: "Manage work & focus on the most important tasks"
        },
        {
            text: "Track your progress with interactive charts"
        },
        {
            text: "Easiest way to track time spent on tasks"
        }
    ]

  return (
        <section id={styles.manageSection}>
            <div className={`container ${styles.container}`}>
                <img src="images/manage-work.svg" alt="@manage.AltText" />
                <div className={styles.content}>
                    <h3 className={styles.title}>Manage Your Work</h3>
                    <ul className={styles.list}>
                        {
                            data.map((iconAndText) => (
                                <li key={iconAndText.text} className={styles.listItem}><i className={`fa-sharp fa-light fa-circle-check icon ${styles.icon}`}></i>{iconAndText.text}</li>
                            ))
                        }
                    </ul>
                    <button className={`btn btn-theme-s ${styles.btn}`}><i className="fa-solid fa-arrow-right"></i> Learn more</button>
                </div>
            </div>
        </section>
  );
}
