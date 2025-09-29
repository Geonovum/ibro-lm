# Mapping van IBRO-LM met CityGML 3.0

Het IBRO informatiemodel wordt afgestemd met OGC CityGML 3.0 [[CityGML3]]. 

Om rekening mee te houden: *Only top-level features are allowed as direct members of a city model.* Dit zijn (beperkt tot de feature types waar we mappings naar hebben): 
- CityFurniture
- GenericLogicalSpace
- LandUse
- Railway
- Road
- Track
- Waterway
- PlantCover
- SolitaryVegetationObject
- WaterBody
- OtherConstruction
- Bridge
- Building
- Tunnel
- CityObjectGroup

## Registratiegegevens {#citygml-mapping-registratiegegevens}

| IBRO Element                                                           | CityGML Element                                           | Opmerkingen                           |
| ---------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------- |
| ***Object***                                                           | ***AbstractFeatureWithLifespan***                         |                                       |
| &nbsp;&nbsp; `geregistreerdMet / versie`                               | &nbsp;&nbsp; `genericAttribute: StringAttribute`          |                                       |
| &nbsp;&nbsp; `geregistreerdMet / status`                               | &nbsp;&nbsp; `genericAttribute: StringAttribute`          |                                       |
| &nbsp;&nbsp; `geregistreerdMet / status`                               | &nbsp;&nbsp; `genericAttribute: StringAttribute`          |                                       |
| &nbsp;&nbsp; `geregistreerdMet / beginGeldigheid`                      | &nbsp;&nbsp;`validFrom`                                   |                                       |
| &nbsp;&nbsp; `geregistreerdMet / eindGeldigheid`                       | &nbsp;&nbsp;`validTo`                                     |                                       |
| &nbsp;&nbsp; `geregistreerdMet / tijdstipRegistratie`                  | &nbsp;&nbsp;`creationDate`                                |                                       |
| &nbsp;&nbsp; `geregistreerdMet / eindRegistratie`                      | &nbsp;&nbsp;`terminationDate`                             |                                       |
| &nbsp;&nbsp; `geregistreerdMet / indicatieObjectGeconstateerd = false` | &nbsp;&nbsp; `genericAttribute: IntAttribute (value = 0)` | CityGML kent geen `BooleanAttribute`. |
| &nbsp;&nbsp; `geregistreerdMet / indicatieObjectGeconstateerd = true`  | &nbsp;&nbsp; `genericAttribute: IntAttribute (value = 1)` | CityGML kent geen `BooleanAttribute`. |
| &nbsp;&nbsp; `geregistreerdMet / primaireBron`          | -                                                         |                                       |
| &nbsp;&nbsp; `geregistreerdMet / verantwoordelijkePartij`              | -                                                         |                                       |


## Kern {#citygml-mapping-kern}

