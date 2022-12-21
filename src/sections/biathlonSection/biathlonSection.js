import React, {useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss"
import Heading from '../../components/heading/heading';
import biathletin from '../../assets/images/biathlon.png';
import shoot from '../../assets/images/shoot.png';

function BiathlonSection() {
    gsap.registerPlugin(ScrollTrigger);
    const shootRef = useRef();
    const headingRef = useRef();
    const rootEl = useRef(null);
    useEffect(() => {
        console.log(headingRef)
        gsap.fromTo(
            headingRef.current, 
            {
                x: -20,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    start: "top center",
                    trigger: rootEl.current,
                },
        })
    });

    useEffect(() => {
        const element = shootRef.current;
        gsap.fromTo(
            element,
            {
                opacity: 1,
                x: 0,
            },
            {
            opacity: 0,
            delay: 1.5,
            x: 3,
            duration: 1,
            ease: "none",
            repeat: -1,
            scrollTrigger: {
                trigger: rootEl.current,
                start: "top bottom",
            },
        }
        );
    });

    return (
        <div className={styles.biathlonSection}>
            <div className={styles.biathlonSection__content} ref={rootEl} >
                <Heading 
                    tag="h2"
                    variant="primary"
                    customClass={styles.biathlonSection__mainline}
                    ref={headingRef}
                >
                    Bei der Biathlon WM in Oberhof
                </Heading>
            </div>
            <div className={styles.biathlonSection__visuals}>
                <img src={biathletin} alt="Biathletin" className={styles.biathlonSection__biathletin} />
                <img ref={shootRef} src={shoot} alt="Schuss" className={styles.biathlonSection__shoot} />
            </div>
            
        </div>
  );
}

export default BiathlonSection;