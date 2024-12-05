"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const UrlGenerator = () => {
  const [inputData, setInputData] = useState();
  const [Link, setLinks] = useState([
    { title: "Portfolio", Link: "https://chat.openai.com/" },
    { title: "ChatGPT", Link: "https://chat.openai.com/" },
    { title: "TipSearch", Link: "https://chat.openai.com/" },
    { title: "CountreySearchAPI", Link: "https://chat.openai.com/" },
    { title: "HadithTracker", Link: "https://chat.openai.com/" },
    { title: "DuaTracker", Link: "https://chat.openai.com/" },
    { title: "Pinnacle Fitness And Gym", Link: "https://chat.openai.com/" },
  ]);

  const API_Key = "";

  const handlePassUrlData = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:");
      });
  };

  const handleInputData = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="w-full h-[410px] py-5 gap-6 sm:gap-7 flex flex-col items-center justify-start">
      <h1 className="font-bold text-2xl">Shorten Your URl</h1>
      <div className="w-full gap-4 flex flex-col items-center justify-center">
        <input
          type="text"
          name="urlData"
          value={inputData}
          onChange={(e) => handleInputData(e)}
          placeholder="Enter Your URL"
          className="w-[88%] h-10 text-sm rounded-md pl-3 border-[0.5px] border-black border-opacity-25"
        />
        <button
          onClick={handlePassUrlData}
          className="w-[88%] py-2 rounded-md font-medium bg-blue-300 hover:bg-blue-400"
        >
          Generate
        </button>
        <div
          className="w-full h-[185px] overflow-y-auto flex items-start justify-center
        c"
        >
          <section className="w-[88%] h-fit space-y-3">
            {Link.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full py-2.5 px-3 bg-slate-50 rounded-md flex flex-row items-center justify-between"
                >
                  <p className="text-sm">{item.title}</p>
                  <FontAwesomeIcon
                    icon={faCopy}
                    size="sm"
                    className="cursor-pointer"
                  />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
};

export default UrlGenerator;
