import { createContext, useContext, useEffect, useState } from "react"
import { get } from "@/api/requests"

const DoctorsContext = createContext(null);

export function DoctorsProvider({ children }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const doctorsData = await get("/static/json/doctors.json");
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false)
      }
    }

    loadDoctors();
  }, [])

  return (
    <DoctorsContext.Provider value={{ doctors, loading }} >
      {children}
    </DoctorsContext.Provider>
  );
}

export function useDoctors() {
  const context = useContext(DoctorsContext);
  if (!context) {
    throw new Error("useDoctors must be used within a DoctorsProvider");
  }
  return context
}
