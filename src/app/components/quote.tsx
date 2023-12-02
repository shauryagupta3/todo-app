// components/DispQuote.tsx
'use client'
import React, { useEffect, useState } from "react";
import { getQuote } from "@/app/components/server"; // Adjust the path accordingly

interface Quote {
  quote: string;
  character: string;
  anime: string;
}

function DispQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await getQuote();
        setQuote(response);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  if (!quote) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="quote bg-white">
        <p className="text-black text-center font-bold">{quote.quote}</p>
      </div>
      <p className="text-right">
        ~ {quote.character} ({quote.anime})
      </p>
    </>
  );
}

export default DispQuote;
