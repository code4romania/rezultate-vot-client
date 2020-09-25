import { DivBodyLarge, ElectionNewsFeed, ElectionNewsSection, Heading2 } from "@code4ro/reusable-components";
import React, { FC } from "react";
import { Separator } from "./Separator";
import classes from "./NewsSection.module.scss";
import { EmbedButton } from "./EmbedButton";

export const NewsSection: FC<{ feed: ElectionNewsFeed; ballotId?: number }> = ({ feed, ballotId }) => {
  return (
    <div className={classes.news}>
      <EmbedButton path={`${ballotId}/news`} />
      <Heading2 className={classes.heading}>
        <div className={classes.liveIcon} />
        Live newsfeed
      </Heading2>
      <Separator className={classes.separator} />
      <DivBodyLarge className={classes.label}>
        Aici vezi ultimele știri și informații relevante acestei alegeri, culese din surse de încredere de către echipa
        Code4Romania.
      </DivBodyLarge>
      <ElectionNewsSection className={classes.feed} feed={feed} />
    </div>
  );
};
