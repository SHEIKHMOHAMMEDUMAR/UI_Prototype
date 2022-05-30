import Home from "./pages/home/Home";
import "./app.css";
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Transactions from "./pages/transactions/Transactions";
import Entites from "./pages/entites/Entites";
import Health from "./pages/health/Health";
import Settings from "./pages/settings/Settings";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>} />
        <Route path="dashboard" element={<Home/>} />
        <Route path="transactions" element={<Transactions/>} />
        <Route path="entites" element={<Entites/>} />
        <Route path="health" element={<Health/>} />
        <Route path="settings" element={<Settings/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}