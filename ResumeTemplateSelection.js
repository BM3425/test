import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ResumeTemplateSelection = ({ setCurrentView }) => {
  const templates = [
    { id: 'modern', name: 'Modern', icon: '🎨' },
    { id: 'classic', name: 'Classic', icon: '📄' },
    { id: 'minimal', name: 'Minimal', icon: '✨' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Choose Your Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="p-6 hover:border-blue-500 cursor-pointer transition-colors" onClick={() => setCurrentView('preview')}>
            <CardContent>
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-gray-600">Professional and clean design</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplateSelection;
