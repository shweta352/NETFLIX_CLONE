import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";
import Header from './Header';
import { AuthProvider } from "../context/AuthContext"; // Import AuthProvider
import { MovieProvider } from '../context/MovieContext';
import { SearchProvider } from '../context/SearchContext';
import MovieDialog from "../components/MovieDialog";

function Body() {
  return (
    <AuthProvider>
      <MovieProvider>
        <SearchProvider>
        <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/browse" element={<Browse />} />

    </Routes>
    <MovieDialog />
  </BrowserRouter>
        </SearchProvider>
     </MovieProvider>
  </AuthProvider>
  )
}

export default Body
