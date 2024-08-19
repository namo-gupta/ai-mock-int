import FeedbackCard from "../common/feedbackCard";
import styles from "./style.module.css";

export default function ThirdSection(){
    return (
        <div className={styles.container}>
            <div>
            <p className={`${styles.t1} ${styles.mt20}`}>USERS FEEDBACK</p>
            <p className={`${styles.t2} ${styles.mt20}`}>OUR TESTIMONIALS</p>
            <p className={`${styles.t3} ${styles.mt20}`}>Prepare, Practice, and Perfect with InterviewPro AI </p>
            <p className={`${styles.t3}`}>- Your Personal Interview Coach.</p>
            </div>
            <div className={styles.feedbackCard}>
                <FeedbackCard /> 
                <FeedbackCard /> 
                <FeedbackCard /> 
                <FeedbackCard /> 
                <FeedbackCard /> 
                <FeedbackCard /> 
            </div>
          
        </div>
    )
}