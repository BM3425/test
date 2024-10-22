import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ResumeOrganizer = ({ data, setData, setCurrentView }) => {
  const [activeSection, setActiveSection] = useState('personalInfo');

  const sections = [
    { id: 'personalInfo', label: 'Personal Info', icon: '👤' },
    { id: 'professionalExperience', label: 'Professional Experience', icon: '💼' },
    { id: 'volunteerExperience', label: 'Volunteer Experience', icon: '🤝' },
    { id: 'extracurriculars', label: 'Extracurriculars', icon: '🎯' },
    { id: 'relevantCoursework', label: 'Coursework', icon: '📚' },
    { id: 'skills', label: 'Skills', icon: '⚡' }
  ];

  const handlePersonalInfoChange = (field, value) => {
    setData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, [field]: value } }));
  };

  const handleExperienceChange = (type, index, field, value) => {
    setData(prev => {
      const newData = { ...prev };
      newData[type][index][field] = value;
      return newData;
    });
  };

  const addExperience = (type) => {
    setData(prev => ({
      ...prev,
      [type]: [...prev[type], { name: '', role: '', city: '', state: '', yearStarted: '', yearEnded: '', description: '' }]
    }));
  };

  const addSkill = (section, skill) => {
    if (section === 'skills' && skill) {
      setData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-lg">
      <div className="w-64 border-r border-gray-200 p-6">
        <nav className="space-y-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center w-full p-3 rounded-lg ${activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-6">
        {/* Personal Info Section */}
        {activeSection === 'personalInfo' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Information</h2>
            {Object.entries(data.personalInfo).map(([field, value]) => (
              <input
                key={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                value={value}
                onChange={(e) => handlePersonalInfoChange(field, e.target.value)}
                className="w-full p-2 border rounded"
              />
            ))}
          </div>
        )}

        {/* Experience and Volunteer Section */}
        {(activeSection === 'professionalExperience' || activeSection === 'volunteerExperience') && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{sections.find(s => s.id === activeSection).label}</h2>
            {data[activeSection].map((exp, index) => (
              <Card key={index} className="p-4">
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Company/Organization"
                      value={exp.name}
                      onChange={(e) => handleExperienceChange(activeSection, index, 'name', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Role"
                      value={exp.role}
                      onChange={(e) => handleExperienceChange(activeSection, index, 'role', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Start Year"
                      value={exp.yearStarted}
                      onChange={(e) => handleExperienceChange(activeSection, index, 'yearStarted', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="End Year"
                      value={exp.yearEnded}
                      onChange={(e) => handleExperienceChange(activeSection, index, 'yearEnded', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(activeSection, index, 'description', e.target.value)}
                    className="w-full p-2 border rounded h-24"
                  />
                </CardContent>
              </Card>
            ))}
            <button onClick={() => addExperience(activeSection)} className="w-full p-2 border-2 border-dashed rounded hover:border-blue-500">
              + Add Entry
            </button>
          </div>
        )}

        {/* Extracurriculars and Coursework Section */}
        {(activeSection === 'extracurriculars' || activeSection === 'relevantCoursework') && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{sections.find(s => s.id === activeSection).label}</h2>
            {data[activeSection].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder="Add Activity or Coursework"
                value={item}
                onChange={(e) => handleExperienceChange(activeSection, index, '', e.target.value)}
                className="w-full p-2 border rounded"
              />
            ))}
            <button onClick={() => addExperience(activeSection)} className="w-full p-2 border-2 border-dashed rounded hover:border-blue-500">
              + Add Entry
            </button>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded m-1">
                  {skill}
                </span>
              ))}
              <input
                type="text"
                placeholder="Add new skill"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addSkill('skills', e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeOrganizer;
