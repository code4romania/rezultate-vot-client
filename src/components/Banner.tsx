import React from "react";
import { mergeClasses } from "@code4ro/reusable-components";
import classes from "./Banner.module.scss";

type Props = {
  className?: string | null;
};

export const Banner: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={mergeClasses(classes.root, className)}>
      <p>
        Rezultate Vot este una dintre zecile de soluții din {" "}
        <b>
          <a href="https://www.code4.ro/ro/infrastructura-binelui" target="_blank">Infrastructura Binelui</a>
        </b> construită pro-bono de Code for Romania. Ajută-ne să le ținem în viață și să le creștem. {" "}
        <b>
          Trimite „PUTEM” prin SMS la <a href="sms://8864?body=PUTEM">8864</a>
        </b>{" "}
        pentru a dona 4 euro lunar și ne poți ajuta să digitalizăm România construind sute de alte soluții la fel de utile.
      </p>
    </div>
  );
};

Banner.defaultProps = {
  className: null,
};
