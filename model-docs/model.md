# Informatiemodel Logisch model IBRO
## Domein Kern
![Kern](model-docs/media/kern.png "Domein Kern")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_object">
<h4>Object</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Object</td>
</tr>
<tr>
<th>Naam</th>
<td>Object</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_identificatie">identificatie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_domein">domein</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object_relatiesoort_geregistreerd_met">geregistreerdMet</a>
</td>
<td>
</td>
<td>
<a class="link" href="#extern_nen_3610_2022">Registratie</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_identificatie">
<h6>identificatie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Object.identificatie</td>
</tr>
<tr>
<th>Naam</th>
<td>identificatie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_object_attribuutsoort_domein">
<h6>domein</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Object.domein</td>
</tr>
<tr>
<th>Naam</th>
<td>domein</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Ja</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_object_relatiesoort_geregistreerd_met">
<h6>geregistreerdMet</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Object.geregistreerdMet</td>
</tr>
<tr>
<th>Naam</th>
<td>geregistreerdMet</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">
<h5>GeografischeRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>GeografischeRuimte</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_status">status</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_geografische_ruimte">StatusGeografischeRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GeografischeRuimte.status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">
<h5>FunctioneleRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>FunctioneleRuimte</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte_attribuutsoort_status">status</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_functionele_ruimte">StatusFunctioneleRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FunctioneleRuimte.status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">
<h5>ReeelObject</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ReeelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>ReeelObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Reëel object</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object_attribuutsoort_status">status</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_reeel_object">StatusReëelObject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ReeelObject.status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">
<h5>RegistratieveRuimte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte_attribuutsoort_status">status</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_codelijst_status_registratieve_ruimte">StatusRegistratieveRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#RegistratieveRuimte.status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>



### Keuzen tussen datatypen

#### PuntOfVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#PuntOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>PuntOfVlak</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### PuntLijnOfVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_lijn_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#PuntLijnOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>PuntLijnOfVlak</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Point"> GM_Point</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### LijnOfVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__lijn_of_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#LijnOfVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>LijnOfVlak</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_LineString"> GM_LineString</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
</tbody>
</table>
</section>

#### MultiPuntOfMultiVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__multi_punt_of_multi_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#MultiPuntOfMultiVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>MultiPuntOfMultiVlak</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiPoint"> GM_MultiPoint</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
</tbody>
</table>
</section>

#### VlakOfMultiVlak {#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VlakOfMultiVlak</td>
</tr>
<tr>
<th>Naam</th>
<td>VlakOfMultiVlak</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
</tbody>
</table>
</section>






### Codelijsten

#### StatusReëelObject {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_reeel_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusRe%C3%ABelObject</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusReëelObject</td>
</tr>
<tbody>
</tbody>
</table>


#### StatusFunctioneleRuimte {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_functionele_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusFunctioneleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusFunctioneleRuimte</td>
</tr>
<tbody>
</tbody>
</table>


#### StatusRegistratieveRuimte {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_registratieve_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusRegistratieveRuimte</td>
</tr>
<tbody>
</tbody>
</table>


#### StatusGeografischeRuimte {#informatiemodel_imibro_logisch_domein_kern_codelijst_status_geografische_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#StatusGeografischeRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusGeografischeRuimte</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Groen
![Groen](model-docs/media/groen.png "Domein Groen")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing">
<h4>OverigeBegroeiing</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeBegroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigeBegroeiing</td>
</tr>
<tr>
<th>Alias</th>
<td>Overige begroeiing</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_soort">soort</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_enumeratie_soort_begroeiing">SoortBegroeiing</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_soort">
<h6>soort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeBegroeiing.soort</td>
</tr>
<tr>
<th>Naam</th>
<td>soort</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_overige_begroeiing_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeBegroeiing.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_bos">
<h4>Bos</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bos</td>
</tr>
<tr>
<th>Naam</th>
<td>Bos</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_codelijst_type_bos">TypeBos</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bos.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_bos_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bos.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_boom">
<h4>Boom</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boom</td>
</tr>
<tr>
<th>Naam</th>
<td>Boom</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_boom_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_point">GM_Point</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_boom_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Boom.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen">
<h4>FruitOfKweekbomen</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FruitOfKweekbomen</td>
</tr>
<tr>
<th>Naam</th>
<td>FruitOfKweekbomen</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_codelijst_type_fruit_of_kweekbomen">TypeFruitOfKweekbomen</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FruitOfKweekbomen.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_groen_objecttype_fruit_of_kweekbomen_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#FruitOfKweekbomen.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>






### Enumeraties

#### SoortBegroeiing {#informatiemodel_imibro_logisch_domein_groen_enumeratie_soort_begroeiing}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SoortBegroeiing</td>
</tr>
<tr>
<th>Naam</th>
<td>SoortBegroeiing</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Houtsingel</td>
<td>
</td>
<tr>
<td>
Struiken</td>
<td>
</td>
<tr>
<td>
GrasEnKruidachtigen</td>
<td>
</td>
<tr>
<td>
Akkerland</td>
<td>
</td>
<tr>
<td>
Moeras</td>
<td>
</td>
<tr>
<td>
Rietland</td>
<td>
</td>
<tr>
<td>
Heide</td>
<td>
</td>
<tr>
<td>
Haag</td>
<td>
</td>
</tbody>
</table>


</section>



### Codelijsten

#### TypeBos {#informatiemodel_imibro_logisch_domein_groen_codelijst_type_bos}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeBos</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBos</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeFruitOfKweekbomen {#informatiemodel_imibro_logisch_domein_groen_codelijst_type_fruit_of_kweekbomen}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeFruitOfKweekbomen</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeFruitOfKweekbomen</td>
</tr>
<tbody>
</tbody>
</table>



