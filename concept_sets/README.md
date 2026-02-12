# INDICATE Data Dictionary - Concept Sets Export

Export date: 2026-02-12 10:27:51.553966
Number of concept sets: 332

## Table of Contents

- [Clinical observation](#clinical-observation)
  - [Neurological assessment](#clinical-observation-neurological-assessment)
    - [1 - 3-minute Diagnostic Interview for CAM-defined Delirium (3D-CAM) score](#1-3-minute-diagnostic-interview-for-cam-defined-delirium-3d-cam-score)
    - [2 - 4 A's Test for Delirium Screening score](#2-4-a-s-test-for-delirium-screening-score)
    - [3 - Behavior pain scale](#3-behavior-pain-scale)
    - [4 - Confusion Assessment Method for the Intensive Care Unit (CAM-ICU) score](#4-confusion-assessment-method-for-the-intensive-care-unit-cam-icu-score)
    - [5 - Delirium Detection Score (DDS) score](#5-delirium-detection-score-dds-score)
    - [6 - Delirium Observation Scale (DOS) score](#6-delirium-observation-scale-dos-score)
    - [7 - Delirium Rating Scale (DRS) score](#7-delirium-rating-scale-drs-score)
    - [8 - Glasgow coma scale](#8-glasgow-coma-scale)
    - [9 - Intensive Care Delirium Screening Checklist (ICDSC) score](#9-intensive-care-delirium-screening-checklist-icdsc-score)
    - [10 - Numeric Pain Rating Scale](#10-numeric-pain-rating-scale)
    - [11 - Nursing Delirium Screening Scale (NU-DESC) score](#11-nursing-delirium-screening-scale-nu-desc-score)
    - [12 - Pupillary response](#12-pupillary-response)
    - [13 - Ramsay sedation scale](#13-ramsay-sedation-scale)
    - [14 - Richmond agitation-sedation scale](#14-richmond-agitation-sedation-scale)
    - [15 - Visual analog pain scale](#15-visual-analog-pain-scale)
- [Condition](#condition)
  - [APACHE IV - Chronic health conditions](#condition-apache-iv-chronic-health-conditions)
    - [16 - AIDS](#16-aids)
    - [17 - Alcoholic liver disease](#17-alcoholic-liver-disease)
    - [18 - Chronic kidney disease](#18-chronic-kidney-disease)
    - [19 - Cirrhosis of liver](#19-cirrhosis-of-liver)
    - [20 - Hepatic failure, not elsewhere classified](#20-hepatic-failure-not-elsewhere-classified)
    - [21 - Immunosuppression](#21-immunosuppression)
    - [22 - Leukemia](#22-leukemia)
    - [23 - Lymphoma](#23-lymphoma)
    - [24 - Metastatic carcinoma](#24-metastatic-carcinoma)
    - [25 - Multiple myeloma](#25-multiple-myeloma)
  - [General conditions](#condition-general-conditions)
    - [26 - Adult Respiratory Distress Syndrome (ARDS)](#26-adult-respiratory-distress-syndrome-ards-)
    - [27 - COPD](#27-copd)
    - [28 - Chronic heart failure](#28-chronic-heart-failure)
    - [29 - Dependence on home ventilator](#29-dependence-on-home-ventilator)
    - [30 - Diabetes mellitus](#30-diabetes-mellitus)
  - [Hospitalization complications](#condition-hospitalization-complications)
    - [31 - Catheter infection](#31-catheter-infection)
    - [32 - Ventilator-associated pneumonia](#32-ventilator-associated-pneumonia)
- [Drug](#drug)
  - [Anticoagulants](#drug-anticoagulants)
    - [33 - Acenocoumarol](#33-acenocoumarol)
    - [34 - Apixaban](#34-apixaban)
    - [35 - Argatroban](#35-argatroban)
    - [36 - Bemiparin](#36-bemiparin)
    - [37 - Betrixaban](#37-betrixaban)
    - [38 - Bivalirudin](#38-bivalirudin)
    - [39 - Clorindione](#39-clorindione)
    - [40 - Dabigatran Etexilate](#40-dabigatran-etexilate)
    - [41 - Dalteparin](#41-dalteparin)
    - [42 - Danaparoid](#42-danaparoid)
    - [43 - Desirudin](#43-desirudin)
    - [44 - Dicumarol](#44-dicumarol)
    - [45 - Edoxaban](#45-edoxaban)
    - [46 - Enoxaparin](#46-enoxaparin)
    - [47 - Fluindione](#47-fluindione)
    - [48 - Fondaparinux](#48-fondaparinux)
    - [49 - Heparin](#49-heparin)
    - [50 - Lepirudin](#50-lepirudin)
    - [51 - Melagatran](#51-melagatran)
    - [52 - Nadroparin](#52-nadroparin)
    - [53 - Parnaparin](#53-parnaparin)
    - [54 - Phenindione](#54-phenindione)
    - [55 - Phenprocoumon](#55-phenprocoumon)
    - [56 - Reviparin](#56-reviparin)
    - [57 - Rivaroxaban](#57-rivaroxaban)
    - [58 - Sulodexide](#58-sulodexide)
    - [59 - Tinzaparin](#59-tinzaparin)
    - [60 - Tioclomarol](#60-tioclomarol)
    - [61 - Warfarin](#61-warfarin)
    - [62 - Ximelagatran](#62-ximelagatran)
  - [Antimicrobials](#drug-antimicrobials)
    - [63 - Amikacin](#63-amikacin)
    - [64 - Amoxicillin](#64-amoxicillin)
    - [66 - Amphotericin B](#66-amphotericin-b)
    - [67 - Ampicillin](#67-ampicillin)
    - [69 - Aztreonam](#69-aztreonam)
    - [70 - Caspofungin](#70-caspofungin)
    - [71 - Cefazolin](#71-cefazolin)
    - [72 - Cefiderocol](#72-cefiderocol)
    - [73 - Cefotaxime](#73-cefotaxime)
    - [74 - Cefoxitin](#74-cefoxitin)
    - [75 - Ceftazidime](#75-ceftazidime)
    - [76 - Ceftriaxone](#76-ceftriaxone)
    - [77 - Cefuroxime](#77-cefuroxime)
    - [78 - Clarithromycin](#78-clarithromycin)
    - [79 - Clavulanate](#79-clavulanate)
    - [80 - Clindamycin](#80-clindamycin)
    - [81 - Colistin](#81-colistin)
    - [82 - Daptomycin](#82-daptomycin)
    - [83 - Doxycycline](#83-doxycycline)
    - [84 - Eryhromycin](#84-eryhromycin)
    - [85 - Floxacillin](#85-floxacillin)
    - [86 - Fluconazole](#86-fluconazole)
    - [87 - Fosfomycin](#87-fosfomycin)
    - [88 - Gentamicin](#88-gentamicin)
    - [89 - Imipenem](#89-imipenem)
    - [90 - Itraconazole](#90-itraconazole)
    - [91 - Ketoconazole](#91-ketoconazole)
    - [92 - Levofloxacin](#92-levofloxacin)
    - [93 - Linezolid](#93-linezolid)
    - [94 - Meropenem](#94-meropenem)
    - [95 - Metronidazole](#95-metronidazole)
    - [96 - Mupirocin](#96-mupirocin)
    - [97 - Norfloxacin](#97-norfloxacin)
    - [98 - Penicillin](#98-penicillin)
    - [99 - Piperacillin](#99-piperacillin)
    - [101 - Posaconazole](#101-posaconazole)
    - [102 - Rifampicin](#102-rifampicin)
    - [335 - Sulbactam](#335-sulbactam)
    - [103 - Sulfamethoxazole](#103-sulfamethoxazole)
    - [105 - Tazobactam](#105-tazobactam)
    - [106 - Teicoplanin](#106-teicoplanin)
    - [107 - Tetracycline](#107-tetracycline)
    - [108 - Tigecycline](#108-tigecycline)
    - [109 - Tobramycin](#109-tobramycin)
    - [110 - Trimethoprim](#110-trimethoprim)
    - [111 - Vancomycin](#111-vancomycin)
    - [112 - Voriconazole](#112-voriconazole)
  - [Corticosteroids](#drug-corticosteroids)
    - [113 - Betamethasone](#113-betamethasone)
    - [114 - Clobetasol](#114-clobetasol)
    - [115 - Cortisone](#115-cortisone)
    - [116 - Dexamethasone](#116-dexamethasone)
    - [117 - Fludrocortisone](#117-fludrocortisone)
    - [118 - Hydrocortisone](#118-hydrocortisone)
    - [119 - Methylprednisolone](#119-methylprednisolone)
    - [120 - Prednisolone](#120-prednisolone)
    - [121 - Prednisone](#121-prednisone)
  - [Other drugs](#drug-other-drugs)
    - [122 - Insulin Aspart](#122-insulin-aspart)
    - [123 - Insulin Aspart, Human](#123-insulin-aspart-human)
    - [124 - Insulin Degludec](#124-insulin-degludec)
    - [125 - Insulin Detemir](#125-insulin-detemir)
    - [126 - Insulin Glargine](#126-insulin-glargine)
    - [127 - Insulin Glulisine, Human](#127-insulin-glulisine-human)
  - [Sedative drugs](#drug-sedative-drugs)
    - [128 - Alfentanil](#128-alfentanil)
    - [129 - Clonidine](#129-clonidine)
    - [130 - Dexmedetomidine](#130-dexmedetomidine)
    - [131 - Etomidate](#131-etomidate)
    - [132 - Fentanyl](#132-fentanyl)
    - [133 - Ketamine](#133-ketamine)
    - [134 - Midazolam](#134-midazolam)
    - [135 - Morphine](#135-morphine)
    - [136 - Propofol](#136-propofol)
    - [137 - Remifentanil](#137-remifentanil)
    - [138 - Sufentanil](#138-sufentanil)
    - [139 - Thiopenthal](#139-thiopenthal)
  - [Vasoactive drugs](#drug-vasoactive-drugs)
    - [140 - Dobutamine](#140-dobutamine)
    - [141 - Dopamine](#141-dopamine)
    - [142 - Epinephrine](#142-epinephrine)
    - [143 - Levosimendan](#143-levosimendan)
    - [144 - Milrinone](#144-milrinone)
    - [145 - Norepinephrine](#145-norepinephrine)
    - [146 - Phenylephrine](#146-phenylephrine)
    - [147 - Vasopressin](#147-vasopressin)
- [Labs](#labs)
  - [Arterial blood gases](#labs-arterial-blood-gases)
    - [148 - ABG Ammonia](#148-abg-ammonia)
    - [149 - ABG Base excess](#149-abg-base-excess)
    - [150 - ABG Hematocrit](#150-abg-hematocrit)
    - [151 - ABG PaCO2](#151-abg-paco2)
    - [152 - ABG PaO2](#152-abg-pao2)
    - [153 - ABG SaO2](#153-abg-sao2)
    - [154 - ABG bicarbonate](#154-abg-bicarbonate)
    - [155 - ABG calcium ionized](#155-abg-calcium-ionized)
    - [156 - ABG chloride](#156-abg-chloride)
    - [157 - ABG glucose](#157-abg-glucose)
    - [158 - ABG hemoglobin](#158-abg-hemoglobin)
    - [159 - ABG lactate](#159-abg-lactate)
    - [160 - ABG pH](#160-abg-ph)
    - [161 - ABG potassium](#161-abg-potassium)
    - [162 - ABG sodium](#162-abg-sodium)
    - [336 - Oxygen saturation](#336-oxygen-saturation)
  - [Blood specimen type](#labs-blood-specimen-type)
    - [163 - Arterial blood specimen](#163-arterial-blood-specimen)
    - [164 - Peripheral blood specimen](#164-peripheral-blood-specimen)
    - [165 - Venous blood specimen](#165-venous-blood-specimen)
    - [166 - Whole blood specimen](#166-whole-blood-specimen)
  - [Hemostasis](#labs-hemostasis)
    - [167 - Coagulation factor V](#167-coagulation-factor-v)
    - [168 - Fibrin D-dimer](#168-fibrin-d-dimer)
    - [169 - Fibrinogen](#169-fibrinogen)
    - [170 - INR](#170-inr)
    - [171 - Prothrombin time](#171-prothrombin-time)
    - [172 - aPTT](#172-aptt)
  - [Liver test](#labs-liver-test)
    - [173 - ALP](#173-alp)
    - [174 - ALT](#174-alt)
    - [175 - AST](#175-ast)
    - [176 - Ammonia](#176-ammonia)
    - [177 - Conjugated bilirubin](#177-conjugated-bilirubin)
    - [178 - GGT](#178-ggt)
    - [179 - Indirect bilirubin](#179-indirect-bilirubin)
    - [180 - Total bilirubin](#180-total-bilirubin)
  - [Other labs](#labs-other-labs)
    - [181 - 1,3 beta glucan](#181-1-3-beta-glucan)
    - [182 - BNP](#182-bnp)
    - [183 - CRP](#183-crp)
    - [184 - HbA1c](#184-hba1c)
    - [185 - Interleukin 6](#185-interleukin-6)
    - [186 - Lipase](#186-lipase)
    - [187 - NT-proBNP](#187-nt-probnp)
    - [188 - PCT](#188-pct)
    - [189 - Troponin T](#189-troponin-t)
  - [Plasma blood count](#labs-plasma-blood-count)
    - [190 - Hematocrit](#190-hematocrit)
    - [191 - Plasma basophils](#191-plasma-basophils)
    - [192 - Plasma eosinophils](#192-plasma-eosinophils)
    - [193 - Plasma erythrocytes](#193-plasma-erythrocytes)
    - [194 - Plasma hemoglobin](#194-plasma-hemoglobin)
    - [195 - Plasma leukocytes](#195-plasma-leukocytes)
    - [196 - Plasma lymphocytes](#196-plasma-lymphocytes)
    - [197 - Plasma monocytes](#197-plasma-monocytes)
    - [198 - Plasma neutrophils](#198-plasma-neutrophils)
    - [199 - Plasma platelets](#199-plasma-platelets)
    - [200 - Plasma reticulocytes](#200-plasma-reticulocytes)
  - [Plasma ionogram](#labs-plasma-ionogram)
    - [201 - Plasma LDH](#201-plasma-ldh)
    - [202 - Plasma albumin](#202-plasma-albumin)
    - [203 - Plasma bicarbonate](#203-plasma-bicarbonate)
    - [204 - Plasma calcium](#204-plasma-calcium)
    - [205 - Plasma chloride](#205-plasma-chloride)
    - [206 - Plasma creatinine](#206-plasma-creatinine)
    - [207 - Plasma glucose](#207-plasma-glucose)
    - [208 - Plasma lactate](#208-plasma-lactate)
    - [209 - Plasma magnesium](#209-plasma-magnesium)
    - [210 - Plasma phosphate](#210-plasma-phosphate)
    - [211 - Plasma potassium](#211-plasma-potassium)
    - [212 - Plasma sodium](#212-plasma-sodium)
    - [213 - Plasma urea](#213-plasma-urea)
  - [Urinary ionogram](#labs-urinary-ionogram)
    - [214 - Urinary bicarbonate](#214-urinary-bicarbonate)
    - [215 - Urinary calcium](#215-urinary-calcium)
    - [216 - Urinary chloride](#216-urinary-chloride)
    - [217 - Urinary creatinine](#217-urinary-creatinine)
    - [218 - Urinary glucose](#218-urinary-glucose)
    - [219 - Urinary phosphate](#219-urinary-phosphate)
    - [220 - Urinary potassium](#220-urinary-potassium)
    - [221 - Urinary sodium](#221-urinary-sodium)
    - [222 - Urinary urea](#222-urinary-urea)
- [Microbiology](#microbiology)
  - [Microorganism](#microbiology-microorganism)
    - [223 - Actinomyces neuii subspecies neuii](#223-actinomyces-neuii-subspecies-neuii)
    - [224 - Bacillus cereus group](#224-bacillus-cereus-group)
    - [225 - Bacillus mycoides](#225-bacillus-mycoides)
    - [226 - Citrobacter freundii complex](#226-citrobacter-freundii-complex)
    - [227 - Citrobacter koseri](#227-citrobacter-koseri)
    - [228 - Corynebacterium amycolatum](#228-corynebacterium-amycolatum)
    - [229 - Corynebacterium species](#229-corynebacterium-species)
    - [230 - Corynebacterium striatum](#230-corynebacterium-striatum)
    - [231 - Dermabacter hominis](#231-dermabacter-hominis)
    - [232 - Enterobacter aerogenes](#232-enterobacter-aerogenes)
    - [233 - Enterobacter cloacae](#233-enterobacter-cloacae)
    - [234 - Enterobacter cloacae complex](#234-enterobacter-cloacae-complex)
    - [235 - Enterococcus faecalis](#235-enterococcus-faecalis)
    - [236 - Enterococcus faecium](#236-enterococcus-faecium)
    - [237 - Escherichia coli](#237-escherichia-coli)
    - [238 - Gram-negative bacteria](#238-gram-negative-bacteria)
    - [239 - Gram-positive bacteria](#239-gram-positive-bacteria)
    - [240 - Gram-positive cocci in clusters](#240-gram-positive-cocci-in-clusters)
    - [241 - Granulicatella adiacens](#241-granulicatella-adiacens)
    - [242 - Klebsiella oxytoca](#242-klebsiella-oxytoca)
    - [243 - Klebsiella pneumoniae](#243-klebsiella-pneumoniae)
    - [244 - Klebsiella variicola](#244-klebsiella-variicola)
    - [245 - Lysinibacillus](#245-lysinibacillus)
    - [246 - Micrococcus luteus](#246-micrococcus-luteus)
    - [247 - Paenibacillus pabuli](#247-paenibacillus-pabuli)
    - [248 - Pantoea agglomerans](#248-pantoea-agglomerans)
    - [249 - Pantoea septica](#249-pantoea-septica)
    - [250 - Pseudomonas aeruginosa](#250-pseudomonas-aeruginosa)
    - [251 - Raoultella ornithinolytica](#251-raoultella-ornithinolytica)
    - [252 - Rothia dentocariosa](#252-rothia-dentocariosa)
    - [253 - Rothia mucilaginosa](#253-rothia-mucilaginosa)
    - [254 - Serratia](#254-serratia)
    - [255 - Serratia liquefaciens](#255-serratia-liquefaciens)
    - [256 - Serratia marcescens](#256-serratia-marcescens)
    - [257 - Staphylococcus aureus](#257-staphylococcus-aureus)
    - [258 - Staphylococcus capitis](#258-staphylococcus-capitis)
    - [259 - Staphylococcus epidermidis](#259-staphylococcus-epidermidis)
    - [260 - Staphylococcus haemolyticus](#260-staphylococcus-haemolyticus)
    - [261 - Staphylococcus hominis](#261-staphylococcus-hominis)
    - [262 - Staphylococcus warneri](#262-staphylococcus-warneri)
    - [263 - Streptococcus agalactiae (Group B streptococcus)](#263-streptococcus-agalactiae-group-b-streptococcus-)
    - [264 - Streptococcus anginosus](#264-streptococcus-anginosus)
    - [265 - Streptococcus dysgalactiae](#265-streptococcus-dysgalactiae)
    - [266 - Streptococcus mitis (Streptococcus mitis group)](#266-streptococcus-mitis-streptococcus-mitis-group-)
    - [267 - Streptococcus mitis group](#267-streptococcus-mitis-group)
    - [268 - Streptococcus vestibularis](#268-streptococcus-vestibularis)
    - [269 - Streptococcus, viridans group](#269-streptococcus-viridans-group)
  - [Specimen](#microbiology-specimen)
    - [270 - Blood culture](#270-blood-culture)
- [Other](#other)
  - [Demographic data](#other-demographic-data)
    - [271 - Birth datetime](#271-birth-datetime)
    - [272 - Birth height](#272-birth-height)
    - [273 - Birth weight](#273-birth-weight)
    - [274 - Body height](#274-body-height)
    - [275 - Body weight](#275-body-weight)
    - [276 - Death datetime](#276-death-datetime)
    - [277 - Gender](#277-gender)
    - [278 - Gestational age](#278-gestational-age)
    - [279 - Gestational age at birth](#279-gestational-age-at-birth)
    - [280 - Hospital admission datetime](#280-hospital-admission-datetime)
    - [281 - Hospital discharge datetime](#281-hospital-discharge-datetime)
    - [282 - ICU admission datetime](#282-icu-admission-datetime)
    - [283 - ICU discharge datetime](#283-icu-discharge-datetime)
    - [284 - Ideal body weight](#284-ideal-body-weight)
  - [Nutrition](#other-nutrition)
    - [285 - Contraindication to enteral feeding](#285-contraindication-to-enteral-feeding)
    - [286 - Energy intake](#286-energy-intake)
    - [287 - Energy requirement](#287-energy-requirement)
  - [Other](#other-other)
    - [288 - Advance care plan agreed](#288-advance-care-plan-agreed)
    - [289 - Consultation with patient](#289-consultation-with-patient)
    - [290 - Surrogate decision maker documented](#290-surrogate-decision-maker-documented)
- [Procedure](#procedure)
  - [Catheter](#procedure-catheter)
    - [291 - Central venous catheter](#291-central-venous-catheter)
  - [ECMO](#procedure-ecmo)
    - [292 - ECMO](#292-ecmo)
  - [Nutrition](#procedure-nutrition)
    - [293 - Enteral feeding](#293-enteral-feeding)
  - [Patient position](#procedure-patient-position)
    - [294 - Mobilization](#294-mobilization)
    - [295 - Order to not mobilize](#295-order-to-not-mobilize)
    - [296 - Prone positioning](#296-prone-positioning)
  - [Plasmapheresis](#procedure-plasmapheresis)
    - [297 - Plasmapheresis](#297-plasmapheresis)
  - [Renal replacement therapy](#procedure-renal-replacement-therapy)
    - [298 - Renal replacement therapy](#298-renal-replacement-therapy)
- [Ventilation](#ventilation)
  - [Airway device](#ventilation-airway-device)
    - [338 - Airway device change](#338-airway-device-change)
    - [299 - Endotracheal tube](#299-endotracheal-tube)
    - [337 - Endotracheal tube diameter](#337-endotracheal-tube-diameter)
    - [300 - Tracheostomy tube](#300-tracheostomy-tube)
  - [Oxygenation](#ventilation-oxygenation)
    - [301 - Fraction of inspired oxygen (FiO2)](#301-fraction-of-inspired-oxygen-fio2-)
    - [302 - Oxygen flow rate](#302-oxygen-flow-rate)
  - [Ventilation device](#ventilation-ventilation-device)
    - [305 - Endotracheal intubation](#305-endotracheal-intubation)
    - [303 - Extubation](#303-extubation)
    - [304 - Humidification Therapy](#304-humidification-therapy)
    - [306 - Invasive mechanical ventilation](#306-invasive-mechanical-ventilation)
    - [307 - Non-invasive ventilation](#307-non-invasive-ventilation)
    - [308 - Oxygen device](#308-oxygen-device)
    - [309 - Trial of spontaneous breathing](#309-trial-of-spontaneous-breathing)
  - [Ventilation parameters](#ventilation-ventilation-parameters)
    - [310 - Breath cycle timing](#310-breath-cycle-timing)
    - [311 - Carbon dioxide production](#311-carbon-dioxide-production)
    - [312 - End tidal carbone dioxyde concentration](#312-end-tidal-carbone-dioxyde-concentration)
    - [313 - Horowitz index](#313-horowitz-index)
    - [314 - Inspiratory pressure setting](#314-inspiratory-pressure-setting)
    - [315 - Lung compliance](#315-lung-compliance)
    - [316 - Mean airway pressure](#316-mean-airway-pressure)
    - [317 - Minute volume](#317-minute-volume)
    - [319 - Peak inspiration pressure](#319-peak-inspiration-pressure)
    - [320 - Plateau pressure](#320-plateau-pressure)
    - [318 - Positive End-Expiratory Pressure (PEEP)](#318-positive-end-expiratory-pressure-peep-)
    - [321 - Respiratory rate](#321-respiratory-rate)
    - [322 - Tidal volume](#322-tidal-volume)
- [Vitals](#vitals)
  - [Haemodynamics](#vitals-haemodynamics)
    - [324 - Cardiac output](#324-cardiac-output)
    - [325 - Central venous pressure](#325-central-venous-pressure)
    - [326 - Diastolic arterial pressure](#326-diastolic-arterial-pressure)
    - [327 - Heart rate](#327-heart-rate)
    - [328 - Mean arterial pressure](#328-mean-arterial-pressure)
    - [329 - Systolic arterial pressure](#329-systolic-arterial-pressure)
  - [Other vitals](#vitals-other-vitals)
    - [330 - Body temperature](#330-body-temperature)
    - [331 - Urine output](#331-urine-output)
  - [Ventilatory](#vitals-ventilatory)
    - [333 - Oxygen saturation (SpO2)](#333-oxygen-saturation-spo2-)
    - [332 - Respiratory rate](#332-respiratory-rate)

---

## Concept Sets by Category

<a id="clinical-observation"></a>
### Clinical observation

<a id="clinical-observation-neurological-assessment"></a>
#### Neurological assessment

<a id="1-3-minute-diagnostic-interview-for-cam-defined-delirium-3d-cam-score"></a>
- **3-minute Diagnostic Interview for CAM-defined Delirium (3D-CAM) score** (ID: 1, File: 1.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:13  | Modified: 2026-02-12 09:52:13 

<a id="2-4-a-s-test-for-delirium-screening-score"></a>
- **4 A's Test for Delirium Screening score** (ID: 2, File: 2.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:53  | Modified: 2026-02-12 09:53:53 

<a id="3-behavior-pain-scale"></a>
- **Behavior pain scale** (ID: 3, File: 3.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:11  | Modified: 2026-02-12 09:57:11 

<a id="4-confusion-assessment-method-for-the-intensive-care-unit-cam-icu-score"></a>
- **Confusion Assessment Method for the Intensive Care Unit (CAM-ICU) score** (ID: 4, File: 4.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:25  | Modified: 2026-02-12 09:57:25 

<a id="5-delirium-detection-score-dds-score"></a>
- **Delirium Detection Score (DDS) score** (ID: 5, File: 5.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:32  | Modified: 2026-02-12 09:57:32 

<a id="6-delirium-observation-scale-dos-score"></a>
- **Delirium Observation Scale (DOS) score** (ID: 6, File: 6.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:35  | Modified: 2026-02-12 09:57:35 

<a id="7-delirium-rating-scale-drs-score"></a>
- **Delirium Rating Scale (DRS) score** (ID: 7, File: 7.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:46  | Modified: 2026-02-12 10:20:22 

<a id="8-glasgow-coma-scale"></a>
- **Glasgow coma scale** (ID: 8, File: 8.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:56  | Modified: 2026-02-12 09:57:56 

<a id="9-intensive-care-delirium-screening-checklist-icdsc-score"></a>
- **Intensive Care Delirium Screening Checklist (ICDSC) score** (ID: 9, File: 9.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:08  | Modified: 2026-02-12 09:58:08 

<a id="10-numeric-pain-rating-scale"></a>
- **Numeric Pain Rating Scale** (ID: 10, File: 10.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:13  | Modified: 2026-02-12 09:52:13 

<a id="11-nursing-delirium-screening-scale-nu-desc-score"></a>
- **Nursing Delirium Screening Scale (NU-DESC) score** (ID: 11, File: 11.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:19  | Modified: 2026-02-12 09:52:19 

<a id="12-pupillary-response"></a>
- **Pupillary response** (ID: 12, File: 12.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:53  | Modified: 2026-02-12 09:52:53 

<a id="13-ramsay-sedation-scale"></a>
- **Ramsay sedation scale** (ID: 13, File: 13.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:05  | Modified: 2026-02-12 09:53:05 

<a id="14-richmond-agitation-sedation-scale"></a>
- **Richmond agitation-sedation scale** (ID: 14, File: 14.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:16  | Modified: 2026-02-12 09:53:17 

<a id="15-visual-analog-pain-scale"></a>
- **Visual analog pain scale** (ID: 15, File: 15.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:41  | Modified: 2026-02-12 09:53:41 

<a id="condition"></a>
### Condition

<a id="condition-apache-iv-chronic-health-conditions"></a>
#### APACHE IV - Chronic health conditions

<a id="16-aids"></a>
- **AIDS** (ID: 16, File: 16.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 74
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:43  | Modified: 2026-02-12 09:53:45 

<a id="17-alcoholic-liver-disease"></a>
- **Alcoholic liver disease** (ID: 17, File: 17.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:46  | Modified: 2026-02-12 09:53:46 

<a id="18-chronic-kidney-disease"></a>
- **Chronic kidney disease** (ID: 18, File: 18.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:49  | Modified: 2026-02-12 09:53:49 

<a id="19-cirrhosis-of-liver"></a>
- **Cirrhosis of liver** (ID: 19, File: 19.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:51  | Modified: 2026-02-12 09:53:51 

<a id="20-hepatic-failure-not-elsewhere-classified"></a>
- **Hepatic failure, not elsewhere classified** (ID: 20, File: 20.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:53  | Modified: 2026-02-12 09:53:53 

<a id="21-immunosuppression"></a>
- **Immunosuppression** (ID: 21, File: 21.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:55  | Modified: 2026-02-12 09:53:56 

<a id="22-leukemia"></a>
- **Leukemia** (ID: 22, File: 22.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:57  | Modified: 2026-02-12 09:53:57 

<a id="23-lymphoma"></a>
- **Lymphoma** (ID: 23, File: 23.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:02  | Modified: 2026-02-12 09:54:02 

<a id="24-metastatic-carcinoma"></a>
- **Metastatic carcinoma** (ID: 24, File: 24.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:53  | Modified: 2026-02-12 09:56:53 

<a id="25-multiple-myeloma"></a>
- **Multiple myeloma** (ID: 25, File: 25.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:55  | Modified: 2026-02-12 09:56:55 

<a id="condition-general-conditions"></a>
#### General conditions

<a id="26-adult-respiratory-distress-syndrome-ards-"></a>
- **Adult Respiratory Distress Syndrome (ARDS)** (ID: 26, File: 26.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:58  | Modified: 2026-02-12 09:56:58 

<a id="27-copd"></a>
- **COPD** (ID: 27, File: 27.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:01  | Modified: 2026-02-12 09:57:01 

<a id="28-chronic-heart-failure"></a>
- **Chronic heart failure** (ID: 28, File: 28.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:03  | Modified: 2026-02-12 09:57:03 

<a id="29-dependence-on-home-ventilator"></a>
- **Dependence on home ventilator** (ID: 29, File: 29.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:05  | Modified: 2026-02-12 09:57:05 

<a id="30-diabetes-mellitus"></a>
- **Diabetes mellitus** (ID: 30, File: 30.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:11  | Modified: 2026-02-12 09:57:11 

<a id="condition-hospitalization-complications"></a>
#### Hospitalization complications

<a id="31-catheter-infection"></a>
- **Catheter infection** (ID: 31, File: 31.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:14  | Modified: 2026-02-12 09:57:14 

<a id="32-ventilator-associated-pneumonia"></a>
- **Ventilator-associated pneumonia** (ID: 32, File: 32.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:16  | Modified: 2026-02-12 09:57:16 

<a id="drug"></a>
### Drug

<a id="drug-anticoagulants"></a>
#### Anticoagulants

<a id="33-acenocoumarol"></a>
- **Acenocoumarol** (ID: 33, File: 33.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:20  | Modified: 2026-02-12 09:57:20 

<a id="34-apixaban"></a>
- **Apixaban** (ID: 34, File: 34.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:24  | Modified: 2026-02-12 09:57:24 

<a id="35-argatroban"></a>
- **Argatroban** (ID: 35, File: 35.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:24  | Modified: 2026-02-12 09:57:25 

<a id="36-bemiparin"></a>
- **Bemiparin** (ID: 36, File: 36.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 10
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:25  | Modified: 2026-02-12 09:57:25 

<a id="37-betrixaban"></a>
- **Betrixaban** (ID: 37, File: 37.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:25  | Modified: 2026-02-12 09:57:25 

<a id="38-bivalirudin"></a>
- **Bivalirudin** (ID: 38, File: 38.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:25  | Modified: 2026-02-12 09:57:25 

<a id="39-clorindione"></a>
- **Clorindione** (ID: 39, File: 39.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:25  | Modified: 2026-02-12 09:57:25 

<a id="40-dabigatran-etexilate"></a>
- **Dabigatran Etexilate** (ID: 40, File: 40.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:25  | Modified: 2026-02-12 09:57:26 

<a id="41-dalteparin"></a>
- **Dalteparin** (ID: 41, File: 41.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 47
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:26  | Modified: 2026-02-12 09:57:26 

<a id="42-danaparoid"></a>
- **Danaparoid** (ID: 42, File: 42.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:26  | Modified: 2026-02-12 09:57:27 

<a id="43-desirudin"></a>
- **Desirudin** (ID: 43, File: 43.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:27  | Modified: 2026-02-12 09:57:27 

<a id="44-dicumarol"></a>
- **Dicumarol** (ID: 44, File: 44.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:27  | Modified: 2026-02-12 09:57:27 

<a id="45-edoxaban"></a>
- **Edoxaban** (ID: 45, File: 45.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:27  | Modified: 2026-02-12 09:57:27 

<a id="46-enoxaparin"></a>
- **Enoxaparin** (ID: 46, File: 46.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 25
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:27  | Modified: 2026-02-12 09:57:28 

<a id="47-fluindione"></a>
- **Fluindione** (ID: 47, File: 47.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:28  | Modified: 2026-02-12 09:57:28 

<a id="48-fondaparinux"></a>
- **Fondaparinux** (ID: 48, File: 48.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:28  | Modified: 2026-02-12 09:57:28 

<a id="49-heparin"></a>
- **Heparin** (ID: 49, File: 49.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 303
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:28  | Modified: 2026-02-12 09:57:32 

<a id="50-lepirudin"></a>
- **Lepirudin** (ID: 50, File: 50.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:32  | Modified: 2026-02-12 09:57:32 

<a id="51-melagatran"></a>
- **Melagatran** (ID: 51, File: 51.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:32  | Modified: 2026-02-12 09:57:33 

<a id="52-nadroparin"></a>
- **Nadroparin** (ID: 52, File: 52.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 21
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:33  | Modified: 2026-02-12 09:57:33 

<a id="53-parnaparin"></a>
- **Parnaparin** (ID: 53, File: 53.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:33  | Modified: 2026-02-12 09:57:33 

<a id="54-phenindione"></a>
- **Phenindione** (ID: 54, File: 54.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:33  | Modified: 2026-02-12 09:57:33 

<a id="55-phenprocoumon"></a>
- **Phenprocoumon** (ID: 55, File: 55.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:33  | Modified: 2026-02-12 09:57:34 

<a id="56-reviparin"></a>
- **Reviparin** (ID: 56, File: 56.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 23
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:34  | Modified: 2026-02-12 09:57:34 

<a id="57-rivaroxaban"></a>
- **Rivaroxaban** (ID: 57, File: 57.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 13
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:34  | Modified: 2026-02-12 09:57:34 

<a id="58-sulodexide"></a>
- **Sulodexide** (ID: 58, File: 58.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:34  | Modified: 2026-02-12 09:57:34 

<a id="59-tinzaparin"></a>
- **Tinzaparin** (ID: 59, File: 59.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 26
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:34  | Modified: 2026-02-12 09:57:35 

<a id="60-tioclomarol"></a>
- **Tioclomarol** (ID: 60, File: 60.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:35  | Modified: 2026-02-12 09:57:35 

<a id="61-warfarin"></a>
- **Warfarin** (ID: 61, File: 61.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 35
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:35  | Modified: 2026-02-12 09:57:36 

<a id="62-ximelagatran"></a>
- **Ximelagatran** (ID: 62, File: 62.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:36  | Modified: 2026-02-12 09:57:36 

<a id="drug-antimicrobials"></a>
#### Antimicrobials

<a id="63-amikacin"></a>
- **Amikacin** (ID: 63, File: 63.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 52
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:36  | Modified: 2026-02-12 09:57:37 

<a id="64-amoxicillin"></a>
- **Amoxicillin** (ID: 64, File: 64.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 382
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:37  | Modified: 2026-02-12 09:57:42 

<a id="66-amphotericin-b"></a>
- **Amphotericin B** (ID: 66, File: 66.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 76
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:42  | Modified: 2026-02-12 09:57:43 

<a id="67-ampicillin"></a>
- **Ampicillin** (ID: 67, File: 67.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 177
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:43  | Modified: 2026-02-12 09:57:46 

<a id="69-aztreonam"></a>
- **Aztreonam** (ID: 69, File: 69.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 24
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:46  | Modified: 2026-02-12 09:57:46 

<a id="70-caspofungin"></a>
- **Caspofungin** (ID: 70, File: 70.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 12
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:46  | Modified: 2026-02-12 09:57:47 

<a id="71-cefazolin"></a>
- **Cefazolin** (ID: 71, File: 71.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 47
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:47  | Modified: 2026-02-12 09:57:47 

<a id="72-cefiderocol"></a>
- **Cefiderocol** (ID: 72, File: 72.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:47  | Modified: 2026-02-12 09:57:48 

<a id="73-cefotaxime"></a>
- **Cefotaxime** (ID: 73, File: 73.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 36
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:48  | Modified: 2026-02-12 09:57:48 

<a id="74-cefoxitin"></a>
- **Cefoxitin** (ID: 74, File: 74.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 12
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:48  | Modified: 2026-02-12 09:57:48 

<a id="75-ceftazidime"></a>
- **Ceftazidime** (ID: 75, File: 75.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 68
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:48  | Modified: 2026-02-12 09:57:49 

<a id="76-ceftriaxone"></a>
- **Ceftriaxone** (ID: 76, File: 76.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 64
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:49  | Modified: 2026-02-12 09:57:50 

<a id="77-cefuroxime"></a>
- **Cefuroxime** (ID: 77, File: 77.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 105
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:50  | Modified: 2026-02-12 09:57:52 

<a id="78-clarithromycin"></a>
- **Clarithromycin** (ID: 78, File: 78.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 85
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:52  | Modified: 2026-02-12 09:57:53 

<a id="79-clavulanate"></a>
- **Clavulanate** (ID: 79, File: 79.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 200
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:53  | Modified: 2026-02-12 09:57:56 

<a id="80-clindamycin"></a>
- **Clindamycin** (ID: 80, File: 80.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 133
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:56  | Modified: 2026-02-12 09:57:58 

<a id="81-colistin"></a>
- **Colistin** (ID: 81, File: 81.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 83
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:58  | Modified: 2026-02-12 09:57:59 

<a id="82-daptomycin"></a>
- **Daptomycin** (ID: 82, File: 82.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 11
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:59  | Modified: 2026-02-12 09:58:00 

<a id="83-doxycycline"></a>
- **Doxycycline** (ID: 83, File: 83.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 85
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:00  | Modified: 2026-02-12 09:58:01 

<a id="84-eryhromycin"></a>
- **Eryhromycin** (ID: 84, File: 84.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:01  | Modified: 2026-02-12 09:58:01 

<a id="85-floxacillin"></a>
- **Floxacillin** (ID: 85, File: 85.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 60
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:01  | Modified: 2026-02-12 09:58:02 

<a id="86-fluconazole"></a>
- **Fluconazole** (ID: 86, File: 86.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 37
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:02  | Modified: 2026-02-12 09:58:03 

<a id="87-fosfomycin"></a>
- **Fosfomycin** (ID: 87, File: 87.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 56
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:03  | Modified: 2026-02-12 09:58:04 

<a id="88-gentamicin"></a>
- **Gentamicin** (ID: 88, File: 88.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 244
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:04  | Modified: 2026-02-12 09:58:07 

<a id="89-imipenem"></a>
- **Imipenem** (ID: 89, File: 89.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 29
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:07  | Modified: 2026-02-12 09:58:07 

<a id="90-itraconazole"></a>
- **Itraconazole** (ID: 90, File: 90.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 15
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:08  | Modified: 2026-02-12 09:58:08 

<a id="91-ketoconazole"></a>
- **Ketoconazole** (ID: 91, File: 91.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 103
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:08  | Modified: 2026-02-12 09:58:09 

<a id="92-levofloxacin"></a>
- **Levofloxacin** (ID: 92, File: 92.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 53
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:09  | Modified: 2026-02-12 09:58:10 

<a id="93-linezolid"></a>
- **Linezolid** (ID: 93, File: 93.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 15
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:10  | Modified: 2026-02-12 09:58:11 

<a id="94-meropenem"></a>
- **Meropenem** (ID: 94, File: 94.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 30
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:11  | Modified: 2026-02-12 09:58:11 

<a id="95-metronidazole"></a>
- **Metronidazole** (ID: 95, File: 95.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 157
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:11  | Modified: 2026-02-12 09:58:13 

<a id="96-mupirocin"></a>
- **Mupirocin** (ID: 96, File: 96.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 11
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:13  | Modified: 2026-02-12 09:58:14 

<a id="97-norfloxacin"></a>
- **Norfloxacin** (ID: 97, File: 97.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 29
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:14  | Modified: 2026-02-12 09:58:14 

<a id="98-penicillin"></a>
- **Penicillin** (ID: 98, File: 98.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:14  | Modified: 2026-02-12 09:58:14 

<a id="99-piperacillin"></a>
- **Piperacillin** (ID: 99, File: 99.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 75
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:58:14  | Modified: 2026-02-12 09:58:15 

<a id="101-posaconazole"></a>
- **Posaconazole** (ID: 101, File: 101.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 14
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:13  | Modified: 2026-02-12 09:52:14 

<a id="102-rifampicin"></a>
- **Rifampicin** (ID: 102, File: 102.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:14  | Modified: 2026-02-12 09:52:14 

<a id="335-sulbactam"></a>
- **Sulbactam** (ID: 335, File: 335.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 69
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:22  | Modified: 2026-02-12 09:57:24 

<a id="103-sulfamethoxazole"></a>
- **Sulfamethoxazole** (ID: 103, File: 103.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 74
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:14  | Modified: 2026-02-12 09:52:15 

<a id="105-tazobactam"></a>
- **Tazobactam** (ID: 105, File: 105.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 37
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:15  | Modified: 2026-02-12 09:52:16 

<a id="106-teicoplanin"></a>
- **Teicoplanin** (ID: 106, File: 106.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 31
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:16  | Modified: 2026-02-12 09:52:16 

<a id="107-tetracycline"></a>
- **Tetracycline** (ID: 107, File: 107.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 100
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:16  | Modified: 2026-02-12 09:52:17 

<a id="108-tigecycline"></a>
- **Tigecycline** (ID: 108, File: 108.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 8
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:17  | Modified: 2026-02-12 09:52:18 

<a id="109-tobramycin"></a>
- **Tobramycin** (ID: 109, File: 109.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 70
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:18  | Modified: 2026-02-12 09:52:19 

<a id="110-trimethoprim"></a>
- **Trimethoprim** (ID: 110, File: 110.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 109
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:19  | Modified: 2026-02-12 09:52:21 

<a id="111-vancomycin"></a>
- **Vancomycin** (ID: 111, File: 111.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 80
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:21  | Modified: 2026-02-12 09:52:22 

<a id="112-voriconazole"></a>
- **Voriconazole** (ID: 112, File: 112.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 29
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:22  | Modified: 2026-02-12 09:52:22 

<a id="drug-corticosteroids"></a>
#### Corticosteroids

<a id="113-betamethasone"></a>
- **Betamethasone** (ID: 113, File: 113.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 450
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:22  | Modified: 2026-02-12 09:52:29 

<a id="114-clobetasol"></a>
- **Clobetasol** (ID: 114, File: 114.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 127
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:29  | Modified: 2026-02-12 09:52:31 

<a id="115-cortisone"></a>
- **Cortisone** (ID: 115, File: 115.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 20
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:31  | Modified: 2026-02-12 09:52:32 

<a id="116-dexamethasone"></a>
- **Dexamethasone** (ID: 116, File: 116.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 572
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:32  | Modified: 2026-02-12 09:52:39 

<a id="117-fludrocortisone"></a>
- **Fludrocortisone** (ID: 117, File: 117.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 40
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:39  | Modified: 2026-02-12 09:52:40 

<a id="118-hydrocortisone"></a>
- **Hydrocortisone** (ID: 118, File: 118.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 853
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:40  | Modified: 2026-02-12 09:52:52 

<a id="119-methylprednisolone"></a>
- **Methylprednisolone** (ID: 119, File: 119.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 104
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:52  | Modified: 2026-02-12 09:52:53 

<a id="120-prednisolone"></a>
- **Prednisolone** (ID: 120, File: 120.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 454
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:52:53  | Modified: 2026-02-12 09:53:00 

<a id="121-prednisone"></a>
- **Prednisone** (ID: 121, File: 121.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 51
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:00  | Modified: 2026-02-12 09:53:01 

<a id="drug-other-drugs"></a>
#### Other drugs

<a id="122-insulin-aspart"></a>
- **Insulin Aspart** (ID: 122, File: 122.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 14
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:01  | Modified: 2026-02-12 09:53:01 

<a id="123-insulin-aspart-human"></a>
- **Insulin Aspart, Human** (ID: 123, File: 123.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 26
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:01  | Modified: 2026-02-12 09:53:01 

<a id="124-insulin-degludec"></a>
- **Insulin Degludec** (ID: 124, File: 124.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 19
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:01  | Modified: 2026-02-12 09:53:02 

<a id="125-insulin-detemir"></a>
- **Insulin Detemir** (ID: 125, File: 125.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 11
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:02  | Modified: 2026-02-12 09:53:02 

<a id="126-insulin-glargine"></a>
- **Insulin Glargine** (ID: 126, File: 126.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 38
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:02  | Modified: 2026-02-12 09:53:03 

<a id="127-insulin-glulisine-human"></a>
- **Insulin Glulisine, Human** (ID: 127, File: 127.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 13
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:03  | Modified: 2026-02-12 09:53:03 

<a id="drug-sedative-drugs"></a>
#### Sedative drugs

<a id="128-alfentanil"></a>
- **Alfentanil** (ID: 128, File: 128.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:03  | Modified: 2026-02-12 09:53:03 

<a id="129-clonidine"></a>
- **Clonidine** (ID: 129, File: 129.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 92
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:04  | Modified: 2026-02-12 09:53:05 

<a id="130-dexmedetomidine"></a>
- **Dexmedetomidine** (ID: 130, File: 130.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 13
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:05  | Modified: 2026-02-12 09:53:05 

<a id="131-etomidate"></a>
- **Etomidate** (ID: 131, File: 131.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:05  | Modified: 2026-02-12 09:53:06 

<a id="132-fentanyl"></a>
- **Fentanyl** (ID: 132, File: 132.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 237
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:06  | Modified: 2026-02-12 09:53:09 

<a id="133-ketamine"></a>
- **Ketamine** (ID: 133, File: 133.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 57
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:09  | Modified: 2026-02-12 09:53:10 

<a id="134-midazolam"></a>
- **Midazolam** (ID: 134, File: 134.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 64
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:10  | Modified: 2026-02-12 09:53:11 

<a id="135-morphine"></a>
- **Morphine** (ID: 135, File: 135.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 262
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:11  | Modified: 2026-02-12 09:53:15 

<a id="136-propofol"></a>
- **Propofol** (ID: 136, File: 136.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 24
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:15  | Modified: 2026-02-12 09:53:15 

<a id="137-remifentanil"></a>
- **Remifentanil** (ID: 137, File: 137.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 25
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:15  | Modified: 2026-02-12 09:53:16 

<a id="138-sufentanil"></a>
- **Sufentanil** (ID: 138, File: 138.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 20
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:16  | Modified: 2026-02-12 09:53:16 

<a id="139-thiopenthal"></a>
- **Thiopenthal** (ID: 139, File: 139.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:16  | Modified: 2026-02-12 09:53:16 

<a id="drug-vasoactive-drugs"></a>
#### Vasoactive drugs

<a id="140-dobutamine"></a>
- **Dobutamine** (ID: 140, File: 140.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 38
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:17  | Modified: 2026-02-12 09:53:17 

<a id="141-dopamine"></a>
- **Dopamine** (ID: 141, File: 141.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 50
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:17  | Modified: 2026-02-12 09:53:18 

<a id="142-epinephrine"></a>
- **Epinephrine** (ID: 142, File: 142.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 354
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:18  | Modified: 2026-02-12 09:53:23 

<a id="143-levosimendan"></a>
- **Levosimendan** (ID: 143, File: 143.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:23  | Modified: 2026-02-12 09:53:23 

<a id="144-milrinone"></a>
- **Milrinone** (ID: 144, File: 144.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 12
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:23  | Modified: 2026-02-12 09:53:24 

<a id="145-norepinephrine"></a>
- **Norepinephrine** (ID: 145, File: 145.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 53
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:24  | Modified: 2026-02-12 09:53:24 

<a id="146-phenylephrine"></a>
- **Phenylephrine** (ID: 146, File: 146.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1206
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:25  | Modified: 2026-02-12 09:53:41 

<a id="147-vasopressin"></a>
- **Vasopressin** (ID: 147, File: 147.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 0
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:41  | Modified: 2026-02-12 09:53:41 

<a id="labs"></a>
### Labs

<a id="labs-arterial-blood-gases"></a>
#### Arterial blood gases

<a id="148-abg-ammonia"></a>
- **ABG Ammonia** (ID: 148, File: 148.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:41  | Modified: 2026-02-12 09:53:41 

<a id="149-abg-base-excess"></a>
- **ABG Base excess** (ID: 149, File: 149.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:41  | Modified: 2026-02-12 09:53:41 

<a id="150-abg-hematocrit"></a>
- **ABG Hematocrit** (ID: 150, File: 150.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:41  | Modified: 2026-02-12 09:53:42 

<a id="151-abg-paco2"></a>
- **ABG PaCO2** (ID: 151, File: 151.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 8
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:42  | Modified: 2026-02-12 09:53:42 

<a id="152-abg-pao2"></a>
- **ABG PaO2** (ID: 152, File: 152.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:42  | Modified: 2026-02-12 09:53:42 

<a id="153-abg-sao2"></a>
- **ABG SaO2** (ID: 153, File: 153.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:42  | Modified: 2026-02-12 09:53:42 

<a id="154-abg-bicarbonate"></a>
- **ABG bicarbonate** (ID: 154, File: 154.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:42  | Modified: 2026-02-12 09:53:42 

<a id="155-abg-calcium-ionized"></a>
- **ABG calcium ionized** (ID: 155, File: 155.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:42  | Modified: 2026-02-12 09:53:43 

<a id="156-abg-chloride"></a>
- **ABG chloride** (ID: 156, File: 156.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:43  | Modified: 2026-02-12 09:53:43 

<a id="157-abg-glucose"></a>
- **ABG glucose** (ID: 157, File: 157.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:43  | Modified: 2026-02-12 09:53:43 

<a id="158-abg-hemoglobin"></a>
- **ABG hemoglobin** (ID: 158, File: 158.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:43  | Modified: 2026-02-12 09:53:43 

<a id="159-abg-lactate"></a>
- **ABG lactate** (ID: 159, File: 159.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:43  | Modified: 2026-02-12 09:53:43 

<a id="160-abg-ph"></a>
- **ABG pH** (ID: 160, File: 160.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:45  | Modified: 2026-02-12 09:53:45 

<a id="161-abg-potassium"></a>
- **ABG potassium** (ID: 161, File: 161.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:45  | Modified: 2026-02-12 09:53:45 

<a id="162-abg-sodium"></a>
- **ABG sodium** (ID: 162, File: 162.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:45  | Modified: 2026-02-12 09:53:45 

<a id="336-oxygen-saturation"></a>
- **Oxygen saturation** (ID: 336, File: 336.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:24  | Modified: 2026-02-12 09:57:24 

<a id="labs-blood-specimen-type"></a>
#### Blood specimen type

<a id="163-arterial-blood-specimen"></a>
- **Arterial blood specimen** (ID: 163, File: 163.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:45  | Modified: 2026-02-12 09:53:45 

<a id="164-peripheral-blood-specimen"></a>
- **Peripheral blood specimen** (ID: 164, File: 164.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:45  | Modified: 2026-02-12 09:53:46 

<a id="165-venous-blood-specimen"></a>
- **Venous blood specimen** (ID: 165, File: 165.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:46  | Modified: 2026-02-12 09:53:46 

<a id="166-whole-blood-specimen"></a>
- **Whole blood specimen** (ID: 166, File: 166.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:46  | Modified: 2026-02-12 09:53:46 

<a id="labs-hemostasis"></a>
#### Hemostasis

<a id="167-coagulation-factor-v"></a>
- **Coagulation factor V** (ID: 167, File: 167.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:46  | Modified: 2026-02-12 09:53:46 

<a id="168-fibrin-d-dimer"></a>
- **Fibrin D-dimer** (ID: 168, File: 168.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:46  | Modified: 2026-02-12 09:53:46 

<a id="169-fibrinogen"></a>
- **Fibrinogen** (ID: 169, File: 169.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:46  | Modified: 2026-02-12 09:53:46 

<a id="170-inr"></a>
- **INR** (ID: 170, File: 170.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:47  | Modified: 2026-02-12 09:53:47 

<a id="171-prothrombin-time"></a>
- **Prothrombin time** (ID: 171, File: 171.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:47  | Modified: 2026-02-12 09:53:47 

<a id="172-aptt"></a>
- **aPTT** (ID: 172, File: 172.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:47  | Modified: 2026-02-12 09:53:47 

<a id="labs-liver-test"></a>
#### Liver test

<a id="173-alp"></a>
- **ALP** (ID: 173, File: 173.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:47  | Modified: 2026-02-12 09:53:48 

<a id="174-alt"></a>
- **ALT** (ID: 174, File: 174.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:48  | Modified: 2026-02-12 09:53:48 

<a id="175-ast"></a>
- **AST** (ID: 175, File: 175.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:48  | Modified: 2026-02-12 09:53:48 

<a id="176-ammonia"></a>
- **Ammonia** (ID: 176, File: 176.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:48  | Modified: 2026-02-12 09:53:48 

<a id="177-conjugated-bilirubin"></a>
- **Conjugated bilirubin** (ID: 177, File: 177.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:48  | Modified: 2026-02-12 09:53:48 

<a id="178-ggt"></a>
- **GGT** (ID: 178, File: 178.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:48  | Modified: 2026-02-12 09:53:48 

<a id="179-indirect-bilirubin"></a>
- **Indirect bilirubin** (ID: 179, File: 179.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:48  | Modified: 2026-02-12 09:53:49 

<a id="180-total-bilirubin"></a>
- **Total bilirubin** (ID: 180, File: 180.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:49  | Modified: 2026-02-12 09:53:49 

<a id="labs-other-labs"></a>
#### Other labs

<a id="181-1-3-beta-glucan"></a>
- **1,3 beta glucan** (ID: 181, File: 181.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:49  | Modified: 2026-02-12 09:53:49 

<a id="182-bnp"></a>
- **BNP** (ID: 182, File: 182.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:49  | Modified: 2026-02-12 09:53:49 

<a id="183-crp"></a>
- **CRP** (ID: 183, File: 183.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:49  | Modified: 2026-02-12 09:53:50 

<a id="184-hba1c"></a>
- **HbA1c** (ID: 184, File: 184.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:50  | Modified: 2026-02-12 09:53:50 

<a id="185-interleukin-6"></a>
- **Interleukin 6** (ID: 185, File: 185.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:50  | Modified: 2026-02-12 09:53:50 

<a id="186-lipase"></a>
- **Lipase** (ID: 186, File: 186.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:50  | Modified: 2026-02-12 09:53:50 

<a id="187-nt-probnp"></a>
- **NT-proBNP** (ID: 187, File: 187.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:50  | Modified: 2026-02-12 09:53:50 

<a id="188-pct"></a>
- **PCT** (ID: 188, File: 188.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:50  | Modified: 2026-02-12 09:53:50 

<a id="189-troponin-t"></a>
- **Troponin T** (ID: 189, File: 189.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:50  | Modified: 2026-02-12 09:53:51 

<a id="labs-plasma-blood-count"></a>
#### Plasma blood count

<a id="190-hematocrit"></a>
- **Hematocrit** (ID: 190, File: 190.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:51  | Modified: 2026-02-12 09:53:51 

<a id="191-plasma-basophils"></a>
- **Plasma basophils** (ID: 191, File: 191.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:51  | Modified: 2026-02-12 09:53:52 

<a id="192-plasma-eosinophils"></a>
- **Plasma eosinophils** (ID: 192, File: 192.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:52  | Modified: 2026-02-12 09:53:52 

<a id="193-plasma-erythrocytes"></a>
- **Plasma erythrocytes** (ID: 193, File: 193.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:52  | Modified: 2026-02-12 09:53:52 

<a id="194-plasma-hemoglobin"></a>
- **Plasma hemoglobin** (ID: 194, File: 194.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:52  | Modified: 2026-02-12 09:53:52 

<a id="195-plasma-leukocytes"></a>
- **Plasma leukocytes** (ID: 195, File: 195.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:52  | Modified: 2026-02-12 09:53:52 

<a id="196-plasma-lymphocytes"></a>
- **Plasma lymphocytes** (ID: 196, File: 196.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:52  | Modified: 2026-02-12 09:53:52 

<a id="197-plasma-monocytes"></a>
- **Plasma monocytes** (ID: 197, File: 197.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:52  | Modified: 2026-02-12 09:53:53 

<a id="198-plasma-neutrophils"></a>
- **Plasma neutrophils** (ID: 198, File: 198.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:53  | Modified: 2026-02-12 09:53:53 

<a id="199-plasma-platelets"></a>
- **Plasma platelets** (ID: 199, File: 199.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:53  | Modified: 2026-02-12 09:53:53 

<a id="200-plasma-reticulocytes"></a>
- **Plasma reticulocytes** (ID: 200, File: 200.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:53  | Modified: 2026-02-12 09:53:54 

<a id="labs-plasma-ionogram"></a>
#### Plasma ionogram

<a id="201-plasma-ldh"></a>
- **Plasma LDH** (ID: 201, File: 201.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:54  | Modified: 2026-02-12 09:53:54 

<a id="202-plasma-albumin"></a>
- **Plasma albumin** (ID: 202, File: 202.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:54  | Modified: 2026-02-12 09:53:54 

<a id="203-plasma-bicarbonate"></a>
- **Plasma bicarbonate** (ID: 203, File: 203.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:54  | Modified: 2026-02-12 09:53:54 

<a id="204-plasma-calcium"></a>
- **Plasma calcium** (ID: 204, File: 204.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:54  | Modified: 2026-02-12 09:53:54 

<a id="205-plasma-chloride"></a>
- **Plasma chloride** (ID: 205, File: 205.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:54  | Modified: 2026-02-12 09:53:55 

<a id="206-plasma-creatinine"></a>
- **Plasma creatinine** (ID: 206, File: 206.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:55  | Modified: 2026-02-12 09:53:55 

<a id="207-plasma-glucose"></a>
- **Plasma glucose** (ID: 207, File: 207.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:55  | Modified: 2026-02-12 09:53:55 

<a id="208-plasma-lactate"></a>
- **Plasma lactate** (ID: 208, File: 208.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:55  | Modified: 2026-02-12 09:53:55 

<a id="209-plasma-magnesium"></a>
- **Plasma magnesium** (ID: 209, File: 209.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:55  | Modified: 2026-02-12 09:53:55 

<a id="210-plasma-phosphate"></a>
- **Plasma phosphate** (ID: 210, File: 210.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:56  | Modified: 2026-02-12 09:53:56 

<a id="211-plasma-potassium"></a>
- **Plasma potassium** (ID: 211, File: 211.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:56  | Modified: 2026-02-12 09:53:56 

<a id="212-plasma-sodium"></a>
- **Plasma sodium** (ID: 212, File: 212.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:56  | Modified: 2026-02-12 09:53:56 

<a id="213-plasma-urea"></a>
- **Plasma urea** (ID: 213, File: 213.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:56  | Modified: 2026-02-12 09:53:56 

<a id="labs-urinary-ionogram"></a>
#### Urinary ionogram

<a id="214-urinary-bicarbonate"></a>
- **Urinary bicarbonate** (ID: 214, File: 214.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:56  | Modified: 2026-02-12 09:53:57 

<a id="215-urinary-calcium"></a>
- **Urinary calcium** (ID: 215, File: 215.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:57  | Modified: 2026-02-12 09:53:57 

<a id="216-urinary-chloride"></a>
- **Urinary chloride** (ID: 216, File: 216.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:57  | Modified: 2026-02-12 09:53:57 

<a id="217-urinary-creatinine"></a>
- **Urinary creatinine** (ID: 217, File: 217.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:57  | Modified: 2026-02-12 09:53:57 

<a id="218-urinary-glucose"></a>
- **Urinary glucose** (ID: 218, File: 218.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:57  | Modified: 2026-02-12 09:53:57 

<a id="219-urinary-phosphate"></a>
- **Urinary phosphate** (ID: 219, File: 219.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:57  | Modified: 2026-02-12 09:53:57 

<a id="220-urinary-potassium"></a>
- **Urinary potassium** (ID: 220, File: 220.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:58  | Modified: 2026-02-12 09:53:58 

<a id="221-urinary-sodium"></a>
- **Urinary sodium** (ID: 221, File: 221.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:58  | Modified: 2026-02-12 09:53:58 

<a id="222-urinary-urea"></a>
- **Urinary urea** (ID: 222, File: 222.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:58  | Modified: 2026-02-12 09:53:58 

<a id="microbiology"></a>
### Microbiology

<a id="microbiology-microorganism"></a>
#### Microorganism

<a id="223-actinomyces-neuii-subspecies-neuii"></a>
- **Actinomyces neuii subspecies neuii** (ID: 223, File: 223.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:58  | Modified: 2026-02-12 09:53:58 

<a id="224-bacillus-cereus-group"></a>
- **Bacillus cereus group** (ID: 224, File: 224.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 12
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:58  | Modified: 2026-02-12 09:53:58 

<a id="225-bacillus-mycoides"></a>
- **Bacillus mycoides** (ID: 225, File: 225.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:58  | Modified: 2026-02-12 09:53:59 

<a id="226-citrobacter-freundii-complex"></a>
- **Citrobacter freundii complex** (ID: 226, File: 226.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 16
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:59  | Modified: 2026-02-12 09:53:59 

<a id="227-citrobacter-koseri"></a>
- **Citrobacter koseri** (ID: 227, File: 227.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:59  | Modified: 2026-02-12 09:53:59 

<a id="228-corynebacterium-amycolatum"></a>
- **Corynebacterium amycolatum** (ID: 228, File: 228.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:59  | Modified: 2026-02-12 09:53:59 

<a id="229-corynebacterium-species"></a>
- **Corynebacterium species** (ID: 229, File: 229.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 152
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:53:59  | Modified: 2026-02-12 09:54:02 

<a id="230-corynebacterium-striatum"></a>
- **Corynebacterium striatum** (ID: 230, File: 230.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:02  | Modified: 2026-02-12 09:54:02 

<a id="231-dermabacter-hominis"></a>
- **Dermabacter hominis** (ID: 231, File: 231.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:02  | Modified: 2026-02-12 09:54:02 

<a id="232-enterobacter-aerogenes"></a>
- **Enterobacter aerogenes** (ID: 232, File: 232.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:02  | Modified: 2026-02-12 09:54:02 

<a id="233-enterobacter-cloacae"></a>
- **Enterobacter cloacae** (ID: 233, File: 233.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:02  | Modified: 2026-02-12 09:54:03 

<a id="234-enterobacter-cloacae-complex"></a>
- **Enterobacter cloacae complex** (ID: 234, File: 234.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 23
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:03  | Modified: 2026-02-12 09:54:03 

<a id="235-enterococcus-faecalis"></a>
- **Enterococcus faecalis** (ID: 235, File: 235.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:03  | Modified: 2026-02-12 09:54:03 

<a id="236-enterococcus-faecium"></a>
- **Enterococcus faecium** (ID: 236, File: 236.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:03  | Modified: 2026-02-12 09:54:04 

<a id="237-escherichia-coli"></a>
- **Escherichia coli** (ID: 237, File: 237.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 723
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:04  | Modified: 2026-02-12 09:54:15 

<a id="238-gram-negative-bacteria"></a>
- **Gram-negative bacteria** (ID: 238, File: 238.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 8716
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:54:15  | Modified: 2026-02-12 09:56:18 

<a id="239-gram-positive-bacteria"></a>
- **Gram-positive bacteria** (ID: 239, File: 239.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2598
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:18  | Modified: 2026-02-12 09:56:53 

<a id="240-gram-positive-cocci-in-clusters"></a>
- **Gram-positive cocci in clusters** (ID: 240, File: 240.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:53  | Modified: 2026-02-12 09:56:53 

<a id="241-granulicatella-adiacens"></a>
- **Granulicatella adiacens** (ID: 241, File: 241.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:53  | Modified: 2026-02-12 09:56:54 

<a id="242-klebsiella-oxytoca"></a>
- **Klebsiella oxytoca** (ID: 242, File: 242.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:54  | Modified: 2026-02-12 09:56:54 

<a id="243-klebsiella-pneumoniae"></a>
- **Klebsiella pneumoniae** (ID: 243, File: 243.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 13
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:54  | Modified: 2026-02-12 09:56:54 

<a id="244-klebsiella-variicola"></a>
- **Klebsiella variicola** (ID: 244, File: 244.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:54  | Modified: 2026-02-12 09:56:54 

<a id="245-lysinibacillus"></a>
- **Lysinibacillus** (ID: 245, File: 245.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 17
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:54  | Modified: 2026-02-12 09:56:55 

<a id="246-micrococcus-luteus"></a>
- **Micrococcus luteus** (ID: 246, File: 246.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:55  | Modified: 2026-02-12 09:56:55 

<a id="247-paenibacillus-pabuli"></a>
- **Paenibacillus pabuli** (ID: 247, File: 247.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:55  | Modified: 2026-02-12 09:56:55 

<a id="248-pantoea-agglomerans"></a>
- **Pantoea agglomerans** (ID: 248, File: 248.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:55  | Modified: 2026-02-12 09:56:55 

<a id="249-pantoea-septica"></a>
- **Pantoea septica** (ID: 249, File: 249.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:55  | Modified: 2026-02-12 09:56:55 

<a id="250-pseudomonas-aeruginosa"></a>
- **Pseudomonas aeruginosa** (ID: 250, File: 250.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 12
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:56  | Modified: 2026-02-12 09:56:56 

<a id="251-raoultella-ornithinolytica"></a>
- **Raoultella ornithinolytica** (ID: 251, File: 251.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:56  | Modified: 2026-02-12 09:56:56 

<a id="252-rothia-dentocariosa"></a>
- **Rothia dentocariosa** (ID: 252, File: 252.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:56  | Modified: 2026-02-12 09:56:56 

<a id="253-rothia-mucilaginosa"></a>
- **Rothia mucilaginosa** (ID: 253, File: 253.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:56  | Modified: 2026-02-12 09:56:56 

<a id="254-serratia"></a>
- **Serratia** (ID: 254, File: 254.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 34
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:56  | Modified: 2026-02-12 09:56:57 

<a id="255-serratia-liquefaciens"></a>
- **Serratia liquefaciens** (ID: 255, File: 255.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:57  | Modified: 2026-02-12 09:56:57 

<a id="256-serratia-marcescens"></a>
- **Serratia marcescens** (ID: 256, File: 256.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 8
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:57  | Modified: 2026-02-12 09:56:57 

<a id="257-staphylococcus-aureus"></a>
- **Staphylococcus aureus** (ID: 257, File: 257.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 16
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:57  | Modified: 2026-02-12 09:56:58 

<a id="258-staphylococcus-capitis"></a>
- **Staphylococcus capitis** (ID: 258, File: 258.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:58  | Modified: 2026-02-12 09:56:58 

<a id="259-staphylococcus-epidermidis"></a>
- **Staphylococcus epidermidis** (ID: 259, File: 259.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:58  | Modified: 2026-02-12 09:56:58 

<a id="260-staphylococcus-haemolyticus"></a>
- **Staphylococcus haemolyticus** (ID: 260, File: 260.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:58  | Modified: 2026-02-12 09:56:58 

<a id="261-staphylococcus-hominis"></a>
- **Staphylococcus hominis** (ID: 261, File: 261.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:58  | Modified: 2026-02-12 09:56:59 

<a id="262-staphylococcus-warneri"></a>
- **Staphylococcus warneri** (ID: 262, File: 262.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:59  | Modified: 2026-02-12 09:56:59 

<a id="263-streptococcus-agalactiae-group-b-streptococcus-"></a>
- **Streptococcus agalactiae (Group B streptococcus)** (ID: 263, File: 263.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 20
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:59  | Modified: 2026-02-12 09:56:59 

<a id="264-streptococcus-anginosus"></a>
- **Streptococcus anginosus** (ID: 264, File: 264.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:59  | Modified: 2026-02-12 09:56:59 

<a id="265-streptococcus-dysgalactiae"></a>
- **Streptococcus dysgalactiae** (ID: 265, File: 265.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:56:59  | Modified: 2026-02-12 09:57:00 

<a id="266-streptococcus-mitis-streptococcus-mitis-group-"></a>
- **Streptococcus mitis (Streptococcus mitis group)** (ID: 266, File: 266.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:00  | Modified: 2026-02-12 09:57:00 

<a id="267-streptococcus-mitis-group"></a>
- **Streptococcus mitis group** (ID: 267, File: 267.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 15
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:00  | Modified: 2026-02-12 09:57:00 

<a id="268-streptococcus-vestibularis"></a>
- **Streptococcus vestibularis** (ID: 268, File: 268.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:00  | Modified: 2026-02-12 09:57:00 

<a id="269-streptococcus-viridans-group"></a>
- **Streptococcus, viridans group** (ID: 269, File: 269.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 42
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:00  | Modified: 2026-02-12 09:57:01 

<a id="microbiology-specimen"></a>
#### Specimen

<a id="270-blood-culture"></a>
- **Blood culture** (ID: 270, File: 270.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 8
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:01  | Modified: 2026-02-12 09:57:01 

<a id="other"></a>
### Other

<a id="other-demographic-data"></a>
#### Demographic data

<a id="271-birth-datetime"></a>
- **Birth datetime** (ID: 271, File: 271.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:01  | Modified: 2026-02-12 09:57:01 

<a id="272-birth-height"></a>
- **Birth height** (ID: 272, File: 272.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:02  | Modified: 2026-02-12 09:57:02 

<a id="273-birth-weight"></a>
- **Birth weight** (ID: 273, File: 273.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:02  | Modified: 2026-02-12 09:57:02 

<a id="274-body-height"></a>
- **Body height** (ID: 274, File: 274.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:02  | Modified: 2026-02-12 09:57:02 

<a id="275-body-weight"></a>
- **Body weight** (ID: 275, File: 275.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 18
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:02  | Modified: 2026-02-12 09:57:02 

<a id="276-death-datetime"></a>
- **Death datetime** (ID: 276, File: 276.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:02  | Modified: 2026-02-12 09:57:03 

<a id="277-gender"></a>
- **Gender** (ID: 277, File: 277.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:03  | Modified: 2026-02-12 09:57:03 

<a id="278-gestational-age"></a>
- **Gestational age** (ID: 278, File: 278.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:03  | Modified: 2026-02-12 09:57:03 

<a id="279-gestational-age-at-birth"></a>
- **Gestational age at birth** (ID: 279, File: 279.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:03  | Modified: 2026-02-12 09:57:03 

<a id="280-hospital-admission-datetime"></a>
- **Hospital admission datetime** (ID: 280, File: 280.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:03  | Modified: 2026-02-12 09:57:03 

<a id="281-hospital-discharge-datetime"></a>
- **Hospital discharge datetime** (ID: 281, File: 281.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:04 

<a id="282-icu-admission-datetime"></a>
- **ICU admission datetime** (ID: 282, File: 282.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:04 

<a id="283-icu-discharge-datetime"></a>
- **ICU discharge datetime** (ID: 283, File: 283.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:04 

<a id="284-ideal-body-weight"></a>
- **Ideal body weight** (ID: 284, File: 284.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:04 

<a id="other-nutrition"></a>
#### Nutrition

<a id="285-contraindication-to-enteral-feeding"></a>
- **Contraindication to enteral feeding** (ID: 285, File: 285.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 2
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:04 

<a id="286-energy-intake"></a>
- **Energy intake** (ID: 286, File: 286.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:04 

<a id="287-energy-requirement"></a>
- **Energy requirement** (ID: 287, File: 287.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:04  | Modified: 2026-02-12 09:57:05 

<a id="other-other"></a>
#### Other

<a id="288-advance-care-plan-agreed"></a>
- **Advance care plan agreed** (ID: 288, File: 288.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:05  | Modified: 2026-02-12 09:57:05 

<a id="289-consultation-with-patient"></a>
- **Consultation with patient** (ID: 289, File: 289.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 9
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:05  | Modified: 2026-02-12 09:57:05 

<a id="290-surrogate-decision-maker-documented"></a>
- **Surrogate decision maker documented** (ID: 290, File: 290.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:05  | Modified: 2026-02-12 09:57:05 

<a id="procedure"></a>
### Procedure

<a id="procedure-catheter"></a>
#### Catheter

<a id="291-central-venous-catheter"></a>
- **Central venous catheter** (ID: 291, File: 291.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 35
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:05  | Modified: 2026-02-12 09:57:06 

<a id="procedure-ecmo"></a>
#### ECMO

<a id="292-ecmo"></a>
- **ECMO** (ID: 292, File: 292.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 4
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:06  | Modified: 2026-02-12 09:57:06 

<a id="procedure-nutrition"></a>
#### Nutrition

<a id="293-enteral-feeding"></a>
- **Enteral feeding** (ID: 293, File: 293.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 16
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:06  | Modified: 2026-02-12 09:57:06 

<a id="procedure-patient-position"></a>
#### Patient position

<a id="294-mobilization"></a>
- **Mobilization** (ID: 294, File: 294.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 135
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:06  | Modified: 2026-02-12 09:57:08 

<a id="295-order-to-not-mobilize"></a>
- **Order to not mobilize** (ID: 295, File: 295.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 138
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:08  | Modified: 2026-02-12 09:57:10 

<a id="296-prone-positioning"></a>
- **Prone positioning** (ID: 296, File: 296.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:10  | Modified: 2026-02-12 09:57:10 

<a id="procedure-plasmapheresis"></a>
#### Plasmapheresis

<a id="297-plasmapheresis"></a>
- **Plasmapheresis** (ID: 297, File: 297.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:10  | Modified: 2026-02-12 09:57:10 

<a id="procedure-renal-replacement-therapy"></a>
#### Renal replacement therapy

<a id="298-renal-replacement-therapy"></a>
- **Renal replacement therapy** (ID: 298, File: 298.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:10  | Modified: 2026-02-12 09:57:11 

<a id="ventilation"></a>
### Ventilation

<a id="ventilation-airway-device"></a>
#### Airway device

<a id="338-airway-device-change"></a>
- **Airway device change** (ID: 338, File: 338.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:24  | Modified: 2026-02-12 09:57:24 

<a id="299-endotracheal-tube"></a>
- **Endotracheal tube** (ID: 299, File: 299.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 14
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:11  | Modified: 2026-02-12 09:57:11 

<a id="337-endotracheal-tube-diameter"></a>
- **Endotracheal tube diameter** (ID: 337, File: 337.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:24  | Modified: 2026-02-12 09:57:24 

<a id="300-tracheostomy-tube"></a>
- **Tracheostomy tube** (ID: 300, File: 300.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:11  | Modified: 2026-02-12 09:57:12 

<a id="ventilation-oxygenation"></a>
#### Oxygenation

<a id="301-fraction-of-inspired-oxygen-fio2-"></a>
- **Fraction of inspired oxygen (FiO2)** (ID: 301, File: 301.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 5
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:12  | Modified: 2026-02-12 09:57:12 

<a id="302-oxygen-flow-rate"></a>
- **Oxygen flow rate** (ID: 302, File: 302.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:12  | Modified: 2026-02-12 09:57:12 

<a id="ventilation-ventilation-device"></a>
#### Ventilation device

<a id="305-endotracheal-intubation"></a>
- **Endotracheal intubation** (ID: 305, File: 305.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 22
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:12  | Modified: 2026-02-12 09:57:13 

<a id="303-extubation"></a>
- **Extubation** (ID: 303, File: 303.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 7
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:12  | Modified: 2026-02-12 09:57:12 

<a id="304-humidification-therapy"></a>
- **Humidification Therapy** (ID: 304, File: 304.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 10
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:12  | Modified: 2026-02-12 09:57:12 

<a id="306-invasive-mechanical-ventilation"></a>
- **Invasive mechanical ventilation** (ID: 306, File: 306.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 22
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:13  | Modified: 2026-02-12 09:57:13 

<a id="307-non-invasive-ventilation"></a>
- **Non-invasive ventilation** (ID: 307, File: 307.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 16
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:13  | Modified: 2026-02-12 09:57:14 

<a id="308-oxygen-device"></a>
- **Oxygen device** (ID: 308, File: 308.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 10
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:14  | Modified: 2026-02-12 09:57:14 

<a id="309-trial-of-spontaneous-breathing"></a>
- **Trial of spontaneous breathing** (ID: 309, File: 309.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:14  | Modified: 2026-02-12 09:57:14 

<a id="ventilation-ventilation-parameters"></a>
#### Ventilation parameters

<a id="310-breath-cycle-timing"></a>
- **Breath cycle timing** (ID: 310, File: 310.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:14  | Modified: 2026-02-12 09:57:14 

<a id="311-carbon-dioxide-production"></a>
- **Carbon dioxide production** (ID: 311, File: 311.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:14  | Modified: 2026-02-12 09:57:15 

<a id="312-end-tidal-carbone-dioxyde-concentration"></a>
- **End tidal carbone dioxyde concentration** (ID: 312, File: 312.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:15  | Modified: 2026-02-12 09:57:15 

<a id="313-horowitz-index"></a>
- **Horowitz index** (ID: 313, File: 313.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 10
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:15  | Modified: 2026-02-12 09:57:15 

<a id="314-inspiratory-pressure-setting"></a>
- **Inspiratory pressure setting** (ID: 314, File: 314.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:15  | Modified: 2026-02-12 09:57:15 

<a id="315-lung-compliance"></a>
- **Lung compliance** (ID: 315, File: 315.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 8
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:15  | Modified: 2026-02-12 09:57:15 

<a id="316-mean-airway-pressure"></a>
- **Mean airway pressure** (ID: 316, File: 316.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:15  | Modified: 2026-02-12 09:57:16 

<a id="317-minute-volume"></a>
- **Minute volume** (ID: 317, File: 317.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 11
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:16  | Modified: 2026-02-12 09:57:16 

<a id="319-peak-inspiration-pressure"></a>
- **Peak inspiration pressure** (ID: 319, File: 319.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:16  | Modified: 2026-02-12 09:57:16 

<a id="320-plateau-pressure"></a>
- **Plateau pressure** (ID: 320, File: 320.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 1
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:16  | Modified: 2026-02-12 09:57:17 

<a id="318-positive-end-expiratory-pressure-peep-"></a>
- **Positive End-Expiratory Pressure (PEEP)** (ID: 318, File: 318.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:16  | Modified: 2026-02-12 09:57:16 

<a id="321-respiratory-rate"></a>
- **Respiratory rate** (ID: 321, File: 321.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 3
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:17  | Modified: 2026-02-12 09:57:17 

<a id="322-tidal-volume"></a>
- **Tidal volume** (ID: 322, File: 322.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 25
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:17  | Modified: 2026-02-12 09:57:17 

<a id="vitals"></a>
### Vitals

<a id="vitals-haemodynamics"></a>
#### Haemodynamics

<a id="324-cardiac-output"></a>
- **Cardiac output** (ID: 324, File: 324.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 45
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:17  | Modified: 2026-02-12 09:57:18 

<a id="325-central-venous-pressure"></a>
- **Central venous pressure** (ID: 325, File: 325.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 6
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:18  | Modified: 2026-02-12 09:57:18 

<a id="326-diastolic-arterial-pressure"></a>
- **Diastolic arterial pressure** (ID: 326, File: 326.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 25
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:18  | Modified: 2026-02-12 09:57:19 

<a id="327-heart-rate"></a>
- **Heart rate** (ID: 327, File: 327.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 18
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:19  | Modified: 2026-02-12 09:57:19 

<a id="328-mean-arterial-pressure"></a>
- **Mean arterial pressure** (ID: 328, File: 328.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 23
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:19  | Modified: 2026-02-12 09:57:20 

<a id="329-systolic-arterial-pressure"></a>
- **Systolic arterial pressure** (ID: 329, File: 329.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 25
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:20  | Modified: 2026-02-12 09:57:20 

<a id="vitals-other-vitals"></a>
#### Other vitals

<a id="330-body-temperature"></a>
- **Body temperature** (ID: 330, File: 330.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 53
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:20  | Modified: 2026-02-12 09:57:21 

<a id="331-urine-output"></a>
- **Urine output** (ID: 331, File: 331.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 14
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:21  | Modified: 2026-02-12 09:57:21 

<a id="vitals-ventilatory"></a>
#### Ventilatory

<a id="333-oxygen-saturation-spo2-"></a>
- **Oxygen saturation (SpO2)** (ID: 333, File: 333.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 24
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:22  | Modified: 2026-02-12 09:57:22 

<a id="332-respiratory-rate"></a>
- **Respiratory rate** (ID: 332, File: 332.json)
  - Description: N/A
  - Version: 1.0.0 | Status: draft | Concepts: 25
  - Author: Boris Delange (Medical Informatics and Intensive Care Physician)
  - Created: 2026-02-12 09:57:21  | Modified: 2026-02-12 09:57:22 

