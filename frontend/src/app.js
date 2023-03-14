import { useState } from "react";

import Auth from './pages/Auth'
import Chat from './pages/Chat'

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <Auth onAuth={(user) => setUser(user)} />;
  } else {
    return <Chat user={user} />;
  }
}

export default App;
