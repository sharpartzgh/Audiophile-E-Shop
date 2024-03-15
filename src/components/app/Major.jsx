import { Navigate, Route, Routes } from "react-router-dom";
import Category from "../../pages/category_page/Category.jsx";
import Home from "../../pages/home/Home.jsx";
import ProductPage from "../../pages/product_page/ProductPage.jsx";

import categoriesArr from "../../data/category_id.jsx";
import data from "../../data/data.json";
import Checkout from "../../pages/checkout/Checkout.jsx";
import Success from "../../pages/checkout/Success.jsx";
import ScrollToTop from "../scroll_restoration/ScrollToTop.jsx";
import PageNotFound from "../../pages/page_not_found/PageNotFound.jsx";

export default function Major() {
  const categoriesRoutes = categoriesArr.map((category) => (
    <Route
      key={category}
      path={`/${category}`}
      element={<Category categoryName={category} />}
    />
  ));
  const productsRoutes = data.map(({ slug }) => (
    <Route
      key={slug}
      path={`/${slug}`}
      element={<ProductPage productId={slug} />}
    />
  ));
  return (
    <major >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {categoriesRoutes}
        {productsRoutes}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </major>
  );
}
