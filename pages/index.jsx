import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home from "../app/components/home";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home />
    </div>
  );
};
export default Dashboard;