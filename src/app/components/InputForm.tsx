'use client';

import { useState } from 'react';

function InputForm() {
  const [paragraph, setParagraph] = useState('');
  return (
    <div className="flex flex-row space-evenly">
      <form>
        <input
          type="text"
          onChange={(e) => setParagraph(e.currentTarget.value)}
        />
        <button
          className="px-5 py-3 bg-gray-700 text-teal-500 rounded-md"
          type="submit"
        >
          Translate
        </button>
      </form>
      <p>Display translation</p>
    </div>
  );
}

export default InputForm;
