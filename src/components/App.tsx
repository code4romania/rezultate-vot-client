import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeElectionApi, HereMapsAPIKeyProvider } from "@code4ro/reusable-components";
import { ElectionAPIContext } from "./ElectionAPIContext";
import { ElectionListProvider } from "./ElectionListProvider";

const electionApi = makeElectionApi({ apiUrl: process.env.REACT_APP_ELECTION_API_URL });

export const App: React.FC = () => {
  return (
    <Router>
      <HereMapsAPIKeyProvider value={process.env.REACT_APP_HEREMAPS_API_KEY || ""}>
        <ElectionAPIContext.Provider value={electionApi}>
          <ElectionListProvider>Meow</ElectionListProvider>
        </ElectionAPIContext.Provider>
      </HereMapsAPIKeyProvider>
    </Router>
  );
};
