import React from "react";
import { useBallotFromRoute } from "../functions/urlState";
import { useElectionApi } from "./ElectionAPIContext";

import { CandidatesTab } from "./CandidatesTab";

export const CandidatesWidget: React.FC = () => {
  const { data } = useBallotFromRoute();
  const electionApi = useElectionApi();

  if (!data) return null;

  return <CandidatesTab api={electionApi} meta={data.meta} scope={data.scope} />;
};
