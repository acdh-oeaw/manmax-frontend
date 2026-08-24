export type TFactoid = {
  id: number;
  type: "factoid";
  label: string;
  has_statements: [
    | Tabsencefromevent
    | Tabsencefromplace
    | Tacceptanceoforder
    | Tactivity
    | Tadditionoftexttomanuscript
    | Tapologyfornonattendance
    | Tarmourassemblyact
    | Tarmourcreationact
    | Tartworkcreationact
    | Tartworkhasadditionalname
    | Tassemblyofcompositeobject
    | Tassignmenttorole
    | Tassociationwithplace
    | Tauthoring
    | Tbaptism
    | Tbirth
    | Tburial
    | Tcancellationofdebt
    | Tchurchservice
    | Tcommunicateswith
    | Tcompositetextualworkiscomposedof
    | Tcontract
    | Tcreationact
    | Tcreationcommission
    | Tcreationoforganisation
    | Tdanceperformance
    | Tdeath
    | Tdebtowed
    | Tdecorationofarmour
    | Tdedication
    | Tdeliveryoftext
    | Tdepicitionofpersoninart
    | Tdispute
    | Tediting
    | Telection
    | Tennoblement
    | Testablishmentofendowment
    | Teventcharacterisation
    | Texpressionofintention
    | Tfamilialrelation
    | Tfamilymembership
    | Tgendering
    | Tgenericeducation
    | Tgenericrelationship
    | Tgenericstatement
    | Tgiftgiving
    | Tgraduation
    | Tgrantingofdispensation
    | Tgrantingofindulgence
    | Tgrantingpermission
    | Tgroupmembership
    | Tguardianship
    | Their
    | Timprisonment
    | Tindividualmusicalperformance
    | Tinstrumentalperformance
    | Tinventorycreation
    | Tinvitation
    | Tiscousinof
    | Tisuncleof
    | Tjourney
    | Tlegitimacyofbirth
    | Tmarriagebeginning
    | Tmarriageend
    | Tmatriculation
    | Tmusicperformance
    | Tnaming
    | Tnegativeorder
    | Tobjecthaslocation
    | Torder
    | Torderednotcarriedout
    | Torganisationispartoforganisation
    | Torganisationlocation
    | Townershiptransfer
    | Tparentinlawrelation
    | Tparentalrelation
    | Tparticipationinevent
    | Tpayment
    | Tperformanceoftask
    | Tperformanceofwork
    | Tpersongrouphaslocation
    | Tpersonhasillness
    | Tpersonreportstoperson
    | Tpreparationofconceptualtext
    | Tpresentationforrole
    | Tprinting
    | Tprohibition
    | Tpromise
    | Trecommendationofaction
    | Trecommendationofperson
    | Tredacting
    | Trefusal
    | Tremovalfromrole
    | Trepairofarmour
    | Trequest
    | Tresignationfromrole
    | Troleoccupation
    | Troleororganisationinserviceofperson
    | Tsecretarialact
    | Tsiblinginlawrelation
    | Tsiblingrelation
    | Tsingingperformance
    | Tswearingofoath
    | Ttextannounces
    | Ttextasksforpatronage
    | Ttextexpresseslamentation
    | Ttextexpressesthanks
    | Ttextmakesnegativestatementaboutperson
    | Ttextmakespositivestatementaboutperson
    | Ttextreferencesevent
    | Ttextreferencesobject
    | Ttextreferstoperson
    | Ttextualcitationallusion
    | Ttextualcreationact
    | Ttextualperformance
    | Ttranslation
    | Ttransportationofarmour
    | Ttransportationofobject
    | Tunknownstatementtype
    | Tunstructuredstatement
    | Tutilisationinevent
    | Tverschreibung
    | Twitnesstosigning,
  ];
  source: TSource;
  created_by: string;
  created_when: string;
  modified_by: string;
  modified_when: string;
};

export type TSource = {
  id: string;
  type: "source";
  text: string;
  pages_start: number;
  pages_end: number;
  folio: string;
};

type Tabsencefromevent = {
    id: number,
    type: "absencefromevent",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Abwesender_oder_Abwesende: [Tperson | Tunreconciled],
    Ereignis: [Tgenericevent | Tbattle | Tfestivity | Tmilitarycampaign | Ttournament | Tunreconciled],

};

type Tabsencefromplace = {
    id: number,
    type: "absencefromplace",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Abwesender_oder_Abwesende: [Tperson | Tunreconciled],
    Ort: [Tplace | Tunreconciled],

};

type Tacceptanceoforder = {
    id: number,
    type: "acceptanceoforder",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Befehlsempfänger: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    angenommener_Befehl: [Torder],

};

type Tactivity = {
    id: number,
    type: "activity",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Handlung_ausgeführt_von: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Handlung: [Tplace | Tunreconciled],

};

