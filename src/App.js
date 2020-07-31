import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

// context:imports
import { AuthProvider } from './AuthContext'
// High Order Router:imports
// import ProtectedRoute from s'./protectedRoute'

// component:imports


// pages:imports
import homePage from './pages/homePage'
import quizPage from './pages/quizPage'

function App() {
  return (
    <AuthProvider>
      <Router>
        <main className="flex flex-col items-center h-screen bg-gray-100 text-gray-900">

          <Route exact path="/" component={homePage} />
          <Route exact path="/quiz" component={quizPage} />

          {/* <ProtectedRoute exact path="/myaccount" component={MyAccount} /> */}


        </main>
      </Router>
    </AuthProvider>

  );
}

export default App;
