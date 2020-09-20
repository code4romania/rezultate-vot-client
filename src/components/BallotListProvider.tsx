import React, { createContext, useContext } from "react";
import { APIRequestState, ElectionBallotMeta, useApiResponse } from "@code4ro/reusable-components";
import { useElectionApi } from "./ElectionAPIContext";

export const BallotListContext = createContext<APIRequestState<ElectionBallotMeta[]>>({
  data: null,
  hasData: false,
  error: null,
  loading: false,
});

export const BallotListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const electionApi = useElectionApi();
  const state = useApiResponse(() => electionApi.getBallots(), [electionApi]);
  return <BallotListContext.Provider value={state}>{children}</BallotListContext.Provider>;
};

export const useBallotList = (): APIRequestState<ElectionBallotMeta[]> => useContext(BallotListContext);
