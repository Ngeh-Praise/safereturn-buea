import React, { useState } from 'react';
import { User, MapPin, Camera, Upload, AlertTriangle } from 'lucide-react';

export default function Reportcase() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    lastSeenLocation: '',
    dateTimeMissing: '',
    physicalDescription: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-10 w-full flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4A020F] mb-1">
          Report a Missing Person
        </h1>
        <p className="text-slate-500 text-sm md:text-base mb-8">
          Please provide accurate information to help community members in the search process.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Top Section: Missing Person Info & Photo Upload split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Box: Missing Person Information */}
            <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 text-[#4A020F] font-semibold text-base mb-5">
                <User size={18} />
                <span>Missing Person Information</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Age</label>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 24"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317]"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Box: Upload Photo */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
              <Camera size={36} className="text-[#4A020F] mb-3" />
              <h3 className="text-sm font-bold text-[#4A020F] mb-1">Upload Photo</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[180px] mb-4">
                A clear, recent photograph significantly increases search efficiency.
              </p>
              
              <label className="w-full max-w-[180px] border border-dashed border-[#D2B4BA] rounded-md py-2 px-3 flex items-center justify-center space-x-2 text-xs font-medium text-slate-700 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                <Upload size={14} className="text-slate-500" />
                <span>Choose File</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {formData.photo && (
                <span className="text-[10px] text-emerald-600 mt-2 truncate max-w-[160px]">
                  {formData.photo.name}
                </span>
              )}
            </div>
          </div>

          {/* Middle Section: Incident Details */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm max-w-[calc(100%-0px)] md:w-[65.5%]">
            <div className="flex items-center space-x-2 text-[#4A020F] font-semibold text-base mb-5">
              <MapPin size={18} />
              <span>Incident Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Last Seen Location</label>
                <select
                  name="lastSeenLocation"
                  value={formData.lastSeenLocation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317]"
                >
                  <option value="">Select Neighborhood</option>
                  <option value="molyko">Molyko</option>
                  <option value="buea-town">Buea Town</option>
                  <option value="mile-14">Mile 14</option>
                  <option value="cleres-quarters">Cleres Quarters</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Date/Time Missing</label>
                <input
                  type="datetime-local"
                  name="dateTimeMissing"
                  value={formData.dateTimeMissing}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Physical Description</label>
              <textarea
                name="physicalDescription"
                value={formData.physicalDescription}
                onChange={handleChange}
                rows={3}
                placeholder="Describe height, build, clothing, and any distinguishing marks..."
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317] resize-none"
              />
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#6B0317] hover:bg-[#520211] text-white font-medium text-sm px-10 py-3 rounded-lg transition-colors shadow-sm"
            >
              Submit Urgent Report
            </button>
            <button
              type="button"
              className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-medium text-sm px-10 py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Bottom Alert / Notice Box */}
        <div className="mt-8 bg-red-50/50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertTriangle className="text-red-700 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <h4 className="text-xs font-bold text-red-900 mb-1">Confidentiality & Accuracy Notice</h4>
            <p className="text-xs text-red-800 leading-relaxed">
              False reports or intentionally misleading information may hinder community search efforts. 
              By submitting this form, you affirm that the information provided is accurate to the best of your knowledge.
            </p>
          </div>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="bg-[#F8FAFC] border-t border-slate-200/60 px-6 py-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <span className="font-bold text-slate-700">SafeReturn Buea</span>
          <p className="mt-0.5">© 2026 SafeReturn Buea. Humanitarian Response Platform.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#contacts" className="hover:underline">Emergency Contacts</a>
          <a href="#protocol" className="hover:underline">Safety Protocol</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
