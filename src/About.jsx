import React from "react"
import "./index.css"

export default function Main(){
        return(
            <div className="about">
                <h1>Stephen Okwuchukwu</h1>
                <h4>Frontend Developer</h4>
                <div className="btn-container">
                    <a href="https://www.stephenokwuchukwu2018@gmail.com" className="email">
                    <iconify-icon inline icon="ic:sharp-mark-email-unread"></iconify-icon>
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/stephen-melchizedek-okwuchukwu-a037ab237" className="linkedin color">
                        <iconify-icon inline icon="akar-icons:linkedin-box-fill"></iconify-icon>
                        <span>Linkedin</span>
                    </a>
                </div>
                <h2 className="subtitle about-title">About</h2>
                <p className="subtitle-p">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="subtitle interest">Interests</h2>
                <p className="subtitle-p">Blockchain. Crypto/Fx trading. Music. Reader. Internet fanatic. Tech nerd. Entrepreneur. Travel geek. Basketball.</p>
            </div>
        )
}