import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function SoundSyncSymphonyPage() {
    const [loaded, setLoaded] = useState(
        JSON.parse(localStorage.getItem("loaded")) || false
    );

    const animationProps = useSpring({
        from: { opacity: 0, marginTop: -50 },
        to: { opacity: loaded ? 1 : 0, marginTop: loaded ? 0 : -50 },
        config: { duration: 2000 },
    });

    const textAnimationProps = useSpring({
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(100%)" },
        loop: { reverse: true },
        config: { duration: 5000, reset: true },
    });

    useEffect(() => {
        localStorage.setItem("loaded", JSON.stringify(loaded));
    }, [loaded]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <animated.div
            style={animationProps}
            className="flex flex-col items-center justify-center h-screen bg-gray-900"
        >
            <animated.h1
                style={textAnimationProps}
                className="text-2xl font-bold mb-8 text-white"
            >
                React Mini Project for ST 2
            </animated.h1>
            <animated.h1 className="text-4xl font-bold mb-8 text-white">
                Mini Project
            </animated.h1>
            <div className="space-x-4">
                <Link to="/signup">
                    <button className="mr-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign Up
                    </button>
                </Link>
                <Link to="/login">
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Log In
                    </button>
                </Link>
            </div>
        </animated.div>
    );
}