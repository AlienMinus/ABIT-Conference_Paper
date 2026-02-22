import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Committee from './pages/Committee'
import ProgramCommittee from './components/Committee/ProgramCommittee'
import AdvisoryCommittee from './components/Committee/AdvisoryCommittee'
import TechnicalCommittee from './components/Committee/TechnicalCommittee'
import ForAuthor from './pages/ForAuthor';
import CallForPaper from './components/ForAuthors/CallForPaper/CallForPaper';
import PaperSubmission from './components/ForAuthors/PaperSubmission/PaperSubmission';
import Sponsorship from './pages/Sponsorship';
import Registration from './components/ForAuthors/Registration/Registration';
import CameraReady from './components/ForAuthors/CameraReady/CameraReady';
import PresentationGuidelines from './components/ForAuthors/PresentationGuidelines/PresentationGuidelines';
import BestPaperAward from './components/ForAuthors/BestPaperAward/BestPaperAward';
import Program from './pages/Program';
import KeynoteTalks from './components/Program/KeynoteTalks/KeynoteTalks';
import ProgramSchedule from './components/Program/ProgramSchedule/ProgramSchedule';
import StudentSymposium from './components/Program/StudentSymposium/StudentSymposium';
import ConferenceProceeding from './components/Program/ConferenceProceeding/ConferenceProceeding';
import Venue from './pages/Venue';
import ConferenceVenue from './components/Venue/ConferenceVenue/ConferenceVenue';
import Accommodations from './components/Venue/Accommodations/Accommodations';
import Sightseeing from './components/Venue/Sightseeing/Sightseeing';
import Gallery from './pages/Gallery';
import PastConferences from './pages/PastConferences';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />}>
          <Route index element={<Navigate to="program" replace />} />
          <Route path="program" element={<ProgramCommittee />} />
          <Route path="advisory" element={<AdvisoryCommittee />} />
          <Route path="technical" element={<TechnicalCommittee />} />
        </Route>
        <Route path="/for-authors" element={<ForAuthor />}>
          <Route path="call-for-papers" element={<CallForPaper />} />
          <Route path="paper-submission" element={<PaperSubmission />} />
          <Route path="registration" element={<Registration />} />
          <Route path="camera-ready" element={<CameraReady />} />
          <Route path="presentation-guidelines" element={<PresentationGuidelines />} />
          <Route path="best-paper-award" element={<BestPaperAward />} />
        </Route>
        <Route path="/program" element={<Program />}>
          <Route path="keynote" element={<KeynoteTalks />} />
          <Route path="schedule" element={<ProgramSchedule />} />
          <Route path="student-symposium" element={<StudentSymposium />} />
          <Route path="conference-proceeding" element={<ConferenceProceeding />} />
        </Route>
        <Route path="/venue" element={<Venue />}>
          <Route path="conference-venue" element={<ConferenceVenue />} />
          <Route path="accommodations" element={<Accommodations />} />
          <Route path="sightseeing" element={<Sightseeing />} />
        </Route>
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/past-conferences" element={<PastConferences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
