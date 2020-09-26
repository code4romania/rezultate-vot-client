import { ElectionNewsCard } from "@code4ro/reusable-components";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useBallotFromRoute, useNewsItemIdFromRoute } from "../functions/urlState";

import classes from "./NewsCardWidget.module.scss";

export const NewsCardWidget: React.FC = () => {
  const { data } = useBallotFromRoute();
  const newsItemId = useNewsItemIdFromRoute();

  if (!data) return null;

  const newsItem: any = data?.electionNews?.find((n: any) => n.id === Number(newsItemId));

  if (!newsItem) return null;

  const feedLink = `${window.location?.origin}/feed/${data.meta?.ballotId}/news/${newsItemId}`;

  return (
    (data && data.electionNews && (
      <div className={classes.cardWrapper}>
        <Helmet>
          <title>{newsItem.title}</title>
          <meta name="description" content={newsItem.body} />
          <meta property="og:title" content={newsItem.title} />
        </Helmet>
        <ElectionNewsCard key={newsItemId} news={newsItem} feedLink={feedLink} />
        <NavLink
          to={`/elections/${data.meta.ballotId}`}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          <button className={classes.button} type="button">
            Înapoi la site
          </button>
        </NavLink>
      </div>
    )) ||
    null
  );
};
