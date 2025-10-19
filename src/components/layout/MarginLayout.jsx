import RadarChart from "../Chart/ChartForStats";
import { Link } from "react-router-dom";

const fitnessInfo = [
  {
    nameStat: "Your running stats this week",
    name: "Running scheme",
    desc: "Change or read your running stats",
    info: [
      { label: "Run distance", value: "5.2", unit: "km" },
      { label: "Average pace", value: "5.45", unit: "min/km" },
      { label: "Calories burned", value: "430", unit: "kcal" },
      { label: "Max heartbeat", value: "178", unit: "bpm" },
    ],
  },
  {
    nameStat: "Your lifting stats this week",
    name: "Weight lifting program",
    desc: "Track your progress and improve your strength",
    info: [
      { label: "Total lifted weight", value: "8,250", unit: "kg" },
      { label: "Max weight (1 rep)", value: "95", unit: "kg" },
      { label: "Workout duration", value: "45", unit: "min" },
      { label: "Average reps", value: "10", unit: "per set" },
    ],
  },
  {
    nameStat: "Your cycling stats this week",
    name: "Cycling overview",
    desc: "Monitor your distance, speed, and endurance",
    info: [
      { label: "Ride distance", value: "25.4", unit: "km" },
      { label: "Average speed", value: "22.3", unit: "km/h" },
      { label: "Calories burned", value: "680", unit: "kcal" },
      { label: "Total cycling time", value: "1.10", unit: "" },
    ],
  },
];

const MarginLayout = () => {
    const { data, isPending, error } = useQuery({ 
      queryKey: ["todos"],
      queryFn: () => GET(),
    });

    const dispatch = useDispatch()

    useEffect(() => {
      if (data) {
        dispatch(GetData(data));  
      }
    }, [data, dispatch]);


  return (
    <div className="flex flex-wrap w-auto min-h-screen bg-[#8383da] screen-center justify-around text-[#fff] py-10">
      {fitnessInfo.map((items, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-[470px] bg-[#303058] rounded-2xl p-6 shadow-lg mb-10 transition hover:scale-101 hover:shadow-xl"
        >
          <h1 className="text-3xl font-semibold mb-1">{items.name}</h1>
          <p className="text-gray-300 mb-4 text-center">{items.desc}</p>
          <h2 className="text-xl text-lime-400 mb-3">{items.nameStat}</h2>
          <div className="flex flex-col gap-4 w-full">
            {items.info.map((stat, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#41417a] p-3 rounded-lg shadow-md"
              >
                <div className="flex flex-col">
                  <p className="font-semibold">{stat.label}</p>
                  <p className="text-gray-300 text-sm">Your latest record</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-lime-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.unit}</p>
                </div>
              </div>
            ))}
          </div>
          <RadarChart
            key={items.name}
            labels={items.info.map((it) => it.label)}
            dataoflabels={items.info.map((it) => Number(it.value))}
          />
          <Link
            to={`/cycling/${items.name}`}
            className=" flex items-center transition-all rounded-[10px] justify-center gap-2 outline-1 cursor-pointer hover:bg-[#4d4586] outline-gray-400 py-3 px-7  bg-[#6c6ace]"
          >
            change stats
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MarginLayout;
