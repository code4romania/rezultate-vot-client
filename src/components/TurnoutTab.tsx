import {
  ElectionBallot,
  ElectionBallotMeta,
  ElectionObservationSection,
  ElectionScopeIncomplete,
  ElectionScopeIncompleteResolved,
  ElectionTurnoutSection,
} from "@code4romania/reusable-components";
import React from "react";
import { EmbedButton, EmbedButtonWrapper } from "./EmbedButton";
import { Loader } from "./Loader";
import { Separator } from "./Separator";
import classes from "./ResultsTab.module.scss";

type Props = {
  meta?: ElectionBallotMeta | null;
  ballot?: ElectionBallot | null;
  scope: ElectionScopeIncompleteResolved;
  onScopeChange?: (scope: ElectionScopeIncomplete) => unknown;
  loading?: boolean;
};

export const TurnoutTab: React.FC<Props> = ({ meta, ballot, scope, onScopeChange, loading }) => {
  const partyLevelCondition =
    (meta?.type === "county_council" && scope.type === "county") ||
    (meta?.type === "local_council" && scope.type === "locality") ||
    meta?.type === "european_parliament";

  const individualLevelCondition =
    (meta?.type === "mayor" && scope.type === "locality") ||
    (meta?.type === "county_council_president" && scope.type === "county");

  return (
    <>
      <EmbedButtonWrapper>
        {meta && <EmbedButton path={`${meta.ballotId}/turnout`} />}
        <ElectionTurnoutSection
          scope={scope}
          onScopeChange={onScopeChange}
          turnout={ballot?.turnout}
          loader={loading && <Loader />}
        />
      </EmbedButtonWrapper>
      <EmbedButtonWrapper>
        {meta && <EmbedButton path={`${meta.ballotId}/observation`} />}
        {ballot?.observation && <ElectionObservationSection observation={ballot.observation} />}
      </EmbedButtonWrapper>

      {/* This is a quick fix to show the candidates (or parties) in the turnout tab - perhaps it should be extracted in some other place */}
      {ballot?.results &&
        ballot?.results?.candidates.length > 0 &&
        meta &&
        (individualLevelCondition ? (
          <div className={classes.root}>
            <Separator className={classes.tablesSeparator} />
            <table>
              <thead>
                <tr>
                  <th>Partid</th>
                  <th>Candidat</th>
                </tr>
              </thead>
              <tbody>
                {ballot?.results.candidates.map((candidate) => (
                  <tr key={candidate.name}>
                    <td className={classes.logoTextCell}>
                      <img
                        width="50"
                        src={candidate.partyLogo ? candidate.partyLogo : undefined}
                        alt=""
                        className={classes.partyLogo}
                      />
                      <span className={classes.name}>{candidate.partyName ? candidate.partyName : ""} </span>
                    </td>
                    <td>
                      <strong>{candidate.name}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          partyLevelCondition && (
            <div className={classes.root}>
              <Separator className={classes.tablesSeparator} />
              <table>
                <thead>
                  <tr>
                    <th>Partid</th>
                  </tr>
                </thead>
                <tbody>
                  {ballot?.results.candidates.map((candidate) => (
                    <tr key={candidate.name}>
                      <td className={classes.logoTextCell}>
                        <img
                          width="50"
                          src={candidate.partyLogo ? candidate.partyLogo : undefined}
                          alt=""
                          className={classes.partyLogo}
                        />
                        <span className={classes.name}>{candidate.name}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ))}
    </>
  );
};
