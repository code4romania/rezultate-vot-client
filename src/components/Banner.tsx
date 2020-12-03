import React from "react";

import classes from "./Banner.module.scss";

export const Banner: React.FC = () => {
  return (
    <div className={classes.root}>
      <p>
        Rezultate Vot este doar una dintre soluțiile proiectate și construite pro bono de voluntarii Code for Romania.
      </p>
      <p>
        <b>
          Trimite „PUTEM” prin SMS la <a href="sms://8864?body=PUTEM">8864</a>
        </b>{" "}
        pentru a dona 4 euro lunar și ne poți ajuta să digitalizăm România construind sute de alte soluții la fel de
        utile. Detalii pe{" "}
        <a href="https://code4.ro/putem">
          <b>code4.ro/putem</b>
        </a>
      </p>
    </div>
  );
};
