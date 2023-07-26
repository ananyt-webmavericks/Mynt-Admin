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
import CardHome from "./CardHome";
import Base_url from "../Base_url";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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
        random(70, 80),
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
        random(90, 100),
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
        random(80, 89),
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
        <CardHome
          title="Founders"
          url={`${Base_url}/api/users/count?user_type=FOUNDER`}
          color={"#321fdb"}
        />
        <CardHome
          title="Investors"
          color={"#ffc107"}
          url={`${Base_url}/api/users/count?user_type=INVESTOR`}
        />
        <CardHome
          title="Campaigns Created"
          color={"#9bc173"}
          url={`${Base_url}/api/campaign/count?status=CREATED`}
        />
        <CardHome
          title="Companies Onboard"
          color={"#bcd2ee"}
          url={`${Base_url}/api/company/count?status=ONBOARD`}
        />
        <CardHome
          title="Companies Application"
          url={`${Base_url}/api/company/count?status=PENDING`}
          color="#c8b9d5"
        />
        <CardHome
          title="Campaigns Live"
          color={"#e7cde4"}
          url={`${Base_url}/api/campaign/count?status=LIVE`}
        />
        <CardHome
          title="Campaigns Completed"
          color={"#9bc173"}
          url={`${Base_url}/api/campaign/count?status=COMPLETED`}
        />
        <CardHome
          title="Campaigns Refunded"
          color={"#dccfdb"}
          url={`${Base_url}/api/campaign/count?status=REFUNDED`}
        />
      </div>
    </div>
  );
};
export default Home;
