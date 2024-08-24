import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold mt-5">Modal</h1>
      {/* modal button */}
      <div className="text-center my-5">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-800 text-white px-10 py-4 font-bold text-2xl rounded-lg"
        >
          Click To Open
        </button>
      </div>
      {/* modal container */}
      {showModal ? (
        <div
          onClick={() => setShowModal(false)}
          className="fixed bg-black/70 inset-0"
        >
          <div className="w-1/3 text-white bg-slate-700 p-10 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl border-b mb-5">Hello World</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolorum adipisci aliquam iusto neque soluta nam nihil quam?
              Repellendus repellat magni possimus rerum minus debitis.
            </p>
            {/* close button */}
            <div onClick={() => setShowModal(false)} className="text-right">
              <button className="text-2xl font-semibold text-red-500 bg-white py-2 px-10 rounded-xl mt-10 ">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
