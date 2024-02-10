import { useState ,useRef} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

 const roomInputRef = useRef(null)
  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div >
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label  >Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat Room</button>
        </div>
      )}
    </div>
  );
}

export default App;
