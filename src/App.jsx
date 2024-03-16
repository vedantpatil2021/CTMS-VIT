import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth} from "@/layouts";
import { MainPage } from "./layouts/mainpage";
import Error from "./Error";
import Chatbot from "./widgets/chatbot/chatbot";

const Routing = () => {
  return (
      <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  )
}

function App() {
  return (
   <>
   <Routing />
   <Chatbot/>
   </>
  );
}

export default App;