## Domein Bodem
![Bodem](model-docs/media/bodem.png "Domein Bodem")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_bodem_objecttype_onbegroeide_grond">
<h4>OnbegroeideGrond</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OnbegroeideGrond</td>
</tr>
<tr>
<th>Naam</th>
<td>OnbegroeideGrond</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bodem_objecttype_onbegroeide_grond_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_bodem_objecttype_onbegroeide_grond_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OnbegroeideGrond.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








## Domein Water
![Water](model-docs/media/water.png "Domein Water")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">
<h4>Oppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>Oppervlaktewater</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oppervlaktewater.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte">
<h5>Watervlakte</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>Watervlakte</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_codelijst_type_watervlakte">TypeWatervlakte</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_indicatie_primair">indicatiePrimair</a>
</td>
<td>
Deze watervlakte is al dan niet een hoofdverbinding in het watersysteem.</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watervlakte.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watervlakte_attribuutsoort_indicatie_primair">
<h6>indicatiePrimair</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watervlakte.indicatiePrimair</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatiePrimair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze watervlakte is al dan niet een hoofdverbinding in het watersysteem.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_water_objecttype_greppel">
<h5>Greppel</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Greppel</td>
</tr>
<tr>
<th>Naam</th>
<td>Greppel</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>
<section id="informatiemodel_imibro_logisch_domein_water_objecttype_getijdengebied">
<h5>Getijdengebied</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Getijdengebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Getijdengebied</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_getijdengebied_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_codelijst_type_getijdengebied">TypeGetijdengebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_getijdengebied_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Getijdengebied.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_water_objecttype_watergang">
<h5>Watergang</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watergang</td>
</tr>
<tr>
<th>Naam</th>
<td>Watergang</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_oppervlaktewater">Oppervlaktewater</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_codelijst_type_watergang">TypeWatergang</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_indicatie_primair">indicatiePrimair</a>
</td>
<td>
Deze watergang is al dan niet een hoofdverbinding in het watersysteem.</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watergang.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_water_objecttype_watergang_attribuutsoort_indicatie_primair">
<h6>indicatiePrimair</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Watergang.indicatiePrimair</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatiePrimair</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Deze watergang is al dan niet een hoofdverbinding in het watersysteem.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>








### Codelijsten

#### TypeWatervlakte {#informatiemodel_imibro_logisch_domein_water_codelijst_type_watervlakte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWatervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWatervlakte</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWatergang {#informatiemodel_imibro_logisch_domein_water_codelijst_type_watergang}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWatergang</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWatergang</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeGetijdengebied {#informatiemodel_imibro_logisch_domein_water_codelijst_type_getijdengebied}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeGetijdengebied</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeGetijdengebied</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Gebouwen
![Gebouwen](model-docs/media/gebouwen.png "Domein Gebouwen")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">
<h4>Pand</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand</td>
</tr>
<tr>
<th>Naam</th>
<td>Pand</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_solid">GM_Solid</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_type">type</a>
</td>
<td>
De waarde voor deze eigenschap is afleidbaar op basis van de waarde voor de eigenschap &#39;subtype&#39;.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_pand">TypePand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_subtype">subtype</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_pand">SubtypePand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_aard">aard</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_aard_pand">AardPand</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_oorspronkelijkbouwjaar">oorspronkelijkbouwjaar</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_year">Year</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_indicatie_open_constructie">indicatieOpenConstructie</a>
</td>
<td>
Indicatie dat het pand een open constructie heeft.</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Definitie</th>
<td>De waarde voor deze eigenschap is afleidbaar op basis van de waarde voor de eigenschap &#39;subtype&#39;.</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand.subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_aard">
<h6>aard</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand.aard</td>
</tr>
<tr>
<th>Naam</th>
<td>aard</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_oorspronkelijkbouwjaar">
<h6>oorspronkelijkbouwjaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand.oorspronkelijkbouwjaar</td>
</tr>
<tr>
<th>Naam</th>
<td>oorspronkelijkbouwjaar</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pand.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand_attribuutsoort_indicatie_open_constructie">
<h6>indicatieOpenConstructie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#indicatieOpenConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpenConstructie</td>
</tr>
<tr>
<th>Alias</th>
<td>indicatie open constructie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Indicatie dat het pand een open constructie heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel">
<h4>Panddeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Panddeel</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_solid">GM_Solid</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_panddeel">TypePanddeel</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_oorspronkelijk_bouwjaar">oorspronkelijkBouwjaar</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_year">Year</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
Object waar dit object onderdeel van uit maakt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_attribuutsoort_oorspronkelijk_bouwjaar">
<h6>oorspronkelijkBouwjaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Panddeel.oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Naam</th>
<td>oorspronkelijkBouwjaar</td>
</tr>
<tr>
<th>Alias</th>
<td>oorspronkelijk bouwjaar</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_panddeel_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is onderdeel van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object onderdeel van uit maakt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone">
<h4>Functiezone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Functiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Functiezone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_functiezone">TypeFunctiezone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_bruto_vloeroppervlakte">brutoVloeroppervlakte</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_integer">Integer</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_bouwlaagnummer">bouwlaagnummer</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_integer">Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Functiezone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Functiezone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_bruto_vloeroppervlakte">
<h6>brutoVloeroppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Functiezone.brutoVloeroppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>brutoVloeroppervlakte</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_attribuutsoort_bouwlaagnummer">
<h6>bouwlaagnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#bouwlaagnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>bouwlaagnummer</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Voor de nummering van de bouwlaag geldt:

