import React, { useState } from "react";
import { DivLabel, ElectionBallotMeta, Heading2, Heading3, mergeClasses } from "@code4ro/reusable-components";
import { lightFormat, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { Separator } from "./Separator";

import classes from "./BallotTitle.module.scss";

type Props = {
  meta: ElectionBallotMeta;
  onOpenSidebar?: () => void;
};

export const BallotTitle: React.FC<Props> = ({ meta, onOpenSidebar }) => {
  const [headerShown, setHeaderShown] = useState<boolean>(false);
  useScrollPosition(
    ({ currPos }) => {
      const shown = currPos.y < -10;
      if (headerShown !== shown) setHeaderShown(shown);
    },
    [headerShown],
  );

  const year = lightFormat(parseISO(meta.date), "yyyy");

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div className={mergeClasses(classes.title, onOpenSidebar && classes.clickableTitle)} onClick={onOpenSidebar}>
        {onOpenSidebar && (
          <button className={classes.titleNavIcon} type="button">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        )}
        <div className={classes.titleContainer}>
          <Heading2>
            {meta.title} {year}
          </Heading2>
          {meta.ballot && <DivLabel>{meta.ballot}</DivLabel>}
          {meta.subtitle && (
            <DivLabel className={meta.ballot ? classes.spacedSubtitle : undefined}>{meta.subtitle}</DivLabel>
          )}
        </div>
      </div>
      <Separator />

      {onOpenSidebar && (
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
        <div
          className={mergeClasses(classes.titleHeader, headerShown && classes.titleHeaderShown)}
          onClick={onOpenSidebar}
        >
          <button className={classes.titleNavIcon} type="button">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className={classes.titleContainer}>
            <Heading3>
              {meta.title} {year}
            </Heading3>
            {meta.ballot && <DivLabel>{meta.ballot}</DivLabel>}
          </div>
        </div>
      )}
    </>
  );
};
