import { useState } from 'react';
import Dashboard from './pages/Dashboard.jsx';
import BottomNav from './components/BottomNav.jsx';
import ScanSheet from './components/ScanSheet.jsx';

export default function App() {
  const [tab, setTab] = useState('home');
  const [sheet, setSheet] = useState({ open: false, type: 'expense', scan: false });

  const openSheet = (type = 'expense', scan = false) => setSheet({ open: true, type, scan });
  const closeSheet = () => setSheet((s) => ({ ...s, open: false }));

  return (
    <>
      {tab === 'home' ? (
        <Dashboard onAdd={openSheet} />
      ) : (
        <div className="grid min-h-screen place-items-center text-slate-500 dark:text-slate-400">
          Halaman {tab} segera hadir
        </div>
      )}
      <BottomNav active={tab} onChange={setTab} onCatat={() => openSheet('expense', false)} />
      <ScanSheet open={sheet.open} defaultType={sheet.type} autoScan={sheet.scan} onClose={closeSheet} onSaved={() => {}} />
    </>
  );
}
