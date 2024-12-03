document.addEventListener('DOMContentLoaded', () => {
  const summarizeButton = document.getElementById('summarize');
  const clickMeButton = document.getElementById('clickMeBtn');
  const resultDiv = document.getElementById('result');

  const API_KEY = 'AIzaSyAIlpBFW6jxDAjNw-kUJtLxmfpdnAx68lM'; // Replace with your API key

  // Function to summarize text
  async function summarizePageText(pageText) {
    try {
      const response = await fetch('https://api.gemini.com/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ text: pageText }),
      });

      const data = await response.json();
      if (data.summary) {
        resultDiv.textContent = 'Summary: ' + data.summary;
      } else {
        resultDiv.textContent = 'Summary not available.';
      }
      resultDiv.style.display = 'block';
    } catch (error) {
      console.error('Error summarizing text:', error);
      resultDiv.textContent = 'Failed to summarize the page.';
      resultDiv.style.display = 'block';
    }
  }

  // Function to fetch related sites (placeholder example)
  async function fetchRelatedSites() {
    resultDiv.textContent = 'Fetching related sites...';
    resultDiv.style.display = 'block';

    // Placeholder example for related sites logic
    // Replace this with actual API or logic for related sites
    setTimeout(() => {
      resultDiv.textContent = 'Related sites: ExampleSite1, ExampleSite2, ExampleSite3.';
    }, 2000);
  }

  // Event listener for the "Summarize" button
  summarizeButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'extractText' },
        (response) => {
          if (response && response.text) {
            summarizePageText(response.text);
          } else {
            resultDiv.textContent = 'Failed to extract page text.';
            resultDiv.style.display = 'block';
          }
        }
      );
    });
  });

  // Event listener for the "Click me" button
document.getElementById('clickMeBtn').addEventListener('click', fetchRelatedSites);
// Mock API to fetch trends based on website
const fetchTrendsForWebsite = async (website) => {
  const trendsMockData = {
      "example.com": ["Trend 1", "Trend 2", "Trend 3"],
      "github.com": ["Open-source projects", "Latest pull requests", "Trending repos"],
  };

  return trendsMockData[website] || ["No trends available for this website"];
};

// Function to handle button click
const handleButtonClick = async () => {
  const currentWebsite = window.location.hostname;
  console.log(`Fetching trends for: ${currentWebsite}`);

  // Fetch trends
  const trends = await fetchTrendsForWebsite(currentWebsite);

  // Update UI with trends
  const trendsContainer = document.getElementById("trendsContainer");
  trendsContainer.innerHTML = trends
      .map((trend) => `<li>${trend}</li>`)
      .join("");
};

// Attach event listener
document
  .getElementById("clickMeBtn")
  .addEventListener("click", handleButtonClick);


});
