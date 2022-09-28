
import './App.css';
import Folder from './Folder';

function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#18181b' }} >
       <div style={{
            width: '20%',
            backgroundColor: '#27272a',
            height: '100%',
            overflowX: 'scroll',
            padding: '10px',
          }}>
            <Folder />

       </div>
    </div>
  );
}

export default App;
