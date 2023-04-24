import { useEffect, useRef, useState } from 'react';
import styles from '../styles/verifyOtp.module.scss';

export default function OtpInput({handleSubmit}) {
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]);

  const handleInputChange = (event, index) => {
    const value = event.target.value;
    setOtp((prevOtp) => {
      const otpArray = prevOtp.split('');
      otpArray[index] = value;
      return otpArray.join('');
    });
    if (value) {
      if (index === 5) {
        inputRefs.current[index].blur();
      } else {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  console.log(otp.length)
  return (
    <>
        <div className={styles['otp-input-container']}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`${styles['otp-input-box']} ${
            otp.length === index ? 'active' : ''
          }`}
        >
          <input
            ref={(el) => (inputRefs.current[index] = el)}
           
            type="text"
        maxLength={1}
        value={otp[index]}
        onChange={(event) => handleInputChange(event, index)}
      />
    </div>
  ))}
</div>

<button type='button' onClick={() => handleSubmit(otp)}>Submit</button>
    </>
    )
}
