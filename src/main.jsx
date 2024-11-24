import { StrictMode, Profiler } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@material-tailwind/react";
import './index.css';
import App from './App.jsx';

// Performance callback to log render timings
const onRenderCallback = (
  id, // Profiler ID
  phase, // "mount" or "update"
  actualDuration, // Time spent rendering the update
  baseDuration, // Estimated time without memoization
  startTime, // Start time of rendering
  commitTime, // Time when updates are committed
  interactions // Interactions that triggered the update
) => {
  console.log(`Profiler [${id}] - Phase: ${phase}`);
  console.log(`Actual duration: ${actualDuration}`);
  console.log(`Base duration: ${baseDuration}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
  console.log(`Interactions:`, interactions);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
     
      <Profiler id="AppProfiler" onRender={onRenderCallback}>
        <App />
      </Profiler>
    </ThemeProvider>
  </StrictMode>
);
