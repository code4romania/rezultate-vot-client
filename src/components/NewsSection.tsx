import { DivBodyLarge, ElectionNewsFeed, ElectionNewsSection, Heading2 } from "@code4ro/reusable-components";
import React, { FC, useCallback } from "react";
import { Separator } from "./Separator";
import classes from "./NewsSection.module.scss";
import { NewsEmbedButton } from "./NewsEmbedButton";

export const NewsSection: FC<{ feed: ElectionNewsFeed; ballotId: number }> = ({ feed, ballotId }) => {
  const renderCardFooterLeft = useCallback(
    (newsItem) => <NewsEmbedButton ballotId={ballotId} newsItemId={newsItem.id} />,
    [ballotId],
  );

  return (
    <div id="live-newsfeed" className={classes.news}>
      <Heading2 className={classes.heading}>
        <div className={classes.liveIcon} />
        Live newsfeed
      </Heading2>
      <Separator className={classes.separator} />
      <DivBodyLarge className={classes.label}>
        Aici vezi ultimele știri și informații relevante acestei alegeri, culese din surse de încredere de către echipa
        Code for Romania.
      </DivBodyLarge>
      <ElectionNewsSection
        className={classes.feed}
        feed={feed}
        ballotId={ballotId}
        renderCardFooterLeft={renderCardFooterLeft}
      />
    </div>
  );
};
