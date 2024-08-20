import admin from '../lib/firebaseAdmin';

export default function ProtectedPage({ user }) {
    return <div>Welcome, {user.email}!</div>;
}

export async function getServerSideProps(context) {
    const { req } = context;
    const token = req.cookies.token || '';

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        return {
            props: { user: decodedToken },
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}
