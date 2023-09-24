import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        dob: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Make a POST request to the API endpoint to create the user
            await axios.post('/api/signup', formData);

            // Redirect to the home page or display a success message
            window.location.href = '/';
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error and display an error message to the user
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg sm:m-10 md:w-2/3 lg:w-400px mt-8"
            >
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 font-bold">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 font-bold">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
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
                    <label htmlFor="dob" className="block text-gray-700 font-bold">
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4 flex flex-col items-center">
                    <button
                        type="submit"
                        className="bg-pink-600 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 m-4"
                    >
                        Create Account
                    </button>
                    <Link href="/"> {/* Redirect to the home page */}
                        <p className="text-pink-600 hover:underline">Already Have an Account?</p>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
