import './styles.css'
import Folder from './Folder';
import { files } from './data'
import Preview from './Preview';

function App() {
  return (
    <div className='container'  >
       <div className='sidebar'>
            <Folder files={files} />

       </div>

       <div className='previewContainer'>
        <div> Check out my
          <Preview url="https://twitter.com/SamuelM37071027" >
           <span> Twitter </span>
          </Preview>  
           Page
        </div>
        <div> Check out my <span> Github </span> Page</div>
        <div> Check out my <span> Instagram </span> Page</div>
        
       </div>
    </div>
  );
}

export default App;
