# Verplichtheid van gegevens in IBRO

## Verplichtheid richting basisregistraties

In deze sectie wordt per objecttype, en waar relevant per type of subtype, beschreven in welke mate het opnemen van informatie verplicht, optioneel of conditioneel is. De bepaling van de verplichtheid is gebaseerd heeft als doel het verbeteren en uniformeren van gemeentelijke registraties.

Als uitgangspunt is het [[EMSO]] gehanteerd. Op basis van de huidige inzichten is de verplichtheid voor verschillende objecttypen opnieuw beoordeeld en waar nodig aangepast, met als doel een betere aansluiting op de gemeentelijke informatiepraktijk en een toekomstbestendige gegevensbasis.

Legenda:
- **V**: Verplicht
- **O**: Optioneel
- **C**: Condioneel (verplicht onder bepaalde voorwaarden, deze voorwaarden worden in de tabellen weergegeven)

### Kern

| Objecttype         | Verplichtheid |
| ------------------ | ------------- |
| `OnbepaaldTerrein` | V             |

### Groen

| Objecttype          | Type                          | Verplichtheid |
| ------------------- | ----------------------------- | ------------- |
| `OverigeBegroeiing` | `Struiken`                    | V             |
| `OverigeBegroeiing` | `GrasEnKruidachtigen`         | V             |
| `OverigeBegroeiing` | `Bouwland`                    | V             |
| `OverigeBegroeiing` | `Moeras`                      | V             |
| `OverigeBegroeiing` | `Rietland`                    | V             |
| `OverigeBegroeiing` | `Heide`                       | V             |
| `OverigeBegroeiing` | `Haag`                        | V             |
| `OverigeBegroeiing` | `Houtsingel`                  | V             |
| `OverigeBegroeiing` | `Houtwal`                     | V             |
| `Bos`               | `GemengdBos`                  | V             |
| `Bos`               | `GriendEnHakhout`             | O             |
| `Bos`               | `Loofbos`                     | V             |
| `Bos`               | `Naaldbos`                    | V             |
| `Boom`              |                               | V             |
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
| `Watervlakte`    | `Zee`    | O             |
| `Watergang`      |          | V             |
| `Watergang`      | `Beek`   | O             |
| `Watergang`      | `Gracht` | O             |
| `Watergang`      | `Kanaal` | O             |
| `Watergang`      | `Rivier` | O             |
| `Watergang`      | `Sloot`  | O             |
| `Getijdengebied` |          | V             |
| `Getijdengebied` | `Schor`  | O             |
| `Getijdengebied` | `Slik`   | O             |
| `Greppel`        |          | V             |


### Gebouwen

