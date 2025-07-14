import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRouter from "./router/MainRouter";
import CodeProvider from "./context/CodeContext";


const App = () => {
  return (
    <BrowserRouter>
      <CodeProvider>
        <div className="min-h-screen bg-gray-950 text-white">
          <Navbar />
          <MainRouter />
        </div>
      </CodeProvider>
    </BrowserRouter>
  );
};

export default App;
