import React from "react";
import { Link } from "react-router-dom";
import styles from "./InfoCards.module.css";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import profile1 from "../../assets/image.png";
import profile2 from "../../assets/image.png";
import profile3 from "../../assets/image.png";
import profile4 from "../../assets/image.png";
import qrCode from "../../assets/image.png"; 

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const InfoCards = () => {
  // Chart Data
  const barData = {
    labels: ["Project A", "Project B", "Project C"],
    datasets: [
      {
        label: "Performance",
        data: [85, 90, 78],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Data Growth",
        data: [10, 25, 50, 70, 100],
        borderColor: "#4BC0C0",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className={styles.cardContainer}>
      {/* About Me Card */}
      <div className={styles.card}>
        <h3>About Me</h3>
        <p>AI & Data Enthusiast, building intelligent solutions.</p>
        <div className={styles.profileList}>
          <div className={styles.profile}>
            <img src={profile1} alt="Person 1" />
            <span>John Doe</span>
          </div>
          <div className={styles.profile}>
            <img src={profile2} alt="Person 2" />
            <span>Alice Smith</span>
          </div>
        </div>
      </div>

      {/* Projects Card (Clickable) */}
      <Link to="/projects" className={styles.cardLink}>
        <div className={styles.card}>
          <h3>Projects</h3>
          <p>Recent AI & Data Science Work</p>
          <div className={styles.chart}>
            <Bar data={barData} />
          </div>
        </div>
      </Link>

      {/* Playground Card */}
      <div className={styles.card}>
        <h3>Playground</h3>
        <div className={styles.session}>
          <img src={profile3} alt="Person 3" />
          <span>Robert Singer - 20.2 Sessions</span>
        </div>
        <div className={styles.session}>
          <img src={profile4} alt="Person 4" />
          <span>Chris Williams - Model Applications</span>
        </div>
      </div>

      {/* Blog Card */}
      <Link to="/blogs" className={styles.cardLink}>
      <div className={styles.card}>
        <h3>Blog</h3>
        <div className={styles.chart}>
          <Line data={lineData} />
        </div>
      </div>
      
      </Link>

      {/* Contact Card */}
      <div className={styles.card}>
        <h3>Contact</h3>
        <p>📍 Silicon Valley, CA</p>
        <p>📧 contact@aiworld.com</p>
        <img src={qrCode} alt="QR Code" className={styles.qrCode} />
      </div>
    </div>
  );
};

export default InfoCards;
