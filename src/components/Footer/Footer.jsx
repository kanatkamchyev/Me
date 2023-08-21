import React from 'react'
import { BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTypescript, BiLogoWordpress } from 'react-icons/bi'

import './Footer.scss'

export const Footer = () => {
  return (
    <div className='Footer' id='contact'>
      <div className="container">
        <div className="Footer__inside">
          <p>Kanat Kamchyev</p>
          <ul>
            <li><a href="https://ru.legacy.reactjs.org/"><BiLogoReact /> React </a> </li>
            <li><a href="https://learn.javascript.ru/"><BiLogoTypescript /> TypeScript</a> </li>
            <li><a href="https://www.typescriptlang.org/"><BiLogoJavascript /> JavaScript</a> </li>
            <li><a href="https://ru.wordpress.org/"><BiLogoWordpress /> Wordpress</a> </li>
            <li><a href="https://www.djangoproject.com/start/"><BiLogoPython /> Python Django</a> </li>
          </ul>
          <div className="social">
            <a href="https://www.instagram.com/kamch1ev.k/"><BsInstagram /></a>
            <a href="https://wa.me/+996771696945"><BsWhatsapp /></a>
            <a href="https://t.me/kamchyev"><BsTelegram /></a>
            <a href="mailto:mail@kanatkamchyev2004@gmail.com"><CgMail /></a>
          </div>
          <p className='end'>CopyRight by Kanat Kamchyev</p>
        </div>
      </div>
    </div>
  )
}
