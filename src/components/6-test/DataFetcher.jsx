import React, { useState, useEffect } from "react";

const DataFetcher = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>{data ? `Data: ${data.info}` : "Loading..."}</p>
      )}
    </div>
  );
};

export default DataFetcher;
