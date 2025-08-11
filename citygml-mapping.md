# Conceptuele mapping van IBRO met CityGML

Het IBRO informatiemodel wordt afgestemd met OGC CityGML v3.0 [[CityGML3]]. 

Om rekening mee te houden: *Only top-level features are allowed as direct members of a city model.* Dit zijn (beperkt tot de feature types waar we mappings naar hebben): 
- CityFurniture
- GenericLogicalSpace
- LandUse
- Railway
- Road
- Waterway
- PlantCover
- SolitaryVegetationObject
- WaterBody
- OtherConstruction
- Bridge
- Building
- Tunnel
- CityObjectGroup

## Kern
De kern van generieke objecttypen:

| IBRO Concept           | CityGML Element      | Opmerkingen                |
|------------------------|----------------------|----------------------------|
| **ReeelObject**        | AbstractPhysicalSpace|                            |
| `status`               | Transaction.type     | Er is een transactie-gebaseerd versioning model waar iets van status in zit maar het matcht op het eerste gezicht niet goed.|
| `geometrie`            | lod[n][geometrytype] | Er zijn meerdere geometrieën per space / thematic surface, zie Figure 23 |
| **FunctioneleRuimte**  | GenericLogicalSpace  | geen fysiek object         | 
| `status`               | Transaction.type     | zie hierboven              |
| **GeografischeRuimte** | GenericLogicalSpace  | geen fysiek object         | 
| **RegistratieveRuimte**| GenericLogicalSpace  | geen fysiek object         | 
| **Constructie**        | Construction         |                            |
| **OnbepaaldTerrein**   | LandUse              | Geen CityGML concept mapt hier specifiek naar, ik zou zeggen het is een type LandUse. | 

Hierna kijken we alleen naar de fysieke objecten van IBRO.

## Groen
| IBRO Concept                         | CityGML Element          | Opmerkingen                |
|--------------------------------------|--------------------------|----------------------------|
| **Begroeiing**                       | AbstractVegetationObject |                            |
| Alle subklassen behalve boom en haag | PlantCover               | Het `class` attribuut vullen met naam van subklasse.|
| **Boom**, **Haag**                   | SolitaryVegetationObject |                            |

## Bodem
| IBRO Concept                       | CityGML Element          | Opmerkingen                |
|------------------------------------|--------------------------|----------------------------|
| **OnbegroeideGrond**               | LandUse                  | LandUse kan worden gebruikt voor functionele of fysieke indeling volgens de definitie |

## Water
| IBRO Concept                       | CityGML Element          | Opmerkingen                |
|------------------------------------|--------------------------|----------------------------|
| **Oppervlaktewater**               | WaterBody                | CityGML heeft ook klasse WaterSurface maar dit is geen TopLevelFeaturetype. WaterBody kan met alleen een WaterSurface worden opgenomen of met ook een WaterGroundSurface.|
| `indicatiePrimair`                 | -                        | Niet in CityGML. Bij Transportation heb je wel Waterway, dat zou gebruikt kunnen worden om water als ding met transportfunctie te modelleren.|
| Alle subklassen                    | Waterbody                | Het `class` attribuut vullen met naam van subklasse.|
| **Watergang**                      | WaterBody                | Als hierboven              |
| **Getijdengebied**                 | WaterBody                | WaterBody kan ook semi permanent zijn.|
| **Greppel**                        | WaterBody                | Als hierboven              |

