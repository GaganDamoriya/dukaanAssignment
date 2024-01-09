import React from "react";
import "./page.css";
import { paymentData } from "../components/content/paymentData";
import Input from "../components/reusable-comp/Input";
import { BiSort } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";

const PaymentDashBoard = () => {
  return (
    <div className="paymentDasboard">
      <div className="overview-transaction">
        <span className="overview">
          <span className="heading-payment">Overview</span>
          <span>
            <select name="cars" id="cars">
              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="6 Month">6 Month</option>
              <option value="Year">Year</option>
            </select>
          </span>
        </span>
        <div className="payment-platform">
          <ul>
            <li>Razorpay</li>
            <li>Cashfree</li>
          </ul>
        </div>
        <div className="show-balance">
          <div>
            <span>Total Order</span>
            <span className="ans">231</span>
          </div>
          <div>
            <span>Amount received</span>
            <span className="ans">$ 33,408.90</span>
          </div>
        </div>
      </div>
      <div className="transactions">
        <span className="heading-payment">Transaction | Month</span>
        <div className="displayPayments">
          <div className="table-filter">
            <Input />
            <span>
              <span className="sort">
                Sort
                <BiSort />
              </span>
              <span className="download">
                <IoMdDownload size={"1.5rem"} />
              </span>
            </span>
          </div>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order amount</th>
              <th className="t-fee">Transaction fee</th>
            </tr>
            {paymentData.map((payment, i) => {
              return (
                <tr className="tdRow" key={i}>
                  <td style={{ color: "blue" }}>{payment.id}</td>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td className="t-fee">{payment.paymentfee}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashBoard;
