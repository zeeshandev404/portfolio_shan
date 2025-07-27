import React from 'react';

const SkillSlider = ({ skills, title }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between items-center mb-2 text-white">
            <span className="font-semibold">{skill.name}</span>
            <span>{skill.value}%</span>
          </div>
          <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 rounded-full"
              style={{ width: `${skill.value}%` }}
            ></div>
            <span
              className="absolute top-1/2 -translate-y-1/2 bg-teal-800 text-white text-xs py-0.5 px-2 rounded whitespace-nowrap"
              style={{ left: `${skill.value}%`, transform: 'translateX(-50%)' }}
            >
              {skill.value}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSlider;
