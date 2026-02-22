import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const Committee = lazy(() => import('./pages/Committee'))
const ProgramCommittee = lazy(() => import('./components/Committee/ProgramCommittee'))
const AdvisoryCommittee = lazy(() => import('./components/Committee/AdvisoryCommittee'))
const TechnicalCommittee = lazy(() => import('./components/Committee/TechnicalCommittee'))
const ForAuthor = lazy(() => import('./pages/ForAuthor'))
const CallForPaper = lazy(() => import('./components/ForAuthors/CallForPaper/CallForPaper'))
const PaperSubmission = lazy(() => import('./components/ForAuthors/PaperSubmission/PaperSubmission'))
const Sponsorship = lazy(() => import('./pages/Sponsorship'))
const Registration = lazy(() => import('./components/ForAuthors/Registration/Registration'))
const CameraReady = lazy(() => import('./components/ForAuthors/CameraReady/CameraReady'))
const PresentationGuidelines = lazy(() => import('./components/ForAuthors/PresentationGuidelines/PresentationGuidelines'))
const BestPaperAward = lazy(() => import('./components/ForAuthors/BestPaperAward/BestPaperAward'))
const Program = lazy(() => import('./pages/Program'))
const KeynoteTalks = lazy(() => import('./components/Program/KeynoteTalks/KeynoteTalks'))
const ProgramSchedule = lazy(() => import('./components/Program/ProgramSchedule/ProgramSchedule'))
const StudentSymposium = lazy(() => import('./components/Program/StudentSymposium/StudentSymposium'))
const ConferenceProceeding = lazy(() => import('./components/Program/ConferenceProceeding/ConferenceProceeding'))
const Venue = lazy(() => import('./pages/Venue'))
const ConferenceVenue = lazy(() => import('./components/Venue/ConferenceVenue/ConferenceVenue'))
const Accommodations = lazy(() => import('./components/Venue/Accommodations/Accommodations'))
const Sightseeing = lazy(() => import('./components/Venue/Sightseeing/Sightseeing'))
const Gallery = lazy(() => import('./pages/Gallery'))
const PastConferences = lazy(() => import('./pages/PastConferences'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter