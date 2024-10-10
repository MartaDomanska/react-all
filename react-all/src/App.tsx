import { useState } from 'react';
import './App.css';
import { Amount } from './components/Amount/Amount';
import { TaxNumber } from './components/TaxNumber/TaxNumber';
// import { UserList } from './components/UserList/UserList';

function App() {
  const [amount, setAmount] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [showTaxNumber, setShowTaxNumber] = useState(false);


  return (
    <div className="donate">
      <Amount value={amount} onChange={(e) => setAmount(e.target.value)} />
      <TaxNumber
        showTaxNumber={showTaxNumber}
        value={taxNumber}
        onChange={(e) => setTaxNumber(e.target.value)}
        onShowTaxNumber={(show) => {
          setShowTaxNumber(show);
        }}
      />
      {/* <UserList /> */}
    </div>
  );
}

export default App;
