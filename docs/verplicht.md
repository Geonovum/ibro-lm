# Verplichtheid van gegevens in IBRO

## Verplichtheid richting basisregistraties

In deze sectie beschrijven wij per objecttype, en waar relevant per type of subtype, of het verplicht is om deze informatie op te nemen. De verplichtheid is gerelateerd aan de wettelijke verplichtingen voor opname in de landelijke basisregistraties, zoals de Basisregistratie Adressen en Gebouwen (BAG), de Basisregistratie Grootschalige Topografie (BGT) en de Basisregistratie Wet Onroerende Zaken (WOZ). Voor elk objecttype wordt aangegeven of de registratie van het object en zijn eigenschappen verplicht is, optioneel is, of onder bepaalde voorwaarden geldt. Zo ontstaat inzicht in welke gegevens noodzakelijk zijn voor een correcte en volledige landelijke registratie.

Legenda:
- **V**: Verplicht
- **O**: Optioneel
- **C**: Condioneel (verplicht onder bepaalde voorwaarden, deze voorwaarden worden in de tabellen weergegeven)

### Groen

| Objecttype          | Type                          | Verplichtheid |
| ------------------- | ----------------------------- | ------------- |
| `OverigeBegroeiing` | `Struiken`                    | V             |
| `OverigeBegroeiing` | `GrasEnKruidachtigen`         | V             |
| `OverigeBegroeiing` | `Bouwland`                    | V             |
| `OverigeBegroeiing` | `Moeras`                      | V             |
| `OverigeBegroeiing` | `Rietland`                    | V             |
| `OverigeBegroeiing` | `Heide`                       | V             |
| `OverigeBegroeiing` | `Haag`                        | O             |
| `OverigeBegroeiing` | `Houtwal`                     | V             |
| `Bos`               | `GemengdBos`                  | V             |
| `Bos`               | `GriendEnHakhout`             | O             |
| `Bos`               | `Loofbos`                     | V             |
| `Bos`               | `Naaldbos`                    | O             |
| `Boom`              | `geometrie`                   | V             |
| `FruitOfKweekbomen` | `FruitkwekerijMetLageOpstand` | V             |
| `FruitOfKweekbomen` | `Boomkwekerij`                | V             |
| `FruitOfKweekbomen` | `HoogstamBoomgaarden`         | V             |

### Bodem

| Objecttype         | Type | Verplichtheid |
| ------------------ | ---- | ------------- |
| `OnbegroeideGrond` |      | V             |

### Water

| Objecttype       | Type     | Verplichtheid |
| ---------------- | -------- | ------------- |
| `Watervlakte`    |          | V             |
| `Watervlakte`    | `Meer`   | O             |
| `Watervlakte`    | `Plas`   | O             |
| `Watervlakte`    | `Ven`    | O             |
| `Watervlakte`    | `Vijver` | O             |
| `Watervlakte`    | `Zee`    | V             |
| `Watergang`      |          | V             |
| `Watergang`      | `Beek`   | O             |
| `Watergang`      | `Gracht` | O             |
| `Watergang`      | `Kanaal` | O             |
| `Watergang`      | `Rivier` | O             |
| `Watergang`      | `Sloot`  | O             |
| `Getijdengebied` |          | V             |
| `Getijdengebied` | `Schor`  | V             |
| `Getijdengebied` | `Slik`   | V             |
| `Greppel`        |          | V             |


### Gebouwen

