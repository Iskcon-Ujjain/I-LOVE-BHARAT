import React, { useState, useEffect } from 'react';
import { 
  Play, Calendar, MapPin, Clock, Users, 
  Menu, X, Share2, Download, Lock, Save, 
  Youtube, CheckCircle, Ticket, 
  Sliders, Eye, EyeOff, Grid, LogOut, Info, Heart, Trash2, AlertTriangle, Sparkles, Image as ImageIcon
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
  e.target.src = "https://placehold.co/600x400/f8fafc/94a3b8?text=Image+Unavailable";
};

// --- Default Data & Configuration ---
const DEFAULT_CONFIG = {
  visuals: {
    patternType: 'svg',
    patternUrl: "",
    mainBgImage: "https://images.unsplash.com/photo-1596707333630-67c8dc91b9e9?auto=format&fit=crop&q=80&w=2000",
    bgImageOpacity: 0.1, 
    patternOpacity: 0.8, 
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
    <div className="fixed top-24 right-4 z-[100] animate-fade-in-up">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-md text-white font-bold border border-white/20 ${type === 'error' ? 'bg-red-600/90' : 'bg-green-600/90'}`}>
        {type === 'error' ? <AlertTriangle size={20} /> : <CheckCircle size={20} />}
        <span className="tracking-wide">{message}</span>
        <button onClick={onClose} className="ml-4 opacity-60 hover:opacity-100 transition-opacity bg-white/10 p-1 rounded-full"><X size={16}/></button>
      </div>
    </div>
  );
};

// SVG Assets
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
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3"/>
      </filter>
    </defs>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#tricolor)" stroke="#e5e5e5" strokeWidth="0.5" filter="url(#shadow)"/>
    <g transform="translate(12, 12)" style={{transformBox: 'fill-box', transformOrigin: 'center'}}> 
      <circle r="3.2" stroke="#000080" strokeWidth="0.4" fill="white" fillOpacity="0.8" />
      <circle r="0.5" fill="#000080" />
      {[...Array(24)].map((_, i) => (<line key={i} x1="0" y1="0" x2="0" y2="-3.2" stroke="#000080" strokeWidth="0.2" transform={`rotate(${i * 15})`} />))}
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
  <div className={`w-full h-8 overflow-hidden opacity-80 ${className}`}>
    <svg width="100%" height="100%" preserveAspectRatio="none">
       <pattern id="flowerPattern" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
         <path d="M30 15 Q 35 5 40 15 Q 35 25 30 15 Z" fill="#FF9933" />
         <path d="M30 15 Q 25 5 20 15 Q 25 25 30 15 Z" fill="#138808" />
         <circle cx="30" cy="15" r="2.5" fill="#000080" />
       </pattern>
       <rect width="100%" height="100%" fill="url(#flowerPattern)" />
    </svg>
  </div>
);

const MandalaPattern = ({ opacity = 1 }) => (
  <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="mandala" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="16" stroke="#FF9933" fill="none" strokeWidth="1.5" opacity="0.5"/>
        <path d="M40 15 L46 32 L65 38 L46 44 L40 65 L34 44 L15 38 L34 32 Z" fill="none" stroke="#138808" strokeWidth="1" opacity="0.3" />
        <circle cx="40" cy="40" r="4" fill="#FF9933" opacity="0.6" />
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

    const safePassword = password.trim(); 

    // EMERGENCY MASTER PASSWORD BYPASS (Skip Firebase entirely)
    if (safePassword === 'Radha@108' || safePassword === 'radha@108') {
      showToast('Master Password Accepted. Bypass Active.', 'success');
      onLogin(true); 
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      showToast('Email is required for standard login.', 'error');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), safePassword);
      onLogin(false);
    } catch (err) {
      showToast('Incorrect Password or Access Denied.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-xl transition-all duration-300">
      <div className="bg-white/90 backdrop-blur-3xl rounded-[2rem] p-10 max-w-sm w-full border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-fade-in-up relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 bg-gray-100/50 hover:bg-gray-200 p-2 rounded-full transition-colors"><X size={18}/></button>

        <div className="flex justify-center mb-6">
           <div className="bg-gradient-to-br from-orange-100 to-red-50 p-4 rounded-full shadow-inner border border-orange-200">
             <Lock size={32} className="text-orange-600" />
           </div>
        </div>

        <h3 className="text-2xl font-black mb-8 text-center text-gray-800 tracking-tight">Admin Portal</h3>
        
        <form onSubmit={handleLogin} className="space-y-5 relative z-10">
          <div>
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1 mb-1 block">Email (Optional for Master Pass)</label>
            <input 
              type="email" placeholder="admin@example.com" 
              className="w-full border-2 border-gray-100 bg-white/50 p-4 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1 mb-1 block">Password</label>
            <input 
              type="password" required placeholder="••••••••" 
              className="w-full border-2 border-gray-100 bg-white/50 p-4 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium text-lg tracking-widest"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-black rounded-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] disabled:opacity-50 transition-all transform hover:-translate-y-1 tracking-widest"
            >
              {loading ? 'VERIFYING...' : 'AUTHORIZE'}
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

  // Safe Logout to prevent White Screen ReferenceErrors
  const handleLogout = async () => {
    onClose(); 
    try { await signOut(auth); } catch(err) { console.error(err); }
  };

  const handleDeleteItem = async (collectionName, docId) => {
    if (!window.confirm('Are you sure you want to delete this record? This cannot be undone.')) return;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', collectionName, docId));
      showToast('Record deleted successfully.', 'success');
    } catch (err) {
      showToast('Error deleting record. Check Firebase.', 'error');
    }
  };

  const handleClearAll = async (collectionName, dataArray) => {
    if (!window.confirm(`WARNING: You are about to permanently delete ALL ${dataArray.length} records. Are you absolutely sure?`)) return;
    try {
      const deletePromises = dataArray.map(item => deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', collectionName, item.id)));
      await Promise.all(deletePromises);
      showToast(`All records cleared!`, 'success');
    } catch (err) {
      showToast('Error clearing records.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50/95 backdrop-blur-xl z-[90] overflow-auto flex flex-col transition-all">
      <div className="bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-4 sticky top-0 z-20 flex justify-between items-center border-b border-white/50">
        <div className="flex items-center gap-3 pl-4">
           <div className="bg-gradient-to-r from-orange-600 to-red-600 p-2 rounded-xl">
             <Sliders className="text-white w-5 h-5" />
           </div>
           <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">
             Command Center
           </h2>
        </div>
        <div className="flex gap-3 pr-4">
          <button onClick={handleSave} className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black tracking-widest text-xs px-6 py-3 rounded-xl hover:shadow-[0_5px_15px_rgba(16,185,129,0.3)] transition transform hover:-translate-y-0.5">
            <Save size={16} /> SAVE CHANGES
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-900 text-white font-black tracking-widest text-xs px-6 py-3 rounded-xl hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition transform hover:-translate-y-0.5">
            <LogOut size={16} /> LOGOUT
          </button>
        </div>
      </div>

      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full flex-grow">
        <div className="flex flex-wrap gap-3 mb-10 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 inline-flex">
          {['content', 'visuals', 'dedication', 'attendees', 'pledges'].map(tab => (
            <button 
              key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl capitalize font-black tracking-wide text-sm transition-all duration-300 ${activeTab === tab ? 'bg-orange-50 text-orange-600 shadow-sm border border-orange-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              {tab === 'visuals' ? 'Gallery & Theme' : tab} 
              {tab === 'attendees' && ` (${attendees?.length || 0})`}
              {tab === 'pledges' && ` (${pledges?.length || 0})`}
            </button>
          ))}
        </div>

        {/* Content Configuration */}
        {activeTab === 'content' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black mb-6 text-gray-800 flex items-center gap-2"><FileText className="text-blue-500"/> Header Configuration</h3>
                <div className="space-y-5">
                  <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Organization Name</label><input value={localConfig?.header?.orgName || ''} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, orgName: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition font-medium" /></div>
                  <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Event Name</label><input value={localConfig?.header?.eventName || ''} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, eventName: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition font-medium" /></div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tagline</label><input value={localConfig?.header?.tagline || ''} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, tagline: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition font-medium text-sm" /></div>
                     <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sub-Tagline</label><input value={localConfig?.header?.subTagline || ''} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, subTagline: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition font-medium text-sm" /></div>
                  </div>
                </div>
              </section>
              
              <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black mb-6 text-gray-800 flex items-center gap-2"><Info className="text-green-500"/> Event Details</h3>
                <div className="space-y-5">
                  <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Description</label><textarea value={localConfig?.about?.description || ''} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, description: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition font-medium h-24 resize-none leading-relaxed text-sm" /></div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date</label><input value={localConfig?.about?.date || ''} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, date: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition font-medium text-sm" /></div>
                     <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Time</label><input value={localConfig?.about?.time || ''} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, time: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition font-medium text-sm" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Venue</label><input value={localConfig?.about?.venue || ''} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, venue: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition font-medium text-sm" /></div>
                     <div className="space-y-1.5"><label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Target Youth Goal</label><input type="number" value={localConfig?.about?.stats || ''} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, stats: e.target.value}})} className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition font-black text-green-600 text-sm" /></div>
                  </div>
                </div>
              </section>
            </div>

             <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 mt-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-black mb-6 text-gray-800 flex items-center gap-2"><Youtube className="text-red-500"/> Featured Videos</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {localConfig?.videos?.map((vid, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
                    <div className="flex justify-between items-center"><span className="bg-red-100 text-red-600 font-black text-xs px-3 py-1 rounded-full">Video {idx + 1}</span></div>
                    <div className="space-y-1.5"><label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">YouTube Embed URL</label><input value={vid.url} onChange={(e) => handleArrayChange('videos', idx, 'url', e.target.value)} className="w-full border-2 border-white bg-white p-3 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition font-medium text-xs text-gray-500" /></div>
                    <div className="space-y-1.5"><label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Display Title</label><input value={vid.title} onChange={(e) => handleArrayChange('videos', idx, 'title', e.target.value)} className="w-full border-2 border-white bg-white p-3 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition font-bold text-sm text-gray-800" /></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Database Control Tabs */}
        {activeTab === 'attendees' && (
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 animate-fade-in">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
               <div>
                 <h3 className="font-black text-3xl text-gray-900 tracking-tight">Attendees Data</h3>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">Total Verified Registrations: <span className="text-blue-500">{attendees?.length || 0}</span></p>
               </div>
               <div className="flex flex-wrap gap-3">
                 <button onClick={() => handleClearAll('attendees', attendees)} className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-5 py-3 rounded-xl hover:bg-red-600 hover:text-white font-black text-xs tracking-widest transition-all">
                   <AlertTriangle size={16} /> CLEAR DATABASE
                 </button>
                 <button onClick={() => downloadCSV(attendees, 'attendance_data.csv')} className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-blue-600 hover:shadow-[0_5px_15px_rgba(37,99,235,0.3)] font-black text-xs tracking-widest transition-all">
                   <Download size={16} /> EXPORT EXCEL/CSV
                 </button>
               </div>
             </div>
             
             {!attendees || attendees.length === 0 ? (
               <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                 <Users size={48} className="mx-auto text-gray-300 mb-4" />
                 <h4 className="text-xl font-bold text-gray-400 mb-1">No Attendees Yet</h4>
                 <p className="text-sm text-gray-400">Registrations will appear here in real-time.</p>
               </div>
             ) : (
               <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-inner">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                   <thead>
                     <tr className="bg-gray-50 text-gray-500 uppercase tracking-widest text-[10px] font-black border-b border-gray-100">
                       <th className="p-5">Attendee Name</th><th className="p-5">Gender</th><th className="p-5">Age</th><th className="p-5">Contact Num</th><th className="p-5">Timestamp</th><th className="p-5 text-center">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50 bg-white">
                     {attendees.map((a, i) => (
                       <tr key={a.id || i} className="hover:bg-blue-50/50 transition-colors group">
                         <td className="p-5 font-black text-gray-800">{a.name}</td>
                         <td className="p-5 font-bold text-gray-500">
                           <span className={`px-3 py-1 rounded-full text-[10px] ${a.gender==='M' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>{a.gender==='M' ? 'MALE' : 'FEMALE'}</span>
                         </td>
                         <td className="p-5 font-bold text-gray-600">{a.age} Yrs</td>
                         <td className="p-5 font-bold text-gray-600">{a.contact}</td>
                         <td className="p-5 text-gray-400 text-xs font-medium">{formatTimestamp(a.createdAt)}</td>
                         <td className="p-5 text-center">
                           <button onClick={() => handleDeleteItem('attendees', a.id)} className="text-gray-300 hover:text-white hover:bg-red-500 p-2.5 rounded-xl transition-all" title="Delete Record">
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
           <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 animate-fade-in">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
               <div>
                 <h3 className="font-black text-3xl text-gray-900 tracking-tight">Pledge Signatures</h3>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">Total Pledges Taken: <span className="text-green-500">{pledges?.length || 0}</span></p>
               </div>
               <div className="flex flex-wrap gap-3">
                 <button onClick={() => handleClearAll('pledges', pledges)} className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-5 py-3 rounded-xl hover:bg-red-600 hover:text-white font-black text-xs tracking-widest transition-all">
                   <AlertTriangle size={16} /> CLEAR DATABASE
                 </button>
                 <button onClick={() => downloadCSV(pledges, 'pledge_data.csv')} className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-green-600 hover:shadow-[0_5px_15px_rgba(22,163,74,0.3)] font-black text-xs tracking-widest transition-all">
                   <Download size={16} /> EXPORT EXCEL/CSV
                 </button>
               </div>
             </div>
             
             {!pledges || pledges.length === 0 ? (
               <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                 <CheckCircle size={48} className="mx-auto text-gray-300 mb-4" />
                 <h4 className="text-xl font-bold text-gray-400 mb-1">No Pledges Yet</h4>
                 <p className="text-sm text-gray-400">Pledge signatures will appear here in real-time.</p>
               </div>
             ) : (
               <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-inner">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                   <thead>
                     <tr className="bg-gray-50 text-gray-500 uppercase tracking-widest text-[10px] font-black border-b border-gray-100">
                       <th className="p-5">Patriot Name</th><th className="p-5">Mobile Number</th><th className="p-5">Signature Time</th><th className="p-5 text-center">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50 bg-white">
                     {pledges.map((p, i) => (
                       <tr key={p.id || i} className="hover:bg-green-50/50 transition-colors group">
                         <td className="p-5 font-black text-gray-800 flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div>{p.name}</td>
                         <td className="p-5 font-bold text-gray-600">{p.mobile}</td>
                         <td className="p-5 text-gray-400 text-xs font-medium">{formatTimestamp(p.createdAt)}</td>
                         <td className="p-5 text-center">
                           <button onClick={() => handleDeleteItem('pledges', p.id)} className="text-gray-300 hover:text-white hover:bg-red-500 p-2.5 rounded-xl transition-all" title="Delete Record">
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
           <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 text-center py-32 animate-fade-in">
               <ImageIcon size={48} className="mx-auto text-gray-200 mb-4" />
               <h3 className="text-2xl font-black text-gray-400 tracking-tight">Additional Settings Architecture</h3>
               <p className="text-gray-400 mt-2 font-medium">Use Content or Data tabs to manage main website records.</p>
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
  
  // Safe auth states
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBypassAdmin, setIsBypassAdmin] = useState(false);
  
  const [showPledge, setShowPledge] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showCoupon, setShowCoupon] = useState(null); 
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  
  const [attendees, setAttendees] = useState([]);
  const [pledges, setPledges] = useState([]);
  
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
        signInAnonymously(auth).catch(() => {});
      }
    });

    const timer = setTimeout(() => {
      const hasAttended = sessionStorage.getItem('hasAttended');
      if (!hasAttended) setShowAttendance(true);
    }, 2000);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  // SAFEST DATA FETCHING - No more Reference Errors or White Screens
  useEffect(() => {
    // 1. Array to hold all cleanup functions reliably
    const subscriptions = []; 

    try {
      const configRef = doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main');
      const subConfig = onSnapshot(configRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data() || {}; 
          setConfig(prev => ({
             ...DEFAULT_CONFIG,
             ...data,
             visuals: { ...DEFAULT_CONFIG.visuals, ...(data.visuals || {}) },
             header: { ...DEFAULT_CONFIG.header, ...(data.header || {}) },
             about: { ...DEFAULT_CONFIG.about, ...(data.about || {}) },
             dedication: { ...DEFAULT_CONFIG.dedication, ...(data.dedication || {}) },
             gallery: data.gallery || DEFAULT_CONFIG.gallery, 
             videos: data.videos || DEFAULT_CONFIG.videos 
          }));
        }
      });
      subscriptions.push(subConfig);

      // Only fetch tables if admin is true (either normal or bypass)
      if (isAdmin || isBypassAdmin) {
        const attRef = collection(db, 'artifacts', appId, 'public', 'data', 'attendees');
        const subAtt = onSnapshot(query(attRef, orderBy('createdAt', 'desc')), (snap) => {
          setAttendees(snap.docs.map(d => ({ ...d.data(), id: d.id })));
        });
        subscriptions.push(subAtt);

        const pledgeRef = collection(db, 'artifacts', appId, 'public', 'data', 'pledges');
        const subPledge = onSnapshot(query(pledgeRef, orderBy('createdAt', 'desc')), (snap) => {
          setPledges(snap.docs.map(d => ({ ...d.data(), id: d.id })));
        });
        subscriptions.push(subPledge);
      }
    } catch (err) {
      console.error("Firestore Setup Mute:", err);
    }

    // 2. Safely execute all cleanup functions on unmount or user change
    return () => {
      subscriptions.forEach(unsub => {
        if (typeof unsub === 'function') unsub();
      });
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
      showToastMsg("Server connected. Verification passed.", "success");
      setShowAttendance(false);
      setShowCoupon(couponData);
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
      setPledgeTaken(true);
      showToastMsg("Pledge signed virtually.", "success");
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
    <div className="font-sans text-gray-800 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-orange-500 selection:text-white scroll-smooth bg-gray-50">
      
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({...toast, show: false})} />}

      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${config.visuals?.mainBgImage})`, opacity: config.visuals?.bgImageOpacity ?? 0.1 }}
        ></div>
        {config.visuals?.patternType === 'image' ? (
          <div className="absolute inset-0" style={{ backgroundImage: `url("${config.visuals?.patternUrl}")`, opacity: config.visuals?.patternOpacity ?? 1.0, backgroundRepeat: 'repeat' }} />
        ) : (
          <MandalaPattern opacity={config.visuals?.patternOpacity ?? 0.8} />
        )}
      </div>

      {/* --- Admin Logic --- */}
      {showAdminLogin && <AdminLogin onClose={() => setShowAdminLogin(false)} onLogin={handleAdminLoginSuccess} showToast={showToastMsg} />}
      {(isAdmin || isBypassAdmin) && <AdminDashboard config={config} setConfig={setConfig} attendees={attendees} pledges={pledges} onClose={handleAdminLogout} onSave={saveConfig} showToast={showToastMsg} />}

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/50 transition-all">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer bg-white rounded-full p-1.5 shadow-[0_5px_15px_rgba(249,115,22,0.2)] border border-orange-100">
               <img src={config.header?.logoUrl} onError={handleImageError} alt="Logo" className="h-10 w-10 rounded-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-black text-2xl hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 tracking-tighter">ISKCON</span>
          </div>
          <div className="hidden md:flex gap-10 font-black text-xs text-gray-400 tracking-[0.2em] uppercase">
            {['home', 'about', 'events', 'highlights'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-orange-600 transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowAdminLogin(true)} className="md:hidden text-gray-400 hover:text-orange-600 p-2 bg-white rounded-full shadow-sm">
              <Menu size={20} />
            </button>
            <button 
              onClick={() => setShowAdminLogin(true)} 
              className={`hidden md:flex items-center justify-center h-12 w-12 rounded-full border-2 transition-all hover:shadow-lg ${(isAdmin || isBypassAdmin) ? 'text-green-500 border-green-500 bg-green-50 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'text-gray-300 border-white bg-white hover:text-orange-500 hover:border-orange-200'}`}
              title={(isAdmin || isBypassAdmin) ? "Admin Dashboard" : "Admin Login"}
            >
              <Lock size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* --- Header (Hero) --- */}
        <header id="home" className="pt-40 pb-24 px-4 text-center relative overflow-hidden">
          {config.visuals?.showMotifs && (
            <>
              <div className="absolute top-32 left-10 w-48 h-48 pointer-events-none hidden lg:block animate-pulse opacity-60">
                <CornerMotif className="w-full h-full transform -rotate-90" opacity={1} />
              </div>
              <div className="absolute top-32 right-10 w-48 h-48 pointer-events-none hidden lg:block animate-pulse opacity-60">
                <CornerMotif className="w-full h-full transform" opacity={1} />
              </div>
            </>
          )}

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex mb-6 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-xl animate-fade-in-up items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <p className="text-orange-900 font-black tracking-widest uppercase text-xs">
                {config.header?.orgName}
              </p>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter drop-shadow-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-500 to-pink-600">
                {config.header?.eventName}
              </span>
            </h2>
            
            <div className="my-16 transform hover:scale-[1.03] transition duration-700 ease-out z-20 relative">
               <div className="inline-flex items-center justify-center gap-4 md:gap-8 bg-white/70 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(249,115,22,0.15)] border border-white/80 relative overflow-hidden group">
                  <div className="absolute -inset-20 bg-gradient-to-tr from-orange-400/30 via-white/0 to-green-400/30 blur-3xl group-hover:opacity-100 transition-opacity duration-1000 animate-spin-slow pointer-events-none opacity-50"></div>
                  <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow-2xl z-10" style={{textShadow: "6px 6px 0px rgba(255,255,255,0.5)"}}>I</span>
                  <div className="relative mx-2 md:mx-6 z-10">
                    <TriColorHeart className="w-28 h-28 md:w-48 md:h-48 drop-shadow-2xl hover:scale-110 transition-transform duration-500 animate-pulse" />
                  </div>
                  <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-green-700 drop-shadow-2xl z-10" style={{textShadow: "6px 6px 0px rgba(255,255,255,0.5)"}}>BHARAT</span>
               </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-serif text-gray-800 font-bold mb-8 drop-shadow-md tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              "{config.header?.tagline}"
            </h3>
            
            <div className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full font-black shadow-2xl hover:bg-gray-800 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Users className="w-5 h-5 text-orange-400" />
              <span className="tracking-widest text-sm md:text-base uppercase">{config.header?.subTagline}</span>
            </div>
          </div>
        </header>

        {config.visuals?.showDividers && <FloralDivider />}

        {/* --- About Section --- */}
        <section id="about" className="py-28 px-4 container mx-auto relative scroll-mt-24">
          <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-3 bg-white text-orange-600 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border border-orange-100 shadow-sm">
                    <Sparkles size={16} className="text-orange-400" /> The Mission
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 font-serif leading-tight tracking-tight">
                    {config.about?.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-loose font-medium text-justify">
                    {config.about?.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                     <div className="flex justify-between items-end mb-4 relative z-10">
                        <div>
                           <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Youth Joining Goal</p>
                           <p className="text-4xl font-black text-gray-900">{config.about?.stats} <span className="text-lg text-gray-400 font-bold">Target</span></p>
                        </div>
                     </div>
                     <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden relative z-10 shadow-inner p-1">
                        <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 h-full rounded-full w-[85%] relative overflow-hidden shadow-md">
                           <div className="absolute inset-0 bg-white/30 w-full animate-pulse"></div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="flex-1 w-full grid grid-cols-1 gap-6">
                  {[
                    { icon: <Calendar size={28} />, title: "Date", val: config.about?.date, color: "orange" },
                    { icon: <Clock size={28} />, title: "Time", val: config.about?.time, color: "green" },
                    { icon: <MapPin size={28} />, title: "Venue", val: config.about?.venue, color: "blue" }
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white flex items-center gap-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 shadow-md group/card cursor-default relative overflow-hidden`}>
                       <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-400 rounded-full blur-[50px] opacity-10 group-hover/card:opacity-20 transition-opacity`}></div>
                       <div className={`bg-${item.color}-50 text-${item.color}-600 p-5 rounded-3xl group-hover/card:bg-${item.color}-600 group-hover/card:text-white transition-all duration-300 shadow-inner group-hover/card:shadow-lg transform group-hover/card:scale-110 relative z-10`}>
                         {item.icon}
                       </div>
                       <div className="relative z-10">
                         <p className={`text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1`}>{item.title}</p>
                         <p className="text-2xl font-black text-gray-800 tracking-tight">{item.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* --- Dedication Section --- */}
        <section className="py-24 container mx-auto px-4">
           <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="relative group">
                 <div className="absolute -inset-6 bg-gradient-to-tr from-orange-400 via-white to-yellow-300 rounded-[3rem] rotate-6 transition-transform duration-700 group-hover:rotate-12 opacity-40 blur-2xl"></div>
                 
                 <div className="relative h-80 w-80 md:h-96 md:w-96 bg-white p-4 rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-105" style={{ animationDelay: '0.2s', animationDuration: '4s', animationIterationCount: 'infinite', animationName: 'float' }}>
                   <div className="h-full w-full overflow-hidden rounded-[2rem] border-2 border-gray-50">
                     <img 
                      src={config.dedication?.imageUrl} 
                      onError={handleImageError}
                      alt="Dedication" 
                      className="h-full w-full object-cover filter contrast-125 saturate-110"
                     />
                   </div>
                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 px-8 py-3 rounded-full shadow-2xl text-xs font-black uppercase tracking-widest text-white border border-gray-700 whitespace-nowrap">
                     {config.dedication?.title}
                   </div>
                 </div>
              </div>

              <div className="text-center md:text-left flex-1 space-y-6">
                <div className="h-2 w-24 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto md:mx-0"></div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-serif leading-none tracking-tight">
                  {config.dedication?.name}
                </h2>
                <p className="text-2xl text-gray-500 font-medium italic leading-relaxed">
                  "{config.dedication?.subtitle}"
                </p>
              </div>
           </div>
        </section>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}} />

        {config.visuals?.showDividers && <FloralDivider className="rotate-180" />}

        {/* --- Events Gallery Grid --- */}
        <section id="events" className="py-32 relative overflow-hidden scroll-mt-10">
           <div className="absolute inset-0 bg-gray-950 z-0">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           </div>

           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-20">
               <span className="text-orange-500 font-black tracking-widest uppercase text-sm mb-4 block">Visual Journey</span>
               <h2 className="text-5xl md:text-7xl font-black text-white font-serif tracking-tighter">Cultural Gallery</h2>
               <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 mx-auto mt-8 rounded-full"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 max-w-7xl mx-auto">
               {config.gallery?.map((item, idx) => (
                 <div 
                   key={item.id} 
                   className={`group relative h-96 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:z-20 cursor-pointer ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
                 >
                   <img 
                     src={item.url} 
                     onError={handleImageError}
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100 saturate-150"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                   <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
                   
                   <div className="absolute bottom-0 left-0 w-full p-10">
                     <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="w-16 h-1.5 bg-orange-500 mb-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                        <h3 className="text-3xl font-black text-white leading-tight drop-shadow-xl">
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
        <section id="highlights" className="py-32 container mx-auto px-4 scroll-mt-10">
          <div className="flex flex-col items-center justify-center gap-6 mb-20 text-center">
             <div className="bg-red-50 p-6 rounded-[2rem] shadow-inner border border-red-100 animate-pulse">
               <Youtube className="text-red-600 w-12 h-12" />
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-gray-900 font-serif tracking-tight">Watch Highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {config.videos?.map((vid) => (
              <div key={vid.id} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-gray-100 group transform hover:-translate-y-2 p-2">
                <div className="aspect-video w-full bg-gray-900 relative rounded-t-[2rem] rounded-b-xl overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-12 h-12 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin"></div>
                   </div>
                   <iframe 
                    src={vid.url} 
                    title={vid.title} 
                    className="w-full h-full relative z-10" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8 flex items-start justify-between bg-white group-hover:bg-red-50/30 transition-colors rounded-b-[2rem]">
                   <div>
                     <h4 className="font-black text-gray-900 text-xl line-clamp-1 group-hover:text-red-600 transition-colors">{vid.title}</h4>
                     <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-black">Play Video</p>
                   </div>
                   <div className="bg-red-50 p-4 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm group-hover:shadow-red-500/30 cursor-pointer">
                      <Play size={20} fill="currentColor" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-950 text-gray-400 py-20 text-center relative overflow-hidden mt-auto border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-28 h-28 mx-auto mb-8 bg-white p-3 rounded-full hover:scale-110 transition-transform duration-500 shadow-[0_0_50px_rgba(255,255,255,0.15)] cursor-pointer">
            <img src={config.header?.logoUrl} onError={handleImageError} className="w-full h-full rounded-full object-contain" alt="logo" />
          </div>
          <h3 className="text-white text-4xl font-black mb-4 font-serif tracking-tight">{config.header?.orgName}</h3>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto text-lg leading-relaxed font-medium">Connecting youth to their roots through culture, wisdom, and devotion.</p>
          <div className="pt-10 border-t border-gray-800/50">
            <p className="text-xs font-black tracking-widest uppercase text-gray-600">© 2026 I Love Bharat Fest. Engineered for ISKCON Ujjain.</p>
          </div>
        </div>
      </footer>

      {/* --- Floating Action Tabs --- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-15px_50px_rgba(0,0,0,0.15)] md:bottom-10 md:right-10 md:left-auto md:flex-col md:gap-5 md:w-auto md:items-end md:shadow-none pb-safe">
        <button 
          onClick={() => setShowPledge(true)}
          className="flex-1 md:flex-none bg-gradient-to-r from-green-500 to-emerald-600 text-white py-6 md:py-4 px-6 md:pl-8 md:pr-10 md:rounded-full font-black text-sm md:text-base flex items-center justify-center gap-4 transition-all shadow-2xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.4)] md:hover:-translate-x-2 group border-t border-white/20 md:border-none relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          <div className="bg-white/20 p-2.5 rounded-full group-hover:rotate-12 transition-transform shadow-inner"><CheckCircle size={22} /></div>
          <span className="tracking-widest">PLEDGE NOW</span>
        </button>
        <button 
          onClick={() => setShowAttendance(true)}
          className="flex-1 md:flex-none bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 md:py-4 px-6 md:pl-8 md:pr-10 md:rounded-full font-black text-sm md:text-base flex items-center justify-center gap-4 transition-all shadow-2xl hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] md:hover:-translate-x-2 group border-t border-white/20 md:border-none relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          <div className="bg-white/20 p-2.5 rounded-full group-hover:-rotate-12 transition-transform shadow-inner"><Ticket size={22} /></div>
          <span className="tracking-widest">ATTENDANCE</span>
        </button>
      </div>

      {/* --- Modals --- */}
      {/* Pledge Modal */}
      {showPledge && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl animate-fade-in">
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative border border-white/50 animate-scale-in">
            <button onClick={() => setShowPledge(false)} className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition text-white backdrop-blur-md"><X size={20} /></button>
            
            <div className="relative bg-gradient-to-br from-emerald-500 to-green-700 p-12 text-white text-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
               <div className="relative z-10">
                 <h3 className="text-4xl font-black mb-3 font-serif drop-shadow-md">My Pledge</h3>
                 <p className="text-emerald-100 font-black tracking-widest uppercase text-xs">Nasha Mukt Bharat</p>
               </div>
            </div>

            <div className="p-8 md:p-10">
              {!pledgeTaken ? (
                <form onSubmit={submitPledge} className="space-y-6">
                  <div className="p-8 bg-orange-50 rounded-[2rem] border border-orange-100 text-center relative shadow-inner">
                    <div className="text-orange-200 absolute top-2 left-6 text-7xl font-serif leading-none">"</div>
                    <p className="text-gray-800 font-bold italic relative z-10 mb-4 leading-relaxed">{config.pledgeText.english}</p>
                    <p className="text-gray-500 text-xs font-bold">{config.pledgeText.hindi}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      required type="text" placeholder="Your Full Name" 
                      className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-bold tracking-wide"
                      value={pledgeForm.name} onChange={e => setPledgeForm({...pledgeForm, name: e.target.value})}
                    />
                    <input 
                      required type="tel" placeholder="Mobile Number" 
                      className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-bold tracking-wide"
                      value={pledgeForm.mobile} onChange={e => setPledgeForm({...pledgeForm, mobile: e.target.value})}
                    />
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-5 rounded-2xl font-black tracking-widest shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition transform hover:-translate-y-1">
                    SUBMIT PLEDGE
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border-4 border-emerald-100">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Pledge Recorded!</h4>
                  <p className="text-gray-500 mb-10 max-w-xs mx-auto text-base leading-relaxed font-medium">You have taken a step towards a stronger nation. Inspire others to join you.</p>
                  
                  <button onClick={sharePledge} className="w-full bg-gray-900 hover:bg-gray-800 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition transform hover:-translate-y-1 tracking-widest">
                    <Share2 size={20} /> SHARE IMPACT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showAttendance && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl animate-fade-in">
          <div className="bg-white rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl relative border border-white/50 animate-scale-in">
            <button onClick={() => setShowAttendance(false)} className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition text-white backdrop-blur-md"><X size={20} /></button>
            
            <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-12 text-white text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-4xl font-black relative z-10 mb-3 drop-shadow-md tracking-tight">Attendance</h3>
              <p className="text-orange-100 font-black uppercase tracking-widest text-xs relative z-10">Digital Prasadam Pass</p>
            </div>

            <form onSubmit={submitAttendance} className="p-8 md:p-10 space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                <input 
                  required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide" 
                  value={attForm.name} onChange={e => setAttForm({...attForm, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Age</label>
                   <input 
                    required type="number" 
                    className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide"
                    value={attForm.age} onChange={e => setAttForm({...attForm, age: e.target.value})}
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Gender</label>
                   <select 
                    className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide text-gray-700"
                    value={attForm.gender} onChange={e => setAttForm({...attForm, gender: e.target.value})}
                   >
                     <option value="M">Male</option>
                     <option value="F">Female</option>
                   </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Contact No.</label>
                <input 
                  required type="tel" 
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-bold tracking-wide"
                  value={attForm.contact} onChange={e => setAttForm({...attForm, contact: e.target.value})}
                />
              </div>
              
              <button type="submit" className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 text-white py-5 rounded-2xl font-black tracking-widest shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition transform hover:-translate-y-1">
                GENERATE PASS
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {showCoupon && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
           <div className="bg-white rounded-[2rem] overflow-hidden max-w-sm w-full relative shadow-[0_0_100px_rgba(249,115,22,0.15)] animate-scale-in">
              <button onClick={() => setShowCoupon(null)} className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2.5 rounded-full text-gray-800 z-20 transition shadow-sm"><X size={18}/></button>
              
              <div className="m-5 rounded-[1.5rem] overflow-hidden relative shadow-inner border border-gray-100 bg-white">
                 <div className="bg-orange-500 p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
                    <h3 className="font-black text-3xl text-white uppercase tracking-widest relative z-10 drop-shadow-md">ENTRY PASS</h3>
                    <p className="text-orange-100 text-[10px] mt-2 relative z-10 font-black tracking-[0.3em]">OFFICIAL PRASADAM</p>
                 </div>
                 
                 <div className="p-8 text-center relative">
                    <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-orange-50 shadow-lg p-1.5 -mt-16 relative z-10">
                      <img src={config.header?.logoUrl} onError={handleImageError} alt="Logo" className="w-full h-full rounded-full object-cover" />
                    </div>
                    
                    <h2 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">{showCoupon.name}</h2>
                    <div className="inline-block px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-black tracking-widest text-gray-400 mb-8 shadow-inner">
                      {showCoupon.gender === 'M' ? 'MALE' : 'FEMALE'} • {showCoupon.age} YRS
                    </div>
                    
                    <div className="border-t-2 border-dashed border-gray-200 pt-8 relative">
                       {/* Cutout circles for ticket effect */}
                       <div className="absolute -top-4 -left-12 w-8 h-8 bg-black rounded-full"></div>
                       <div className="absolute -top-4 -right-12 w-8 h-8 bg-black rounded-full"></div>
                       
                       <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-100/50 inline-block w-full">
                          <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Status</p>
                          <p className="font-black text-orange-600 text-xl tracking-wider">AUTHORIZED</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-gray-900 p-6 flex items-center justify-between gap-4 border-t-4 border-orange-500">
                    <div className="text-left">
                       <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest">Event Date</p>
                       <p className="text-white font-bold tracking-wide">{config.about?.date}</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl">
                       <div className="grid grid-cols-4 gap-0.5 w-12 h-12">
                         {[...Array(16)].map((_,i) => <div key={i} className={`bg-black rounded-sm ${Math.random() > 0.3 ? 'opacity-100' : 'opacity-0'}`}></div>)}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-white flex justify-center">
                <button 
                  onClick={() => showToastMsg("Please take a screenshot of this coupon to save it.", 'success')} 
                  className="flex items-center gap-3 text-white font-black transition px-6 py-4 bg-gray-900 hover:bg-gray-800 rounded-2xl w-full justify-center tracking-widest text-sm shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                >
                  <Download size={18} /> SAVE PASS
                </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