## Gebouwen
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Pand** (alle pand typen) als `aardPand` = Vrijstaand gebouw| Building                 | Buildings zijn *freestanding, self-supporting constructions*.|
| **Pand** overig                    | Building met BuildingPart   | BuildingPart is geen TopLevelFeaturetype. *A BuildingPart is a physical or functional subdivision of a Building. It would be considered a Building, if it were not part of a collection of other BuildingParts.*|
| `status`                           | `conditionOfConstruction`   |                            |
| `aardPand`                         | `class`                     |                            |
| `oorsronkelijkBouwjaar`            | `dateOfConstruction`        |                            |
| `naam`                             | `name`                      | Dit is een attribuut bij de hoogste abstracte topklasse, AbstractFeature|
| `indicatieOpenConstructie`         | -                           | todo check spacetype       |
| `bestaatUit` Panddeel              | `buildingPart`              |                            |
| **Panddeel**                       | BuildingPart of BuildingUnit| Als het deel uitmaakt van een vrijstaand gebouw en het is semantisch gezien geen BuildingInstallation, dan mappen naar BuildingPart. Anders BuildingUnit of BuildingInstallation. Per panddeeltype mappen (zie volgende regels).|
| **Basisconstructie**               | BuildingPart of BuildingUnit|                            |
| **LatereAanbouw**                  | BuildingPart of BuildingUnit|                            |
| **Serre**                          | BuildingPart of BuildingUnit|                            |
| **Afdak**                          | BuildingInstallation        |                            |
| **Balkon**                         | BuildingInstallation        |                            |
| **Bordes**                         | BuildingInstallation        |                            |
| **Dakkapel**                       | BuildingInstallation        |                            |
| **Kolom**                          | BuildingInstallation of BuildingConstructiveElement | Dat laatste als *essential from a structural point of view.* |
| **Laadperron**                     | BuildingInstallation        |                            |
| **Loopbrug**                       | BuildingInstallation        |                            |
| **Toegangstrap**                   | BuildingInstallation        |                            |
| **Bouwlaag**                       | Storey                      |                            | 
| `bouwlaagnummer`                   | storeysAboveGround          |                            |
| `ligtIn` Pand                      | `relatedTo`                 | CityGML Storey heeft geen relatie met Building of BuildingPart. Algemene relatie gebruiken van AbstractCityObject. | 
| **Functiezone**                    | BuildingUnit                | Is breder, hoeft niet op zelfde storey te liggen|
| `brutoVloeroppervlakte`            | `area`                      | attribuut van AbstractSpace, waarde is van het type `QualifiedArea` |
| `ligtIn` Bouwlaag                  | `storey`                    |                            | 
| **Gebruikzone**                    | BuildingUnit                | Mag je meerdere BuildingUnit indelingen hebben in 1 citymodel?|
| `gebruiksoppervlakte`              |  `area`                     | attribuut van AbstractSpace|
| `ligtIn` Bouwlaag                  | `storey`                    |                            |
| **Toegangspunt**                   |  Door                       | CityGML is specifieker. Door kan wel een point geometry hebben.|
| `toegangssoort`                    | -                           |                            |
| `gebruiksaard`                     | `usage`                     |                            | 
| **Verblijfsobject**                | CityObjectGroup `class`=verblijfsobject| abstract groeperingsmechanisme in CityGML gebruiken aangezien Verblijfsobject een clustering van gebruikszones is.|
| `gebruiksoppervlakte`              | `area`                      | attribuut van AbstractSpace|
| `omvat` Gebruikzone                | `groupMember`               |                            |

## Verhardingen
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Verharding**                     | TrafficArea                 | In Citygml is dit een thematic surface terwijl Verharding een fysiek object is. TrafficArea is geen TopLevelFeaturetype, moet als onderdeel van een Road opgenomen worden.|
| Alle subklassen                    | `surfaceMaterial`           |                            |

## Kunstwerken
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Kunstwerk**                      | -                           | Het concept Kunstwerk bestaat niet in CityGML, Construction omvat gebouwen, tunnels, bruggen en andere kunstwerken.|
| `naam`                             | `name`                      | Dit is een attribuut bij de hoogste abstracte topklasse, AbstractFeature|
| **WaterstaatkundigKunstwerk**      | -                           | Dit concept bestaat niet in CityGML.|
| Alle subklassen                    | OtherConstruction           | Vul `class` met naam vd subklasse|
| **Kunstwerkdeel**                  | AbstractConstructiveElement |                            |
| **Schutkolk**                      | -                           | hier ontbreekt een niet-abstracte klasse voor. Er zijn wel BuildingConstructiveElement, BridgeConstructiveElemement en TunnelConstructiveElement|
| `isOnderdeelVan`                   | `relatedTo`                 | Algemene relatie gebruiken van AbstractCityObject. |                          
| **Sluisdeur**                      | -                           | hier ontbreekt een niet-abstracte klasse voor. Er zijn wel BuildingConstructiveElement, BridgeConstructiveElemement en TunnelConstructiveElement|
| `isOnderdeelVan`                   | `relatedTo`                 | Algemene relatie gebruiken van AbstractCityObject. |                          
| **Pyloon**                         | BridgeConstructiveElemement |                            |
| `isOnderdeelVan`                   | -                           | De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel |                          
| **Sloof**                          | BridgeConstructiveElemement |                            |
| `isOnderdeelVan`                   | -                           | De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel |  
| **Landhoofd**                      | BridgeConstructiveElemement |                            |
| `isOnderdeelVan`                   | -                           | De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel |  
| **Dek**                            | BridgeConstructiveElemement |                            |
| `isOnderdeelVan`                   | -                           | De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel |  
| **Pijler**                         | BridgeConstructiveElemement |                            |
| `isOnderdeelVan`                   | -                           | De compositie relatie loopt bij CityGML de andere kant op, van brug naar onderdeel |  
| **Overbrugging**                   | Bridge                      |                            |
| Alle subklassen                    | Bridge                      | Het `class` attribuut vullen met naam van subklasse.|
| `indicatieBeweegbaar`              | isMovable                   |                            |
| **Ondertunneling**                 | Tunnel                      | IBRO concept is breder     |
| **Sifon**                          | Tunnel of OtherConstruction | Onzeker welke van de twee betere keuze is|
| **Tunnel**                         | Tunnel                      |                            |
| **Duiker**                         | Tunnel of OtherConstruction | Onzeker welke van de twee betere keuze is|
| **Hevel**                          | Tunnel of OtherConstruction | Onzeker welke van de twee betere keuze is|

