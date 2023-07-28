import React, { useState } from 'react';

export const TweetForm = () => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
        placeholder="What's happening?"
        value={tweet}
        onChange={(event) => setTweet(event.target.value)}
      />
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 mt-2" type="submit">
        Tweet
      </button>
    </form>
  );
};