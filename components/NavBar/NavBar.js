import React from 'react'
import styles from './NavBar.module.css'
import { ActiveLinks } from '../ActiveLinks/ActiveLinks'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <div className={styles.menu}>
    {
      menuItems.map( m => {
        return <ActiveLinks href={m.href} text={m.text}/> 
      })
    }
    </div>
  )
}
