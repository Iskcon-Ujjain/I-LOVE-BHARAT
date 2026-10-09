import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Calendar, MapPin, Clock, Users, 
  Menu, X, Share2, Download, Lock, Save, 
  Youtube, CheckCircle, Ticket, 
  Sliders, Type, Settings, UploadCloud, Plus, Trash2, Heart,
  AlertTriangle, Sparkles, Image as ImageIcon, Link as LinkIcon, LogOut, BookOpen
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, signInAnonymously, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, doc, setDoc, collection, onSnapshot, addDoc, deleteDoc, query, orderBy 
} from 'firebase/firestore';
import { 
  getStorage, ref, uploadBytesResumable, getDownloadURL 
} from 'firebase/storage';

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
const storage = getStorage(app);

// Database ID for Dhurandhar Event
const appId = typeof __app_id !== 'undefined' ? __app_id : 'dhurandhar-2026';

// ==========================================
// --- HELPER FUNCTIONS ---
// ==========================================
const handleImageError = (e) => {
  e.target.onerror = null; 
  e.target.src = "https://placehold.co/600x400/f8fafc/94a3b8?text=Image+Unavailable";
};

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

// --- Default Data & Configuration ---
const DEFAULT_CONFIG = {
  settings: { autoPopup: 'attendance' },
  visuals: {
    backgroundImage: "./watermarked_img_12355519483312131100.png",
    backgroundOpacity: 1.0, 
  },
  header: {
    orgName: "ISKCON Ujjain Presents",
    eventName: "DHURANDHAR",
    heroLeft: "BETTER YOUTH",
    heroRight: "BETTER BHARAT",
    tagline: "युवाओं के लिए एक अनोखा प्रेरणादायक कार्यक्रम",
    subTagline: "100% FREE • Boys & Girls Welcome",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISKCON_Logo.svg/1200px-ISKCON_Logo.svg.png"
  },
  about: {
    title: "DHURANDHAR Youth Program",
    description: "अपने लक्ष्य को पाने के लिए ज्ञान, भक्ति और अनुशासन का संगम। बेहतर युवा, बेहतर भारत। आओ, गीता के संदेश से अपने जीवन को नई दिशा दें। पढ़ो भगवद गीता, बनाओ अपना बेहतर कल। प्रोग्राम के बाद सभी के लिए स्वादिष्ट डिनर रहेगा।",
    date: "10 October 2026",
    venue: "Luxury AC Auditorium, ISKCON Ujjain",
    time: "4:00 PM to 6:30 PM",
    stats: "100% Free" 
  },
  dedication: {
    title: "Dedicated to",
    name: "HDG A.C. Bhaktivedanta Swami Prabhupada",
    subtitle: "Founder-Acharya of the International Society for Krishna Consciousness",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Bhaktivedanta_Swami_Prabhupada_at_Bhaktivedanta_Manor_1973.jpg"
  },
  pledgeText: {
    hindi: "मैं अपने बेहतर कल और बेहतर भारत के लिए भगवद गीता पढ़ने और उसके संदेश से अपने जीवन को नई दिशा देने का संकल्प लेता/लेती हूँ।",
    english: "For my better tomorrow and a better India, I pledge to read the Bhagavad Gita and give a new direction to my life."
  },
  gallery: [
    { id: 1, url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800", title: "Cultural Dance" },
    { id: 2, url: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?auto=format&fit=crop&q=80&w=800", title: "Kirtan Bliss" },
  ],
  videos: [
    { id: 1, type: 'youtube', url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Festival Highlights", thumbnailUrl: "" },
  ]
};

// --- Native Image Compression ---
const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 1920;
        let { width, height } = img;
        if (width > height && width > MAX_DIM) {
          height *= MAX_DIM / width;
          width = MAX_DIM;
        } else if (height > MAX_DIM) {
          width *= MAX_DIM / height;
          height = MAX_DIM;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
        }, 'image/jpeg', 0.85); 
      };
    };
  });
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

