import styles from "./style.module.css";

const FeedbackSection = ({ feedback }) => {
    return (

        <div className={styles.container}>
            <div className={styles.feedbackItem}>
                <p className={styles.testName}>{feedback.name}: {feedback.score}/10</p>
            </div>
        </div>
        
    );
};

export default function FeedbackCard({ rubric }) {
    return (
        <>
            {rubric.map((feedback, index) => (
                <FeedbackSection key={index} feedback={feedback} />
            ))}
        </>
    );
}
