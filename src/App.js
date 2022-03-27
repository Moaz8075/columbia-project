import { Route, Routes } from "react-router-dom";
import "./App.css";
import EducationHistory from "./Pages/EducationHistory";
import FreeImageReview from "./Pages/FreeCaseReview/FreeImageReview";
import NewsAndEvents from "./Pages/NewsAndEvents/NewsAndEvents.jsx";
import OfficesAndHospitals from "./Pages/OfficesAndHospitals";
import PatientEmrPortal from "./Pages/PatientEmrPortal";
import ResearchAndPublications from "./Pages/ResearchAndPublications/ResearchAndPublications.jsx";
import WhatWeDo from "./Pages/WhatWeDo";
import WhoWeAre from "./Pages/WhoWeAre";
import MediaAndPatient from "./Pages/MediaAndPatient";
function App() {
  return (
    <Routes>
      <Route path="/news-and-events" element={<NewsAndEvents />} />
      <Route path="/about-us/what-we-do" element={<WhatWeDo />} />
      <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
      <Route
        path="/about-us/offices-and-hospitals"
        element={<OfficesAndHospitals />}
      />
      <Route
        path="/about-us/education-history"
        element={<EducationHistory />}
      />
      <Route path="/media-and-patient-stories" element={<MediaAndPatient />} />
      <Route path="/patient-emr-portal" element={<PatientEmrPortal />} />
      <Route
        path="/research-and-publications"
        element={<ResearchAndPublications />}
      />
      <Route path="/free-imaging-a-review" element={<FreeImageReview />} />

      <Route path="*" element={<NewsAndEvents />} />
    </Routes>
  );
}

export default App;
