import Header from "@/components/header";
import styles from "./style.module.css";

export default function Landing() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <p className={styles.heading}>Assesment Info</p>
                <div className={styles.instructionContainer}>
                    <p className={styles.testHeading}>Test Instruction</p>
                    <ol className={styles.ol}>
                        <li>This assessment has a total of 24 questions.</li>
                        <li>This assessment takes about 40 minutes to complete.</li>
                        <li>Please complete this assessment in one continuous browser session. You cannot pause, restart or re-take it once you start the assessment.</li>
                    </ol>
                    <div className={`${styles.acceptCondition} `}>
                        <div className={styles.checkBox}></div>
                        <p>I agree to take this assessment based only on my immediate abilities.
                            I also agree not to participate in any malpractice by copying, taking external help,
                            or using any additional resources to improve my performance
                        </p>
                    </div>


                </div>
                <button className={styles.button}>Start Assesment</button>


            </div>
        </>
    )
}