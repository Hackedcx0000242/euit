import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Page from "./components/Error";
import Restaurant from "./components/Rest";
const app = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search/:meal_type/:name" element={ <Search/> } />
      <Route path = "*" element ={<Page/>}/>
      <Route path="/restro/:id" element={<Restaurant/>}/>
    </Routes>
    </>)
}
export default app;