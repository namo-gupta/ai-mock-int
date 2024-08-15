import styles from "./style.module.css";

export default function SecondSection(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
               
                <p  className={`${styles.t1} ${styles.lightGray}`}>
                How it Works
                </p>
                <p className={`${styles.t2} ${styles.mainHeading}`}>
                Our Features
                </p>
                <p className={`${styles.t1} ${styles.lightGray}`}>
                Prepare, Practice, and Perfect with InterviewPro AI - Your Personal Interview Coach.
                </p>
                <div className={styles.keyPointsContainer}>
                    <div  className={styles.verticalLine}>
                    </div>
                    <div className={`${styles.pointsContainer} `}>
                        <div className={`${styles.pointsHeading} ${styles.primaryTextColor}`}>
                            <p className={`${styles.t1} `}>01</p>
                            <p className={`${styles.t1} ${styles.ml40} `}>Realistic Interview Simulations</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Experience job-specific interview scenarios that mimic real-life settings.</p>
                    </div>
                    <div className={`${styles.pointsContainer} ${styles.mt30}`}>
                        <div className={`${styles.pointsHeading} ${styles.primaryTextColor}`}>
                            <p className={`${styles.t1} `}>02</p>
                            <p className={`${styles.t1} ${styles.ml40} `}>In-depth performance Feedback and Scoring</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Receive detailed and actionable feedback on your performance.</p>
                    </div>
                    <div className={`${styles.pointsContainer} ${styles.mt30}`}>
                        <div className={`${styles.pointsHeading} ${styles.primaryTextColor}`}>
                            <p className={`${styles.t1} `}>01</p>
                            <p className={`${styles.t1} ${styles.ml40} `}>Unlimited Practice</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Practice as often as you like to perfect your interview skills.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/keyPoints.svg" className={styles.keyImage} alt=""/>
            </div>
        </div>
    )
}