| Objecttype        | Type                     | Subtype                            | Verplichtheid | Conditie                                                                                      |
| ----------------- | ------------------------ | ---------------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| `Pand`            |                          |                                    | V             |                                                                                               |
| `Pand`            | `Bijgebouw`              |                                    | O             |                                                                                               |
| `Pand`            | `Bijgebouw`              | `Garage`                           | O             |                                                                                               |
| `Pand`            | `Bijgebouw`              | `Schuur`                           | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         |                                    | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Boerderij`                        | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Fabriek`                          | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Hangar`                           | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Kas`                              | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Loods`                            | C             | Verplicht indien het gaat om een pand met open constructie (`indicatieOpenConstructie: true`) |
| `Pand`            | `Bedrijfsgebouw`         | `Molen`                            | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Parkeergarage`                    | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Stal`                             | O             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Voertuigenstalling`               | O             |                                                                                               |
| `Pand`            | `Doelgroepengebouw`      |                                    | O             |                                                                                               |
| `Pand`            | `Doelgroepengebouw`      | `Gevangenis`                       | O             |                                                                                               |
| `Pand`            | `Doelgroepengebouw`      | `Kazerne`                          | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           |                                    | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Kapel`                            | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Kerkgebouw`                       | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Klooster`                         | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Moskee`                           | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Synagoge`                         | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Tempel`                           | O             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Tempel`                           | O             |                                                                                               |
| `Pand`            | `Installatiegebouw`      |                                    | O             |                                                                                               |
| `Pand`            | `Installatiegebouw`      | `Energiecentrale`                  | O             |                                                                                               |
| `Pand`            | `Installatiegebouw`      | `Gemaalgebouw`                     | O             |                                                                                               |
| `Pand`            | `Kantoorgebouw`          |                                    | O             |                                                                                               |
| `Pand`            | `Multigebouw`            |                                    | O             |                                                                                               |
| `Pand`            | `Overkapping`            |                                    | V             |                                                                                               |
| `Pand`            | `Recreatiegebouw`        |                                    | O             |                                                                                               |
| `Pand`            | `Recreatiegebouw`        | `Sportgebouw`                      | O             |                                                                                               |
| `Pand`            | `Toren`                  |                                    | O             |                                                                                               |
| `Pand`            | `Toren`                  | `Fabrieksschoorsteen`              | O             |                                                                                               |
| `Pand`            | `Toren`                  | `Klokkentoren`                     | O             |                                                                                               |
| `Pand`            | `Toren`                  | `Uitkijktoren`                     | V             |                                                                                               |
| `Pand`            | `Toren`                  | `Vuurtoren`                        | O             |                                                                                               |
| `Pand`            | `Toren`                  | `Watertoren`                       | O             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         |                                    | O             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         | `Bunker`                           | O             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         | `Fort`                             | O             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         | `Kasteel`                          | O             |                                                                                               |
| `Pand`            | `Woongebouw`             |                                    | O             |                                                                                               |
| `Panddeel`        |                          |                                    | V             |                                                                                               |
| `Panddeel`        | `Basisconstructie`       |                                    | V             |                                                                                               |
| `Panddeel`        | `LatereAanbouw`          |                                    | O             |                                                                                               |
| `Panddeel`        | `Serre`                  |                                    | V             |                                                                                               |
| `Panddeel`        | `Afdak`                  |                                    | O             |                                                                                               |
| `Panddeel`        | `Balkon`                 |                                    | O             |                                                                                               |
| `Panddeel`        | `Bordes`                 |                                    | O             |                                                                                               |
| `Panddeel`        | `Dakkapel`               |                                    | O             |                                                                                               |
| `Panddeel`        | `Kolom`                  |                                    | O             |                                                                                               |
| `Panddeel`        | `Laadperron`             |                                    | O             |                                                                                               |
| `Panddeel`        | `Loopbrug`               |                                    | O             |                                                                                               |
| `Panddeel`        | `Toegangstrap`           |                                    | O             |                                                                                               |
| `Functiezone`     |                          |                                    | V             |                                                                                               |
| `Functiezone`     | `Bijeenkomstfunctie`     |                                    | V             |                                                                                               |
| `Functiezone`     | `Celfunctie`             |                                    | V             |                                                                                               |
| `Functiezone`     | `Gezondheidszorgfunctie` |                                    | V             |                                                                                               |
| `Functiezone`     | `Industriefunctie`       |                                    | V             |                                                                                               |
| `Functiezone`     | `Kantoorfunctie`         |                                    | V             |                                                                                               |
| `Functiezone`     | `Logiesfunctie`          |                                    | V             |                                                                                               |
| `Functiezone`     | `Onderwijsfunctie`       |                                    | V             |                                                                                               |
| `Functiezone`     | `Opslagfunctie`          |                                    | V             |                                                                                               |
| `Functiezone`     | `Sportfunctie`           |                                    | V             |                                                                                               |
| `Functiezone`     | `TechnischeFunctie`      |                                    | V             |                                                                                               |
| `Functiezone`     | `Verkeersfunctie`        |                                    | V             |                                                                                               |
| `Functiezone`     | `Winkelfunctie`          |                                    | V             |                                                                                               |
| `Functiezone`     | `Woonfunctie`            |                                    | V             |                                                                                               |
| `Gebruikzone`     |                          |                                    | V             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       |                                    | V             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Akkerbouw`                        | O             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Tuinbouw`                         | O             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Veehouderij`                      | O             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Viskwekerij`                      | O             |                                                                                               |
| `Gebruikzone`     | `Bijeenkomsten`          |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Cellen`                 |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Detailhandel`           |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Bibliotheek`                      | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Buurtgebouw`                      | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Crematorium`                      | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Gemeentekantoor`                  | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Laboratorium`                     | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Paleis`                           | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Politiebureau`                    | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Rechtbank`                        | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Tol`                              | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Verkeerstoren`                    | O             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Wasstraat`                        | O             |                                                                                               |
| `Gebruikzone`     | `Energievoorziening`     |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Groothandel`            |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Groothandel`            | `Grossier`                         | O             |                                                                                               |
| `Gebruikzone`     | `Groothandel`            | `Veiling`                          | O             |                                                                                               |
| `Gebruikzone`     | `Horeca`                 |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Horeca`                 | `Hotel`                            | O             |                                                                                               |
| `Gebruikzone`     | `Horeca`                 | `Strandpaviljoen`                  | O             |                                                                                               |
| `Gebruikzone`     | `Industrie`              |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Industrie`              | `Werf`                             | O             |                                                                                               |
| `Gebruikzone`     | `Kantoor`                |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  | `Bioscoop`                         | O             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  | `Museum`                           | O             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  | `Podiumkunst`                      | O             |                                                                                               |
| `Gebruikzone`     | `Onderwijs`              |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Distributiecentrum`               | O             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Koelcel`                          | O             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Magazijn`                         | O             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Munitiedepot`                     | O             |                                                                                               |
| `Gebruikzone`     | `Productverwerking`      |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              | `Clubgebouw`                       | O             |                                                                                               |
| `Gebruikzone`     | `Religie`                |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Sport`                  |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              | `Manege`                           | O             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              | `Zwembadzone`                      | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Brugwachtershuis`                 | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Gasverdeelstation`                | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Observatorium`                    | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Peilmeetstation`                  | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Pompstation`                      | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Radarpost`                        | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Rioolgemaal`                      | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Telecommunicatie`                 | O             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Transformatorstation`             | O             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Ambulancepost`                    | O             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Brandweerkazerne`                 | O             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Metrostation`                     | O             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Parkeergaragezone`                | O             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Remise`                           | O             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Station`                          | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `TweeOnderEenKapWoning`            | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Benedenwoning`                    | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Bovenwoning`                      | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Corridorflatwoning`               | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Eindwoning`                       | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Galerijflatwoning`                | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `GeschakeldeWoning`                | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `GeschakeldeTweeOnderEenKapWoning` | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Maisonnette`                      | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Personeelshuisvesting`            | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Portiekflatwoning`                | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Portiekwoning`                    | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Tussenwoning`                     | O             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `VrijstaandeWoning`                | O             |                                                                                               |
| `Gebruikzone`     | `Zorg`                   |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Zorg`                   | `InstitutioneelHuishouden`         | O             |                                                                                               |
| `Gebruikzone`     | `Zorg`                   | `Ziekenhuis`                       | O             |                                                                                               |
| `Toegangspunt`    |                          |                                    | O             |                                                                                               |
| `Verblijfsobject` |                          |                                    | V             |                                                                                               |


### Verhardingen

| Objecttype   | Type                  | Verplichtheid |
| ------------ | --------------------- | ------------- |
| `Verharding` |                       | V             |
| `Verharding` | `Asfaltverharding`    | V             |
| `Verharding` | `Betonverharding`     | V             |
| `Verharding` | `Elementenverharding` | V             |
| `Verharding` | `Halfverharding`      | V             |
| `Verharding` | `Kunststofverharding` | V             |
| `Verharding` | `Onverhard`           | V             |



### Kunstwerken

| Objecttype                        | Type               | Subtype   | Verplichtheid |
| --------------------------------- | ------------------ | --------- | ------------- |
| `Overbrugging`                    |                    |           | V             |
| `Overbrugging`                    | `Aquaduct`         |           | O             |
| `Overbrugging`                    | `Brug`             |           | O             |
| `Overbrugging`                    | `Ecoduct`          |           | O             |
| `Overbrugging`                    | `Overkluizing`     |           | O             |
| `Overbrugging`                    | `Viaduct`          |           | O             |
| `Overbrugging`                    | `Viaduct`          | `Flyover` | O             |
| `Ondertunneling`                  |                    |           | V             |
| `Ondertunneling`                  | `Duiker`           |           | O             |
| `Ondertunneling`                  | `Hevel`            |           | O             |
| `Ondertunneling`                  | `Sifon`            |           | O             |
| `Ondertunneling`                  | `Tunnel`           |           | V             |
| `OverigWaterstaatkundigKunstwerk` |                    |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Bodemval`         |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Coupure`          |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Damwand`          |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Dijklichaam`      |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Gemaal`           |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Krib`             |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Ponton`           |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Schot`            |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Steiger`          |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Stormvloedkering` |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Strekdam`         |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Stuw`             |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `VasteDam`         |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Vispassage`       |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Voorde`           |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Vuilvang`         |           | O             |
| `OverigWaterstaatkundigKunstwerk` | `Walbescherming`   |           | V             |
| `Sluis`                           |                    |           | V             |
| `Dek`                             |                    |           | O             |
| `Landhoofd`                       |                    |           | O             |
| `Pijler`                          |                    |           | O             |
| `Pyloon`                          |                    |           | O             |
| `Schutkolk`                       |                    |           | O             |
| `Sloof`                           |                    |           | O             |
| `Sluisdeur`                       |                    |           | O             |