| Objecttype        | Type                     | Subtype                            | Verplichtheid | Conditie                                                                                      |
| ----------------- | ------------------------ | ---------------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| `Pand`            |                          |                                    | V             |                                                                                               |
| `Pand`            | `Bijgebouw`              |                                    | V             |                                                                                               |
| `Pand`            | `Bijgebouw`              | `Garage`                           | V             |                                                                                               |
| `Pand`            | `Bijgebouw`              | `Schuur`                           | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         |                                    | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Boerderij`                        | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Fabriek`                          | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Hangar`                           | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Kas`                              | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Loods`                            | V             | Verplicht indien het gaat om een pand met open constructie (`indicatieOpenConstructie: true`) |
| `Pand`            | `Bedrijfsgebouw`         | `Molen`                            | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Parkeergarage`                    | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Stal`                             | V             |                                                                                               |
| `Pand`            | `Bedrijfsgebouw`         | `Voertuigenstalling`               | V             |                                                                                               |
| `Pand`            | `Doelgroepengebouw`      |                                    | V             |                                                                                               |
| `Pand`            | `Doelgroepengebouw`      | `Gevangenis`                       | V             |                                                                                               |
| `Pand`            | `Doelgroepengebouw`      | `Kazerne`                          | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           |                                    | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Kapel`                            | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Kerkgebouw`                       | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Klooster`                         | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Moskee`                           | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Synagoge`                         | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Tempel`                           | V             |                                                                                               |
| `Pand`            | `Gebedsgebouw`           | `Tempel`                           | V             |                                                                                               |
| `Pand`            | `Installatiegebouw`      |                                    | V             |                                                                                               |
| `Pand`            | `Installatiegebouw`      | `Energiecentrale`                  | V             |                                                                                               |
| `Pand`            | `Installatiegebouw`      | `Gemaalgebouw`                     | V             |                                                                                               |
| `Pand`            | `Kantoorgebouw`          |                                    | V             |                                                                                               |
| `Pand`            | `Multigebouw`            |                                    | V             |                                                                                               |
| `Pand`            | `Overkapping`            |                                    | V             |                                                                                               |
| `Pand`            | `Recreatiegebouw`        |                                    | V             |                                                                                               |
| `Pand`            | `Recreatiegebouw`        | `Sportgebouw`                      | V             |                                                                                               |
| `Pand`            | `Toren`                  |                                    | V             |                                                                                               |
| `Pand`            | `Toren`                  | `Fabrieksschoorsteen`              | V             |                                                                                               |
| `Pand`            | `Toren`                  | `Klokkentoren`                     | V             |                                                                                               |
| `Pand`            | `Toren`                  | `Uitkijktoren`                     | V             |                                                                                               |
| `Pand`            | `Toren`                  | `Vuurtoren`                        | V             |                                                                                               |
| `Pand`            | `Toren`                  | `Watertoren`                       | V             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         |                                    | V             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         | `Bunker`                           | V             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         | `Fort`                             | V             |                                                                                               |
| `Pand`            | `Vestingsgebouw`         | `Kasteel`                          | V             |                                                                                               |
| `Pand`            | `Woongebouw`             |                                    | V             |                                                                                               |
| `Panddeel`        |                          |                                    | V             |                                                                                               |
| `Panddeel`        | `Basisconstructie`       |                                    | V             |                                                                                               |
| `Panddeel`        | `LatereAanbouw`          |                                    | V             |                                                                                               |
| `Panddeel`        | `Serre`                  |                                    | V             |                                                                                               |
| `Panddeel`        | `Afdak`                  |                                    | V             |                                                                                               |
| `Panddeel`        | `Balkon`                 |                                    | V             |                                                                                               |
| `Panddeel`        | `Bordes`                 |                                    | V             |                                                                                               |
| `Panddeel`        | `Dakkapel`               |                                    | V             |                                                                                               |
| `Panddeel`        | `Kolom`                  |                                    | V             |                                                                                               |
| `Panddeel`        | `Laadperron`             |                                    | V             |                                                                                               |
| `Panddeel`        | `Loopbrug`               |                                    | V             |                                                                                               |
| `Panddeel`        | `Toegangstrap`           |                                    | V             |                                                                                               |
| `Bouwlaag`        |                          |                                    | V             |                                                                                               |
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
| `Gebruikzone`     | `AgrarischBedrijf`       | `Akkerbouw`                        | V             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Tuinbouw`                         | V             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Veehouderij`                      | V             |                                                                                               |
| `Gebruikzone`     | `AgrarischBedrijf`       | `Viskwekerij`                      | V             |                                                                                               |
| `Gebruikzone`     | `Bijeenkomsten`          |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Cellen`                 |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Detailhandel`           |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Bibliotheek`                      | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Buurtgebouw`                      | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Crematorium`                      | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Gemeentekantoor`                  | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Laboratorium`                     | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Paleis`                           | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Politiebureau`                    | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Rechtbank`                        | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Tol`                              | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Verkeerstoren`                    | V             |                                                                                               |
| `Gebruikzone`     | `Dienstverlening`        | `Wasstraat`                        | V             |                                                                                               |
| `Gebruikzone`     | `Energievoorziening`     |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Groothandel`            |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Groothandel`            | `Grossier`                         | V             |                                                                                               |
| `Gebruikzone`     | `Groothandel`            | `Veiling`                          | V             |                                                                                               |
| `Gebruikzone`     | `Horeca`                 |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Horeca`                 | `Hotel`                            | V             |                                                                                               |
| `Gebruikzone`     | `Horeca`                 | `Strandpaviljoen`                  | V             |                                                                                               |
| `Gebruikzone`     | `Industrie`              |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Industrie`              | `Werf`                             | V             |                                                                                               |
| `Gebruikzone`     | `Kantoor`                |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  | `Bioscoop`                         | V             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  | `Museum`                           | V             |                                                                                               |
| `Gebruikzone`     | `Kunst`                  | `Podiumkunst`                      | V             |                                                                                               |
| `Gebruikzone`     | `Onderwijs`              |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Distributiecentrum`               | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Koelcel`                          | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Magazijn`                         | V             |                                                                                               |
| `Gebruikzone`     | `Opslag`                 | `Munitiedepot`                     | V             |                                                                                               |
| `Gebruikzone`     | `Productverwerking`      |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              | `Clubgebouw`                       | V             |                                                                                               |
| `Gebruikzone`     | `Religie`                |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Sport`                  |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              | `Manege`                           | V             |                                                                                               |
| `Gebruikzone`     | `Recreatie`              | `Zwembadzone`                      | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Brugwachtershuis`                 | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Gasverdeelstation`                | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Observatorium`                    | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Peilmeetstation`                  | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Pompstation`                      | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Radarpost`                        | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Rioolgemaal`                      | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Telecommunicatie`                 | V             |                                                                                               |
| `Gebruikzone`     | `Techniek`               | `Transformatorstation`             | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Ambulancepost`                    | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Brandweerkazerne`                 | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Metrostation`                     | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Parkeergaragezone`                | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Remise`                           | V             |                                                                                               |
| `Gebruikzone`     | `Voertuigen`             | `Station`                          | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `TweeOnderEenKapWoning`            | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Benedenwoning`                    | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Bovenwoning`                      | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Corridorflatwoning`               | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Eindwoning`                       | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Galerijflatwoning`                | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `GeschakeldeWoning`                | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `GeschakeldeTweeOnderEenKapWoning` | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Maisonnette`                      | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Personeelshuisvesting`            | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Portiekflatwoning`                | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Portiekwoning`                    | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `Tussenwoning`                     | V             |                                                                                               |
| `Gebruikzone`     | `Wonen`                  | `VrijstaandeWoning`                | V             |                                                                                               |
| `Gebruikzone`     | `Zorg`                   |                                    | V             |                                                                                               |
| `Gebruikzone`     | `Zorg`                   | `InstitutioneelHuishouden`         | V             |                                                                                               |
| `Gebruikzone`     | `Zorg`                   | `Ziekenhuis`                       | V             |                                                                                               |
| `Toegangspunt`    |                          |                                    | V             |                                                                                               |
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
| `Overbrugging`                    | `Aquaduct`         |           | V             |
| `Overbrugging`                    | `Brug`             |           | V             |
| `Overbrugging`                    | `Ecoduct`          |           | V             |
| `Overbrugging`                    | `Overkluizing`     |           | V             |
| `Overbrugging`                    | `Viaduct`          |           | V             |
| `Overbrugging`                    | `Viaduct`          | `Flyover` | V             |
| `Ondertunneling`                  |                    |           | V             |
| `Ondertunneling`                  | `Duiker`           |           | V             |
| `Ondertunneling`                  | `Hevel`            |           | V             |
| `Ondertunneling`                  | `Sifon`            |           | V             |
| `Ondertunneling`                  | `Tunnel`           |           | V             |
| `OverigWaterstaatkundigKunstwerk` |                    |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Bodemval`         |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Coupure`          |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Damwand`          |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Dijklichaam`      |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Gemaal`           |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Krib`             |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Ponton`           |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Schot`            |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Steiger`          |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Stormvloedkering` |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Strekdam`         |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Stuw`             |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `VasteDam`         |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Vispassage`       |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Voorde`           |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Vuilvang`         |           | V             |
| `OverigWaterstaatkundigKunstwerk` | `Walbescherming`   |           | V             |
| `Sluis`                           |                    |           | V             |
| `Dek`                             |                    |           | V             |
| `Landhoofd`                       |                    |           | V             |
| `Pijler`                          |                    |           | V             |
| `Pyloon`                          |                    |           | V             |
| `Schutkolk`                       |                    |           | V             |
| `Sloof`                           |                    |           | V             |
| `Sluisdeur`                       |                    |           | V             |


