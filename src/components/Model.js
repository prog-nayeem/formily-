import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
import AlertComponent from "./AlertComponent";

const Model = ({ openModel, setOpenModel }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [application, setApplication] = useState({
    name: "",
    workExperience: "",
    address: "",
    school: "",
    degree: "",
    majorDiscipline: "",
    startYear: "",
    endYear: "",
    linkedin: "",
    personalWebsite: "",
    howDidYouHearAboutUs: "",
    gander: "",
    ethnicity: "",
    citizen: "",
  });
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };

  const handleResume = (e) => {
    const resume = e.target.files[0];
    const storageRef = ref(storage, `/files/${user.uid}/${resume.name}`);

    uploadBytes(storageRef, resume).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setResume(downloadURL);
      });
    });
  };

  const handleCoverLetter = (e) => {
    const coverLetter = e.target.files[0];
    const storageRef = ref(storage, `/files/${user.uid}/${coverLetter.name}`);

    uploadBytes(storageRef, coverLetter).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setCoverLetter(downloadURL);
      });
    });
  };

  const handleClose = () => {
    setOpenModel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = collection(db, "applications");
      await addDoc(docRef, {
        ...application,
        resume,
        coverLetter,
        user: user?.uid,
        timestamp: serverTimestamp(),
      });
      setOpenAlert({
        open: true,
        type: "success",
        message: `Application upload successfully`,
      });
      window.location.reload();
      setOpenModel(false);
    } catch (error) {
      setOpenAlert({
        open: true,
        type: "error",
        message: error,
      });
    }
  };

  return (
    <>
      <Dialog
        style={{
          minWidth: "600px",
          paddingRight: "50px",
          paddingLeft: "50px",
        }}
        open={openModel}
        onClose={handleClose}
      >
        <DialogTitle sx={{ padding: "0px" }}>Job Application</DialogTitle>
        <form>
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            value={application.name}
            name="name"
            onChange={handleChange}
            // placeholder="John"
          />

          <label className="label">Work Experience</label>
          <input
            className="input"
            type="text"
            value={application.workExperience}
            name="workExperience"
            onChange={handleChange}
            // placeholder="More than 3 year of experience"
          />

          <label className="label">Address</label>
          <input
            className="input"
            type="text"
            value={application.address}
            name="address"
            onChange={handleChange}
            // placeholder="415 Centennial Farm Road"
          />

          <label className="label">Resume</label>
          <input
            className="input"
            type="file"
            name="resume"
            accept="application/pdf"
            onChange={handleResume}
          />

          <label className="label">Cover Letter</label>
          <input
            className="input"
            type="file"
            name="coverLetter"
            accept="application/pdf"
            onChange={handleCoverLetter}
          />

          <label className="label">School</label>
          <input
            className="input"
            type="text"
            value={application.school}
            name="school"
            onChange={handleChange}
            // placeholder="School"
          />

          <label className="label">Degree</label>
          <input
            className="input"
            type="text"
            value={application.degree}
            name="degree"
            onChange={handleChange}
            // placeholder="Bachelor degree"
          />

          <label className="label">Major Discipline</label>
          <input
            className="input"
            type="text"
            value={application.majorDiscipline}
            name="majorDiscipline"
            onChange={handleChange}
            // placeholder=""
          />

          <label className="label">Start Year</label>
          <input
            className="input"
            type="number"
            value={application.startYear}
            name="startYear"
            onChange={handleChange}
            // placeholder="2014"
          />

          <label className="label">End Year</label>
          <input
            className="input"
            type="number"
            value={application.endYear}
            name="endYear"
            onChange={handleChange}
            // placeholder="2018"
          />
          <label className="label">Linkedin</label>
          <input
            className="input"
            type="text"
            value={application.linkedin}
            name="linkedin"
            onChange={handleChange}
            // placeholder="https://www.linkedin.com/in/nayem-ahammad"
          />
          <label className="label">Personal Website</label>
          <input
            className="input"
            type="text"
            value={application.personalWebsite}
            name="personalWebsite"
            onChange={handleChange}
            // placeholder="https://www.nayemdev.com"
          />

          <label className="label">How did you hear about us?</label>
          <select
            className="input"
            name="howDidYouHearAboutUs"
            onChange={handleChange}
            placeholder="Co-founder"
            value={application.howDidYouHearAboutUs}
          >
            <option selected disabled value=""></option>
            <option>Search Engine</option>
            <option>Social (Facebook, Linkedin, Twitter, etc)</option>
            <option>Email</option>
            <option>Blog</option>
            <option>Others</option>
          </select>

          <label className="label">Gander</label>
          <select
            className="input"
            name="gander"
            onChange={handleChange}
            placeholder="Male"
            value={application.gander}
          >
            <option selected disabled value=""></option>
            <option>Male</option>
            <option>Female</option>
            <option>Not Given</option>
          </select>
          <label className="label">Ethnicity</label>
          <input
            className="input"
            type="text"
            value={application.ethnicity}
            name="ethnicity"
            onChange={handleChange}
            // placeholder="American Indian or Alaska Native"
          />

          <label className="label">Citizen</label>
          <input
            className="input"
            type="text"
            value={application.citizen}
            name="citizen"
            onChange={handleChange}
            // placeholder="US"
          />

          <DialogActions sx={{ padding: "0px", marginTop: "20px" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </>
  );
};

export default Model;
