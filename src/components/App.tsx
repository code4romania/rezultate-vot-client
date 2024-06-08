import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  makeElectionApi,
  HereMapsAPIKeyProvider,
  ElectionMapOverlayURLContext,
  electionMapOverlayUrl,
} from "@code4romania/reusable-components";
import { mockElectionAPI } from "@code4romania/reusable-components/dist/es/mocks";
import { ElectionAPIContext } from "./ElectionAPIContext";
import { BallotListProvider } from "./BallotListProvider";
import { AppLayout } from "./AppLayout";

const electionApi = process.env.REACT_APP_ELECTION_API_MOCKS
  ? mockElectionAPI
  : makeElectionApi({
      apiUrl: process.env.REACT_APP_ELECTION_API_URL,
    });

export const App: React.FC = () => {
  return (
    <Router>
      <ElectionMapOverlayURLContext.Provider
        value={process.env.REACT_APP_ELECTION_MAP_OVERLAY_URL || electionMapOverlayUrl}
      >
        <HereMapsAPIKeyProvider value={process.env.REACT_APP_HEREMAPS_API_KEY || ""}>
          <ElectionAPIContext.Provider value={electionApi}>
            <BallotListProvider>
              <AppLayout />
            </BallotListProvider>
          </ElectionAPIContext.Provider>
        </HereMapsAPIKeyProvider>
      </ElectionMapOverlayURLContext.Provider>
    </Router>
  );
};
