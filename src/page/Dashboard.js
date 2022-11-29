import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import ApplicationComponent from "../components/ApplicationComponent";
import { db } from "../components/firebase";
import Model from "../components/Model";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [openModel, setOpenModel] = useState(false);
  const [applications, setApplications] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const getApplications = async () => {
    const queryRef = query(
      collection(db, "applications"),
      where("user", "==", user?.uid)
    );

    const querySnapshot = await getDocs(queryRef);
    const getApplications = [];
    querySnapshot.forEach((doc) =>
      getApplications.push({
        application: doc.data(),
        id: doc.id,
      })
    );

    setApplications(getApplications);
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <section className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-10 flex gap-8 flex-wrap bg-slate-50">
        {applications?.map(({ id, application }) => (
          <ApplicationComponent key={id} id={id} application={application} />
        ))}
      </div>
      <div className="fixed bottom-10 right-8 z-40 ">
        <button
          onClick={() => setOpenModel(true)}
          className="button text-black hover:text-white mt-0 bg-transparent hover:bg-[#2cd6b5]"
        >
          Create New
        </button>
        <Model openModel={openModel} setOpenModel={setOpenModel} />
      </div>
    </section>
  );
};

export default Dashboard;
