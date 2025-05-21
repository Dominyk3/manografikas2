import React, { useState } from 'react';

export default function SOSModal() {
  const [open, setOpen] = useState(false);
  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="fixed bottom-4 right-4 bg-red-400 text-white p-3 rounded-full shadow-lg"
    >
      SOS
    </button>
  );
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 text-red-500">SOS kvietimas</h3>
        <p className="mb-6">Ar gali padėti šiandien 15:00–22:00?</p>
        <button className="mr-3 px-4 py-2 bg-[#127369] text-white rounded" onClick={() => setOpen(false)}>
          Galiu
        </button>
        <button className="px-4 py-2 bg-[#BFBFBF] text-[#4C5958] rounded" onClick={() => setOpen(false)}>
          Negaliu
        </button>
      </div>
    </div>
  );
}
