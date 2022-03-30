import React from 'react'
import Link from 'next/link'

export const ActiveLinks = ({ text, href }) => {
  return (
    <Link href={href}>{text}</Link>
  )
}