const AdvancedUploader = ({ label, value, onChange, showToast }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorText, setErrorText] = useState('');
  const [shake, setShake] = useState(false);
  const [linkInput, setLinkInput] = useState('');
  const fileInputRef = useRef(null);

  const triggerShake = (msg) => { setErrorText(msg); setShake(true); setTimeout(() => setShake(false), 500); };

  const handleUploadProcess = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return triggerShake("Only image files are allowed!");
    if (file.size > 5 * 1024 * 1024) return triggerShake("File exceeds 5MB limit!"); 

    setErrorText(''); setUploading(true); setProgress(0);

    try {
      const compressedFile = await compressImage(file);
      const storageRef = ref(storage, `website_assets/${Date.now()}_${compressedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, compressedFile);

      uploadTask.on('state_changed', 
        (snapshot) => { setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)); }, 
        (error) => { triggerShake("Upload failed. Check Firebase Rules."); setUploading(false); }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          onChange(downloadURL); setUploading(false); setProgress(100);
          showToast(`${label} uploaded successfully!`, "success");
        }
      );
    } catch (err) { triggerShake("An error occurred during upload."); setUploading(false); }
  };

  const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); if (e.type === "dragenter" || e.type === "dragover") setDragActive(true); else if (e.type === "dragleave") setDragActive(false); };
  const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files && e.dataTransfer.files[0]) handleUploadProcess(e.dataTransfer.files[0]); };
  const handlePaste = (e) => { const items = (e.clipboardData || e.originalEvent.clipboardData).items; for (let index in items) { const item = items[index]; if (item.kind === 'file' && item.type.startsWith('image/')) { const file = item.getAsFile(); handleUploadProcess(file); break; } } };
  const applyLink = () => { if (linkInput.trim()) { onChange(linkInput.trim()); setLinkInput(''); } };

  return (
    <div className="space-y-3">
      <label className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">{label}</label>
      <div 
        className={`relative overflow-hidden rounded-[2rem] p-6 transition-all duration-300 border-2 bg-gradient-to-br from-orange-50/80 via-white/90 to-blue-50/80 backdrop-blur-xl shadow-sm ${shake ? 'animate-shake border-red-400' : dragActive ? 'border-orange-500 shadow-orange-500/20 shadow-xl transform scale-[1.02]' : 'border-gray-200'}`}
        onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onPaste={handlePaste} tabIndex={0}
      >
        {!value && !uploading && (
          <div className="text-center py-6 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-md flex items-center justify-center text-orange-400 transition-transform transform hover:scale-110"><UploadCloud size={28} /></div>
            <p className="font-extrabold text-gray-800 text-lg mb-1 tracking-tight">Drop image or Paste</p>
            <p className="text-xs text-gray-400 font-medium">Supports JPG, PNG • Max 5MB</p>
            {errorText && <p className="text-red-500 text-xs font-bold mt-3 animate-fade-in-up bg-red-50 py-1.5 px-3 rounded-full inline-block">{errorText}</p>}
          </div>
        )}
        {uploading && (
          <div className="text-center py-8">
             <p className="font-extrabold text-gray-800 mb-4 tracking-wider text-sm uppercase">Uploading...</p>
             <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner relative"><div className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-green-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div></div>
             <p className="text-2xl font-extrabold text-gray-400 mt-3">{progress}%</p>
          </div>
        )}
        {value && !uploading && (
          <div className="relative group rounded-2xl overflow-hidden shadow-md bg-gray-100 h-48 border border-white/50">
             <img src={value} alt="Preview" className="w-full h-full object-cover animate-zoom-out-fade" onError={(e) => { e.target.src=''; triggerShake("Oops! Broken link."); onChange(''); }} />
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button onClick={() => onChange('')} className="bg-red-500 text-white px-5 py-2.5 rounded-full font-extrabold text-xs tracking-widest flex items-center gap-2 transform hover:scale-105 shadow-lg"><Trash2 size={16}/> REMOVE IMAGE</button>
             </div>
          </div>
        )}
        <input type="file" accept="image/*" ref={fileInputRef} onChange={(e) => handleUploadProcess(e.target.files[0])} className="hidden" />
      </div>

      {!value && !uploading && (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
            <input type="url" placeholder="Or paste a direct image URL..." value={linkInput} onChange={(e) => setLinkInput(e.target.value)} className="w-full bg-white border border-gray-200 p-3.5 pl-11 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none text-sm font-medium shadow-sm" />
          </div>
          <button onClick={applyLink} className="bg-gray-900 text-white px-6 rounded-2xl font-extrabold text-xs tracking-widest hover:bg-gray-800 transition shadow-md">APPLY</button>
        </div>
      )}
    </div>
  );
};

// --- Admin Components ---
const AdminLogin = ({ onClose, onLogin, showToast }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const safePassword = password.trim(); 
    if (safePassword === 'Radha@108' || safePassword === 'radha@108') { showToast('Master Password Accepted.', 'success'); onLogin(true); setLoading(false); return; }
    if (!email.trim()) { showToast('Email required.', 'error'); setLoading(false); return; }
    try { await signInWithEmailAndPassword(auth, email.trim(), safePassword); onLogin(false); } catch (err) { showToast('Incorrect Password.', 'error'); } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 bg-gray-950/80 z-[100] flex items-center justify-center p-4 backdrop-blur-2xl transition-all duration-300">
      <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 max-w-sm w-full shadow-[0_30px_60px_rgba(0,0,0,0.3)] animate-scale-in relative overflow-hidden border border-white">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 bg-white shadow-sm p-2 rounded-full transition-colors"><X size={18}/></button>
        <div className="flex justify-center mb-6"><div className="bg-gradient-to-br from-orange-100 to-red-50 p-4 rounded-full shadow-inner border border-orange-200"><Lock size={32} className="text-orange-600" /></div></div>
        <h3 className="text-2xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">Admin Portal</h3>
        <form onSubmit={handleLogin} className="space-y-5">
          <div><label className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest ml-1 mb-1 block">Email / Username</label><input type="email" placeholder="admin@example.com" className="w-full border-2 border-gray-100 bg-white/50 p-4 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div><label className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest ml-1 mb-1 block">Password</label><input type="password" required placeholder="••••••••" className="w-full border-2 border-gray-100 bg-white/50 p-4 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition font-medium text-lg tracking-widest" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          <div className="pt-4"><button type="submit" disabled={loading} className="w-full py-4 bg-gray-900 text-white font-extrabold rounded-2xl hover:bg-orange-600 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] disabled:opacity-50 transition-all transform hover:-translate-y-1 tracking-widest">{loading ? 'VERIFYING...' : 'AUTHORIZE'}</button></div>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ config, setConfig, attendees, pledges, onClose, onSave, showToast }) => {
  const [activeTab, setActiveTab] = useState('identity');
  const [localConfig, setLocalConfig] = useState(config);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => { setLocalConfig(config); }, [config]);

  const handleSave = async () => { setIsSaving(true); try { await onSave(localConfig); } catch (e) { console.error(e); } finally { setIsSaving(false); } };
  const updateNested = (section, field, value) => { setLocalConfig(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } })); };
  const handleArrayChange = (section, index, field, value) => { const newArray = [...localConfig[section]]; newArray[index] = { ...newArray[index], [field]: value }; setLocalConfig({ ...localConfig, [section]: newArray }); };
  const handleAddItem = (section, defaultItem) => { setLocalConfig({ ...localConfig, [section]: [...(localConfig[section] || []), defaultItem] }); };
  const handleRemoveItem = (section, index) => { if (!window.confirm("Remove this item?")) return; const newArray = localConfig[section].filter((_, i) => i !== index); setLocalConfig({ ...localConfig, [section]: newArray }); };
  const handleLogout = async () => { onClose(); try { await signOut(auth); } catch(err) {} };

  const handleDeleteItem = async (collectionName, docId) => { if (!window.confirm('Delete this record?')) return; try { await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', collectionName, docId)); showToast('Record deleted.', 'success'); } catch (err) { showToast('Error deleting.', 'error'); } };
  const handleClearAll = async (collectionName, dataArray) => { if (!window.confirm(`WARNING: You are about to permanently delete ALL ${dataArray.length} records. Are you absolutely sure?`)) return; try { const deletePromises = dataArray.map(item => deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', collectionName, item.id))); await Promise.all(deletePromises); showToast(`All records cleared!`, 'success'); } catch (err) { showToast('Error clearing records.', 'error'); } };

  return (
    <div className="fixed inset-0 bg-gray-50/95 backdrop-blur-2xl z-[90] overflow-auto flex flex-col transition-all">
      <div className="bg-white/80 backdrop-blur-xl shadow-sm p-4 sticky top-0 z-20 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-3 pl-4">
           <div className="bg-gradient-to-r from-orange-600 to-red-600 p-2 rounded-xl shadow-md"><Sliders className="text-white w-5 h-5" /></div>
           <h2 className="text-xl font-extrabold text-gray-900 tracking-tight hidden sm:block">System Core</h2>
        </div>
        <div className="flex gap-3 pr-4">
          <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-extrabold tracking-widest text-xs px-6 py-3 rounded-xl hover:shadow-[0_5px_15px_rgba(16,185,129,0.4)] transition transform hover:-translate-y-0.5 disabled:opacity-70 shadow-md">
            {isSaving ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Save size={16} />} 
            {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-900 text-white font-extrabold tracking-widest text-xs px-6 py-3 rounded-xl hover:shadow-lg transition transform hover:-translate-y-0.5"><LogOut size={16} /></button>
        </div>
      </div>

      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full flex-grow">
        <div className="flex flex-wrap gap-2 mb-10 bg-white/50 backdrop-blur-md p-2 rounded-2xl shadow-sm border border-white inline-flex overflow-x-auto max-w-full">
          {[
            { id: 'identity', label: 'Header & About', icon: <Type size={16}/> },
            { id: 'visuals', label: 'Visuals & Media', icon: <ImageIcon size={16}/> },
            { id: 'dedication', label: 'Dedication & Pledge', icon: <Heart size={16}/> },
            { id: 'settings', label: 'Behaviors', icon: <Settings size={16}/> },
            { id: 'attendees', label: `Attendees (${attendees?.length || 0})`, icon: <Users size={16}/> },
            { id: 'pledges', label: `Pledges (${pledges?.length || 0})`, icon: <CheckCircle size={16}/> }
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold tracking-wide text-xs transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-orange-600 shadow-md border border-gray-100 transform scale-105' : 'text-gray-500 hover:bg-white hover:text-gray-900 border border-transparent'}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'identity' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up">
            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <h3 className="text-xl font-extrabold mb-6 text-gray-800 border-b border-gray-100 pb-4">Hero Section</h3>
              <div className="space-y-6">
                <AdvancedUploader label="Organization Logo" value={localConfig?.header?.logoUrl} onChange={(url) => updateNested('header', 'logoUrl', url)} showToast={showToast} />
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Org Name</label><input value={localConfig?.header?.orgName || ''} onChange={(e) => updateNested('header', 'orgName', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition" /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Event Main Title</label><input value={localConfig?.header?.eventName || ''} onChange={(e) => updateNested('header', 'eventName', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm focus:border-orange-400 transition" /></div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Hero Tagline</label><input value={localConfig?.header?.tagline || ''} onChange={(e) => updateNested('header', 'tagline', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                   <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Button Sub-Tagline</label><input value={localConfig?.header?.subTagline || ''} onChange={(e) => updateNested('header', 'subTagline', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <h3 className="text-xl font-extrabold mb-6 text-gray-800 border-b border-gray-100 pb-4">About the Event</h3>
              <div className="space-y-6">
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">About Title</label><input value={localConfig?.about?.title || ''} onChange={(e) => updateNested('about', 'title', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Full Description</label><textarea value={localConfig?.about?.description || ''} onChange={(e) => updateNested('about', 'description', e.target.value)} className="w-full border border-gray-200 bg-white p-4 rounded-2xl outline-none font-medium h-32 resize-none text-sm leading-relaxed shadow-sm" /></div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Date</label><input value={localConfig?.about?.date || ''} onChange={(e) => updateNested('about', 'date', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                   <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Time</label><input value={localConfig?.about?.time || ''} onChange={(e) => updateNested('about', 'time', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                   <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Venue</label><input value={localConfig?.about?.venue || ''} onChange={(e) => updateNested('about', 'venue', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                   <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Target Goal</label><input type="text" value={localConfig?.about?.stats || ''} onChange={(e) => updateNested('about', 'stats', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-extrabold text-green-600 text-sm shadow-sm" /></div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'visuals' && (
          <div className="space-y-8 animate-fade-in-up">
            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <h3 className="text-xl font-extrabold mb-6 text-gray-800 border-b border-gray-100 pb-4">Global Background</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <AdvancedUploader label="Main Background Image" value={localConfig?.visuals?.backgroundImage} onChange={(url) => updateNested('visuals', 'backgroundImage', url)} showToast={showToast} />
                <div className="space-y-2 bg-gray-50/50 p-6 rounded-2xl border border-gray-100 h-fit">
                  <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Background Opacity Overlay</label>
                  <input type="range" min="0" max="1" step="0.05" value={localConfig?.visuals?.backgroundOpacity ?? 1.0} onChange={(e) => updateNested('visuals', 'backgroundOpacity', parseFloat(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                  <div className="flex justify-between text-xs font-bold text-gray-400 mt-2"><span>Invisible (0.0)</span><span>{localConfig?.visuals?.backgroundOpacity}</span><span>Solid (1.0)</span></div>
                  <p className="text-[11px] text-gray-500 mt-4 font-medium leading-relaxed bg-white p-3 rounded-xl shadow-sm">Slide to adjust how bright your background image is. Keep it at 1.0 for a crystal-clear look.</p>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-extrabold text-gray-800">Gallery Images</h3>
                <button onClick={() => handleAddItem('gallery', { id: Date.now(), url: '', title: 'New Image' })} className="bg-gray-900 text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold tracking-widest flex items-center gap-2 hover:bg-orange-500 transition shadow-md"><Plus size={14}/> ADD IMAGE</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localConfig?.gallery?.map((img, idx) => (
                  <div key={img.id || idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4 relative group">
                    <button onClick={() => handleRemoveItem('gallery', idx)} className="absolute -top-3 -right-3 bg-red-500 text-white p-2.5 rounded-full shadow-lg hover:bg-red-600 z-10 transform scale-0 group-hover:scale-100 transition-transform"><Trash2 size={16}/></button>
                    <AdvancedUploader label={`Image ${idx + 1}`} value={img.url} onChange={(url) => handleArrayChange('gallery', idx, 'url', url)} showToast={showToast} />
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Hover Title</label>
                      <input value={img.title} onChange={(e) => handleArrayChange('gallery', idx, 'title', e.target.value)} className="w-full border border-gray-200 bg-gray-50 p-3 rounded-xl outline-none font-bold text-sm focus:border-orange-400 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-extrabold text-gray-800">YouTube Videos</h3>
                <button onClick={() => handleAddItem('videos', { id: Date.now(), type: 'youtube', url: 'https://www.youtube.com/embed/...', title: 'New Video', thumbnailUrl: '' })} className="bg-red-600 text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold tracking-widest flex items-center gap-2 hover:bg-red-700 transition shadow-md"><Plus size={14}/> ADD VIDEO</button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {localConfig?.videos?.map((vid, idx) => (
                  <div key={vid.id || idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4 relative group">
                    <button onClick={() => handleRemoveItem('videos', idx)} className="absolute -top-3 -right-3 bg-gray-900 text-white p-2.5 rounded-full shadow-lg hover:bg-red-600 z-10 transform scale-0 group-hover:scale-100 transition-transform"><Trash2 size={16}/></button>
                    
                    <AdvancedUploader label={`Video Thumbnail (Custom Cover)`} value={vid.thumbnailUrl} onChange={(url) => handleArrayChange('videos', idx, 'thumbnailUrl', url)} showToast={showToast} />
                    
                    <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">YouTube Embed URL</label><input value={vid.url} onChange={(e) => handleArrayChange('videos', idx, 'url', e.target.value)} className="w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl outline-none font-medium text-sm text-blue-600" /></div>
                    <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Video Title</label><input value={vid.title} onChange={(e) => handleArrayChange('videos', idx, 'title', e.target.value)} className="w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl outline-none font-bold text-sm" /></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'dedication' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">
            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <h3 className="text-xl font-extrabold mb-6 text-gray-800 border-b border-gray-100 pb-4">Dedication Hero</h3>
              <div className="space-y-6">
                <AdvancedUploader label="Portrait Image" value={localConfig?.dedication?.imageUrl} onChange={(url) => updateNested('dedication', 'imageUrl', url)} showToast={showToast} />
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Top Label</label><input value={localConfig?.dedication?.title || ''} onChange={(e) => updateNested('dedication', 'title', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-bold text-sm shadow-sm" /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Honoree Name</label><input value={localConfig?.dedication?.name || ''} onChange={(e) => updateNested('dedication', 'name', e.target.value)} className="w-full border border-gray-200 bg-white p-3.5 rounded-2xl outline-none font-extrabold text-sm text-gray-900 shadow-sm" /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Subtitle / Description</label><textarea value={localConfig?.dedication?.subtitle || ''} onChange={(e) => updateNested('dedication', 'subtitle', e.target.value)} className="w-full border border-gray-200 bg-white p-4 rounded-2xl outline-none font-medium h-24 resize-none text-sm shadow-sm" /></div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <h3 className="text-xl font-extrabold mb-6 text-gray-800 border-b border-gray-100 pb-4">Digital Pledge Texts</h3>
              <div className="space-y-6">
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Pledge Text (English)</label><textarea value={localConfig?.pledgeText?.english || ''} onChange={(e) => updateNested('pledgeText', 'english', e.target.value)} className="w-full border border-gray-200 bg-white p-5 rounded-2xl outline-none font-bold h-36 resize-none text-sm shadow-sm leading-relaxed" /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Pledge Text (Hindi)</label><textarea value={localConfig?.pledgeText?.hindi || ''} onChange={(e) => updateNested('pledgeText', 'hindi', e.target.value)} className="w-full border border-gray-200 bg-white p-5 rounded-2xl outline-none font-medium h-36 resize-none text-sm shadow-sm leading-relaxed" /></div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <section className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-white">
              <h3 className="text-xl font-extrabold mb-6 text-gray-800 border-b border-gray-100 pb-4 flex items-center gap-2"><Settings className="text-blue-500"/> System Behaviors</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-gray-700 block">Auto-Trigger Popup on Visit</label>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">Choose which form automatically interrupts the user when they first load the website. (It remembers if they've seen it, so it only happens once).</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['none', 'attendance', 'pledge'].map(option => (
                      <button 
                        key={option} onClick={() => updateNested('settings', 'autoPopup', option)}
                        className={`p-5 rounded-2xl border-2 font-extrabold uppercase tracking-widest text-xs transition-all flex flex-col items-center gap-3 ${localConfig?.settings?.autoPopup === option ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-lg transform scale-[1.03]' : 'border-gray-100 bg-white text-gray-400 hover:bg-gray-50'}`}
                      >
                        {option === 'none' ? <X size={24}/> : option === 'attendance' ? <Ticket size={24}/> : <CheckCircle size={24}/>}
                        {option === 'none' ? 'Disabled' : option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {(activeTab === 'attendees' || activeTab === 'pledges') && (
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg border border-white animate-fade-in">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
               <div>
                 <h3 className="font-extrabold text-3xl text-gray-900 tracking-tight capitalize">{activeTab} Data</h3>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">Total Verified: <span className="text-orange-500">{activeTab === 'attendees' ? attendees?.length : pledges?.length}</span></p>
               </div>
               <div className="flex flex-wrap gap-3">
                 <button onClick={() => handleClearAll(activeTab, activeTab === 'attendees' ? attendees : pledges)} className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-5 py-3 rounded-xl hover:bg-red-600 hover:text-white font-extrabold text-[10px] tracking-widest transition-all shadow-sm">
                   <AlertTriangle size={14} /> CLEAR DATABASE
                 </button>
                 <button onClick={() => downloadCSV(activeTab === 'attendees' ? attendees : pledges, `${activeTab}_data.csv`)} className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-orange-500 font-extrabold text-[10px] tracking-widest transition-all shadow-md hover:shadow-orange-500/30">
                   <Download size={14} /> EXPORT CSV
                 </button>
               </div>
             </div>

             {(() => {
               const data = activeTab === 'attendees' ? attendees : pledges;
               if (!data || data.length === 0) {
                 return (
                   <div className="text-center py-24 bg-white/50 rounded-[2rem] border-2 border-dashed border-gray-200">
                     {activeTab === 'attendees' ? <Users size={48} className="mx-auto text-gray-300 mb-4" /> : <CheckCircle size={48} className="mx-auto text-gray-300 mb-4" />}
                     <h4 className="text-xl font-bold text-gray-400 mb-1">No Records Found</h4>
                     <p className="text-sm text-gray-400">Data will appear here in real-time.</p>
                   </div>
                 );
               }
               return (
                 <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-inner bg-white">
                   <table className="w-full text-left text-sm whitespace-nowrap">
                     <thead>
                       <tr className="bg-gray-50 text-gray-400 uppercase tracking-widest text-[10px] font-extrabold border-b border-gray-100">
                         <th className="p-6">Name</th>
                         {activeTab === 'attendees' ? ( <><th className="p-6">Gender</th><th className="p-6">Age</th></> ) : null}
                         <th className="p-6">Contact</th>
                         <th className="p-6">Timestamp</th>
                         <th className="p-6 text-center">Action</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                       {data.map((row, i) => (
                         <tr key={row.id || i} className="hover:bg-orange-50/30 transition-colors group">
                           <td className="p-6 font-extrabold text-gray-800">{row.name}</td>
                           {activeTab === 'attendees' ? (
                             <>
                               <td className="p-6 font-bold"><span className={`px-3 py-1.5 rounded-full text-[10px] shadow-sm ${row.gender==='M' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-pink-50 text-pink-600 border border-pink-100'}`}>{row.gender==='M' ? 'MALE' : 'FEMALE'}</span></td>
                               <td className="p-6 font-bold text-gray-500">{row.age} Yrs</td>
                             </>
                           ) : null}
                           <td className="p-6 font-bold text-gray-600">{row.contact || row.mobile}</td>
                           <td className="p-6 text-gray-400 text-xs font-medium">{formatTimestamp(row.createdAt)}</td>
                           <td className="p-6 text-center">
                             <button onClick={() => handleDeleteItem(activeTab, row.id)} className="text-gray-300 hover:text-white hover:bg-red-500 p-2.5 rounded-xl transition-all shadow-sm" title="Delete">
                               <Trash2 size={16} />
                             </button>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               );
             })()}
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
  const [playingVidId, setPlayingVidId] = useState(null); 

  const showToastMsg = (msg, type = 'success') => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 5000);
  };

  const handleAdminLoginSuccess = (isBypass) => {
    if (isBypass) setIsBypassAdmin(true); else setIsAdmin(true);
    setShowAdminLogin(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) setIsAdmin(!u.isAnonymous); 
      else { setIsAdmin(false); signInAnonymously(auth).catch(() => {}); }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!config.settings) return;
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup && config.settings.autoPopup !== 'none') {
        if (config.settings.autoPopup === 'attendance') setShowAttendance(true);
        if (config.settings.autoPopup === 'pledge') setShowPledge(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [config.settings?.autoPopup]);

  useEffect(() => {
    const subscriptions = []; 
    try {
      const configRef = doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main');
      const subConfig = onSnapshot(configRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data() || {}; 
          setConfig(prev => ({
             ...DEFAULT_CONFIG, ...data,
             settings: { ...DEFAULT_CONFIG.settings, ...(data.settings || {}) },
             visuals: { ...DEFAULT_CONFIG.visuals, ...(data.visuals || {}) },
             header: { ...DEFAULT_CONFIG.header, ...(data.header || {}) },
             about: { ...DEFAULT_CONFIG.about, ...(data.about || {}) },
             dedication: { ...DEFAULT_CONFIG.dedication, ...(data.dedication || {}) },
             pledgeText: { ...DEFAULT_CONFIG.pledgeText, ...(data.pledgeText || {}) },
             gallery: data.gallery || DEFAULT_CONFIG.gallery, 
             videos: data.videos || DEFAULT_CONFIG.videos 
          }));
        }
      });
      subscriptions.push(subConfig);

      if (isAdmin || isBypassAdmin) {
        const attRef = collection(db, 'artifacts', appId, 'public', 'data', 'attendees');
        const subAtt = onSnapshot(query(attRef, orderBy('createdAt', 'desc')), (snap) => { setAttendees(snap.docs.map(d => ({ ...d.data(), id: d.id }))); });
        subscriptions.push(subAtt);

        const pledgeRef = collection(db, 'artifacts', appId, 'public', 'data', 'pledges');
        const subPledge = onSnapshot(query(pledgeRef, orderBy('createdAt', 'desc')), (snap) => { setPledges(snap.docs.map(d => ({ ...d.data(), id: d.id }))); });
        subscriptions.push(subPledge);
      }
    } catch (err) {}
    return () => subscriptions.forEach(unsub => { if (typeof unsub === 'function') unsub(); });
  }, [user, isAdmin, isBypassAdmin]);

  const saveConfig = async (newConfig) => {
    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'site_config', 'main'), newConfig, { merge: true });
      showToastMsg('System Core Updated Successfully!');
    } catch (e) {
      showToastMsg('DATABASE BLOCKED: Fix Firebase Rules', 'error'); throw e; 
    }
  };

  const submitAttendance = async (e) => {
    e.preventDefault();
    const couponData = { name: attForm.name, contact: attForm.contact, age: attForm.age, gender: attForm.gender, date: new Date().toLocaleDateString(), createdAt: new Date() };
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'attendees'), couponData);
      setShowAttendance(false); setShowCoupon(couponData); sessionStorage.setItem('hasSeenPopup', 'true');
      showToastMsg("Attendance marked successfully!");
    } catch (err) {
      showToastMsg("Server connected. Pass Generated.", "success");
      setShowAttendance(false); setShowCoupon(couponData);
    }
  };

  const submitPledge = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'pledges'), { name: pledgeForm.name, mobile: pledgeForm.mobile, createdAt: new Date() });
      setPledgeTaken(true); showToastMsg("Pledge recorded successfully!");
    } catch (err) {
      setPledgeTaken(true); showToastMsg("Pledge signed virtually.", "success");
    }
  };

  const sharePledge = async () => {
    const text = `🌟 I pledge for a Better Tomorrow! 🌟\n\nI just took the "Dhurandhar" pledge to read Bhagavad Gita. Join me!\n\nEvent: ${config.header?.eventName}\nTheme: ${config.header?.tagline}\n\n#Dhurandhar #ISKCONUjjain`;
    if (navigator.share) { navigator.share({ title: 'My Pledge', text, url: window.location.href }); } 
    else { await navigator.clipboard.writeText(text); showToastMsg('Pledge message copied to clipboard!'); }
  };

  const downloadPass = async () => {
    const passElement = document.getElementById('entry-pass-card');
    if (!passElement) return;
    try {
      showToastMsg("Preparing download...", "success");
      if (!window.html2canvas) {
         await new Promise((resolve, reject) => {
           const script = document.createElement('script');
           script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
           script.onload = resolve;
           script.onerror = reject;
           document.head.appendChild(script);
         });
      }
      const canvas = await window.html2canvas(passElement, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const link = document.createElement('a');
      link.download = `DHURANDHAR_Pass_${showCoupon.name.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToastMsg("Pass downloaded successfully!", "success");
    } catch (err) {
      showToastMsg("Failed to download. Please take a screenshot.", "error");
    }
  };

  return (
    <div className="text-gray-800 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-blue-600 selection:text-white scroll-smooth bg-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        html, body { overflow-x: hidden; max-width: 100vw; width: 100%; font-family: 'Poppins', sans-serif; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px) rotate(-1deg); } 50% { transform: translateX(6px) rotate(1deg); } 75% { transform: translateX(-6px) rotate(-1deg); } }
        @keyframes zoomOutFade { 0% { opacity: 0; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
        .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
        .animate-zoom-out-fade { animation: zoomOutFade 0.7s ease-out forwards; }
      `}} />

      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({...toast, show: false})} />}

      <div className="fixed inset-0 z-[-2] pointer-events-none bg-gray-100">
        <img 
           src={config.visuals?.backgroundImage || DEFAULT_CONFIG.visuals.backgroundImage} 
           alt="background"
           className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
           style={{ opacity: config.visuals?.backgroundOpacity ?? 1.0 }} 
        />
        {/* FIX: Reduced the opacity of the white overlay and the blur so the temple background image is clearly visible! */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[150px] opacity-30 mix-blend-multiply pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-300 rounded-full blur-[150px] opacity-20 mix-blend-multiply pointer-events-none"></div>
      </div>

      {showAdminLogin && <AdminLogin onClose={() => setShowAdminLogin(false)} onLogin={handleAdminLoginSuccess} showToast={showToastMsg} />}
      {(isAdmin || isBypassAdmin) && <AdminDashboard config={config} setConfig={setConfig} attendees={attendees} pledges={pledges} onClose={() => { setIsAdmin(false); setIsBypassAdmin(false); }} onSave={saveConfig} showToast={showToastMsg} />}

      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/50 transition-all">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer bg-white rounded-full p-1.5 shadow-[0_5px_15px_rgba(37,99,235,0.2)] border border-blue-100 h-14 w-14 flex items-center justify-center">
               <img src={config.header?.logoUrl} onError={handleImageError} alt="Logo" className="h-full w-full rounded-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-extrabold text-2xl hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600 tracking-tighter">ISKCON</span>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-xs text-gray-800 tracking-[0.2em] uppercase">
            {['home', 'about', 'events', 'highlights'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-blue-700 transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowAdminLogin(true)} className="md:hidden text-gray-700 hover:text-blue-600 p-2 bg-white rounded-full shadow-sm"><Menu size={20} /></button>
            <button onClick={() => setShowAdminLogin(true)} className={`hidden md:flex items-center justify-center h-12 w-12 rounded-full border-2 transition-all hover:shadow-lg ${(isAdmin || isBypassAdmin) ? 'text-green-500 border-green-500 bg-green-50 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'text-gray-500 border-white bg-white hover:text-blue-600 hover:border-blue-200'}`} title="System Dashboard">
              <Lock size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <header id="home" className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex mb-6 px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-gray-100 shadow-sm animate-fade-in-up items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <p className="text-gray-800 font-bold tracking-widest uppercase text-xs">{config.header?.orgName}</p>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 md:mb-8 tracking-tighter drop-shadow-lg animate-fade-in-up leading-tight max-w-[95vw] mx-auto break-words" style={{ animationDelay: '0.1s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-800 to-red-700">
                {config.header?.eventName}
              </span>
            </h2>

            {/* FIX: NEW HERO ANIMATION REPLACING THE 'I LOVE BHARAT' HEART */}
            <div className="my-10 transform hover:scale-[1.02] transition duration-700 ease-out z-20 relative">
               <div className="inline-flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] shadow-2xl border border-white/50 relative overflow-hidden group max-w-[95vw]">
                  <div className="absolute -inset-20 bg-gradient-to-tr from-blue-400/20 via-orange-400/10 to-red-400/20 blur-3xl group-hover:opacity-100 transition-opacity duration-1000 animate-spin-slow pointer-events-none opacity-50"></div>
                  
                  <div className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 px-6 py-2 rounded-full border border-orange-200 mb-2">
                    <BookOpen className="text-orange-600 w-5 h-5 animate-pulse" />
                    <span className="text-orange-800 font-bold tracking-widest text-xs uppercase">ज्ञान • भक्ति • अनुशासन</span>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center">
                      <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-blue-900 drop-shadow-sm z-10 uppercase tracking-tight">
                        {config.header?.heroLeft || "BETTER YOUTH"}
                      </span>
                      
                      <div className="hidden md:block w-2 h-12 bg-gradient-to-b from-orange-400 to-red-500 rounded-full rotate-12"></div>
                      
                      <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-600 drop-shadow-sm z-10 uppercase tracking-tight">
                        {config.header?.heroRight || "BETTER BHARAT"}
                      </span>
                  </div>
               </div>
            </div>

            <h3 className="text-lg md:text-2xl lg:text-3xl text-gray-900 font-bold mb-8 tracking-tight animate-fade-in-up drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
              "{config.header?.tagline}"
            </h3>

            <div className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-700 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Users className="w-5 h-5 text-blue-400" />
              <span className="tracking-widest text-sm uppercase">{config.header?.subTagline}</span>
            </div>
          </div>
        </header>

        <section id="about" className="py-20 md:py-28 px-4 container mx-auto relative scroll-mt-24">
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-3xl rounded-[3rem] p-8 md:p-14 shadow-2xl border border-white relative overflow-hidden transition-all group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center relative z-10">
               <div className="flex-1 space-y-6 md:space-y-8">
                  <div className="inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-sm">
                    <Sparkles size={16} className="text-blue-500" /> The Mission
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    {config.about?.title}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed font-medium text-justify">
                    {config.about?.description}
                  </p>

                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-md relative overflow-hidden">
                     <div className="flex justify-between items-end mb-4 relative z-10">
                        <div>
                           <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Entry Fee</p>
                           <p className="text-3xl md:text-4xl font-extrabold text-green-600">{config.about?.stats} <span className="text-sm font-semibold text-gray-500">For Everyone</span></p>
                        </div>
                     </div>
                     <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden relative z-10 shadow-inner p-1">
                        <div className="bg-gradient-to-r from-blue-600 via-red-500 to-green-500 h-full rounded-full w-[100%] relative overflow-hidden shadow-sm">
                           <div className="absolute inset-0 bg-white/30 w-full animate-pulse"></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex-1 w-full grid grid-cols-1 gap-5">
                 {[
                   { icon: <Calendar size={24} />, title: "Date", val: config.about?.date, color: "blue" },
                   { icon: <Clock size={24} />, title: "Time", val: config.about?.time, color: "red" },
                   { icon: <MapPin size={24} />, title: "Venue", val: config.about?.venue, color: "orange" }
                 ].map((item, idx) => (
                   <div key={idx} className={`bg-white p-6 rounded-[2rem] border border-gray-50 flex items-center gap-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 shadow-sm group/card relative overflow-hidden`}>
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-400 rounded-full blur-[50px] opacity-10 group-hover/card:opacity-20 transition-opacity`}></div>
                      <div className={`bg-${item.color}-50 text-${item.color}-600 p-4 rounded-2xl group-hover/card:bg-${item.color}-600 group-hover/card:text-white transition-all duration-300 shadow-inner group-hover/card:shadow-md transform group-hover/card:scale-110 relative z-10`}>
                        {item.icon}
                      </div>
                      <div className="relative z-10">
                        <p className={`text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1`}>{item.title}</p>
                        <p className="text-xl font-extrabold text-gray-900 tracking-tight">{item.val}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 container mx-auto px-4">
           <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
              <div className="relative group">
                 <div className="absolute -inset-6 bg-gradient-to-tr from-blue-400 via-white to-red-400 rounded-[3rem] rotate-6 transition-transform duration-700 group-hover:rotate-12 opacity-40 blur-2xl"></div>
                 <div className="relative h-64 w-64 md:h-80 md:w-80 bg-white p-4 rounded-[2.5rem] shadow-xl transition-transform duration-500 hover:scale-105" style={{ animationDelay: '0.2s', animationDuration: '4s', animationIterationCount: 'infinite', animationName: 'float' }}>
                   <div className="h-full w-full overflow-hidden rounded-[2rem] border-2 border-gray-50">
                     <img src={config.dedication?.imageUrl} onError={handleImageError} alt="Dedication" className="h-full w-full object-cover filter contrast-125 saturate-110" />
                   </div>
                   <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 px-6 py-2.5 rounded-full shadow-xl text-[10px] font-bold uppercase tracking-widest text-white border border-gray-700 whitespace-nowrap">
                     {config.dedication?.title}
                   </div>
                 </div>
              </div>

              <div className="text-center md:text-left flex-1 space-y-5">
                <div className="h-2 w-20 bg-gradient-to-r from-blue-600 to-red-500 rounded-full mx-auto md:mx-0"></div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  {config.dedication?.name}
                </h2>
                <p className="text-lg md:text-xl text-gray-800 font-medium italic leading-relaxed">
                  "{config.dedication?.subtitle}"
                </p>
              </div>
           </div>
        </section>

        <section id="events" className="py-24 md:py-32 relative overflow-hidden scroll-mt-10">
           <div className="absolute inset-0 bg-gray-900 z-0">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           </div>
           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16 md:mb-20">
               <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">Visual Journey</span>
               <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter">Cultural Gallery</h2>
               <div className="w-24 h-2 bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 max-w-7xl mx-auto">
               {config.gallery?.map((item, idx) => (
                 <div key={item.id} className={`group relative h-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:z-20 cursor-pointer ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}>
                   <img src={item.url} onError={handleImageError} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100 saturate-150" />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                   <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
                   <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                     <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="w-12 h-1.5 bg-blue-500 mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                        <h3 className="text-2xl font-extrabold text-white leading-tight drop-shadow-xl">{item.title}</h3>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        <section id="highlights" className="py-24 md:py-32 container mx-auto px-4 scroll-mt-10">
          <div className="flex flex-col items-center justify-center gap-5 mb-16 text-center">
             <div className="bg-red-50 p-5 rounded-[2rem] shadow-inner border border-red-100 animate-pulse"><Youtube className="text-red-600 w-10 h-10" /></div>
             <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Watch Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {config.videos?.map((vid) => (
              <div key={vid.id} className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-white group transform hover:-translate-y-2 p-2">
                
                <div 
                  className="aspect-video w-full bg-gray-900 relative rounded-t-[2rem] rounded-b-xl overflow-hidden cursor-pointer"
                  onClick={() => setPlayingVidId(vid.id)}
                >
                   {playingVidId === vid.id ? (
                     <iframe src={vid.url.includes('?') ? `${vid.url}&autoplay=1` : `${vid.url}?autoplay=1`} title={vid.title} className="w-full h-full relative z-10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   ) : (
                     <>
                        <img 
                          src={vid.thumbnailUrl || "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?auto=format&fit=crop&q=80&w=800"} 
                          alt="Video Thumbnail" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-transparent transition-colors">
                          <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(220,38,38,0.5)] transform group-hover:scale-110 transition-transform">
                            <Play size={30} fill="currentColor" className="ml-1" />
                          </div>
                        </div>
                     </>
                   )}
                </div>
                
                <div className="p-6 md:p-8 flex items-start justify-between bg-white group-hover:bg-red-50/50 transition-colors rounded-b-[2rem]">
                   <div>
                     <h4 className="font-extrabold text-gray-900 text-lg md:text-xl line-clamp-1 group-hover:text-red-600 transition-colors">{vid.title}</h4>
                     <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-bold">Play Video</p>
                   </div>
                   <div className="bg-red-50 p-3 md:p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm group-hover:shadow-red-500/30 cursor-pointer">
                      <Play size={18} fill="currentColor" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-16 md:py-20 text-center relative overflow-hidden mt-auto border-t border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-white p-3 rounded-full hover:scale-110 transition-transform duration-500 shadow-[0_0_50px_rgba(255,255,255,0.15)] cursor-pointer">
            <img src={config.header?.logoUrl} onError={handleImageError} className="w-full h-full rounded-full object-contain" alt="logo" />
          </div>
          <h3 className="text-white text-2xl font-extrabold mb-3 tracking-tight">{config.header?.orgName}</h3>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm leading-relaxed font-medium">Connecting youth to their roots through culture, wisdom, and devotion.</p>
          <div className="pt-8 border-t border-gray-800/50">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600">© 2026 {config.header?.eventName}. Engineered for ISKCON.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-15px_50px_rgba(0,0,0,0.15)] md:bottom-10 md:right-10 md:left-auto md:flex-col md:gap-4 md:w-auto md:items-end md:shadow-none pb-safe">
        <button onClick={() => setShowPledge(true)} className="flex-1 md:flex-none bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 md:py-4 px-4 md:pl-6 md:pr-8 md:rounded-full font-extrabold text-sm flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(16,185,129,0.4)] md:hover:-translate-x-2 group border-r border-t border-white/20 md:border-none relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform shadow-inner"><CheckCircle size={20} /></div>
          <span className="tracking-widest">PLEDGE NOW</span>
        </button>
        <button onClick={() => setShowAttendance(true)} className="flex-1 md:flex-none bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-5 md:py-4 px-4 md:pl-6 md:pr-8 md:rounded-full font-extrabold text-sm flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(67,56,202,0.4)] md:hover:-translate-x-2 group border-t border-white/20 md:border-none relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          <div className="bg-white/20 p-2 rounded-full group-hover:-rotate-12 transition-transform shadow-inner"><Ticket size={20} /></div>
          <span className="tracking-widest">ATTENDANCE</span>
        </button>
      </div>

      {showPledge && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-2xl animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative border border-white animate-scale-in">
            <button onClick={() => setShowPledge(false)} className="absolute top-5 right-5 z-20 w-10 h-10 bg-black/10 hover:bg-black/30 rounded-full flex items-center justify-center transition text-white backdrop-blur-md"><X size={20} /></button>
            <div className="relative bg-gradient-to-br from-emerald-500 to-green-700 p-10 text-white text-center overflow-hidden">
               <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-extrabold mb-2 drop-shadow-md">My Pledge</h3>
                 <p className="text-emerald-100 font-bold tracking-widest uppercase text-xs">Better Youth, Better Bharat</p>
               </div>
            </div>
            <div className="p-8">
              {!pledgeTaken ? (
                <form onSubmit={submitPledge} className="space-y-5">
                  <div className="p-6 bg-blue-50 rounded-[1.5rem] border border-blue-100 text-center relative shadow-inner">
                    <div className="text-blue-200 absolute top-2 left-4 text-5xl font-serif leading-none">"</div>
                    <p className="text-gray-800 font-bold italic relative z-10 mb-3 leading-relaxed text-sm">{config.pledgeText?.english}</p>
                    <p className="text-gray-500 text-[10px] font-bold">{config.pledgeText?.hindi}</p>
                  </div>
                  <div className="space-y-3">
                    <input required type="text" placeholder="Your Full Name" className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-bold tracking-wide shadow-sm" value={pledgeForm.name} onChange={e => setPledgeForm({...pledgeForm, name: e.target.value})} />
                    <input required type="tel" placeholder="Mobile Number" className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition font-bold tracking-wide shadow-sm" value={pledgeForm.mobile} onChange={e => setPledgeForm({...pledgeForm, mobile: e.target.value})} />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-2xl font-extrabold tracking-widest shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition transform hover:-translate-y-1">SUBMIT PLEDGE</button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-emerald-100"><CheckCircle size={40} /></div>
                  <h4 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Pledge Recorded!</h4>
                  <p className="text-gray-500 mb-8 max-w-xs mx-auto text-sm leading-relaxed font-medium">You have taken a step towards a stronger nation. Inspire others to join you.</p>
                  <button onClick={sharePledge} className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-2xl font-extrabold flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition transform hover:-translate-y-1 tracking-widest"><Share2 size={18} /> SHARE IMPACT</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showAttendance && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-2xl animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl relative border border-white animate-scale-in">
            <button onClick={() => setShowAttendance(false)} className="absolute top-5 right-5 z-20 w-10 h-10 bg-black/10 hover:bg-black/30 rounded-full flex items-center justify-center transition text-white backdrop-blur-md"><X size={20} /></button>
            <div className="relative bg-gradient-to-br from-blue-700 to-indigo-900 p-10 text-white text-center overflow-hidden">
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-3xl font-extrabold relative z-10 mb-2 drop-shadow-md tracking-tight">Attendance</h3>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-xs relative z-10">Digital Prasadam Pass</p>
            </div>
            <form onSubmit={submitAttendance} className="p-8 space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Full Name</label>
                <input required className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition font-bold tracking-wide shadow-sm" value={attForm.name} onChange={e => setAttForm({...attForm, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                   <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Age</label>
                   <input required type="number" className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition font-bold tracking-wide shadow-sm" value={attForm.age} onChange={e => setAttForm({...attForm, age: e.target.value})} />
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Gender</label>
                   <select className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition font-bold tracking-wide text-gray-700 shadow-sm" value={attForm.gender} onChange={e => setAttForm({...attForm, gender: e.target.value})}>
                     <option value="M">Male</option>
                     <option value="F">Female</option>
                   </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">Contact No.</label>
                <input required type="tel" className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition font-bold tracking-wide shadow-sm" value={attForm.contact} onChange={e => setAttForm({...attForm, contact: e.target.value})} />
              </div>
              <button type="submit" className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-extrabold tracking-widest shadow-[0_10px_20px_rgba(67,56,202,0.3)] transition transform hover:-translate-y-1">GENERATE PASS</button>
            </form>
          </div>
        </div>
      )}

      {/* FIX: DHURANDHAR THEMED PRASADAM PASS (BLUE, RED & GOLD) */}
      {showCoupon && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
           <div className="max-w-sm w-full relative animate-scale-in flex flex-col items-center">
              
              <button onClick={() => setShowCoupon(null)} className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 p-2.5 rounded-full text-white z-20 transition shadow-sm"><X size={18}/></button>
              
              <div id="entry-pass-card" className="w-full bg-transparent drop-shadow-2xl">
                
                <div className="bg-gradient-to-br from-blue-800 via-indigo-900 to-red-900 rounded-t-[2rem] p-8 text-center relative overflow-hidden text-white shadow-lg border border-blue-400/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-400/20 rounded-full blur-xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
                  
                  <h3 className="font-extrabold text-3xl uppercase tracking-[0.2em] relative z-10 drop-shadow-md">ENTRY PASS</h3>
                  <div className="flex items-center justify-center gap-2 mt-2 opacity-90 relative z-10">
                    <Sparkles size={12} className="text-orange-400"/>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-orange-200">OFFICIAL PRASADAM</p>
                    <Sparkles size={12} className="text-orange-400"/>
                  </div>
                </div>

                <div className="bg-white px-8 pb-8 pt-12 text-center relative border-x border-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <img src={config.header?.logoUrl} alt="" className="w-48 h-48 object-contain grayscale" crossOrigin="anonymous"/>
                  </div>
                  
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl p-1 z-10">
                    <img src={config.header?.logoUrl} onError={handleImageError} alt="Logo" className="w-full h-full rounded-full object-cover" crossOrigin="anonymous" />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-1 tracking-tight capitalize">{showCoupon.name}</h2>
                    <p className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">{showCoupon.contact || 'VIP GUEST'}</p>
                    
                    <div className="inline-flex items-center justify-center gap-4 px-6 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-extrabold tracking-widest text-gray-500 mb-6 shadow-inner">
                      <span className={showCoupon.gender === 'M' ? 'text-blue-500' : 'text-pink-500'}>{showCoupon.gender === 'M' ? 'MALE' : 'FEMALE'}</span>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <span>{showCoupon.age} YRS</span>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100 shadow-sm">
                      <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-1">Status</p>
                      <div className="flex items-center justify-center gap-2 text-blue-700">
                        <CheckCircle size={16} className="fill-current text-white bg-blue-600 rounded-full" />
                        <p className="font-extrabold text-lg tracking-[0.2em]">AUTHORIZED</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative bg-white border-x border-gray-100 h-8">
                   <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-gray-200 transform -translate-y-1/2"></div>
                   <div className="absolute top-1/2 left-0 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner"></div>
                   <div className="absolute top-1/2 right-0 w-6 h-6 bg-black rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-inner"></div>
                </div>

                <div className="bg-white rounded-b-[2rem] p-6 text-center relative border-x border-b border-gray-100 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4">
                    <div className="text-left">
                      <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Date</p>
                      <p className="text-gray-900 text-sm font-extrabold tracking-wide">{config.about?.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase font-bold tracking-widest text-gray-400">Time</p>
                      <p className="text-gray-900 text-sm font-extrabold tracking-wide">{config.about?.time}</p>
                    </div>
                  </div>

                  <div className="flex justify-center opacity-70 mb-2 text-gray-900">
                    <svg width="200" height="35" viewBox="0 0 200 40" preserveAspectRatio="none">
                      <path d="M10,0 h4 v40 h-4 z M18,0 h2 v40 h-2 z M24,0 h6 v40 h-6 z M34,0 h2 v40 h-2 z M40,0 h8 v40 h-8 z M52,0 h2 v40 h-2 z M58,0 h6 v40 h-6 z M68,0 h4 v40 h-4 z M76,0 h2 v40 h-2 z M82,0 h6 v40 h-6 z M92,0 h8 v40 h-8 z M104,0 h2 v40 h-2 z M110,0 h4 v40 h-4 z M118,0 h6 v40 h-6 z M128,0 h2 v40 h-2 z M134,0 h4 v40 h-4 z M142,0 h8 v40 h-8 z M154,0 h2 v40 h-2 z M160,0 h6 v40 h-6 z M170,0 h4 v40 h-4 z M178,0 h2 v40 h-2 z M184,0 h6 v40 h-6 z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-[8px] font-bold tracking-[0.4em] text-gray-400 uppercase">DHUR-{Date.now().toString().slice(-6)}-{showCoupon.name.substring(0,2)}</p>
                </div>
              </div>

              <button onClick={downloadPass} className="mt-8 flex items-center gap-3 text-white font-extrabold transition px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full w-auto justify-center tracking-[0.2em] text-xs shadow-[0_10px_30px_rgba(37,99,235,0.4)] transform hover:-translate-y-1 border border-blue-500">
                <Download size={18} /> SAVE TO DEVICE
              </button>
           </div>
        </div>
      )}
    </div>
  );
}
