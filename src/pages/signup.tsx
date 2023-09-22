// components/SignupPage.tsx
import Link from 'next/link';
import SignupForm from '../components/SignupForm';
import MyHeader from '@/components/MyHeader';

const signup = () => {
    return (
        <>
            <MyHeader />
            <SignupForm />
        </>
    );
};

export default signup;
