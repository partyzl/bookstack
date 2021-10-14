import {React, useEffect, useState} from "react";
import { checkToken } from "../../actions/loginauth";
import {getStats} from "../../actions/helpers"


const StatsDisplay = () => {
  checkToken();

 const [stats, setStats] = useState(async () => await getStats())

 useEffect(async () => {
  const statsData = await getStats() 
  console.log(statsData) 
  setStats(statsData)
 }, [])




  return (
<<<<<<< HEAD
    <div className="body">
      
=======
    <div>
      <h1>my stats</h1>
      <div>Pages / day: {stats.pages_per_day} days</div>
      <div>Average time spent on a book: {stats.avg_book_time} days</div>
      <div>Average book length: {stats.avg_book_length} pages</div>
      <div>Top Genre: {stats.genres}</div>
      <div>Total Books Read: {stats.total_books_read}</div>
      <div>Favourite Era: {stats.fav_era}s</div>
>>>>>>> connecting
    </div>
  );
};
export default StatsDisplay;
