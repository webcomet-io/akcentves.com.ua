import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import Logo from "../../../static/Logo.png"

const Header = () => {
  return (
    <div className={headerStyles.menu}>
      <input id={headerStyles.menuToggle} type={"checkbox"} />
      <label className={headerStyles.menuBtn} htmlFor={headerStyles.menuToggle}>
        <span></span>
      </label>

      <div className={headerStyles.menuBox}>
        <img src={Logo} alt={"logo"} />
        <ul className={headerStyles.menuList}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/">О нас</Link>
          </li>
          <li>
            <Link to="/">Наша деятельность</Link>
          </li>
          <li>
            <Link to="/">Наши работы</Link>
          </li>
          <li>
            <Link to="/">Контакты</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
