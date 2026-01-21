import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Calendar, MapPin, Clock, Users, 
  Menu, X, Share2, Download, Lock, Edit, Save, 
  Youtube, Instagram, CheckCircle, Ticket, Image as ImageIcon,
  FileText, Sliders, Eye, EyeOff, Grid, LogOut, ChevronRight, Info
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  onSnapshot, 
  addDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';

// --- Firebase Configuration ---
// Using your provided config for production, but falling back to environment config for preview
const userProvidedConfig = {
  apiKey: "AIzaSyCy_gaaxo0Vd-0llMEi1h3BD5t_zfiVYyI",
  authDomain: "i-love-bharat.firebaseapp.com",
  projectId: "i-love-bharat",
  storageBucket: "i-love-bharat.firebasestorage.app",
  messagingSenderId: "960030069619",
  appId: "1:960030069619:web:037404bcf35a848f302b06",
  measurementId: "G-1Z5HK31G0N"
};

// Logic to choose correct config (Environment takes precedence for Preview stability)
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : userProvidedConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- Default Data & Configuration ---
const DEFAULT_CONFIG = {
  visuals: {
    patternType: 'svg', // 'svg' | 'image'
    patternUrl: "", // For image patterns
    mainBgImage: "https://images.unsplash.com/photo-1596707333630-67c8dc91b9e9?auto=format&fit=crop&q=80&w=2000",
    bgImageOpacity: 0.2, 
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
    logoUrl: "https://pbs.twimg.com/profile_images/1166649733076168704/D0f-gQJp_400x400.jpg"
  },
  about: {
    title: "I Love Bharat 2026",
    description: "The program is based on the teachings of Bhagavad Gita. The aim of this program is to free youth from intoxication, depression, distraction, and give them direction for success and steadiness in life. India's glories will be displayed through Video shows, Drama, Kirtan, Dance, Lectures, and Prasadam distribution.",
    date: "26 January 2026",
    venue: "ISKCON Ujjain Goshala Ground",
    time: "4:00 PM",
    stats: "3000+ Students from various institutions"
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
  const headers = Object.keys(data[0]).join(",");
  const rows = data.map(obj => 
    Object.values(obj).map(val => 
      // Handle timestamps or commas in data
      typeof val === 'object' && val?.seconds ? new Date(val.seconds*1000).toISOString() : 
      `"${String(val).replace(/"/g, '""')}"`
    ).join(",")
  );
  const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// --- Components ---

// 1. Tricolor Heart Component with Centered Ashoka Chakra
const TriColorHeart = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tricolor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="33%" stopColor="#FF9933" /> {/* Saffron */}
        <stop offset="33%" stopColor="#FFFFFF" />
        <stop offset="66%" stopColor="#FFFFFF" /> {/* White */}
        <stop offset="66%" stopColor="#138808" /> {/* Green */}
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
    
    {/* Ashoka Chakra - Centered in the white band */}
    <g transform="translate(12, 12)" style={{transformBox: 'fill-box', transformOrigin: 'center'}}> 
      <circle r="3.2" stroke="#000080" strokeWidth="0.4" fill="white" fillOpacity="0.5" />
      <circle r="0.5" fill="#000080" />
      {[...Array(24)].map((_, i) => (
        <line 
          key={i}
          x1="0" y1="0" 
          x2="0" y2="-3.2" 
          stroke="#000080" 
          strokeWidth="0.2"
          transform={`rotate(${i * 15})`} 
        />
      ))}
    </g>
  </svg>
);

// 2. Enhanced Decorative Corner Floral Motif
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

// 3. New Floral Divider
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

// 4. Background Pattern
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

// Admin Login using Firebase
const AdminLogin = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // Success
    } catch (err) {
      console.error(err);
      setError('Invalid credentials. Check your Firebase Users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full border-t-4 border-orange-500 shadow-2xl">
        <h3 className="text-xl font-bold mb-4 text-orange-800 flex items-center gap-2">
          <Lock size={20}/> Admin Access
        </h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500">Email</label>
            <input 
              type="email" 
              required
              placeholder="admin@example.com" 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
          <div className="flex gap-2 justify-end pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button 
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded hover:from-orange-600 hover:to-red-700 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ config, setConfig, attendees, pledges, onClose, onSave }) => {
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

  const handleLogout = async () => {
    await signOut(auth);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-50 z-[60] overflow-auto flex flex-col">
      <div className="bg-white shadow-md p-4 sticky top-0 z-10 flex justify-between items-center border-b border-orange-200">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
          Admin Control
        </h2>
        <div className="flex gap-2">
          <button onClick={handleSave} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow-md transition-transform hover:scale-105">
            <Save size={18} /> Save
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 shadow-md transition-transform hover:scale-105">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto w-full flex-grow">
        <div className="flex flex-wrap gap-4 mb-6 border-b">
          {['content', 'visuals', 'dedication', 'attendees', 'pledges'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-4 capitalize font-bold transition-all duration-300 ${activeTab === tab ? 'border-b-4 border-orange-600 text-orange-700 transform -translate-y-1' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab === 'visuals' ? 'Gallery & Visuals' : tab} 
              {tab === 'attendees' && ` (${attendees.length})`}
              {tab === 'pledges' && ` (${pledges.length})`}
            </button>
          ))}
        </div>

        {activeTab === 'content' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">Header Texts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Organization Name</label>
                  <input value={localConfig.header.orgName} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, orgName: e.target.value}})} className="w-full border p-2 rounded" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Event Name</label>
                  <input value={localConfig.header.eventName} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, eventName: e.target.value}})} className="w-full border p-2 rounded" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Tagline</label>
                  <input value={localConfig.header.tagline} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, tagline: e.target.value}})} className="w-full border p-2 rounded" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Sub-tagline</label>
                  <input value={localConfig.header.subTagline} onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, subTagline: e.target.value}})} className="w-full border p-2 rounded" />
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">Event Details</h3>
              <textarea 
                value={localConfig.about.description} 
                onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, description: e.target.value}})}
                className="border p-2 rounded w-full h-32 mb-4" placeholder="Description"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input value={localConfig.about.date} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, date: e.target.value}})} className="border p-2 rounded" placeholder="Date" />
                <input value={localConfig.about.venue} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, venue: e.target.value}})} className="border p-2 rounded" placeholder="Venue" />
                <input value={localConfig.about.time} onChange={(e) => setLocalConfig({...localConfig, about: {...localConfig.about, time: e.target.value}})} className="border p-2 rounded" placeholder="Time" />
              </div>
            </section>

             <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">YouTube / Videos</h3>
              {localConfig.videos.map((vid, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input value={vid.url} onChange={(e) => handleArrayChange('videos', idx, 'url', e.target.value)} className="border p-2 rounded flex-grow" placeholder="Video Embed URL" />
                  <input value={vid.title} onChange={(e) => handleArrayChange('videos', idx, 'title', e.target.value)} className="border p-2 rounded w-1/3" placeholder="Title" />
                </div>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'dedication' && (
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200 animate-fade-in">
             <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">Dedication Section Settings</h3>
             <div className="space-y-4">
               <div>
                 <label className="text-xs font-bold text-gray-500">Image URL</label>
                 <div className="flex gap-4 items-center">
                   <input 
                    className="flex-grow border p-2 rounded" 
                    value={localConfig.dedication?.imageUrl || ""} 
                    onChange={e => setLocalConfig({...localConfig, dedication: {...localConfig.dedication, imageUrl: e.target.value}})}
                   />
                   <img src={localConfig.dedication?.imageUrl} className="h-16 w-16 object-cover rounded border" alt="preview" />
                 </div>
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-500">Title</label>
                 <input 
                  className="w-full border p-2 rounded" 
                  value={localConfig.dedication?.title || ""} 
                  onChange={e => setLocalConfig({...localConfig, dedication: {...localConfig.dedication, title: e.target.value}})}
                 />
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-500">Guru Name</label>
                 <input 
                  className="w-full border p-2 rounded" 
                  value={localConfig.dedication?.name || ""} 
                  onChange={e => setLocalConfig({...localConfig, dedication: {...localConfig.dedication, name: e.target.value}})}
                 />
               </div>
               <div>
                 <label className="text-xs font-bold text-gray-500">Subtitle</label>
                 <input 
                  className="w-full border p-2 rounded" 
                  value={localConfig.dedication?.subtitle || ""} 
                  onChange={e => setLocalConfig({...localConfig, dedication: {...localConfig.dedication, subtitle: e.target.value}})}
                 />
               </div>
             </div>
          </div>
        )}

        {activeTab === 'visuals' && (
          <div className="space-y-8 animate-fade-in">
             <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">Global Appearance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Background Image URL</label>
                  <input 
                    value={localConfig.visuals?.mainBgImage} 
                    onChange={(e) => setLocalConfig({...localConfig, visuals: {...localConfig.visuals, mainBgImage: e.target.value}})}
                    className="w-full border p-2 rounded" 
                    placeholder="https://..."
                  />
                </div>
                 <div className="space-y-1">
                  <label className="text-xs text-gray-500">Logo URL</label>
                  <input 
                    value={localConfig.header.logoUrl} 
                    onChange={(e) => setLocalConfig({...localConfig, header: {...localConfig.header, logoUrl: e.target.value}})}
                    className="w-full border p-2 rounded" 
                  />
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">Artistic Elements (Admin Only)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-3 p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-bold text-orange-800 flex items-center gap-2"><Sliders size={16}/> Visibility</h4>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Show Corner Motifs</span>
                      <button 
                        onClick={() => setLocalConfig({...localConfig, visuals: {...localConfig.visuals, showMotifs: !localConfig.visuals?.showMotifs}})}
                        className={`p-2 rounded-full ${localConfig.visuals?.showMotifs ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}
                      >
                        {localConfig.visuals?.showMotifs ? <Eye size={20}/> : <EyeOff size={20}/>}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Show Floral Dividers</span>
                      <button 
                        onClick={() => setLocalConfig({...localConfig, visuals: {...localConfig.visuals, showDividers: !localConfig.visuals?.showDividers}})}
                        className={`p-2 rounded-full ${localConfig.visuals?.showDividers ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}
                      >
                        {localConfig.visuals?.showDividers ? <Eye size={20}/> : <EyeOff size={20}/>}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg space-y-3">
                     <h4 className="font-bold text-purple-800 flex items-center gap-2"><Grid size={16}/> Pattern Selection</h4>
                     <div className="grid grid-cols-2 gap-2">
                       {PATTERN_PRESETS.map((p) => (
                         <button
                           key={p.name}
                           onClick={() => setLocalConfig({
                             ...localConfig, 
                             visuals: { ...localConfig.visuals, patternType: p.type, patternUrl: p.url }
                           })}
                           className={`text-xs p-2 rounded border transition-colors ${localConfig.visuals?.patternUrl === p.url && localConfig.visuals?.patternType === p.type ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                         >
                           {p.name}
                         </button>
                       ))}
                     </div>
                     <div className="mt-2">
                       <label className="text-xs font-bold text-gray-500">Custom Pattern URL</label>
                       <input 
                         className="w-full text-xs p-2 border rounded mt-1"
                         placeholder="https://..."
                         value={localConfig.visuals?.patternType === 'image' && !PATTERN_PRESETS.find(p => p.url === localConfig.visuals?.patternUrl) ? localConfig.visuals?.patternUrl : ''}
                         onChange={(e) => setLocalConfig({
                           ...localConfig,
                           visuals: { ...localConfig.visuals, patternType: 'image', patternUrl: e.target.value }
                         })}
                       />
                     </div>
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-blue-50 rounded-lg">
                   <h4 className="font-bold text-blue-800 flex items-center gap-2"><Sliders size={16}/> Opacity Controls</h4>
                   
                   <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-gray-500">
                        <label>Pattern Opacity</label>
                        <span>{Math.round((localConfig.visuals?.patternOpacity || 0.1) * 100)}%</span>
                      </div>
                      <input 
                        type="range" min="0" max="1" step="0.05"
                        value={localConfig.visuals?.patternOpacity || 0.1}
                        onChange={(e) => setLocalConfig({...localConfig, visuals: {...localConfig.visuals, patternOpacity: parseFloat(e.target.value)}})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-gray-500">
                        <label>Main BG Image Opacity</label>
                        <span>{Math.round((localConfig.visuals?.bgImageOpacity || 0.1) * 100)}%</span>
                      </div>
                      <input 
                        type="range" min="0" max="1" step="0.05"
                        value={localConfig.visuals?.bgImageOpacity || 0.1}
                        onChange={(e) => setLocalConfig({...localConfig, visuals: {...localConfig.visuals, bgImageOpacity: parseFloat(e.target.value)}})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                   </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-blue-900 border-b pb-2">Event Grid Images</h3>
              <div className="grid grid-cols-1 gap-4">
                {localConfig.gallery.map((img, idx) => (
                  <div key={idx} className="flex gap-4 items-center bg-gray-50 p-2 rounded border">
                    <span className="font-bold text-gray-400 w-6">{idx + 1}.</span>
                    <div className="flex-grow space-y-2">
                       <input 
                        value={img.url} 
                        onChange={(e) => handleArrayChange('gallery', idx, 'url', e.target.value)}
                        className="w-full border p-2 rounded text-sm" placeholder="Image URL"
                      />
                       <input 
                        value={img.title} 
                        onChange={(e) => handleArrayChange('gallery', idx, 'title', e.target.value)}
                        className="w-full border p-2 rounded text-sm" placeholder="Image Title"
                      />
                    </div>
                    <img src={img.url} alt="preview" className="w-16 h-16 object-cover rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'attendees' && (
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
             <div className="flex justify-end mb-4">
               <button 
                onClick={() => downloadCSV(attendees, 'attendance_data.csv')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
               >
                 <Download size={16} /> Download CSV
               </button>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm">
                 <thead>
                   <tr className="bg-gray-100 text-gray-600 uppercase">
                     <th className="p-3 rounded-tl-lg">Name</th>
                     <th className="p-3">Gender</th>
                     <th className="p-3">Age</th>
                     <th className="p-3">Contact</th>
                     <th className="p-3 rounded-tr-lg">Timestamp</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y">
                   {attendees.map((a, i) => (
                     <tr key={i} className="hover:bg-gray-50">
                       <td className="p-3 font-medium">{a.name}</td>
                       <td className="p-3">{a.gender}</td>
                       <td className="p-3">{a.age}</td>
                       <td className="p-3">{a.contact}</td>
                       <td className="p-3 text-gray-500">{formatTimestamp(a.createdAt)}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        )}

        {activeTab === 'pledges' && (
           <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
             <div className="flex justify-end mb-4">
               <button 
                onClick={() => downloadCSV(pledges, 'pledge_data.csv')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
               >
                 <Download size={16} /> Download CSV
               </button>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm">
                 <thead>
                   <tr className="bg-gray-100 text-gray-600 uppercase">
                     <th className="p-3 rounded-tl-lg">Name</th>
                     <th className="p-3">Mobile</th>
                     <th className="p-3 rounded-tr-lg">Pledge Time</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y">
                   {pledges.map((p, i) => (
                     <tr key={i} className="hover:bg-gray-50">
                       <td className="p-3 font-medium">{p.name}</td>
                       <td className="p-3">{p.mobile}</td>
                       <td className="p-3 text-gray-500">{formatTimestamp(p.createdAt)}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPledge, setShowPledge] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showCoupon, setShowCoupon] = useState(null); 
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [pledges, setPledges] = useState([]);

  // Attendance Form State
  const [attForm, setAttForm] = useState({ name: '', contact: '', age: '', gender: 'M' });
  // Pledge Form State
  const [pledgeForm, setPledgeForm] = useState({ name: '', mobile: '' });
  const [pledgeTaken, setPledgeTaken] = useState(false);

  // Auth & Init
  useEffect(() => {
    // Auth State Listener
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        // Simple logic: if not anonymous, treat as admin. 
        // In production, checking specific UID or Claims is better.
        setIsAdmin(!u.isAnonymous); 
      } else {
        setIsAdmin(false);
        // If not logged in, sign in anonymously for normal user access
        signInAnonymously(auth).catch(console.error);
      }
    });

    // Auto open attendance
    const timer = setTimeout(() => {
      const hasAttended = sessionStorage.getItem('hasAttended');
      if (!hasAttended) setShowAttendance(true);
    }, 1500);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  // Data Fetching
  useEffect(() => {
    if (!user) return;

    // Fetch Config
    const configRef = doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main');
    const unsubConfig = onSnapshot(configRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        // Deep merge to ensure visuals exist even if old config is loaded
        setConfig(prev => ({
           ...DEFAULT_CONFIG,
           ...data,
           visuals: { ...DEFAULT_CONFIG.visuals, ...(data.visuals || {}) },
           header: { ...DEFAULT_CONFIG.header, ...(data.header || {}) },
           about: { ...DEFAULT_CONFIG.about, ...(data.about || {}) },
           dedication: { ...DEFAULT_CONFIG.dedication, ...(data.dedication || {}) }
        }));
      }
    }, (err) => console.log('Config Load Error:', err));

    // Only fetch large lists if admin
    if (isAdmin) {
      // Fetch Attendees
      const attRef = collection(db, 'artifacts', appId, 'public', 'data', 'attendees');
      const qAtt = query(attRef, orderBy('createdAt', 'desc'));
      const unsubAtt = onSnapshot(qAtt, (snap) => {
        setAttendees(snap.docs.map(d => d.data()));
      }, (err) => console.log('Attendees Load Error', err));

      // Fetch Pledges
      const pledgeRef = collection(db, 'artifacts', appId, 'public', 'data', 'pledges');
      const qPledge = query(pledgeRef, orderBy('createdAt', 'desc'));
      const unsubPledge = onSnapshot(qPledge, (snap) => {
        setPledges(snap.docs.map(d => d.data()));
      }, (err) => console.log('Pledges Load Error', err));

      return () => {
        unsubConfig();
        unsubAtt();
        unsubPledge();
      };
    }

    return () => unsubConfig();
  }, [user, isAdmin]);

  const saveConfig = async (newConfig) => {
    if (!user) return;
    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main'), newConfig);
      alert('Website Updated Successfully!');
    } catch (e) {
      console.error(e);
      alert('Error updating website.');
    }
  };

  const submitAttendance = async (e) => {
    e.preventDefault();
    if (!user) return;
    
    const couponData = { 
      name: attForm.name,
      contact: attForm.contact,
      age: attForm.age,
      gender: attForm.gender,
      date: new Date().toLocaleDateString(), 
      createdAt: new Date() 
    };
    
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'attendees'), couponData);
      setShowAttendance(false);
      setShowCoupon(couponData);
      sessionStorage.setItem('hasAttended', 'true');
    } catch (err) {
      console.error(err);
      alert("Error submitting attendance. Please try again.");
    }
  };

  const submitPledge = async (e) => {
    e.preventDefault();
    if (!user) return;
    
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'pledges'), {
        name: pledgeForm.name,
        mobile: pledgeForm.mobile,
        createdAt: new Date()
      });
      setPledgeTaken(true);
    } catch (err) {
      console.error(err);
      alert("Error submitting pledge.");
    }
  };

  const sharePledge = async () => {
    const text = `🌟 I pledge for a Drug-Free India! 🌟\n\nI just took the "I Love Bharat" pledge at the ISKCON Youth Fest. Join me in this revolution!\n\nEvent: ${config.header.eventName}\nTheme: ${config.header.tagline}\n\n#ILoveBharat #NashaMuktBharat #ISKCONUjjain`;
    if (navigator.share) {
      navigator.share({ title: 'My Pledge', text, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(text);
      alert('Motivational pledge message copied to clipboard! Share it on WhatsApp/Insta!');
    }
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">
      
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-[-1] bg-orange-50">
        {/* User Defined Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${config.visuals?.mainBgImage})`, opacity: config.visuals?.bgImageOpacity ?? 0.2 }}
        ></div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/40 via-white/60 to-green-100/40"></div>
        
        {/* Pattern Overlay: SVG or Image */}
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
      {showAdminLogin && <AdminLogin onClose={() => setShowAdminLogin(false)} onLogin={() => setShowAdminLogin(false)} />}
      {isAdmin && <AdminDashboard config={config} setConfig={setConfig} attendees={attendees} pledges={pledges} onClose={() => setIsAdmin(false)} onSave={saveConfig} />}

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-lg shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative group cursor-pointer bg-white rounded-full p-0.5 border-2 border-orange-500 shadow-sm">
               <img src={config.header.logoUrl} alt="Logo" className="h-10 w-10 rounded-full object-contain transform group-hover:scale-105 transition-transform" />
            </div>
            <span className="font-bold text-lg hidden sm:block text-orange-800 tracking-tight">ISKCON Ujjain</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-sm text-gray-600 tracking-wide">
            {['HOME', 'ABOUT', 'EVENTS', 'HIGHLIGHTS'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-600 transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowAdminLogin(true)} className="md:hidden text-gray-600 hover:text-orange-600">
              <Menu />
            </button>
            <button 
              onClick={() => setShowAdminLogin(true)} 
              className={`hidden md:block transition-colors ${isAdmin ? 'text-green-600 hover:text-green-700' : 'text-gray-400 hover:text-orange-500'}`}
              title={isAdmin ? "Admin Dashboard" : "Admin Login"}
            >
              <Lock size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper for flex-grow */}
      <main className="flex-grow">
        {/* --- Header (Hero) --- */}
        <header id="home" className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          {/* Artistic Corner Motifs */}
          {config.visuals?.showMotifs && (
            <>
              <div className="absolute top-24 left-4 w-40 h-40 pointer-events-none hidden md:block animate-fade-in">
                <CornerMotif className="w-full h-full transform -rotate-90" opacity={1} />
              </div>
              <div className="absolute top-24 right-4 w-40 h-40 pointer-events-none hidden md:block animate-fade-in">
                <CornerMotif className="w-full h-full transform" opacity={1} />
              </div>
            </>
          )}

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 shadow-sm animate-fade-in-up">
              <p className="text-orange-800 font-bold tracking-widest uppercase text-sm">
                {config.header.orgName}
              </p>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-sm">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-red-600">
                {config.header.eventName}
              </span>
            </h2>
            
            {/* Main Creative Text Block */}
            <div className="my-12 transform hover:scale-[1.02] transition duration-700 ease-out">
               <div className="inline-flex items-center justify-center gap-3 md:gap-6 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-white ring-1 ring-gray-200 relative overflow-hidden group">
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-orange-200/20 via-white/0 to-green-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-700 drop-shadow-lg" style={{textShadow: "4px 4px 0px rgba(255,200,150,0.3)"}}>I</span>
                  
                  <div className="relative mx-2 md:mx-4">
                    <TriColorHeart className="w-24 h-24 md:w-40 md:h-40 drop-shadow-xl animate-pulse" />
                  </div>

                  <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-green-800 drop-shadow-lg" style={{textShadow: "4px 4px 0px rgba(150,255,150,0.3)"}}>BHARAT</span>
               </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif text-gray-800 font-bold mb-4 drop-shadow-md">
              "{config.header.tagline}"
            </h3>
            
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1">
              <Users className="w-5 h-5 text-orange-400" />
              <span>{config.header.subTagline}</span>
            </div>
          </div>
        </header>

        {/* --- Floral Divider --- */}
        {config.visuals?.showDividers && <FloralDivider />}

        {/* --- About Section --- */}
        <section id="about" className="py-20 px-4 container mx-auto relative">
          {config.visuals?.showMotifs && (
            <>
              <div className="absolute left-0 top-1/4 w-24 h-64 bg-orange-500/10 rounded-r-full blur-xl"></div>
              <div className="absolute right-0 bottom-1/4 w-24 h-64 bg-green-500/10 rounded-l-full blur-xl"></div>
            </>
          )}

          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-2 border-white relative overflow-hidden transition-all hover:shadow-orange-500/10">
            {/* Background Texture for Card */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>

            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
               <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    <Info size={14} /> About The Fest
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 font-serif leading-tight">
                    {config.about.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium text-justify">
                    {config.about.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-3">
                       <Users className="text-orange-400" />
                       <div>
                         <p className="text-xs text-gray-400 uppercase">Expected</p>
                         <p className="leading-none">{config.about.stats}</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="flex-1 w-full flex flex-col gap-4">
                  {[
                    { icon: <Calendar size={24} />, title: "Date", val: config.about.date, color: "orange", bg: "bg-orange-50", border: "border-orange-200", iconBg: "bg-orange-500" },
                    { icon: <Clock size={24} />, title: "Time", val: config.about.time, color: "green", bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-600" },
                    { icon: <MapPin size={24} />, title: "Venue", val: config.about.venue, color: "blue", bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-600" }
                  ].map((item, idx) => (
                    <div key={idx} className={`${item.bg} p-5 rounded-2xl border ${item.border} flex items-center gap-5 hover:scale-[1.02] transition-transform duration-300 shadow-sm`}>
                       <div className={`${item.iconBg} text-white p-3.5 rounded-xl shadow-md`}>
                         {item.icon}
                       </div>
                       <div>
                         <p className={`text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5`}>{item.title}</p>
                         <p className="text-xl font-bold text-gray-900">{item.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* --- Dedication Section --- */}
        <section className="py-16 container mx-auto px-4 bg-orange-50/50">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Squared Frame Image */}
              <div className="relative group">
                 {/* Decorative Frame Border */}
                 <div className="absolute -inset-3 border-2 border-orange-200 rounded-xl rotate-3 transition-transform group-hover:rotate-6"></div>
                 <div className="absolute -inset-3 border-2 border-orange-300 rounded-xl -rotate-3 transition-transform group-hover:-rotate-6"></div>
                 
                 <div className="relative h-64 w-64 md:h-72 md:w-72 bg-white p-2 rounded-xl shadow-2xl rotate-0 transition-transform hover:scale-105">
                   <div className="h-full w-full overflow-hidden rounded-lg border border-gray-200">
                     <img 
                      src={config.dedication.imageUrl} 
                      alt="Srila Prabhupada" 
                      className="h-full w-full object-cover"
                     />
                   </div>
                   {/* Bottom Label on Frame */}
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded shadow text-[10px] font-bold uppercase tracking-widest text-orange-800 border border-orange-100 whitespace-nowrap">
                     {config.dedication.title}
                   </div>
                 </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif leading-tight">
                  {config.dedication.name}
                </h2>
                <div className="h-1 w-20 bg-orange-500 rounded-full mb-4 mx-auto md:mx-0"></div>
                <p className="text-lg text-gray-600 font-medium italic">
                  "{config.dedication.subtitle}"
                </p>
              </div>
           </div>
        </section>

        {/* --- Floral Divider --- */}
        {config.visuals?.showDividers && <FloralDivider className="rotate-180" />}

        {/* --- Events Grid (Tilted) --- */}
        <section id="events" className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-gray-900 z-0">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
           </div>

           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16">
               <span className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Activities</span>
               <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Cultural Extravaganza</h2>
               <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-6 rounded-full"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
               {config.gallery.map((item, idx) => (
                 <div 
                   key={item.id} 
                   className={`group relative h-72 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:z-20 transform hover:-translate-y-2 hover:shadow-orange-500/20 ring-4 ring-gray-800 ${idx % 2 === 0 ? 'md:rotate-2 hover:rotate-0' : 'md:-rotate-2 hover:rotate-0'}`}
                 >
                   <img 
                     src={item.url} 
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                   
                   <div className="absolute bottom-0 left-0 w-full p-6">
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-10 h-1 bg-orange-500 mb-3 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-white leading-tight">
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
        <section id="highlights" className="py-20 container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
             <Youtube className="text-red-600 w-8 h-8" />
             <h2 className="text-3xl font-bold text-gray-800">Highlights & Moments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.videos.map((vid) => (
              <div key={vid.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ring-1 ring-gray-100 group">
                <div className="aspect-video w-full bg-black relative">
                   <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
                   </div>
                   <iframe 
                    src={vid.url} 
                    title={vid.title} 
                    className="w-full h-full relative z-10" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 flex items-start justify-between bg-gradient-to-b from-white to-gray-50">
                   <div>
                     <h4 className="font-bold text-gray-800 text-lg line-clamp-1 group-hover:text-orange-600 transition-colors">{vid.title}</h4>
                     <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-bold">Watch Now</p>
                   </div>
                   <div className="bg-red-50 p-2 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Play size={16} fill="currentColor" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-300 py-16 text-center relative overflow-hidden mt-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-white p-1 rounded-full hover:scale-110 transition-transform duration-500">
            <img src={config.header.logoUrl} className="w-full h-full rounded-full object-contain" alt="logo" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-2 font-serif tracking-wide">{config.header.orgName}</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Connecting youth to their roots through culture, wisdom, and devotion.</p>
          <p className="text-xs text-gray-600">© 2026 I Love Bharat Fest. Built for ISKCON Ujjain.</p>
        </div>
      </footer>

      {/* --- Floating Action Tabs --- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:bottom-12 md:right-12 md:left-auto md:flex-col md:gap-4 md:w-auto md:items-end md:shadow-none pb-safe">
        <button 
          onClick={() => setShowPledge(true)}
          className="flex-1 md:flex-none bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-4 md:py-3 px-6 md:pl-6 md:pr-8 md:rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-green-500/40 md:hover:-translate-x-2 group"
        >
          <div className="bg-white/20 p-1.5 rounded-full group-hover:rotate-12 transition-transform"><CheckCircle size={20} /></div>
          <span className="tracking-wide">PLEDGE NOW</span>
        </button>
        <button 
          onClick={() => setShowAttendance(true)}
          className="flex-1 md:flex-none bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white py-4 md:py-3 px-6 md:pl-6 md:pr-8 md:rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-orange-500/40 md:hover:-translate-x-2 group"
        >
          <div className="bg-white/20 p-1.5 rounded-full group-hover:rotate-12 transition-transform"><Ticket size={20} /></div>
          <span className="tracking-wide">ATTENDANCE</span>
        </button>
      </div>

      {/* --- Modals --- */}
      
      {/* Pledge Modal */}
      {showPledge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative">
            <button onClick={() => setShowPledge(false)} className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition"><X size={18} /></button>
            
            <div className="relative bg-emerald-600 p-8 text-white text-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold mb-2 font-serif">My Pledge For Bharat</h3>
                 <p className="text-emerald-100 font-medium">Nasha Mukt Bharat Abhiyan</p>
               </div>
            </div>

            <div className="p-8">
              {!pledgeTaken ? (
                <form onSubmit={submitPledge} className="space-y-5">
                  <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100 text-center relative">
                    <div className="text-orange-200 absolute top-2 left-4 text-4xl font-serif">"</div>
                    <p className="text-gray-800 font-medium italic relative z-10 mb-3">{config.pledgeText.english}</p>
                    <p className="text-gray-600 text-sm">{config.pledgeText.hindi}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <input 
                      required 
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition"
                      value={pledgeForm.name}
                      onChange={e => setPledgeForm({...pledgeForm, name: e.target.value})}
                    />
                    <input 
                      required 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition"
                      value={pledgeForm.mobile}
                      onChange={e => setPledgeForm({...pledgeForm, mobile: e.target.value})}
                    />
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition transform hover:scale-[1.01]">
                    I TAKE THE PLEDGE
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-scale-in">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Pledge Recorded!</h4>
                  <p className="text-gray-500 mb-8 max-w-xs mx-auto">You have taken a step towards a stronger nation. Inspire others to join you.</p>
                  
                  <button onClick={sharePledge} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-200 transition transform hover:scale-[1.02]">
                    <Share2 size={20} /> Share Achievement
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">Clicking share copies text or opens apps</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showAttendance && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
            <button onClick={() => setShowAttendance(false)} className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition"><X size={18} /></button>
            
            <div className="relative bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              <h3 className="text-2xl font-bold relative z-10">Mark Attendance</h3>
              <p className="text-orange-100 text-sm relative z-10">Get your Digital Prasadam Coupon</p>
            </div>

            <form onSubmit={submitAttendance} className="p-8 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                <input 
                  required 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition" 
                  value={attForm.name}
                  onChange={e => setAttForm({...attForm, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                   <label className="text-xs font-bold text-gray-500 uppercase ml-1">Age</label>
                   <input 
                    required 
                    type="number" 
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                    value={attForm.age}
                    onChange={e => setAttForm({...attForm, age: e.target.value})}
                   />
                </div>
                <div className="space-y-1">
                   <label className="text-xs font-bold text-gray-500 uppercase ml-1">Gender</label>
                   <select 
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                    value={attForm.gender}
                    onChange={e => setAttForm({...attForm, gender: e.target.value})}
                   >
                     <option value="M">Male</option>
                     <option value="F">Female</option>
                   </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Contact No.</label>
                <input 
                  required 
                  type="tel" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                  value={attForm.contact}
                  onChange={e => setAttForm({...attForm, contact: e.target.value})}
                />
              </div>
              
              <button type="submit" className="w-full mt-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-200 transition transform hover:scale-[1.01]">
                GENERATE COUPON
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {showCoupon && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
           <div className="bg-white rounded-2xl overflow-hidden max-w-sm w-full relative shadow-2xl animate-scale-in">
              <button onClick={() => setShowCoupon(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 z-10"><X size={20}/></button>
              
              {/* Coupon Design */}
              <div className="m-4 rounded-xl overflow-hidden relative shadow-inner border border-gray-200">
                 {/* Coupon Header */}
                 <div className="bg-orange-600 p-5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
                    <h3 className="font-black text-xl text-white uppercase tracking-widest relative z-10">Prasadam Pass</h3>
                    <p className="text-orange-100 text-xs relative z-10 font-medium">OFFICIAL ENTRY COUPON</p>
                 </div>
                 
                 {/* Coupon Body */}
                 <div className="p-8 bg-white text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-orange-100 shadow-sm p-1">
                      <img src={config.header.logoUrl} alt="Logo" className="w-full h-full rounded-full object-cover" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{showCoupon.name}</h2>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-6">
                      {showCoupon.gender === 'M' ? 'MALE' : 'FEMALE'} • {showCoupon.age} YEARS
                    </div>
                    
                    <div className="border-t-2 border-dashed border-gray-200 pt-6">
                       <div className="bg-orange-50 rounded-lg p-3 border border-orange-100 inline-block w-full">
                          <p className="text-xs font-bold text-orange-400 uppercase mb-1">Status</p>
                          <p className="font-black text-orange-700 text-lg">AUTHORIZED ENTRY</p>
                       </div>
                    </div>
                 </div>

                 {/* Coupon Footer (QR) */}
                 <div className="bg-gray-900 p-4 flex items-center justify-between gap-4">
                    <div className="text-left">
                       <p className="text-gray-400 text-[10px] uppercase font-bold">Event Date</p>
                       <p className="text-white font-bold">{config.about.date}</p>
                    </div>
                    <div className="bg-white p-1 rounded">
                       {/* Mock QR */}
                       <div className="grid grid-cols-4 gap-0.5 w-10 h-10">
                         {[...Array(16)].map((_,i) => <div key={i} className={`bg-black ${Math.random() > 0.4 ? 'opacity-100' : 'opacity-0'}`}></div>)}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-4 bg-gray-50 border-t flex justify-center">
                <button 
                  onClick={() => alert("Please take a screenshot of this coupon to save it.")} 
                  className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition"
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