import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Fade } from "react-reveal";

function FaqItem(props) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <>
      <Fade up duration={800}>
        {/* FAQ */}
        <div
          className="max-w-5xl mx-auto text-left text-white mt-5 cursor-pointer border-[0.5px] rounded-lg"
          onClick={() => setIsFaqOpen(!isFaqOpen)}
        >
          {/* QUESTION */}
          <div className="bg-blupayBlue-300 h-16 flex justify-between align-middle px-10">
            <h4 className="my-auto font-medium">{props.question}?</h4>
            <button>
              {isFaqOpen ? (
                <span>
                  <FaCaretUp />
                </span>
              ) : (
                <span>
                  <FaCaretDown />
                </span>
              )}
            </button>
          </div>

          {/* ANSWER */}
          <div
            className="px-10 mt-5 shadow-sm pb-5 text-white border-t-[0.5]"
            style={{
              display: isFaqOpen ? "block" : "none",
              height: !isFaqOpen ? "0px" : "auto",
            }}
          >
            <p>{props.answer}</p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default FaqItem;
