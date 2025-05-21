import React from 'react';

export default function WeeklySchedule({ schedule, currentUser }) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {schedule.map((day, idx) => (
        <div key={idx} className="bg-white p-2 rounded-xl shadow-sm">
          <div className="text-xs text-[#8AA6A3] font-medium mb-1">{day.date}</div>
          {day.shifts.map((shift, i) => (
            <div
              key={i}
              className={`mb-1 p-1 rounded ${
                shift.name === currentUser.name
                  ? 'bg-[#127369]/20 text-[#127369] font-semibold'
                  : 'bg-[#BFBFBF]/30 text-[#4C5958]'
              }`}
            >
              {shift.time} – {shift.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
