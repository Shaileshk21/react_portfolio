import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Rebecca',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae fuga, quidem quasi, molestiae iste beatae praesentium aspernatur fugit officia ullam? Enim reprehenderit vero illum fugit dolorum delectus tempora assumenda.',
  },
  {
    avatar: AVTR2,
    name: 'Rahul Khaitan',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae fuga, quidem quasi, molestiae iste beatae praesentium aspernatur fugit officia ullam? Enim reprehenderit vero illum fugit dolorum delectus tempora assumenda.',
  },
  {
    avatar: AVTR3,
    name: 'KL Bajaj',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae fuga, quidem quasi, molestiae iste beatae praesentium aspernatur fugit officia ullam? Enim reprehenderit vero illum fugit dolorum delectus tempora assumenda.',
  },

  {
    avatar: AVTR4,
    name: 'Jacky Matthew',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae fuga, quidem quasi, molestiae iste beatae praesentium aspernatur fugit officia ullam? Enim reprehenderit vero illum fugit dolorum delectus tempora assumenda.',
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, review, name }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            recusandae fuga, quidem quasi, molestiae iste beatae praesentium
            aspernatur fugit officia ullam? Enim reprehenderit vero illum fugit,
            dolorum delectus tempora assumenda.
          </small>
        </article> */}

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            recusandae fuga, quidem quasi, molestiae iste beatae praesentium
            aspernatur fugit officia ullam? Enim reprehenderit vero illum fugit,
            dolorum delectus tempora assumenda.
          </small>
        </article> */}
      </Swiper>
    </section>
  );
};

export default Testimonials;
