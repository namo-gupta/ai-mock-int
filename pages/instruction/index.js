import React, {useState} from "react";
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
                        <li>This assessment has a total of <span style={{ color: 'black', fontWeight: '800' }}>24 questions</span>.</li>
                        <li>This assessment takes about <span style={{ color: 'black', fontWeight: '800' }}>40 minutes</span> to complete.</li>
                        <li>Please complete this assessment in  <span style={{ color: 'black', fontWeight: '800' }}>one continuous browser session</span>. <br></br>You cannot pause, restart or re-take it once you start the assessment.</li>
                        <li>This assessment consists of 2 sections that can be attempted in any order.</li>
                        <li>Once a section is submitted, you cannot revisit and edit your responses.</li>
                        <li>Do not navigate away from the test browser or open new tabs. These actions may lead to disqualification.</li>
                        <li>There is no negative marking for unattempted questions.</li>
                        <li>You can use the Next and Previous buttons to navigate.</li>
                        <li>Alternatively, use the question numbers provided to navigate quickly.</li>
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