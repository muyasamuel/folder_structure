
import './App.css';
import Folder from './Folder';
import { files } from './data'

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
            <Folder files={files} />

       </div>
    </div>
  );
}

export default App;
