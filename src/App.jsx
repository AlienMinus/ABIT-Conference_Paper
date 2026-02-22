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


function App() {
  return (
    <Layout>
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
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
