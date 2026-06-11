import React from 'react';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-[#4A020F] mb-6">About SafeReturn Buea</h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            <strong>SafeReturn Buea</strong> is a humanitarian response platform developed to streamline the reporting and location of missing persons within our community.
          </p>

          <p>
            This project is the capstone development initiative by a team of six Level 400 Computer Science students from the <strong>University of Buea</strong>. We are currently undertaking this project as part of the course <strong>CSC 404: Software Engineering</strong>.
          </p>

          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#4A020F] mb-2">Our Mission</h3>
            <p className="text-sm">
              To leverage software engineering principles to solve real-world community challenges. By digitizing the missing person reporting process, we aim to increase search efficiency, maintain data accuracy, and facilitate faster coordination between community members and emergency contacts.
            </p>
          </div>

          <p className="text-sm italic">
            "We are committed to applying our technical skills to create social impact within Buea."
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Development Team</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* You can map through your team names here */}
            {['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6'].map((member) => (
              <div key={member} className="p-3 bg-white border border-slate-200 rounded text-sm text-center">
                {member}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}