Tweede kelder laag = bouwlaagnummer -2
Kelder = bouwlaagnummer -1
Begane grond = bouwlaagnummer 0
Eerste verdieping = bouwlaagnummer 1
Tweede verdieping = bouwlaagnummer 2</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone">
<h4>Gebruikzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een Gebruikzone is het samenstel van de grootst mogelijke clustering van (aaneengesloten) ruimten op dezelfde bouwlaag binnen een Pand (inclusief Panddelen), waarvoor geldt dat deze deel uit maakt van een zelfstandige eenheid van gebruik.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/gebruikzone">https://definities.geostandaarden.nl/ibro/id/begrip/gebruikzone</a>
</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_multi_surface">GM_MultiSurface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_gebruikzone">TypeGebruikzone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_subtype">subtype</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_gebruikzone">SubtypeGebruikzone</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_gebruiksoppervlakte">gebruiksoppervlakte</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_integer">Integer</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_bouwlaagnummer">bouwlaagnummer</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_integer">Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_pand">Pand</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone.subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_gebruiksoppervlakte">
<h6>gebruiksoppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Gebruikzone.gebruiksoppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksoppervlakte</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_attribuutsoort_bouwlaagnummer">
<h6>bouwlaagnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#bouwlaagnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>bouwlaagnummer</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Voor de nummering van de bouwlaag geldt:

Tweede kelder laag = bouwlaagnummer -2
Kelder = bouwlaagnummer -1
Begane grond = bouwlaagnummer 0
Eerste verdieping = bouwlaagnummer 1
Tweede verdieping = bouwlaagnummer 2</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt">
<h4>Toegangspunt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangspunt</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangspunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een voorziening die vanaf de openbare weg, een erf of een gedeelde verkeersruimte toegang geeft tot een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/toegangspunt">https://definities.geostandaarden.nl/ibro/id/begrip/toegangspunt</a>
</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_point">GM_Point</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_toegangssoort">toegangssoort</a>
</td>
<td>
Plaats waarvan een toegangsdeur toegang geeft.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_toegangssoort">Toegangssoort</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_gebruiksaard">gebruiksaard</a>
</td>
<td>
Aard van gebruik van een toegangsdeur.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_gebruiksaard_toegangpunt">GebruiksaardToegangpunt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_relatiesoort_hoort_bij">hoortBij</a>
</td>
<td>
Object waar dit object bijhoort.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_keuze_relatiedoel__pand_of_verblijfsobject">PandOfVerblijfsobject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangspunt.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_toegangssoort">
<h6>toegangssoort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#toegangssoort</td>
</tr>
<tr>
<th>Naam</th>
<td>toegangssoort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Plaats waarvan een toegangsdeur toegang geeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_attribuutsoort_gebruiksaard">
<h6>gebruiksaard</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#gebruiksaard</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksaard</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard van gebruik van een toegangsdeur.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_toegangspunt_relatiesoort_hoort_bij">
<h6>hoortBij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#hoortBij</td>
</tr>
<tr>
<th>Naam</th>
<td>hoortBij</td>
</tr>
<tr>
<th>Alias</th>
<td>hoort bij</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waar dit object bijhoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject">
<h4>Verblijfsobject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verblijfsobject</td>
</tr>
<tr>
<th>Naam</th>
<td>Verblijfsobject</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een clustering van gebruikzones die samen een zelfstandige gebruikseenheid vormen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/verblijfsobject">https://definities.geostandaarden.nl/ibro/id/begrip/verblijfsobject</a>
</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object">AdresseerbaarObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_of_vlak">PuntOfVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_gebruiksoppervlakte">gebruiksoppervlakte</a>
</td>
<td>
Gebruiksoppervlakte van een verblijfsobject.</td>
<td>
<a class="link" href="#primitief_datatype_integer">Integer</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_omvat">omvat</a>
</td>
<td>
Object dat wordt omvat door dit object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_gebruikzone">Gebruikzone</a>
</td>
<td>
1..*</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_overlapt_met">overlaptMet</a>
</td>
<td>
Object dat dit object overlapt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_gebouwen_objecttype_functiezone">Functiezone</a>
</td>
<td>
1..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_attribuutsoort_gebruiksoppervlakte">
<h6>gebruiksoppervlakte</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verblijfsobject.gebruiksoppervlakte</td>
</tr>
<tr>
<th>Naam</th>
<td>gebruiksoppervlakte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gebruiksoppervlakte van een verblijfsobject.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit is de optelsom van de gebruiksoppervlakte van de door dit verblijfsobject geclusterde gebruikzones.</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_omvat">
<h6>omvat</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#omvat</td>
</tr>
<tr>
<th>Naam</th>
<td>omvat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat wordt omvat door dit object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_gebouwen_objecttype_verblijfsobject_relatiesoort_overlapt_met">
<h6>overlaptMet</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#overlaptMet</td>
</tr>
<tr>
<th>Naam</th>
<td>overlaptMet</td>
</tr>
<tr>
<th>Alias</th>
<td>overlapt met</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object dat dit object overlapt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>






### Enumeraties

#### AardPand {#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_aard_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#AardPand</td>
</tr>
<tr>
<th>Naam</th>
<td>AardPand</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Heterogeen</td>
<td>
</td>
<tr>
<td>
Repeterend</td>
<td>
</td>
<tr>
<td>
Vrijstaand</td>
<td>
</td>
</tbody>
</table>


</section>

#### Toegangssoort {#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_toegangssoort}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Toegangssoort</td>
</tr>
<tr>
<th>Naam</th>
<td>Toegangssoort</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Directe toegang vanaf eigen terrein</td>
<td>
Toegangspunt bevindt zich op een erf, in een tuin of een andere specifiek terrein dat behoort bij het gebouw.</td>
<tr>
<td>
Directe toegang vanaf openbare weg</td>
<td>
Toegangspunt bevindt zich direct aan een voor iedereen toegankelijke weg.</td>
<tr>
<td>
Toegang vanaf gemeenschappelijke verkeersruimte</td>
<td>
Toegangspunt bevindt zich aan een inpandige ruimte die bedoeld is voor verplaatsingen door een gebouw door de verschillende gebruikers van dit gebouw.</td>
</tbody>
</table>


</section>

