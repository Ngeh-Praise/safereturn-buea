import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, MapPin, Camera, Upload } from 'lucide-react';

export default function ReportCase() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const locationMap = {
      'molyko': 1,
      'buea-town': 2,
      'mile-14': 3,
      'cleres-quarters': 4
    };

    // 1. Calculate the ID
    const locationId = locationMap[formData.lastSeenLocation];

    const data = new FormData();
    data.append('full_name', formData.fullName);
    data.append('age', formData.age);
    data.append('gender', formData.gender);
    
    // 2. IMPORTANT: Append the numerical ID, not the string name
    data.append('last_seen_location_id', locationId); 
    
    data.append('missing_date', formData.dateTimeMissing);
    data.append('description', formData.physicalDescription);
    
    if (formData.photo) {
      data.append('photo', formData.photo);
    }

    try {
      const token = localStorage.getItem('token');
      // ... rest of your axios call
      
      console.log("Token being sent:", token); // Add this to see if it's null or 'undefined'

    if (!token) {
        alert("No token found! Please log in.");}

      await axios.post('http://localhost:5000/api/cases', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      alert('Report submitted successfully!');
      navigate('/community-dashboard');
    } catch (err) {
      console.error("Submission error:", err);
      alert(err.response?.data?.message || 'Failed to submit report. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-4 py-10 w-full flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4A020F] mb-1">
          Report a Missing Person
        </h1>
        <p className="text-slate-500 text-sm md:text-base mb-8">
          Please provide accurate information to help community members in the search process.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Age</label>
                  <input
                    type="number"
                    name="age"
                    required
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
                    required
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
                  required
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
                  required
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
                required
                value={formData.physicalDescription}
                onChange={handleChange}
                rows={3}
                placeholder="Describe height, build, clothing, and any distinguishing marks..."
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#6B0317] focus:border-[#6B0317] resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#6B0317] hover:bg-[#520211] text-white font-medium text-sm px-10 py-3 rounded-lg transition-colors shadow-sm"
            >
              Submit Urgent Report
            </button>
            <button
              type="button"
              onClick={() => navigate('/community-dashboard')}
              className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-medium text-sm px-10 py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}