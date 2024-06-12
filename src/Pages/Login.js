import React, { useState } from 'react';
import '../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const notify = (e) => {
        e.preventDefault();

        const validUsername = 'admin';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            toast.success('Login successful!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });


            const adminPanelUrl = `http://localhost:3001`;
            window.location.href = adminPanelUrl;

            // Clear input fields
            setUsername('');
            setPassword('');

        } else {
            toast.error('Invalid username or password', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 rounded-lg shadow">
                <div className="card-body">
                    <h2 className="text-center mb-4">Admin Login</h2>
                    <form onSubmit={notify}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-adminlogin btn-primary w-100">
                            Login
                        </button>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;