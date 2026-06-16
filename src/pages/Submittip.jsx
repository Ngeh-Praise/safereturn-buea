import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function SubmitTip() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <nav className="text-sm text-slate-500 mb-4">
          <Link to="/activecases" className="text-slate-600 hover:underline">Active Cases</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-800 font-semibold">Report Sighting</span>
        </nav>

        <div className="flex gap-10 items-start">
          {/* Main column */}
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Submit a Report</h1>
            <p className="text-sm text-slate-600 mb-6">Your information could save a life. Please provide as much detail as possible.</p>

            <div className="rounded-2xl border border-[#E7D8DD] bg-white p-6 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">Select Case</label>
                  <select className="w-full rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm bg-white">
                    <option>Select a person from the active directory...</option>
                  </select>
                </div>

                <div className="bg-[#FFF5F6] border border-[#F1D8DA] rounded-lg p-3 flex items-center justify-between">
                  <div className="text-sm text-slate-700">
                    <div className="font-semibold">I have found this person</div>
                    <div className="text-xs text-slate-500">Check this if the person is currently with you or secured.</div>
                  </div>
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-14 h-8 bg-white border border-[#E5D8DB] rounded-full peer-checked:bg-[#7A0C2E] peer-checked:border-[#7A0C2E] transition-colors duration-200"></div>
                      <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white border border-[#D1D5DB] shadow-sm transition-transform duration-200 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">Sighting / Incident Description</label>
                  <textarea rows={5} placeholder="Describe what you saw, clothing, behavior, or physical state..." className="w-full rounded-lg border border-[#E5D8DB] p-3 text-sm text-slate-700"></textarea>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-slate-600 mb-2">Location of Sighting</label>
                    <input type="text" placeholder="Enter neighborhood or GPS" className="w-full rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm" />
                  </div>
                  <div className="w-28">
                    <label className="block text-xs font-medium text-slate-600 mb-2">&nbsp;</label>
                    <button type="button" className="w-full rounded-lg border border-[#D7DDE0] bg-white px-3 py-2 text-sm text-slate-700">Detect</button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">Upload Image (Optional)</label>
                  <label className="flex items-center justify-center rounded-lg border-2 border-dashed border-[#E7D8DD] h-36 cursor-pointer text-slate-500">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#FFF1F4] text-[#7A0C2E] mb-2">📷</div>
                      <div className="text-sm">Click to upload or drag and drop</div>
                      <div className="text-xs text-slate-400">PNG, JPG up to 10MB</div>
                    </div>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-2">Your Contact Info (Private)</div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Full Name" className="rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm" />
                    <input type="text" placeholder="Phone Number" className="rounded-lg border border-[#E5D8DB] px-3 py-2 text-sm" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full rounded-md bg-[#7A0C2E] text-white py-3 text-sm font-semibold flex items-center justify-center gap-3">▸ SUBMIT URGENT REPORT</button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-80 mt-8">
            <div className="rounded-lg bg-white border border-[#E7D8DD] p-4 mb-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Response Guidelines</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Stay calm and do not approach if unsafe.</li>
                <li>• Photos help responders verify identity.</li>
                <li>• Note landmarks like schools or stores.</li>
              </ul>
            </div>

            <div className="rounded-lg bg-[#FFF1F4] border border-[#F3C7CB] p-4">
              <h4 className="text-sm font-semibold text-[#7A0C2E]">Immediate Danger?</h4>
              <p className="text-sm text-slate-700 mt-2">If the person is in immediate life‑threatening danger, call the local emergency number first.</p>
              <div className="mt-3 text-center font-bold text-[#7A0C2E]">CALL 117 NOW</div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}