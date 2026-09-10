import React, { useState, useEffect } from 'react';
import { 
  Play, Calendar, MapPin, Clock, Users, 
  Menu, X, Share2, Download, Lock, Save, 
  Youtube, CheckCircle, Ticket, 
  Sliders, Eye, EyeOff, Grid, LogOut, Info, Heart, Trash2, AlertTriangle
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  collection, 
  onSnapshot, 
  addDoc,
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';

// --- Firebase Configuration ---
const userProvidedConfig = {
  apiKey: "AIzaSyCy_gaaxo0Vd-0llMEi1h3BD5t_zfiVYyI",
  authDomain: "i-love-bharat.firebaseapp.com",
  projectId: "i-love-bharat",
  storageBucket: "i-love-bharat.firebasestorage.app",
  messagingSenderId: "960030069619",
  appId: "1:960030069619:web:037404bcf35a848f302b06",
  measurementId: "G-1Z5HK31G0N"
};

const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : userProvidedConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- Image Fallback Helper ---
const handleImageError = (e) => {
  e.target.onerror = null; 
  e.target.src = "https://placehold.co/400x300/e5e7eb/6b7280?text=Image+Not+Found";
};

// --- Default Data & Configuration ---
const DEFAULT_CONFIG = {
  visuals: {
    patternType: 'svg',
    patternUrl: "",
    mainBgImage: "https://images.unsplash.com/photo-1596707333630-67c8dc91b9e9?auto=format&fit=crop&q=80&w=2000",
    bgImageOpacity: 0.15, 
    patternOpacity: 1.0, 
    showMotifs: true,
    showDividers: true
  },
  header: {
    orgName: "ISKCON Ujjain Presents",
    eventName: "Mega Youth Fest",
    themeTitle: "I Love Bharat",
    tagline: "Bharat Ki Yuva Kranti",
    subTagline: "3000+ Students Joining",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISKCON_Logo.svg/1200px-ISKCON_Logo.svg.png"
  },
  about: {
    title: "I Love Bharat 2026",
    description: "The program is based on the teachings of Bhagavad Gita. The aim of this program is to free youth from intoxication, depression, distraction, and give them direction for success and steadiness in life. India's glories will be displayed through Video shows, Drama, Kirtan, Dance, Lectures, and Prasadam distribution.",
    date: "26 January 2026",
    venue: "ISKCON Ujjain Goshala Ground",
    time: "4:00 PM",
    stats: "3000" 
  },
  dedication: {
    enabled: true,
    title: "Dedicated to",
    name: "HDG A.C. Bhaktivedanta Swami Prabhupada",
    subtitle: "Founder-Acharya of the International Society for Krishna Consciousness",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Bhaktivedanta_Swami_Prabhupada_at_Bhaktivedanta_Manor_1973.jpg"
  },
  gallery: [
    { id: 1, url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800", title: "Cultural Dance" },
    { id: 2, url: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?auto=format&fit=crop&q=80&w=800", title: "Kirtan Bliss" },
    { id: 3, url: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&q=80&w=800", title: "Youth Power" },
    { id: 4, url: "https://images.unsplash.com/photo-1561564552-6c3f684c9879?auto=format&fit=crop&q=80&w=800", title: "Drama" },
    { id: 5, url: "https://images.unsplash.com/photo-1604580864964-c8e0d4536d0e?auto=format&fit=crop&q=80&w=800", title: "Celebration" },
    { id: 6, url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800", title: "Community" },
  ],
  videos: [
    { id: 1, type: 'youtube', url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Festival Highlights" },
    { id: 2, type: 'youtube', url: "https://www.youtube.com/embed/M7fi_ib01F0", title: "Youth Inspiration" },
    { id: 3, type: 'youtube', url: "https://www.youtube.com/embed/lAIgzyD-qgU", title: "Kirtan Mela" },
  ],
  pledgeText: {
    hindi: "मैं अपने कल्याण और नशा मुक्त भारत के लिए, सभी प्रकार के नशों, मादक पदार्थों और पदार्थों के उपयोग से मुक्त जीवन जीने का संकल्प लेता/लेती हूँ।",
    english: "For my well-being and for a Nasha Mukt Bharat, I take a pledge to live a life free from all drugs, intoxicants, and substance use."
  }
};

const PATTERN_PRESETS = [
  { name: 'Default Mandala', type: 'svg', url: '' },
  { name: 'Indian Paisley', type: 'image', url: 'https://www.transparenttextures.com/patterns/black-scales.png' }, 
  { name: 'Geometric Cubes', type: 'image', url: 'https://www.transparenttextures.com/patterns/cubes.png' },
  { name: 'Floral Motif', type: 'image', url: 'https://www.transparenttextures.com/patterns/flower-trail.png' },
];

// --- Helper Functions ---
const formatTimestamp = (ts) => {
  if (!ts) return '';
  if (ts.seconds) return new Date(ts.seconds * 1000).toLocaleString();
  if (ts instanceof Date) return ts.toLocaleString();
  try { return new Date(ts).toLocaleString(); } catch(e) { return ''; }
};

const downloadCSV = (data, filename) => {
  if (!data || !data.length) {
    alert("No data to download.");
    return;
  }
  const headers = Object.keys(data[0]).filter(k => k !== 'id').join(",");
  const rows = data.map(obj => {
    const objCopy = { ...obj };
    delete objCopy.id; 
    return Object.values(objCopy).map(val => 
      typeof val === 'object' && val?.seconds ? new Date(val.seconds*1000).toISOString() : 
      `"${String(val).replace(/"/g, '""')}"`
    ).join(",");
  });
  const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// --- Custom Components ---

const Toast = ({ message, type, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed top-20 right-4 z-[100] animate-fade-in-up">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl text-white font-bold ${type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}>
        {type === 'error' ? <X size={20} /> : <CheckCircle size={20} />}
        {message}
        <button onClick={onClose} className="ml-4 opacity-70 hover:opacity-100"><X size={16}/></button>
      </div>
    </div>
  );
};

const TriColorHeart = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tricolor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="33%" stopColor="#FF9933" />
        <stop offset="33%" stopColor="#FFFFFF" />
        <stop offset="66%" stopColor="#FFFFFF" />
        <stop offset="66%" stopColor="#138808" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
      </filter>
    </defs>
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
      fill="url(#tricolor)" 
      stroke="#e5e5e5" 
      strokeWidth="0.5"
      filter="url(#shadow)"
    />
    <g transform="translate(12, 12)" style={{transformBox: 'fill-box', transformOrigin: 'center'}}> 
      <circle r="3.2" stroke="#000080" strokeWidth="0.4" fill="white" fillOpacity="0.5" />
      <circle r="0.5" fill="#000080" />
      {[...Array(24)].map((_, i) => (
        <line key={i} x1="0" y1="0" x2="0" y2="-3.2" stroke="#000080" strokeWidth="0.2" transform={`rotate(${i * 15})`} />
      ))}
    </g>
  </svg>
);

const CornerMotif = ({ className, opacity = 1 }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" style={{ opacity }}> 
    <path d="M0 0 C 10 0 40 10 50 50 C 10 40 0 10 0 0" fill="#FF9933" />
    <path d="M0 0 C 0 10 10 40 50 50 C 40 10 10 0 0 0" fill="#138808" />
    <circle cx="20" cy="20" r="5" fill="#000080" />
    <path d="M15 15 L25 25 M25 15 L15 25" stroke="white" strokeWidth="2" />
    <path d="M50 50 Q 80 60 90 90" stroke="#FF9933" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M50 50 Q 60 80 90 90" stroke="#138808" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="90" cy="90" r="3" fill="#FF9933" />
  </svg>
);

const FloralDivider = ({ className }) => (
  <div className={`w-full h-8 overflow-hidden ${className}`}>
    <svg width="100%" height="100%" preserveAspectRatio="none">
       <pattern id="flowerPattern" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
         <path d="M20 15 Q 25 5 30 15 Q 25 25 20 15 Z" fill="#FF9933" />
         <path d="M20 15 Q 15 5 10 15 Q 15 25 20 15 Z" fill="#138808" />
         <circle cx="20" cy="15" r="2" fill="#000080" />
       </pattern>
       <rect width="100%" height="100%" fill="url(#flowerPattern)" />
    </svg>
  </div>
);

const MandalaPattern = ({ opacity = 1 }) => (
  <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="mandala" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="12" stroke="#FF9933" fill="none" strokeWidth="1.5"/>
        <path d="M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z" fill="none" stroke="#138808" strokeWidth="1" />
        <circle cx="30" cy="30" r="4" fill="#FF9933" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mandala)" />
  </svg>
);

// --- Admin Components ---
const AdminLogin = ({ onClose, onLogin, showToast }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // .trim() removes any accidental spaces you typed at the end of the password
    const safePassword = password.trim(); 

    // EMERGENCY MASTER PASSWORD BYPASS
    if (safePassword === 'Radha@108') {
      showToast('Master Password Accepted. Bypass Active.', 'success');
      onLogin(true); // Pass true to indicate this is a bypass admin
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      showToast('Email is required if you are not using the Master Password.', 'error');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, safePassword);
      onLogin(false); // False means normal Firebase login
    } catch (err) {
      showToast('Incorrect Password or Access Denied.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full border-t-4 border-orange-500 shadow-2xl animate-fade-in-up">
        <h3 className="text-xl font-bold mb-6 text-orange-800 flex items-center gap-2">
          <Lock size={20}/> Admin Access
        </h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500">Email (Leave blank if using Master Password)</label>
            <input 
              type="email" placeholder="admin@example.com" 
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500">Password</label>
            <input 
              type="password" required placeholder="••••••••" 
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-3 justify-end pt-4">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition">Cancel</button>
            <button 
              type="submit" disabled={loading}
              className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:shadow-lg disabled:opacity-50 transition transform hover:-translate-y-0.5"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ config, setConfig, attendees, pledges, onClose, onSave, showToast }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [localConfig, setLocalConfig] = useState(config);

  const handleSave = () => {
    setConfig(localConfig);
    onSave(localConfig);
  };

  const handleArrayChange = (section, index, field, value) => {
    const newArray = [...localConfig[section]];
    newArray[index] = { ...newArray[index], [field]: value };
    setLocalConfig({ ...localConfig, [section]: newArray });
  };

  // --- WHITE SCREEN CRASH FIX: Logout correctly unmounts component before Firebase destroys token ---
  const handleLogout = async () => {
    onClose(); // Hide the Admin component FIRST so it stops trying to read data
    try {
      await signOut(auth); // Sign out of Firebase SECOND
    } catch(err) {
      console.error(err);
    }
  };

  const handleDeleteItem = async (collectionName, docId) => {
    if (!window.confirm('Are you sure you want to delete this record? This cannot be undone.')) return;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', collectionName, docId));
      showToast('Record deleted successfully.', 'success');
    } catch (err) {
      showToast('Error deleting record. Check Firebase Rules.', 'error');
    }
  };

  const handleClearAll = async (collectionName, dataArray) => {
    if (!window.confirm(`WARNING: You are about to permanently delete ALL ${dataArray.length} records. Are you absolutely sure?`)) return;
    try {
      const deletePromises = dataArray.map(item => 
        deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', collectionName, item.id))
      );
      await Promise.all(deletePromises);
      showToast(`All records cleared successfully!`, 'success');
    } catch (err) {
      showToast('Error clearing records.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 z-[60] overflow-auto flex flex-col">
      <div className="bg-white shadow-sm p-4 sticky top-0 z-10 flex justify-between items-center border-b border-orange-200">
        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
          Control Panel
        </h2>
        <div className="flex gap-3">
          <button onClick={handleSave} className="flex items-center gap-2 bg-green-600 text-white font-bold px-5 py-2 rounded-xl hover:bg-green-700 shadow-md transition transform hover:-translate-y-0.5">
            <Save size={18} /> Save
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-800 text-white font-bold px-5 py-2 rounded-xl hover:bg-gray-900 shadow-md transition transform hover:-translate-y-0.5">
            <LogOut size={18} /> Exit
          </button>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto w-full flex-grow">
        <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
          {['content', 'visuals', 'dedication', 'attendees', 'pledges'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full capitalize font-bold transition-all duration-300 ${activeTab === tab ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              {tab === 'visuals' ? 'Gallery & Theme' : tab} 
              {tab === 'attendees' && ` (${attendees?.length || 0})`}
              {tab === 'pledges' && ` (${pledges?.length || 0})`}
            </button>
          ))}
        </div>

        {activeTab === 'content' && (
          <div className="space-y-6 animate-fade-in">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">Header Texts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input value={localConfig?.header?.orgName} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, orgName: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Org Name" />
                <input value={localConfig?.header?.eventName} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, eventName: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Event Name" />
                <input value={localConfig?.header?.tagline} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, tagline: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Tagline" />
                <input value={localConfig?.header?.subTagline} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, subTagline: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Sub-tagline" />
              </div>
            </section>
            
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">Event Details</h3>
              <textarea value={localConfig?.about?.description} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, description: e.target.value}})} className="border p-3 rounded-xl w-full h-32 mb-4 bg-gray-50" placeholder="Description" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input value={localConfig?.about?.date} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, date: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Date" />
                <input value={localConfig?.about?.venue} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, venue: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Venue" />
                <input value={localConfig?.about?.time} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, time: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Time" />
                <input type="number" value={localConfig?.about?.stats} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, stats: e.target.value}})} className="border p-3 rounded-xl bg-gray-50" placeholder="Expected Count (e.g. 3000)" />
              </div>
            </section>

             <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">YouTube Links</h3>
              {localConfig?.videos?.map((vid, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input value={vid.url} onChange={(e) => handleArrayChange('videos', idx, 'url', e.target.value)} className="border p-3 rounded-xl flex-grow bg-gray-50" placeholder="Embed URL" />
                  <input value={vid.title} onChange={(e) => handleArrayChange('videos', idx, 'title', e.target.value)} className="border p-3 rounded-xl w-1/3 bg-gray-50" placeholder="Title" />
                </div>
              ))}
            </section>
          </div>
        )}

        {/* --- Data Tabs with Delete Feature --- */}
        {activeTab === 'attendees' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-lg text-gray-700">Total Registered: {attendees?.length || 0}</h3>
               <div className="flex gap-3">
                 <button onClick={() => handleClearAll('attendees', attendees)} className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-100 font-bold transition">
                   <AlertTriangle size={16} /> Clear All Data
                 </button>
                 <button onClick={() => downloadCSV(attendees, 'attendance_data.csv')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 font-bold transition">
                   <Download size={16} /> Export CSV
                 </button>
               </div>
             </div>
             
             {!attendees || attendees.length === 0 ? (
               <div className="text-center py-10 text-gray-400 font-medium">No attendees registered yet.</div>
             ) : (
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-sm">
                   <thead>
                     <tr className="bg-gray-100 text-gray-600 uppercase">
                       <th className="p-3 rounded-tl-xl">Name</th><th className="p-3">Gender</th><th className="p-3">Age</th><th className="p-3">Contact</th><th className="p-3">Time</th><th className="p-3 rounded-tr-xl text-center">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y">
                     {attendees.map((a, i) => (
                       <tr key={a.id || i} className="hover:bg-gray-50 transition-colors">
                         <td className="p-3 font-bold">{a.name}</td>
                         <td className="p-3">{a.gender}</td>
                         <td className="p-3">{a.age}</td>
                         <td className="p-3">{a.contact}</td>
                         <td className="p-3 text-gray-500">{formatTimestamp(a.createdAt)}</td>
                         <td className="p-3 text-center">
                           <button onClick={() => handleDeleteItem('attendees', a.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors" title="Delete">
                             <Trash2 size={16} />
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             )}
          </div>
        )}
        
        {activeTab === 'pledges' && (
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-lg text-gray-700">Total Pledges: {pledges?.length || 0}</h3>
               <div className="flex gap-3">
                 <button onClick={() => handleClearAll('pledges', pledges)} className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-100 font-bold transition">
                   <AlertTriangle size={16} /> Clear All Data
                 </button>
                 <button onClick={() => downloadCSV(pledges, 'pledge_data.csv')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 font-bold transition">
                   <Download size={16} /> Export CSV
                 </button>
               </div>
             </div>
             
             {!pledges || pledges.length === 0 ? (
               <div className="text-center py-10 text-gray-400 font-medium">No pledges taken yet.</div>
             ) : (
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-sm">
                   <thead>
                     <tr className="bg-gray-100 text-gray-600 uppercase">
                       <th className="p-3 rounded-tl-xl">Name</th><th className="p-3">Mobile</th><th className="p-3">Time</th><th className="p-3 rounded-tr-xl text-center">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y">
                     {pledges.map((p, i) => (
                       <tr key={p.id || i} className="hover:bg-gray-50 transition-colors">
                         <td className="p-3 font-bold">{p.name}</td>
                         <td className="p-3">{p.mobile}</td>
                         <td className="p-3 text-gray-500">{formatTimestamp(p.createdAt)}</td>
                         <td className="p-3 text-center">
                           <button onClick={() => handleDeleteItem('pledges', p.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors" title="Delete">
                             <Trash2 size={16} />
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             )}
          </div>
        )}

        {(activeTab === 'dedication' || activeTab === 'visuals') && (
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center py-20">
               <h3 className="text-xl font-bold text-gray-400">Settings preserved in full deployment. Select Content or Data tabs above.</h3>
           </div>
        )}

      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [user, setUser] = useState(null);
  
  // State for Admin and Auth Bypass
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBypassAdmin, setIsBypassAdmin] = useState(false);
  
  const [showPledge, setShowPledge] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showCoupon, setShowCoupon] = useState(null); 
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  
  const [attendees, setAttendees] = useState([]);
  const [pledges, setPledges] = useState([]);
  
  // Custom Toast State
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [attForm, setAttForm] = useState({ name: '', contact: '', age: '', gender: 'M' });
  const [pledgeForm, setPledgeForm] = useState({ name: '', mobile: '' });
  const [pledgeTaken, setPledgeTaken] = useState(false);

  const showToastMsg = (msg, type = 'success') => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
  };

  // Auth & Init
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        setIsAdmin(!u.isAnonymous); 
      } else {
        setIsAdmin(false);
        signInAnonymously(auth).catch(console.error);
      }
    });

    const timer = setTimeout(() => {
      const hasAttended = sessionStorage.getItem('hasAttended');
      if (!hasAttended) setShowAttendance(true);
    }, 1500);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  // Data Fetching (CRASH FIX PROOFED)
  useEffect(() => {
    if (!user && !isBypassAdmin) return;

    let unsubConfig = null;
    let unsubAtt = null;
    let unsubPledge = null;

    try {
      const configRef = doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main');
      unsubConfig = onSnapshot(configRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data() || {}; // Safety fallback to prevent crashes
          setConfig(prev => ({
             ...DEFAULT_CONFIG,
             ...data,
             visuals: { ...DEFAULT_CONFIG.visuals, ...(data.visuals || {}) },
             header: { ...DEFAULT_CONFIG.header, ...(data.header || {}) },
             about: { ...DEFAULT_CONFIG.about, ...(data.about || {}) },
             dedication: { ...DEFAULT_CONFIG.dedication, ...(data.dedication || {}) },
             gallery: data.gallery || DEFAULT_CONFIG.gallery, // Prevents .map() crashes
             videos: data.videos || DEFAULT_CONFIG.videos // Prevents .map() crashes
          }));
        }
      }, (err) => console.warn('Config Load Error:', err.message)); 

      if (isAdmin || isBypassAdmin) {
        const attRef = collection(db, 'artifacts', appId, 'public', 'data', 'attendees');
        const qAtt = query(attRef, orderBy('createdAt', 'desc'));
        unsubAtt = onSnapshot(qAtt, (snap) => {
          setAttendees(snap.docs.map(d => ({ ...d.data(), id: d.id })));
        }, (err) => console.warn('Attendees Load Error:', err.message)); 

        const pledgeRef = collection(db, 'artifacts', appId, 'public', 'data', 'pledges');
        const qPledge = query(pledgeRef, orderBy('createdAt', 'desc'));
        unsubPledge = onSnapshot(qPledge, (snap) => {
          setPledges(snap.docs.map(d => ({ ...d.data(), id: d.id })));
        }, (err) => console.warn('Pledges Load Error:', err.message)); 
      }
    } catch (err) {
      console.error("Firestore Setup Error", err);
    }

    return () => {
      if (typeof unsubConfig === 'function') unsubConfig();
      if (typeof unsubAtt === 'function') unsubAtt();
      if (typeof unsubPledge === 'function') unsubPledge();
    };
  }, [user, isAdmin, isBypassAdmin]);

  const handleAdminLoginSuccess = (isBypass) => {
    if (isBypass) {
      setIsBypassAdmin(true);
    } else {
      setIsAdmin(true);
    }
    setShowAdminLogin(false);
  };

  const handleAdminLogout = () => {
    setIsBypassAdmin(false);
    setIsAdmin(false);
  };

  const saveConfig = async (newConfig) => {
    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main'), newConfig);
      showToastMsg('Website Updated Successfully!');
    } catch (e) {
      showToastMsg('Error updating website. Check Firebase Rules.', 'error');
    }
  };

  const submitAttendance = async (e) => {
    e.preventDefault();
    const couponData = { 
      name: attForm.name, contact: attForm.contact, age: attForm.age, gender: attForm.gender,
      date: new Date().toLocaleDateString(), createdAt: new Date() 
    };
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'attendees'), couponData);
      setShowAttendance(false);
      setShowCoupon(couponData);
      sessionStorage.setItem('hasAttended', 'true');
      showToastMsg("Attendance marked successfully!");
    } catch (err) {
      showToastMsg("Error submitting attendance. Check Firebase Rules.", "error");
    }
  };

  const submitPledge = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'pledges'), {
        name: pledgeForm.name, mobile: pledgeForm.mobile, createdAt: new Date()
      });
      setPledgeTaken(true);
      showToastMsg("Pledge recorded successfully!");
    } catch (err) {
      showToastMsg("Error submitting pledge. Check Firebase Rules.", "error");
    }
  };

  const sharePledge = async () => {
    const text = `🌟 I pledge for a Drug-Free India! 🌟\n\nI just took the "I Love Bharat" pledge at the ISKCON Youth Fest. Join me in this revolution!\n\nEvent: ${config.header?.eventName}\nTheme: ${config.header?.tagline}\n\n#ILoveBharat #NashaMuktBharat #ISKCONUjjain`;
    if (navigator.share) {
      navigator.share({ title: 'My Pledge', text, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(text);
      showToastMsg('Pledge message copied to clipboard!');
    }
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-orange-200 selection:text-orange-900 scroll-smooth">
      
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({...toast, show: false})} />}

      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-[-1] bg-orange-50">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${config.visuals?.mainBgImage})`, opacity: config.visuals?.bgImageOpacity ?? 0.15 }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/40 via-white/60 to-green-100/40"></div>
        
        {config.visuals?.patternType === 'image' ? (
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ 
              backgroundImage: `url("${config.visuals?.patternUrl}")`, 
              opacity: config.visuals?.patternOpacity ?? 1.0,
              backgroundRepeat: 'repeat'
            }} 
          />
        ) : (
          <MandalaPattern opacity={config.visuals?.patternOpacity ?? 1.0} />
        )}
      </div>

      {/* --- Admin Logic --- */}
      {showAdminLogin && <AdminLogin onClose={() => setShowAdminLogin(false)} onLogin={handleAdminLoginSuccess} showToast={showToastMsg} />}
      {(isAdmin || isBypassAdmin) && <AdminDashboard config={config} setConfig={setConfig} attendees={attendees} pledges={pledges} onClose={handleAdminLogout} onSave={saveConfig} showToast={showToastMsg} />}

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-lg shadow-sm border-b border-orange-100 transition-all">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer bg-white rounded-full p-1 border-2 border-orange-500 shadow-md">
               <img src={config.header?.logoUrl} onError={handleImageError} alt="Logo" className="h-10 w-10 rounded-full object-contain transform group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <span className="font-black text-xl hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800 tracking-tight">ISKCON Ujjain</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-sm text-gray-500 tracking-wide">
            {['HOME', 'ABOUT', 'EVENTS', 'HIGHLIGHTS'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-600 transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowAdminLogin(true)} className="md:hidden text-gray-600 hover:text-orange-600 p-2">
              <Menu />
            </button>
            <button 
              onClick={() => setShowAdminLogin(true)} 
              className={`hidden md:flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 border transition-all hover:shadow-md ${(isAdmin || isBypassAdmin) ? 'text-green-600 border-green-200 bg-green-50' : 'text-gray-400 hover:text-orange-500 hover:border-orange-200'}`}
              title={(isAdmin || isBypassAdmin) ? "Admin Dashboard" : "Admin Login"}
            >
              <Lock size={16} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* --- Header (Hero) --- */}
        <header id="home" className="pt-36 pb-20 px-4 text-center relative overflow-hidden">
          {config.visuals?.showMotifs && (
            <>
              <div className="absolute top-24 left-4 w-40 h-40 pointer-events-none hidden md:block animate-pulse">
                <CornerMotif className="w-full h-full transform -rotate-90" opacity={0.8} />
              </div>
              <div className="absolute top-24 right-4 w-40 h-40 pointer-events-none hidden md:block animate-pulse">
                <CornerMotif className="w-full h-full transform" opacity={0.8} />
              </div>
            </>
          )}

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 shadow-sm animate-fade-in-up">
              <p className="text-orange-800 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <Heart size={14} className="fill-orange-500 text-orange-500 animate-pulse"/>
                {config.header?.orgName}
              </p>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight drop-shadow-sm">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-red-600">
                {config.header?.eventName}
              </span>
            </h2>
            
            <div className="my-12 transform hover:scale-[1.02] transition duration-700 ease-out">
               <div className="inline-flex items-center justify-center gap-3 md:gap-6 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,150,0,0.15)] border-4 border-white relative overflow-hidden group">
                  
                  <div className="absolute -inset-10 bg-gradient-to-r from-orange-400 via-white to-green-400 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-spin-slow pointer-events-none"></div>

                  <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-700 drop-shadow-lg z-10" style={{textShadow: "4px 4px 0px rgba(255,200,150,0.5)"}}>I</span>
                  
                  <div className="relative mx-2 md:mx-4 z-10">
                    <TriColorHeart className="w-24 h-24 md:w-40 md:h-40 drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
                  </div>

                  <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-green-800 drop-shadow-lg z-10" style={{textShadow: "4px 4px 0px rgba(150,255,150,0.5)"}}>BHARAT</span>
               </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif text-gray-800 font-bold mb-6 drop-shadow-md">
              "{config.header?.tagline}"
            </h3>
            
            <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-gray-800 hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1">
              <Users className="w-5 h-5 text-orange-400" />
              <span className="tracking-wide text-lg">{config.header?.subTagline}</span>
            </div>
          </div>
        </header>

        {config.visuals?.showDividers && <FloralDivider />}

        {/* --- About Section (With Impact Tracker) --- */}
        <section id="about" className="py-24 px-4 container mx-auto relative scroll-mt-20">
          <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 shadow-2xl border-4 border-white relative overflow-hidden transition-all hover:shadow-orange-500/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
               <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-orange-200">
                    <Info size={16} className="text-orange-600" /> About The Revolution
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-serif leading-tight">
                    {config.about?.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium text-justify">
                    {config.about?.description}
                  </p>
                  
                  {/* Visual Impact Goal Tracker */}
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 mt-8 shadow-inner">
                     <div className="flex justify-between items-end mb-2">
                        <div>
                           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Our Target Goal</p>
                           <p className="text-3xl font-black text-gray-900">{config.about?.stats} <span className="text-lg text-gray-500">Youths</span></p>
                        </div>
                        <div className="text-orange-600 font-bold bg-orange-100 px-3 py-1 rounded-lg">Join the count!</div>
                     </div>
                     <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 h-full rounded-full w-[75%] relative overflow-hidden">
                           <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="flex-1 w-full grid grid-cols-1 gap-5">
                  {[
                    { icon: <Calendar size={28} />, title: "Date", val: config.about?.date, color: "orange" },
                    { icon: <Clock size={28} />, title: "Time", val: config.about?.time, color: "green" },
                    { icon: <MapPin size={28} />, title: "Venue", val: config.about?.venue, color: "blue" }
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-6 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 shadow-sm group`}>
                       <div className={`bg-${item.color}-50 text-${item.color}-600 p-4 rounded-2xl group-hover:bg-${item.color}-600 group-hover:text-white transition-colors`}>
                         {item.icon}
                       </div>
                       <div>
                         <p className={`text-xs font-black text-gray-400 uppercase tracking-widest mb-1`}>{item.title}</p>
                         <p className="text-xl font-bold text-gray-900">{item.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* --- Dedication Section --- */}
        <section className="py-20 container mx-auto px-4">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-[2rem] rotate-3 transition-transform duration-500 group-hover:rotate-6 opacity-50 blur-lg"></div>
                 
                 <div className="relative h-72 w-72 md:h-80 md:w-80 bg-white p-3 rounded-3xl shadow-2xl transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s', animationDuration: '3s', animationIterationCount: 'infinite', animationName: 'float' }}>
                   <div className="h-full w-full overflow-hidden rounded-2xl border border-gray-100">
                     <img 
                      src={config.dedication?.imageUrl} 
                      onError={handleImageError}
                      alt="Srila Prabhupada" 
                      className="h-full w-full object-cover filter contrast-110"
                     />
                   </div>
                   <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-6 py-2 rounded-full shadow-lg text-xs font-black uppercase tracking-widest text-orange-800 border border-orange-100 whitespace-nowrap">
                     {config.dedication?.title}
                   </div>
                 </div>
              </div>

              <div className="text-center md:text-left flex-1 space-y-4">
                <div className="h-1.5 w-16 bg-orange-500 rounded-full mx-auto md:mx-0"></div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 font-serif leading-tight">
                  {config.dedication?.name}
                </h2>
                <p className="text-xl text-gray-600 font-medium italic">
                  "{config.dedication?.subtitle}"
                </p>
              </div>
           </div>
        </section>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}} />

        {config.visuals?.showDividers && <FloralDivider className="rotate-180" />}

        {/* --- Events Gallery Grid --- */}
        <section id="events" className="py-24 relative overflow-hidden scroll-mt-10">
           <div className="absolute inset-0 bg-gray-950 z-0">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
           </div>

           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16">
               <span className="text-orange-500 font-black tracking-widest uppercase text-sm mb-3 block">Gallery & Activities</span>
               <h2 className="text-4xl md:text-6xl font-black text-white font-serif tracking-tight">Cultural Extravaganza</h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-6 rounded-full"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-8">
               {config.gallery?.map((item, idx) => (
                 <div 
                   key={item.id} 
                   className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:z-20 cursor-pointer"
                 >
                   <img 
                     src={item.url} 
                     onError={handleImageError}
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                   
                   <div className="absolute bottom-0 left-0 w-full p-8">
                     <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                        <h3 className="text-2xl font-black text-white leading-tight drop-shadow-md">
                          {item.title}
                        </h3>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* --- Media Grid (Youtube) --- */}
        <section id="highlights" className="py-24 container mx-auto px-4 scroll-mt-10">
          <div className="flex flex-col items-center justify-center gap-4 mb-16 text-center">
             <div className="bg-red-100 p-4 rounded-full">
               <Youtube className="text-red-600 w-10 h-10" />
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-serif">Highlights & Moments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {config.videos?.map((vid) => (
              <div key={vid.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition duration-300 border border-gray-100 group">
                <div className="aspect-video w-full bg-gray-900 relative">
                   <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                   </div>
                   <iframe 
                    src={vid.url} 
                    title={vid.title} 
                    className="w-full h-full relative z-10" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6 flex items-start justify-between bg-white group-hover:bg-gray-50 transition-colors">
                   <div>
                     <h4 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-red-600 transition-colors">{vid.title}</h4>
                     <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">Watch Now</p>
                   </div>
                   <div className="bg-red-50 p-3 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors transform group-hover:scale-110">
                      <Play size={18} fill="currentColor" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-950 text-gray-400 py-16 text-center relative overflow-hidden mt-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-24 h-24 mx-auto mb-6 bg-white p-2 rounded-full hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <img src={config.header?.logoUrl} onError={handleImageError} className="w-full h-full rounded-full object-contain" alt="logo" />
          </div>
          <h3 className="text-white text-3xl font-black mb-3 font-serif tracking-wide">{config.header?.orgName}</h3>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">Connecting youth to their roots through culture, wisdom, and devotion.</p>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm font-bold tracking-widest uppercase">© 2026 I Love Bharat Fest. Built for ISKCON Ujjain.</p>
          </div>
        </div>
      </footer>

      {/* --- Floating Action Tabs --- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-10px_40px_rgba(0,0,0,0.15)] md:bottom-10 md:right-10 md:left-auto md:flex-col md:gap-4 md:w-auto md:items-end md:shadow-none pb-safe">
        <button 
          onClick={() => setShowPledge(true)}
          className="flex-1 md:flex-none bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-5 md:py-4 px-6 md:pl-8 md:pr-10 md:rounded-full font-black text-sm md:text-base flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-green-500/40 md:hover:-translate-x-2 group border-t border-white/20 md:border-none"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform"><CheckCircle size={20} /></div>
          <span className="tracking-widest">PLEDGE NOW</span>
        </button>
        <button 
          onClick={() => setShowAttendance(true)}
          className="flex-1 md:flex-none bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white py-5 md:py-4 px-6 md:pl-8 md:pr-10 md:rounded-full font-black text-sm md:text-base flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-orange-500/40 md:hover:-translate-x-2 group border-t border-white/20 md:border-none"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:-rotate-12 transition-transform"><Ticket size={20} /></div>
          <span className="tracking-widest">ATTENDANCE</span>
        </button>
      </div>

      {/* --- Modals --- */}
      
      {/* Pledge Modal */}
      {showPledge && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative border-4 border-white">
            <button onClick={() => setShowPledge(false)} className="absolute top-5 right-5 z-20 w-10 h-10 bg-black/10 hover:bg-black/30 rounded-full flex items-center justify-center transition text-white"><X size={20} /></button>
            
            <div className="relative bg-gradient-to-br from-emerald-600 to-green-700 p-10 text-white text-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10">
                 <h3 className="text-4xl font-black mb-2 font-serif">My Pledge For Bharat</h3>
                 <p className="text-emerald-100 font-bold tracking-widest uppercase text-sm">Nasha Mukt Bharat Abhiyan</p>
               </div>
            </div>

            <div className="p-8 md:p-10">
              {!pledgeTaken ? (
                <form onSubmit={submitPledge} className="space-y-6">
                  <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 text-center relative shadow-inner">
                    <div className="text-orange-200 absolute top-2 left-6 text-6xl font-serif">"</div>
                    <p className="text-gray-800 font-bold italic relative z-10 mb-4">{config.pledgeText.english}</p>
                    <p className="text-gray-500 text-sm font-medium">{config.pledgeText.hindi}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      required type="text" placeholder="Your Full Name" 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-medium"
                      value={pledgeForm.name} onChange={e => setPledgeForm({...pledgeForm, name: e.target.value})}
                    />
                    <input 
                      required type="tel" placeholder="Mobile Number" 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-medium"
                      value={pledgeForm.mobile} onChange={e => setPledgeForm({...pledgeForm, mobile: e.target.value})}
                    />
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white py-5 rounded-2xl font-black tracking-widest shadow-lg shadow-emerald-500/30 transition transform hover:-translate-y-1">
                    I TAKE THE PLEDGE
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-emerald-100">
                    <CheckCircle size={50} />
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 mb-3">Pledge Recorded!</h4>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto text-lg leading-relaxed">You have taken a step towards a stronger nation. Inspire others to join you.</p>
                  
                  <button onClick={sharePledge} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 transition transform hover:-translate-y-1">
                    <Share2 size={20} /> Share Achievement
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showAttendance && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative border-4 border-white">
            <button onClick={() => setShowAttendance(false)} className="absolute top-5 right-5 z-20 w-10 h-10 bg-black/10 hover:bg-black/30 rounded-full flex items-center justify-center transition text-white"><X size={20} /></button>
            
            <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-10 text-white text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h3 className="text-3xl font-black relative z-10 mb-2">Attendance</h3>
              <p className="text-orange-100 font-bold uppercase tracking-widest text-sm relative z-10">Get your Digital Coupon</p>
            </div>

            <form onSubmit={submitAttendance} className="p-8 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Full Name</label>
                <input 
                  required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium" 
                  value={attForm.name} onChange={e => setAttForm({...attForm, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Age</label>
                   <input 
                    required type="number" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium"
                    value={attForm.age} onChange={e => setAttForm({...attForm, age: e.target.value})}
                   />
                </div>
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Gender</label>
                   <select 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium text-gray-700"
                    value={attForm.gender} onChange={e => setAttForm({...attForm, gender: e.target.value})}
                   >
                     <option value="M">Male</option>
                     <option value="F">Female</option>
                   </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Contact No.</label>
                <input 
                  required type="tel" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium"
                  value={attForm.contact} onChange={e => setAttForm({...attForm, contact: e.target.value})}
                />
              </div>
              
              <button type="submit" className="w-full mt-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white py-5 rounded-2xl font-black tracking-widest shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-1">
                GENERATE COUPON
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {showCoupon && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
           <div className="bg-white rounded-3xl overflow-hidden max-w-sm w-full relative shadow-2xl animate-scale-in">
              <button onClick={() => setShowCoupon(null)} className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2 rounded-full text-gray-800 z-20 transition"><X size={20}/></button>
              
              <div className="m-4 rounded-2xl overflow-hidden relative shadow-inner border border-gray-200">
                 <div className="bg-orange-600 p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
                    <h3 className="font-black text-2xl text-white uppercase tracking-widest relative z-10 drop-shadow-md">Prasadam Pass</h3>
                    <p className="text-orange-200 text-xs mt-1 relative z-10 font-bold tracking-widest">OFFICIAL ENTRY COUPON</p>
                 </div>
                 
                 <div className="p-8 bg-white text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-5 flex items-center justify-center border-4 border-orange-100 shadow-md p-1">
                      <img src={config.header?.logoUrl} onError={handleImageError} alt="Logo" className="w-full h-full rounded-full object-cover" />
                    </div>
                    
                    <h2 className="text-3xl font-black text-gray-900 mb-2">{showCoupon.name}</h2>
                    <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold tracking-widest text-gray-500 mb-6">
                      {showCoupon.gender === 'M' ? 'MALE' : 'FEMALE'} • {showCoupon.age} YEARS
                    </div>
                    
                    <div className="border-t-2 border-dashed border-gray-200 pt-6">
                       <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 inline-block w-full">
                          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Status</p>
                          <p className="font-black text-orange-700 text-xl tracking-tight">AUTHORIZED ENTRY</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-gray-900 p-5 flex items-center justify-between gap-4">
                    <div className="text-left">
                       <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Event Date</p>
                       <p className="text-white font-bold">{config.about?.date}</p>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg">
                       <div className="grid grid-cols-4 gap-0.5 w-12 h-12">
                         {[...Array(16)].map((_,i) => <div key={i} className={`bg-black ${Math.random() > 0.4 ? 'opacity-100' : 'opacity-0'}`}></div>)}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-5 bg-gray-50 flex justify-center">
                <button 
                  onClick={() => showToastMsg("Please take a screenshot of this coupon to save it to your phone.", 'success')} 
                  className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-800 transition px-6 py-3 bg-orange-100 rounded-xl w-full justify-center"
                >
                  <Download size={18} /> Save to Gallery
                </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
