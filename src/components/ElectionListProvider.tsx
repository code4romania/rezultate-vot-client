import React, { createContext, useContext } from "react";
import { APIRequestState, ElectionMeta, useApiResponse } from "@code4ro/reusable-components";
import { useElectionApi } from "./ElectionAPIContext";

export const ElectionListContext = createContext<APIRequestState<ElectionMeta[]>>({
  data: null,
  hasData: false,
  error: null,
  loading: false,
});

export const ElectionListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const electionApi = useElectionApi();
  const state = useApiResponse(() => electionApi.getElections(), [electionApi]);
  return <ElectionListContext.Provider value={state}>{children}</ElectionListContext.Provider>;
};

export const useElectionList = (): APIRequestState<ElectionMeta[]> => useContext(ElectionListContext);
