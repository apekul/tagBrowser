import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import TagList from "./Components/TagList";

// https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow
function App() {
  const data = {
    items: [
      {
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
        count: 2528547,
        name: "javascript",
      },
      {
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
        count: 2191724,
        name: "python",
      },
    ],
    has_more: true,
    quota_max: 10000,
    quota_remaining: 9963,
  };
  return (
    <div className="App">
      <h1>Tag browser</h1>
      <Navigation />
      <TagList data={data} />
    </div>
  );
}

export default App;
