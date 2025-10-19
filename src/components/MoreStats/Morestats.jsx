import React, { use, useState } from "react";
import useAxios from "../../hooks/UseAxios";
 
const inputsForStates = [
  {name: "date", type: "date"}, 
  {name: "Distance", nameelemnt: "distance", type: "number",  placeholder: "e.g. 5.2"},
  {name: "Pace", nameelemnt: "pace", type: "text", placeholder: "e.g. 5:30"},
  {name: "Duration (hh:mm)", nameelemnt: "duration", type: "text", placeholder: "e.g. 00:28"},
  {name: "Kalories burnth", nameelemnt: "kalories", type: "text", placeholder: "e.g. 300 kkal"}, 
  {name: "Total lifted weight", nameelemnt: "TLW", type: "text", placeholder: "e.g. 20kg"},
  {name: "Notes", nameelemnt: "notes", type: "text", placeholder: "Optional notes"}
]

const Morestats = () => {
  const [formData, setFormData] = useState({
  });

  const onSub = async () => {
    try {const Response = await useAxios.post("/api/workouts/createcard", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (  Response?.status === 200) { 
        navigate("/");
      }
    } catch (err) {
      if (err.Response?.status === 422) {
        alert("422")
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value }));
  };

  // const handleSubmit = () => {
  //   console.log("Submitted data:", formData);
  // };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-[#1e2938] rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Enter Running Stats
        </h1>
 
          {inputsForStates.map((item) => (             
            <div key={item.name}>
              <label className="block text-gray-300 font-medium mb-1">{item.name}</label>
              <input
                type={item.type}
                name={item.name}
                value={formData[item.name]}
                onChange={handleChange}
                placeholder={item.placeholder}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#a4e636] focus:outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            onClick={() => onSub()}
            className="w-full bg-[#a4e636] cursor-pointer hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
          >
            Save Stats
          </button>
      </div>
    </div>
  );
};

export default Morestats;

