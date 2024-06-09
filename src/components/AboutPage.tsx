import { DivBody, Heading1, Heading3 } from "@code4romania/reusable-components";
import React from "react";
import classes from "./AboutPage.module.scss";
import tfsgLogo from "../assets/tfsg.png";
import claudiuTufis from "../assets/claudiuTufis.png";
import bogdanVoicu from "../assets/bogdanVoicu.png";
import bogdanIvanel from "../assets/bogdanIvanel.jpg";
import mariaKrause from "../assets/mariaKrause.png";
import fsPubImg from "../assets/fsPub.png";
import placeholder from "../assets/logo.svg";
import calinGoina from "../assets/calinGoina.jpg";
import mihaelaIvanescu from "../assets/mihaelaIvanescu.jpg";
import costinCiobanu from "../assets/costinCiobanu.jpg";
import daniSandu from "../assets/daniSandu.jpg";
import darieCristea from "../assets/darieCristea.jpg";
import barbuMateescu from "../assets/barbuMateescu.jpg";

import { Footer } from "./Footer";
import { Banner } from "./Banner";

export const AboutPage: React.FC = () => (
  <>
    <Banner />
    <DivBody className={classes.root}>
      <Heading1>Despre Proiect</Heading1>
      <p>
        O democrație se sprijină pe cetățeni critici și informați. Rezultate Vot își propune să informeze și să dezvolte
        spiritul critic al alegătorilor prin contextualizarea informației electorale însoțite de analize apartinice ale
        acesteia. Această platformă este locul în care oricine poate accesa toate informațiile relevante ale alegerilor
        din România.
      </p>
      <div className={classes.logoWrapper}>
        <div>
          <p>
            Rezultate Vot este proiectat de Code for Romania în Civic Labs și dezvoltat pro-bono de către voluntarii
            noștri. Acest proiect nu are nicio altă sursă de finanțare și este administrat în întregime din donațiile
            voastre.
          </p>
          <a href="https://code4.ro/ro/doneaza/">
            <button className={classes.donateButton} type="button">
              Donează
            </button>
          </a>
        </div>
        <div>
          <img src={tfsgLogo} alt="" />
        </div>
      </div>
      <p>Pe Rezultate Vot veți găsi:</p>
      <ul>
        <li>Hărți detaliate pe care puteți vizualiza prezența la vot la nivelul țării / la nivel de județ;</li>
        <li>
          Rezultatele parțiale ale alegerilor, după închiderea urnelor, pe măsură ce ele sunt comunicate de autorități;
        </li>
        <li>
          Informații din sistemul de monitorizare digitală a alegerilor - Monitorizare Vot - realizat de Code for
          Romania și utilizat de observatorii alegerilor;
        </li>
        <li>Istoricul electoral al României pentru toate rundele de alegeri începând cu anul 1992;</li>
        <li>
          Un flux live de comentarii și analize realizate de sociologi din marile centre universitare din România.
        </li>
      </ul>
      <p>
        Platforma Rezultate Vot face parte din ecosistemul electoral construit de Code for Romania/Commit Global,
        alături de alte trei aplicații realizate pentru a crește gradul de transparență și de participare la procesul
        electoral.
      </p>
      <ul className={classes.lastList}>
        <li>
          <a href="https://www.code4.ro/ro/raport-alegeri-monitorizare-vot">
            <strong>Monitorizare Vot</strong>
          </a>{" "}
          este aplicația web și mobilă dedicată observatorilor electorali independenți - prima aplicație de monitorizare
          electorală din România, fiind și cea mai utilizată de acest tip la nivel global. Lansată în 2016 aceasta a
          fost folosită la toate rundele electorale din ultimii ani și a fost preluată inclusiv în Polonia, din 2018, în
          cadrul primelor alegeri monitorizate independent în statul polonez, Serbia si alte state.
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
          <a href="https://wevote4.eu">
            <strong>WeVote4EU</strong>
          </a>{" "}
          prima platformă care oferă tuturor cetățenilor UE, în 26 de limbi oficiale, informații esențiale despre
          alegerile europarlamentare și este o voce pentru societatea civilă europeană care publică analize și opinii
          live despre desfășurarea alegerilor.
        </li>
      </ul>

      <div className={classes.fsPubWrapper}>
        <div className={classes.fsPubDescription}>
          Începând cu alegerile locale din 2020, conținutul bogat în date al platformei Rezultate Vot este completat de
          o secțiune de comentarii și analize live, care vor pune în context datele de prezență / rezultatele afișate în
          colaborare cu Facultatea de Științe Politice a Universității din București.
        </div>
        <div className={classes.fsPubImage}>
          <img src={fsPubImg} alt="FSPUB logo" />
        </div>
      </div>

      <Heading1>Experții</Heading1>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={claudiuTufis} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Claudiu Tufiș</Heading3>
          <p>
            Conferențiar universitar în cadrul Facultății de Științe Politice din cadrul Universității din București.
            Doctor în științe politice al Pennsylvania State University. Înainte de doctorat am obținut o diplomă de
            master în sociologie la Central European University și o diplomă de licență în sociologie la Universitatea
            din București. Principalele sale arii de interes academic includ: cultură politică, comportament politic,
            studii electorale, societate civilă, mișcări sociale, politici publice în domeniul învățământului superior,
            metodologia cercetării sociale și analiza datelor sociale. Studiile sale electorale includ Alegerile pentru
            Parlamentul European (coord. cu Mircea Comșa și Andrei Gheorghiță, publicat la Polirom), Alegerile
            prezidențiale din România, 2009 (coord. cu Mircea Comșa și Andrei Gheorghiță, publicat la Presa Universitară
            Clujeană), precum și articole în jurnale precum European Politics and Society, Problems of Post-Communism,
            sau European Political Science Review.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={mariaKrause} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Maria Krause</Heading3>
          <p>
            Expert electoral cu o experienţă de peste 14 ani în observarea alegerilor în ţară şi în străinătate. A
            participat la misiuni de observarea alegerilor ale Oficiului OSCE pentru Instituţii Democratice şi
            Drepturile Omului (OSCE/ODIHR) în Kirghizstan, Kazakhstan, Macedonia de Nord, Serbia, Moldova, Letonia,
            Bulgaria, Ucraina, Albania, Muntenegru şi la misiuni organizate de Carter Center în Nepal, Mozambic şi
            Guyana. În România a făcut parte în 2014 dintre coordonatorii proiectelor organizate de Expert Forum pentru
            observarea alegerilor europarlamentare şi de Centrul pentru Resurse Civice pentru observarea alegerilor
            prezidenţiale, iar din 2016 participă ca expert electoral la proiectul FiecareVot.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={bogdanIvanel} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Bogdan Ivănel</Heading3>
          <p>
            Doctor în drept internațional (Science Po, Paris, Franța), după un traseu academic ce cuprinde BA & LLM
            Utrecht University, MSc Oxford University, Visiting Scholar UC Berkeley, în 2016 a fondat Code for Romania,
            având de atunci rolul de CEO al organizației. Code for Romania pune tehnologia în slujba comunităților în
            colaborare cu zeci de instituții și ONG-uri, depunând eforturi continue de a pune România pe harta globală a
            tehnologie dezvoltate în scop civic. După mai mult de 10 ani în mediul academic, unde a observat și analizat
            “pe teren” fenomene sociale din comunități afectate de conflicte ce țin de domeniul dreptului internațional
            și de respectarea drepturilor și libertăților fundamentale ale omului, Bogdan Ivănel a fondat Code for
            Romania în anul 2016. Scopul organizației a fost de la început să producă în România schimbări sociale
            pozitive cu ajutorul tehnologiei. Ideea Code for Romania a crescut rapid într-o adevărată mișcare socială
            constructivă și productivă devenind astăzi una dintre cele mai mari comunități din domeniul civic tech la
            nivel global, cu peste 1.700 de voluntari de diverse specializări profesionale și care lucrează simultan pe
            11 fusuri orare diferite, fiind a doua cea mai mare comunitate de civic tech din lume, după Code for
            America.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={bogdanVoicu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Bogdan Voicu</Heading3>
          <p>
            Sociolog, cercetător ştiinţific gradul I la Institutul de Cercetare a Calităţii Vieţii al Academiei Române,
            profesor asociat la Catedra de Sociologie a Universității Lucian Blaga din Sibiu. Publică frecvent articole
            academice în jurnale româneşti și internaţionale, cele mai cunoscute fiind European Sociological Review,
            Journal for Ethnic and Migration Studies, Current Sociology, Social Indicators Research. Între volumele
            publicate în ultimii ani se numără Penuria Pseudomodernă a Postcomunismului românesc (Expert Projects,
            2004), Satul românesc pe drumul spre Europa (volum coordonat alături de Mălina Voicu, Polirom, 2006), Valori
            ale românilor: 1993-2006. O perspectivă sociologică (volum coordonat alături de Mălina Voicu, Institutul
            European, 2007), Capital social în România începutului de Mileniu: Drumeţ în ţara celor fără de prieteni?
            (2010, Lumen), Gender, Family, and Adaptation of Migrants in Europe. A Life Course Perspective (2018,
            Palgrave; volum coordonat alături de Ionela Vlase). Mai multe detalii sunt prezente pe pagina sa de
            Internet: https://bogdanvoicu.ro.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={darieCristea} alt="" />
        </div>

        <div className={classes.expertDescription}>
          <Heading3>Darie Cristea</Heading3>
          <p>
            Doctor în Sociologie, conferențiar la Facultatea de Sociologie și Asistență Socială a Universității din
            București și cercetător științific gr. III la Institutul de Științe Politice și Relații Internaționale
            (Academia Română). Este de asemenea coordonator de proiecte la Inscop Research. Autor sau coautor al mai
            multor volume și articole, atât științifice, cât și pentru marele public. La Universitatea din București
            predă cursuri de Sociologie politică, Metode și tehnici de cercetare sociologică și Metodologia studiilor de
            securitate.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={calinGoina} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Călin Goina</Heading3>
          <p>
            Doctor în sociologie al University of California, Los Angeles (UCLA). Are un master în științe politice la
            Central European University și licența în sociologie la Universitatea de Vest Timișoara. Predă cercetare de
            teren, metode de cercetare calitativă în științe sociale, sociologie istorică comparată, sociologie rurală
            și un curs de scriere academică și etica cercetării. Linia sa curentă de studii se apleacă asupra
            conceptului de ‘generație’ în sociologie și asupra dimensiunii temporale în general în științele sociale.
            Această perspectiva e aplicată pe, și se află în continuarea preocupărilor lui anterioare asupra istoriei
            sociale în România rurală.
          </p>
        </div>
      </div>

      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={mihaelaIvanescu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Mihaela Ivănescu</Heading3>
          <p>
            Conferențiar universitar la Facultatea de Istorie și Științe din cadrul Universității „Ovidius” din
            Constanța. Doctor în științe politice al Universității din București și licențiată în științe politice la
            Universitatea „Alexandru Ioan Cuza” din Iași. Principalele sale domenii de interes academic includ: politici
            comparate, alegeri și comportamente electorale, participare politică, studii europene, integrare europeană.
            În domeniul studiilor electorale, a publicat volumul Alegeri și comportamente electorale în România: de la
            local la național, (Editura Universitară, București, 2015), precum și mai multe articole în reviste de
            specialitate din țară și străinătate.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={placeholder} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Adrian Basarabă</Heading3>
          <p>
            Conf. univ. dr. în cadrul Departamentului de Ştiinţe Politice al Facultății de Ştiinţe Politice, Filosofie
            şi Ştiinţe ale Comunicării, Universitatea de Vest din Timişoara.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={barbuMateescu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Barbu Mateescu</Heading3>
          <p>
            A absolvit în 2005 facultățiile de Sociologie şi respectiv Istoria Religiilor din cadrul University of
            Pennsylvania, SUA. După revenirea în România a profesat ca sociolog, activând în domenii precum consultanța
            politică sau dezvoltarea regională.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={daniSandu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Dani Sandu</Heading3>
          <p>
            Dani Sandu este cercetător în științe politice și europenizare la Universitatea din Fribourg (Elveția).
            Studiază comportamente politice și electorale în interiorul Uniunii Europene, cu o concentrare pe mișcările
            de dreapta radicală și degradarea democrației. Dani are un doctorat în Științe Sociale de la Institutul
            Universitar European, în Florența, cu o teză despre îndoctrinarea politică în regimurile autocratice.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={costinCiobanu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Costin Ciobanu</Heading3>
          <p>
            Costin Ciobanu este cercetător în științe politice la Universitatea Aarhus (Danemarca). Studiază
            comportamentul politic și electoral în Europa și America de Nord, inclusiv felul în care este el influențat
            de șocurile economice și campaniile electorale. Costin are un doctorat în Canada la Universitatea McGill,
            iar teza sa este despre consecințele politice și electorale ale șocurilor economice.
          </p>
        </div>
      </div>
    </DivBody>
    <Footer />
  </>
);