### Constructies


| Objecttype             | Type                 | Subtype                | Verplichtheid | Conditie                                                                       |
| ---------------------- | -------------------- | ---------------------- | ------------- | ------------------------------------------------------------------------------ |
| `OverigeConstructie`   |                      |                        | V             |                                                                                |
| `OverigeConstructie`   | `Afvalcontainer`     |                        | O             |                                                                                |
| `OverigeConstructie`   | `Dok`                |                        | V             |                                                                                |
| `OverigeConstructie`   | `Erfconstructie`     |                        | O             |                                                                                |
| `OverigeConstructie`   | `Geleideconstructie` |                        | O             |                                                                                |
| `OverigeConstructie`   | `Opslagtank`         |                        | V             |                                                                                |
| `OverigeConstructie`   | `Paal`               |                        | O             |                                                                                |
| `OverigeConstructie`   | `Putdeksel`          |                        | V             |                                                                                |
| `OverigeConstructie`   | `Reservoir`          |                        | O             |                                                                                |
| `OverigeConstructie`   | `Reservoir`          | `Bassin`               | O             |                                                                                |
| `OverigeConstructie`   | `Reservoir`          | `Bezinkbak`            | O             |                                                                                |
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
| `OverigeConstructie`   | `Zwembad`            |                        | V             |                                                                                |
| `Kast`                 |                      |                        | C             | Kasten die horen bij transformatoren (BGT lage trafo) zijn verplicht           |
| `Lift`                 |                      |                        | O             |                                                                                |
| `Oplaadpunt`           |                      |                        | O             |                                                                                |
| `Pomp`                 |                      |                        | O             |                                                                                |
| `Sirene`               |                      |                        | V             |                                                                                |
| `Transformator`        |                      |                        | V             |                                                                                |
| `Verlichtingsarmatuur` |                      |                        | V             |                                                                                |
| `Windturbine`          |                      |                        | V             |                                                                                |
| `Zonnepanelen`         |                      |                        | O             |                                                                                |
| `Mast`                 |                      |                        | V             |                                                                                |
| `Mast`                 | `Hoogspanningsmast`  |                        | V             |                                                                                |
| `Muur`                 |                      |                        | V             |                                                                                |
| `Muur`                 | `Kademuur`           |                        | V             |                                                                                |
| `Muur`                 | `Keermuur`           |                        | V             |                                                                                |
| `Omheining`            |                      |                        | O             |                                                                                |
| `Scherm`               |                      |                        | C             | Schermen met een geluidreducerende functie zijn verplicht (BGT geluidsscherm). |


