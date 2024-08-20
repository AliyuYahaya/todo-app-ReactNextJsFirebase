import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/protected');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}
