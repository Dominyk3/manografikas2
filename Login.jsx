import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: add real auth logic
    navigate('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-[#127369]">Mano grafikas</h1>
        <input
          type="email"
          placeholder="El. paštas"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Slaptažodis"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full py-2 bg-[#127369] text-white rounded hover:bg-[#10403B]">
          Prisijungti
        </button>
      </form>
    </div>
  );
}
