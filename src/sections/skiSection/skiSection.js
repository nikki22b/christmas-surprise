import React, {useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss"
import Heading from '../../components/heading/heading';
import skiGirl from '../../assets/images/ski-girl.png';

function SkiSection() {
    gsap.registerPlugin(ScrollTrigger);
    const skiRef = useRef();
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
                scrollTrigger: {
                    start: "80px center",
                    trigger: rootEl.current,
                },
        })
    });

    useEffect(() => {
        const element = skiRef.current;
        gsap.fromTo(
            element,
            {
                y: 0,
                x: 200,
                scale: 0.1,
            },
            {
            y: 120,
            x: -60,
            scale: 1,
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: rootEl.current,
                start: "20px center",
            },
        }
        );
    });

    return (
        <div className={styles.skiSection}>
            <div className={styles.skiSection__content} ref={rootEl} >
                <Heading 
                    tag="h2"
                    variant="primary"
                    customClass={styles.skiSection__mainline}
                    ref={headingRef}
                >
                    Wir fahren zur Biathlon WM
                </Heading>
            </div>
            <img ref={skiRef} src={skiGirl} alt="Skifahrerin" className={styles.skiSection__skiGirl} />
        </div>
  );
}

export default SkiSection;