#### GebruiksaardToegangpunt {#informatiemodel_imibro_logisch_domein_gebouwen_enumeratie_gebruiksaard_toegangpunt}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruiksaardToegangpunt</td>
</tr>
<tr>
<th>Naam</th>
<td>GebruiksaardToegangpunt</td>
</tr>
<tr>
<th>Alias</th>
<td>Gebruiksaard toegangspunt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aard van gebruik van een toegangspunt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Auto</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door voertuigen.</td>
<tr>
<td>
Personen</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door personen.</td>
<tr>
<td>
Vracht</td>
<td>
Toegangspunt is primair bedoeld voor toegang tot een object door vracht zonder gebruik van een voertuig.</td>
</tbody>
</table>


</section>



### Codelijsten

#### TypePand {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypePand</td>
</tr>
<tr>
<th>Naam</th>
<td>TypePand</td>
</tr>
<tbody>
</tbody>
</table>


#### SubtypePand {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_pand}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypePand</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypePand</td>
</tr>
<tbody>
</tbody>
</table>


#### TypePanddeel {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_panddeel}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypePanddeel</td>
</tr>
<tr>
<th>Naam</th>
<td>TypePanddeel</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeFunctiezone {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_functiezone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeFunctiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeFunctiezone</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeGebruikzone {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_type_gebruikzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeGebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeGebruikzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Type gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tbody>
</tbody>
</table>


#### SubtypeGebruikzone {#informatiemodel_imibro_logisch_domein_gebouwen_codelijst_subtype_gebruikzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypeGebruikzone</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypeGebruikzone</td>
</tr>
<tr>
<th>Alias</th>
<td>Subtype gebruikzone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Verhardingen
![Verhardingen](model-docs/media/verhardingen.png "Domein Verhardingen")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding">
<h4>Verharding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verharding</td>
</tr>
<tr>
<th>Naam</th>
<td>Verharding</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_verhardingen_codelijst_type_verharding">TypeVerharding</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verharding.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_verhardingen_objecttype_verharding_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Verharding.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








### Codelijsten

#### TypeVerharding {#informatiemodel_imibro_logisch_domein_verhardingen_codelijst_type_verharding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeVerharding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeVerharding</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Kunstwerken
![Kunstwerken](model-docs/media/kunstwerken.png "Domein Kunstwerken")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk">
<h4>OverigWaterstaatkundigKunstwerk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigWaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigWaterstaatkundigKunstwerk</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_waterstaatkundig_kunstwerk">TypeWaterstaatkundigKunstwerk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigWaterstaatkundigKunstwerk.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigWaterstaatkundigKunstwerk.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overig_waterstaatkundig_kunstwerk_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigWaterstaatkundigKunstwerk.heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">
<h4>Kunstwerkdeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerkdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Kunstwerkdeel</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kunstwerkdeel.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_dek">
<h5>Dek</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dek</td>
</tr>
<tr>
<th>Naam</th>
<td>Dek</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_dek_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_dek_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Dek.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_landhoofd">
<h5>Landhoofd</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Landhoofd</td>
</tr>
<tr>
<th>Naam</th>
<td>Landhoofd</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_landhoofd_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_landhoofd_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Landhoofd.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_schutkolk">
<h5>Schutkolk</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schutkolk</td>
</tr>
<tr>
<th>Naam</th>
<td>Schutkolk</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_schutkolk_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis">Sluis</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_schutkolk_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Schutkolk.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sloof">
<h5>Sloof</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sloof</td>
</tr>
<tr>
<th>Naam</th>
<td>Sloof</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sloof_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sloof_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sloof.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluisdeur">
<h5>Sluisdeur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluisdeur</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluisdeur</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluisdeur_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis">Sluis</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluisdeur_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluisdeur.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pyloon">
<h5>Pyloon</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pyloon</td>
</tr>
<tr>
<th>Naam</th>
<td>Pyloon</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pyloon_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pyloon_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pyloon.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pijler">
<h5>Pijler</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pijler</td>
</tr>
<tr>
<th>Naam</th>
<td>Pijler</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_kunstwerkdeel">Kunstwerkdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pijler_relatiesoort_is_onderdeel_van">isOnderdeelVan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">Overbrugging</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_pijler_relatiesoort_is_onderdeel_van">
<h6>isOnderdeelVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Pijler.isOnderdeelVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isOnderdeelVan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis">
<h4>Sluis</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluis</td>
</tr>
<tr>
<th>Naam</th>
<td>Sluis</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_sluis_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Sluis.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging">
<h4>Overbrugging</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>Overbrugging</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_overbrugging">TypeOverbrugging</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_subtype">subtype</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_subtype_overbrugging">SubtypeOverbrugging</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_indicatie_beweegbaar">indicatieBeweegbaar</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_subtype">
<h6>subtype</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subtype</td>
</tr>
<tr>
<th>Naam</th>
<td>subtype</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_overbrugging_attribuutsoort_indicatie_beweegbaar">
<h6>indicatieBeweegbaar</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Overbrugging.indicatieBeweegbaar</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieBeweegbaar</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling">
<h4>Ondertunneling</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ondertunneling</td>
</tr>
<tr>
<th>Naam</th>
<td>Ondertunneling</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_ondertunneling">TypeOndertunneling</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ondertunneling.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ondertunneling.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_kunstwerken_objecttype_ondertunneling_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Ondertunneling.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








### Codelijsten

#### TypeWaterstaatkundigKunstwerk {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_waterstaatkundig_kunstwerk}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWaterstaatkundigKunstwerk</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWaterstaatkundigKunstwerk</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOverbrugging {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_overbrugging}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOverbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverbrugging</td>
</tr>
<tbody>
</tbody>
</table>


#### SubtypeOverbrugging {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_subtype_overbrugging}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#SubtypeOverbrugging</td>
</tr>
<tr>
<th>Naam</th>
<td>SubtypeOverbrugging</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOndertunneling {#informatiemodel_imibro_logisch_domein_kunstwerken_codelijst_type_ondertunneling}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOndertunneling</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOndertunneling</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Overige constructies
![Overige constructies](model-docs/media/overige_constructies.png "Domein Overige constructies")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">
<h4>Constructie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Constructie</td>
</tr>
<tr>
<th>Naam</th>
<td>Constructie</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>







<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm">
<h5>Scherm</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Scherm</td>
</tr>
<tr>
<th>Naam</th>
<td>Scherm</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_line_string">GM_LineString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_attribuutsoort_reducerende_functie">reducerendeFunctie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Scherm.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_scherm_attribuutsoort_reducerende_functie">
<h6>reducerendeFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Scherm.reducerendeFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>reducerendeFunctie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_hoogspanningsmast">
<h5>Hoogspanningsmast</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hoogspanningsmast</td>
</tr>
<tr>
<th>Naam</th>
<td>Hoogspanningsmast</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_hoogspanningsmast_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__multi_punt_of_multi_vlak">MultiPuntOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_hoogspanningsmast_attribuutsoort_indicatie_open">indicatieOpen</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_hoogspanningsmast_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hoogspanningsmast.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_hoogspanningsmast_attribuutsoort_indicatie_open">
<h6>indicatieOpen</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Hoogspanningsmast.indicatieOpen</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieOpen</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie">
<h5>OverigeConstructie</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigeConstructie</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_lijn_of_vlak">PuntLijnOfVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_overige_constructie">TypeOverigeConstructie</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeConstructie.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_overige_constructie_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#OverigeConstructie.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining">
<h5>Omheining</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Omheining</td>
</tr>
<tr>
<th>Naam</th>
<td>Omheining</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_line_string">GM_LineString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_attribuutsoort_afscheidende_functie">afscheidendeFunctie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Omheining.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_omheining_attribuutsoort_afscheidende_functie">
<h6>afscheidendeFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Omheining.afscheidendeFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>afscheidendeFunctie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur">
<h5>Muur</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Muur</td>
</tr>
<tr>
<th>Naam</th>
<td>Muur</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__lijn_of_vlak">LijnOfVlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_relatiesoort_heeft_functie">heeftFunctie</a>
</td>
<td>
Functie die dit object vervult.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_keuze_relatiedoel__kering_of_afscheiding">KeringOfAfscheiding</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Muur.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_muur_relatiesoort_heeft_functie">
<h6>heeftFunctie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftFunctie</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftFunctie</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft functie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Functie die dit object vervult.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
</section>
<section id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie">
<h4>Installatie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Installatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Installatie</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_reeel_object">ReeelObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__punt_lijn_of_vlak">PuntLijnOfVlak</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie_relatiesoort_hoort_bij">hoortBij</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_constructie">Constructie</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Installatie.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_overige_constructies_objecttype_installatie_relatiesoort_hoort_bij">
<h6>hoortBij</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Installatie.hoortBij</td>
</tr>
<tr>
<th>Naam</th>
<td>hoortBij</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>








### Codelijsten

#### TypeOverigeConstructie {#informatiemodel_imibro_logisch_domein_overige_constructies_codelijst_type_overige_constructie}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeOverigeConstructie</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverigeConstructie</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Wegennetwerk








### Codelijsten

#### TypeBaanverbinding {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_baanverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegennetwerk:TypeBaanverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBaanverbinding</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeStrookverbinding {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_strookverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegennetwerk:TypeStrookverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeStrookverbinding</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWegverbinding {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_wegverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegennetwerk:TypeWegverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWegverbinding</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWegknoop {#informatiemodel_imibro_logisch_domein_wegennetwerk_codelijst_type_wegknoop}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegennetwerk:TypeWegknoop</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWegknoop</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Spoorwegennetwerk








### Codelijsten

#### TypeSpoorverbinding {#informatiemodel_imibro_logisch_domein_spoorwegennetwerk_codelijst_type_spoorverbinding}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorwegennetwerk:TypeSpoorverbinding</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeSpoorverbinding</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Functionele ruimten
![Functionele ruimten](model-docs/media/functionele_ruimten.png "Domein Functionele ruimten")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding">
<h4>Afscheiding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afscheiding</td>
</tr>
<tr>
<th>Naam</th>
<td>Afscheiding</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_line_string">GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_afscheiding_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Afscheiding.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex">
<h4>Complex</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Complex</td>
</tr>
<tr>
<th>Naam</th>
<td>Complex</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_complex">TypeComplex</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Complex.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Complex.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_complex_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Complex.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater">
<h4>GebruikszoneOppervlaktewater</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>GebruikszoneOppervlaktewater</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_gebruikszone_oppervlaktewater">TypeGebruikszoneOppervlaktewater</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruikszoneOppervlaktewater.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_gebruikszone_oppervlaktewater_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#GebruikszoneOppervlaktewater.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">
<h4>Kering</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Kering</td>
</tr>
<tr>
<th>Naam</th>
<td>Kering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening met een kerende functie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een waterkerende en/of scheidende, kunstmatige of natuurlijke hoogte of hooggelegen gronden inclusief de daarin aanwezige waterkerende elementen.</td>
</tr>
<tr>
<th>Populatie</th>
<td>Het betreft hier de bestaande populatie functioneel gebied type kering zoals deze is opgenomen in de basisregistratie grootschalige topografie.</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>







<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterkering">
<h5>Waterkering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterkering</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterkering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterkering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_grondkering">
<h5>Grondkering</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Grondkering</td>
</tr>
<tr>
<th>Naam</th>
<td>Grondkering</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Voorziening bedoeld om grond te keren.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/grondkering">https://definities.geostandaarden.nl/ibro/id/begrip/grondkering</a>
</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_kering">Kering</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_grondkering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#primitief_datatype_gm_line_string">GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_grondkering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone">
<h4>Luchtvaartzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchtvaartzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Luchtvaartzone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_luchtvaartzone">TypeLuchtvaartzone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchtvaartzone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchtvaartzone.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_luchtvaartzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Luchtvaartzone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone">
<h4>Spoorzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Spoorzone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_spoorzone">TypeSpoorzone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorzone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_spoorzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Spoorzone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone">
<h4>VerkeerskundigFunctioneleZone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Naam</th>
<td>VerkeerskundigFunctioneleZone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_verkeerskundig_functionele_zone">TypeVerkeerskundigFunctioneleZone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VerkeerskundigFunctioneleZone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VerkeerskundigFunctioneleZone.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_verkeerskundig_functionele_zone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#VerkeerskundigFunctioneleZone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone">
<h4>Wegzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Wegzone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_wegzone">TypeWegzone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegzone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_wegzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Wegzone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone">
<h4>Oeverzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oeverzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Oeverzone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_indicatie_natuurvriendelijke_oever">indicatieNatuurvriendelijkeOever</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_boolean">Boolean</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oeverzone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_oeverzone_attribuutsoort_indicatie_natuurvriendelijke_oever">
<h6>indicatieNatuurvriendelijkeOever</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Oeverzone.indicatieNatuurvriendelijkeOever</td>
</tr>
<tr>
<th>Naam</th>
<td>indicatieNatuurvriendelijkeOever</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterbergingsgebied">
<h4>Waterbergingsgebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterbergingsgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterbergingsgebied</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterbergingsgebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_waterbergingsgebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Waterbergingsgebied.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering">
<h4>Reducering</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reducering</td>
</tr>
<tr>
<th>Naam</th>
<td>Reducering</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_line_string">GM_LineString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_reducering">TypeReducering</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reducering.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_reducering_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Reducering.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone">
<h4>Recreatiezone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>Recreatiezone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_functionele_ruimte">FunctioneleRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_recreatiezone">TypeRecreatiezone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiezone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiezone.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_functionele_ruimten_objecttype_recreatiezone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Recreatiezone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>








### Codelijsten

#### TypeLuchtvaartzone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_luchtvaartzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeLuchtvaartzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeLuchtvaartzone</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeSpoorzone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_spoorzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeSpoorzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeSpoorzone</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeVerkeerskundigFunctioneleZone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_verkeerskundig_functionele_zone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeVerkeerskundigFunctioneleZone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeVerkeerskundigFunctioneleZone</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeComplex {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_complex}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeComplex</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeComplex</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeWegzone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_wegzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeWegzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeWegzone</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeGebruikszoneOppervlaktewater {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_gebruikszone_oppervlaktewater}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeGebruikszoneOppervlaktewater</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeGebruikszoneOppervlaktewater</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeReducering {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_reducering}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeReducering</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeReducering</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeRecreatiezone {#informatiemodel_imibro_logisch_domein_functionele_ruimten_codelijst_type_recreatiezone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#TypeRecreatiezone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeRecreatiezone</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Bestuurlijke gebieden
![Bestuurlijke gebieden](model-docs/media/bestuurlijke_gebieden.png "Domein Bestuurlijke gebieden")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">
<h4>Gemeentegebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Bestuurlijke%20gebieden:Gemeentegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemeentegebied</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_object">Object</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>







</section>








## Domein Registratieve ruimten
![Registratieve ruimten](model-docs/media/registratieve_ruimten.png "Domein Registratieve ruimten")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats">
<h4>Woonplaats</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Woonplaats</td>
</tr>
<tr>
<th>Naam</th>
<td>Woonplaats</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_formele_naam">formeleNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Woonplaats.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_formele_naam">
<h6>formeleNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Woonplaats.formeleNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>formeleNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Woonplaats.alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk">
<h4>Wijk</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Wijk</td>
</tr>
<tr>
<th>Naam</th>
<td>Wijk</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijkcode">wijkcode</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijknaam">wijknaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Wijk.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijkcode">
<h6>wijkcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Wijk.wijkcode</td>
</tr>
<tr>
<th>Naam</th>
<td>wijkcode</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_attribuutsoort_wijknaam">
<h6>wijknaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Wijk.wijknaam</td>
</tr>
<tr>
<th>Naam</th>
<td>wijknaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Wijk.ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt">
<h4>Buurt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Buurt</td>
</tr>
<tr>
<th>Naam</th>
<td>Buurt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aaneengesloten gedeelte van een wijk, waarvan de grenzen zo veel mogelijk gebaseerd zijn op topografische elementen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>GFO Basisgegevens</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een buurt valt altijd volledig binnen een wijk. De geometrie van alle buurten moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Buurten mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/buurt">https://definities.geostandaarden.nl/ibro/id/begrip/buurt</a>
</td>
</tr>
<tr>
<th>Populatie</th>
<td>Buurten zijn op dit moment nog geen onderdeel van een basisregistratie. Wel hebben alle gemeenten (in overleg met het CBS) buurten vastgesteld. Deze zijn landelijk opgenomen in de WBI (wijk- en buurtindeling) die momenteel wordt beheerd door het CBS. Door de opname van buurten in de objectenregistratie ontstaat een formele vastlegging van buurten.</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtcode">buurtcode</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtnaam">buurtnaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_wijk">Wijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Buurt.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtcode">
<h6>buurtcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Buurt.buurtcode</td>
</tr>
<tr>
<th>Naam</th>
<td>buurtcode</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_attribuutsoort_buurtnaam">
<h6>buurtnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Buurt.buurtnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>buurtnaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Buurt.ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt">
<h4>Subbuurt</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Subbuurt</td>
</tr>
<tr>
<th>Naam</th>
<td>Subbuurt</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een subbuurt is, zo mogelijk, een samenhangend sociaal geheel, omsloten door natuurlijke grenzen (zoals brede wegen en waterlopen). Samen vormen zij een Buurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/subbuurt">https://definities.geostandaarden.nl/ibro/id/begrip/subbuurt</a>
</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtcode">subbuurtcode</a>
</td>
<td>
Codering van een subbuurt.</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtnaam">subbuurtnaam</a>
</td>
<td>
Naam die aan een subbuurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_buurt">Buurt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtcode">
<h6>subbuurtcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtcode</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een subbuurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_attribuutsoort_subbuurtnaam">
<h6>subbuurtnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een subbuurt is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel">
<h4>Subbuurtdeel</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Subbuurtdeel</td>
</tr>
<tr>
<th>Naam</th>
<td>Subbuurtdeel</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Subbuurtdeel ontstaat als subbuurten te groot zijn voor technisch en administratief beheer. Een subbuurtdeel is, zo mogelijk, een samenhangend sociaal geheel, omsloten door natuurlijke grenzen (zoals brede wegen en waterlopen). Samen vormen zij een Subbuurt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="https://definities.geostandaarden.nl/ibro/id/begrip/subbuurtdeel">https://definities.geostandaarden.nl/ibro/id/begrip/subbuurtdeel</a>
</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelcode">subbuurtdeelcode</a>
</td>
<td>
Codering van een subbuurtdeel.</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelnaam">subbuurtdeelnaam</a>
</td>
<td>
Naam die aan een subbuurtdeel is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
Object waarin dit object ligt.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurt">Subbuurt</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelcode">
<h6>subbuurtdeelcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtdeelcode</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtdeelcode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Codering van een subbuurtdeel.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_attribuutsoort_subbuurtdeelnaam">
<h6>subbuurtdeelnaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#subbuurtdeelnaam</td>
</tr>
<tr>
<th>Naam</th>
<td>subbuurtdeelnaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam die aan een subbuurtdeel is toegekend in een daartoe strekkend formeel gemeentelijk besluit.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_subbuurtdeel_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in</td>
</tr>
<tr>
<th>Herkomst</th>
<td>Handboek Territoriale Indeling Rotterdam v8.0</td>
</tr>
<tr>
<th>Definitie</th>
<td>Object waarin dit object ligt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMIBRO</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte">
<h4>OpenbareRuimte</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:OpenbareRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>OpenbareRuimte</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_formele_naam">formeleNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats">Woonplaats</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:OpenbareRuimte.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_formele_naam">
<h6>formeleNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:OpenbareRuimte.formeleNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>formeleNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:OpenbareRuimte.alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:OpenbareRuimte.ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding">
<h4>Nummeraanduiding</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding</td>
</tr>
<tr>
<th>Naam</th>
<td>Nummeraanduiding</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummer">huisnummer</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_integer">Integer</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisletter">huisletter</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummertoevoeging">huisnummertoevoeging</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_postcode">postcode</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_woonplaats">Woonplaats</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_aan">ligtAan</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_openbare_ruimte">OpenbareRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummer">
<h6>huisnummer</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding.huisnummer</td>
</tr>
<tr>
<th>Naam</th>
<td>huisnummer</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisletter">
<h6>huisletter</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding.huisletter</td>
</tr>
<tr>
<th>Naam</th>
<td>huisletter</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_huisnummertoevoeging">
<h6>huisnummertoevoeging</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding.huisnummertoevoeging</td>
</tr>
<tr>
<th>Naam</th>
<td>huisnummertoevoeging</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_attribuutsoort_postcode">
<h6>postcode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding.postcode</td>
</tr>
<tr>
<th>Naam</th>
<td>postcode</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding.ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding_relatiesoort_ligt_aan">
<h6>ligtAan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:Nummeraanduiding.ligtAan</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtAan</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object">
<h4>AdresseerbaarObject</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:AdresseerbaarObject</td>
</tr>
<tr>
<th>Naam</th>
<td>AdresseerbaarObject</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_hoofdadres">heeftAlsHoofdadres</a>
</td>
<td>
Een hoofdadres is het primaire adres van een adresseerbaar object.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding">Nummeraanduiding</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_nevenadres">heeftAlsNevenadres</a>
</td>
<td>
Een nevenadres is een aanvullend adres voor een adresseerbaar object. Een nevenadres mag alleen worden toegekend wanneer er meerdere relevante toegangen zijn en een toegang een wezenlijke betekenis heeft bij het aanduiden van het object, zoals een leveranciersingang. Met het nevenadres wordt expliciet niet een bepaald gedeelte van een adresseerbaar object aangeduid.</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_nummeraanduiding">Nummeraanduiding</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_hoofdadres">
<h6>heeftAlsHoofdadres</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftAlsHoofdadres</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAlsHoofdadres</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft als hoofdadres</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een hoofdadres is het primaire adres van een adresseerbaar object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object_relatiesoort_heeft_als_nevenadres">
<h6>heeftAlsNevenadres</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#heeftAlsNevenadres</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAlsNevenadres</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft als nevenadres</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een nevenadres is een aanvullend adres voor een adresseerbaar object. Een nevenadres mag alleen worden toegekend wanneer er meerdere relevante toegangen zijn en een toegang een wezenlijke betekenis heeft bij het aanduiden van het object, zoals een leveranciersingang. Met het nevenadres wordt expliciet niet een bepaald gedeelte van een adresseerbaar object aangeduid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Catalogus BAG 2018</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Een extra adres. Een nevenadres mag alleen worden gegeven als er meer belangrijke toegangen zijn en een toegang een echte betekenis heeft, zoals een leveranciersingang. Een nevenadres is een eigenschap van het hele adresseerbare object en niet van alleen een deel hiervan. Een nevenadres is dus op dezelfde plek als het hoofdadres. Meestal wordt aan elk adresseerbaar object maar 1 adres gegeven.</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..1</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats">
<h5>BenoemdePlaats</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:BenoemdePlaats</td>
</tr>
<tr>
<th>Naam</th>
<td>BenoemdePlaats</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_adresseerbaar_object">AdresseerbaarObject</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_type_te_plaatsen_object">typeTePlaatsenObject</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_registratieve_ruimten_codelijst_type_te_plaatsen_object">TypeTePlaatsenObject</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:BenoemdePlaats.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_registratieve_ruimten_objecttype_benoemde_plaats_attribuutsoort_type_te_plaatsen_object">
<h6>typeTePlaatsenObject</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:BenoemdePlaats.typeTePlaatsenObject</td>
</tr>
<tr>
<th>Naam</th>
<td>typeTePlaatsenObject</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>








### Codelijsten

#### TypeTePlaatsenObject {#informatiemodel_imibro_logisch_domein_registratieve_ruimten_codelijst_type_te_plaatsen_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Registratieve%20ruimten:TypeTePlaatsenObject</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeTePlaatsenObject</td>
</tr>
<tbody>
</tbody>
</table>


## Domein Geografische ruimten
![Geografische ruimten](model-docs/media/geografische_ruimten.png "Domein Geografische ruimten")

### Objecttypen

<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern">
<h4>Bebouwingskern</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Bebouwingskern</td>
</tr>
<tr>
<th>Naam</th>
<td>Bebouwingskern</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_keuze_datatype__vlak_of_multi_vlak">VlakOfMultiVlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_bebouwingskern">TypeBebouwingskern</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_relatiesoort_ligt_in">ligtIn</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_bestuurlijke_gebieden_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Bebouwingskern.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Bebouwingskern.alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Bebouwingskern.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Bebouwingskern.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_bebouwingskern_relatiesoort_ligt_in">
<h6>ligtIn</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Bebouwingskern.ligtIn</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtIn</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

</section>
<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek">
<h4>Streek</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Streek</td>
</tr>
<tr>
<th>Naam</th>
<td>Streek</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Streek.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Streek.alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_streek_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Streek.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied">
<h4>LandschappelijkGebied</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:LandschappelijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>LandschappelijkGebied</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_altenatieve_naam">altenatieveNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_landschappelijk_gebied">TypeLandschappelijkGebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:LandschappelijkGebied.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_altenatieve_naam">
<h6>altenatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:LandschappelijkGebied.altenatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>altenatieveNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:LandschappelijkGebied.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_landschappelijk_gebied_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:LandschappelijkGebied.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone">
<h4>Reliefzone</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Reliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>Reliefzone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_kern_objecttype_geografische_ruimte">GeografischeRuimte</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_naam">naam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_alternatieve_naam">alternatieveNaam</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Reliefzone.naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone_attribuutsoort_alternatieve_naam">
<h6>alternatieveNaam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Reliefzone.alternatieveNaam</td>
</tr>
<tr>
<th>Naam</th>
<td>alternatieveNaam</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_steilrand">
<h5>Steilrand</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Steilrand</td>
</tr>
<tr>
<th>Naam</th>
<td>Steilrand</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_steilrand_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_line_string">GM_LineString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_steilrand_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:Steilrand.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
<section id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone">
<h5>OverigeReliefzone</h5>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:OverigeReliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>OverigeReliefzone</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_reliefzone">Reliefzone</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_gm_surface">GM_Surface</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_type">type</a>
</td>
<td>
</td>
<td>
<a class="link" href="#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_overige_reliefzone">TypeOverigeReliefzone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:OverigeReliefzone.geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imibro_logisch_domein_geografische_ruimten_objecttype_overige_reliefzone_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:OverigeReliefzone.type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
</section>








### Codelijsten

#### TypeBebouwingskern {#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_bebouwingskern}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:TypeBebouwingskern</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBebouwingskern</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeLandschappelijkGebied {#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_landschappelijk_gebied}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:TypeLandschappelijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeLandschappelijkGebied</td>
</tr>
<tbody>
</tbody>
</table>


#### TypeOverigeReliefzone {#informatiemodel_imibro_logisch_domein_geografische_ruimten_codelijst_type_overige_reliefzone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/ibro#Geografische%20ruimten:TypeOverigeReliefzone</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeOverigeReliefzone</td>
</tr>
<tbody>
</tbody>
</table>


## Extern NEN 3610:2022
![NEN 3610:2022](model-docs/media/nen_3610_2022.png "Extern NEN 3610:2022")

### Objecttypen

<section id="extern_nen_3610_2022">
<h4>Registratie</h4>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022:Registratie</td>
</tr>
<tr>
<th>Naam</th>
<td>Registratie</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 15%"></colgroup>
<colgroup style="width: 10%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#extern_nen_3610_2022_attribuutsoort_versie">versie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_character_string">CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#extern_nen_3610_2022_attribuutsoort_begin_geldigheid">beginGeldigheid</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_date">Date</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#extern_nen_3610_2022_attribuutsoort_eind_geldigheid">eindGeldigheid</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_date">Date</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#extern_nen_3610_2022_attribuutsoort_tijdstip_registratie">tijdstipRegistratie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_date_time">DateTime</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#extern_nen_3610_2022_attribuutsoort_eind_registratie">eindRegistratie</a>
</td>
<td>
</td>
<td>
<a class="link" href="#primitief_datatype_date_time">DateTime</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="extern_nen_3610_2022_attribuutsoort_versie">
<h6>versie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022:Registratie.versie</td>
</tr>
<tr>
<th>Naam</th>
<td>versie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="extern_nen_3610_2022_attribuutsoort_begin_geldigheid">
<h6>beginGeldigheid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022:Registratie.beginGeldigheid</td>
</tr>
<tr>
<th>Naam</th>
<td>beginGeldigheid</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="extern_nen_3610_2022_attribuutsoort_eind_geldigheid">
<h6>eindGeldigheid</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022:Registratie.eindGeldigheid</td>
</tr>
<tr>
<th>Naam</th>
<td>eindGeldigheid</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="extern_nen_3610_2022_attribuutsoort_tijdstip_registratie">
<h6>tijdstipRegistratie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022:Registratie.tijdstipRegistratie</td>
</tr>
<tr>
<th>Naam</th>
<td>tijdstipRegistratie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="extern_nen_3610_2022_attribuutsoort_eind_registratie">
<h6>eindRegistratie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>urn:modelelement:NEN%203610:2022:Registratie.eindRegistratie</td>
</tr>
<tr>
<th>Naam</th>
<td>eindRegistratie</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


</section>