### Transportnetwerk

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
| `Wegverbinding`    | `Fietsstraat`                             | V             |
| `Wegverbinding`    | `GebiedsontsluitingswegGesloten`          | V             |
| `Wegverbinding`    | `GebiedsontsluitingswegOpen`              | V             |
| `Wegverbinding`    | `Ruiterpad`                               | V             |
| `Wegverbinding`    | `Veerverbinding`                          | V             |
| `Wegverbinding`    | `Voetgangerszone`                         | V             |
| `Wegverbinding`    | `Voetpad`                                 | V             |
| `Baanverbinding`   |                                           | V             |
| `Baanverbinding`   | `Busbaan`                                 | V             |
| `Baanverbinding`   | `Fietspadbaan`                            | V             |
| `Baanverbinding`   | `Fietsveer`                               | V             |
| `Baanverbinding`   | `Hoofdrijbaan`                            | V             |
| `Baanverbinding`   | `Parallelbaan`                            | V             |
| `Baanverbinding`   | `Rotondebaan`                             | V             |
| `Baanverbinding`   | `Ruiterpadbaan`                           | V             |
| `Baanverbinding`   | `Veerverbindingbaan`                      | V             |
| `Baanverbinding`   | `Ventweg`                                 | V             |
| `Baanverbinding`   | `Verbindingsbaan`                         | V             |
| `Baanverbinding`   | `Verkeerspleinbaan`                       | V             |
| `Baanverbinding`   | `Verzorgingsbaan`                         | V             |
| `Baanverbinding`   | `Voetpadbaan`                             | V             |
| `Baanverbinding`   | `Voetveer`                                | V             |
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
| `Wegknoop`         | `Eindknoop`                               | V             |
| `Wegknoop`         | `Grensknoop`                              | V             |
| `Wegknoop`         | `Koppelknoop`                             | V             |
| `Wegknoop`         | `Kruising`                                | V             |
| `Wegknoop`         | `Rotonde`                                 | V             |
| `Wegknoop`         | `Verkeersplein`                           | V             |
| `Baanknoop`        |                                           | V             |
| `Strookknoop`      |                                           | O             |
| `Hectometerpunt`   |                                           | V             |




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
| `Afscheiding`                   |                        | O             |
| `Complex`                       |                        | V             |
| `Complex`                       | `Begraafplaats`        | V             |
| `Complex`                       | `Coupurecomplex`       | V             |
| `Complex`                       | `Gemaalcomplex`        | V             |
| `Complex`                       | `Havencomplex`         | V             |
| `Complex`                       | `IndustrieelComplex`   | V             |
| `Complex`                       | `Schoolterrein`        | V             |
| `Complex`                       | `Sluiscomplex`         | V             |
| `Complex`                       | `Stuwcomplex`          | V             |
| `Complex`                       | `Zorgcomplex`          | V             |
| `Complex`                       | `Zuiveringscomplex`    | V             |
| `GebruikszoneOppervlaktewater`  |                        | O             |
| `GebruikszoneOppervlaktewater`  | `Vaarwegzone`          | O             |
| `GebruikszoneOppervlaktewater`  | `Visserijzone`         | O             |
| `GebruikszoneOppervlaktewater`  | `Watersportzone`       | O             |
| `Kering`                        |                        | V             |
| `Grondkering`                   |                        | V             |
| `Waterkering`                   |                        | V             |
| `Luchtvaartzone`                |                        | V             |
| `Luchtvaartzone`                | `BaanVoorVliegverkeer` | V             |
| `Luchtvaartzone`                | `Luchthaven`           | V             |
| `Oeverzone`                     |                        | V             |
| `Recreatiezone`                 |                        | V             |
| `Recreatiezone`                 | `Bungalowpark`         | O             |
| `Recreatiezone`                 | `Camping`              | O             |
| `Recreatiezone`                 | `Park`                 | O             |
| `Recreatiezone`                 | `Speeltuin`            | O             |
| `Recreatiezone`                 | `Sportterrein`         | O             |
| `Recreatiezone`                 | `Volkstuin`            | O             |
| `Reducering`                    |                        | V             |
| `Reducering`                    | `Fijnstofreducering`   | V             |
| `Reducering`                    | `Geluidreducering`     | V             |
| `Spoorzone`                     |                        | V             |
| `Spoorzone`                     | `Emplacement`          | V             |
| `Spoorzone`                     | `Overweg`              | V             |
| `Spoorzone`                     | `Perron`               | V             |
| `Spoorzone`                     | `Spoorbaan`            | V             |
| `VerkeerskundigFunctioneleZone` |                        | V             |
| `VerkeerskundigFunctioneleZone` | `Halteplaats`          | V             |
| `VerkeerskundigFunctioneleZone` | `Inrit`                | V             |
| `VerkeerskundigFunctioneleZone` | `Knooppunt`            | V             |
| `VerkeerskundigFunctioneleZone` | `Overstapplaats`       | V             |
| `VerkeerskundigFunctioneleZone` | `Parkeerplaats`        | V             |
| `VerkeerskundigFunctioneleZone` | `Parkeervlak`          | V             |
| `VerkeerskundigFunctioneleZone` | `Snellaadstation`      | V             |
| `VerkeerskundigFunctioneleZone` | `Tankstation`          | V             |
| `VerkeerskundigFunctioneleZone` | `Tolplaats`            | V             |
| `VerkeerskundigFunctioneleZone` | `Verzorgingsplaats`    | V             |
| `VerkeerskundigFunctioneleZone` | `Woonerf`              | V             |
| `Waterbergingsgebied`           |                        | V             |
| `Wegzone`                       |                        | V             |
| `Wegzone`                       | `Berm`                 | V             |
| `Wegzone`                       | `Verkeersdrempel`      | V             |
| `Wegzone`                       | `Verkeerseiland`       | V             |
| `Wegzone`                       | `Wildrooster`          | V             |

