import { useNavigate } from "react-router-dom";
import Billing from "./Billing";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Summary from "./Summary";
// import GoBackbtn from "../."

export default function Checkout() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };
  return (
    <div className="checkout">
      <section>
        <div>
        {/* <GoBackbtn/> */}
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="checkout__container">
            <h2 className="checkout__title">Checkout</h2>
            <Billing />
            <Shipping />
            <Payment />
          </div>

          <div className="checkout__container checkout__summary">
            <Summary />
          </div>
        </form>
      </section>
    </div>
  );
}
