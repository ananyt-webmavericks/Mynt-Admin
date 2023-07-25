import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import "../../Dashboard/Dashboard.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      border: {
        display: false,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
    labels,
  datasets: [
    {
      data: [
        random(70, 80),
        random(70, 80),
        random(70, 80),
        random(70, 80),
        random(70, 80),
        random(70, 80),
        random(70, 80)
      ],
      borderColor: "#fff",
      backgroundColor: "#fff",
    },
  ],
};

const data2 = {
    labels,
  datasets: [
    {
      data: [
        random(90, 100),
        random(90, 100),
        random(90, 100),
        random(90, 100),
        random(90, 100),
        random(90, 100),
        random(90, 100)
      ],
      borderColor: "#fff",
      backgroundColor: "#fff",
    },
  ],
};

const data3 = {
    labels,
  datasets: [
    {
      data: [
        random(80, 89),
        random(80, 89),
        random(80, 89),
        random(80, 89),
        random(80, 89),
        random(80, 89),
        random(80, 89)
      ],
      borderColor: "#fff",
      backgroundColor: "#fff",
    },
  ],
};

const Home = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="container fluid">
      <div className=" row mt-5 pe-0 ps-0">
        <div className="col-4 mb-3">
          <div
            style={{
              background: "#321fdb",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Founders</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div
            style={{
              background: "#ffc107",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Investors</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div
            style={{
              background: "#9bc173",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Campaigns Created</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div
            style={{
              background: "#e7cde4",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Companies Onboard</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div
            style={{
              background: "#9bc173",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Companies Application</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div
            style={{
              background: "#dccfdb",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Campaigns Live</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div
            style={{
              background: "#c8b9d5",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Campaigns Completed</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div
            style={{
              background: "#bcd2ee",
              height: "250px",
              borderRadius: "15px",
            }}
            className="p-4 text-light"
          >
            <h1>26K</h1>
            <h4>Campaigns Refunded</h4>
            <div style={{width: '100%',height:'100px', paddingTop: '20px'}}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
