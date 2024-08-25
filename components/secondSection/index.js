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
                            <p className={`${styles.t1} ${styles.ml40} `}>Realistic Practice Interviews</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Gen-AI simulated real conversations with industry experts to prepare for real-life interviews.</p>
                    </div>
                    <div className={`${styles.pointsContainer} ${styles.mt30}`}>
                        <div className={`${styles.pointsHeading} ${styles.primaryTextColor}`}>
                            <p className={`${styles.t1} `}>02</p>
                            <p className={`${styles.t1} ${styles.ml40} `}>In-Depth Performance Analysis</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Receive comprehensive feedback highlighting strengths and areas for improvement.</p>
                    </div>
                    <div className={`${styles.pointsContainer} ${styles.mt30}`}>
                        <div className={`${styles.pointsHeading} ${styles.primaryTextColor}`}>
                            <p className={`${styles.t1} `}>03</p>
                            <p className={`${styles.t1} ${styles.ml40} `}>Confidence Building</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Practice without pressure in a supportive environment - it’s just technology and you!</p>
                    </div>
                    <div className={`${styles.pointsContainer} ${styles.mt30}`}>
                        <div className={`${styles.pointsHeading} ${styles.primaryTextColor}`}>
                            <p className={`${styles.t1} `}>04</p>
                            <p className={`${styles.t1} ${styles.ml40} `}>Future Opportunities Database</p>
                        </div>
                        <p className={`${styles.pointsContent} ${styles.lightGray}`}>Sign up with us for exciting future opportunities tailored to your skills</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/keyPoints.svg" className={styles.keyImage} alt=""/>
            </div>
        </div>
    )
}