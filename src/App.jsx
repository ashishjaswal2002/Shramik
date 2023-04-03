import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

import { WorkerLogin } from "./pages/WorkerLogin";
import { Contact } from "./pages/Contact";

import { HeaderSection } from "./shared/HeaderSection";
import { CategoriesSection } from "./components/CategoriesSection";

function App() {
  return (
    <BrowserRouter>
      <HeaderSection />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="workerlogin" element={<WorkerLogin />} />
          <Route path="contact" element={<Contact />} />
          <Route path="categories" element={<CategoriesSection />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
