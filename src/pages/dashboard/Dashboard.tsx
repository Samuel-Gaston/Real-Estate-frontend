import '../../components/All.css';
import Sidebar from '../../components/Sidebar';
import ChatWidget from '../../components/Chat';
import { GiTreehouse } from "react-icons/gi";
import { FaHome, FaBuilding } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [apartmentCount, setApartmentCount] = useState(0);
  const [houseCount, setHouseCount] = useState(0);
  const [landCount, setLandCount] = useState(0);

  
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [apartmentsRes, housesRes, landsRes] = await Promise.all([
          axios.get("http://localhost:8000/api/apartments"),
          axios.get("http://localhost:8000/api/houses"),
          axios.get("http://localhost:8000/api/lands"),
        ]);

        setApartmentCount(apartmentsRes.data.length);
        setHouseCount(housesRes.data.length);
        setLandCount(landsRes.data.length);
      } catch (err) {
        console.error("Failed to fetch counts", err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <div className='dashboard'>
        <div className='left-dashboard'>
          <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold' }}>
            <p style={{ fontSize: 30 }}>HomeScope</p>
          </div>
          <Sidebar />
        </div>

        <div className='right-dashboard'>
          <h1 style={{ color: 'rgb(70, 148, 179)', fontSize: 30, fontWeight: 'bold' }}>Real Estate Management Dashboard</h1>
          <br />
          <br />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 text-center">
            
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 cursor-pointer">
              <div className="flex flex-col items-center">
                <FaBuilding className="text-4xl mb-3" style={{ color: 'rgb(70, 148, 179)' }} />
                <h1 className="text-lg font-semibold text-gray-800">Apartments</h1>
                
              </div>
            </div>

          
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 cursor-pointer">
              <div className="flex flex-col items-center">
                <FaHome className="text-4xl mb-3" style={{ color: 'rgb(70, 148, 179)' }} />
                <h1 className="text-lg font-semibold text-gray-800">Houses</h1>
                
              </div>
            </div>

           
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 cursor-pointer">
              <div className="flex flex-col items-center">
                <GiTreehouse className="text-4xl mb-3" style={{ color: 'rgb(70, 148, 179)' }} />
                <h1 className="text-lg font-semibold text-gray-800">Lands</h1>
             
              </div>
            </div>
          </div>

          <ChatWidget />
        </div>
      </div>
      <span className="hidden">
  {apartmentCount} {houseCount} {landCount}
</span>

    </div>
  )
}

export default Dashboard;
