import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaFileAlt, FaCheckCircle, FaUser, FaEarlybirds, FaVideo, FaBullseye, FaMapMarkerAlt, FaCalendarAlt, FaBrain, FaDatabase, FaNetworkWired, FaServer, FaMicrochip, FaBolt, FaTimesCircle, FaGlobe, FaFilePdf, FaPlane, FaTrain, FaRoute, FaSearch, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosRibbon } from 'react-icons/io'
import { BsCheck2Circle } from 'react-icons/bs'

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
  FaMoon: FaMoon
}

const IconMapper = ({ iconName, ...props }) => {
  const Icon = iconMap[iconName]
  if (!Icon) return null
  return <Icon {...props} />
}

export default IconMapper