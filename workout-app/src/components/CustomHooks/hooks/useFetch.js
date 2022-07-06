import { useCallback, useEffect, useState } from "react";

export default function useFetch(url) {
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [DataAdded, setDataAdded] = useState([]);

  const fetchTasks = useCallback(async () => {
    setDataAdded([]);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error: " + response.status);
      const data = await response.json();

      const LoadedData = [];
      for (const key in data) {
        LoadedData.push({
          id: key,
          content: data[key].content,
        });
        setDataAdded(LoadedData);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addData = useCallback(
    async (DataPassed) => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(DataPassed),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setDataAdded([...DataAdded, data]);
      fetchTasks();
    },
    [DataAdded, url, fetchTasks]
  );

  return { IsLoading, error, DataAdded, addData };
}
