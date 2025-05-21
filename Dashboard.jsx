import React, { useState, useEffect } from 'react';
import WeeklySchedule from './WeeklySchedule';
import SOSModal from './SOSModal';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const currentUser = { name: 'Dominykas', etatas: 0.5 };

  useEffect(() => {
    // TODO: fetch real schedule from API
    const sample = [
      { date: '2025-06-01', shifts: [{ time: '07:30–15:00', name: 'Agnė' }] },
      { date: '2025-06-02', shifts: [{ time: '15:00–22:00', name: 'Dominykas' }] },
      // ...
    ];
    setSchedule(sample);
  }, []);

  return (
    <div className="p-4 bg-[#F5F5F5] min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#10403B]">Mano grafikas</h2>
        <div className="text-sm text-[#4C5958]">{new Date().toLocaleDateString()}</div>
      </header>
      <WeeklySchedule schedule={schedule} currentUser={currentUser} />
      <SOSModal />
    </div>
  );
}
