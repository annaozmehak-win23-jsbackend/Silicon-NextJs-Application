import { ProgramDetails as ProgramDetailsTypes } from '@/app/interfaces/coursesTypes';
import styles from './ProgramDetails.module.css';

interface ProgramDetailsProps {
    programDetails: ProgramDetailsTypes[];
}

export default function ProgramDetails({ programDetails }: ProgramDetailsProps) {
    console.log(programDetails);
    return (
        <div className="program-details">
            <h3 className={styles.sectionTitle}>Program Details</h3>
            <div className={styles.programSteps}>

            { programDetails.map((programDetail, index) => (
                <div key={index} className={styles.stepContent}>
                    <div className={styles.outerCircle}>
                        <div className={styles.innerCircle}>
                            <span className={styles.stepNumber}>{programDetail.id.toString()}</span>
                        </div>
                    </div>
                  
                    <div className={styles.stepInfo}>
                        <h4 className={styles.stepTitle}>{programDetail.title}</h4>
                        <p className={styles.stepDescription}>{programDetail.description}</p>
                    </div>
                </div>     
            ))}
             
            </div>
        </div>
    );
}