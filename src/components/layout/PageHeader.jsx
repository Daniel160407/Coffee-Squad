import { useState } from "react";
import { FiDownload, FiImage, FiMail } from "react-icons/fi";
import Button from "../uiComponents/Button";

const PageHeader = () => {
  const [openDownloadPdfLayout, setOpenDownloadPdfLayout] = useState(false);
  const [openCardCreationLayout, setOpenCardCreationLayout] = useState(false);
  const [openConsultationRequestLayout, setOpenConsultationRequestLayout] =
    useState(false);

  return (
    <div className="flex m-2 flex-col mt-10 items-center w-full h-[300px] gap-5">
      <h1 className="text-[#a4e636] text-[2rem] font-bold">O2 Coaching</h1>
      <p className="text-[#94a3b8] text-[1rem] font-medium">
        Your performance laboratory
      </p>
      <div className="flex gap-2">
        <Button
          icon={FiDownload}
          type="btn"
          title={"Download your Complete Analysis"}
          onClick={() => setOpenDownloadPdfLayout(!openDownloadPdfLayout)}
          style="text-black bg-[#a4e636] rounded-[10px] p-3 font-semibold cursor-pointer"
        />
        <Button
          icon={FiImage}
          type="btn"
          title={"Create Athlete Card"}
          onClick={() => setOpenCardCreationLayout(!openCardCreationLayout)}
          style="text-[#a4e636] bg-[#ffffff] rounded-[10px] p-3 font-semibold cursor-pointer"
        />
        <Button
          icon={FiMail}
          type="btn"
          title={"Request a Consultation"}
          onClick={() =>
            setOpenConsultationRequestLayout(!openConsultationRequestLayout)
          }
          style="text-black bg-[#a4e636] rounded-[10px] p-3 font-semibold cursor-pointer"
        />
      </div>
      <p className="text-[#94a3b8]">
        Includes athlete profile, power zones and sustainable power in one PDF
      </p>
    </div>
  );
};

export default PageHeader;
