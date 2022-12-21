import React, {useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss"
import Heading from '../../components/heading/heading';
import Copy from '../../components/copy/copy';
import erfurt from '../../assets/images/houses.png';
import sun from '../../assets/images/sun.png';
import moon from '../../assets/images/moon.png';

function ErfurtSection() {
    gsap.registerPlugin(ScrollTrigger);
    const sunRef = useRef();
    const moonRef = useRef();
    const copyRef = useRef();
    const headingRef = useRef();
    const rootEl = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            headingRef.current, 
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    start: "bottom bottom",
                    trigger: rootEl.current,
                },
        })
    });

    useEffect(() => {
        gsap.fromTo(
            copyRef.current, 
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    start: "bottom bottom",
                    trigger: rootEl.current,
                },
        })
    });

    useEffect(() => {
        const element = rootEl.current;
        gsap.fromTo(
            element,
            {
                background: "linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(214,233,255,1) 15%, rgba(250,201,201,1) 100%)",
            },
            {
            background: "linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(205,144,155,1) 30%, rgba(9,60,142,1) 50%)",
            scrollTrigger: {
                trigger: rootEl.current,
                start: "80px center",
                end: "center center",
                scrub: true,
            },
        }
        );
    });
    


    useEffect(() => {
        const element = sunRef.current;
        gsap.fromTo(
            element,
            {
                y: 0,
            },
            {
                y: 230,
            scrollTrigger: {
                trigger: rootEl.current,
                start: "80px center",
                end: "center center",
                scrub: true,
            },
        }
        );
    });

    useEffect(() => {
        const element = moonRef.current;
        gsap.fromTo(
            element,
            {
                y: 260,
            },
            {
                y: 10,
            scrollTrigger: {
                trigger: rootEl.current,
                start: "80px center",
                end: "center center",
                scrub: true,
            },
        }
        );
    });

    return (
        <div className={styles.ErfurtSection}>
            <div ref={rootEl} className={styles.ErfurtSection__wrapper}>
                <img src={erfurt} alt="Altstadt von Erfurt" className={styles.ErfurtSection__houses} />
                <img ref={sunRef} src={sun} alt="Sonne über Erfurt" className={styles.ErfurtSection__sun} />
                <img ref={moonRef} src={moon} alt="Mond über Erfurt" className={styles.ErfurtSection__moon} />
                <div className={styles.ErfurtSection__content}>
                    <Heading 
                        tag="h2"
                        variant="primary"
                        customClass={styles.ErfurtSection__mainline}
                        ref={headingRef}
                    >
                        Wir übernachten im Radisson Blu Erfurt
                    </Heading>
                    <div ref={copyRef}>
                        <Copy>
                            <strong>Von:</strong> Freitag, 17.02.23
                            <br />
                            <strong>Bis: </strong>Sonntag, 19.02.23
                        </Copy>
                        <Copy>
                            <strong>Und schauen uns an:</strong>
                            <br />
                            Die Staffeln am Samstag
                            <br />
                            Und die Massenstarts am Sonntag
                        </Copy>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default ErfurtSection;