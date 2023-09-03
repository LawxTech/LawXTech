// App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  )
}

export default App;
