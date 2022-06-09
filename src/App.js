import Home from "./pages/home/Home";
import "./App.css";
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
import NoMatch from "./components/noMatch/NoMatch";
import Example from "./components/Example";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>} />
        <Route exact path="dashboard" element={<Home/>} />
        <Route exact path="transactions" element={<Transactions/>} />
        <Route exact path="entites" element={<Entites/>} />
        <Route exact path="health" element={<Health/>} />
        <Route exact path="settings" element={<Settings/>} />
        <Route exact path="practice" element={<Example/>} />
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}