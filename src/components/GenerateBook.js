import { useState } from "react";
import { IoShuffle } from "react-icons/io5";

// function that returns a book title string
const randoBook = () => {
  const dateStr = Date.now().toString();
  let firstNoun;
  let secondNoun;
  switch (dateStr.at(-1)) {
    case "1":
      firstNoun = "Encyclopedia of";
      break;
    case "2":
      firstNoun = "Grimoire of";
      break;

    case "3":
      firstNoun = "Tome of";
      break;

    case "4":
      firstNoun = "Scroll of";
      break;

    case "5":
      firstNoun = "Lexicon of";
      break;

    case "6":
      firstNoun = "Ode to";
      break;

    case "7":
      firstNoun = "Encyclopaedia of";
      break;

    case "8":
      firstNoun = "Compendium of";
      break;

    case "9":
      firstNoun = "A Stunning Account of";
      break;

    default:
      firstNoun = "Book of";
      break;
  }
  switch (dateStr.at(-2)) {
    case "0":
      secondNoun = "Dark Arts";
      break;

    case "1":
      secondNoun = "Hidden Strength";
      break;

    case "2":
      secondNoun = "Uncharted Nightmare";
      break;

    case "3":
      secondNoun = "the End Times";
      break;

    case "6":
      secondNoun = "Moloch's Final Days";
      break;

    case "8":
      secondNoun = "Bat Behavior";
      break;

    case "9":
      secondNoun = "Mystery";
      break;

    default:
      secondNoun = "Secrets";
      break;
  }

  return `${firstNoun} ${secondNoun}`;
};

const GenerateBook = ({ onSendBook, lastId }) => {
  const clearData = { id: "", title: "" };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);
  let genOutput = "";

  const formDataPublish = () => {
    const bookInfo = {
      id: lastId + 1,
      title: formData.title,
    };
    onSendBook(bookInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
    genOutput = "";
  };

  return (
    <div>
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className="open-generator-button"
      >
        <div>Generate a Book</div>
      </button>
      {toggleForm && (
        <div>
          <button
            onClick={() => {
              genOutput = `${randoBook()}`;
              setFormData({ ...formData, title: genOutput });
            }}
            className="generate-button"
          >
            <IoShuffle />
          </button>
          <label>New Title: </label>
          <input
            type="text"
            name="bookTitle"
            id="bookTitle"
            onChange={(event) => {
              setFormData({ ...formData, title: event.target.value });
            }}
            value={formData.title}
            readOnly
          />
          <button onClick={formDataPublish} className="publish-button">
            Add this book
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateBook;
