'use client';

import { useState, useEffect } from 'react';

const quotes = [
    { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
    { text: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca" },
    { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
    { text: "No man is free who is not master of himself.", author: "Epictetus" },
    { text: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },
    { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
    { text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", author: "Marcus Aurelius" },
    { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
    { text: "If it is not right do not do it; if it is not true do not say it.", author: "Marcus Aurelius" }
];

export default function QuoteGenerator() {
    // Use state to handle client-side randomization to avoid hydration mismatch
    const [quote, setQuote] = useState(quotes[0]);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Randomize on initial load
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    const getNewQuote = () => {
        setIsFading(true);
        setTimeout(() => {
            let newQuote;
            do {
                newQuote = quotes[Math.floor(Math.random() * quotes.length)];
            } while (newQuote === quote && quotes.length > 1);

            setQuote(newQuote);
            setIsFading(false);
        }, 300); // Wait for fade out
    };

    return (
        <div>
            <div
                className="quote-container"
                style={{ opacity: isFading ? 0 : 1 }}
            >
                <p className="quote-text">"{quote.text}"</p>
                <span className="quote-author">— {quote.author}</span>
            </div>

            <div className="quote-btn-container">
                <button onClick={getNewQuote} className="quote-btn">
                    Consult Wisdom
                </button>
            </div>
        </div>
    );
}
