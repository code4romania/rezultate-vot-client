import { mergeClasses } from "@code4ro/reusable-components";
import React, { PropsWithChildren, ReactNode } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useCompleteScopeFromSearch } from "../functions/urlState";

import classes from "./BallotTabs.module.scss";

const TabNavLink = ({
  children,
  to,
  search,
  active,
}: PropsWithChildren<{ to: string; search?: string; active?: boolean }>) => {
  const match = useRouteMatch(to);
  return (
    <Link
      to={(location) => {
        const queryString = search || location.search;
        return { ...location, pathname: to, search: queryString };
      }}
      className={mergeClasses(classes.navLink, match && (active == null || active) && classes.navLinkActive)}
    >
      {children}
    </Link>
  );
};

type Props = {
  ballotId: number;
  children: ReactNode;
  indicators?: ReactNode;
  hasCapitalMayor?: boolean;
  mode?: string;
};

const bucharestCountyId = 12913;

export const BallotTabs: React.FC<Props> = ({ ballotId, children, indicators, mode, hasCapitalMayor }) => {
  const baseUrl = `/${mode || "elections"}`;
  const scope = useCompleteScopeFromSearch();
  const routeMatchesCapital = scope?.type === "county" && scope.countyId === bucharestCountyId;
  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <TabNavLink to={`${baseUrl}/${ballotId}/turnout`}>Prezența la vot</TabNavLink>
        {(!hasCapitalMayor || !routeMatchesCapital) && (
          <TabNavLink to={`${baseUrl}/${ballotId}/results`}>Rezultate vot</TabNavLink>
        )}
        {hasCapitalMayor && (
          <TabNavLink
            to={`${baseUrl}/${ballotId}/results`}
            search={`?division=county&countyId=${bucharestCountyId}`}
            active={routeMatchesCapital}
          >
            Primarul Capitalei
          </TabNavLink>
        )}
        <div className={classes.separator} />
        <div className={classes.indicators}>{indicators}</div>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
