import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { NavBarWrapper } from "./style"
import { NavLink } from "react-router-dom"

import discoverBar from "@/assets/data/discover-bar-data.json"

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapper>
      <div className="nav-list">
        {discoverBar.map((item) => (
          <NavLink className="nav-item" key={item.label} to={item.router}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
