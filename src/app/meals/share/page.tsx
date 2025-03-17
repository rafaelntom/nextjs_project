import React from "react";

const ShareMealPage: React.FC = () => {
  return (
    <>
      <header className="text-center my-12 text-[#ddd6cb]">
        <h1 className="text-3xl font-bold font-montserrat">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-xl">Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-2xl mx-auto text-white">
        <form className="flex flex-col gap-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="name" className="block text-sm font-bold text-[#b3aea5]">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-600 bg-gray-900 rounded-md text-white"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-bold text-[#b3aea5]">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-600 bg-gray-900 rounded-md text-white"
              />
            </div>
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-bold text-[#b3aea5]">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-2 border border-gray-600 bg-gray-900 rounded-md text-white"
            />
          </div>
          <div>
            <label htmlFor="summary" className="block text-sm font-bold text-[#b3aea5]">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full p-2 border border-gray-600 bg-gray-900 rounded-md text-white"
            />
          </div>
          <div>
            <label htmlFor="instructions" className="block text-sm font-bold text-[#b3aea5]">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={5}
              required
              className="w-full p-2 border border-gray-600 bg-gray-900 rounded-md text-white"
            ></textarea>
          </div>
          <p className="text-center text-gray-400">IMAGE PICKER</p>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold rounded-lg hover:from-[#fd4715] hover:to-[#f9b241] shadow-md"
            >
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
