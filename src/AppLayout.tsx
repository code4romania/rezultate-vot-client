import { ElectionTimeline } from "@code4ro/reusable-components";
import React from "react";
import { useElectionList } from "./ElectionListProvider";

export const AppLayout: React.FC = () => {
  const { data: items } = useElectionList();
  if (!items) {
    return null;
  }
  return <ElectionTimeline items={items} />;
};
