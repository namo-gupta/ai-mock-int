import styles from "./style.module.css";
import { useRouter } from 'next/router';

export default function InterviewCard() {
    const router = useRouter();
    const handleGetStarted = () => {
        router.push('/instruction');
      };
    return (
        <div className={styles.container}>
            <p>Most Recent</p>
            <p className={styles.testName}>Python Mock</p>
            <div className={styles.flex}>
                <div className={`${styles.flex} ${styles.mr20}`}>
                    <img src="/images/timer.svg" className={styles.img} alt=""/>
                    <p>13 Mins</p>
                </div>
                <div className={styles.flex}>
                    <img src="/images/questions.svg" className={styles.img} alt=""/>
                    <p>7 Questions</p>
                </div>
            </div>
            <button className={styles.button} onClick={handleGetStarted}>Start Interview</button>

        </div>
    )
}