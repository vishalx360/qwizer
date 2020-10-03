import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./global.css";

// context provider:imports
import { AuthProvider } from "./AuthContext";
// High Order Router:imports
// import ProtectedRoute from s'./protectedRoute'

// component:imports

// pages
import homePage from "./components/pages/homePage";
import quizPage from "./components/pages/quizPage";
import { hostPage } from "./components/pages/hostPage";
import { roomPage } from "./components/pages/roomPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <main>
          <Route exact path="/" component={homePage} />
          <Route exact path="/quiz" component={quizPage} />
          <Route exact path="/host" component={hostPage} />
          <Route exact path="/room" component={roomPage} />
          {/* <ProtectedRoute exact path="/myaccount" component={MyAccount} /> */}
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
