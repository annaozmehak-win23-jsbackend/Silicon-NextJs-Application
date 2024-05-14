import styles from './Features.module.css';

export default function Features() {
    const feature = [
        {
            imageUrl: 'images/icons/comments-icon.svg',
            title: "Comments on Tasks",
            text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
        {
            imageUrl: 'images/icons/tasks-analytics-icon.svg',
            title: "Tasks Analytics",
            text: "Non imperdiet facilisis nulla tellus Morbi scelerisque eget adipiscing vulputate."
        },
        {
            imageUrl: 'images/icons/multiple-assignees-icon.svg',
            title: "Multiple Assignees",
            text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."
        },
        {
            imageUrl: 'images/icons/notifications-icon.svg',
            title: "Notifications",
            text: "Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra."
        },
        {
            imageUrl: 'images/icons/sections-icon.svg',
            title: "Sections & Subtasks",
            text: "Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus."
        },
        {
            imageUrl: 'images/icons/data-security-icon.svg',
            title: "Data Security",
            text: "Aliquam malesuada neque eget elit nulla vestibulum nunc cras."
        }
    ]
  return (
        <section className={styles.features}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>What Do You Get with Our Tool?</h1>
                <p className={styles.ingress}>Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
                <div className={styles.toolFeatures}>
                    
                    {
                        feature.map((item, index) => {
                            return (
                                <div className={styles.box} key={index}>
                                    <img className={styles.featureImage} src={item.imageUrl} alt="" />
                                    <h5>{item.title}</h5>
                                    <p className={styles.featureText}>{item.text}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
  );
}
