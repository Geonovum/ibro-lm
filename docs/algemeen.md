# Algemene uitgangspunten

## Aansluiting op het conceptuele model IMIBRO

Het logisch gegevensmodel IBRO-LM is een uitwerking van het conceptuele model IMIBRO. Het IBRO-LM beschrijft de gegevens die nodig zijn om de in het IMIBRO beschreven objecten te verwerken. Het IBRO-LM is daarmee een logisch gegevensmodel dat aansluit op het conceptuele model IMIBRO.

Het logisch model heeft niet altijd dezelfde structuur als het conceptuele model. Zo zijn classificaties vaak als classificatie-attributen in het logisch model opgenomen. Daarnaast zijn in het logisch model ook attributen opgenomen die nodig zijn voor de registratie van objecten, maar niet in het conceptuele model zijn beschreven.

## Aansluiting op NEN 3610

Het logisch model IBRO-LM is opgesteld volgens de richtlijnen van [[NEN3610-2022]] en het [[MIM12]]. Dit betekent dat het model is opgebouwd uit objecttypen, attribuutsoorten en relatiesoorten. Daarnaast wordt er gebruik gemaakt van de in NEN 3610 beschreven basisprincipes voor identificaties, tijdlijnen en geometrieën.

## Identificatie

Aan elk <a data-cite="MIM12#object">object</a> wordt een unieke identificatie toegekend. Zolang het object bestaat, mag deze identificatie niet veranderen. De objectidentificatie moet uniek, betekenisloos, permanent en overal geldig (systeemonafhankelijk) zijn.

IBRO volgt hier de richtlijnen van [[NEN3610-2022]]. De identificatie identificeert het object. Als men het over het object met een bepaalde identificatie heeft (of er naar verwijst) dan wil men zeker weten dat daadwerkelijk dat ene object wordt bedoeld en niet dat er meerdere objecten aangewezen worden.

Daarnaast is het van belang dat de identificatie betekenisloos is. Dit betekent dat de identificatie geen informatie mag bevatten over het object zelf, zoals bijvoorbeeld de locatie, de eigenaar of de tijd van ontstaan. Dit voorkomt dat de identificatie moet worden aangepast als deze informatie verandert.

