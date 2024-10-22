import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ResumePreview = ({ data }) => {
  return (
    <Card className="max-w-4xl mx-auto p-8">
      <CardContent>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
          <p className="text-gray-600">{data.personalInfo.email} | {data.personalInfo.phoneNumber}</p>
          <p className="text-gray-600">{data.personalInfo.school} | {data.personalInfo.schoolCity}, {data.personalInfo.schoolState}</p>
          <p className="text-gray-600">Grade {data.personalInfo.grade} | GPA: {data.personalInfo.unweightedGPA}</p>
        </div>

        {data.professionalExperience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            {data.professionalExperience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.name}</h3>
                  <p className="text-gray-600">{exp.yearStarted} - {exp.yearEnded}</p>
                </div>
                <p className="text-gray-800">{exp.role}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.volunteerExperience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Volunteer Experience</h2>
            {data.volunteerExperience.map((vol, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{vol.name}</h3>
                  <p className="text-gray-600">{vol.yearStarted} - {vol.yearEnded}</p>
                </div>
                <p className="text-gray-800">{vol.role}</p>
                <p className="text-gray-600">{vol.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.extracurriculars.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Extracurriculars</h2>
            {data.extracurriculars.map((activity, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-800">{activity}</p>
              </div>
            ))}
          </div>
        )}

        {data.relevantCoursework.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Relevant Coursework</h2>
            {data.relevantCoursework.map((course, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-800">{course}</p>
              </div>
            ))}
          </div>
        )}

        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded m-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumePreview;
