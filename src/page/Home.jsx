import React from "react";
import { GoPencil } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import banner from "../assets/banner.png";
import bannermobile from "../assets/bannermobile.png";
import Container from "../components/Container";
import { accessoriesData } from "../data";
import Card from "../components/Card";

import s1 from "../assets/WhatsNew.png";
import s2 from "../assets/Mobiles.png";
import s3 from "../assets/Televisions.png";
import s4 from "../assets/Laptops.png";
import s5 from "../assets/Headphones&Earphones.png";
import s6 from "../assets/Refrigerators.png";
import s7 from "../assets/HomeTheatres&Soundbars.png";
import s8 from "../assets/AirConditioners.png";
import s9 from "../assets/Speakers&MediaPlayers.png";
import s10 from "../assets/WashingMachines.png";
import s11 from "../assets/KitchenAppliances.png";
import s12 from "../assets/Grooming.png";
import s13 from "../assets/Tablets.png";
import s14 from "../assets/Wearables.png";
import s15 from "../assets/Cameras.png";
import s16 from "../assets/Accessories.png";
import s17 from "../assets/Gaming.png";
import Slider from "../components/Slider";

import highlights1 from "../assets/highlights1.png";
import highlights2 from "../assets/highlights2.png";
import highlights3 from "../assets/highlights3.png";

import highlights4 from "../assets/highlights4.png";
import highlights5 from "../assets/highlights5.png";
import highlights6 from "../assets/highlights6.png";
import highlights7 from "../assets/highlights7.png";

import highlights8 from "../assets/highlights8.png";
import highlights9 from "../assets/highlights9.png";
import highlights10 from "../assets/highlights10.png";
import highlights11 from "../assets/highlights11.png";
import highlights12 from "../assets/highlights12.png";

import newdeal1 from "../assets/newdeal1.png";
import newdeal2 from "../assets/newdeal2.png";
import newdeal3 from "../assets/newdeal3.png";
import newdeal4 from "../assets/newdeal4.png";
import newdeal5 from "../assets/newdeal5.png";
import newdeal6 from "../assets/newdeal6.png";
import newdeal7 from "../assets/newdeal7.png";
import newdeal8 from "../assets/newdeal8.png";
import newdeal9 from "../assets/newdeal9.png";
import newdeal10 from "../assets/newdeal10.png";
import newdeal11 from "../assets/newdeal11.png";
import newdeal12 from "../assets/newdeal12.png";

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white">
      <div className="flex items-center gap-2 md:hidden h-[40px] bg-black text-white">
        <ImLocation className="text-xl" />
        <p className="whitespace-nowrap text-xs">Mumbai 400049</p>
        <GoPencil className="text-xs" />
      </div>

      <div>
        <img
          src={banner}
          alt="desktopbanner"
          className="hidden md:block w-full"
        />
        <img
          src={bannermobile}
          alt="mobilebanner"
          className="block md:hidden"
        />
      </div>
      <Container>
        <div className="bg-black">
          <img
            className="hidden md:block"
            alt="undefined"
            data-speedsize-src="https://media.croma.com/image/upload/v1684410521/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/May/19%20to%2021%20May/LP_SingleSplit_Bank_18mAY2023_r01oah.png"
            loading="lazy"
            src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1684410521/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/May/19%20to%2021%20May/LP_SingleSplit_Bank_18mAY2023_r01oah.png/mxw_2256,s_webp,f_auto"
            data-processed="true"
          ></img>

          <img
            className="block md:hidden"
            alt="undefined"
            data-speedsize-src="https://media.croma.com/image/upload/v1684410523/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/May/19%20to%2021%20May/MLP_SingleSplit_Bank_18May2023_ugmm1n.png"
            loading="lazy"
            src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1684410523/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/May/19%20to%2021%20May/MLP_SingleSplit_Bank_18May2023_ugmm1n.png/mxw_640,s_webp,f_auto"
            data-processed="true"
          ></img>
        </div>

        <Slider width={125}>
          <div className="flex gap-4 md:gap-6">
            <img src={s1} className="w-14 md:min-w-[125px]" />

            <img src={s2} className="w-14 md:min-w-[125px]" />
            <img src={s3} className="w-14 md:min-w-[125px]" />

            <img src={s4} className="w-14 md:min-w-[125px]" />

            <img src={s5} className="w-14 md:min-w-[125px]" />

            <img src={s6} className="w-14 md:min-w-[125px]" />

            <img src={s7} className="w-14 md:min-w-[125px]" />
            <img src={s8} className="w-14 md:min-w-[125px]" />
          </div>
          <div className="flex">
            <img src={s9} className="w-14 md:min-w-[125px]" />

            <img src={s10} className="w-14 md:min-w-[125px]" />

            <img src={s11} className="w-14 md:min-w-[125px]" />

            <img src={s12} className="w-14 md:min-w-[125px]" />

            <img src={s13} className="w-14 md:min-w-[125px]" />
            <img src={s14} className="w-14 md:min-w-[125px]" />

            <img src={s15} className="w-14 md:min-w-[125px]" />
            <img src={s16} className="w-14 md:min-w-[125px]" />
            <img src={s17} className="w-14 md:min-w-[125px]" />
          </div>
        </Slider>

        {/* Highlights */}
        <h2 className="font-medium text-2xl my-5">Highlights</h2>
        <div className="md:px-5 flex justify-between gap-3 my-5 overflow-scroll scrollbar-none">
          <img src={highlights1} className="h-44 md:h-60 rounded-lg" />
          <img src={highlights2} className="h-44 md:h-60 rounded-lg" />
          <img src={highlights3} className="h-44 md:h-60 rounded-lg" />
        </div>

        <Slider width={380}>
          <img
            src={highlights4}
            className="h-44 min-h-[176px] md:min-h-[240px] md:h-60 rounded-lg"
          />
          <img src={highlights5} className="h-44 md:h-60 rounded-lg " />

          <img src={highlights6} className="h-44 md:h-60 rounded-lg " />
          <img src={highlights7} className="h-44 md:h-60 rounded-lg " />
        </Slider>

        <Slider width={380}>
          <img src={highlights8} className="h-44 md:h-60 rounded-lg " />
          <img src={highlights9} className="h-44 md:h-60 rounded-lg " />
          <img src={highlights10} className="h-44 md:h-60 rounded-lg " />
          <img src={highlights11} className="h-44 md:h-60 rounded-lg " />
          <img src={highlights12} className="h-44 md:h-60 rounded-lg" />
        </Slider>

        {/* New at croma */}
        <h2 className="font-medium text-2xl my-5">New at Croma</h2>
        <div className="flex gap-3">
          <img src={newdeal1} className="w-1/2 rounded-lg" />
          <img src={newdeal2} className="w-1/2 rounded-lg" />
        </div>

        <Slider width={245}>
          <img src={newdeal3} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal4} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal5} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal6} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal7} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal8} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal9} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal10} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal11} className="h-44 md:h-60 rounded-lg " />
          <img src={newdeal12} className="h-44 md:h-60 rounded-lg " />
        </Slider>

        {/* Accessories Deals */}
        <h2 className="font-medium text-2xl my-5">Accessories Deals</h2>
        <div>
          <Slider width={285}>
            {accessoriesData.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  img={el.img}
                  pricesell={el.priceSell}
                  pricedis={el.priceDis}
                />
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