## Overige constructies
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Muur**                           | OtherConstruction           |                            |
| Alle subklassen                    | OtherConstruction           |                            |
| `indicatieValbescherming` true()   | `function`                  | vullen met 'valbescherming'|
| `heeftFunctie`                     | `function`                  | vullen met Kering of Afscheiding. Meerdere functies zijn toegestaan in CityGML|
| **Mast**                           | CityFurniture               |                            |
| `indicatieOpenMast`                | -                           |                            |
| **Hoogspanningsmast**              | CityFurniture               |                            |
| **Installatie**                    | zie subklassen              |                            |
| `hoortBij`                         | -                           | De compositie relatie loopt bij CityGML de andere kant op, van brug/tunnel/gebouw naar installatie. En voor andere constructies is deze relatie er niet. Eventueel de generieke relatie `relatedTo` gebruiken. |  
| **Verlichtingsarmatuur**           | Installation of CityFurniture|Hangt af van de plaatsing op constructie of paal. In CityGML heb je BridgeInstallation, BuildingInstallation en TunnelInstallation|
| **Sirene**                         | idem                        |                            |
| **Zonnepanelen**                   | idem                        |                            |
| **Oplaadpunt**                     | idem                        |                            |
| **Transformator**                  | CityFurniture?              | niet zeker van match       |
| **Pomp**                           | CityFurniture               |                            |
| **Kast**                           | CityFurniture               |                            |
| **Lift**                           | BuildingInstallation        |                            |
| **Windturbine**                    | OtherConstruction           |                            |
| **Straatmeubilair**                | CityFurniture               |                            |
| **Reservoir**                      | OtherConstruction           |                            |
| Alle subklassen                    | OtherConstruction           |                            |
| **Omheining**                      | OtherConstruction           |                            |
| `indicatieValbescherming` true()   | `function`                  | vullen met 'valbescherming'|
| `heeftFunctie`                     | `function`                  | vullen met 'afscheiding'   |
| **Scherm**                         | OtherConstruction           |                            |
| `heeftFunctie`                     | `function`                  | vullen met 'reducering'    |
| **Opslagtank**                     | OtherConstruction           |                            |
| **Erfconstructie**                 | Building                    |                            |
| `naam`                             | `name`                      | Dit is een attribuut bij de hoogste abstracte topklasse, AbstractFeature|
| **Putdeksel**                      | CityFurniture               |                            |
| **Dok**                            | OtherConstruction           |                            |
| **Paal**                           | CityFurniture               |                            |
| **Geleideconstructie**             | CityFurniture               |                            |
| **Zwembad**                        | OtherConstruction           |                            |
| **Afvalcontainer**                 | CityFurniture               |                            |

## Netwerk

NB geen fysieke objecten. 

| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Netwerk**                        | -                           | Op dit abstractieniveau heeft CityGML niets                           |
| `inNetwerk`                        | -                           |
| **Netwerkelement**                 | -                           |                            |
| **Knoop**                          | -                           | Ontbreekt in CityGML       |
| `inkomendeVerbinding`              | -                           |                            |
| `uitgaandeVerbinding`              | -                           |                            |
| **Verbinding**                     | -                           |                            |
| `eindknoop`                        | -                           |                            |
| `startknoop`                       | -                           |                            |
| **Netwerkverwijzing**              | -                           |                            |
| **Verbindingsverwijzing**          | -                           |                            |
| **Netwerkeigenschap**              | -                           |                            |

## Transportnetwerk
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Transportruimte**                | AbstractTransportationSpace |                            |
| `hyperverbinding`                  | `relatedTo`                 |                            |
| `ligtOp`                           | `relatedTo`                 | als het specifiek om een wegdeel gaat: `trafficSpace`|
| **Transportverbinding**            | -                           | geen verbindingen en knopen in CityGML |
| **Transportknoop**                 | -                           | geen verbindingen en knopen in CityGML |

## Wegennetwerk
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Wegverkeerruimteknoop**          | -                           |                            |
| **Wegknoop**                       | -                           |                            |
| `heeftOpenbareRuimte`              | `relatedTo`                 |                            |
| **verkeersplein**                  | Intersection                | IBRO concept is nauwer. NB Intersection is geen TopLevelFeaturetype. Intersections moeten als onderdeel van Road worden opgenomen.|
| **Grensknoop**                     | -                           |                            |
| **Koppelknoop**                    | -                           |                            |
| **Rotonde**                        | Intersection                | IBRO concept is nauwer     |
| **Kruising**                       | Intersection                | IBRO concept is nauwer     |
| **Eindknoop**                      | -                           |                            |
| **Wegverbinding**                  | Road                        |                            |
| `routenummer`                      | `name`                      | Dit is een attribuut bij de hoogste abstracte topklasse, AbstractFeature|
| `indicatieOpenbareWeg`             | -                           | Enige manier is om met een virtual zone aan te geven of een ruimte openbaar is of niet |

## Spoorwegennetwerk
| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| **Spoorwegknoop**                  | -                           |                            |
| **Spoorverbinding**                | Railway                     |                            | 
| Alle subklassen                    | Railway                     | Het `class` attribuut vullen met naam van subklasse.|

## Functionele ruimten
Als we alleen de fysieke objecttypen mappen, dan is onderstaande niet relevant. Toch even gekeken hoe dit zou mappen. 

| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| 
| [herhaling] **FunctioneleRuimte**  | GenericLogicalSpace         | Zie [CityGML CM 7.7](https://docs.ogc.org/is/20-010/20-010.html#toc35).|
| `naam`                             | `name`                      |                            |
| **Afscheiding** en **Kering**      | `function`                  | Opnemen als waarde van attribuut `function` bij het fysiek object |
| Overige subklassen                 | GenericLogicalSpace         | Vul `class` met klassenaam.|

## Registratieve ruimten
Als we alleen de fysieke objecttypen mappen, dan is onderstaande niet relevant. Toch even gekeken hoe dit zou mappen. Het is een incomplete mapping.

| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| [herhaling] **RegistratieveRuimte**| GenericLogicalSpace         | Zie [CityGML CM 7.7](https://docs.ogc.org/is/20-010/20-010.html#toc35).|
| **Nummeraanduiding**               | Address                     |                            |
| Overige subklassen                 | GenericLogicalSpace         | Vul `class` met klassenaam.|
| `formeleNaam`                      | `name`                      |                            |
| `alternatieveNaam`                 | `name`                      |                            |
| `ligtIn`                           | `relatedTo`                 | relatedTo is gedefinieerd bij AbstractCityObject |
 
## Geografische ruimten
Als we alleen de fysieke objecttypen mappen, dan is onderstaande niet relevant. Toch even gekeken hoe dit zou mappen. Het is een incomplete mapping.

N.B. je maakt in CityGML een 3D  Digital Terrain Model met behulp van de **Relief** module.

| IBRO Concept                       | CityGML Element             | Opmerkingen                |
|------------------------------------|-----------------------------|----------------------------|
| [herhaling] **GeografischeRuimte** | GenericLogicalSpace         | Zie [CityGML CM 7.7](https://docs.ogc.org/is/20-010/20-010.html#toc35).|
| Alle subklassen                    | GenericLogicalSpace         | Vul `class` met klassenaam.|
| `alternatieveNaam`                 | `name`                      |                            |
| `naam`                             | `name`                      |                            |