Een identificatie is permanent en identificeert een object in de beschouwde werkelijkheid, onafhankelijk van de gegevens die erover verwerkt worden. Gedurende de gehele levenscyclus van een object blijft de identificatie gelijk. De identificatie van een object identificeert dus niet de een versie van de gegevens over dat object. Voor het identificeren van een specifieke versie van de gegevens over een object wordt gebruik gemaakt van eigenschappen beschreven in [[[#registratiegegevens]]].

### Identificatie en Domein (namespace) attributen

In [[NEN3610-2022]] wordt beschreven dat de identificatie uniek moet zijn binnen een bepaald domein. Dit betekent dat de identificatie alleen uniek is binnen een bepaalde context, zoals een organisatie of een systeem. Om ervoor te zorgen dat de identificatie overal uniek is, wordt er gebruik gemaakt van een domein attribuut.

Een domein attribuut heeft als datatype een URI. De URI verwijst naar de context waarin de identificatie uniek is. Door het domein attribuut te combineren met de identificatie, wordt ervoor gezorgd dat de identificatie overal uniek is.

![NEN 3610 identificatie](media/nen3610-identificatie.png "Modelleerpatroon voor identificatie in NEN 3610")

## Typering

Ieder object in de IBRO wordt getypeerd naar een <a data-cite="MIM12#objecttype">objecttype</a>. Daarnaast kan een object ook worden getypeerd naar een of meer [=classificaties=]. Een <dfn data-lt="classificaties">classificatie</dfn> is een manier om een object verder te specificeren binnen het kader van het objecttype. In het IBRO-LM zijn verschillende classificatiesoorten gedefinieerd, die elk een specifieke manier bieden om objecten te typeren. Momenteel zijn er maximaal twee niveau's van classificatie gedefinieerd in het model, aangeduid met de attribuutsoorten `type` en `subtype`.

In sommige gevallen is een `subtype` verplicht, bijvoorbeeld bij het objecttype `Pand`. In andere gevallen is een `subtype` optioneel, zoals bij het objecttype `Bouwdeel`. Wanneer een object een verplicht `subtype` heeft is het `type` afleidbaar uit het `subtype`. In andere gevallen is het `type` niet afleidbaar uit het `subtype`.

## Levensfasen

Om het beheer en gebruik van objecten in de IBRO te ondersteunen, wordt gewerkt met het concept van levensfasen. Een levensfase geeft aan in welke ontwikkelings- of gebruikstoestand een object zich bevindt. Dit is essentieel om verschillende gebruikerswensen rondom tijdreizen en het raadplegen van de registratie te kunnen faciliteren.

Gebruikers van de registratie hebben uiteenlopende informatiebehoeften. Zo is bij calamiteiten vooral van belang welke objecten daadwerkelijk aanwezig zijn, terwijl voor vergunningverlening of beleidsontwikkeling ook objecten in ontwerp of planning relevant kunnen zijn. Door het hanteren van levensfasen kan per gebruikssituatie worden bepaald welke objecten zichtbaar of relevant zijn.

De levenscyclus van een object bestaat uit een opeenvolging van levensfasen. Welke fasen worden onderscheiden, hangt af van het soort objecttype. In de IBRO worden vier soorten objecttypen onderscheiden: reële objecttypen, functionele ruimten, registratieve ruimten en geografische ruimten. Elke soort objecttype kent zijn eigen set van levensfasen, die aansluiten bij de specifieke kenmerken en gebruiksdoelen van die objecttypen.

De levensfase die in de registratie wordt opgenomen, is in principe de status zoals die door de bronhouder wordt vastgesteld. Dit is gebaseerd op beschikbare informatie, bijvoorbeeld uit inwinnings- of beheerprocessen, omdat het niet altijd mogelijk is de feitelijke status in de echte werkelijkheid exact te kennen. Door heldere afspraken wordt geborgd dat deze status zo goed mogelijk aansluit bij de werkelijkheid.

## Geometrie

De IBRO valt binnen het toepassingsgebied van [[NEN3610-2022]], omdat het objecttypen beschrijft die direct herleidbaar zijn tot een locatie ten opzichte van de aarde. Objecttypen in de IBRO zijn gemodelleerd als specialisatie van het NEN3610-objecttype Geo-Object of een daarvan afgeleide klasse. De verbinding met deze semantische klassen is opgenomen in het conceptueel model [[IMIBRO]].

Voor de representatie van de locatie, oriëntatie en vorm van een object uit de werkelijkheid, gebruiken we in dit model geometrieën. De dimensie van een representatie variëert van nuldimensionaal (0D) tot driedimensionaal (3D). Objecten worden altijd geplaatst in een tweedimensionele (2D), of driedimensionele (3D) ruimte. 

In de IBRO is het uitgangspunt om reëele objecten in 3D vast te leggen. Voor de vastlegging van (informatie over) geometrieën volgen we CityGML 3.0 [[CityGML3]], de internationale standaard voor 3D stadsmodellen. Representatie van 3D geometrieën in CityGML is gebaseerd op ISO 19107 [[iso-19107-2003]]. Deze standaard voorziet zowel in de opname van de coördinaten van de geometrie, als van het coördinatenstelsel.

Van sommige objecten is de onderlinge relatie van belang; ook wel *ruimtelijke relaties* genoemd. De BGT-gegevenscatalogus beschrijft bijvoorbeeld welke objecten samen een landsdekkend geheel vormen. Om deze objecten correct aan de BGT te kunnen aanleveren moeten deze ruimtelijke relaties ook in de IBRO geborgd worden. 

Het conceptueel informatiemodel IBRO legt slechts generiek vast dat objecttypen al dan niet een geometrische representatie hebben. In het logisch gegevensmodel wordt dit voor elk objecttype verder ingevuld met een specifiek geometrietype. We gebruiken de ISO 19107-geometrietypen uit onderstaande tabel:

| Primitieve   | In ISO 19107 - Enkelvoudig   | In ISO 19107 - Aggregatie    |
| ---          | ---                         | ---                         |
| Punt         | `GM_Point`                  | `GM_MultiPoint`             |
| Lijn         | `GM_Curve`                  | `GM_MultiCurve`             |
| Vlak         | `GM_Surface`                | `GM_MultiSurface`           |
| Volume       | `GM_Solid`                  | `GM_MultiSolid`             |

Hierbij geldt dat net zoals in CityGML alleen lineaire interpolatie is toegestaan; bogen zijn niet toegestaan.

Voor bepaalde objecttypen kunnen meerdere geometrische representaties (zoals verschillende levels of detail, of voor verschillende doeleinden) worden opgenomen.

Voor netwerken gelden aanvullende eisen aan de geometrie, zoals het vereiste dat het netwerk binnen de contouren van de bijbehorende reële objecten ligt.

### Dimensies

Het logisch gegevensmodel IBRO is een 3D model: het gaat uit van 3D-primitieven in een 3D-ruimte. Per objecttype kan de wijze van vastlegging verschillen. In sommige gevallen representeert een volume (3D-model) het object het beste. In andere gevallen volstaat een punt, lijn of vlak (2D-model) met eventueel een hoogteligging (2.5D-model). Het verschilt per onderwerp of een uitwerking in 2D (bijv. `GemeenteGebied`), 2.5D (bijv. `Verharding`), danwel 3D (bijv. `Pand`) nodig is.

### Coördinatenreferentiesysteem

Iedere geometrische dataset/geometrie moet zijn voorzien van een verwijzing naar het coördinaatreferentiesysteem waarin de coördinaten van de geometrie zijn beschreven [[NEN3610]]. Welk coördinaatreferentiesysteem in een situatie van toepassing is, wordt bepaald door verschillende factoren, zoals dimensionaliteit van de gebruikte primitieven, dimensionaliteit van de ruimte en het toepassingsgebied. 

Het toepassingsgebied betreft het "Europese grondgebied van het Koninkrijk der Nederlanden, inclusief de daarbij behorende territoriale wateren" en meer specifiek het grondgebied van de gemeente Rotterdam of een andere gemeente die de IBRO implementeert. Het gaat om data met 3 dimensies. Het toe te passen CRS is dan RDNAP (EPSG:7415), Samengesteld RD en NAP. Zie voor meer informatie de [CRS handreiking](https://docs.geostandaarden.nl/crs/crs/).

Maak gebruik van een lijnlengte van maximaal 200 meter. Dit volgt het langelijnenadvies van het NSGI, dat is overgenomen in [[HRCRS]] in verband met compatibiliteit met RDNAPTRANS™.

Verder is bij het onderdeel Netwerk ook lineair refereren van belang. Daarvoor gebruiken we Linear Reference Systems (LRS), zie: [[ISO-19148]] en [INSPIRE](https://inspire.ec.europa.eu/id/document/tg/tn). 

### Ruimtelijke relaties en topologie

Het IBRO-LM gaat als bron dienen voor gegevens uit verschillende geo-basisregistraties. Voor deze basisregistraties gelden reeds bestaande regels ten aanzien van de topologische kwaliteit. De kwaliteit van de gegevens in het IBRO moet zodanig zijn dat aan deze regels kan worden voldaan. 

Omdat ze in het [[EMSO]] geformuleerd staan en van onverminderd belang zijn voor de kwaliteit van de IBRO, herhalen we voor de volledigheid een aantal basisprincipes op deze plek. 
- De reële objecten bedekken met hun x,y,z geometrie het volledige grondgebied van [een gemeente in] Nederland
- Geometrieën van objecten kunnen boven elkaar liggen, bijvoorbeeld vanwege hoogteverschillen
- Geometrieën van objecten kunnen elkaar uitsluiten
- Functionele ruimten zijn niet landsdekkend (of gemeente dekkend) en mogen elkaar overlappen
- Geografische ruimten zijn niet landsdekkend (of gemeente dekkend) en mogen elkaar overlappen
- Geometrieën van reële, functionele en geografische ruimten mogen elkaar overlappen

Omdat het logisch gegevensmodel IBRO een 3D model is, zijn de regels ten aanzien van topologische kwaliteit anders dan in vergelijkbare 2D modellen zoals de BGT. Uitgangspunt is dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). Daarnaast is het van belang dat er op elke fysieke locatie in de werkelijkheid (elke x,y-coördinaat) altijd tenminste een reëel object aanwezig is (water, begroeiing, gebouw, verharding, kunstwerk, constructies of onbepaald terrein).

### Gebruik CityGML eigenschappen voor 3D geometrieën

Voor de representatie van 3D geometrieën in CityGML worden verschillende eigenschappen gebruikt die de LOD (Level of Detail) van de geometrie aangeven. In het IBRO-LM wordt gebruik gemaat van de eigenschappen `lod1Solid`, `lod2Solid` en `lod3Solid` voor het vastleggen van 3D geometrieën van constructies. Deze eigenschappen zijn gedefinieerd in CityGML 3.0 [[CityGML3]].

De eigenschappen zijn opgenomen naast de 2D geometrieën die in het model zijn opgenomen. Dit betekent dat een object zowel een 2D geometrie kan hebben als een 3D geometrie. Zie [[[#verplichtheid-bij-2d-of-3d-registratie]]] voor meer informatie hierover.

Het gebruik van deze eigenschappen vergemakkelijkt een mapping van de IBRO naar CityGML 3.0. 

## Registratiegegevens

In de IBRO worden gegevens geregistreerd over objecten uit de werkelijkheid. Deze gegevens worden beheerd door een of meer bronhouders. Voor het goed kunnen beheren en gebruiken van deze gegevens is het van belang dat er registratiegegevens worden vastgelegd over de wijze waarop de gegevens zijn geregistreerd.

Voor elk object in de IBRO worden daarom de volgende registratiegegevens vastgelegd:
- Registratiestatus
- Versie
- Tijdlijn geldigheid
- Tijdlijn registratie
- Herkomst en bronverwijzing

Deze registratiegegevens zijn afgeleid van de registratiegegevens zoals beschreven in [[NEN3610-2022]], [[PROV-O]] en [[EMSO]]. In de volgende paragrafen worden deze registratiegegevens verder toegelicht.

### Versie, tijdlijn geldigheid en tijdlijn registratie

In de levenscyclus van objecten kunnen kenmerken veranderen. Om objecten die in de IBRO worden beschreven goed te kunnen beheren en gebruiken, is het van belang dat veranderingen in de kenmerken van objecten worden vastgelegd. Dit wordt gedaan door middel van versies.

Iedere versie van de gegevens over een object wordt beschreven door een [[NEN3610-2022]] Registratie-object. Een registratie-object heeft een versie, en eigenschappen die de geldigheidstijdlijn registratietijdlijn beschrijven.

De geldigheidstijdlijn beschrijft de periode waarin een object in de beschouwde werkelijkheid bestaat of geldig is. Hiervoor worden de eigenschappen `beginGeldigheid` en `eindGeldigheid` gebruikt.

De registratietijdlijn beschrijft de periode waarin een versie van de gegevens over een object in de registratie bestaat. Hiervoor worden de eigenschappen `tijdstipRegistratie` en `eindRegistratie` gebruikt.

Een object dat beschreven wordt in de IBRO heeft gedurende zijn levenscylus op ieder moment in de gecombineerde tijdlijn geldigheid en registratie minimaal één registratie.

![NEN 3610 tijdlijnen](media/nen3610-tijdlijnen.png "Tijdlijnen van geldigheid en van registratie in NEN 3610")

### Registratiestatus en afgevoerde registraties

Een object dat beschreven wordt in de IBRO kan op ieder moment in de gecombineerde tijdlijn geldigheid en registratie een of meerdere gegevensregistraties kennen.

Een gegevensregistratie is een set gegevens gebaseerd op een objecttype en heeft een registratiestatus. De registratiestatus geeft aan of de gegevensregistratie actief (`Actief`) is, of dat het een afgevoerde registratie (`Afgevoerd`) betreft. Een afgevoerde registratie is een registratie die niet meer actief is, maar die wel bewaard blijft in de registratie voor formeel-historische doeleinden.

Er mag maar één gegevensregistratie zijn met de registratiestatus `Actief` op een bepaald moment in de gecombineerde tijdlijn geldigheid en registratie.

<aside class="note">
In [[EMSO]] kennen alle objecttypen de levensfase `Afgevoerd`. Dit in IMIBRO niet meer het geval. De levensfase `Afgevoerd` beschrrijft in [[EMSO]] de fase van een object dat ten onrechte is opgevoerd in de registratie, of waarvan is vastgesteld dat het ontwerp of plan voor het realiseren van het object niet geleid heeft tot feitelijke realisatie van het object.

De bedoeling van de levensfase is om het levenscyclus van een object in de werkelijkheid zo goed mogelijk te beschrijven. Het wel of niet beschreven zijn van een object in een registratie is hier geen onderdeel van. Met die reden is besloten om dat aspect niet meer in de object-levensfasen in IMIBRO op te nemen, maar op te nemen als registratiestatus.

In plaats van de status `Afgevoerd` is in IMIBRO de status `Niet gerealiseerd` opgenomen. Dit is een status die kan worden toegekend aan objecten waarvan het ontwerp of plan uiteindelijk niet is gerealiseerd.

De status `Afgevoerd` is in IMIBRO vervangen door de registratiestatus `Afgevoerd`, die kan worden toegekend aan gegevensregistraties van objecten die niet meer actief zijn, maar die wel bewaard blijven in de registratie voor formeel-historische doeleinden.
</aside>

### Herkomst en bronverwijzing

Voor elke objectregistratie in de IBRO wordt opgenomen waar de gegevens vandaan komen en hoe deze tot stand zijn gekomen. Dit gebeurt door het registreren van herkomst- en bronverwijzingen. De herkomst maakt het mogelijk om de oorspronkelijke bronhouder, het gebruikte brondocument of de bronregistratie waar gegevens van afkomstig zijn te identificeren.

Deze registratiegegevens zijn essentieel voor transparantie, kwaliteitsborging en het kunnen uitvoeren van controles of correcties. Ze maken het mogelijk om wijzigingen in de registratie te herleiden tot hun oorsprong en ondersteunen het beheer van de gegevens over de gehele levenscyclus van een object.

In de IBRO worden deze gegevens bij elke objectregistratie opgenomen, conform de afspraken uit het gegevensmodel. Hierdoor is altijd inzichtelijk op basis van welke bron een object in de registratie is opgenomen of gewijzigd.

Het herkomstmodel in de IBRO is gebaseerd op de W3C standaard [[PROV-O]]. Door aansluiting op PROV-O is het mogelijk om op een gestandaardiseerde en interoperabele manier de herkomst en bronverwijzingen van objecten te registreren, uit te wisselen en te interpreteren binnen en buiten de IBRO. Momenteel is in het model alleen de minimale set van herkomst- en bronverwijzingen opgenomen die nodig is voor de IBRO. In de toekomst kan dit worden uitgebreid met aanvullende elementen uit [[PROV-O]] indien nodig.

#### Geconstateerde objecten

In de landelijke voorziening BAG wordt onderscheid gemaakt tussen objecten die zijn geregistreerd op basis van een regulier brondocument versus objectbeschrijvingen die in de registratie zijn opgenomen als gevolg van een feitelijke constatering, zonder dat er op het moment van opname sprake was van een regulier brondocument.

Voor deze eigenschappen is er een [indicatie](#informatiemodel_imibro_logisch_domein_registratiegegevens_objecttype_registratie_attribuutsoort_indicatie_object_geconstateerd) opgenomen op het niveau van de objectregistratie, waarmee kan worden aangegeven of een object is opgenomen op basis van een regulier brondocument of op basis van een feitelijke constatering.

## Afleidbare eigenschappen

In IBRO-LM worden naast de direct geregistreerde eigenschappen ook afleidbare eigenschappen opgenomen. Afleidbare eigenschappen zijn eigenschappen die niet direct worden geregistreerd, maar die kunnen worden afgeleid uit andere geregistreerde eigenschappen. Dit kan bijvoorbeeld door berekeningen, regels of logica toe te passen op de geregistreerde gegevens.

Afleidbare eigenschappen hebben in het gegevensmodel de waarde `Ja` voor het metagegeven <a data-cite="MIM12#metagegeven-indicatie-afleidbaar">indicatie afleidbaar</a> en zijn in de modeldiagrammen aangeduid met een `/` als prefix bij de naam van de eigenschap. 

## Authenticiteit van gegevens in IBRO

In IBRO-LM zijn gegevens nog niet als authentiek aangeduid. Een authentiek gegeven is een gegeven dat in een basisregistratie is opgenomen en bij wettelijk voorschrift als authentiek is aangemerkt. Voor authentieke gegevens geldt dat ze van hoge kwaliteit zijn, dat deze kwaliteit met expliciete garanties wordt geborgd, dat ze vitaal of veelvuldig benodigd zijn voor wettelijke taken, dat er bij wet één officieel erkende registratie voor is aangewezen, en dat het authentieke gegeven in die registratie verplicht gebruikt wordt door alle overheidsinstanties. Deze definitie is afkomstig uit de Kadasterwet.

Omdat de IBRO een proeftuin is en het nog niet volledig duidelijk is hoe de IBRO zich zal verhouden tot bestaande basisregistraties, is in dit stadium nog niet vastgelegd welke gegevens als authentiek worden beschouwd. De positionering van de IBRO ten opzichte van landelijke basisregistraties zoals BAG, BGT en WOZ is nog onderwerp van onderzoek en ontwikkeling. Zodra de rol van de IBRO en de wettelijke status van de gegevens duidelijk zijn, zal worden beschreven welke gegevens als authentiek worden aangemerkt en hoe dit in het gegevensmodel wordt vastgelegd.
