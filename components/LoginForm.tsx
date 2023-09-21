import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login form submission (e.g., authentication)
        console.log('Login form submitted:', formData);
        // Redirect to the signup page
        router.push('/signup');
    };

    const router = useRouter(); // Initialize the useRouter hook

    return (
        <div className="flex justify-center">
            <div className="w-2/3">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="usernameOrEmail" className="block text-gray-700 font-bold">Username or Email:</label>
                        <input
                            type="text"
                            id="usernameOrEmail"
                            name="usernameOrEmail"
                            value={formData.usernameOrEmail}
                            onChange={handleChange}
                            required
                            className="border border-black rounded-lg px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="border border-black rounded-lg px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-pink-600 text-white rounded-lg px-4 py-2 hover:bg-pink-700">Login</button>
                        <button type="button" className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-400 ml-2" onClick={() => router.push('/signup')}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
