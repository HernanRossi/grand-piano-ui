import React, { FunctionComponent } from "react"
import "./styles.css"
import { LogoDiv } from "../../styles/styled-components"

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <LogoDiv />
      Hernan Rossi {currentYear}
    </footer>
  )
}