import React from 'react'
import styles from '../styles/styles.module.scss'
import Link from 'next/link'
import data from '../data/data'
function navbar() {
  return (
    <div>
      <div className={styles.navContainer}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Link
                className="text-cadiz-no-color  text-rich-blue  text-lg font-medium"
                href={item.link}
              >
                {item.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default navbar
