import { useEffect, useState } from 'react';
import './App.css';
import { WFooter, WHeader, WMain } from './Elements';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesconfig from './particlesconfig.json';

function App() {
  const [, setLoaded] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setLoaded(true);
    })
  }, [])

  console.log(particlesconfig);

  return (
    <>
      <Particles id="background" options={particlesconfig} />
      <div className="App">
        <WHeader />
        <WMain />
        <WFooter />
      </div>
    </>
  );
}

export default App;
