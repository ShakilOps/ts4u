
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import OtpInput from '../components/OtpInput';
import styles from '../styles/verifyOtp.module.scss';
import axios from 'axios';

export default function Home() {
  const users = useSelector(state => state.users);
  const router = useRouter()
  console.log(users);
  const handleSubmit = async(otp) => {
    
   const response =  await axios.post("https://staging-be-ecom.techserve4u.com/api/user/verifyotp",{
      otp,
      email:users.email
    })
  router.push('/login')
  };

  return (
    <div className={styles['otp-container']}>
      <Head>
        <title>6-digit OTP Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles['otp-title']}>Enter 6-digit OTP code</h1>
      <OtpInput handleSubmit={handleSubmit} />
      
    </div>
  );
}
