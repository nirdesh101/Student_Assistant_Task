import React from "react";
import NavBar from "./Components/Basics/NavBar";
import News from "./Components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <NavBar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={<News key="general" category="general" />}
            />
            <Route
              path="/Entertainment"
              element={<News key="entertainment" category="entertainment" />}
            />
            <Route
              path="/Technology"
              element={<News key="technology" category="technology" />}
            />
            <Route
              path="/Sports"
              element={<News key="sports" category="sports" />}
            />
            <Route
              path="/Business"
              element={<News key="business" category="business" />}
            />
            <Route
              path="/Health"
              element={<News key="health" category="health" />}
            />
            <Route
              path="/Science"
              element={<News key="science" category="science" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
