import styles from './ProgramDetails.module.css';

export default function ProgramDetails() {
    return (
        <div className="program-details">
            <h3 className={styles.sectionTitle}>Program Details</h3>
            <div className={styles.programSteps}>
    
                <div className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>1</span>
                        </div>
                    </div>
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>Introduction. Getting started</h4>
                        <p className={styles.stepDescription}>Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat.</p>
                    </div>
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>2</span>
                        </div>
                    </div>
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>The ultimate HTML developer: advanced HTML</h4>
                        <p className={styles.stepDescription}>Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl, enim nec accumsan vitae est.</p>
                    </div>
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>3</span>
                        </div>
                    </div>
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>CSS & CSS3: basic</h4>
                        <p className={styles.stepDescription}>Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.</p>
                    </div>
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>4</span>
                        </div>
                    </div>
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>JavaScript basics for beginners</h4>
                        <p className={styles.stepDescription}>Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea vitae, velit, erat eget velit. At lacus ut proin erat.</p>
                    </div>
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>5</span>
                        </div>
                    </div>
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>Understanding APIs</h4>
                        <p className={styles.stepDescription}>Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames bibendum.</p>
                    </div>
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>6</span>
                        </div>
                    </div>
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>C# and .NET from beginner to advanced</h4>
                        <p className={styles.stepDescription}>Quis risus quisque diam diam. Volutpat neque eget eu faucibus sed urna fermentum risus. Est, mauris morbi nibh massa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}