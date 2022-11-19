import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/dor.png";
import profilePic2 from "../../img/beat.png";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      name:'Doreen Alivitsa',
      img: profilePic1,
      title:'Director',
      review:
        "Doreen is the business development executive and a Company Secretary at Imperial Registrars. She holds a bachelor’s degree in Community development from Daystar University. She spearheads training and runs both the International Clientele and Customer Relationship Departments in Imperial Registrars. ",
    },
    {
      name:'Beatrice Ngethe',
      title:'Advocate of High Court',
      img: profilePic2,
      review:
        "Beatrice is an advocate of the High Court of Kenya, a Practicing Certified Company Secretary and a Certified Governance Auditor at Imperial Registrars. She is a practicing member of the Institute of Certified Public Secretaries of Kenya, with over five (5) years post qualification experience. She also is a Certified Public Accountant and holds a Law Degree from University of Nairobi.",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        
        <span>Our Team </span>
        
      

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
              <span>{client.name}</span>
                <img src={client.img} alt="" />
                <span>{client.title}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
