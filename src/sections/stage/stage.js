import React, {useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss"
import Heading from '../../components/heading/heading';
import mountains from '../../assets/images/stage-bg.png';
import mountainsBg from '../../assets/images/stage-bg-second.png';
import snow from '../../assets/images/snow.png'

function Stage() {
    gsap.registerPlugin(ScrollTrigger);
    const bgRef = useRef();
    const snowRef = useRef();
    const headingRef = useRef();
    const rootEl = useRef(null);
    useEffect(() => {
        console.log(headingRef)
        gsap.fromTo(
            headingRef.current, 
            {
                x: -20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                delay: 1,
                
        })
    });

    useEffect(() => {
        const element = bgRef.current;
        gsap.fromTo(
            element,
            {
                y: -150,
            },
            {
            y: 50,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: rootEl.current,
                scrub: true,
            },
        }
        );
    });

    useEffect(() => {
        const element = snowRef.current;
        gsap.fromTo(
            element,
            {
                y: -150,
                x: -50,
            },
            {
            y: 0,
            x: 50,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: rootEl.current,
                scrub: true,
            },
        }
        );
    });

    return (
        <div className={styles.stage}>
            <div className={styles.stage__content} ref={rootEl} >
                <Heading 
                    tag="h1"
                    variant="primary"
                    customClass={styles.stage__mainline}
                    ref={headingRef}
                >
                    Zieh dich warm an!
                </Heading>
            </div>
            <img src={mountains} alt="Berge von Oberhof" className={styles.stage__mountains} />
            <img ref={snowRef} src={snow} alt="Schneeflocken" className={styles.stage__snow} />
            <img 
                ref={bgRef}
                src={mountainsBg} 
                alt="Berge von Oberhof" 
                className={`
                    ${styles.stage__mountains}
                    ${styles['stage__mountains--second']}
                `} 
            />
        </div>
  );
}

export default Stage;