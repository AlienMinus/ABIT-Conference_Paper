import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaFileAlt, FaCheckCircle, FaUser, FaEarlybirds, FaVideo, FaBullseye, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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
  FaCalendarAlt: FaCalendarAlt
}

const IconMapper = ({ iconName, ...props }) => {
  const Icon = iconMap[iconName]
  if (!Icon) return null
  return <Icon {...props} />
}

export default IconMapper