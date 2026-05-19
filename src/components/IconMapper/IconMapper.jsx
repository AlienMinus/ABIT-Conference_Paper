import React from 'react'

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFileAlt,
  FaCheckCircle,
  FaUser,
  FaEarlybirds,
  FaVideo,
  FaBullseye,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBrain,
  FaDatabase,
  FaNetworkWired,
  FaServer,
  FaMicrochip,
  FaBolt,
  FaTimesCircle,
  FaGlobe,
  FaFilePdf,
  FaPlane,
  FaTrain,
  FaRoute,
  FaSearch,
  FaTimes,
  FaSun,
  FaMoon,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaRobot,
  FaPaperPlane,
  FaCommentDots,
  FaChartLine,
  FaLightbulb,
  FaCar,
  FaBatteryHalf,
  FaShieldAlt,
  FaProjectDiagram,
  FaLeaf
} from 'react-icons/fa'

import { FaXTwitter } from 'react-icons/fa6'
import { IoIosRibbon } from 'react-icons/io'
import { BsCheck2Circle } from 'react-icons/bs'
import { LuConstruction } from 'react-icons/lu'

const iconMap = {
  // Social Media
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  X: FaXTwitter,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,

  // Important Dates
  FaFileAlt: FaFileAlt,
  FaCheckCircle: FaCheckCircle,
  FaUser: FaUser,
  FaEarlybirds: FaEarlybirds,
  FaVideo: FaVideo,
  FaBullseye: FaBullseye,

  // Hero
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaCalendarAlt: FaCalendarAlt,

  // Research Tracks
  FaBrain: FaBrain,
  FaDatabase: FaDatabase,
  FaNetworkWired: FaNetworkWired,
  FaServer: FaServer,
  FaMicrochip: FaMicrochip,
  FaBolt: FaBolt,
  FaChartLine: FaChartLine,
  FaLightbulb: FaLightbulb,
  FaCar: FaCar,
  FaBatteryHalf: FaBatteryHalf,
  FaShieldAlt: FaShieldAlt,
  FaProjectDiagram: FaProjectDiagram,
  FaRobot: FaRobot,
  FaLeaf: FaLeaf,

  // Misc
  IoIosRibbon: IoIosRibbon,
  BsCheck2Circle: BsCheck2Circle,
  FaTimesCircle: FaTimesCircle,
  FaGlobe: FaGlobe,
  FaFilePdf: FaFilePdf,
  FaPlane: FaPlane,
  FaTrain: FaTrain,
  FaRoute: FaRoute,
  FaSearch: FaSearch,
  FaTimes: FaTimes,
  FaSun: FaSun,
  FaMoon: FaMoon,
  FaArrowUp: FaArrowUp,
  FaEnvelope: FaEnvelope,
  FaPhone: FaPhone,
  FaPaperPlane: FaPaperPlane,
  FaCommentDots: FaCommentDots,
  LuConstruction: LuConstruction
}

const IconMapper = ({ iconName, ...props }) => {
  const Icon = iconMap[iconName]

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found`)
    return null
  }

  return <Icon {...props} />
}

export default IconMapper;