import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './header.module.css'
import { MenuList } from './list-menu'
type Props = {}

const Header = (props: Props) => {
    const router = useRouter()
  return (
    <div>
        <ul className={styles.menu}>
            {MenuList.map((menu,index) => (
                <li key={index} className={styles.item}>
                <Link href={menu.path}>
                    <a
                        className={clsx({
                            active: router.pathname === menu.path,
                        })}
                    >
                        {menu.label}
                    </a>
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Header