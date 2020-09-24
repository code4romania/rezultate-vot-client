import { DivBody, Heading1 } from "@code4ro/reusable-components";
import React from "react";
import classes from "./AboutPage.module.scss";

export const AboutPage: React.FC = () => (
  <DivBody className={classes.root}>
    <Heading1>Despre Rezultate Vot</Heading1>
    <p>
      Rezultate Vot este platforma realizată de{" "}
      <a href="https://code4.ro">
        <strong>Code for Romania</strong>
      </a>{" "}
      care furnizează în timp real, pe baza datelor furnizate de către Autoritatea Electorală Permanentă și Biroul
      Electoral Central, informații privind prezența și rezultatele votului într-un format grafic intuitiv, ușor de
      parcurs și înțeles. Începând cu alegerile locale din 27 septembrie 2020, Rezultate Vot s-a transformat într-o
      soluție complexă care oferă utilizatorilor nu doar informația brută, ci și contextul necesar pentru a o înțelege
      mai bine. Platforma oferă acum acces la date privind tot istoricul electoral al României și o secțiune de
      comentarii și analize live realizate de sociologi din cele mai importante centre universitare ale României.
    </p>
    <p>Pe Rezultate Vot puteți găsi:</p>
    <ul>
      <li>Hărți detaliate pe care puteți vizualiza prezența la vot la nivelul țării / la nivel de județ;</li>
      <li>
        Rezultatele parțiale ale alegerilor, după închiderea urnelor, pe măsură ce ele sunt comunicate de autorități;
      </li>
      <li>
        Informații din sistemul de monitorizare digitală a alegerilor - Monitorizare Vot - realizat de Code for Romania
        și utilizat de observatorii alegerilor
      </li>
      <li>Istoricul electoral al României pentru toate rundele de alegeri începând cu anul 1992</li>
      <li>Un flux live de comentarii și analize realizate de sociologi din marile centre universitare din România.</li>
    </ul>
    <p>
      Platforma Rezultate Vot face parte din ecosistemul electoral, alături de alte trei aplicații realizate pentru a
      crește gradul de transparență și de participare la procesul electoral.
    </p>
    <ul>
      <li>
        <a href="http://monitorizarevot.ro">
          <strong>Monitorizare Vot</strong>
        </a>{" "}
        este aplicația web și mobilă dedicată observatorilor electorali independenți - prima aplicație de monitorizare
        electorală din România, fiind și cea mai utilizată de acest tip la nivel global. Lansată în 2016 aceasta a fost
        folosită la toate rundele electorale din ultimii patru ani și a fost preluată inclusiv în Polonia, în 2018, în
        cadrul primelor alegeri monitorizate independent în statul polonez.
      </li>
      <li>
        A doua aplicație din ecosistem este{" "}
        <a href="https://votdiaspora.ro">
          <strong>Vot Diaspora</strong>
        </a>
        , o aplicație web destinată românilor de peste hotare pentru a le oferi sprijin pe durata alegerilor pentru a
        descoperi unde pot vota și de ce documente au nevoie sau ce proceduri trebuie să parcurgă pentru a vota. La
        alegerile Europarlamentare din 2019, aplicația a fost utilizată de 25% din totalul alegătorilor din diaspora,
        iar la ultima rundă a alegerilor prezidențiale, 185.000 alegători s-au informat prin{" "}
        <a href="https://votdiaspora.ro">votdiaspora.ro</a>.
      </li>
      <li>
        <a href="https://votromania.ro">
          <strong>Vot România</strong>
        </a>{" "}
        este aplicația prin care toți cetățenii vor putea să verifice, alături de documentele și procedurile necesare
        pentru a vota și care este secția la care sunt arondați în funcție de statutul fiecăruia. Website-ul va fi
        disponibil cu informații actualizate la fiecare nouă rundă electorală.
      </li>
    </ul>
    <p>
      Acest site a fost realizat pro bono de către voluntarii Code for Romania, cărora le mulțumim! Dacă informațiile de
      aici te-au ajutat, <a href="https://code4.ro/ro/doneaza/">ne poți sprijini cu o donație</a>.
    </p>
  </DivBody>
);
