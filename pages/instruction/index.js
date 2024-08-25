import React, { useState } from "react";
import Header from "@/components/header";
import Checkbox from 'react-custom-checkbox';
import { FaCheck } from 'react-icons/fa';
import styles from "./style.module.css";
import { useRouter } from 'next/router';

export default function Instruction() {
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();
    const handleGetStarted = () => {
        router.push('/interview');
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <Header />
            <div className={styles.container}>
                <p className={styles.heading}>Assesment Info</p>
                <div className={styles.instructionContainer}>
                    <p className={styles.testHeading}>Test Instruction</p>
                    <ol className={styles.ol}>
                        <li>This assessment has a total of <span style={{ color: 'black', fontWeight: '800' }}>24 questions</span>.</li>
                        <li>This assessment takes about <span style={{ color: 'black', fontWeight: '800' }}>20-30 minutes</span> to complete.</li>
                        <li>Please complete this assessment in <span style={{ color: 'black', fontWeight: '800' }}>one continuous browser session</span>. You cannot pause, restart, or re-take it once you start the assessment.</li>
                        <li>Use the latest version of <span style={{ color: 'black', fontWeight: '800' }}>Google Chrome, Firefox, or Safari</span> for optimal performance.</li>
                        <li>Find a quiet and comfortable location where you can focus without interruptions.</li>
                        <li>When finished speaking for a question, press <span style={{ color: 'black', fontWeight: '800' }}>&lt;spacebar&gt;</span> to submit your response.</li>
                        <li>Ensure you are well-lit and visible on camera, if applicable (natural light is best, but a lamp can work too).</li>
                        <li>When responding to the AI, speak clearly and at a moderate pace to ensure accurate understanding.</li>
                        <li>Provide genuine and thoughtful answers, as the AI is designed to assess your skills and fit based on your responses.</li>
                        <li>Take your time with your answers and don't rush; it's okay to take a moment to think before responding.</li>
                        <li>You will be given a detailed assessment of your interview after completion.</li>
                    </ol>

                    <div className={`${styles.acceptCondition} `}>
                        <Checkbox
                            icon={<FaCheck color="white" size={14} />}
                            borderColor="#8E939C"
                            borderRadius={4}
                            style={{ cursor: 'pointer', backgroundColor: isChecked ? '#8C8AFF' : 'white' }} // Background color changes when checked
                            size={16}
                            onChange={handleCheckboxChange} // Directly assign the function here
                            checked={isChecked} // Controlled by state
                            containerStyle={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        />
                        <p>I agree to take this assessment based only on my immediate abilities.
                            I also agree not to participate in any malpractice by copying, taking external help,
                            or using any additional resources to improve my performance
                        </p>
                    </div>


                </div>
                <button className={styles.button} disabled={!isChecked} onClick={handleGetStarted}>Start Assesment</button>


            </div>
        </>
    )
}