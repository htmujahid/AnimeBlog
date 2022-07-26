import * as React from "react";
import { BrowserRouter} from "react-router-dom";
import "./App.css";
import ClientRoute from './routes/Client'
import Navbar from "./components/Navbar/Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <ClientRoute />
      </BrowserRouter>
    </div>
  );
}
