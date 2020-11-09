import React from "react";
import { useBallotFromRoute } from "../functions/urlState";
import { NewsSection } from "./NewsSection";

export const NewsWidget: React.FC = () => {
  const { data } = useBallotFromRoute();

  if (!data) return null;

  return (data && data.electionNews && <NewsSection ballotId={data.meta.ballotId} feed={data.electionNews} />) || null;
};
