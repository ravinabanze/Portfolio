import React from 'react';
import Logo from '../Logo.png';

const KnowHerLogoPage: React.FC = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#18181b' }}>
  <img src={Logo} alt="KnowHer Logo" style={{ width: 160, height: 160, objectFit: 'contain' }} />
  </div>
);

export default KnowHerLogoPage;
