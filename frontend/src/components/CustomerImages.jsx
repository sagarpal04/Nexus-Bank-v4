import customer1 from "../assets/customers/customer-1.jpg";
import customer2 from "../assets/customers/customer-2.jpg";
import customer3 from "../assets/customers/customer-3.jpg";
import customer4 from "../assets/customers/customer-4.jpg";
import CustomerImage from "./CustomerImage";
const CustomerImages = () => (
  <div className="flex gap-2 h-12 items-center flex-wrap">
    <CustomerImage src={customer1} alt="Customer 1" />
    <CustomerImage src={customer2} alt="Customer 2" />
    <CustomerImage src={customer3} alt="Customer 3" />
    <CustomerImage src={customer4} alt="Customer 4" />
    <span className="bg-customOrangeLight text-sm text-white font-semibold px-1 py-2 sm:px-2 sm:py-3  rounded-full">
      100+
    </span>
  </div>
);
export default CustomerImages;
