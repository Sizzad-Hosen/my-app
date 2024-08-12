"use client";

import React from 'react';

const SignUpPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const type = form.type.value;
    const newUser = { name,image,type, email, password };

    console.log('Form data:', newUser);

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      console.log('Server response:', data);

    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className='ps-10 pt-5'>
      <form onSubmit={handleSubmit}>
        <h3 className="text2xl">Name</h3>
        <div className='w-1/2 rounded border'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <h3 className="text2xl">Email</h3>
        <div className='w-1/2 pt-2 rounded'>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <h3 className="text2xl">Image</h3>
        <div className='w-1/2 pt-2 rounded'>
          <input
            type="text"
            name="image"
            placeholder="photo url"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <h3 className="text2xl">Password</h3>
        <div className='w-1/2 pt-2 rounded'>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <h3 className="text2xl">Type</h3>
     <div className='w-1/2 pt-2 rounded'>
     <input
            type="text"
            name="type"
            placeholder="type"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />

     </div>
        <button className='btn mt-5 bg-blue-500 rounded-lg btn-wind p-2' type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUpPage;
  