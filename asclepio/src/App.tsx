import React from 'react';
import './App.css';
import Navbar from "commons/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import EvaMap from "components/EvaMap/EvaMap";
import Card, { CardProps } from "components/Card/Card";


function App() {
  let doctors: CardProps[] = [
    { "src": "https://i.pinimg.com/originals/c8/80/7d/c8807dc2690976f075ecca5aa22455f2.jpg",
      "name": "GERALD GELLE", "specialties": ["Dentist"], "price": 80, "rate": 4.7, "reviews": []
    },
    { "src": "https://akns-images.eonline.com/eol_images/Entire_Site/2017023/rs_637x789-170123061254-FullSizeRender.jpg?fit=around%7C637:789&output-quality=90&crop=637:789;center,top",
      "name": "GERALD GELLE", "specialties": ["Dentist"], "price": 80, "rate": 4.7, "reviews": []
    },
    { "src": "https://www.nupciasmagazine.com/wp-content/uploads/2017/10/Feliz-dia-del-medico-1.jpg",
      "name": "GERALD GELLE", "specialties": ["Dentist"], "price": 80, "rate": 4.7, "reviews": []
    },
    { "src": "https://cdn.aarp.net/content/dam/aarp/health/doctors_hospitals/2016/05/1140-how-to-choose-the-right-doctor-for-you-esp-.imgcache.rev671c3873465a90e743023babf3e9c80e.jpg",
    "name": "GERALD GELLE", "specialties": ["Dentist"], "price": 80, "rate": 4.7, "reviews": []},
  ]

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="asclepio_main_container row">
          <div className="asclepio_list_container column">
            {
              doctors && doctors.map((doctor: CardProps) => (
                <Card {...doctor}/>
              ))
            }
            {
              !doctors && <p>No doctors</p>
            }

          </div>

          <div className="asclepio_map column" style={{ height: '100vh', width: '100%' }}>
            <EvaMap />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
