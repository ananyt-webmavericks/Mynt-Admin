import React, { useEffect, useState } from "react";
import { authAxios } from "../../../Services/auth.service";
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


const CardHome = (props) => {

  const [loading,setLoading] = useState(true);
  const [count,setCount] = useState(0)

  useEffect(()=>{
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(props.url);
        console.log(response.data);
        setCount(response.data.count);
        setLoading(false)
        return response.data;
      } catch (error) {
        if (error) {
          console.log(error);
          setLoading(false)
          setCount(0);
        }
        return error;
      }
    };
    if(props.url){
      getUploadedDocs();
    }
  },[props.url])

  return (
    <div className="col-4 mb-3">
      <div
        style={{
          background: props.color,
          height: "250px",
          borderRadius: "15px",
        }}
        className="p-4 text-light"
      >
        {/* <h1>26K</h1>
        <h4>Founders</h4>
        <div style={{ width: "100%", height: "100px", paddingTop: "20px" }}>
          <Line options={options} data={data} />
        </div> */}

        {loading ? (
          <div class="spinner-border"></div>
        ) : (
          <>
            <h1>{count}</h1>
            <h4>{props.title}</h4>
            <div style={{ width: "100%", height: "100px", paddingTop: "20px" }}>
              <Line options={options} data={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CardHome;
