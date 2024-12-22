import { BrowserRouter as Router } from "react-router-dom"; // Import Router components

import { WebRouter } from "./Routes/WebRouter";
import Footer from "./Template/Footer";
import Header from "./Template/Header";

function App() {
  return (
<Router>
      <Header /> {/* Navigation bar */}

      <WebRouter />

      <Footer />
      
    </Router>
    
  )
}

export default App
