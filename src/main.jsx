import React from 'react'
import ReactDOM from 'react-dom/client'

// --- INSTRUCTIONS FOR LOCAL VS CODE ---
// When you save this file to your computer, UNCOMMENT the following two lines:
// import App from './App.jsx'
// import './index.css'

// And replace <LocalSetupInfo /> with <App /> in the render method below.
// --------------------------------------

const LocalSetupInfo = () => (
  <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
    <h1 style={{ color: '#ea580c' }}>Local Entry Point</h1>
    <p>This <code>main.jsx</code> file connects your App to the HTML.</p>
    <p>It is failing in this preview window because it cannot "see" the other files (App.jsx) across tabs.</p>
    <hr style={{ margin: '1rem 0', borderColor: '#ddd' }} />
    <h3>To view the website design here:</h3>
    <p>👉 Please switch to the <strong>App.jsx</strong> tab.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Use <App /> locally. Using LocalSetupInfo here to prevent preview errors. */}
    <LocalSetupInfo />
  </React.StrictMode>,
)