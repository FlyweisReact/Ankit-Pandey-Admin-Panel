/** @format */

import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import HOC from "./layout/HOC";
import { useNavigate } from "react-router-dom";
import { AllCashback, AllUsers } from "../Repository/Api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [adminCount, setAdminCount] = useState([]);
  const [userCount, setUserCount] = useState([]);

  const fetchUsers = async () => {
    try{
      const { data } = await AllUsers()
      setAdminCount(data.result.length)
    }catch(e) { 
      console.log(e)
    }
  }

  const fetchCashback = async () => {
    try{
      const { data } = await AllCashback()
      setUserCount(data.result.length)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchCashback()
  },[])


  const card = [
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: adminCount,
      icon: (
        <i
          className="fa-solid fa-user text-2xl"
          style={{ color: "#4099ff" }}
        ></i>
      ),
      bg: "#4099ff",
      link: "/Admin",
    },
    {
      progress: "bg-green-400",
      title: "All Cashbacks",
      number: userCount,
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
      link: "/Customer",
     }
  ];
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{
                backgroundColor: `${card.bg}`,
                textTransform: "uppercase",
              }}
              onClick={() => navigate(`${card.link}`)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
