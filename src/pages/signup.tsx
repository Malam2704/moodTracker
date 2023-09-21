// components/SignupPage.tsx
import Link from 'next/link';
import SignupForm from '../../components/SignupForm';

const signup = () => {
    return (
        <div>
            <h2>Create an Account</h2>
            <SignupForm />
            <Link href="/"> {/* Redirect to the home page */}
                <a>Create Account</a>
            </Link>
        </div>
    );
};

export default signup;