### Registratieve ruimten

| Objecttype         | Type                    | Verplichtheid |
| ------------------ | ----------------------- | ------------- |
| `Woonplaats`       |                         | V             |
| `Wijk`             |                         | V             |
| `Buurt`            |                         | V             |
| `Subbuurt`         |                         | O             |
| `Subbuurtdeel`     |                         | O             |
| `OpenbareRuimte`   |                         | V             |
| `Nummeraanduiding` |                         | V             |
| `BenoemdePlaats`   |                         | V             |
| `BenoemdePlaats`   | `Drijvend object`       | V             |
| `BenoemdePlaats`   | `Mobiel object`         | V             |
| `BenoemdePlaats`   | `Onbemensd tankstation` | V             |

### Geografische ruimten

| Objecttype              | Type               | Verplichtheid |
| ----------------------- | ------------------ | ------------- |
| `Bebouwingskern`        |                    | V             |
| `Bebouwingskern`        | `Buurtschap`       | V             |
| `Bebouwingskern`        | `Deelkern`         | V             |
| `Bebouwingskern`        | `Gehucht`          | V             |
| `Bebouwingskern`        | `Industriekern`    | V             |
| `Bebouwingskern`        | `Recreatiekern`    | V             |
| `Bebouwingskern`        | `Stadsdeel`        | V             |
| `Bebouwingskern`        | `Woonkern`         | V             |
| `LandschappelijkGebied` |                    | V             |
| `LandschappelijkGebied` | `Bosgebied`        | V             |
| `LandschappelijkGebied` | `Cultuurlandschap` | V             |
| `LandschappelijkGebied` | `Duingebied`       | V             |
| `LandschappelijkGebied` | `Eiland`           | V             |
| `LandschappelijkGebied` | `Heidegebied`      | V             |
| `LandschappelijkGebied` | `Landgoed`         | V             |
| `LandschappelijkGebied` | `Polder`           | V             |
| `LandschappelijkGebied` | `Strand`           | V             |
| `LandschappelijkGebied` | `Watergebied`      | V             |
| `LandschappelijkGebied` | `Zandverstuiving`  | V             |
| `Steilrand`             |                    | O             |
| `OverigeReliefzone`     |                    | V             |
| `OverigeReliefzone`     | `Berg`             | O             |
| `OverigeReliefzone`     | `Dal`              | O             |
| `OverigeReliefzone`     | `Grafheuvel`       | O             |
| `OverigeReliefzone`     | `Groeve`           | O             |
| `OverigeReliefzone`     | `HolleWeg`         | O             |
| `OverigeReliefzone`     | `Terp`             | O             |
| `Streek`                |                    | V             |

## Verplichtheid bij 2D- of 3D-registratie

Het gegevensmodel IBRO-LM ondersteunt zowel 2D- als 3D-geometrieën. Voor alle objecttypen geldt dat het verplicht is om een 2D-geometrie (2.5D) te kunnen uitleveren aan de basisregistraties zoals BAG, BGT en WOZ. Dit betekent dat elke registratie minimaal een tweedimensionale representatie van het object moet bevatten.

Het is daarnaast mogelijk om objecttypen ook met een 3D-geometrie te beheren en uit te leveren. Het leveren van 3D-geometrie is optioneel en kan worden ingezet wanneer dit toegevoegde waarde biedt voor gebruikers of processen. Indien een objecttype in 3D wordt beheerd, moet er altijd een 2D-geometrie beschikbaar zijn voor uitwisseling met de basisregistraties. Deze 2D-geometrie kan eventueel worden afgeleid uit de 3D-geometrie, zodat consistentie en compatibiliteit met landelijke standaarden gewaarborgd blijven.
