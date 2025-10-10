let respecConfig = {
  useLogo: true,
  useLabel: true,
  // TODO: title is verplicht! Neem hieronder de titel van het document op
  title: "Logisch Gegevensmodel Integrale Bronregistratie Objecten (IBRO-LM)",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  //-- TODO: vul pubDomain in
  pubDomain: "ibro",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "ibro-lm",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2025-10-02",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "0.9.0",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2025-10-02",
  previousMaturity: "VV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Pano Maria",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/ibro-lm",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "static/template.pdf",
  //    },
  //],
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    },
    IBROCM: {
      id: "IBRO-CM",
      title: "Conceptueel Informatiemodel Integrale Bronregistratie Objecten (IMIBRO)",
      href: "https://docs.geostandaarden.nl/ibro/ibro-cm/",
      status: "Versie ter vaststelling",
      publisher: "Geonovum",
      date: "2025-06-30"
    },
    "ISO-19148": {
      title:"ISO 19148:2021 Geographic information — Linear referencing",
      href: "https://www.iso.org/standard/75150.html",
      status: "Published",
      publisher: "ISO/TC 211 Geographic information/Geomatics",
      date: "2021-04",
    },
    "EMSO": {
      title:      "DiS Geo : Eisen aan model samenhangende objectenregistratie",
      href:       "https://docs.geostandaarden.nl/disgeo/emso/",
      status:     "Versie ter vaststelling",
      date:       "2021-06-16",
      publisher:  "Geonovum",
    },
    "NEN3610-2022": {
      title: "NEN 3610 Basismodel geo-informatie",
      href: "https://www.nen.nl/nen-3610-2022-nl-296137",
      status: "Definitief",
      date: "20 juni 2022",
      publisher: "NEN",
    }
  }
};
