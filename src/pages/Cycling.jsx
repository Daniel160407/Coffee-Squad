import { useState } from "react";
import Button from "../components/uiComponents/Button";
import { FiDownload, FiImage, FiMail } from "react-icons/fi";

const Cycling = () => {
  const [openDownloadPdfLayout, setOpenDownloadPdfLayout] = useState(false);
  const [openCardCreationLayout, setOpenCardCreationLayout] = useState(false);
  const [openConsultationRequestLayout, setOpenConsultationRequestLayout] =
    useState(false);

  return (
    <div>
      <div>
        <h1>O2 Coaching</h1>
        <p>Your performance laboratory</p>
        <div>
          <Button
            icon={FiDownload}
            type="btn"
            title={"Download your Complete Analysis"}
            onClick={() => setOpenDownloadPdfLayout(!openDownloadPdfLayout)}
          />
          <Button
            icon={FiImage}
            type="btn"
            title={"Create Athlete Card"}
            onClick={() => setOpenCardCreationLayout(!openCardCreationLayout)}
          />
          <Button
            icon={FiMail}
            type="btn"
            title={"Request a Consultation"}
            onClick={() =>
              setOpenConsultationRequestLayout(!openConsultationRequestLayout)
            }
          />
        </div>
        <p>Includes athlete profile, power zones and sustainable power in one PDF</p>
      </div>
    </div>
  );
};

export default Cycling;
