# Overzicht logisch gegevensmodel IBRO

## Definitie
In de Integrale Bronregistratie Objecten (IBRO) worden de gegevens vastgelegd omtrent gesynchroniseerde objecten uit de BAG, BGT en WOZ. Het conceptueel informatiemodel IMIBRO [[IBROCM]] definieert het informatiedomein van de IBRO en vormt de basis voor dit logische gegevensmodel, het IBRO-LM, in het kader van de IBRO.

## Beschrijving

Op basis van het conceptueel informatiemodel IMIBRO is het mogelijk om meerdere logische gegevensmodellen te maken, afhankelijk van de beoogde implementatie. Technische aspecten maar ook inhoudelijke scope kunnen hier een rol bij spelen. Dit logische gegevensmodel is generiek van opzet en heeft een brede scope. 

Inhoudelijk is het IBRO-LM uiteraard afgeleid van het conceptueel informatiemodel IBRO, dat weer is gebaseerd op [[NEN3610]]. Daarnaast is de inhoud afgestemd op OGC CityGML 3.0 [[CityGML3]]. Dit is vastgelegd in een IBRO-CityGML mapping.

### Identificatie

Voor de identificatie van objecten maken we gebruik van het identificatiepatroon van [[NEN3610]]. 

![NEN 3610 identificatie](media/nen3610-identificatie.png "Modelleerpatroon voor identificatie in NEN 3610")

Een belangrijk uitgangspunt is dat de identificatie van een object gedurende zijn gehele levenscyclus gelijk blijft.

### Status van objecten in de registratie

In het conceptueel informatiemodel is uitgedrukt hoe je aan een object kan zien in welke levensfase het zich bevindt. Dit gaat om de levenscyclus van een object in de werkelijkheid. 

Het logisch gegevensmodel voegt hier informatie over de status van objecten in de *registratie* aan toe. 

In IBRO-LM is de status `Niet gerealiseerd` opgenomen. Dit is een status die kan worden toegekend aan objecten waarvan het ontwerp of plan uiteindelijk niet is gerealiseerd.

### Historie

[TODO beschrijven historiemodel]

### Herkomst 

[TODO beschrijven lineage event sourcing: hoe ga je gebeurtenissen die hebben geleid tot een informatie-object representeren]