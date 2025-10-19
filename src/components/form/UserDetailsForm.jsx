import Input from "../uiComponents/Input";
import Dropdown from "../uiComponents/Dropdown";
import { useState } from "react";
import Button from "../uiComponents/Button";

const UserDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: {
      value: "",
      unit: "cm",
    },
    currentWeight: {
      value: "",
      unit: "kg",
    },
    targetWeight: {
      value: "",
      unit: "kg",
    },
    fitnessGoal: "",
    activityLevel: "moderately-active",
    availableEquipment: [],
    dietaryPreference: "balanced",
  });

  const handleChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleEquipmentToggle = (equipment) => {
    setFormData((prev) => {
      const currentEquipment = prev.availableEquipment || [];
      const isSelected = currentEquipment.includes(equipment);

      if (isSelected) {
        return {
          ...prev,
          availableEquipment: currentEquipment.filter(
            (item) => item !== equipment
          ),
        };
      } else {
        return {
          ...prev,
          availableEquipment: [...currentEquipment, equipment],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const genderOptions = ["male", "female"];
  const heightUnitOptions = ["cm", "inches"];
  const weightUnitOptions = ["kg", "lbs"];
  const fitnessGoals = [
    "fat-loss",
    "muscle-gain",
    "endurance",
    "general-fitness",
    "athletic-performance",
  ];
  const activityLevels = [
    "sedentary",
    "lightly-active",
    "moderately-active",
    "very-active",
    "extremely-active",
  ];
  const dietaryPreferences = [
    "balanced",
    "vegan",
    "vegetarian",
    "keto",
    "paleo",
    "low-carb",
    "high-protein",
  ];
  const equipmentOptions = [
    "dumbbells",
    "barbell",
    "kettlebell",
    "resistance-bands",
    "pull-up-bar",
    "bench",
    "cardio-machine",
    "bodyweight-only",
  ];

  const darkDropdownButtonStyle =
    "bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 hover:border-gray-500 transition-colors duration-200 min-w-[140px] text-left";
  const darkDropdownContentStyle =
    "absolute z-50 mt-2 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-xl max-h-60 overflow-auto";

  const formatLabel = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-lg"
    >
      <div
        className="max-w-4xl max-h-[90vh] w-full mx-4 bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-800 border-b border-gray-700 p-6 sticky top-0 z-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#a4e636] mb-2">
              Fitness Profile
            </h1>
            <p className="text-gray-400">
              Complete your fitness profile to get personalized recommendations
            </p>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-700">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Age"
                  type="text"
                  value={formData.age}
                  setValue={(e) => handleChange("age", e.target.value)}
                  placeholder="Enter your age"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#a4e636] focus:border-[#a4e636]"
                  min="0"
                  max="120"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Gender
                  </label>
                  <Dropdown
                    title="Select Gender"
                    options={genderOptions.map((option) => formatLabel(option))}
                    onChange={(value) =>
                      handleChange(
                        "gender",
                        value.toLowerCase().replace(/ /g, "-")
                      )
                    }
                    buttonStyle={darkDropdownButtonStyle}
                    contentStyle={darkDropdownContentStyle}
                    defaultValue={
                      formData.gender
                        ? formatLabel(formData.gender)
                        : "Select Gender"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-700">
                Body Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Height",
                    field: "height",
                    units: heightUnitOptions,
                  },
                  {
                    label: "Current Weight",
                    field: "currentWeight",
                    units: weightUnitOptions,
                  },
                  {
                    label: "Target Weight",
                    field: "targetWeight",
                    units: weightUnitOptions,
                  },
                ].map(({ label, field, units }) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {label}
                    </label>
                    <div className="flex space-x-3">
                      <Input
                        type="text"
                        value={formData[field].value}
                        setValue={(e) =>
                          handleChange(`${field}.value`, e.target.value)
                        }
                        placeholder="0"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#a4e636] focus:border-[#a4e636]"
                      />
                      <Dropdown
                        options={units}
                        onChange={(value) =>
                          handleChange(`${field}.unit`, value)
                        }
                        buttonStyle={darkDropdownButtonStyle}
                        contentStyle={darkDropdownContentStyle}
                        defaultValue={formData[field].unit}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-700">
                Fitness Preferences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fitness Goal
                  </label>
                  <Dropdown
                    title="Select Fitness Goal"
                    options={fitnessGoals.map((goal) => formatLabel(goal))}
                    onChange={(value) =>
                      handleChange(
                        "fitnessGoal",
                        value.toLowerCase().replace(/ /g, "-")
                      )
                    }
                    buttonStyle={darkDropdownButtonStyle}
                    contentStyle={darkDropdownContentStyle}
                    defaultValue={
                      formData.fitnessGoal
                        ? formatLabel(formData.fitnessGoal)
                        : "Select Fitness Goal"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Activity Level
                  </label>
                  <Dropdown
                    title="Select Activity Level"
                    options={activityLevels.map((level) => formatLabel(level))}
                    onChange={(value) =>
                      handleChange(
                        "activityLevel",
                        value.toLowerCase().replace(/ /g, "-")
                      )
                    }
                    buttonStyle={darkDropdownButtonStyle}
                    contentStyle={darkDropdownContentStyle}
                    defaultValue={
                      formData.activityLevel
                        ? formatLabel(formData.activityLevel)
                        : "Select Activity Level"
                    }
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Available Equipment
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {equipmentOptions.map((equipment) => (
                      <button
                        key={equipment}
                        type="button"
                        onClick={() => handleEquipmentToggle(equipment)}
                        className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                          formData.availableEquipment.includes(equipment)
                            ? "bg-[#a4e636] border-black text-black"
                            : "bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {formatLabel(equipment)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Dietary Preference
                  </label>
                  <Dropdown
                    title="Select Dietary Preference"
                    options={dietaryPreferences.map((pref) =>
                      formatLabel(pref)
                    )}
                    onChange={(value) =>
                      handleChange(
                        "dietaryPreference",
                        value.toLowerCase().replace(/ /g, "-")
                      )
                    }
                    buttonStyle={darkDropdownButtonStyle}
                    contentStyle={darkDropdownContentStyle}
                    defaultValue={
                      formData.dietaryPreference
                        ? formatLabel(formData.dietaryPreference)
                        : "Select Dietary Preference"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4 pb-2">
              <Button
                type="submit"
                title="Save Profile"
                style="bg-[#a4e636] text-black font-semibold py-3 px-8 rounded-lg hover:bg-[#8cc42a] transition-colors duration-200"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;
