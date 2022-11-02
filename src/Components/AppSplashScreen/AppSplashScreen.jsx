import React from 'react'
import "./appsplashscreen.scss"

const AppSplashScreen = () => {
    const techStacks = [
        { id: 1, stack: "HTML" },
        { id: 2, stack: "CSS/SCSS" },
        { id: 3, stack: "Javascript" },
        { id: 4, stack: "Typescript" },
        { id: 5, stack: "React" },
        { id: 6, stack: "Redux" },
        { id: 7, stack: "VueJS" },
        { id: 8, stack: "Node JS" },
        { id: 9, stack: "Express JS" },
        { id: 10, stack: "Mongo DB" },
    ];
    return (
        <div className='splashscreen'>
            <div className='mainDiv'>
                <div>Zainab.O.</div>
                <div className="stacksContainer">
                   {techStacks.map((item) => (
                        <div className='stacksText' key={item.id}>{item.stack}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AppSplashScreen