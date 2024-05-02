import "./Game.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Figure from "../components/Figure";
import WrongLetters from "../components/WrongLetters";

import Notification from "../components/Notification";
import Word from "../components/Word";

import Popup from "../components/Popup";
import { showNotification as show } from "../helpers/helpers";

const words = ["application", "alpha", "tango", "programming", "interface", "wizard", "maverick"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
function Game() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setcorrectLetters] = useState([]);
    const [wrongLetters, setwrongLetters] = useState([]);
    const [showNotification, setshowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = (event) => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setcorrectLetters((currentLetters) => [...currentLetters, letter]);
                    } else {
                        show(setshowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setwrongLetters((wrongLetters) => [...wrongLetters, letter]);
                    } else {
                        show(setshowNotification);
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeydown);

        return () => window.removeEventListener("keydown", handleKeydown);
    }, [correctLetters, wrongLetters, playable]);
    function playAgain() {
        setPlayable(true);

        // empty arrays
        setcorrectLetters([]);
        setwrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <div className="bg-[rgb(23,40,66)] h-[90vh]">
            <div className="game-container">
            <Header />
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
            <Popup
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                selectedWord={selectedWord}
                setPlayable={setPlayable}
                playAgain={playAgain}
            />
            <Notification showNotification={showNotification} />
        </div>
    );
}

export default Game




