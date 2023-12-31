import React, {useState} from 'react';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signup(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8070/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.status === 200) {
                alert('User registered successfully');
            } else {
                alert('Registration failed: ' + data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred while registering.');
        }
    }



    return (
        <div className="d-flex justify-content-center align-items-center">

            <form className="signup text-center" onSubmit={signup}>

                <h1>Create Account</h1>

                <div className="form-outline mb-4">
                    <input type="email"
                           placeholder="Email address"
                           className="form-control"
                           value={email}
                           onChange={ (event) => setEmail(event.target.value) }/>

                </div>

                <div className="form-outline mb-4">
                    <input type="password"
                           placeholder="Password"
                           className="form-control"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button type="submit" className="btn btn-custom-primary btn-block mb-4">Sign up</button>

            </form>
        </div>
    );
}
