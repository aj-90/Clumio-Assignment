import './App.css';
import Navbar from "./components/Navbar"
import Trending from "./pages/Trending"
import Toprated from "./pages/Toprated"
import Popular from "./pages/Popular"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


function App() {
  return (
<QueryClientProvider client={queryClient}>
<Router>
<Navbar />
 <Routes>
 <Route path="/trending" element ={<Trending />} />
 <Route path="/popular" element={<Popular />} />
 <Route exact path="/" element={<Toprated />} />
</Routes>
</Router>
</QueryClientProvider>
  );
}

export default App;
