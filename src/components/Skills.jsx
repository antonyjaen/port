import React from 'react';

export const Skills = ({ skills, theme }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between mx-auto items-center mt-[5%] w-[80%] h-[100vh]">
            <div className="area transform ease-in-out hover:scale-105 mt-16 sm:mt-20 lg:mt-24">
                <img className="w-64 h-48 sm:w-48 sm:h-36" src={`./front-${theme}.png`} alt="Front-End" />
                <h4 className="text-white text-2xl font-bold mt-4">Front-End</h4>
                <ul className="text-white text-lg mt-2">
                    {skills['front-end'].map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="area transform ease-in-out hover:scale-105 mt-16 sm:mt-20 lg:mt-24">
                <img className="w-64 h-48 sm:w-48 sm:h-36" src={`./back-${theme}.png`} alt="Back-End" />
                <h4 className="text-white text-2xl font-bold mt-4">Back-End</h4>
                <ul className="text-white text-lg mt-2">
                    {skills['back-end'].map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="area transform ease-in-out hover:scale-105 mt-16 sm:mt-20 lg:mt-24">
                <img className="w-64 h-48 sm:w-48 sm:h-36" src={`./devops-${theme}.png`} alt="Dev-Ops" />
                <h4 className="text-white text-2xl font-bold mt-4">Dev-Ops</h4>
                <ul className="text-white text-lg mt-2">
                    {skills['dev-ops'].map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
