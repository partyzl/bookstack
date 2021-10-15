import { React, useEffect, useState } from "react";
import { checkToken } from "../../actions/loginauth";
import {getStats} from "../../actions/helpers"
import "./styles.css";
import { Nav } from "../../components";

const StatsDisplay = () => {
  checkToken();

  const [stats, setStats] = useState(async () => await getStats());

  useEffect(async () => {
    const statsData = await getStats();
    console.log(statsData);
    setStats(statsData);
  }, []);

  return (
    <div>
    
      <Nav />
      <section id="bodycontainer">
        <p className="title overlay" id="pagetitle">
          <span className="color1">M</span>
          <span className="color2" id="spaceright">y</span>
          <span className="color3">S</span>
          <span className="color4">t</span>
          <span className="color1">a</span>
          <span className="color2">t</span>
          <span className="color3">s</span>
          <span className="color4">!</span>
        </p>
        <section class="container">
          <div class="statfact pair">
            <p>{stats.pages_per_day}10</p>
            <p class="descriptor">pages per day </p>
          </div>
      
          <div class="statfact pair">
            <p>{stats.avg_book_time}16</p>
            <p class="descriptor">days per book</p>
          </div>
        </section>

        <div class="statfact solo">
            <p>{stats.avg_book_length}462 pages</p>
            <p class="descriptor">Average book length</p>
        </div>
        <div class="statfact solo">
            <p>{stats.total_books_read}12</p>
            <p class="descriptor">Total books read</p>
        </div>

        <section class="container">
          <div class="statfact pair">
            <p>{stats.fav_era}2000s</p>
            <p class="descriptor">Favourite era </p>
          </div>

          <div class="statfact pair">
            <p>{stats.genres}Fiction</p>
            <p class="descriptor">Top Genre</p>
          </div>
        </section>
      </section>

    </div>
    
  );
};
export default StatsDisplay;
