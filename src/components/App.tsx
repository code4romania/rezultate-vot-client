import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeElectionApi, HereMapsAPIKeyProvider } from "@code4ro/reusable-components";
import { ElectionAPIContext } from "./ElectionAPIContext";
import { BallotListProvider } from "./BallotListProvider";
import { AppLayout } from "./AppLayout";

const electionApi = makeElectionApi({ apiUrl: process.env.REACT_APP_ELECTION_API_URL });

export const App: React.FC = () => {
  return (
    <Router>
      <HereMapsAPIKeyProvider value={process.env.REACT_APP_HEREMAPS_API_KEY || ""}>
        <ElectionAPIContext.Provider value={electionApi}>
          <BallotListProvider>
            <AppLayout />
          </BallotListProvider>
        </ElectionAPIContext.Provider>
      </HereMapsAPIKeyProvider>
    </Router>
  );
};
