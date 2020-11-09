import { ElectionNewsCard } from "@code4ro/reusable-components";
import React from "react";
import { useBallotFromRoute, useNewsItemIdFromRoute } from "../functions/urlState";

import classes from "./NewsCardWidget.module.scss";

export const NewsCardWidget: React.FC = () => {
  const { data } = useBallotFromRoute();
  const newsItemId = useNewsItemIdFromRoute();

  if (!data) return null;

  const newsItem = data?.electionNews?.find((n) => n.id === Number(newsItemId));

  if (!newsItem) return null;

  const feedLink = `${window.location?.origin}/feed/${data.meta?.ballotId}/news/${newsItemId}`;

  return (
    (data && data.electionNews && (
      <div className={classes.cardWrapper}>
        <ElectionNewsCard className={classes.card} key={newsItemId} news={newsItem} feedLink={feedLink} />
      </div>
    )) ||
    null
  );
};
