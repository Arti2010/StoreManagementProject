import React from 'react';
import Logo1 from '../assets/image/store.jfif';
import Navigation from '../component/Navigation';
import '../styles/About.css';

function About() {
  return (
    <div>
      <Navigation />
      <div className="about">
        <div className="container">
          <h1 style={{ textAlign: "center" }} ><b>Store Management System</b></h1>
          {/* <img src={Logo1} style={{
          float: "left", display: "inline-block",
          margin: "25px 10px"
        }} /> */}

        </div>
        <div>
          <p>Stores are very important in carrying out day-to-day operations. The objective behind stores is the continuous supply and production of goods and services. Managing the stores ensures that every project, no matter how large or small is properly managed.

            Store keeping’s basic function is to receive the materials, recognize, place the same and issue the raw materials on the requisition made by the respective department.

            <br /><br />Objectives of Store Management:<br />
            The various objectives of store management are as follows:<br />

            Minimizing Cost of Production:

            The store’s primary goal is to produce services at the lowest possible cost by minimizing production costs. The total material cost in production includes the cost of materials, the cost of procurement, and the cost of transporting and transferring materials. The costs of the store include preservation, accounting, insurance, and store equipment. These costs have a direct or indirect effect on the total cost of the product. So, the company is trying to minimize these costs.<br />

            Maintaining the Worth of Stock:

            The primary goal of store management is to keep materials at a minimum on a regular basis in order to make the best use of working capital. It also contributes to lower storage costs. The stock-keeping in the store is completed in a shorter period of time. The storekeeper tries to prevent the inventory from becoming obsolete and also tries to minimize the warehouse time for the stock. The storekeepers work tirelessly to keep the store’s merchandise valuable.<br />

            Services to Organisation:

            The store management helps in providing different types of services to the organization. The service consists of monitoring all the stages, i.e., raw materials and work-in-progress, finished goods, and controlling the scrap.

            There is the proper movement of raw materials, components, tools, equipment, and any other commodities required for the production of products and services.
            They assist with the upkeep of materials, spare parts, and stores as needed.
            They help in maintaining a proper supply of materials at the time of work in progress.
            They assist in obtaining and storing scrap items.
            They help with keeping records of all the receipts, issues, and goods<br />
          </p></div>
      </div>
    </div>
  );
}

export default About;
