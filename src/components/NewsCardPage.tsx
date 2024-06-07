import { ElectionNewsCard } from "@code4romania/reusable-components";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import { useBallotFromRoute, useNewsItemIdFromRoute } from "../functions/urlState";
import { NewsEmbedButton } from "./NewsEmbedButton";
import { withToastProvider } from "./toast/withToastProvider";
import classes from "./NewsCardPage.module.scss";

export const NewsCardPage: React.FC = withToastProvider(() => {
  const { data } = useBallotFromRoute();
  const newsItemId = useNewsItemIdFromRoute();

  if (!data) return null;

  const newsItem = data?.electionNews?.find((n) => n.id === Number(newsItemId));

  if (!newsItem) return null;

  const feedLink = `${window.location?.origin}/feed/${data.meta?.ballotId}/news/${newsItemId}`;

  return (
    (data && data.electionNews && (
      <div className={classes.cardWrapper}>
        <Helmet>
          <title>{newsItem.title}</title>
          <meta name="description" content={newsItem.body} />
          <meta property="og:title" content={newsItem.title || "Articol"} />
        </Helmet>
        <ElectionNewsCard
          key={newsItemId}
          news={newsItem}
          feedLink={feedLink}
          footerLeft={<NewsEmbedButton ballotId={data.meta.ballotId} newsItemId={newsItem.id} />}
        />
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
});
