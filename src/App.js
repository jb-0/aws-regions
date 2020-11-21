import { useEffect, useState } from 'react';
import './App.css';
// import data from 'https://ip-ranges.amazonaws.com/ip-ranges.json'

function App() {
  const [regionData, setRegionData] = useState();
  console.log(regionData);
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://ip-ranges.amazonaws.com/ip-ranges.json');
      const data = await res.json();

      return await data.prefixes;
    }

    setRegionData(getData);
  }, []);

  return (
    <div>
      {/* {regionData && <div>{regionData.prefixes[0]}</div>} */}
    </div>
  );
}

export default App;
