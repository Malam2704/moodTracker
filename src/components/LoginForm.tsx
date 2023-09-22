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
        <div className="min-h-screen flex items-start justify-center"> {/* Change 'items-center' to 'items-start' */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg sm:m-10 md:w-2/3 lg:w-400px  mt-8" // Adjust width with media query
            >
                <div className="mb-4">
                    <label htmlFor="usernameOrEmail" className="block text-gray-700 font-bold">
                        Username or Email:
                    </label>
                    <input
                        type="text"
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-400 ml-2"
                        onClick={() => router.push('/signup')}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
