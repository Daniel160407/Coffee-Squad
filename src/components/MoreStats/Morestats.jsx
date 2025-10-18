import React, { useState } from "react";
import Button from "../uiComponents/Button";
import Input from "../uiComponents/Input";

const Morestats = () => {
  const [formData, setFormData] = useState({
    date: "",
    distance: "",
    pace: "",
    duration: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg border-l-4 border-green-500">
        <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Enter Running Stats
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-1">Date</label>
            <Input
              type={"date"}
              name={"date"}
              value={formData.date}
              setValue={handleChange}
              style={
                "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              }
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Distance (km)
            </label>
            <Input
              type={"number"}
              name={"distance"}
              value={formData.distance}
              setValue={handleChange}
              placeholder="e.g 5.2"
              style={
                "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              }
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Pace (min/km)
            </label>
            <Input
              type={"text"}
              name={"pace"}
              value={formData.pace}
              setValue={handleChange}
              placeholder="e.g 5:30"
              style={
                "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              }
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Duration (hh:mm)
            </label>
            <Input
              type={"text"}
              name={"duration"}
              value={formData.duration}
              setValue={handleChange}
              placeholder="e.g. 00:28"
              style={
                "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              }
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Optional notes"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
            />
          </div>

          <Button
            type="submit"
            title={"Save Stats"}
            style="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Morestats;