type Tadditionoftexttomanuscript = {
    id: number,
    type: "additionoftexttomanuscript",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Manuskript: [Tmanuscript | Tunreconciled],
    text: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tinventory | Tepitaph | Tunreconciled],
    person: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Tallowancetype = {
    id: number,
    type: "allowancetype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tapologyfornonattendance = {
    id: number,
    type: "apologyfornonattendance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ereignis: [Tgenericevent | Tbattle | Tfestivity | Tmilitarycampaign | Ttournament | Tunreconciled],
    Abwesende_Person: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Tarmour = {
    id: number,
    type: "armour",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Harnisches_Waffentyp: [Tarmstype | Tunreconciled],

};

type Tarmourassemblyact = {
    id: number,
    type: "armourassemblyact",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Teilobjekte: [Tconceptualobject | Tphysicalobject | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Trightstoplace | Tinventory | Tepitaph | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    Rüstungsteile: [Tarmourpart | Tunreconciled],
    Endprodukt: [Tarmour | Tunreconciled],

};

type Tarmourcreationact = {
    id: number,
    type: "armourcreationact",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Hergestellter_Harnisch: [Tarmour | Tarmourpart | Tunreconciled],

};

type Tarmourpart = {
    id: number,
    type: "armourpart",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    armour_type: string | null,
    Harnisches_Waffentyp: [Tarmstype | Tunreconciled],

};

type Tarms = {
    id: number,
    type: "arms",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Harnisches_Waffentyp: [Tarmstype | Tunreconciled],

};

type Tarmstype = {
    id: number,
    type: "armstype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    unterkategories_von: [Tarmstype | Tunreconciled],

};

type Tartisticwork = {
    id: number,
    type: "artisticwork",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tartworkcreationact = {
    id: number,
    type: "artworkcreationact",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Produkt: [Tconceptualobject | Tphysicalobject | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Trightstoplace | Tinventory | Tepitaph | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],

};

type Tartworkhasadditionalname = {
    id: number,
    type: "artworkhasadditionalname",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    additional_name: string | null,
    Kunstwerk: [Tartisticwork | Tunreconciled],
    Kunstwerk_benannt_von: [Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Tassemblyofcompositeobject = {
    id: number,
    type: "assemblyofcompositeobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    zusammengesetztes_Objekt: [Tcompositeconceptualobject | Tcompositephysicalobject | Tcompositetextualwork | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarmour | Tinventory | Tunreconciled],
    Teilobjekte: [Tconceptualobject | Tphysicalobject | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Trightstoplace | Tinventory | Tepitaph | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],

};

type Tassignmenttorole = {
    id: number,
    type: "assignmenttorole",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Amt: [Trole | Tunreconciled],
    Amtsverleiher: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Amtsempfänger: [Tperson | Tpersonwithproxy | Tunreconciled],
    bekleidetes_Amt: [Troleoccupation],

};

type Tassociationwithplace = {
    id: number,
    type: "associationwithplace",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Person: [Tperson | Tunreconciled],
    Ort: [Tplace | Tunreconciled],

};

type Tauthoring = {
    id: number,
    type: "authoring",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    verfasster_Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],

};

type Tbaptism = {
    id: number,
    type: "baptism",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Getaufte_Person: [Tperson | Tunreconciled],
    PatePatin: [Tperson | Tpersonwithproxy | Tunreconciled],
    An_der_Taufe_beteiligt: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Taufe: [Tplace | Tunreconciled],

};

type Tbattle = {
    id: number,
    type: "battle",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tbirth = {
    id: number,
    type: "birth",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    geborene_Person: [Tperson | Tunreconciled],
    Ort_der_Geburt: [Tplace | Tunreconciled],

};

type Tbook = {
    id: number,
    type: "book",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tburial = {
    id: number,
    type: "burial",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Begrabener: [Tperson | Tunreconciled],
    Beteiligte_Personen: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Grabmal: [Tartisticwork | Tunreconciled],
    Epitaph: [Tepitaph | Tunreconciled],
    Ort_des_Begräbnisses: [Tplace | Tunreconciled],

};

type Tcancellationofdebt = {
    id: number,
    type: "cancellationofdebt",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Schuldenerlassender: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    zu_erlassende_Schuld: [Tdebtowed],

};

type Tchurchservice = {
    id: number,
    type: "churchservice",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Gottesdiensttyp: [Tunreconciled | Tchurchservicetype],
    Gottesdienstteilnehmer: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_des_Gottesdienstes: [Tplace | Tunreconciled],
    Tag_in_Kirchenjahr: [Tunreconciled | Tdayinreligiouscalendar],
    Teil_eines_Gottesdienstes: [Tmusicperformance | Tperformanceofwork | Ttextualperformance | Tindividualmusicalperformance | Tinstrumentalperformance | Tsingingperformance],
    Anlass_des_Gottesdienstes: [Tdeath | Tmarriagebeginning | Tbaptism],

};

type Tchurchservicetype = {
    id: number,
    type: "churchservicetype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tcommunicateswith = {
    id: number,
    type: "communicateswith",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    method: string | null,
    Absender: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Empfänger: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ausstellungsort: [Tplace | Tunreconciled],
    Zielort: [Tplace | Tunreconciled],
    Betreff: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Tcompositeconceptualobject = {
    id: number,
    type: "compositeconceptualobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tcompositephysicalobject = {
    id: number,
    type: "compositephysicalobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tcompositetextualwork = {
    id: number,
    type: "compositetextualwork",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tcompositetextualworkiscomposedof = {
    id: number,
    type: "compositetextualworkiscomposedof",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Sammelwerk: [Tcompositetextualwork | Tinventory | Tunreconciled],
    Texte: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],

};

type Tconceptualobject = {
    id: number,
    type: "conceptualobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tcontract = {
    id: number,
    type: "contract",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Vertragspartner: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_des_Vertragsabschlusses: [Tplace | Tunreconciled],
    Zeugen_des_Vertrags: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Vertragsgegenstand: [Tassignmenttorole | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tinventorycreation],

};

type Tcreationact = {
    id: number,
    type: "creationact",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Produkt: [Tconceptualobject | Tphysicalobject | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Trightstoplace | Tinventory | Tepitaph | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],

};

type Tcreationcommission = {
    id: number,
    type: "creationcommission",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Handlung_ausgeführt_von: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Beauftragte_Herstellung: [Tcreationact | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tdecorationofarmour | Trepairofarmour | Tinventorycreation],

};

type Tcreationoforganisation = {
    id: number,
    type: "creationoforganisation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Körperschaft: [Torganisation | Tfoundation | Tunreconciled],

};

type Tdanceperformance = {
    id: number,
    type: "danceperformance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    aufgeführt_von: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Tanz_aufgeführt: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tinventory | Tepitaph | Tunreconciled],
    Ort: [Tplace | Tunreconciled],

};

type Tdayinreligiouscalendar = {
    id: number,
    type: "dayinreligiouscalendar",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    moveable_or_immoveable_feast: string | null,

};

type Tdayinreligiouscalendartype = {
    id: number,
    type: "dayinreligiouscalendartype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tdeath = {
    id: number,
    type: "death",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    verstorbene_Person: [Tperson | Tunreconciled],
    Ort_des_Todes: [Tplace | Tunreconciled],

};

type Tdebtowed = {
    id: number,
    type: "debtowed",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    amount: string | null,
    currency: string | null,
    reason_for_debt: string | null,
    Schuldner: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Gläubiger: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Schuldensgrund: [Tassignmenttorole | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tinventorycreation | Tunstructuredstatement],

};

type Tdecorationofarmour = {
    id: number,
    type: "decorationofarmour",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    verziertes_Objekt: [Tarms | Tarmour | Tarmourpart | Tunreconciled],
    Verzierer: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Tdedication = {
    id: number,
    type: "dedication",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    enthalten_in: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],
    adressat_der_Widmung: [Tperson | Tunreconciled],

};

type Tdedicatorytext = {
    id: number,
    type: "dedicatorytext",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tdegreetype = {
    id: number,
    type: "degreetype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tdeliveryoftext = {
    id: number,
    type: "deliveryoftext",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Text: [Ttextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tbook | Tleaflet | Tepitaph | Tunreconciled],
    Absender_von_Text: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Überbringer_von_Text: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Empfänger_des_Textes: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Absendeort: [Tplace | Tunreconciled],
    Standort_des_Empfängers: [Tplace | Tunreconciled],

};

type Tdepicitionofpersoninart = {
    id: number,
    type: "depicitionofpersoninart",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Kunstwerk: [Tartisticwork | Tunreconciled],
    dargestellte_Person: [Tperson | Tunreconciled],
    Person_dargestellt_als: [Tperson | Tfictionalperson | Tunreconciled],
    Ort_an_dem_die_Person_dargestellt_ist: [Tplace | Tfictionalplace | Tunreconciled],

};

type Tdispute = {
    id: number,
    type: "dispute",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    nature_of_dispute: string | null,
    Streitparteien: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    andere_vom_Streit_betroffene: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    vorsitzende_Person: [Tperson | Tpersonwithproxy | Tunreconciled],
    Streitobjekt: [Tconceptualobject | Tphysicalobject | Tplace | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Trightstoplace | Tinventory | Tepitaph | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],

};

type Tediting = {
    id: number,
    type: "editing",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Text: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tleaflet | Tinventory | Tepitaph | Tunreconciled],
    Herausgeber: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Teducationsubject = {
    id: number,
    type: "educationsubject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Teducationtype = {
    id: number,
    type: "educationtype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Telection = {
    id: number,
    type: "election",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    election_by: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Amt: [Trole | Tunreconciled],
    gewählte_Person: [Tperson | Tunreconciled],
    bekleidetes_Amt: [Troleoccupation],

};

type Tennoblement = {
    id: number,
    type: "ennoblement",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Teil_eines_Ereignisses: [Tgenericevent | Tbattle | Tfestivity | Tmilitarycampaign | Ttournament | Tunreconciled],
    geadelte_Person: [Tperson | Tunreconciled],
    geadelt_durch: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort: [Tplace | Tunreconciled],

};

type Tepitaph = {
    id: number,
    type: "epitaph",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Testablishmentofendowment = {
    id: number,
    type: "establishmentofendowment",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    monetary_amount: string | null,
    currency: string | null,
    Stiftung_errichtet: [Tfoundation | Tunreconciled],
    errichtet_von: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    zusätzliche_Inhalte_der_Stiftung: [Tperson | Tphysicalobject | Tplace | Tartisticwork | Tcompositephysicalobject | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Ttaxesandincome | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    Zweck_der_Stiftung: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Teventcharacterisation = {
    id: number,
    type: "eventcharacterisation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ereignis: [Tgenericevent | Tbattle | Tfestivity | Tmilitarycampaign | Ttournament | Tunreconciled],
    Ort_des_Ereignisses: [Tplace | Tunreconciled],

};

type Texpressionofintention = {
    id: number,
    type: "expressionofintention",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Person_die_das_Vorhaben_ausdrückt: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Ausgedrücktes_Vorhaben: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Tfamilialrelation = {
    id: number,
    type: "familialrelation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tfamily = {
    id: number,
    type: "family",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    family_name: string | null,

};

type Tfamilymembership = {
    id: number,
    type: "familymembership",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Familie: [Tfamily | Tunreconciled],
    Person: [Tperson | Tunreconciled],

};

type Tfestivity = {
    id: number,
    type: "festivity",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tfictionalperson = {
    id: number,
    type: "fictionalperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tfictionalplace = {
    id: number,
    type: "fictionalplace",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tfoundation = {
    id: number,
    type: "foundation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tgendering = {
    id: number,
    type: "gendering",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    gender: string | null,
    person: [Tperson | Tunreconciled],

};

type Tgenericeducation = {
    id: number,
    type: "genericeducation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Studienfach: [Teducationsubject | Tunreconciled],
    Ausgebildete_Person: [Tperson | Tunreconciled],
    Ausbilder: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort: [Tplace | Tunreconciled],
    Ausbildungstyp: [Teducationtype | Tunreconciled],

};

type Tgenericevent = {
    id: number,
    type: "genericevent",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tgenericrelationship = {
    id: number,
    type: "genericrelationship",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Verwandte_Personen: [Tperson | Tunreconciled],

};

type Tgenericstatement = {
    id: number,
    type: "genericstatement",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tgiftgiving = {
    id: number,
    type: "giftgiving",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Handlung_ausgeführt_von: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Handlung: [Tplace | Tunreconciled],
    überstragenes_Objekt: [Tphysicalobject | Tartisticwork | Tcompositephysicalobject | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Trightstoplace | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    vorbesitzer: [Torganisation | Tperson | Tfoundation | Tunreconciled],
    empfänger: [Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Tgraduation = {
    id: number,
    type: "graduation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Graduierender: [Tperson | Tunreconciled],
    Institution: [Torganisation | Tfoundation | Tunreconciled],
    Abschlusstyp: [Tdegreetype | Tunreconciled],
    Studientfach: [Teducationsubject | Tunreconciled],

};

type Tgrantingofdispensation = {
    id: number,
    type: "grantingofdispensation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    dispensation_description: string | null,
    Dispens_erteilt_von: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Empfänger_der_Dispens: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Objekt_des_Dispenses: [Troleoccupation | Tmarriagebeginning | Townershiptransfer | Tgiftgiving | Tburial | Tlegitimacyofbirth],

};

type Tgrantingofindulgence = {
    id: number,
    type: "grantingofindulgence",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    description_of_indulgence: string | null,
    Ablassanbieter: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Ablassnehmer: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Tgrantingpermission = {
    id: number,
    type: "grantingpermission",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Erlaubnis_erteilt_von: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    erhaltene_Erlaubnis: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Erlaubnis_zur_Tätigkeit: [Tassignmenttorole | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tinventorycreation | Tunstructuredstatement],
    Bedingungen: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Tgroupmembership = {
    id: number,
    type: "groupmembership",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Mitglied: [Tperson | Tunreconciled],
    Organisation_oder_Gruppe: [Tgroupofpersons | Torganisation | Tfoundation | Tunreconciled],

};

type Tgroupofpersons = {
    id: number,
    type: "groupofpersons",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tguardianship = {
    id: number,
    type: "guardianship",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Sachwalter: [Tperson | Tunreconciled],
    Mündel: [Tperson | Tunreconciled],

};

type Their = {
    id: number,
    type: "heir",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Erblasser: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Erbe: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Tillnesstype = {
    id: number,
    type: "illnesstype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Timage = {
    id: number,
    type: "image",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Timprisonment = {
    id: number,
    type: "imprisonment",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Person_die_verantwortlich_für_Gefangenschaft_fällt: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Person_die_sich_in_Gefangenschaft_befindet: [Tgroupofpersons | Tperson | Tunreconciled],
    Ort_der_Gefangenschaft: [Tplace | Tunreconciled],
    Grund_der_Gefangenschaft: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Tindeterminatephysicalobject = {
    id: number,
    type: "indeterminatephysicalobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tindividualmusicalperformance = {
    id: number,
    type: "individualmusicalperformance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Musikaufführung: [Tplace | Tunreconciled],
    Musikant: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Tinstrumenttype = {
    id: number,
    type: "instrumenttype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tinstrumentalperformance = {
    id: number,
    type: "instrumentalperformance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Musikaufführung: [Tplace | Tunreconciled],
    Musikant: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Instrumententyp: [Tunreconciled | Tinstrumenttype],

};

type Tinventory = {
    id: number,
    type: "inventory",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tinventorycreation = {
    id: number,
    type: "inventorycreation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Inventar_erstellt: [Tinventory | Tunreconciled],
    Erstellung_betreut_von: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Tinvitation = {
    id: number,
    type: "invitation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Einladung_von: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Eingeladung_an: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort: [Tplace | Tunreconciled],
    Einladung_zu: [Tassignmenttorole | Tdeath | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tinventorycreation],

};

type Tiscousinof = {
    id: number,
    type: "iscousinof",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Cousins: [Tperson | Tunreconciled],

};

type Tisuncleof = {
    id: number,
    type: "isuncleof",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Onkel_oder_Tante: [Tperson | Tunreconciled],
    Neffe_oder_Nichte: [Tperson | Tunreconciled],

};

type Tjourney = {
    id: number,
    type: "journey",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Reisende_Person_oder_Gruppe: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ursprung_der_Reise: [Tplace | Tunreconciled],
    Ziel_der_Reise: [Tplace | Tunreconciled],
    Zweck_der_Reise: [Tassignmenttorole | Tbirth | Tdeath | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Tdecorationofarmour | Trepairofarmour | Tinventorycreation | Tunstructuredstatement],

};

type Tlanguage = {
    id: number,
    type: "language",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tleaflet = {
    id: number,
    type: "leaflet",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tlegitimacyofbirth = {
    id: number,
    type: "legitimacyofbirth",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    legitimacy: string | null,
    Person: [Tperson | Tunreconciled],

};

type Tmanuscript = {
    id: number,
    type: "manuscript",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tmarriagebeginning = {
    id: number,
    type: "marriagebeginning",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ehepartner: [Tperson | Tpersonwithproxy | Tunreconciled],
    Ort_der_Eheschließung: [Tplace | Tunreconciled],

};

type Tmarriageend = {
    id: number,
    type: "marriageend",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ehemalige_Ehepartner: [Tperson | Tunreconciled],

};

type Tmatriculation = {
    id: number,
    type: "matriculation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Immatrikulierende_Person: [Tperson | Tunreconciled],
    Institution: [Torganisation | Tfoundation | Tunreconciled],

};

type Tmilitarycampaign = {
    id: number,
    type: "militarycampaign",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tmusicperformance = {
    id: number,
    type: "musicperformance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    aufgeführtes_Werk: [Tmusicwork | Tunreconciled],
    Ort_der_Aufführung: [Tplace | Tunreconciled],
    Aufführungsteilnehmer: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Musikaufführungstyp: [Tunreconciled | Tmusicperformancetype],
    enthält_Individuelle_Musikaufführungen: [Tindividualmusicalperformance | Tinstrumentalperformance | Tsingingperformance],

};

type Tmusicperformancetype = {
    id: number,
    type: "musicperformancetype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tmusicwork = {
    id: number,
    type: "musicwork",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tmusicalinstrument = {
    id: number,
    type: "musicalinstrument",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    instrumentstyp: [Tunreconciled | Tinstrumenttype],

};

type Tnaming = {
    id: number,
    type: "naming",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    forename: string | null,
    surname: string | null,
    gen_name: string | null,
    role_name: string | null,
    add_name: string | null,
    genannte_Person: [Tperson | Tunreconciled],

};

type Tnegativeorder = {
    id: number,
    type: "negativeorder",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Untersagender: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Empfänger_der_Untersagung: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    untersagte_Tätigkeit: [Tassignmenttorole | Tdeath | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tpersongrouphaslocation | Tinventorycreation | Tjourney | Tunknownstatementtype | Tswearingofoath | Tunstructuredstatement],

};

type Toathtype = {
    id: number,
    type: "oathtype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tobjecthaslocation = {
    id: number,
    type: "objecthaslocation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Objekt: [Tphysicalobject | Tartisticwork | Tcompositephysicalobject | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    Ort: [Tplace | Tunreconciled],

};

type Torder = {
    id: number,
    type: "order",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Befehlsgeber: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Befehlsempfänger: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    befohlene_Tätigkeit: [Tassignmenttorole | Tdeath | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tpersongrouphaslocation | Tinventorycreation | Tjourney | Tunknownstatementtype | Tswearingofoath | Tunstructuredstatement],

};

type Torderednotcarriedout = {
    id: number,
    type: "orderednotcarriedout",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Befehlsgeber: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Befehlsempfänger: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    befohlene_Tätigkeit: [Tassignmenttorole | Tdeath | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tpersongrouphaslocation | Tinventorycreation | Tjourney | Tunknownstatementtype | Tswearingofoath | Tunstructuredstatement],

};

type Torganisation = {
    id: number,
    type: "organisation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Torganisationispartoforganisation = {
    id: number,
    type: "organisationispartoforganisation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    übergeordnete_Organisation: [Tgroupofpersons | Torganisation | Tfoundation | Tunreconciled],
    untergeordnete_Organisation: [Tgroupofpersons | Torganisation | Tfoundation | Tunreconciled],

};

type Torganisationlocation = {
    id: number,
    type: "organisationlocation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Körperschaft: [Torganisation | Tfoundation | Tunreconciled],
    Ort: [Tplace | Tunreconciled],

};

type Townershiptransfer = {
    id: number,
    type: "ownershiptransfer",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Handlung_ausgeführt_von: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Handlung: [Tplace | Tunreconciled],
    überstragenes_Objekt: [Tphysicalobject | Tartisticwork | Tcompositephysicalobject | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Trightstoplace | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    vorbesitzer: [Torganisation | Tperson | Tfoundation | Tunreconciled],
    empfänger: [Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Tparentinlawrelation = {
    id: number,
    type: "parentinlawrelation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    parent_in_law_type: string | null,
    Schwiegereltern: [Tperson | Tunreconciled],
    Schwiegersohn_oder_Schwiegertochter: [Tperson | Tunreconciled],

};

type Tparentalrelation = {
    id: number,
    type: "parentalrelation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    parental_type: string | null,
    Elternteil: [Tperson | Tunreconciled],
    Kind: [Tperson | Tunreconciled],

};

type Tparticipationinevent = {
    id: number,
    type: "participationinevent",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ereignis: [Tgenericevent | Tbattle | Tfestivity | Tmilitarycampaign | Ttournament | Tunreconciled],
    Teilnehmer: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Tpayment = {
    id: number,
    type: "payment",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    amount: string | null,
    currency: string | null,
    frequency: string | null,
    Zahlender: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Zahlungsempfänger: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Zahlungsquelle: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled | Tpension | Tsalary],
    Zahlungsgrund: [Tactivity | Tmusicperformance | Troleoccupation | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tperformanceofwork | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Ttextualperformance | Tdebtowed | Tinventorycreation | Tchurchservice | Tindividualmusicalperformance | Tinstrumentalperformance | Tsingingperformance | Tunstructuredstatement],

};

type Tpension = {
    id: number,
    type: "pension",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    amount_per_annum: string | null,
    currency: string | null,
    Rentenempfänger: [Tperson | Tunreconciled],

};

type Tperformanceoftask = {
    id: number,
    type: "performanceoftask",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Handlung_ausgeführt_von: [Tfamily | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Handlung: [Tplace | Tunreconciled],
    ausgeführte_Tätigkeit: [Ttask | Tunreconciled],
    Ausführende: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Tperformanceofwork = {
    id: number,
    type: "performanceofwork",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Aufführende: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Tperson = {
    id: number,
    type: "person",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    person_outside_timeframe: boolean,

};

type Tpersongrouphaslocation = {
    id: number,
    type: "persongrouphaslocation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    ist_Aufenthalt_von: [Tgroupofpersons | Tperson | Tunreconciled],
    is_Ort_in: [Tplace | Tunreconciled],

};

type Tpersonhasillness = {
    id: number,
    type: "personhasillness",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Kranker: [Tperson | Tunreconciled],
    Krankheitstyp: [Tunreconciled | Tillnesstype],
    Ort_der_Erkrankung: [Tplace | Tunreconciled],

};

type Tpersonreportstoperson = {
    id: number,
    type: "personreportstoperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Vorgesetzter: [Tfamily | Tgroupofpersons | Tperson | Tunreconciled],
    Untergeben: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Tpersonwithproxy = {
    id: number,
    type: "personwithproxy",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Principal_person: [Tperson | Tunreconciled],
    Proxy: [Tperson | Tunreconciled],

};

type Tphysicalobject = {
    id: number,
    type: "physicalobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tplace = {
    id: number,
    type: "place",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tpoem = {
    id: number,
    type: "poem",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tpreface = {
    id: number,
    type: "preface",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tpreparationofconceptualtext = {
    id: number,
    type: "preparationofconceptualtext",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    betreffender_Text: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tinventory | Tepitaph | Tunreconciled],

};

type Tpresentationforrole = {
    id: number,
    type: "presentationforrole",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    role_obtained: string | null,
    präsentierte_Person: [Tperson | Tunreconciled],
    präsentierende_Person: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Amt: [Trole | Tunreconciled],

};

type Tprintedwork = {
    id: number,
    type: "printedwork",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tprinting = {
    id: number,
    type: "printing",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    gedrucktes_Werk: [Tprintedwork | Tbook | Tleaflet | Tunreconciled],
    betreffender_Text: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tleaflet | Tinventory | Tepitaph | Tunreconciled],

};

type Tprohibition = {
    id: number,
    type: "prohibition",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Verantwortliche_Person_für_das_Verbot: [Tfamily | Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Person_für_die_das_Verbot_gilt: [Tfamily | Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Verbotene_Dinge: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Tpromise = {
    id: number,
    type: "promise",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Versprechen_gebende_Person: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    die_Person_der_etwas_versprochen_wird: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_des_Versprechens: [Tplace | Tunreconciled],
    versprochenes_Objekt: [Tassignmenttorole | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tinventorycreation | Tpresentationforrole],

};

type Trecommendationofaction = {
    id: number,
    type: "recommendationofaction",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Person_die_die_Empfehlung_äußert: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Person_die_die_Empfelung_empfängt: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Handlung_die_Empfohlen_wurde: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Trecommendationofperson = {
    id: number,
    type: "recommendationofperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Person_die_die_Empfehlung_äußert: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Person_die_die_Empfelung_empfängt: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Person_die_Empfohlen_wird: [Tperson | Tunreconciled],

};

type Tredacting = {
    id: number,
    type: "redacting",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    betreffender_Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],

};

type Trefusal = {
    id: number,
    type: "refusal",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Person_die_die_Weigerung_äußert: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Geweigerte_Handlung: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Treifiedrelation = {
    id: number,
    type: "reifiedrelation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tremovalfromrole = {
    id: number,
    type: "removalfromrole",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    enthobenes_Amt: [Trole | Tunreconciled],
    Amtsentheber: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    betroffene_Person: [Tperson | Tunreconciled],

};

type Trepairofarmour = {
    id: number,
    type: "repairofarmour",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    repariertes_Objekt: [Tarms | Tarmour | Tarmourpart | Tunreconciled],
    Reparateur: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Trequest = {
    id: number,
    type: "request",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Bittsteller: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Bittschriftempfänger: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Ort_der_Bittstellung: [Tplace | Tunreconciled],
    Objekt_der_Bitte: [Tassignmenttorole | Tmusicperformance | Torder | Tpayment | Tremovalfromrole | Tcreationact | Tcreationcommission | Townershiptransfer | Tperformanceoftask | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tpersongrouphaslocation | Tinventorycreation],

};

type Tresignationfromrole = {
    id: number,
    type: "resignationfromrole",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Amt_zurückgetreten_von: [Trole | Tunreconciled],
    zurücktretende_Person: [Tperson | Tunreconciled],
    bekleidetes_Amt: [Troleoccupation],

};

type Trightstoplace = {
    id: number,
    type: "rightstoplace",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Rechte_am_Orts_typ: [Trightstoplacetype | Tunreconciled],
    Ort: [Tplace | Tunreconciled],

};

type Trightstoplacetype = {
    id: number,
    type: "rightstoplacetype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Trole = {
    id: number,
    type: "role",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    amtstyp: [Troletype | Tunreconciled],
    teil_einer_körperschaft: [Torganisation | Tfoundation | Tunreconciled],

};

type Troleoccupation = {
    id: number,
    type: "roleoccupation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Amt: [Trole | Tunreconciled],
    Amtsträger: [Tperson | Tunreconciled],

};

type Troleororganisationinserviceofperson = {
    id: number,
    type: "roleororganisationinserviceofperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Amt_oder_Organisation: [Torganisation | Trole | Tfoundation | Tunreconciled],
    Person: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Troletype = {
    id: number,
    type: "roletype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    unterkategorie_von: [Troletype | Tunreconciled],

};

type Tsalary = {
    id: number,
    type: "salary",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    amount_per_annum: string | null,
    currency: string | null,
    Gehaltsempfänger: [Tperson | Tunreconciled],

};

type Tsecretarialact = {
    id: number,
    type: "secretarialact",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    betreffender_Text: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tinventory | Tepitaph | Tunreconciled],

};

type Tsiblinginlawrelation = {
    id: number,
    type: "siblinginlawrelation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    in_law_type: string | null,
    Person_mit_Schwager_oder_Schwägerin: [Tperson | Tunreconciled],
    Schwager_oder_Schwägerin: [Tperson | Tunreconciled],

};

type Tsiblingrelation = {
    id: number,
    type: "siblingrelation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    sibling_type: string | null,
    Person_mit_Geschwisterteil: [Tperson | Tunreconciled],
    Geschwisterteil: [Tperson | Tunreconciled],

};

type Tsingingperformance = {
    id: number,
    type: "singingperformance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Musikaufführung: [Tplace | Tunreconciled],
    Musikant: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Gesangstyp: [Tunreconciled | Tsingingtype],

};

type Tsingingtype = {
    id: number,
    type: "singingtype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tswearingofoath = {
    id: number,
    type: "swearingofoath",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    person_swearing_oath: [Tgroupofpersons | Tperson | Tunreconciled],
    oath_sworn_to: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    oath_type: [Tunreconciled | Toathtype],
    place: [Tplace | Tunreconciled],
    contents_of_oath: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Ttask = {
    id: number,
    type: "task",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Ttaxesandincome = {
    id: number,
    type: "taxesandincome",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    value: string | null,
    currency: string | null,
    aus_dem_Ort: [Tplace | Tunreconciled],

};

type Ttextannounces = {
    id: number,
    type: "textannounces",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Ttextasksforpatronage = {
    id: number,
    type: "textasksforpatronage",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    patron: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Ttextexpresseslamentation = {
    id: number,
    type: "textexpresseslamentation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    statement: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Ttextexpressesthanks = {
    id: number,
    type: "textexpressesthanks",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    Danke_für: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Ttextmakesnegativestatementaboutperson = {
    id: number,
    type: "textmakesnegativestatementaboutperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    statement_description: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    person: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Ttextmakespositivestatementaboutperson = {
    id: number,
    type: "textmakespositivestatementaboutperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    statement_description: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    person: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Ttextreferencesevent = {
    id: number,
    type: "textreferencesevent",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    Ereignis: [Tgenericevent | Tbattle | Tfestivity | Tmilitarycampaign | Ttournament | Tunreconciled],

};

type Ttextreferencesobject = {
    id: number,
    type: "textreferencesobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],
    Objekt_referenziert: [Tconceptualobject | Tphysicalobject | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Trightstoplace | Tinventory | Tepitaph | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],

};

type Ttextreferstoperson = {
    id: number,
    type: "textreferstoperson",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    statement_description: string | null,
    text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tepitaph | Tunreconciled],
    person: [Tgroupofpersons | Tperson | Tunreconciled],

};

type Ttextualcitationallusion = {
    id: number,
    type: "textualcitationallusion",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    part_of_alluding_text: string | null,
    part_of_alluded_to_text: string | null,
    Zitat_oder_Anspielung_auf_Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],
    zitierter_oder_referenzierter_Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],

};

type Ttextualcreationact = {
    id: number,
    type: "textualcreationact",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Ort_der_Handlung: [Tplace | Tunreconciled],
    Ausgeführt_von: [Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    erstellter_Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],

};

type Ttextualperformance = {
    id: number,
    type: "textualperformance",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    aufgeführtes_Text: [Ttextualwork | Tdedicatorytext | Tpoem | Tpreface | Tepitaph | Tunreconciled],
    Aufführende: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],

};

type Ttextualwork = {
    id: number,
    type: "textualwork",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Ttournament = {
    id: number,
    type: "tournament",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Ttranslation = {
    id: number,
    type: "translation",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Übersetzer: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Originalwerk: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tleaflet | Tinventory | Tepitaph | Tunreconciled],
    Original_language: [Tunreconciled | Tlanguage],
    übersetztes_Werk: [Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tpoem | Tpreface | Tbook | Tleaflet | Tinventory | Tepitaph | Tunreconciled],
    Translation_language: [Tunreconciled | Tlanguage],

};

type Ttransportationofarmour = {
    id: number,
    type: "transportationofarmour",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Transporteur: [Tfamily | Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Absender: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Ausgangsort: [Tplace | Tunreconciled],
    Empfänger: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Zielort: [Tplace | Tunreconciled],
    Transportierte_HarnischeWaffen: [Tarms | Tarmour | Tarmourpart | Tunreconciled],

};

type Ttransportationofobject = {
    id: number,
    type: "transportationofobject",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Transportiertes_Objekt: [Tphysicalobject | Tartisticwork | Tcompositephysicalobject | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    Transporteur: [Tfamily | Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tpersonwithproxy | Tunreconciled],
    Absender: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Ausgangsort: [Tplace | Tunreconciled],
    Empfänger: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Zielort: [Tplace | Tunreconciled],

};

type Ttypology = {
    id: number,
    type: "typology",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};

type Tunknownstatementtype = {
    id: number,
    type: "unknownstatementtype",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    autosuggested_statement_name: string | null,
    suggested_statement: string | null,
    unknown_relation: [Tconceptualobject | Tfamily | Tgroupofpersons | Torganisation | Tperson | Tphysicalobject | Tplace | Trole | Ttask | Tartisticwork | Tcompositeconceptualobject | Tcompositephysicalobject | Tfictionalperson | Tfoundation | Timage | Tmusicwork | Ttextualwork | Tcompositetextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tprintedwork | Twoodcut | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tfictionalplace | Ttaxesandincome | Trightstoplace | Tpersonwithproxy | Tinventory | Tepitaph | Tunreconciled | Tdayinreligiouscalendar | Tindeterminatephysicalobject | Tmusicalinstrument],
    corrected_statements: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Tunreconciled = {
    id: number,
    type: "unreconciled",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    unreconciled_type: string | null,

};

type Tunstructuredstatement = {
    id: number,
    type: "unstructuredstatement",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Involves_entities: [Tgroupofpersons | Torganisation | Tperson | Tphysicalobject | Tplace | Tartisticwork | Tcompositephysicalobject | Tfoundation | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],

};

type Tutilisationinevent = {
    id: number,
    type: "utilisationinevent",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Schlacht: [Tbattle | Tunreconciled],
    Verwendetes_Objekt: [Tarms | Tarmour | Tarmourpart | Tunreconciled],

};

type Tverschreibung = {
    id: number,
    type: "verschreibung",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Aussteller: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Empfänger: [Tfamily | Torganisation | Tperson | Tfoundation | Tunreconciled],
    Verschreibungsobjekt: [Tperson | Tphysicalobject | Tplace | Tartisticwork | Tcompositephysicalobject | Tmanuscript | Tprintedwork | Tbook | Tleaflet | Tarms | Tarmour | Tarmourpart | Ttaxesandincome | Tunreconciled | Tindeterminatephysicalobject | Tmusicalinstrument],
    Grund_für_die_Verschreibung: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],
    Bedingungen: [Tgenericstatement | Tactivity | Tassignmenttorole | Tbirth | Tdeath | Tdedication | Telection | Tfamilialrelation | Tgendering | Tmusicperformance | Tnaming | Torder | Torganisationlocation | Tpayment | Tremovalfromrole | Troleoccupation | Tcreationact | Tcreationcommission | Tmarriagebeginning | Tmarriageend | Townershiptransfer | Tparentalrelation | Tperformanceoftask | Tperformanceofwork | Tsiblingrelation | Tarmourcreationact | Tartworkcreationact | Tassemblyofcompositeobject | Tcreationoforganisation | Ttextualcreationact | Tarmourassemblyact | Tauthoring | Tpreparationofconceptualtext | Tprinting | Tredacting | Tsecretarialact | Tcommunicateswith | Tgiftgiving | Ttransportationofobject | Tparticipationinevent | Tutilisationinevent | Tdecorationofarmour | Trepairofarmour | Ttransportationofarmour | Tfamilymembership | Tacceptanceoforder | Tverschreibung | Tgroupmembership | Tgenericrelationship | Ttextualperformance | Tdebtowed | Tdepicitionofpersoninart | Ttextualcitationallusion | Tartworkhasadditionalname | Tdispute | Tpersongrouphaslocation | Tbaptism | Tburial | Tennoblement | Teventcharacterisation | Tgrantingpermission | Tinventorycreation | Tinvitation | Tjourney | Tobjecthaslocation | Torganisationispartoforganisation | Ttextreferencesobject | Tgenericeducation | Tgraduation | Tmatriculation | Tassociationwithplace | Tcancellationofdebt | Tchurchservice | Tcontract | Tgrantingofdispensation | Tgrantingofindulgence | Tindividualmusicalperformance | Tlegitimacyofbirth | Tpersonhasillness | Tpresentationforrole | Tpromise | Trequest | Tresignationfromrole | Tinstrumentalperformance | Tsingingperformance | Tguardianship | Tiscousinof | Tisuncleof | Tpersonreportstoperson | Troleororganisationinserviceofperson | Tsiblinginlawrelation | Tunknownstatementtype | Tparentinlawrelation | Their | Tapologyfornonattendance | Tdeliveryoftext | Twitnesstosigning | Tadditionoftexttomanuscript | Ttextannounces | Ttextasksforpatronage | Ttextexpresseslamentation | Ttextexpressesthanks | Ttextmakesnegativestatementaboutperson | Ttextmakespositivestatementaboutperson | Ttextreferencesevent | Tcompositetextualworkiscomposedof | Tediting | Ttranslation | Testablishmentofendowment | Ttextreferstoperson | Texpressionofintention | Timprisonment | Trecommendationofaction | Trecommendationofperson | Trefusal | Tswearingofoath | Tunstructuredstatement | Tabsencefromevent | Tabsencefromplace | Tnegativeorder | Tprohibition | Tdanceperformance | Torderednotcarriedout],

};

type Twitnesstosigning = {
    id: number,
    type: "witnesstosigning",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,
    Unterfertigungszeuge: [Ttextualwork | Tdedicatorytext | Tmanuscript | Tpoem | Tpreface | Tepitaph | Tunreconciled],
    Zeuge: [Tgroupofpersons | Torganisation | Tperson | Tfoundation | Tunreconciled],

};

type Twoodcut = {
    id: number,
    type: "woodcut",
    label: string
    start_date_written: string | null,
    end_date_written: string | null,

};



export type TypeMap = {

    "absencefromevent": Tabsencefromevent,
    "absencefromplace": Tabsencefromplace,
    "acceptanceoforder": Tacceptanceoforder,
    "activity": Tactivity,
    "additionoftexttomanuscript": Tadditionoftexttomanuscript,
    "allowancetype": Tallowancetype,
    "apologyfornonattendance": Tapologyfornonattendance,
    "armour": Tarmour,
    "armourassemblyact": Tarmourassemblyact,
    "armourcreationact": Tarmourcreationact,
    "armourpart": Tarmourpart,
    "arms": Tarms,
    "armstype": Tarmstype,
    "artisticwork": Tartisticwork,
    "artworkcreationact": Tartworkcreationact,
    "artworkhasadditionalname": Tartworkhasadditionalname,
    "assemblyofcompositeobject": Tassemblyofcompositeobject,
    "assignmenttorole": Tassignmenttorole,
    "associationwithplace": Tassociationwithplace,
    "authoring": Tauthoring,
    "baptism": Tbaptism,
    "battle": Tbattle,
    "birth": Tbirth,
    "book": Tbook,
    "burial": Tburial,
    "cancellationofdebt": Tcancellationofdebt,
    "churchservice": Tchurchservice,
    "churchservicetype": Tchurchservicetype,
    "communicateswith": Tcommunicateswith,
    "compositeconceptualobject": Tcompositeconceptualobject,
    "compositephysicalobject": Tcompositephysicalobject,
    "compositetextualwork": Tcompositetextualwork,
    "compositetextualworkiscomposedof": Tcompositetextualworkiscomposedof,
    "conceptualobject": Tconceptualobject,
    "contract": Tcontract,
    "creationact": Tcreationact,
    "creationcommission": Tcreationcommission,
    "creationoforganisation": Tcreationoforganisation,
    "danceperformance": Tdanceperformance,
    "dayinreligiouscalendar": Tdayinreligiouscalendar,
    "dayinreligiouscalendartype": Tdayinreligiouscalendartype,
    "death": Tdeath,
    "debtowed": Tdebtowed,
    "decorationofarmour": Tdecorationofarmour,
    "dedication": Tdedication,
    "dedicatorytext": Tdedicatorytext,
    "degreetype": Tdegreetype,
    "deliveryoftext": Tdeliveryoftext,
    "depicitionofpersoninart": Tdepicitionofpersoninart,
    "dispute": Tdispute,
    "editing": Tediting,
    "educationsubject": Teducationsubject,
    "educationtype": Teducationtype,
    "election": Telection,
    "ennoblement": Tennoblement,
    "epitaph": Tepitaph,
    "establishmentofendowment": Testablishmentofendowment,
    "eventcharacterisation": Teventcharacterisation,
    "expressionofintention": Texpressionofintention,
    "familialrelation": Tfamilialrelation,
    "family": Tfamily,
    "familymembership": Tfamilymembership,
    "festivity": Tfestivity,
    "fictionalperson": Tfictionalperson,
    "fictionalplace": Tfictionalplace,
    "foundation": Tfoundation,
    "gendering": Tgendering,
    "genericeducation": Tgenericeducation,
    "genericevent": Tgenericevent,
    "genericrelationship": Tgenericrelationship,
    "genericstatement": Tgenericstatement,
    "giftgiving": Tgiftgiving,
    "graduation": Tgraduation,
    "grantingofdispensation": Tgrantingofdispensation,
    "grantingofindulgence": Tgrantingofindulgence,
    "grantingpermission": Tgrantingpermission,
    "groupmembership": Tgroupmembership,
    "groupofpersons": Tgroupofpersons,
    "guardianship": Tguardianship,
    "heir": Their,
    "illnesstype": Tillnesstype,
    "image": Timage,
    "imprisonment": Timprisonment,
    "indeterminatephysicalobject": Tindeterminatephysicalobject,
    "individualmusicalperformance": Tindividualmusicalperformance,
    "instrumenttype": Tinstrumenttype,
    "instrumentalperformance": Tinstrumentalperformance,
    "inventory": Tinventory,
    "inventorycreation": Tinventorycreation,
    "invitation": Tinvitation,
    "iscousinof": Tiscousinof,
    "isuncleof": Tisuncleof,
    "journey": Tjourney,
    "language": Tlanguage,
    "leaflet": Tleaflet,
    "legitimacyofbirth": Tlegitimacyofbirth,
    "manuscript": Tmanuscript,
    "marriagebeginning": Tmarriagebeginning,
    "marriageend": Tmarriageend,
    "matriculation": Tmatriculation,
    "militarycampaign": Tmilitarycampaign,
    "musicperformance": Tmusicperformance,
    "musicperformancetype": Tmusicperformancetype,
    "musicwork": Tmusicwork,
    "musicalinstrument": Tmusicalinstrument,
    "naming": Tnaming,
    "negativeorder": Tnegativeorder,
    "oathtype": Toathtype,
    "objecthaslocation": Tobjecthaslocation,
    "order": Torder,
    "orderednotcarriedout": Torderednotcarriedout,
    "organisation": Torganisation,
    "organisationispartoforganisation": Torganisationispartoforganisation,
    "organisationlocation": Torganisationlocation,
    "ownershiptransfer": Townershiptransfer,
    "parentinlawrelation": Tparentinlawrelation,
    "parentalrelation": Tparentalrelation,
    "participationinevent": Tparticipationinevent,
    "payment": Tpayment,
    "pension": Tpension,
    "performanceoftask": Tperformanceoftask,
    "performanceofwork": Tperformanceofwork,
    "person": Tperson,
    "persongrouphaslocation": Tpersongrouphaslocation,
    "personhasillness": Tpersonhasillness,
    "personreportstoperson": Tpersonreportstoperson,
    "personwithproxy": Tpersonwithproxy,
    "physicalobject": Tphysicalobject,
    "place": Tplace,
    "poem": Tpoem,
    "preface": Tpreface,
    "preparationofconceptualtext": Tpreparationofconceptualtext,
    "presentationforrole": Tpresentationforrole,
    "printedwork": Tprintedwork,
    "printing": Tprinting,
    "prohibition": Tprohibition,
    "promise": Tpromise,
    "recommendationofaction": Trecommendationofaction,
    "recommendationofperson": Trecommendationofperson,
    "redacting": Tredacting,
    "refusal": Trefusal,
    "reifiedrelation": Treifiedrelation,
    "removalfromrole": Tremovalfromrole,
    "repairofarmour": Trepairofarmour,
    "request": Trequest,
    "resignationfromrole": Tresignationfromrole,
    "rightstoplace": Trightstoplace,
    "rightstoplacetype": Trightstoplacetype,
    "role": Trole,
    "roleoccupation": Troleoccupation,
    "roleororganisationinserviceofperson": Troleororganisationinserviceofperson,
    "roletype": Troletype,
    "salary": Tsalary,
    "secretarialact": Tsecretarialact,
    "siblinginlawrelation": Tsiblinginlawrelation,
    "siblingrelation": Tsiblingrelation,
    "singingperformance": Tsingingperformance,
    "singingtype": Tsingingtype,
    "swearingofoath": Tswearingofoath,
    "task": Ttask,
    "taxesandincome": Ttaxesandincome,
    "textannounces": Ttextannounces,
    "textasksforpatronage": Ttextasksforpatronage,
    "textexpresseslamentation": Ttextexpresseslamentation,
    "textexpressesthanks": Ttextexpressesthanks,
    "textmakesnegativestatementaboutperson": Ttextmakesnegativestatementaboutperson,
    "textmakespositivestatementaboutperson": Ttextmakespositivestatementaboutperson,
    "textreferencesevent": Ttextreferencesevent,
    "textreferencesobject": Ttextreferencesobject,
    "textreferstoperson": Ttextreferstoperson,
    "textualcitationallusion": Ttextualcitationallusion,
    "textualcreationact": Ttextualcreationact,
    "textualperformance": Ttextualperformance,
    "textualwork": Ttextualwork,
    "tournament": Ttournament,
    "translation": Ttranslation,
    "transportationofarmour": Ttransportationofarmour,
    "transportationofobject": Ttransportationofobject,
    "typology": Ttypology,
    "unknownstatementtype": Tunknownstatementtype,
    "unreconciled": Tunreconciled,
    "unstructuredstatement": Tunstructuredstatement,
    "utilisationinevent": Tutilisationinevent,
    "verschreibung": Tverschreibung,
    "witnesstosigning": Twitnesstosigning,
    "woodcut": Twoodcut,

};

export type ModelDef = {
  metatype: "statement" | "entity" | null;
  verboseName: string;
  verboseNamePlural: string | null;
};

export const modelDefs = {
  absencefromevent: {
    metatype: "statement",
    verboseName: "Abwesenheit bei einem Ereignis",
    verboseNamePlural: "Abwesenheiten von Ereignissen",
  },
  absencefromplace: {
    metatype: "statement",
    verboseName: "Abwesenheit an einem Ort",
    verboseNamePlural: "Abwesenheiten von Orten",
  },
  acceptanceoforder: {
    metatype: "statement",
    verboseName: "Befehlsannahme",
    verboseNamePlural: "Befehlsannahmen",
  },
  activity: {
    metatype: "statement",
    verboseName: "Generic Activity",
    verboseNamePlural: "Generic Activities",
  },
  additionoftexttomanuscript: {
    metatype: "statement",
    verboseName: "Hinzufügung von Text zum Manuskript",
    verboseNamePlural: "Hinzufügung von Text zum Manuskript",
  },
  allowancetype: {
    metatype: "entity",
    verboseName: "allowance type",
    verboseNamePlural: null,
  },
  apologyfornonattendance: {
    metatype: "statement",
    verboseName: "Bitte um Entschuldigung für Abwesenheit",
    verboseNamePlural: "Bitten um Entschuldigung für Abwesenheit",
  },
  armour: {
    metatype: "entity",
    verboseName: "Harnisch",
    verboseNamePlural: "Harnische",
  },
  armourassemblyact: {
    metatype: "statement",
    verboseName: "Zusammenstellung von Rüstungsteilen",
    verboseNamePlural: "Zusammenstellungen von Rüstungsteilen",
  },
  armourcreationact: {
    metatype: "statement",
    verboseName: "Herstellung eines Rüstungsteiles",
    verboseNamePlural: "Herstellung von Rüstungsteilen",
  },
  armourpart: {
    metatype: "entity",
    verboseName: "Rüstungsteil",
    verboseNamePlural: "Rüstungsteile",
  },
  arms: {
    metatype: "entity",
    verboseName: "Waffe",
    verboseNamePlural: "Waffen",
  },
  armstype: {
    metatype: "entity",
    verboseName: "Harnisches-/Waffentyp",
    verboseNamePlural: "Harnisches-/Waffentypen",
  },
  artisticwork: {
    metatype: "entity",
    verboseName: "Kunstwerk",
    verboseNamePlural: "Kunstwerke",
  },
  artworkcreationact: {
    metatype: "statement",
    verboseName: "Herstellung eines Kunstwerkes",
    verboseNamePlural: "Herstellung von Kunstwerken",
  },
  artworkhasadditionalname: {
    metatype: "statement",
    verboseName: "Kunstwerk hat zusätzlichen Namen",
    verboseNamePlural: "Kunstwerke hat zusätzliche Namen",
  },
  assemblyofcompositeobject: {
    metatype: "statement",
    verboseName: "Kombinierung mehrerer Objekte",
    verboseNamePlural: "Kombinierungen mehrerer Objekte",
  },
  assignmenttorole: {
    metatype: "statement",
    verboseName: "Amtseinsetzung",
    verboseNamePlural: "Amtseinsetzungen",
  },
  associationwithplace: {
    metatype: "statement",
    verboseName: "Assoziation mit Ort",
    verboseNamePlural: "Assoziationen mit Ort",
  },
  authoring: {
    metatype: "statement",
    verboseName: "Autorenschaft",
    verboseNamePlural: "Autorenschaften",
  },
  baptism: {
    metatype: "statement",
    verboseName: "Taufe",
    verboseNamePlural: "Taufen",
  },
  battle: {
    metatype: "entity",
    verboseName: "Schlacht",
    verboseNamePlural: "Schlachten",
  },
  birth: {
    metatype: "statement",
    verboseName: "Geburt",
    verboseNamePlural: "Geburten",
  },
  book: {
    metatype: "entity",
    verboseName: "Buch",
    verboseNamePlural: "Bücher",
  },
  burial: {
    metatype: "statement",
    verboseName: "Begräbnis",
    verboseNamePlural: "Begräbnisse",
  },
  cancellationofdebt: {
    metatype: "statement",
    verboseName: "Schuldenserlass",
    verboseNamePlural: "Schuldenserlasse",
  },
  churchservice: {
    metatype: "statement",
    verboseName: "Gottesdienst",
    verboseNamePlural: "Gottesdienste",
  },
  churchservicetype: {
    metatype: "entity",
    verboseName: "Gottesdiensttyp",
    verboseNamePlural: "Gottesdiensttypen",
  },
  communicateswith: {
    metatype: "statement",
    verboseName: "Mitteilung",
    verboseNamePlural: "Mitteilungen",
  },
  compositeconceptualobject: {
    metatype: "entity",
    verboseName: "Zusammengesetztes konzeptionelles Objekt",
    verboseNamePlural: "Zusammengesetzte konzeptionelle Objekte",
  },
  compositephysicalobject: {
    metatype: "entity",
    verboseName: "Zusammengesetztes physisches Objekt",
    verboseNamePlural: "Zusammengesetzte physische Objekte",
  },
  compositetextualwork: {
    metatype: "entity",
    verboseName: "Sammelwerk",
    verboseNamePlural: "Sammelwerke",
  },
  compositetextualworkiscomposedof: {
    metatype: "statement",
    verboseName: "Sammelwerk ist zusammengestellt aus",
    verboseNamePlural: "Sammelwerk ist zusammengestellt aus",
  },
  conceptualobject: {
    metatype: "entity",
    verboseName: "Konzeptionelles Objekt",
    verboseNamePlural: "Konzeptionelle Objekte",
  },
  contract: {
    metatype: "statement",
    verboseName: "Vertrag",
    verboseNamePlural: "Verträge",
  },
  creationact: {
    metatype: "statement",
    verboseName: "Herstellung",
    verboseNamePlural: "Herstellungen",
  },
  creationcommission: {
    metatype: "statement",
    verboseName: "Herstellungsauftrag",
    verboseNamePlural: "Herstellungsaufträge",
  },
  creationoforganisation: {
    metatype: "statement",
    verboseName: "Gründung einer Körperschaft",
    verboseNamePlural: "Gründungen von Körperschaften",
  },
  danceperformance: {
    metatype: "statement",
    verboseName: "Tanzaufführung",
    verboseNamePlural: "Tanzaufführungen",
  },
  dayinreligiouscalendar: {
    metatype: "entity",
    verboseName: "Tag im Kirchenjahr",
    verboseNamePlural: "Tage im Kirchenjahr",
  },
  dayinreligiouscalendartype: {
    metatype: "entity",
    verboseName: "Typ des Tages im religiösen Kalender",
    verboseNamePlural: "Typen von Tage im religiösen Kalender",
  },
  death: {
    metatype: "statement",
    verboseName: "Tod",
    verboseNamePlural: "Tode",
  },
  debtowed: {
    metatype: "statement",
    verboseName: "Schulden",
    verboseNamePlural: "Schulden",
  },
  decorationofarmour: {
    metatype: "statement",
    verboseName: "Verzierung von Harnisch/Waffe",
    verboseNamePlural: "Verzierung von Harnischen/Waffen",
  },
  dedication: {
    metatype: "statement",
    verboseName: "Widmung",
    verboseNamePlural: "Widmungen",
  },
  dedicatorytext: {
    metatype: "entity",
    verboseName: "Werk mit Widmung",
    verboseNamePlural: "Werke mit Widmungen",
  },
  degreetype: {
    metatype: "entity",
    verboseName: "Abschlusstyp",
    verboseNamePlural: "AmtsAbschlusstypen",
  },
  deliveryoftext: {
    metatype: "statement",
    verboseName: "Überbringung von Text",
    verboseNamePlural: "Überbringungen von Texten",
  },
  depicitionofpersoninart: {
    metatype: "statement",
    verboseName: "Personendarstellung in Kunst",
    verboseNamePlural: "Personendarstellungen in Kunst",
  },
  dispute: {
    metatype: "statement",
    verboseName: "Streit",
    verboseNamePlural: "Streite",
  },
  editing: {
    metatype: "statement",
    verboseName: "Herausgeberschaft",
    verboseNamePlural: "Herausgeberschaften",
  },
  educationsubject: {
    metatype: "entity",
    verboseName: "Studienfach",
    verboseNamePlural: "Studienfachen",
  },
  educationtype: {
    metatype: "entity",
    verboseName: "Studientyp",
    verboseNamePlural: "Studientypen",
  },
  election: {
    metatype: "statement",
    verboseName: "Wahl",
    verboseNamePlural: "Wahlen",
  },
  ennoblement: {
    metatype: "statement",
    verboseName: "Nobilitierung",
    verboseNamePlural: "Nobilitierungen",
  },
  epitaph: {
    metatype: "entity",
    verboseName: "epitaph",
    verboseNamePlural: null,
  },
  establishmentofendowment: {
    metatype: "statement",
    verboseName: "Errichtung einer Stiftung",
    verboseNamePlural: "Errichtungen von Stiftungen",
  },
  eventcharacterisation: {
    metatype: "statement",
    verboseName: "Charakterisierung von Ereignis",
    verboseNamePlural: "Charakterisierung von Ereignissen",
  },
  expressionofintention: {
    metatype: "statement",
    verboseName: "Äußerung eines Vorhabens",
    verboseNamePlural: "Äußerungen von Vorhaben",
  },
  familialrelation: {
    metatype: "statement",
    verboseName: "Familiäre Verbindung",
    verboseNamePlural: "Familiäre Verbindungen",
  },
  family: {
    metatype: "entity",
    verboseName: "Familie",
    verboseNamePlural: "Familien",
  },
  familymembership: {
    metatype: "statement",
    verboseName: "Familienmitgliedschaft",
    verboseNamePlural: "Familienmitgliedschaften",
  },
  festivity: {
    metatype: "entity",
    verboseName: "Fest",
    verboseNamePlural: "Feste",
  },
  fictionalperson: {
    metatype: "entity",
    verboseName: "Fiktiver Ort",
    verboseNamePlural: "Fiktive Orte",
  },
  fictionalplace: {
    metatype: "entity",
    verboseName: "Fiktive Person",
    verboseNamePlural: "Fiktive Personen",
  },
  foundation: {
    metatype: "entity",
    verboseName: "Stiftung",
    verboseNamePlural: "Stiftungen",
  },
  gendering: {
    metatype: "statement",
    verboseName: "gendering",
    verboseNamePlural: null,
  },
  genericeducation: {
    metatype: "statement",
    verboseName: "Ausbildung",
    verboseNamePlural: "Ausbildungen",
  },
  genericevent: {
    metatype: "entity",
    verboseName: "Ereignis",
    verboseNamePlural: "Ereignisse",
  },
  genericrelationship: {
    metatype: "statement",
    verboseName: "Generic Relationship",
    verboseNamePlural: "Generic Relationships",
  },
  genericstatement: {
    metatype: "statement",
    verboseName: "Generic Statement",
    verboseNamePlural: "Generic Statements",
  },
  giftgiving: {
    metatype: "statement",
    verboseName: "Schenkung",
    verboseNamePlural: "Schenkungen",
  },
  graduation: {
    metatype: "statement",
    verboseName: "Graduierung",
    verboseNamePlural: "Graduierungen",
  },
  grantingofdispensation: {
    metatype: "statement",
    verboseName: "Gewährung von Dispens",
    verboseNamePlural: "Gewährungen von Dispense",
  },
  grantingofindulgence: {
    metatype: "statement",
    verboseName: "Gewährung von Ablass",
    verboseNamePlural: "Gewährungen von Ablass",
  },
  grantingpermission: {
    metatype: "statement",
    verboseName: "Erlaubnis erteilen",
    verboseNamePlural: "Erlaubnis erteilen",
  },
  groupmembership: {
    metatype: "statement",
    verboseName: "Mitgliedschaft in einer Organisation/Gruppe",
    verboseNamePlural: "Mitgliedschaften in Organisationen/Gruppen",
  },
  groupofpersons: {
    metatype: "entity",
    verboseName: "Personengruppe",
    verboseNamePlural: "Personengruppen",
  },
  guardianship: {
    metatype: "statement",
    verboseName: "Vormundschaft",
    verboseNamePlural: "Vormundschaften",
  },
  heir: {
    metatype: "statement",
    verboseName: "Erbe",
    verboseNamePlural: "Erbe",
  },
  illnesstype: {
    metatype: "entity",
    verboseName: "Krankheitstyp",
    verboseNamePlural: "Krankheitstypen",
  },
  image: {
    metatype: "entity",
    verboseName: "Bild",
    verboseNamePlural: "Bilder",
  },
  imprisonment: {
    metatype: "statement",
    verboseName: "Gefangenschaft",
    verboseNamePlural: "Gefangenschaften",
  },
  indeterminatephysicalobject: {
    metatype: "entity",
    verboseName: "indeterminate physical object",
    verboseNamePlural: "unbestimmte physische Objekte",
  },
  individualmusicalperformance: {
    metatype: "statement",
    verboseName: "Individuelle Musikaufführung",
    verboseNamePlural: "Individuelle Musikaufführungen",
  },
  instrumenttype: {
    metatype: "entity",
    verboseName: "Instrumententyp",
    verboseNamePlural: "Instrumententypen",
  },
  instrumentalperformance: {
    metatype: "statement",
    verboseName: "Instrumentalaufführung",
    verboseNamePlural: "Instrumentalaufführungen",
  },
  inventory: {
    metatype: "entity",
    verboseName: "Inventar",
    verboseNamePlural: "Inventare",
  },
  inventorycreation: {
    metatype: "statement",
    verboseName: "Erstellung von Inventar",
    verboseNamePlural: "Erstellungen von Inventare",
  },
  invitation: {
    metatype: "statement",
    verboseName: "Einladung",
    verboseNamePlural: "Einladungen",
  },
  iscousinof: {
    metatype: "statement",
    verboseName: "Ist Cousin von",
    verboseNamePlural: "Sind Cousins von",
  },
  isuncleof: {
    metatype: "statement",
    verboseName: "Ist Onkel/Tante von",
    verboseNamePlural: "Sind Onkel/Tanten von",
  },
  journey: {
    metatype: "statement",
    verboseName: "Reise",
    verboseNamePlural: "Reisen",
  },
  language: {
    metatype: "entity",
    verboseName: "Sprache",
    verboseNamePlural: "Sprachen",
  },
  leaflet: {
    metatype: "entity",
    verboseName: "Flugblatt",
    verboseNamePlural: "Flugblätter",
  },
  legitimacyofbirth: {
    metatype: "statement",
    verboseName: "Legitimität der Geburt",
    verboseNamePlural: "Legitimitäten der Geburt",
  },
  manuscript: {
    metatype: "entity",
    verboseName: "Handschrift",
    verboseNamePlural: "Handschriften",
  },
  marriagebeginning: {
    metatype: "statement",
    verboseName: "Eheschließung",
    verboseNamePlural: "Eheschließungen",
  },
  marriageend: {
    metatype: "statement",
    verboseName: "Ende der Ehe",
    verboseNamePlural: "Enden der Ehen",
  },
  matriculation: {
    metatype: "statement",
    verboseName: "Immatrikulation",
    verboseNamePlural: "Immatrikulationen",
  },
  militarycampaign: {
    metatype: "entity",
    verboseName: "Feldzug",
    verboseNamePlural: "Feldzüge",
  },
  musicperformance: {
    metatype: "statement",
    verboseName: "Musikaufführung",
    verboseNamePlural: "Musikaufführungen",
  },
  musicperformancetype: {
    metatype: "entity",
    verboseName: "Musikaufführungstyp",
    verboseNamePlural: "Musikaufführungstypen",
  },
  musicwork: {
    metatype: "entity",
    verboseName: "Musikwerk",
    verboseNamePlural: "Musikwerke",
  },
  musicalinstrument: {
    metatype: "entity",
    verboseName: "Musikinstrument",
    verboseNamePlural: "Musikinstrumente",
  },
  naming: {
    metatype: "statement",
    verboseName: "Benennung einer Person",
    verboseNamePlural: "Benennungen von Personen",
  },
  negativeorder: {
    metatype: "statement",
    verboseName: "Negative Befehl",
    verboseNamePlural: "Negative Befehlen",
  },
  oathtype: {
    metatype: "entity",
    verboseName: "Oath Type",
    verboseNamePlural: "Oath Types",
  },
  objecthaslocation: {
    metatype: "statement",
    verboseName: "Objekt has Standort",
    verboseNamePlural: "Objekten haben Standorte",
  },
  order: {
    metatype: "statement",
    verboseName: "Befehl",
    verboseNamePlural: "Befehle",
  },
  orderednotcarriedout: {
    metatype: "statement",
    verboseName: "Befehl erteilt, aber nicht ausgeführt",
    verboseNamePlural: "Befehl erteilt, aber nicht ausgeführt",
  },
  organisation: {
    metatype: "entity",
    verboseName: "Körperschaft",
    verboseNamePlural: "Körperschaften",
  },
  organisationispartoforganisation: {
    metatype: "statement",
    verboseName: "hat Unterorganisation",
    verboseNamePlural: null,
  },
  organisationlocation: {
    metatype: "statement",
    verboseName: "Ort einer Körperschaft",
    verboseNamePlural: "Ort von Körperschaften",
  },
  ownershiptransfer: {
    metatype: "statement",
    verboseName: "Besitztransfer",
    verboseNamePlural: "Besitztransfere",
  },
  parentinlawrelation: {
    metatype: "statement",
    verboseName: "Schwiegerelternverhältnis",
    verboseNamePlural: "Schwiegerelternverhältnisse",
  },
  parentalrelation: {
    metatype: "statement",
    verboseName: "Elternschaft",
    verboseNamePlural: "Elternschaften",
  },
  participationinevent: {
    metatype: "statement",
    verboseName: "Teilnahme",
    verboseNamePlural: "Teilnahmen",
  },
  payment: {
    metatype: "statement",
    verboseName: "Zahlung",
    verboseNamePlural: "Zahlungen",
  },
  pension: {
    metatype: "entity",
    verboseName: "Renten",
    verboseNamePlural: null,
  },
  performanceoftask: {
    metatype: "statement",
    verboseName: "Ausübung einer Tätigkeit",
    verboseNamePlural: "Ausübungen von Tätigkeiten",
  },
  performanceofwork: {
    metatype: "statement",
    verboseName: "Aufführung eines Werkes",
    verboseNamePlural: "Aufführungen von Werken",
  },
  person: {
    metatype: "entity",
    verboseName: "Person",
    verboseNamePlural: "Personen",
  },
  persongrouphaslocation: {
    metatype: "statement",
    verboseName: "Aufenthaltsort",
    verboseNamePlural: "Aufenthaltsorte",
  },
  personhasillness: {
    metatype: "statement",
    verboseName: "Krankheit einer Person",
    verboseNamePlural: "Krankheiten einer Person",
  },
  personreportstoperson: {
    metatype: "statement",
    verboseName: "hat Vorgesetzten",
    verboseNamePlural: "hat Vorgesetzten",
  },
  personwithproxy: {
    metatype: "entity",
    verboseName: "Person represented by Proxy",
    verboseNamePlural: null,
  },
  physicalobject: {
    metatype: "entity",
    verboseName: "Physisches Objekt",
    verboseNamePlural: "Physische Objekte",
  },
  place: {
    metatype: "entity",
    verboseName: "Ort",
    verboseNamePlural: "Orte",
  },
  poem: {
    metatype: "entity",
    verboseName: "Gedicht",
    verboseNamePlural: "Gedichte",
  },
  preface: {
    metatype: "entity",
    verboseName: "Vorwort",
    verboseNamePlural: "Vorworte",
  },
  preparationofconceptualtext: {
    metatype: "statement",
    verboseName: "preparation of conceptual text",
    verboseNamePlural: null,
  },
  presentationforrole: {
    metatype: "statement",
    verboseName: "Besetzungsvorschlag für Amt",
    verboseNamePlural: "Besetzungsvorschläge für Amt",
  },
  printedwork: {
    metatype: "entity",
    verboseName: "Druckwerk",
    verboseNamePlural: "Druckwerke",
  },
  printing: {
    metatype: "statement",
    verboseName: "Druck",
    verboseNamePlural: "Drucke",
  },
  prohibition: {
    metatype: "statement",
    verboseName: "Verbot",
    verboseNamePlural: "Verbote",
  },
  promise: {
    metatype: "statement",
    verboseName: "Versprechen",
    verboseNamePlural: "Versprechen",
  },
  recommendationofaction: {
    metatype: "statement",
    verboseName: "Empfehlung einer Handlung",
    verboseNamePlural: "Empfehlungen von Handlungen",
  },
  recommendationofperson: {
    metatype: "statement",
    verboseName: "Empfehlung von einer Person",
    verboseNamePlural: "Empfehlungen von Personen",
  },
  redacting: {
    metatype: "statement",
    verboseName: "Bearbeitung",
    verboseNamePlural: "Bearbeitungen",
  },
  refusal: {
    metatype: "statement",
    verboseName: "Weigerung",
    verboseNamePlural: "Weigerungen",
  },
  reifiedrelation: {
    metatype: "entity",
    verboseName: "reified relation",
    verboseNamePlural: null,
  },
  removalfromrole: {
    metatype: "statement",
    verboseName: "Amtsenthebung",
    verboseNamePlural: "Amtsenthebungen",
  },
  repairofarmour: {
    metatype: "statement",
    verboseName: "Reparatur von Harnisch/Waffe",
    verboseNamePlural: "Reparaturen von Harnischen/Waffen",
  },
  request: {
    metatype: "statement",
    verboseName: "Bitte",
    verboseNamePlural: "Bitten",
  },
  resignationfromrole: {
    metatype: "statement",
    verboseName: "Rücktritt von Amt",
    verboseNamePlural: "Rücktritte von Amt",
  },
  rightstoplace: {
    metatype: "entity",
    verboseName: "Rechte am Ort",
    verboseNamePlural: "Rechte am Ort",
  },
  rightstoplacetype: {
    metatype: "entity",
    verboseName: "Rechte am Ortstyp",
    verboseNamePlural: "Rechte am Ortstypen",
  },
  role: {
    metatype: "entity",
    verboseName: "Amt",
    verboseNamePlural: "Ämter",
  },
  roleoccupation: {
    metatype: "statement",
    verboseName: "Bekleidung eines Amtes",
    verboseNamePlural: "Bekleidung von Ämtern",
  },
  roleororganisationinserviceofperson: {
    metatype: "statement",
    verboseName: "Amt/Organisation im Dienst von",
    verboseNamePlural: "Ämter/Organisationen im Dienst von",
  },
  roletype: {
    metatype: "entity",
    verboseName: "Amtstyp",
    verboseNamePlural: "Amtstypen",
  },
  salary: {
    metatype: "entity",
    verboseName: "Gehälter",
    verboseNamePlural: null,
  },
  secretarialact: {
    metatype: "statement",
    verboseName: "Schreibarbeit",
    verboseNamePlural: "Schreibarbeiten",
  },
  siblinginlawrelation: {
    metatype: "statement",
    verboseName: "Schwager Verhältnis",
    verboseNamePlural: "Schwager Verhältnisse",
  },
  siblingrelation: {
    metatype: "statement",
    verboseName: "Geschwisterverhältnis",
    verboseNamePlural: "Geschwisterverhältnisse",
  },
  singingperformance: {
    metatype: "statement",
    verboseName: "Gesangsaufführung",
    verboseNamePlural: "Gesangsaufführungen",
  },
  singingtype: {
    metatype: "entity",
    verboseName: "Gesangstyp",
    verboseNamePlural: "Gesangstypen",
  },
  swearingofoath: {
    metatype: "statement",
    verboseName: "Swearing of Oath",
    verboseNamePlural: "Swearing of Oaths",
  },
  task: {
    metatype: "entity",
    verboseName: "Tätigkeit",
    verboseNamePlural: "Tätigkeiten",
  },
  taxesandincome: {
    metatype: "entity",
    verboseName: "Steuern und Einnahmen",
    verboseNamePlural: "Steuern und Einnahmen",
  },
  textannounces: {
    metatype: "statement",
    verboseName: "Text kündigt an",
    verboseNamePlural: "Text kündigt an",
  },
  textasksforpatronage: {
    metatype: "statement",
    verboseName: "Text bittet um Unterstützung",
    verboseNamePlural: "Text bittet um Unterstützung",
  },
  textexpresseslamentation: {
    metatype: "statement",
    verboseName: "Text drückt Klage aus",
    verboseNamePlural: "Text drückt Klage aus",
  },
  textexpressesthanks: {
    metatype: "statement",
    verboseName: "Text drückt Dankbarkeit aus",
    verboseNamePlural: "Text drückt Dankbarkeit aus",
  },
  textmakesnegativestatementaboutperson: {
    metatype: "statement",
    verboseName: "Text macht eine negative Aussage über die Person",
    verboseNamePlural: "Texte machen negative Aussage über Personen",
  },
  textmakespositivestatementaboutperson: {
    metatype: "statement",
    verboseName: "Text macht eine positive Aussage über die Person",
    verboseNamePlural: "Texte machen positive Aussage über Personen",
  },
  textreferencesevent: {
    metatype: "statement",
    verboseName: "Text bezieht sich auf ein Ereignis",
    verboseNamePlural: "Text bezieht sich auf ein Ereignis",
  },
  textreferencesobject: {
    metatype: "statement",
    verboseName: "text references object",
    verboseNamePlural: null,
  },
  textreferstoperson: {
    metatype: "statement",
    verboseName: "Text macht eine Aussage über die Person",
    verboseNamePlural: "Texte machen Aussage über Personen",
  },
  textualcitationallusion: {
    metatype: "statement",
    verboseName: "Textzitat/Textanspielung",
    verboseNamePlural: "Textzitaten/Textanspielungen",
  },
  textualcreationact: {
    metatype: "statement",
    verboseName: "Textschöpfung",
    verboseNamePlural: "Textschöpfungen",
  },
  textualperformance: {
    metatype: "statement",
    verboseName: "Textaufführung",
    verboseNamePlural: "Textausführungen",
  },
  textualwork: {
    metatype: "entity",
    verboseName: "Text",
    verboseNamePlural: "Texte",
  },
  tournament: {
    metatype: "entity",
    verboseName: "Turnier",
    verboseNamePlural: "Turniere",
  },
  translation: {
    metatype: "statement",
    verboseName: "Übersetzung",
    verboseNamePlural: "Übersetzungen",
  },
  transportationofarmour: {
    metatype: "statement",
    verboseName: "Transport von Harnisch/Waffe",
    verboseNamePlural: "Transporte von Harnischen/Waffen",
  },
  transportationofobject: {
    metatype: "statement",
    verboseName: "Transport eines Objekts",
    verboseNamePlural: "Transporte von Objekten",
  },
  typology: {
    metatype: "entity",
    verboseName: "typology",
    verboseNamePlural: null,
  },
  unknownstatementtype: {
    metatype: "statement",
    verboseName: "Unknown Statement Type",
    verboseNamePlural: "Unknown Statement Type",
  },
  unreconciled: {
    metatype: null,
    verboseName: "unreconciled",
    verboseNamePlural: null,
  },
  unstructuredstatement: {
    metatype: "statement",
    verboseName: "UnstructuredStatement",
    verboseNamePlural: "UnstructuredStatement",
  },
  utilisationinevent: {
    metatype: "statement",
    verboseName: "Verwendung von Harnisch/Waffe",
    verboseNamePlural: "Verwendungen von Harnischen/Waffen",
  },
  verschreibung: {
    metatype: "statement",
    verboseName: "Verschreibung",
    verboseNamePlural: "Verschreibungen",
  },
  witnesstosigning: {
    metatype: "statement",
    verboseName: "Unterfertigungszeuge",
    verboseNamePlural: "Unterfertigungszeuge",
  },
  woodcut: {
    metatype: "entity",
    verboseName: "Holzschnitt",
    verboseNamePlural: "Holzschnitte",
  },
} satisfies Record<keyof TypeMap, ModelDef>;;

type KeysByMetatype<M extends string> = {
  [K in keyof typeof modelDefs]: (typeof modelDefs)[K]["metatype"] extends M ? K : never;
}[keyof typeof modelDefs];

type TypesByMetatype<M extends string> = TypeMap[KeysByMetatype<M> & keyof TypeMap];

export type StatementTypes = TypesByMetatype<"statement">;
export type EntityTypes = TypesByMetatype<"entity">;

export type StatementDefsWithTypes = {
  [K in KeysByMetatype<"statement"> & keyof TypeMap]: TypeMap[K];
};

export type EntityDefsWithTypes = {
  [K in KeysByMetatype<"entity"> & keyof TypeMap]: TypeMap[K];
};
