import { DivBody, Heading1, Heading3 } from "@code4ro/reusable-components";
import React from "react";
import classes from "./AboutPage.module.scss";
import tfsgLogo from "../assets/tfsg.png";
import claudiuTufis from "../assets/claudiuTufis.png";
import alexandraIancu from "../assets/alexandraIancu.png";
import florinFesnic from "../assets/florinFesnic.png";
import bogdanVoicu from "../assets/bogdanVoicu.png";
import romeoAsiminei from "../assets/romeoAsiminei.png";
import bogdanIvanel from "../assets/bogdanIvanel.jpg";
import mirceaKivu from "../assets/mirceaKivu.jpg";
import mariaKrause from "../assets/mariaKrause.png";
import dragosCostache from "../assets/dragosCostache.png";
import fsPubImg from "../assets/fsPub.png";
import { Footer } from "./Footer";

export const AboutPage: React.FC = () => (
  <>
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
          Romania și utilizat de observatorii alegerilor
        </li>
        <li>Istoricul electoral al României pentru toate rundele de alegeri începând cu anul 1992</li>
        <li>
          Un flux live de comentarii și analize realizate de sociologi din marile centre universitare din România.
        </li>
      </ul>
      <p>
        Platforma Rezultate Vot face parte din ecosistemul electoral, alături de alte trei aplicații realizate pentru a
        crește gradul de transparență și de participare la procesul electoral.
      </p>
      <ul className={classes.lastList}>
        <li>
          <a href="http://monitorizarevot.ro">
            <strong>Monitorizare Vot</strong>
          </a>{" "}
          este aplicația web și mobilă dedicată observatorilor electorali independenți - prima aplicație de monitorizare
          electorală din România, fiind și cea mai utilizată de acest tip la nivel global. Lansată în 2016 aceasta a
          fost folosită la toate rundele electorale din ultimii patru ani și a fost preluată inclusiv în Polonia, în
          2018, în cadrul primelor alegeri monitorizate independent în statul polonez.
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

      <Heading1>Experți</Heading1>
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
            Maria Krause este expert electoral cu o experienţă de peste 14 ani în observarea alegerilor în ţară şi în
            străinătate. A participat la misiuni de observarea alegerilor ale Oficiului OSCE pentru Instituţii
            Democratice şi Drepturile Omului (OSCE/ODIHR) în Kirghizstan, Kazakhstan, Macedonia de Nord, Serbia,
            Moldova, Letonia, Bulgaria, Ucraina, Albania, Muntenegru şi la misiuni organizate de Carter Center în Nepal,
            Mozambic şi Guyana. În România a făcut parte în 2014 dintre coordonatorii proiectelor organizate de Expert
            Forum pentru observarea alegerilor europarlamentare şi de Centrul pentru Resurse Civice pentru observarea
            alegerilor prezidenţiale, iar din 2016 participă ca expert electoral la proiectul FiecareVot.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={alexandraIancu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Alexandra Iancu</Heading3>
          <p>
            Lector universitar, prodecan la Facultatea de Științe Politice din cadrul Universității din București cu
            experiență de predare în domeniul politicii comparate, partidelor politice și democratizărilor în context
            european. A obținut titlul de doctor în științe politice al Universității Libere din Bruxelles și al
            Universității din București. Publicații recente: La démocratie roumaine à ses débuts postcommunistes :
            élitisme, apolitisme et informalité politique (Iași:Institutul European, 2019) ; Corruption et politique en
            Europe. Enjeux, réformes et controverses (coord. cu Silvia Marton, Paris: L’Harmattan, 2019 ; Party Members
            and Their Importance in Non-EU Countries (coord. cu Sergiu Gherghina, Sorina Soare, Londra: Routledge,
            2018). Domeniile sale de cercetare vizează: organizațiile partidelor politice, recrutarea elitelor și
            istoria corupției politice (a denunțării corupției politice și a practicilor de patronaj politic) în Europa
            Centrală și de Est. O axă de cercetare recent dezvoltată se referă la analiza discursurilor politice
            contestare la adresa Uniunii europene în noile state membre.
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
            Bogdan Ivănel este doctor în drept internațional (Science Po, Paris, Franța), după un traseu academic ce
            cuprinde BA & LLM Utrecht University, MSc Oxford University, Visiting Scholar UC Berkeley, în 2016 a fondat
            Code for Romania, având de atunci rolul de CEO al organizației. Code for Romania pune tehnologia în slujba
            comunităților în colaborare cu zeci de instituții și ONG-uri, depunând eforturi continue de a pune România
            pe harta globală a tehnologie dezvoltate în scop civic. După mai mult de 10 ani în mediul academic, unde a
            observat și analizat “pe teren” fenomene sociale din comunități afectate de conflicte ce țin de domeniul
            dreptului internațional și de respectarea drepturilor și libertăților fundamentale ale omului, Bogdan Ivănel
            a fondat Code for Romania în anul 2016. Scopul organizației a fost de la început să producă în România
            schimbări sociale pozitive cu ajutorul tehnologiei. Ideea Code for Romania a crescut rapid într-o adevărată
            mișcare socială constructivă și productivă devenind astăzi una dintre cele mai mari comunități din domeniul
            civic tech la nivel global, cu peste 1.700 de voluntari de diverse specializări profesionale și care
            lucrează simultan pe 11 fusuri orare diferite, fiind a doua cea mai mare comunitate de civic tech din lume,
            după Code for America.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={dragosCostache} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Dragoș Costache</Heading3>
          <p>
            Cu experiență considerabilă atât în scris cât și în sectorul non-profit, Dragoș a devenit unul dintre
            membrii de bază ai Code for Romania în ultimii ani. Licențiat în științe politice (Universitatea din
            București) și cu două mastere în sociologie (Universiteit van Amsterdam) și antropologie socială (Stockholms
            Universitet) Dragoș are o experiență de teren foarte eclectică, de la politici de gen la discriminare
            digitală. Dragoș a lucrat în journalism, atât pentru publicații locale cât și pentru publicații
            internaționale dar și în marketing și comunicare, sectorul public sau ca project manager în sectorul
            non-profit.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={mirceaKivu} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Mircea Kivu</Heading3>
          <p>
            Mircea Kivu sociology, master în Demografie și științe Sociale la Ecole des Hautes Etudes en Sciences
            Sociales – Paris. Este cunoscut ca autor al mai multor lucrări și articole de sociologie, principalul său
            domeniu de expertiză fiind cercetarea opiniei publice. Din 1992, a deținut funcții de conducere în mai multe
            institute de cercetare (director de cercetare, apoi CEO la IMAS Marketing și Sondaje, vice-președinte pentru
            Cercetare despre Cercetare la Ipsos Interactive Services, director de operațiuni la Mercury Research).). A
            fost membru al Corpului expertilor electorali din România.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={romeoAsiminei} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Romeo Asiminei</Heading3>
          <p>
            Romeo Asiminei este doctor în sociologie (teza cu titlul Mecanisme electorale. Alegeri, alegători şi
            comportamente de vot în România) şi conferențiar universitar în cadrul Departamentului de Sociologie şi
            Asistenţă Socială, Facultatea de Filosofie şi Ştiinţe Social-Politice, Universitatea “Alexandru Ioan Cuza”
            din Iaşi. Din septembrie 2016 este Directorul acestui department. A fost bursier postdoctoral al Academiei
            Române cu tema Diaspora românească şi construcţia deciziei de vot. Principalele sale domenii de interes
            vizează sociologia electorală, comunicarea politică, sociologia opinei publice, metodologia sociologică,
            economia socială și calitatea vieții. A publicat volumul Sociologie electorală. Alegeri, alegători şi
            comportamente de vot (volum finanţat de Ministerul Educaţiei Naţionale în cadrul competiţiei naţionale
            pentru subvenţionarea literaturii tehnico ştiinţifice pentru anul 2013) şi este coautor al volumului Atlasul
            electoral al României 1990 – 2009 (volum premiat cu distincţia “Cea mai bună carte de ştiinţă a anului” la
            Gala Bun de Tipar 2014). Este autor al mai multor rapoarte de cercetare, capitole de cărţi şi studii
            publicate în reviste de specialitate din țară și străinătate. Are o vastă experienţă ca cercetător în
            numeroase proiecte cu finanţare publică şi private, internațională și națională.
          </p>
        </div>
      </div>
      <div className={classes.expertWrapper}>
        <div className={classes.expertImage}>
          <img src={florinFesnic} alt="" />
        </div>
        <div className={classes.expertDescription}>
          <Heading3>Florin Feșnic</Heading3>
          <p>
            Cercetător la Centrul pentru Studierea Democraţiei din cadrul Departamentului de Ştiinţe Politice al UBB
            Cluj. Printre interesele sale de cercetare se numără educaţia civică, democratizarea, designul
            instituţional, sociologia politică, comportamentul electoral, partidele şi sistemele de partide,
            determinanţii şi consecinţele politice ale modernizării, paradoxurile politice şi scientometria. Printre
            publicaţiile sale recente se numără „The Democratic-Liberal Party as a Successful Catch-All Party” (2011),
            în Ronald King şi Paul Sum (editori), Romania under Băsescu, Lexington Books, şi „Can Civic Education Make a
            Difference for Democracy? Hungary and Poland Compared” (Political Studies) şi “This time it’s different?
            Effects of the Eurovision Debate on young citizens” (cu Jürgen Maier, Thorsten Faas, Carmen Greab, et al.,
            Journal of European Public Policy).
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
            academice în jurnale româneşti și internaţionale, cele mai cunoascute fiind European Sociological Review,
            Journal for Ethnic and Migration Studies, Current Sociology, Social Indicators Research. Între volumele
            publicate în ultimii ani se numără Penuria Pseudomodernă a Postcomunismului românesc (Expert Projects,
            2004), Satul românesc pe drumul spre Europa (volum coordonat alături de Mălina Voicu, Polirom, 2006), Valori
            ale românilor: 1993-2006. O perspectivă sociologică (volum coordonat alături de Mălina Voicu, Institutul
            European, 2007), Capital social în România începutului de Mileniu: Drumeţ în ţara celor fără de prieteni?
            (2010, Lumen), Gender, Family, and Adaptation of Migrants in Europe. A Life Course Perspective (2018,
            Palgrave; volum coordonat alături de Ionela Vlase). Mai multe detalii sunt prezente pe pagina sa de
            Internet: http://web.bogdanvoicu.ro.
          </p>
        </div>
      </div>
    </DivBody>
    <Footer />
  </>
);
