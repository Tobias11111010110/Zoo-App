import Header from "./Header";
import {HeaderModel} from "../model/HeaderModel";
import {Button, Card} from "react-bootstrap";

export default function DataProtection() {
    return (
        <div>
            <Header headerModel={HeaderModel.DATA_PROTECTION}/>
            <Card className={"w-[80%] m-auto p-10 shadow-lg"}>
                <h1>Datenschutzerklärung</h1>
                <p>Stand: 26. März 2024</p>
                <h2>Inhaltsübersicht</h2>
                <ul className="index">
                    <li><a className="index-link" href="#m3">Verantwortlicher</a></li>
                    <li><a className="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
                    <li><a className="index-link" href="#m2427">Maßgebliche Rechtsgrundlagen</a></li>
                    <li><a className="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
                    <li><a className="index-link" href="#m317">Geschäftliche Leistungen</a></li>
                    <li><a className="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a>
                    </li>
                    <li><a className="index-link" href="#m134">Einsatz von Cookies</a></li>
                    <li><a className="index-link" href="#m182">Kontakt- und Anfragenverwaltung</a></li>
                </ul>
                <h2 id="m3">Verantwortlicher</h2><p>Zoo Zürich AG<br/>Zürichbergstrasse 221<br/> 8044 Zürich,
                Schweiz
            </p>
                E-Mail-Adresse: <a href="">zoo@zoo.ch</a><br/>
                Telefonnummer: 044 254 25 00

                <h2 id="mOverview">Übersicht der Verarbeitungen</h2><p>Die nachfolgende Übersicht fasst die Arten
                der
                verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
                Personen.</p><h3>Arten der verarbeiteten Daten</h3>
                <ul>
                    <li>Bestandsdaten.</li>
                    <li>Zahlungsdaten.</li>
                    <li>Kontaktdaten.</li>
                    <li>Inhaltsdaten.</li>
                    <li>Vertragsdaten.</li>
                    <li>Nutzungsdaten.</li>
                    <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                </ul>
                <h3>Kategorien betroffener Personen</h3>
                <ul>
                    <li>Kunden.</li>
                    <li>Interessenten.</li>
                    <li>Kommunikationspartner.</li>
                    <li>Nutzer.</li>
                    <li>Geschäfts- und Vertragspartner.</li>
                </ul>
                <h3>Zwecke der Verarbeitung</h3>
                <ul>
                    <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.</li>
                    <li>Kontaktanfragen und Kommunikation.</li>
                    <li>Sicherheitsmaßnahmen.</li>
                    <li>Büro- und Organisationsverfahren.</li>
                    <li>Verwaltung und Beantwortung von Anfragen.</li>
                    <li>Feedback.</li>
                    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                    <li>Informationstechnische Infrastruktur.</li>
                </ul>
                <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2><p><strong>Maßgebliche Rechtsgrundlagen nach dem
                Schweizer
                Datenschutzgesetz: </strong>Wenn Sie sich in der Schweiz befinden, bearbeiten wir Ihre Daten auf
                Grundlage
                des Bundesgesetzes über den Datenschutz (kurz "Schweizer DSG"). Dies gilt auch, wenn unsere
                Bearbeitung
                Ihrer Daten Sie sonst in der Schweiz betrifft und Sie von der Bearbeitung betroffen sind. Das
                Schweizer
                DSG
                sieht grundsätzlich nicht vor (anders als beispielsweise die DSGVO), dass eine Rechtsgrundlage für
                die
                Bearbeitung der Personendaten genannt werden muss. Wir bearbeiten Personendaten nur dann, wenn die
                Bearbeitung rechtmäßig ist, nach Treu und Glauben durchgeführt wird und verhältnismäßig ist (Art. 6
                Abs.
                1
                und 2 des Schweizer DSG). Ferner werden Personendaten von uns nur zu einem bestimmten und für die
                betroffene
                Person erkennbaren Zwecken beschafft und nur so bearbeitet, dass es mit diesen Zwecken vereinbar ist
                (Art. 6
                Abs. 3 des Schweizer DSG).</p>

                <h2 id="m27">Sicherheitsmaßnahmen</h2><p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der
                Umstände
                und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
                Ausmaßes
                der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und
                organisatorische
                Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
                    Verfügbarkeit
                    von
                    Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie
                    betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer
                    Trennung.
                    Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die
                    Löschung
                    von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir
                    den
                    Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
                    sowie
                    Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch
                    datenschutzfreundliche Voreinstellungen.</p>

                <h2 id="m317">Geschäftliche Leistungen</h2><p>Wir verarbeiten Daten unserer Vertrags- und
                Geschäftspartner,
                z. B. Kunden und Interessenten (zusammenfassend bezeichnet als "Vertragspartner") im Rahmen von
                vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Rahmen
                der
                Kommunikation mit den Vertragspartnern (oder vorvertraglich), z. B., um Anfragen zu beantworten.</p>
                <p>Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören
                    insbesondere die Verpflichtungen zur Erbringung der vereinbarten Leistungen, etwaige
                    Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen.
                    Darüber
                    hinaus verarbeiten wir die Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen
                    Pflichten
                    verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation. Darüber hinaus verarbeiten
                    wir
                    die
                    Daten auf Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen und
                    betriebswirtschaftlichen Geschäftsführung sowie an Sicherheitsmaßnahmen zum Schutz unserer
                    Vertragspartner und unseres Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten,
                    Geheimnisse,
                    Informationen und Rechte (z. B. zur Beteiligung von Telekommunikations-, Transport- und
                    sonstigen
                    Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und Rechtsberatern, Zahlungsdienstleistern
                    oder
                    Finanzbehörden). Im Rahmen des geltenden Rechts geben wir die Daten von Vertragspartnern nur
                    insoweit an
                    Dritte weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung gesetzlicher Pflichten
                    erforderlich ist. Über weitere Formen der Verarbeitung, z. B. zu Marketingzwecken, werden die
                    Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.</p>
                <p>Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den Vertragspartnern vor
                    oder
                    im
                    Rahmen der Datenerhebung, z. B. in Onlineformularen, durch besondere Kennzeichnung (z. B.
                    Farben)
                    bzw.
                    Symbole (z. B. Sternchen o.ä.), oder persönlich mit.</p>
                <p>Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d.
                    h.,
                    grundsätzlich nach Ablauf von 4 Jahren, es sei denn, dass die Daten in einem Kundenkonto
                    gespeichert
                    werden, z. B., solange sie aus gesetzlichen Gründen der Archivierung aufbewahrt werden müssen.
                    Die
                    gesetzliche Aufbewahrungsfrist beträgt bei steuerrechtlich relevanten Unterlagen sowie bei
                    Handelsbüchern, Inventaren, Eröffnungsbilanzen, Jahresabschlüssen, die zum Verständnis dieser
                    Unterlagen
                    erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen und Buchungsbelegen zehn
                    Jahre
                    sowie bei empfangenen Handels- und Geschäftsbriefen und Wiedergaben der abgesandten Handels- und
                    Geschäftsbriefe sechs Jahre. Die Frist beginnt mit Ablauf des Kalenderjahres, in dem die letzte
                    Eintragung in das Buch gemacht, das Inventar, die Eröffnungsbilanz, der Jahresabschluss oder der
                    Lagebericht aufgestellt, der Handels- oder Geschäftsbrief empfangen oder abgesandt worden oder
                    der
                    Buchungsbeleg entstanden ist, ferner die Aufzeichnung vorgenommen worden ist oder die sonstigen
                    Unterlagen entstanden sind.</p>
                <p>Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder Plattformen einsetzen, gelten im
                    Verhältnis zwischen den Nutzern und den Anbietern die Geschäftsbedingungen und
                    Datenschutzhinweise
                    der
                    jeweiligen Drittanbieter oder Plattformen.</p>
                <ul className="m-elements">
                    <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. Namen, Adressen);
                        Zahlungsdaten
                        (z.
                        B. Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten (z. B. E-Mail,
                        Telefonnummern);
                        Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie); Nutzungsdaten (z. B.
                        besuchte
                        Webseiten, Interesse an Inhalten, Zugriffszeiten). Meta-, Kommunikations- und
                        Verfahrensdaten
                        (z. B.
                        IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                    </li>
                    <li><strong>Betroffene Personen:</strong> Kunden; Interessenten. Geschäfts- und Vertragspartner.
                    </li>
                    <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                        vertraglicher Pflichten; Sicherheitsmaßnahmen; Kontaktanfragen und Kommunikation; Büro- und
                        Organisationsverfahren. Verwaltung und Beantwortung von Anfragen.
                    </li>
                    <li className=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                        Anfragen
                        (Art.
                        6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO).
                        Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                    </li>
                </ul>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>Onlineshop, Bestellformulare, E-Commerce und Auslieferung: </strong>Wir verarbeiten
                        die
                        Daten unserer Kunden, um ihnen die Auswahl, den Erwerb, bzw. die Bestellung der gewählten
                        Produkte,
                        Waren sowie verbundener Leistungen, als auch deren Bezahlung und Zustellung, bzw. Ausführung
                        zu
                        ermöglichen. Sofern für die Ausführung einer Bestellung erforderlich, setzen wir
                        Dienstleister,
                        insbesondere Post-, Speditions- und Versandunternehmen ein, um die Lieferung, bzw.
                        Ausführung
                        gegenüber unseren Kunden durchzuführen. Für die Abwicklung der Zahlungsvorgänge nehmen wir
                        die
                        Dienste von Banken und Zahlungsdienstleistern in Anspruch. Die erforderlichen Angaben sind
                        als
                        solche im Rahmen des Bestell- bzw. vergleichbaren Erwerbsvorgangs gekennzeichnet und
                        umfassen
                        die
                        zur Auslieferung, bzw. Zurverfügungstellung und Abrechnung benötigten Angaben sowie
                        Kontaktinformationen, um etwaige Rücksprache halten zu können; <span
                            className=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                    </li>
                </ul>
                <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2><p>Wir verarbeiten die Daten der
                Nutzer,
                um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
                IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an
                den
                Browser oder das Endgerät der Nutzer zu übermitteln.</p>
                <ul className="m-elements">
                    <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. besuchte Webseiten, Interesse
                        an
                        Inhalten, Zugriffszeiten). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
                        Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                    </li>
                    <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von
                        Onlinediensten).
                    </li>
                    <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                        Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von
                        Informationssystemen und technischen Geräten (Computer, Server etc.).).
                        Sicherheitsmaßnahmen.
                    </li>
                    <li className=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                        lit.
                        f)
                        DSGVO).
                    </li>
                </ul>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf unser
                        Onlineangebot
                        wird
                        in Form von so genannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die
                        Adresse
                        und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene
                        Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
                        des
                        Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der
                        anfragende
                        Provider gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt
                        werden,
                        z. B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von
                        missbräuchlichen
                        Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre
                        Stabilität sicherzustellen; <span className=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). </span><strong>Löschung
                            von Daten:</strong> Logfile-Informationen werden für die Dauer von maximal 30 Tagen
                        gespeichert
                        und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken
                        erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung
                        ausgenommen.
                    </li>
                </ul>
                <h2 id="m134">Einsatz von Cookies</h2><p>Cookies sind kleine Textdateien, bzw. sonstige
                Speichervermerke,
                die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Z. B. um
                den
                Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte
                oder
                verwendete Funktionen eines Onlineangebotes speichern. Cookies können ferner zu unterschiedlichen
                Zwecken
                eingesetzt werden, z. B. zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von
                Onlineangeboten
                sowie
                der Erstellung von Analysen der Besucherströme. </p>
                <p><strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im Einklang mit den gesetzlichen
                    Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer
                    wenn
                    diese
                    gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das
                    Speichern
                    und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um dem
                    den
                    Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur
                    Verfügung zu stellen. Zu den unbedingt erforderlichen Cookies gehören in der Regel Cookies mit
                    Funktionen, die der Anzeige und Lauffähigkeit des Onlineangebotes , dem Lastausgleich, der
                    Sicherheit,
                    der Speicherung der Präferenzen und Auswahlmöglichkeiten der Nutzer oder ähnlichen mit der
                    Bereitstellung der Haupt- und Nebenfunktionen des von den Nutzern angeforderten Onlineangebotes
                    zusammenhängenden Zwecken dienen. Die widerrufliche Einwilligung wird gegenüber den Nutzern
                    deutlich
                    kommuniziert und enthält die Informationen zu der jeweiligen Cookie-Nutzung.</p>
                <p><strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Auf welcher
                    datenschutzrechtlichen
                    Rechtsgrundlage wir die personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten,
                    hängt
                    davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer einwilligen, ist die
                    Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die
                    mithilfe
                    von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z. B. an einem
                    betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung seiner Nutzbarkeit)
                    verarbeitet oder, wenn dies im Rahmen der Erfüllung unserer vertraglichen Pflichten erfolgt,
                    wenn
                    der
                    Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen. Zu
                    welchen
                    Zwecken die Cookies von uns verarbeitet werden, darüber klären wir im Laufe dieser
                    Datenschutzerklärung
                    oder im Rahmen von unseren Einwilligungs- und Verarbeitungsprozessen auf.</p>
                <p><strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden die folgenden Arten von
                    Cookies
                    unterschieden:</p>
                <ul>
                    <li><strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong> Temporäre Cookies
                        werden
                        spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und sein Endgerät (z.
                        B.
                        Browser oder mobile Applikation) geschlossen hat.
                    </li>
                    <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des
                        Endgerätes gespeichert. So können beispielsweise der Login-Status gespeichert oder
                        bevorzugte
                        Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können
                        die
                        mit
                        Hilfe von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung verwendet werden. Sofern
                        wir
                        Nutzern keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im
                        Rahmen
                        der Einholung der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent sind
                        und
                        die
                        Speicherdauer bis zu zwei Jahre betragen kann.
                    </li>
                </ul>
                <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (sog. "Opt-Out"): </strong>Nutzer können
                    die
                    von
                    ihnen abgegebenen Einwilligungen jederzeit widerrufen und der Verarbeitung entsprechend den
                    gesetzlichen
                    Vorgaben widersprechen. Hierzu können Nutzer unter anderem die Verwendung von Cookies in den
                    Einstellungen ihres Browsers einschränken (wobei dadurch auch die Funktionalität unseres
                    Onlineangebotes
                    eingeschränkt sein kann). Ein Widerspruch gegen die Verwendung von Cookies zu
                    Online-Marketing-Zwecken
                    kann auch über die Websites <a href="https://optout.aboutads.info/"
                                                   target="_new">https://optout.aboutads.info</a> und <a
                        href="https://www.youronlinechoices.com/"
                        target="_new">https://www.youronlinechoices.com/</a> erklärt werden.</p>
                <ul className="m-elements">
                    <li className=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                        lit.
                        f)
                        DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                    </li>
                </ul>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir setzen
                        eine
                        Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von
                        Cookies
                        oder zu den im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern
                        eingeholt wird. Dieses Verfahren dient der Einholung, Protokollierung, Verwaltung und dem
                        Widerruf
                        von Einwilligungen, insbesondere bezogen auf den Einsatz von Cookies und vergleichbaren
                        Technologien, die zur Speicherung, zum Auslesen und zur Verarbeitung von Informationen auf
                        den
                        Endgeräten der Nutzer eingesetzt werden. Im Rahmen dieses Verfahrens werden die
                        Einwilligungen
                        der
                        Nutzer für die Nutzung von Cookies und die damit verbundenen Verarbeitungen von
                        Informationen,
                        einschließlich der im Einwilligungs-Management-Verfahren genannten spezifischen
                        Verarbeitungen
                        und
                        Anbieter, eingeholt. Die Nutzer haben zudem die Möglichkeit, ihre Einwilligungen zu
                        verwalten
                        und zu
                        widerrufen. Die Einwilligungserklärungen werden gespeichert, um eine erneute Abfrage zu
                        vermeiden
                        und den Nachweis der Einwilligung gemäß der gesetzlichen Anforderungen führen zu können. Die
                        Speicherung erfolgt serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie) oder
                        mittels
                        vergleichbarer Technologien, um die Einwilligung einem spezifischen Nutzer oder dessen Gerät
                        zuordnen zu können. Sofern keine spezifischen Angaben zu den Anbietern von
                        Einwilligungs-Management-Diensten vorliegen, gelten folgende allgemeine Hinweise: Die Dauer
                        der
                        Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer
                        Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den Angaben
                        zum
                        Umfang der Einwilligung (z. B. betreffende Kategorien von Cookies und/oder Diensteanbieter)
                        sowie
                        Informationen über den Browser, das System und das verwendete Endgerät gespeichert
                        wird; <span
                            className=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</span>
                    </li>
                </ul>
                <h2 id="m182">Kontakt- und Anfragenverwaltung</h2><p>Bei der Kontaktaufnahme mit uns (z. B. per
                Post,
                Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
                Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur
                Beantwortung
                der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
                <ul className="m-elements">
                    <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. E-Mail, Telefonnummern);
                        Inhaltsdaten
                        (z. B. Eingaben in Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten, Interesse an
                        Inhalten, Zugriffszeiten). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
                        Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                    </li>
                    <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                    <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und
                        Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular).
                        Bereitstellung
                        unseres Onlineangebotes und Nutzerfreundlichkeit.
                    </li>
                    <li className=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                        lit.
                        f)
                        DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                    </li>
                </ul>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>Kontaktformular: </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere
                        Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
                        mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens; <span
                            className=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                    </li>
                </ul>
            </Card>
            <div className={"flex justify-center p-10"}>
                <Button href={"/"}>Zurück</Button>
            </div>
        </div>
    )
}