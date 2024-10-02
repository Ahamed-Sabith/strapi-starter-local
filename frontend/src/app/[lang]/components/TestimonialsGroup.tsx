"use client";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import arrowIcon from "../assets/double-arrow.png";

interface Testimonial {
  testimonial: string;
  author: string;
}

interface TestimonialsProps {
  data: {
    id: string;
    testimonials: Testimonial[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <div className="flex  px-12 py-20 bg-[#2F2F2F]">
      <div className="w-2/12">
        <Image src={arrowIcon} alt="arrow icon" />
      </div>
      <div className="slide-container w-10/12">
        <Fade arrows={false}>
          {data.testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="md:text-32 text-15 text-right">{testimonial.testimonial}</p>
              <p className="text-end md:text-32 text-15 mt-10">~ {testimonial.author}</p>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
