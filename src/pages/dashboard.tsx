// pages/dashboard.js

import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router'; // Import the useRouter hook for navigation

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        // If the user is not authenticated, redirect to the login page
        return {
            redirect: {
                destination: '/', // Replace with your login page URL
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

function Dashboard() {
    const router = useRouter(); // Initialize the useRouter hook

    // Your dashboard content here

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Add your dashboard content here */}
        </div>
    );
}

export default Dashboard;