### Constructies


| Objecttype             | Type                 | Subtype                | Verplichtheid | Conditie                                                                       |
| ---------------------- | -------------------- | ---------------------- | ------------- | ------------------------------------------------------------------------------ |
| `OverigeConstructie`   |                      |                        | V             |                                                                                |
| `OverigeConstructie`   | `Afvalcontainer`     |                        | O             |                                                                                |
| `OverigeConstructie`   | `Erfconstructie`     |                        | O             |                                                                                |
| `OverigeConstructie`   | `Geleideconstructie` |                        | O             |                                                                                |
| `OverigeConstructie`   | `Opslagtank`         |                        | V             |                                                                                |
| `OverigeConstructie`   | `Paal`               |                        | O             |                                                                                |
| `OverigeConstructie`   | `Putdeksel`          |                        | O             |                                                                                |
| `OverigeConstructie`   | `Reservoir`          |                        | V             |                                                                                |
| `OverigeConstructie`   | `Reservoir`          | `Bassin`               | V             |                                                                                |
| `OverigeConstructie`   | `Reservoir`          | `Bezinkbak`            | V             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    |                        | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Abri`                 | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Afvalbak`             | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Fietsenparkeerplaats` | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Fontein`              | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Herdenkingsmonument`  | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Kunstobject`          | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `OpenbaarToilet`       | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Picknicktafel`        | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Speelvoorziening`     | O             |                                                                                |
| `OverigeConstructie`   | `Straatmeubilair`    | `Zitelement`           | O             |                                                                                |
| `OverigeConstructie`   | `Zwembad`            |                        | O             |                                                                                |
| `Kast`                 |                      |                        | C             | Kasten die horen bij transformatoren (BGT lage trafo) zijn verplicht           |
| `Lift`                 |                      |                        | O             |                                                                                |
| `Oplaadpunt`           |                      |                        | O             |                                                                                |
| `Pomp`                 |                      |                        | O             |                                                                                |
| `Sirene`               |                      |                        | O             |                                                                                |
| `Transformator`        |                      |                        | V             |                                                                                |
| `Verlichtingsarmatuur` |                      |                        | O             |                                                                                |
| `Windturbine`          |                      |                        | V             |                                                                                |
| `Zonnepanelen`         |                      |                        | O             |                                                                                |
| `Mast`                 |                      |                        | O             |                                                                                |
| `Mast`                 | `Hoogspanningsmast`  |                        | V             |                                                                                |
| `Muur`                 |                      |                        | V             |                                                                                |
| `Muur`                 | `Kademuur`           |                        | V             |                                                                                |
| `Muur`                 | `Keermuur`           |                        | O             |                                                                                |
| `Omheining`            |                      |                        | V             |                                                                                |
| `Scherm`               |                      |                        | C             | Schermen met een geluidreducerende functie zijn verplicht (BGT geluidsscherm). |


