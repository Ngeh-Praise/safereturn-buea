import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

export default function SubmitTip() {
  const navigate = useNavigate();
  const [approvedCases, setApprovedCases] = useState([]);
  const [formData, setFormData] = useState({
    caseId: '',
    isFound: false,
    description: '',
    location: '',
    photo: null,
    reporterName: '',
    reporterPhone: ''
  });

  // Fetch approved cases on mount
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/cases/approved', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setApprovedCases(res.data);
      } catch (err) {
        console.error("Error fetching cases:", err);
      }
    };
    fetchCases();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('case_id', formData.caseId);
    data.append('is_found', formData.isFound ? 1 : 0); // Include checkbox state
    data.append('description', formData.description);
    data.append('location', formData.location);
    data.append('reporter_name', formData.reporterName);
    data.append('reporter_phone', formData.reporterPhone);
    if (formData.photo) data.append('image', formData.photo);

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/tips', data, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` 
        }
      });
      alert('Tip submitted successfully!');
      navigate('/activecases');
    } catch (err) {
      console.error(err);
      alert('Failed to submit tip.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <nav className="text-sm text-slate-500 mb-4">
          <Link to="/activecases" className="text-slate-600 hover:underline">Active Cases</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-800 font-semibold">Report Sighting</span>
        </nav>

        <div className="flex gap-10 items-start">
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Submit a Report</h1>
            <p className="text-sm text-slate-600 mb-6">Your information could save a life. Please provide as much detail as possible.</p>

            <div className="rounded-2xl border border-[#E7D8DD] bg-white p-6 shadow-sm">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">Select Case</label>
                  <select 
                    onChange={(e) => setFormData({...formData, caseId: e.target.value})}
                    className="w-full rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm bg-white"
                    required
                  >
                    <option value="">Select a person from the active directory...</option>
                    {approvedCases && approvedCases.length > 0 ? (
                      approvedCases.map((c) => (
                        <option key={c.id} value={c.id}>{c.full_name}</option>
                      ))
                    ) : (
                      <option disabled>No active cases available</option>
                    )}
                  </select>
                </div>

                <div className="bg-[#FFF5F6] border border-[#F1D8DA] rounded-lg p-3 flex items-center justify-between">
                  <div className="text-sm text-slate-700">
                    <div className="font-semibold">I have found this person</div>
                  </div>
                  <input 
                    type="checkbox" 
                    onChange={(e) => setFormData({...formData, isFound: e.target.checked})}
                    className="w-6 h-6 accent-[#7A0C2E]" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">Sighting Description</label>
                  <textarea 
                    rows={5} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full rounded-lg border border-[#E5D8DB] p-3 text-sm text-slate-700"
                    required
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-slate-600 mb-2">Location of Sighting</label>
                    <input 
                      type="text" 
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm" 
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">Upload Image</label>
                  <label className="flex items-center justify-center rounded-lg border-2 border-dashed border-[#E7D8DD] h-36 cursor-pointer text-slate-500">
                    <input type="file" onChange={(e) => setFormData({...formData, photo: e.target.files[0]})} className="hidden" />
                    <div>Click to upload</div>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Full Name" onChange={(e) => setFormData({...formData, reporterName: e.target.value})} className="rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm" required />
                  <input type="text" placeholder="Phone Number" onChange={(e) => setFormData({...formData, reporterPhone: e.target.value})} className="rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm" required />
                </div>

                <button type="submit" className="w-full rounded-md bg-[#7A0C2E] text-white py-3 text-sm font-semibold">▸ SUBMIT URGENT REPORT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}