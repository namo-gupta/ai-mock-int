import { useState } from "react";
import styles from "./style.module.css";

const CardSection = ({ feedback }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedText = feedback.explanation.length > 100 && !isExpanded 
        ? feedback.explanation.substring(0, 100) + "..."
        : feedback.explanation;

    return (
        <div>
            <p className={styles.testName}>{feedback.name}</p>
            <div className={styles.container}>
                <div className={styles.feedbackItem}>
                    <p className={styles.explanation}>{truncatedText}</p>
                    {feedback.explanation.length > 100 && (
                        <button className={styles.moreButton} onClick={toggleExpand}>
                            {isExpanded ? "Show Less" : "Show More"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Card({ rubric }) {
    return (
        <>
            {rubric.map((feedback, index) => (
                <CardSection key={index} feedback={feedback} />
            ))}
        </>
    );
}
