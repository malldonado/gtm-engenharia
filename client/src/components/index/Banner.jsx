import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRightSquare } from "react-icons/bs";
import BannerImage from "../../images/banner.jpg";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useState, useEffect } from "react";

function Banner() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/service-images");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="bg-black/50 h-[600px] flex">
      <div className="w-[90%] relative">
        <Zoom
          scale={1.4}
          indicators={true}
          className="bg-black/50 h-[600px] w-full relative z-100"
        >
          <div className="bg-black/50 h-[600px] w-full z-100 relative">
            <img className="z-[-1] relative object-cover h-[600px] w-full" src={BannerImage} />
            <div className="mx-auto absolute bottom-[100px] h-auto left-[10%]">
              <div className="w-full mx-auto">
                <div className="text-[70px] font-medium text-white tracking-[5px] leading-[6rem]">
                  ARCHITECTURE <br /> INSPIRING A WORLD <br /> OF IMAGINATION
                </div>
                <p className="text-[20px] text-white opacity-90 mt-5 w-[60%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
                <BsArrowRightSquare className="text-white text-[40px] mt-10 cursor-pointer hover:text-[#af9155] transition duration-150 ease-out hover:ease-in" />
              </div>
            </div>
          </div>
          <div className="bg-black/50 h-[600px] w-full z-100 relative">
            <img className="z-[-1] relative object-cover h-[600px] w-full" src={BannerImage} />
            <div className="mx-auto absolute bottom-[100px] h-auto left-[10%]">
              <div className="w-full mx-auto">
                <div className="text-[70px] font-medium text-white tracking-[5px] leading-[6rem]">
                  ARCHITECTURE <br /> INSPIRING A WORLD <br /> OF IMAGINATION
                </div>
                <p className="text-[20px] text-white opacity-90 mt-5 w-[60%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
                <BsArrowRightSquare className="text-white text-[40px] mt-10 cursor-pointer hover:text-[#af9155] transition duration-150 ease-out hover:ease-in" />
              </div>
            </div>
          </div>
        </Zoom>
        {/* {data.map(imagem => (
          <img key={imagem._id} src={imagem.imageServiceBanner} alt="Imagem" />
        ))} */}

      </div>
      <div className="w-[10%] bg-black h-full">
        <div className="h-full flex justify-around flex-col items-center my-auto">
          <span className="text-white text-[20px] writing-vertical-rl">
            GTM ENGENHARIA
          </span>
          <div>
            <a
              target="_black"
              href="https://www.instagram.com/criativitis"
              className="flex justify-center items-center mb-10 cursor-pointer"
            >
              <FaInstagram className="fill-white hover:fill-[#af9155] text-[20px]" />
            </a>
            <a
              target="_black"
              href="https://www.facebook.com/Criativitis/"
              className="flex justify-center items-center mb-10 cursor-pointer"
            >
              <FaFacebookF className="fill-white hover:fill-[#af9155] text-[20px]" />
            </a>
            <a
              target="_black"
              href="https://w.app/criativitis"
              className="flex justify-center items-center mb-10 cursor-pointer"
            >
              <FaWhatsapp className="fill-white hover:fill-[#af9155] text-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
