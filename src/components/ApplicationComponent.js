import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditModel from "./EditModel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";

const ApplicationComponent = ({ id, application }) => {
  const [openEditModel, setOpenEditModel] = useState(false);
  const deleteApplication = (id) => {
    deleteDoc(doc(db, "applications", id));
    window.location.reload();
  };

  return (
    <div className="bg-white h-fit group relative p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out max-w-fit">
      <img src="/" alt="" />
      <div>
        <h2 className="font-semibold text-gray-900">{application?.name}</h2>
        <p className="text-gray-700 text-sm">{application?.workExperience}</p>
        <div className="flex items-center space-x-3 mb-3 mt-1">
          <a
            href={application?.resume}
            className="text-gray-700 text-sm cursor-pointer hover:underline"
          >
            Resume
          </a>

          <a
            href={application?.coverLetter}
            className="text-gray-700 text-sm cursor-pointer hover:underline"
          >
            CV Letter
          </a>
        </div>
        <p className="text-gray-700 text-sm">
          <LocationOnOutlinedIcon sx={{ fontSize: "20px" }} />
          {application?.address},{application?.citizen}
        </p>
        <p className="text-gray-700 text-sm">
          <PermIdentityOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
          {application?.gander}
        </p>
        <p className="text-gray-700 text-sm">
          <HistoryEduOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
          {application?.school}
        </p>
        <p className="text-gray-700 text-sm">
          <SchoolIcon sx={{ fontSize: "20px" }} /> {application?.degree}
        </p>
        <p className="text-gray-700 text-sm">
          <SubjectOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
          {application?.majorDiscipline}
        </p>
        <p className="text-gray-700 text-sm">
          <AccessTimeOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
          {application?.startYear} to {application?.endYear}
        </p>

        <p className="text-gray-700 text-sm cursor-pointer">
          <LinkedInIcon sx={{ fontSize: "20px" }} /> {application?.linkedin}
        </p>
        <p className="text-gray-700 text-sm cursor-pointer">
          <LanguageOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
          {application?.personalWebsite}
        </p>
      </div>
      <div className="absolute top-4 right-4 flex items-center transition-all duration-700 ease-in-out space-x-1 opacity-0 group-hover:opacity-100">
        <EditIcon
          onClick={() => setOpenEditModel(true)}
          sx={{ fontSize: "20px", cursor: "pointer" }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteApplication(id)}
          sx={{ fontSize: "20px", cursor: "pointer" }}
        />
      </div>
      <EditModel
        openEditModel={openEditModel}
        setOpenEditModel={setOpenEditModel}
        id={id}
        value={application}
      />
    </div>
  );
};

export default ApplicationComponent;
