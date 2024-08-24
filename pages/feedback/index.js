import Header from "@/components/header";
import FeedbackCard from "@/components/feedbackCard";
import Card from "@/components/card";
import styles from "./style.module.css";

const rubric = [
    {
        name: "Asking Clarifying Questions",
        score: 4,
        explanation: "Asked several good questions but still missed some key questions on pricing."
    },
    {
        name: "Analytical Thinking",
        score: 2,
        explanation: "Unable to think deeply."
    }
];

export default function Feedback() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div>
                    <p className={styles.t2}>Final Quantified Ratings:</p>
                    <p className={styles.t2}>Overall Rating: <span className={styles.rating}>21/90 (needs improvement)</span></p>
                </div>
                <div className={styles.horizontalLine}></div>
                <div>
                    <p className={styles.t1}>Evaluation Summary:</p>
                </div>
                <div className={styles.cards}>
                    {rubric.map((feedback, index) => (
                        <FeedbackCard key={index} rubric={[feedback]} />
                    ))}
                </div>
                <div style={{ marginTop: '40px' }}>
                    <p className={styles.t1}>Evaluation Summary:</p>
                </div>
                <div className={styles.cards}>
                    {rubric.map((feedback, index) => (
                        <Card key={index} rubric={[feedback]} />
                    ))}
                </div>
                <div style={{ marginTop: '40px' }}>
                    <p className={styles.t1}><span className={styles.rating}>Feedback & Areas for Improvement:</span></p>
                </div>
                <div className={styles.cards}>
                    Deepen your understanding of the client’s situation by asking more questions to fully grasp the scope and specifics of the problem.
                    Develop a structured approach to break down complex issues before moving to recommendations.
                    Consider multiple factors and validate them with data before concluding, to ensure that your solutions are well-founded and relevant.
                    Thank you for your time, Sameer. I encourage you to focus on these areas to improve your problem-solving skills in future case studies.
                </div>
            </div>
        </>
    );
}
