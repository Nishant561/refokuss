import React, { useState } from "react";
import Stripe from "./Stripe";
import { motion } from "framer-motion";

function Stripes() {
  const [pos, setPos] = useState(0);
  const data = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt, odit ratione quod magni deleniti facere quaerat commodi modi.",
      button: false,
      caseStudy: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt, odit ratione quod magni deleniti facere quaerat commodi modi.",
      button: false,
      caseStudy: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt, odit ratione quod magni deleniti facere quaerat commodi modi.",
      button: false,
      caseStudy: true,
    },
    {
      title: "Yahoo..!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt, odit ratione quod magni deleniti facere quaerat commodi modi.",
      button: false,
      caseStudy: true,
    },
  ];

  const mover = (val) => {
    console.log("callswe");
    setPos(val * 23);
  };

  return (
    <div className="w-full h-[92rem]  mt-16 relative ">
      {data.map((items, index) => (
        <Stripe key={index} count={index} mover={mover} data={items} />
      ))}

      <div className="absolute w-full h-full  top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          className="absolute w-96 h-[23rem]  left-[40%]  bg-white overflow-hidden "
        >
          <div className=" bg-red-400 w-full h-full"></div>
          <div className=" bg-blue-400 w-full h-full"></div>
          <div className=" bg-green-400 w-full h-full"></div>
          <div className=" bg-yellow-400 w-full h-full"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stripes;