### Transport

| Objecttype                  | Verplichtheid |
| --------------------------- | ------------- |
| `SimpelePuntVerwijzing`     | O             |
| `SimpeleLineaireVerwijzing` | O             |
| `Netwerkeigenschap`         | O             |



### Wegennetwerk

| Objecttype         | Type                                      | Verplichtheid |
| ------------------ | ----------------------------------------- | ------------- |
| `Wegverbinding`    |                                           | V             |
| `Wegverbinding`    | `Autosnelweg`                             | V             |
| `Wegverbinding`    | `Autoweg`                                 | V             |
| `Wegverbinding`    | `Erftoegangsweg`                          | V             |
| `Wegverbinding`    | `Fietspad`                                | V             |
| `Wegverbinding`    | `FietsOfBromfietspad`                     | V             |
| `Wegverbinding`    | `Fietsstraat`                             | O             |
| `Wegverbinding`    | `GebiedsontsluitingswegGesloten`          | O             |
| `Wegverbinding`    | `GebiedsontsluitingswegOpen`              | O             |
| `Wegverbinding`    | `Ruiterpad`                               | V             |
| `Wegverbinding`    | `Veerverbinding`                          | O             |
| `Wegverbinding`    | `Voetgangerszone`                         | V             |
| `Wegverbinding`    | `Voetpad`                                 | V             |
| `Baanverbinding`   |                                           | V             |
| `Baanverbinding`   | `Busbaan`                                 | V             |
| `Baanverbinding`   | `Fietspadbaan`                            | O             |
| `Baanverbinding`   | `Fietsveer`                               | O             |
| `Baanverbinding`   | `Hoofdrijbaan`                            | O             |
| `Baanverbinding`   | `Parallelbaan`                            | O             |
| `Baanverbinding`   | `Rotondebaan`                             | O             |
| `Baanverbinding`   | `Ruiterpadbaan`                           | O             |
| `Baanverbinding`   | `Veerverbindingbaan`                      | O             |
| `Baanverbinding`   | `Ventweg`                                 | O             |
| `Baanverbinding`   | `Verbindingsbaan`                         | V             |
| `Baanverbinding`   | `Verkeerspleinbaan`                       | O             |
| `Baanverbinding`   | `Verzorgingsbaan`                         | O             |
| `Baanverbinding`   | `Voetpadbaan`                             | O             |
| `Baanverbinding`   | `Voetveer`                                | O             |
| `Strookverbinding` |                                           | O             |
| `Strookverbinding` | `Bufferstrook`                            | O             |
| `Strookverbinding` | `Busstrook`                               | O             |
| `Strookverbinding` | `Fietsstrook`                             | O             |
| `Strookverbinding` | `Fietssuggestiestrook`                    | O             |
| `Strookverbinding` | `Invoegstrook`                            | O             |
| `Strookverbinding` | `Klimstrook`                              | O             |
| `Strookverbinding` | `Opstelstrook`                            | O             |
| `Strookverbinding` | `OpstelstrookLinksaf`                     | O             |
| `Strookverbinding` | `OpstelstrookOpgeblazenFietsopstelstrook` | O             |
| `Strookverbinding` | `OpstelstrookRechtdoor`                   | O             |
| `Strookverbinding` | `OpstelstrookRechtdoorOfLinksaf`          | O             |
| `Strookverbinding` | `OpstelstrookRechtdoorOfRechtsaf`         | O             |
| `Strookverbinding` | `OpstelstrookRechtsaf`                    | O             |
| `Strookverbinding` | `Passeerstrook`                           | O             |
| `Strookverbinding` | `Plusstrook`                              | O             |
| `Strookverbinding` | `Redresseerstrook`                        | O             |
| `Strookverbinding` | `Rijstrook`                               | O             |
| `Strookverbinding` | `Spitsstrook`                             | O             |
| `Strookverbinding` | `Uitvoegstrook`                           | O             |
| `Strookverbinding` | `Vluchtstrook`                            | O             |
| `Strookverbinding` | `Voetgangersstrook`                       | O             |
| `Strookverbinding` | `VoetpadOpTrap`                           | O             |
| `Strookverbinding` | `Vrachtwagenstrook`                       | O             |
| `Strookverbinding` | `Weefstrook`                              | O             |
| `Strookverbinding` | `Wisselstrook`                            | O             |
| `Wegknoop`         |                                           | V             |
| `Wegknoop`         | `Eindknoop`                               | O             |
| `Wegknoop`         | `Grensknoop`                              | O             |
| `Wegknoop`         | `Koppelknoop`                             | O             |
| `Wegknoop`         | `Kruising`                                | O             |
| `Wegknoop`         | `Rotonde`                                 | O             |
| `Wegknoop`         | `Verkeersplein`                           | O             |
| `Baanknoop`        |                                           | V             |
| `Strookknoop`      |                                           | O             |
| `Hectometerpunt`   |                                           | O             |




