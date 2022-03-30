import React from 'react'
import styles from './NavBar.module.css'
import { ActiveLinks } from '../ActiveLinks/ActiveLinks'

export const NavBar = () => {
  return (
    <div className={styles.menu}>
        <ActiveLinks href="/" text="Home page"/>
        <ActiveLinks href="/about" text="About"/>
        <ActiveLinks href="/contact" text="Contact"/>
    </div>
  )
}
