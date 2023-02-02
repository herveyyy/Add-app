import React from "react";
import Addsome from "./components/Addsome";
import ContentList from "./components/ContentList";
import Title from "./components/Title";
export default function App() {
  return (
  
 <div className="py-10">
  <Title />
  <div className="py-8"></div>
<Addsome />
 <div className="py-10"></div>
 <ContentList />
 </div>
  )
}