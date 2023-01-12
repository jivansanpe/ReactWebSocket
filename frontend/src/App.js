import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ChatPage from "./pages/chat/ChatPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat/:username" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
