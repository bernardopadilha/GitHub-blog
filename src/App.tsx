import { Header } from "./components/Header";
import { Published } from "./components/Published";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[864px]">
          <Sidebar />
          <Published />
        </div>
      </div>
   </div>
  )
}