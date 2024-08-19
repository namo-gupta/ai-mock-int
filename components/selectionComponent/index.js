import InterviewCard from "../inteviewCard";
import styles from "./style.module.css";

export default function SelectionComponent() {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.t1}>welcome</p>
                <p className={styles.t2}>Ready to practice your skills today?</p>
            </div>
            <div className={styles.horizontalLine}>
            </div>
            <div>
                <p>Interviews In Pipeline -</p>
            </div>
            <div className={styles.cards}>
                <InterviewCard />
                <InterviewCard />
                <InterviewCard />
                <InterviewCard />
            </div>
        </div>
            )
}