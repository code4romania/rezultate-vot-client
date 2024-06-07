import { ElectionAPI, makeElectionApi } from "@code4romania/reusable-components";
import { createContext, useContext } from "react";

export const ElectionAPIContext = createContext<ElectionAPI>(makeElectionApi());
export const useElectionApi = (): ElectionAPI => useContext(ElectionAPIContext);
