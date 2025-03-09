import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Auth = React.lazy(() => import("./components/Auth"));
const Footer = React.lazy(() => import("./pages/Footer/Footer"));
const UsersDocs = React.lazy(() => import("./pages/Users/Users"));
const PostsDocs = React.lazy(() => import("./pages/Posts/Posts"));
const QuotesDocs = React.lazy(() => import("./pages/Quotes/Quotes"));
const ProductsDocs = React.lazy(() => import("./pages/Product/Product"));
const ApiKeyGenerator = React.lazy(() => import("./components/Api"));
const AppRouter = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Api" element={<ApiKeyGenerator />} />
            <Route path="/Docs" element={<UsersDocs />} />
            <Route path="/Users" element={<UsersDocs />} />
            <Route path="/Quotes" element={<QuotesDocs />} />
            <Route path="/Posts" element={<PostsDocs />} />
            <Route path="/Product" element={<ProductsDocs />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

export default AppRouter;
