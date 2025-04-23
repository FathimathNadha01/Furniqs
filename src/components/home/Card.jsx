import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card() {
  const [furniture, setFurniture] = useState([]);

  const fetchFurniture = async () => {
    try {
      const response = await axios.get("https://furniture-api.fly.dev/v1/products?limit=100&category=sofa", {
        timeout: 10000 // 10 seconds
      });
      console.log("Furniture data:", response.data.data);
      setFurniture(response.data.data);
    } catch (error) {
      console.error("Error fetching furniture:", error.message);
      console.log("Full error object:", error);
      setFurniture([]);
    }
  };
  
  

  useEffect(() => {
    fetchFurniture();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {furniture.map((item) => (
        <Link
          to={`/furniture/${item.id}`}
          key={item.id}
          className="w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          
           <img src={item.image} alt={item.name}

          
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-1">{item.name}</h2>
            <p className="text-sm text-gray-500 mb-2 capitalize">{item.category}</p>
            <p className="text-md font-bold text-green-600">Rp {parseInt(item.price).toLocaleString('id-ID')}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;