### Spoorwegennetwerk


| Objecttype        | Type                       | Verplichtheid |
| ----------------- | -------------------------- | ------------- |
| `Spoorverbinding` |                            | V             |
| `Spoorverbinding` | `LokaleSpoorverbinding`    | V             |
| `Spoorverbinding` | `NationaleSpoorverbinding` | V             |
| `Spoorwegknoop`   |                            | V             |

### Functionele ruimten


| Objecttype                      | Type                   | Verplichtheid |
| ------------------------------- | ---------------------- | ------------- |
| `Afscheiding`                   |                        | V             |
| `Complex`                       |                        | V             |
| `Complex`                       | `Begraafplaats`        | O             |
| `Complex`                       | `Coupurecomplex`       | O             |
| `Complex`                       | `Gemaalcomplex`        | O             |
| `Complex`                       | `Havencomplex`         | O             |
| `Complex`                       | `IndustrieelComplex`   | O             |
| `Complex`                       | `Schoolterrein`        | O             |
| `Complex`                       | `Sluiscomplex`         | O             |
| `Complex`                       | `Stuwcomplex`          | O             |
| `Complex`                       | `Zorgcomplex`          | O             |
| `Complex`                       | `Zuiveringscomplex`    | O             |
| `GebruikszoneOppervlaktewater`  |                        | O             |
| `GebruikszoneOppervlaktewater`  | `Vaarwegzone`          | O             |
| `GebruikszoneOppervlaktewater`  | `Visserijzone`         | O             |
| `GebruikszoneOppervlaktewater`  | `Watersportzone`       | O             |
| `Kering`                        |                        | V             |
| `Grondkering`                   |                        | V             |
| `Waterkering`                   |                        | V             |
| `Luchtvaartzone`                |                        | V             |
| `Luchtvaartzone`                | `BaanVoorVliegverkeer` | V             |
| `Luchtvaartzone`                | `Luchthaven`           | O             |
| `Oeverzone`                     |                        | V             |
| `Recreatiezone`                 |                        | V             |
| `Recreatiezone`                 | `Bungalowpark`         | O             |
| `Recreatiezone`                 | `Camping`              | O             |
| `Recreatiezone`                 | `Park`                 | O             |
| `Recreatiezone`                 | `Speeltuin`            | O             |
| `Recreatiezone`                 | `Sportterrein`         | O             |
| `Recreatiezone`                 | `Volkstuin`            | O             |
| `Reducering`                    |                        | V             |
| `Reducering`                    | `Fijnstofreducering`   | O             |
| `Reducering`                    | `Geluidreducering`     | V             |
| `Spoorzone`                     |                        | V             |
| `Spoorzone`                     | `Emplacement`          | O             |
| `Spoorzone`                     | `Overweg`              | V             |
| `Spoorzone`                     | `Perron`               | V             |
| `Spoorzone`                     | `Spoorbaan`            | V             |
| `VerkeerskundigFunctioneleZone` |                        | V             |
| `VerkeerskundigFunctioneleZone` | `Halteplaats`          | O             |
| `VerkeerskundigFunctioneleZone` | `Inrit`                | V             |
| `VerkeerskundigFunctioneleZone` | `Knooppunt`            | O             |
| `VerkeerskundigFunctioneleZone` | `Overstapplaats`       | O             |
| `VerkeerskundigFunctioneleZone` | `Parkeerplaats`        | V             |
| `VerkeerskundigFunctioneleZone` | `Parkeervlak`          | V             |
| `VerkeerskundigFunctioneleZone` | `Snellaadstation`      | O             |
| `VerkeerskundigFunctioneleZone` | `Tankstation`          | O             |
| `VerkeerskundigFunctioneleZone` | `Tolplaats`            | O             |
| `VerkeerskundigFunctioneleZone` | `Verzorgingsplaats`    | O             |
| `VerkeerskundigFunctioneleZone` | `Woonerf`              | V             |
| `Waterbergingsgebied`           |                        | O             |
| `Wegzone`                       |                        | V             |
| `Wegzone`                       | `Berm`                 | V             |
| `Wegzone`                       | `Verkeersdrempel`      | O             |
| `Wegzone`                       | `Verkeerseiland`       | V             |
| `Wegzone`                       | `Wildrooster`          | O             |

