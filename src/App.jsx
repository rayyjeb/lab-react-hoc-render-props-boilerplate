import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import PropImage from './components/PropImage';
import PropPost from './components/PropPost';


function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <h1>Some Blogs using HOC</h1>
      <LikePost/>
      <LikeImage/>
      <br /><br /><br />
      <h1>Some Blogs using Render Props</h1>
      <PropPost/>
      <PropImage/>
    </div>
  );
}

export default App;