import './App.css';
import ProfilePhoto from "./component/Profile/ProfilePhoto"
import FullName from "./component/Profile/FullName"
import Address from "./component/Profile/Address"
function App() {
 
  return (
    <div className="App">
      <Address/>
    <FullName/>
    <ProfilePhoto/>
    </div>
  );
}


export default App;
