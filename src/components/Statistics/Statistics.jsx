import "./Statistics.css";
import React from 'react';
import Chart from 'react-apexcharts';
import { getStoredItemsFromLocalStorage } from "../LocalStorage/LocalStorage";


const Statistics = () => {
    
    const totalDonations = 12;
    const donationsMade = getStoredItemsFromLocalStorage();
    return (
        <React.Fragment>
            <div className="container-fluid">
                <Chart
                type='pie'
                width={750}
                height={350}
                series={[totalDonations, donationsMade.length]}
                options={{
                    noData:{text:"No Data Available"},
                    labels:["Total Donation", "Your Donation"],
                    colors:['#FF444A', '#00C49F'],
                    fill: {
                        colors: ['#FF444A', '#00C49F']
                    },
                    responsive: [{
                        
                        breakpoint: 769,
                        options: {
                          chart: {
                            width: 350,
                            height: 350,
                          },
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }]
                    
                }}
                
                >

                </Chart>
            </div>
        </React.Fragment>
    );
};

export default Statistics;































// import "./Statistics.css";
// import { VictoryPie } from "victory-pie";
// import { getStoredItemsFromLocalStorage } from "../LocalStorage/LocalStorage";

// const Statistics = () => {

// const donatedMoney = getStoredItemsFromLocalStorage();


// const myData = [
//     { x: "Your Donation", y: donatedMoney.length},
//     { x: "Total Donation", y: 12 },
// ];

// return (
//     <div className="statistics-parent">
//       <VictoryPie
//         data={myData}
//         colorScale={["#00C49F", "#FF444A"]}
//         radius={100}
//       />
//     </div>
//   );
// };

// export default Statistics;


