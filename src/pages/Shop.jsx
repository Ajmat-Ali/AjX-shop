import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { ProductsProvider } from "../context/shop/ProductsProvider";

const Shop = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <ProductsProvider>
        <SideBar />
        <ShopContent />
      </ProductsProvider>
    </div>
  );
};
export default Shop;
