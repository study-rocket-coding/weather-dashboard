import { Routes, Route } from "react-router";
import WeatherDashboard from "@/views/WeatherDashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherDashboard />} />
      {/* 可以在這裡加入更多路由，例如 /about */}
    </Routes>
  );
};

export default Router;
