import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

export default function Home() {
  const [gymwears, setGymwears] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const URL =
        "https://tranquil-ravine-04015.herokuapp.com/api/gymwears?populate=*";
      const res = await fetch(URL);
      const { data } = await res.json();
      setGymwears(data);
      setIsLoad(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full py-16 px-4 text-center space-y-4">
        <h1 className="text-4xl font-bold">Gymwear Finder</h1>
        <p className="text-base text-gray-500">이쁜옷 안입으면 유죄</p>
        <p className="text-sm text-gray-500"></p>
      </div>

      {isLoad && <Spinner />}
      <div className="max-w-7xl px-4 py-2 mx-auto">
        <h1 className="text-xl font-bold mb-3">
          {gymwears && gymwears.length}개의 브랜드
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gymwears && gymwears.map((gym) => <Card key={gym.id} gym={gym} />)}
        </div>
      </div>
    </div>
  );
}
