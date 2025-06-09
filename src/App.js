import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LayoutProvider} from './context/LayoutContext';
import Layout from './components/Layout';
import PostCodePage from "./pages/PostCodePage";
import WasteTypePage from "./pages/WasteTypePage";
import SelectSkipPage from "./pages/SelectSkipPage";
import PermitCheckPage from "./pages/PermitCheckPage";
import ChooseDatePage from "./pages/ChooseDatePage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <ThemeProvider>
      <Router>
        <LayoutProvider>
          <Layout selectedSkip={selectedSkip}>
            <Routes>
              <Route path="/post-code" element={<PostCodePage />} />
              <Route path="/waste-type" element={<WasteTypePage />} />
              <Route path="/" element={<SelectSkipPage onSkipSelected={setSelectedSkip} />} />
              <Route path="/permit-check" element={<PermitCheckPage />} />
              <Route path="/choose-date" element={<ChooseDatePage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </Layout>
        </LayoutProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
