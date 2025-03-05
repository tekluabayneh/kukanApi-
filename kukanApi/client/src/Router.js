import { Routes, Route, Link, useParams } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
