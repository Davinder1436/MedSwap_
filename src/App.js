import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));
const Signup = lazy(() => import("./Auth/Signup"));
const Product = lazy(() => import("./Pages/Product"));
const Camera_Option = lazy(() => import("./Pages/components/Camera_Option"));
const File_option = lazy(() => import("./Pages/components/File_option"));
const Search = lazy(() => import("./Pages/components/Search"));
const Db = lazy(() => import("./database/db"));
const Description = lazy(() => import("./components/Description/Description"));
function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Db />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/camera" element={<Camera_Option />} />
            <Route path="/product/file" element={<File_option />} />
            <Route path="/product/search" element={<Search />} />
            <Route path="/description" element={<Description />} />
          </Routes>
        </BrowserRouter>


        <Footer />
      </Suspense>
    </>
  );
}

export default App;
