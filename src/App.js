import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Authorization/RequireAuth";
import RequireAdmin from "./Authorization/RequireAdmin";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import Blogs from "./pages/Blogs";
import AddAReview from "./pages/Dashboard/AddAReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import { Toaster } from "react-hot-toast";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import MyPortfolio from "./pages/MyPortfolio";
import ToolDetail from "./pages/ToolDetail/ToolDetail";
import Header from "./SharedPages/Header";
import AddProduct from "./pages/Dashboard/AddProduct";
import Payment from "./pages/Dashboard/Payment";
import Footer from "./SharedPages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import router from "./router";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <Header></Header> */}
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tool/:id" element={
          <RequireAuth>
            <ToolDetail></ToolDetail>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addareview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
          <Route path="addproduct" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path="manageproducts" element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes> */}

      <RouterProvider router={router} />
      {/* <Footer></Footer> */}

      <Toaster position="top-center" />
    </div>
  );
}

export default App;
