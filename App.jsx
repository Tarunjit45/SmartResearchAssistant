import React, { useState } from 'react';
import axios from 'axios';

// Define the API endpoint (for Summarization, Translation, etc.)
const API_URL = 'https://api.example.com/summarize';  // Replace with actual API URL

const App = () => {
  const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle the text input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Summarize the content using the Summarization API
  const handleSummarize = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        API_URL,
        { text: inputText },
        {
          headers: {
            'Authorization': `Bearer YOUR_API_KEY`, // Replace with your actual API key
            'Content-Type': 'application/json',
          },
        }
      );

      setSummarizedText(response.data.summary);  // Adjust based on the API response structure
    } catch (err) {
      setError('Failed to summarize the text. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Smart Research Assistant</h1>
      <textarea
        rows="10"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Paste the text you want to summarize"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <div>
        <button
          onClick={handleSummarize}
          disabled={loading}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {summarizedText && (
        <div>
          <h3>Summary:</h3>
          <p>{summarizedText}</p>
        </div>
      )}
    </div>
  );
};

export default App;
