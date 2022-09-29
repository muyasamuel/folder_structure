import './styles.css'
import Folder from './Folder';
import { files } from './data'

function App() {
  return (
    <div className='container'  >
       <div className='sidebar'>
            <Folder files={files} />

       </div>

       <div className='previewContainer'>
        
       </div>
    </div>
  );
}

export default App;
