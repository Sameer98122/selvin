import Image from "next/image";
import Loginpage from "./users/login/page";
import SignupPage from "./users/signup/page";
import ProductsManagment from "@/components/ProductsManagment";

export default function Home() {
  return (
   <>
   <ProductsManagment/>
   </>
  );
}
