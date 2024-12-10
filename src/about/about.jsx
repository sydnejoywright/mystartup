import React, { useState, useEffect } from 'react';
import './about.css';

export function About() {
  const [verse, setVerse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getVerse = () => {
    setIsLoading(true);
    const script = document.createElement('script');
    script.src = "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback";
    script.async = true;

    // Define callback function
    window.myCallback = (result) => {
      if (result && result.length > 0) {
        const { bookname, chapter, verse, text } = result[0];
        setVerse(`${bookname} ${chapter}:${verse} - ${text}`);
      }
      setIsLoading(false);
    };

    // Append script to the document
    document.body.appendChild(script);

    // Cleanup function to remove script
    return () => {
      document.body.removeChild(script);
      delete window.myCallback;
    };
  };

  useEffect(() => {
    getVerse();
  }, []);

  return (
    <main className="about-page">
      <div className="content-wrapper">
        <p>
          This app draws upon Preach My Gospel and other resources from The Church of Jesus Christ of Latter-Day Saints to provide those unfamiliar with The Book of Mormon the opportunity for a self-guided experience reading select passages that address the questions of the soul.
        </p>
        <div className="container">
          <h1 align="center" className="text-primary">Daily Scripture</h1>
          <p className="text-info" id="newQuote">{verse || "Loading verse..."}</p>
          {isLoading && (
            <div align="center" id="spinner">
              <img
                src="https://www.miamidade.gov/propertysearch/images/ajax-loader.gif"
                alt="Loading..."
                width="70"
                height="40"
              />
            </div>
          )}
          <div align="center">
            <button
              className="btn btn-primary"
              onClick={getVerse}
              disabled={isLoading}
            >
              New Verse
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