| IBRO Element                    | CityGML Element                                  | Opmerkingen                                                                                                                  |
| ------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| ***Object***                    | ***AbstractCityObject***                         |                                                                                                                              |
| &nbsp;&nbsp;`identificatie`     | &nbsp;&nbsp;`featureID`                          |                                                                                                                              |
| &nbsp;&nbsp;`identificatie`     | &nbsp;&nbsp;`identifier`                         | Concatenatie van `domein` en `identificatie`                                                                                 |
| &nbsp;&nbsp;`domein`            | &nbsp;&nbsp;`identifier`                         | Concatenatie van `domein` en `identificatie`                                                                                 |
| ***ReeelObject***               | ***AbstractPhysicalSpace***                      |                                                                                                                              |
| &nbsp;&nbsp; `status`           | &nbsp;&nbsp; `Transaction.type`                  | Er is een transactie-gebaseerd versioning model waar iets van status in zit maar het matcht op het eerste gezicht niet goed. |
| ***FunctioneleRuimte***         | ***GenericLogicalSpace***                        | Geen fysiek object. Zie [CityGML CM 7.7](https://docs.ogc.org/is/20-010/20-010.html#toc35).                                  |
| &nbsp;&nbsp; `status`           | &nbsp;&nbsp; `Transaction.type`                  | Zie hierboven                                                                                                                |
| ***GeografischeRuimte***        | ***GenericLogicalSpace***                        | Geen fysiek object. Zie [CityGML CM 7.7](https://docs.ogc.org/is/20-010/20-010.html#toc35).                                  |
| &nbsp;&nbsp; `status`           | &nbsp;&nbsp; `Transaction.type`                  | Zie hierboven                                                                                                                |
| &nbsp;&nbsp; `naam`             | &nbsp;&nbsp; `name`                              |                                                                                                                              |
| &nbsp;&nbsp; `alternatieveNaam` | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                                                                              |
| ***RegistratieveRuimte***       | ***GenericLogicalSpace***                        | Geen fysiek object. Zie [CityGML CM 7.7](https://docs.ogc.org/is/20-010/20-010.html#toc35).                                  |
| &nbsp;&nbsp; `status`           | &nbsp;&nbsp; `Transaction.type`                  | Zie hierboven                                                                                                                |
| ***Constructie***               | ***Construction***                               |                                                                                                                              |
| &nbsp;&nbsp; `lod[n]Solid`      | &nbsp;&nbsp; `lod[n]Solid`                       |                                                                                                                              |
| **OnbepaaldTerrein**            | **LandUse** `class = OnbepaaldTerrein`           |                                                                                                                              |
| &nbsp;&nbsp; `geometrie`        | &nbsp;&nbsp; `lod[n]MultiSurface`                | Er zijn meerdere geometrieën per space / thematic surface, zie Figure 23                                                     |
| &nbsp;&nbsp; `geregistreerdMet` | -                                                | Zie [[[#citygml-mapping-registratiegegevens]]]                                                                               |


## Groen {#citygml-mapping-groen}

| IBRO Element                                       | CityGML Element                              | Opmerkingen                                                    |
| -------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------- |
| **_Begroeiing_**                                   | **_AbstractVegetationObject_**               |                                                                |
| **OverigeBegroeiing** `type = Struiken`            | **PlantCover** `class = Struiken`            |                                                                |
| **OverigeBegroeiing** `type = GrasEnKruidachtigen` | **PlantCover** `class = GrasEnKruidachtigen` |                                                                |
| **OverigeBegroeiing** `type = Bouwland`            | **PlantCover** `class = Bouwland`            |                                                                |
| **OverigeBegroeiing** `type = Moeras`              | **PlantCover** `class = Moeras`              |                                                                |
| **OverigeBegroeiing** `type = Heide`               | **PlantCover** `class = Heide`               |                                                                |
| **OverigeBegroeiing** `type = Houtsingel`          | **PlantCover** `class = Houtsingel`          |                                                                |
| **OverigeBegroeiing** `type = Houtwal`             | **PlantCover** `class = Houtwal`             |                                                                |
| &nbsp;&nbsp;`geometrie`                            | &nbsp;&nbsp;`lod[n]MultiSurface`             | Geldt voor alle bovenstaande typen **OverigeBegroeiing**       |
| **OverigeBegroeiing** `type = Haag`                | **SolitaryVegetationObject** `class = Haag`  |                                                                |
| &nbsp;&nbsp;`geometrie`                            | &nbsp;&nbsp;`lod[n]Solid`                    |                                                                |
| **Bos** `type = {type}`                            | **PlantCover** `class = {type}`              | Geldt voor alle typen bos                                      |
| &nbsp;&nbsp;`geometrie`                            | &nbsp;&nbsp;`lod[n]Solid`                    |                                                                |
| **Boom**                                           | **SolitaryVegetationObject** `class= Boom`   |                                                                |
| &nbsp;&nbsp;`geometrie`                            | &nbsp;&nbsp;`lod[n]ImplicitRepresentation`   | Bomen kunnen worden gerepresenteerd met een "ImplicitGeometry" |
| **FruitOfKweekbomen** `type = {type}`              | **PlantCover** `class = {type}`              | Geldt voor alle typen bos                                      |
| &nbsp;&nbsp;`geometrie`                            | &nbsp;&nbsp;`lod[n]MultiSurface`             |                                                                |


## Bodem {#citygml-mapping-bodem}
| IBRO Element             | CityGML Element                        | Opmerkingen                                                                           |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------------------------------- |
| **OnbegroeideGrond**     | **LandUse** `class = OnbegroeideGrond` | LandUse kan worden gebruikt voor functionele of fysieke indeling volgens de definitie |
| &nbsp;&nbsp; `geometrie` | &nbsp;&nbsp; `lod[n]MultiSurface`      |                                                                                       |


## Water  {#citygml-mapping-water}
| IBRO Element                            | CityGML Element                                           | Opmerkingen                                                                                                                                                               |
| --------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ***Oppervlaktewater***                  | **WaterBody**                                             | CityGML heeft ook klasse WaterSurface maar dit is geen TopLevelFeaturetype. WaterBody kan met alleen een WaterSurface worden opgenomen of met ook een WaterGroundSurface. |
| **Watervlakte**                         | **WaterBody** `class = Watervlakte`                       |                                                                                                                                                                           |
| **Watervlakte** `type = {type}`         | **WaterBody** `class = {type}`                            |                                                                                                                                                                           |
| &nbsp;&nbsp; `indicatiePrimair = false` | &nbsp;&nbsp; `genericAttribute: IntAttribute (value = 0)` | CityGML kent geen `BooleanAttribute`.                                                                                                                                     |
| &nbsp;&nbsp; `indicatiePrimair = true`  | &nbsp;&nbsp; `genericAttribute: IntAttribute (value = 1)` | CityGML kent geen `BooleanAttribute`.                                                                                                                                     |
| **Watergang**                           | **WaterBody** `class = Watergang`                         |                                                                                                                                                                           |
| **Watergang** `type = {type}`           | **Watergang** `class = {type}`                            |                                                                                                                                                                           |
| &nbsp;&nbsp; `indicatiePrimair`         | &nbsp;&nbsp; `genericAttribute: BooleanAttribute`         |                                                                                                                                                                           |
| **Getijdengebied**                      | **WaterBody** `class = Getijdengebied`                    | WaterBody kan ook semi permanent zijn en kan dus een getijdengebied representeren.                                                                                        |
| **Getijdengebied** `type = {type}`      | **WaterBody** `class = {type}`                            |                                                                                                                                                                           |
| **Greppel**                             | **WaterBody** `class = Greppel`                           |                                                                                                                                                                           |


## Gebouwen {#citygml-mapping-gebouwen}

Er zijn drie denkbare manieren hoe om te gaan met Panden in CityGML:

1. Alle panden naar `Building` mappen, ook de niet-vrijstaande. De niet-vrijstaande panden zijn dan te herkennen aan het `genericAttribute` met de waarde voor de IBRO eigenschap `aardPand`. De verschillende panddelen worden dan gemapt naar `BuildingPart`, `BuildingUnit` of `BuildingInstallation` afhankelijk van het type panddeel. Dit is officieel niet volledig correct omdat `Building` in CityGML vrijstaande gebouwen representeert, maar het is wel praktisch omdat je dan alle panden in 1 CityGML klasse hebt en je geen geometrische analyses moet uitvoeren om te bepalen bij welke `Building` een pand hoort.
2. Alleen de vrijstaande panden naar `Building` mappen. De niet-vrijstaande panden worden dan gemapt naar BuildingPart, BuildingUnit of BuildingInstallation afhankelijk van het type panddeel en worden gerelateerd aan een Building die op basis van een geometrische afleiding wordt afgeleid. Dit is wel correct volgens de definitie van Building in CityGML, maar het is minder praktisch omdat je dan niet alle panden in 1 CityGML klasse hebt en je geometrische analyses moet uitvoeren om te bepalen bij welke `Building` een pand hoort.
3. Alle panden naar `BuildingPart` mappen. Daarnaast de vrijstaande panden ook naar `Building` mappen. Voor de niet-vrijstaande panden geldt dat een `Building` kan worden afgeleid uit de geometrie van de aan elkaar grenzende panden. Dit is correct volgens CityGML en zorgt dat alle panden als `BuildingPart` in CityGML worden opgenomen. Het nadeel is dat je ook hier geometrische analyses moet uitvoeren om te bepalen welke panden aan elkaar grenzen en dus een `Building` vormen.

Hieronder is gekozen voor het uitwerken van optie 3, omdat dit conformeert aan CityGML en zorgt voor de meeste consistentie in de mapping.


| IBRO Element                                      | CityGML Element                                                     | Opmerkingen                                                                                                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pand** `aardPand = Vrijstaand`                  | **Building**  met **BuildingPart** gerelateerd via `buildingPart`   | Buildings zijn *freestanding, self-supporting constructions*.                                                                                                                       |
| **Pand** `aardPand != Vrijstaand`                 | **Building**(*) met **BuildingPart** gerelateerd via `buildingPart` | Building wordt afgeleid van de geometrie van panden met `aardPand` `Heterogeen` of `Repeterend` die aan elkaar grenzen en 1 blok vormen. Dit geheel wordt als `Building` opgenomen. |
| **Pand**                                          | **BuildingPart**                                                    |                                                                                                                                                                                     |
| &nbsp;&nbsp; `type = {type}, subtype = null`      | &nbsp;&nbsp; `class = {type}`                                       | Wanneer `type` aanwezig, maar `subtype` niet, krijgt `class` de waarde van `type`.                                                                                                  |
| &nbsp;&nbsp; `type = {type}, subtype = {subtype}` | &nbsp;&nbsp; `class = {subtype}`                                    | Wanneer `subtype` aanwezig, krijgt `class` de waarde van `subtype`.                                                                                                                 |
| &nbsp;&nbsp; `status`                             | &nbsp;&nbsp; `conditionOfConstruction`                              |                                                                                                                                                                                     |
| &nbsp;&nbsp; `aardPand`                           | &nbsp;&nbsp; `genericAttribute: StringAttribute`                    |                                                                                                                                                                                     |
| &nbsp;&nbsp; `oorspronkelijkBouwjaar`             | &nbsp;&nbsp; `dateOfConstruction`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `naam`                               | &nbsp;&nbsp; `name`                                                 | Dit is een attribuut bij de hoogste abstracte topklasse, AbstractFeature                                                                                                            |
| &nbsp;&nbsp; `indicatieOpenConstructie = true`    | &nbsp;&nbsp; `spaceType = semiOpen`                                 |                                                                                                                                                                                     |
| &nbsp;&nbsp; `indicatieOpenConstructie = false`   | &nbsp;&nbsp; `spaceType = closed`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `^isOnderdeelVan` **Panddeel**        | &nbsp;&nbsp; `buildingPart` of `buildingInstallation`               | Binnenkomende relaties `isOnderdeelVan` worden omgezet naar `buildingPart` of `buildingInstallation` relaties afhankelijk van het type Panddeel (zie hieronder).                    |
| &nbsp;&nbsp; `^hoortBij` ***Installatie***        | &nbsp;&nbsp; `buildingInstallation`                                 | Binnenkomende relaties `hoortBij` worden omgezet naar `buildingInstallation` relaties. Zie mapping [[[#citygml-mapping-overige-constructies]]]                                      |
| &nbsp;&nbsp; `^ligtIn` **Bouwlaag**               | &nbsp;&nbsp; `buildingSubdivision` **Storey**                       | Binnenkomende relaties `ligtIn` worden omgezet naar `buildingSubdivision` relaties naar een **Storey**.                                                                             |
| **Panddeel**  `type = Basisconstructie`           | **BuildingPart** `class = Basisconstructie`                          |                                                                                                                                                                                     |
| **Panddeel**  `type = LatereAanbouw`              | **BuildingPart** `class = LatereAanbouw`                             |                                                                                                                                                                                     |
| **Panddeel**  `type = Serre`                      | **BuildingPart**  `class = Serre`                                    |                                                                                                                                                                                     |
| **Panddeel**  `type = Afdak`                      | **BuildingInstallation** `class = Afdak`                             |                                                                                                                                                                                     |
| **Panddeel**  `type = Balkon`                     | **BuildingInstallation** `class = Balkon`                            |                                                                                                                                                                                     |
| **Panddeel**  `type = Bordes`                     | **BuildingInstallation** `class = Bordes`                            |                                                                                                                                                                                     |
| **Panddeel**  `type = Dakkapel`                   | **BuildingInstallation** `class = Dakkapel`                          |                                                                                                                                                                                     |
| **Panddeel**  `type = Kolom`                      | **BuildingInstallation** `class = Kolom`                             | Als dragend (*essential from a structural point of view.*) dan **BuildingConstructiveElement**, maar dit gegevenstype is momenteel niet opgenomen in IBRO-LM.                       |
| **Panddeel**  `type = Laadperron`                 | **BuildingInstallation** `class = Laadperron`                        |                                                                                                                                                                                     |
| **Panddeel**  `type = Loopbrug`                   | **BuildingInstallation** `class = Loopbrug`                          |                                                                                                                                                                                     |
| **Panddeel**  `type = Toegangstrap`               | **BuildingInstallation** `class = Toegangstrap`                      |                                                                                                                                                                                     |
| **Bouwlaag**                                      | **Storey**                                                          |                                                                                                                                                                                     |
| &nbsp;&nbsp; `geometrie`                          | &nbsp;&nbsp; `lod[n]MultiSurface`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `bouwlaagnummer >= 0`                | &nbsp;&nbsp; `storeysAboveGround = {bouwlaagnummer}`                |                                                                                                                                                                                     |
| &nbsp;&nbsp; `bouwlaagnummer < 0`                 | &nbsp;&nbsp; `storeysBelowGround = {bouwlaagnummer * -1}`           | Het negatieve bouwlaagnummer wordt positief gemaakt en als waarde van `storeysBelowGround` opgenomen.                                                                               |
| **Functiezone** `type = {type}`                   | **BuildingUnit** `class = {type}`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `brutoVloeroppervlakte`              | &nbsp;&nbsp; `area`                                                 | Attribuut van AbstractSpace, waarde is van het type `QualifiedArea`                                                                                                                 |
| &nbsp;&nbsp; `geometrie`                          | &nbsp;&nbsp; `lod[n]MultiSurface`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `ligtIn`                             | &nbsp;&nbsp; `storey`                                               |                                                                                                                                                                                     |
| **Gebruikzone**                                   | **BuildingUnit**                                                    |                                                                                                                                                                                     |
| &nbsp;&nbsp; `type = {type}, subtype = null`      | &nbsp;&nbsp; `class = {type}`                                       | Wanneer `type` aanwezig, maar `subtype` niet, krijgt `class` de waarde van `type`.                                                                                                  |
| &nbsp;&nbsp; `type = {type}, subtype = {subtype}` | &nbsp;&nbsp; `class = {subtype}`                                    | Wanneer `subtype` aanwezig, krijgt `class` de waarde van `subtype`.                                                                                                                 |
| &nbsp;&nbsp; `geometrie`                          | &nbsp;&nbsp; `lod[n]MultiSurface`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `gebruiksoppervlakte`                | &nbsp;&nbsp; `area`                                                 | Attribuut van AbstractSpace                                                                                                                                                         |
| &nbsp;&nbsp; `ligtIn` Bouwlaag                    | &nbsp;&nbsp; `storey`                                               |                                                                                                                                                                                     |
| **Toegangspunt**                                  | **Door**                                                            | Geen 100% match. **Toegangspunt** is functioneel. In CityGML is **Door** reëel.                                                                                                     |
| &nbsp;&nbsp; `toegangssoort`                      | &nbsp;&nbsp; `class`                                                |                                                                                                                                                                                     |
| &nbsp;&nbsp; `gebruiksaard`                       | &nbsp;&nbsp; `usage`                                                |                                                                                                                                                                                     |
| &nbsp;&nbsp; `geometrie`                          | &nbsp;&nbsp; `lod0Point`                                            | Of `lod[n]ImplicitRepresentation` in geval van implicit geometry                                                                                                                    |
| **Verblijfsobject**                               | **CityObjectGroup** `class = Verblijfsobject`                       | Abstract groeperingsmechanisme in CityGML gebruiken aangezien Verblijfsobject een clustering van gebruikszones is.                                                                  |
| &nbsp;&nbsp; `geometrie`                          | &nbsp;&nbsp; `lod[n]MultiSurface`                                   |                                                                                                                                                                                     |
| &nbsp;&nbsp; `gebruiksoppervlakte`                | &nbsp;&nbsp; `area`                                                 | Attribuut van AbstractSpace                                                                                                                                                         |
| &nbsp;&nbsp; `omvat` Gebruikzone                  | &nbsp;&nbsp; `groupMember`                                          |                                                                                                                                                                                     |


## Verhardingen
| IBRO Element                   | CityGML Element                   | Opmerkingen                                                                                                                                                                  |
| ------------------------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Verharding** `type = {type}` | **TrafficArea** `class = {type}`  | In Citygml is dit een thematic surface terwijl Verharding een fysiek object is. TrafficArea is geen TopLevelFeaturetype en moet als onderdeel van een Road opgenomen worden. |
| &nbsp;&nbsp; `type`            | &nbsp;&nbsp; `surfaceMaterial`    |                                                                                                                                                                              |
| &nbsp;&nbsp; `geometrie`       | &nbsp;&nbsp; `lod[n]MultiSurface` |                                                                                                                                                                              |


## Kunstwerken
| IBRO Element                                          | CityGML Element                                                       | Opmerkingen                                                                                                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ***Kunstwerk***                                       | ***AbstractConstruction***                                            | Het concept Kunstwerk bestaat niet in CityGML, Construction omvat gebouwen, tunnels, bruggen en andere kunstwerken.                             |
| &nbsp;&nbsp; `naam`                                   | &nbsp;&nbsp; `name`                                                   |                                                                                                                                                 |
| Alle subklassen                                       | **OtherConstruction**                                                 | Vul `class` met naam vd subklasse                                                                                                               |
| **Overbrugging** `type = {type}, subtype = null`      | **Bridge** `class = {type}`                                           | Wanneer `type` aanwezig, maar `subtype` niet, krijgt `class` de waarde van `type`.                                                              |
| **Overbrugging** `type = {type}, subtype = {subtype}` | **Bridge** `class = {subtype}`                                        | Wanneer `subtype` aanwezig, krijgt `class` de waarde van `subtype`.                                                                             |
| &nbsp;&nbsp; `indicatieBeweegbaar`                    | &nbsp;&nbsp; `isMovable`                                              |                                                                                                                                                 |
| &nbsp;&nbsp; `^isOnderdeelVan` ***Kunstwerkdeel***    | &nbsp;&nbsp; `bridgePart`                                             | Binnenkomende relaties `isOnderdeelVan` worden omgezet naar `bridgePart` relaties.                                                              |
| &nbsp;&nbsp; `^hoortBij` ***Installatie***            | &nbsp;&nbsp; `bridgeInstallation`                                     | Binnenkomende relaties `hoortBij` worden omgezet naar `bridgeInstallation` relaties.                                                            |
| **Ondertunneling**                                    | **Tunnel**                                                            | IBRO Element is breder                                                                                                                          |
| **Ondertunneling** `type = Sifon`                     | **Tunnel** `class = Sifon` of **OtherConstruction** `class = Sifon`   | Onzeker welke van de twee betere keuze is                                                                                                       |
| **Ondertunneling** `type = Tunnel`                    | **Tunnel** of **Tunnel** `class = Tunnel`                             |                                                                                                                                                 |
| **Ondertunneling** `type = Duiker`                    | **Tunnel** `class = Duiker` of **OtherConstruction** `class = Duiker` | Onzeker welke van de twee betere keuze is                                                                                                       |
| **Ondertunneling** `type = Hevel`                     | **Tunnel** `class = Hevel` of **OtherConstruction** `class = Hevel`   | Onzeker welke van de twee betere keuze is                                                                                                       |
| ***WaterstaatkundigKunstwerk***                       | **OtherConstruction**                                                 | Dit concept bestaat niet in CityGML.                                                                                                            |
| &nbsp;&nbsp; `heeftFunctie = {type}`                  | &nbsp;&nbsp; `function` = {type}                                      | vullen met het type Kering.                                                                                                                     |
| **OverigWaterstaatkundigKunstwerk** `type = {type}`   | **OtherConstruction** `class = {type}`                                |                                                                                                                                                 |
| ***Kunstwerkdeel***                                   | ***AbstractConstructiveElement***                                     |                                                                                                                                                 |
| **Schutkolk**                                         | **OtherConstruction**                                                 | Hier ontbreekt een niet-abstracte klasse voor. Er zijn wel BuildingConstructiveElement, BridgeConstructiveElement en TunnelConstructiveElement. |
| &nbsp;&nbsp; `isOnderdeelVan`                         | &nbsp;&nbsp; `relatedTo`                                              | Algemene relatie gebruiken van AbstractCityObject.                                                                                              |
| **Sluisdeur**                                         | **OtherConstruction**                                                 | Hier ontbreekt een niet-abstracte klasse voor. Er zijn wel BuildingConstructiveElement, BridgeConstructiveElement en TunnelConstructiveElement  |
| &nbsp;&nbsp; `isOnderdeelVan`                         | &nbsp;&nbsp; `relatedTo`                                              | Algemene relatie gebruiken van AbstractCityObject.                                                                                              |
| **Pyloon**                                            | **BridgeConstructiveElement**                                         |                                                                                                                                                 |
| &nbsp;&nbsp; `isOnderdeelVan`                         | -                                                                     | Zie **Overbrugging**. De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel                                        |
| **Sloof**                                             | **BridgeConstructiveElement**                                         |                                                                                                                                                 |
| &nbsp;&nbsp; `isOnderdeelVan`                         | -                                                                     | Zie **Overbrugging**. De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel                                        |
| **Landhoofd**                                         | **BridgeConstructiveElement**                                         |                                                                                                                                                 |
| &nbsp;&nbsp; `isOnderdeelVan`                         | -                                                                     | Zie **Overbrugging**. De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel                                        |
| **Dek**                                               | **BridgeConstructiveElement**                                         |                                                                                                                                                 |
| &nbsp;&nbsp; `isOnderdeelVan`                         | -                                                                     | Zie **Overbrugging**. De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel                                        |
| **Pijler**                                            | **BridgeConstructiveElement**                                         |                                                                                                                                                 |
| &nbsp;&nbsp; `isOnderdeelVan`                         | -                                                                     | Zie **Overbrugging**. De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel                                        |


## Overige constructies {#citygml-mapping-overige-constructies}

| IBRO Element                                                                      | CityGML Element                                         | Opmerkingen                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OverigeConstructie**                                                            | **OtherConstruction**                                   |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Afvalcontainer`                                    | **CityFurniture** `class = Afvalcontainer`              |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Dok`                                               | **OtherConstruction** `class = Dok`                     |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Erfconstructie`                                    | **Building** `class = Erfconstructie`                   |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Geleideconstructie`                                | **CityFurniture** `class = Geleideconstructie`          |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Opslagtank`                                        | **OtherConstruction** `class = Opslagtank`              |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Paal`                                              | **CityFurniture** `class = Paal`                        |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Putdeksel`                                         | **CityFurniture** `class = Putdeksel`                   |                                                                                                                                                                                                                |
| **OverigeConstructie** `type = Reservoir, subtype = null`                         | **OtherConstruction** `class = Reservoir`               | Wanneer `type` aanwezig, maar `subtype` niet, krijgt `class` de waarde van `type`.                                                                                                                             |
| **OverigeConstructie** `type = Reservoir, subtype = {subtype}`                    | **OtherConstruction** `class = {subtype}`               | Wanneer `subtype` aanwezig, krijgt `class` de waarde van `subtype`.                                                                                                                                            |
| **OverigeConstructie** `type = Straatmeubilair, subtype = null`                   | **CityFurniture** `class = Straatmeubilair`             | Wanneer `type` aanwezig, maar `subtype` niet, krijgt `class` de waarde van `type`.                                                                                                                             |
| **OverigeConstructie** `type = Straatmeubilair, subtype = {subtype}`              | **CityFurniture** `class = {subtype}`                   | Wanneer `subtype` aanwezig, krijgt `class` de waarde van `subtype`.                                                                                                                                            |
| **OverigeConstructie** `type = Zwembad`                                           | **OtherConstruction** `class = Zwembad`                 |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                | Of `lod[n]Solid`, of `lod[n]ImplicitRepresentation` bijv. voor bepaalde typen straatmeubilair                                                                                                                  |
| &nbsp;&nbsp; `geometrie = {type GM_Curve}`                                        | &nbsp;&nbsp; `lod[n]MultiCurve`                         | Of `lod[n]Solid`, of `lod[n]ImplicitRepresentation` bijv. voor bepaalde typen straatmeubilair                                                                                                                  |
| &nbsp;&nbsp; `geometrie = {type GM_Surface}`                                      | &nbsp;&nbsp; `lod[n]Solid`                              | Of `lod[n]ImplicitRepresentation` bijv. voor bepaalde typen straatmeubilair                                                                                                                                    |
| ***Installatie***                                                                 | *zie subtypen*                                          |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `hoortBij`                                                           | -                                                       | De compositie relatie loopt bij CityGML de andere kant op, van brug/tunnel/gebouw naar installatie. En voor andere constructies is deze relatie er niet. Eventueel de generieke relatie `relatedTo` gebruiken. |
| **Kast**                                                                          | **CityFurniture** `class = Kast`                        |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                | Naast eventueel `lod[n]Solid` voor iedere constructie                                                                                                                                                          |
| **Lift** `hoortBij {type = Pand}` of `hoortBij {type = Panddeel}`                 | **BuildingInstallation** `class = Lift`                 |                                                                                                                                                                                                                |
| **Lift** `hoortBij {type = Overbrugging}`                                         | **BridgeInstallation** `class = Lift`                   |                                                                                                                                                                                                                |
| **Lift** `hoortBij {type = Ondertunneling}`                                       | **TunnelInstallation** `class = Lift`                   |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Surface}`                                      | &nbsp;&nbsp; `lod[n]Solid`                              | Of `lod[n]ImplicitRepresentation` in geval van implicit geometry                                                                                                                                               |
| **Oplaadpunt** `hoortBij {type = Pand}` of `hoortBij {type = Panddeel}`           | **BuildingInstallation** `class = Oplaadpunt`           |                                                                                                                                                                                                                |
| **Oplaadpunt** `hoortBij {type = Overbrugging}`                                   | **BridgeInstallation** `class = Oplaadpunt`             |                                                                                                                                                                                                                |
| **Oplaadpunt** `hoortBij {type = Ondertunneling}`                                 | **TunnelInstallation** `class = Oplaadpunt`             |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                |                                                                                                                                                                                                                |
| **Pomp**                                                                          | **CityFurniture** `class = Pomp`                        |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                |                                                                                                                                                                                                                |
| **Sirene** `hoortBij {type = Pand}` of `hoortBij {type = Panddeel}`               | **BuildingInstallation** `class = Sirene`               |                                                                                                                                                                                                                |
| **Sirene** `hoortBij {type = Overbrugging}`                                       | **BridgeInstallation** `class = Sirene`                 |                                                                                                                                                                                                                |
| **Sirene** `hoortBij {type = Ondertunneling}`                                     | **TunnelInstallation** `class = Sirene`                 |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                |                                                                                                                                                                                                                |
| **Transformator**                                                                 | **OtherConstruction**                                   |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                |                                                                                                                                                                                                                |
| **Verlichtingsarmatuur** `hoortBij {type = Pand}` of `hoortBij {type = Panddeel}` | **BuildingInstallation** `class = Verlichtingsarmatuur` |                                                                                                                                                                                                                |
| **Verlichtingsarmatuur** `hoortBij {type = Overbrugging}`                         | **BridgeInstallation** `class = Verlichtingsarmatuur`   |                                                                                                                                                                                                                |
| **Verlichtingsarmatuur** `hoortBij {type = Ondertunneling}`                       | **TunnelInstallation** `class = Verlichtingsarmatuur`   |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                |                                                                                                                                                                                                                |
| **Windturbine**                                                                   | **OtherConstruction** `class = Windturbine`                                  |                                                                                                                                                                                                             |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                |                                                                                                                                                                                                                |
| **Zonnepanelen** `hoortBij {type = Pand}` of `hoortBij {type = Panddeel}`         | **BuildingInstallation** `class = Zonnepanelen`         |                                                                                                                                                                                                                |
| **Zonnepanelen** `hoortBij {type = Overbrugging}`                                 | **BridgeInstallation** `class = Zonnepanelen`           |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Point}`                                        | &nbsp;&nbsp; `lod0Point`                                | Of `lod[n]Solid`, of `lod[n]ImplicitRepresentation` in geval van implicit geometry                                                                                                                             |
| &nbsp;&nbsp; `geometrie = {type GM_Surface}`                                      | &nbsp;&nbsp; `lod[n]Solid`                              | Of `lod[n]ImplicitRepresentation` in geval van implicit geometry                                                                                                                                               |
| **Mast**                                                                          | **CityFurniture**                                       |                                                                                                                                                                                                                |
| **Mast** `type = {type}`                                                          | **CityFurniture** `class = {type}`                      |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `indicatieOpenMast = true`                                           | &nbsp;&nbsp; `spaceType = semiOpen`                     |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `indicatieOpenMast = false`                                          | &nbsp;&nbsp; `spaceType = closed`                       |                                                                                                                                                                                                                |
| **Muur**                                                                          | **OtherConstruction**                                   |                                                                                                                                                                                                                |
| **Muur** `type = {type}`                                                          | **OtherConstruction** `class = {type}`                  |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `geometrie = {type GM_Curve}`                                        | &nbsp;&nbsp; `lod[n]MultiCurve`                         | Of `lod[n]Solid`                                                                                                                                                                                               |
| &nbsp;&nbsp; `geometrie = {type GM_Surface}`                                      | &nbsp;&nbsp; `lod[n]Solid`                              |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `indicatieValbescherming = true`                                     | &nbsp;&nbsp; `function`                                 | Vullen met 'Valbescherming'                                                                                                                                                                                    |
| &nbsp;&nbsp; `heeftFunctie = {type}`                                              | &nbsp;&nbsp; `function = {type}`                        | Vullen met het type Kering of Afscheiding. Meerdere functies zijn toegestaan in CityGML                                                                                                                        |
| **Omheining**                                                                     | **OtherConstruction** `class = Omheining`                                  |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `indicatieValbescherming = true`                                     | &nbsp;&nbsp; `function`                                 | Vullen met 'Valbescherming'                                                                                                                                                                                    |
| &nbsp;&nbsp; `heeftFunctie = {type}`                                              | &nbsp;&nbsp; `function = {type}`                        | Vullen met 'Afscheiding'                                                                                                                                                                                       |
| **Scherm**                                                                        | **OtherConstruction** `class = Scherm`                                  |                                                                                                                                                                                                                |
| &nbsp;&nbsp; `heeftFunctie = {type}`                                              | &nbsp;&nbsp; `function = {type}`                        | vullen met het type Reducering                                                                                                                                                                                 |


## Transportnetwerk {#citygml-mapping-transportnetwerk}

| IBRO Element                   | CityGML Element                                       | Opmerkingen |
| ------------------------------ | ----------------------------------------------------- | ----------- |
| ***Transportruimte***          | ***AbstractTransportationSpace*** of **TrafficSpace** |             |
| &nbsp;&nbsp; `hyperverbinding` | &nbsp;&nbsp; `relatedTo`                              |             |
| ***Transportverbinding***      | ***AbstractTransportationSpace*** of **TrafficSpace** |             |
| &nbsp;&nbsp; `krommegeometrie` | &nbsp;&nbsp; `lod[n]MultiCurve`                       |             |
| ***Transportknoop***           | **Intersection**                                      |             |
| &nbsp;&nbsp; `puntgeometrie`   | &nbsp;&nbsp; `lod0Point`                              |             |
| **SimpelePuntVerwijzing**      | Ontbreekt in CityGML                                  |             |
| **SimpeleLineaireVerwijzing**  | Ontbreekt in CityGML                                  |             |
| **Netwerkeigenschap**          | Ontbreekt in CityGML                                  |             |


## Wegennetwerk {#citygml-mapping-wegennetwerk}

Een IBRO wegverbinding kan in CityGML worden gemapt op verschillende CityGML types, afhankelijk van de IBRO type-aanduiding. In de onderstaande tabel is per IBRO type aangegeven welk CityGML type gebruikt moet worden. Bij ontbreken van een IBRO type wordt uitgegaan van het CityGML type **Road**.

| IBRO Element      | IBRO type                        | CityGML type ***AbstractTransportationSpace*** | Opmerkingen                                                               |
| ----------------- | -------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| **Wegverbinding** |                                  | **Road**                                       | Bij ontbreken van typering wordt uitgegaan van het CityGML type **Road**. |
| **Wegverbinding** | `Autosnelweg`                    | **Road**                                       |                                                                           |
| **Wegverbinding** | `Autoweg`                        | **Road**                                       |                                                                           |
| **Wegverbinding** | `Erftoegangsweg`                 | **Road**                                       |                                                                           |
| **Wegverbinding** | `Fietspad`                       | **Road**                                       |                                                                           |
| **Wegverbinding** | `FietsOfBromfietspad`            | **Road**                                       |                                                                           |
| **Wegverbinding** | `Fietsstraat`                    | **Road**                                       |                                                                           |
| **Wegverbinding** | `GebiedsontsluitingswegGesloten` | **Road**                                       |                                                                           |
| **Wegverbinding** | `GebiedsontsluitingswegOpen`     | **Road**                                       |                                                                           |
| **Wegverbinding** | `Ruiterpad`                      | **Road**                                       |                                                                           |
| **Wegverbinding** | `Veerverbinding`                 | **Waterway**                                   |                                                                           |
| **Wegverbinding** | `Voetgangerszone`                | **Road**                                       |                                                                           |
| **Wegverbinding** | `Voetpad`                        | **Track**                                      |                                                                           |

In onderstaande tabel is het type ***AbstractTransportationSpace*** aangeduid met **`{transportationSpaceType}`**. Dit kan dus **Road**, **Track**, **Waterway**, etc. zijn, afhankelijk van de IBRO type-aanduiding.

| IBRO Element                                                                         | CityGML Element                                                            | Opmerkingen                                                                                                                      |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ***Wegverkeerruimteverbinding***                                                     | ***AbstractTransportationSpace*** of **TrafficSpace**                      |                                                                                                                                  |
| &nbsp;&nbsp; `rijrichting = Eenrichting`                                             | &nbsp;&nbsp; `trafficSpace = forwards`                                     |                                                                                                                                  |
| &nbsp;&nbsp; `rijrichting = Tegenovergesteld eenrichting`                            | &nbsp;&nbsp; `trafficSpace = backwards`                                    |                                                                                                                                  |
| &nbsp;&nbsp; `rijrichting = Beide`                                                   | &nbsp;&nbsp; `trafficSpace = both`                                         |                                                                                                                                  |
| &nbsp;&nbsp; `vlakgeometrie`                                                         | &nbsp;&nbsp; `lod[n]MultiSurface`                                          |                                                                                                                                  |
| collectie **Wegverbinding**-en met dezelfde *OpenbareRuimte* (`heeftOpenbareRuimte`) | **`{transportationSpaceType}`** `name = `OpenbareRuimte.naam`              |                                                                                                                                  |
| **Wegverbinding** `heeftOpenbareRuimte = null`                                       | **`{transportationSpaceType}`**                                            |                                                                                                                                  |
| **Wegverbinding**                                                                    | **Section**                                                                | verbonden vanaf bijbehorende **`{transportationSpaceType}`** met `section`                                                       |
| &nbsp;&nbsp; `type = null`                                                           | &nbsp;&nbsp; `class = Wegverbinding`                                       |                                                                                                                                  |
| &nbsp;&nbsp; `type = {type}`                                                         | &nbsp;&nbsp; `class = {type}`                                              |                                                                                                                                  |
| &nbsp;&nbsp; `routenummer`                                                           | &nbsp;&nbsp; `name`                                                        |                                                                                                                                  |
| &nbsp;&nbsp; `indicatieOpenbareWeg = false`                                          | &nbsp;&nbsp; `genericAttribute: IntAttribute (value = 0)`                  | CityGML kent geen `BooleanAttribute`.                                                                                            |
| &nbsp;&nbsp; `indicatieOpenbareWeg = true`                                           | &nbsp;&nbsp; `genericAttribute: IntAttribute (value = 1)`                  | CityGML kent geen `BooleanAttribute`.                                                                                            |
| &nbsp;&nbsp; `heeftOpenbareRuimte`                                                   | &nbsp;&nbsp; `relatedTo`                                                   |                                                                                                                                  |
| &nbsp;&nbsp; `startKnoop`                                                            | &nbsp;&nbsp; `intersection`                                                |                                                                                                                                  |
| &nbsp;&nbsp; `startKnoop`                                                            | &nbsp;&nbsp; `genericAttribute: StringAttribute (value = Intersection.id)` | CityGML maakt geen onderscheid tussen start- en eindknopen. Hiermee wordt aangegeven welke **Intersection** de startknoop is.    |
| &nbsp;&nbsp; `eindKnoop`                                                             | &nbsp;&nbsp; `intersection`                                                |                                                                                                                                  |
| &nbsp;&nbsp; `eindKnoop`                                                             | &nbsp;&nbsp; `genericAttribute: StringAttribute (value = Intersection.id)` | CityGML maakt geen onderscheid tussen start- en eindknopen. Hiermee wordt aangegeven welke **Intersection** de eindknoop is.     |
| &nbsp;&nbsp; `(^isOnderdeelVan)*`                                                    | &nbsp;&nbsp; `trafficSpace`                                                | Transitief binnenkomende relaties `isOnderdeelVan` worden omgezet naar `trafficSpace` relaties. Dus baan- en strookverbindingen. |
| &nbsp;&nbsp; `ligtOp` **Verharding**                                                 | &nbsp;&nbsp; `trafficArea`                                                 | `ligtOp` relaties naar het type **Verharding** worden omgezet naar `trafficArea` relaties.                                       |
| &nbsp;&nbsp; `ligtOp` !**Verharding**                                                | &nbsp;&nbsp; `relatedTo`                                                   | `ligtOp` relaties naar types anders dan **Verharding** worden omgezet naar `relatedTo` relaties.                                 |
| **Baanverbinding**                                                                   | **TrafficSpace** `granularityValue = way`                                  |                                                                                                                                  |
| &nbsp;&nbsp; `type = null`                                                           | &nbsp;&nbsp; `class = Baanverbinding`                                      |                                                                                                                                  |
| &nbsp;&nbsp; `type = {type}`                                                         | &nbsp;&nbsp; `class = {type}`                                              |                                                                                                                                  |
| &nbsp;&nbsp; `ligtOp` **Verharding**                                                 | &nbsp;&nbsp; `trafficArea`                                                 | `ligtOp` relaties naar het type **Verharding** worden omgezet naar `trafficArea` relaties.                                       |
| &nbsp;&nbsp; `ligtOp` !**Verharding**                                                | &nbsp;&nbsp; `relatedTo`                                                   | `ligtOp` relaties naar types anders dan **Verharding** worden omgezet naar `relatedTo` relaties.                                 |
| **Strookverbinding**                                                                 | **TrafficSpace** `granularityValue = lane`                                 |                                                                                                                                  |
| &nbsp;&nbsp; `type = null`                                                           | &nbsp;&nbsp; `class = Strookverbinding`                                    |                                                                                                                                  |
| &nbsp;&nbsp; `type = {type}`                                                         | &nbsp;&nbsp; `class = {type}`                                              |                                                                                                                                  |
| &nbsp;&nbsp; `ligtOp` **Verharding**                                                 | &nbsp;&nbsp; `trafficArea`                                                 | `ligtOp` relaties naar het type **Verharding** worden omgezet naar `trafficArea` relaties.                                       |
| &nbsp;&nbsp; `ligtOp` !**Verharding**                                                | &nbsp;&nbsp; `relatedTo`                                                   | `ligtOp` relaties naar types anders dan **Verharding** worden omgezet naar `relatedTo` relaties.                                 |
| **Wegknoop**                                                                         | **Intersection**                                                           |                                                                                                                                  |
| &nbsp;&nbsp; `type = null`                                                           | &nbsp;&nbsp; `class = Wegknoop`                                            |                                                                                                                                  |
| &nbsp;&nbsp; `type = {type}`                                                         | &nbsp;&nbsp; `class = {type}`                                              |                                                                                                                                  |
| &nbsp;&nbsp; `geometrie`                                                             | &nbsp;&nbsp; `lod[n]MultiSurface`                                          |                                                                                                                                  |
| &nbsp;&nbsp; `heeftOpenbareRuimte`                                                   | &nbsp;&nbsp; `relatedTo`                                                   |                                                                                                                                  |
| **Baanknoop**                                                                        | -                                                                          | Ontbreekt in CityGML.                                                                                                            |
| **Strookknoop**                                                                      | -                                                                          | Ontbreekt in CityGML.                                                                                                            |
| **Hectometerpunt**                                                                   | -                                                                          | Ontbreekt in CityGML.                                                                                                            |

<aside class="note">

CityGML biedt de mogelijkheid om `successor` en `predecessor` relaties te leggen tussen `TrafficSpace` objecten. Dit kan gebruikt worden om het netwerk van baanverbindingen te representeren, bijv. voor routering- of simulatiedoeleinden.

In de huidige mapping is dit niet verder uitgewerkt.

<figure>
<img src="media/TrafficSpace-successor-predecessor.png" alt="`successor` en `predecessor` relaties van `TrafficSpace`"/>
<figcaption>`successor` en `predecessor` relaties van `TrafficSpace`</figcaption>
</figure>

</aside>


## Spoorwegennetwerk {#citygml-mapping-spoorwegennetwerk}

| IBRO Element                        | CityGML Element              | Opmerkingen |
| ----------------------------------- | ---------------------------- | ----------- |
| **Spoorverbinding** `type = {type}` | **Railway** `class = {type}` |             |
| &nbsp;&nbsp; `startKnoop`           | -                            |             |
| &nbsp;&nbsp; `eindKnoop`            | -                            |             |
| **Spoorwegknoop**                   | -                            |             |


## Functionele ruimten {#citygml-mapping-functionele-ruimten}

| IBRO Element                                           | CityGML Element                                                 | Opmerkingen |
| ------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| **Afscheiding**                                        | **GenericLogicalSpace** `class = Afscheiding`                   |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiCurve`                                 |             |
| **Complex**                                            | **GenericLogicalSpace** `class = Complex`                       |             |
| **Complex** `type = {type}`                            | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `naam`                                    | &nbsp;&nbsp; `name`                                             |             |
| **GebruikszoneOppervlaktewater**                       | **GenericLogicalSpace** `class = GebruikszoneOppervlaktewater`  |             |
| **GebruikszoneOppervlaktewater** `type = {type}`       | **GenericLogicalSpace** `class = {type}`                        |             |
| **Grondkering**                                        | **GenericLogicalSpace** `class = Grondkering`                   |             |
| **Grondkering** `type = {type}`                        | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| **Waterkering**                                        | **GenericLogicalSpace** `class = Waterkering`                   |             |
| **Waterkering** `type = {type}`                        | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiCurve`                                 |             |
| **Luchtvaartzone**                                     | **GenericLogicalSpace** `class = Luchtvaartzone`                |             |
| **Luchtvaartzone** `type = {type}`                     | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| &nbsp;&nbsp; `naam`                                    | &nbsp;&nbsp; `name`                                             |             |
| **Oeverzone**                                          | **GenericLogicalSpace** `class = Oeverzone`                     |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| &nbsp;&nbsp; `naam`                                    | &nbsp;&nbsp; `name`                                             |             |
| &nbsp;&nbsp; `indicatieNatuurvriendelijkeOever = true` | &nbsp;&nbsp; `function = NatuurvriendelijkeOever`               |             |
| **Recreatiezone**                                      | **GenericLogicalSpace** `class = Recreatiezone`                 |             |
| **Recreatiezone** `type = {type}`                      | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| &nbsp;&nbsp; `naam`                                    | &nbsp;&nbsp; `name`                                             |             |
| **Reducering**                                         | **GenericLogicalSpace** `class = Reducering`                    |             |
| **Reducering** `type = {type}`                         | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiCurve`                                 |             |
| **Spoorzone**                                          | **GenericLogicalSpace** `class = Spoorzone`                     |             |
| **Spoorzone** `type = {type}`                          | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| **VerkeerskundigFunctioneleZone**                      | **GenericLogicalSpace** `class = VerkeerskundigFunctioneleZone` |             |
| **VerkeerskundigFunctioneleZone** `type = {type}`      | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| &nbsp;&nbsp; `naam`                                    | &nbsp;&nbsp; `name`                                             |             |
| **Waterbergingsgebied**                                | **GenericLogicalSpace** `class = Waterbergingsgebied`           |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |
| **Wegzone**                                            | **GenericLogicalSpace** `class = Wegzone`                       |             |
| **Wegzone** `type = {type}`                            | **GenericLogicalSpace** `class = {type}`                        |             |
| &nbsp;&nbsp; `geometrie`                               | &nbsp;&nbsp; `lod[n]MultiSurface`                               |             |


## Registratieve ruimten {#citygml-mapping-registratieve-ruimten}

| IBRO Element                                 | CityGML Element                                  | Opmerkingen                                                    |
| -------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------- |
| **Woonplaats**                               | **GenericLogicalSpace** `class = Woonplaats`     |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `formeleNaam`                   | &nbsp;&nbsp; `name`                              |                                                                |
| &nbsp;&nbsp; `alternatieveNaam`              | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `ligtIn`                        | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **Wijk**                                     | **GenericLogicalSpace** `class = Wijk`           |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `wijkcode`                      | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `wijknaam`                      | &nbsp;&nbsp; `name`                              |                                                                |
| &nbsp;&nbsp; `ligtIn`                        | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **Buurt**                                    | **GenericLogicalSpace** `class = Buurt`          |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `buurtcode`                     | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `buurtnaam`                     | &nbsp;&nbsp; `name`                              |                                                                |
| &nbsp;&nbsp; `ligtIn`                        | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **Subbuurt**                                 | **GenericLogicalSpace** `class = Subbuurt`       |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `subbuurtcode`                  | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `subbuurtnaam`                  | &nbsp;&nbsp; `name`                              |                                                                |
| &nbsp;&nbsp; `ligtIn`                        | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **Subbuurtdeel**                             | **GenericLogicalSpace** `class = Subbuurtdeel`   |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `subbuurtdeelcode`              | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `subbuurtdeelnaam`              | &nbsp;&nbsp; `name`                              |                                                                |
| &nbsp;&nbsp; `ligtIn`                        | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **OpenbareRuimte**                           | **GenericLogicalSpace** `class = OpenbareRuimte` |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `formeleNaam`                   | &nbsp;&nbsp; `name`                              |                                                                |
| &nbsp;&nbsp; `alternatieveNaam`              | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `ligtIn`                        | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **Nummeraanduiding**                         | **GenericLogicalSpace**                          | CityGML's Address kan alleen gebruikt worden op Constructions. |
| &nbsp;&nbsp; `huisnummer`                    | &nbsp;&nbsp; `genericAttribute: IntAttribute`    |                                                                |
| &nbsp;&nbsp; `huisletter`                    | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `huisnummertoevoeging`          | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| &nbsp;&nbsp; `postcode`                      | &nbsp;&nbsp; `genericAttribute: StringAttribute` |                                                                |
| **AdresseerbaarObject**                      | -                                                |                                                                |
| &nbsp;&nbsp; `heeftAlsHoofdadres`            | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| &nbsp;&nbsp; `heeftAlsNevenadres`            | &nbsp;&nbsp; `relatedTo`                         |                                                                |
| **BenoemdePlaats**                           | **GenericLogicalSpace** `class = BenoemdePlaats` |                                                                |
| &nbsp;&nbsp; `geometrie`                     | &nbsp;&nbsp; `lod[n]MultiSurface`                |                                                                |
| &nbsp;&nbsp; `typeTePlaatsenObject = {type}` | &nbsp;&nbsp; `class = {type}`                    |                                                                |


## Geografische ruimten {#citygml-mapping-geografische-ruimten}

N.B. je maakt in CityGML een 3D  Digital Terrain Model met behulp van de **Relief** module.

| IBRO Element                              | CityGML Element                                         | Opmerkingen |
| ----------------------------------------- | ------------------------------------------------------- | ----------- |
| **Bebouwingskern**                        | **GenericLogicalSpace** `class = Bebouwingskern`        |             |
| **Bebouwingskern** `type = {type}`        | **GenericLogicalSpace** `class = {type}`                |             |
| &nbsp;&nbsp; `geometrie`                  | &nbsp;&nbsp; `lod[n]MultiSurface`                       |             |
| **LandschappelijkGebied**                 | **GenericLogicalSpace** `class = LandschappelijkGebied` |             |
| **LandschappelijkGebied** `type = {type}` | **GenericLogicalSpace** `class = {type}`                |             |
| &nbsp;&nbsp; `geometrie`                  | &nbsp;&nbsp; `lod[n]MultiSurface`                       |             |
| **Steilrand**                             | **GenericLogicalSpace** `class = Steilrand`             |             |
| &nbsp;&nbsp; `geometrie`                  | &nbsp;&nbsp; `lod[n]MultiSurface`                       |             |
| **OverigeReliefzone**                     | **GenericLogicalSpace** `class = OverigeReliefzone`     |             |
| **OverigeReliefzone** `type = {type}`     | **GenericLogicalSpace** `class = {type}`                |             |
| &nbsp;&nbsp; `geometrie`                  | &nbsp;&nbsp; `lod[n]MultiSurface`                       |             |
| **Streek**                                | **GenericLogicalSpace** `class = Streek`                |             |
| &nbsp;&nbsp; `geometrie`                  | &nbsp;&nbsp; `lod[n]MultiSurface`                       |             |
