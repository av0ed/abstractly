import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "@remixicon/react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const QUESTION_ID = `faq-question-${uuidv4()}`;
  const ANSWER_ID = `faq-answer-${uuidv4()}`;

  return (
    <div className="flex flex-row gap-x-4">
      <div className="flex flex-col gap-y-2">
        <p id={QUESTION_ID} className="text-lg font-medium text-neutral-900">
          {question}
        </p>
        <p
          id={ANSWER_ID}
          aria-hidden={!showAnswer}
          aria-labelledby={QUESTION_ID}
          className={`text-neutral-600 overflow-hidden transition-max-height duration-150 ease-in-out ${showAnswer ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          {answer}
        </p>
      </div>
      <div className="flex">
        <button
          aria-controls={ANSWER_ID}
          aria-expanded={showAnswer}
          aria-label={showAnswer ? "Hide FAQ answer" : "Show FAQ answer"}
          className="self-start focus:outline-none focus:ring focus:ring-indigo-200"
          onClick={toggleAnswer}
        >
          {showAnswer ? (
            <RiIndeterminateCircleLine className="h-6 w-6 text-neutral-400" />
          ) : (
            <RiAddCircleLine className="h-6 w-6 text-neutral-400" />
          )}
        </button>
      </div>
    </div>
  );
}