### Registratieve ruimten

| Objecttype         | Type                    | Verplichtheid |
| ------------------ | ----------------------- | ------------- |
| `Woonplaats`       |                         | V             |
| `Wijk`             |                         | O             |
| `Buurt`            |                         | O             |
| `Subbuurt`         |                         | O             |
| `Subbuurtdeel`     |                         | O             |
| `OpenbareRuimte`   |                         | V             |
| `Nummeraanduiding` |                         | V             |
| `BenoemdePlaats`   |                         | V             |
| `BenoemdePlaats`   | `Drijvend object`       | V             |
| `BenoemdePlaats`   | `Mobiel object`         | V             |
| `BenoemdePlaats`   | `Onbemensd tankstation` | O             |

### Geografische ruimten

| Objecttype              | Type               | Verplichtheid |
| ----------------------- | ------------------ | ------------- |
| `Bebouwingskern`        |                    | O             |
| `Bebouwingskern`        | `Buurtschap`       | O             |
| `Bebouwingskern`        | `Deelkern`         | O             |
| `Bebouwingskern`        | `Gehucht`          | O             |
| `Bebouwingskern`        | `Industriekern`    | O             |
| `Bebouwingskern`        | `Recreatiekern`    | O             |
| `Bebouwingskern`        | `Stadsdeel`        | O             |
| `Bebouwingskern`        | `Woonkern`         | O             |
| `LandschappelijkGebied` |                    | O             |
| `LandschappelijkGebied` | `Bosgebied`        | O             |
| `LandschappelijkGebied` | `Cultuurlandschap` | O             |
| `LandschappelijkGebied` | `Duingebied`       | O             |
| `LandschappelijkGebied` | `Eiland`           | O             |
| `LandschappelijkGebied` | `Heidegebied`      | O             |
| `LandschappelijkGebied` | `Landgoed`         | O             |
| `LandschappelijkGebied` | `Polder`           | O             |
| `LandschappelijkGebied` | `Strand`           | O             |
| `LandschappelijkGebied` | `Watergebied`      | O             |
| `LandschappelijkGebied` | `Zandverstuiving`  | O             |
| `Steilrand`             |                    | O             |
| `OverigeReliefzone`     |                    | O             |
| `OverigeReliefzone`     | `Berg`             | O             |
| `OverigeReliefzone`     | `Dal`              | O             |
| `OverigeReliefzone`     | `Grafheuvel`       | O             |
| `OverigeReliefzone`     | `Groeve`           | O             |
| `OverigeReliefzone`     | `HolleWeg`         | O             |
| `OverigeReliefzone`     | `Terp`             | O             |
| `Streek`                |                    | O             |

## Verplichtheid bij 2D- of 3D-registratie

Het gegevensmodel IBRO-LM ondersteunt zowel 2D- als 3D-geometrieën. Voor alle objecttypen geldt dat het verplicht is om een 2D-geometrie (2.5D) te kunnen uitleveren aan de basisregistraties zoals BAG, BGT en WOZ. Dit betekent dat elke registratie minimaal een tweedimensionale representatie van het object moet bevatten.

Het is daarnaast mogelijk om objecttypen ook met een 3D-geometrie te beheren en uit te leveren. Het leveren van 3D-geometrie is optioneel en kan worden ingezet wanneer dit toegevoegde waarde biedt voor gebruikers of processen. Indien een objecttype in 3D wordt beheerd, moet er altijd een 2D-geometrie beschikbaar zijn voor uitwisseling met de basisregistraties. Deze 2D-geometrie kan eventueel worden afgeleid uit de 3D-geometrie, zodat consistentie en compatibiliteit met landelijke standaarden gewaarborgd blijven.
