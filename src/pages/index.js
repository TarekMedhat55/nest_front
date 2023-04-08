import BestSell from "@/components/Home/BestSell";
import Categories from "@/components/Home/Categories";
import HomeHeader from "@/components/Home/HomeHeader";
import Layout from "@/components/Layout";
import PopularProduct from "@/components/Home/PopularProduct";
import NewProducts from "@/components/Home/NewProducts";

export default function Home() {
  return (
    <Layout title="Nest - Online Shopping">
      <HomeHeader />
      <Categories />
      <PopularProduct />
      <BestSell />
      <NewProducts />
    </Layout>
  );
}
