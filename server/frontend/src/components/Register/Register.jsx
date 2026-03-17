import React, { useState } from 'react';

const Register = () => {
    return (
        <div className="register_container">
            <h2>Sign Up</h2>
            <form>
                <input type="text" name="username" placeholder="Username" required />
                <input type="text" name="firstname" placeholder="First Name" required />
                <input type="text" name="lastname" placeholder="Last Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;