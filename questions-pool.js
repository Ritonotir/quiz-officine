// ═══════════════════════════════════════════════════════════════
// POOL CENTRAL DE QUESTIONS — Formation Officine
// Pour ajouter une question : copier un bloc existant, modifier les champs.
// Champs obligatoires : theme, text, options (4 éléments), correct (index 0-3),
//                       explanation, difficulte ("facile"|"modere"|"difficile")
// ═══════════════════════════════════════════════════════════════

const QUESTION_POOL = [
  {
    theme: "Vaccins vivants — urgence",
    text: "Exception de délai entre deux vaccins vivants en cas de départ imminent non simultanés ?",
    options: ["Réduction à 7 jours validée", "Réduction à 15 jours validée", "Aucun délai raccourci validé — le risque d'interférence persiste", "Attente de 3 mois recommandée"],
    correct: 2,
    explanation: "Il n'existe <strong>aucun délai raccourci validé</strong> entre deux vaccins vivants non co-administrés. Le risque d'interférence immunologique est maintenu quelle que soit l'urgence. La seule solution validée est la <strong>co-administration le même jour</strong>. En cas d'impossibilité, l'évaluation bénéfice/risque doit être faite avec le médecin en tenant compte du risque infectieux au voyage.",
    difficulte: "difficile"
  },
  {
    theme: "Aspect anormal",
    text: "Que faire si un vaccin présente une coloration anormale ou des agrégats persistants après agitation ?",
    options: ["Filtrer le vaccin avant injection", "Mettre en quarantaine, ne pas utiliser et contacter le laboratoire", "Injecter quand même si la date est valide", "Diluer au NaCl 0,9%"],
    correct: 1,
    explanation: "Tout vaccin présentant une <strong>coloration anormale ou des agrégats persistants</strong> après agitation ne doit <strong>pas être utilisé</strong>. Il faut le mettre en quarantaine, noter le numéro de lot, et contacter le laboratoire fabricant pour signalement. Ces anomalies peuvent signaler une dégradation, une contamination ou un problème de fabrication.",
    difficulte: "difficile"
  },
  {
    theme: "Hépatite B — interchangeabilité",
    text: "En rupture de stock, peut-on alterner deux marques différentes pour un schéma hépatite B ?",
    options: ["Non, même marque obligatoire tout au long du schéma", "Faire une sérologie avant de continuer", "Oui, l'interchangeabilité des vaccins HBV est validée entre les spécialités", "Recommencer à zéro avec la nouvelle marque"],
    correct: 2,
    explanation: "L'<strong>interchangeabilité des vaccins hépatite B</strong> entre spécialités est <strong>validée</strong> : Engerix B®, HBVaxPro®, Twinrix® (hépatite A+B) peuvent être utilisés indifféremment pour compléter un schéma. Cette interchangeabilité est une exception notable car pour d'autres vaccins (ex: HPV, rotavirus), l'interchangeabilité n'est pas recommandée.",
    difficulte: "difficile"
  },
  {
    theme: "Allergie — néomycine",
    text: "Quel antécédent allergique impose de vérifier la présence de néomycine dans un vaccin ?",
    options: ["Allergie au lactose", "Antécédent de choc anaphylactique à cet antibiotique", "Allergie aux œufs", "Asthme allergique"],
    correct: 1,
    explanation: "Un antécédent de <strong>choc anaphylactique à la néomycine</strong> impose de vérifier la composition du vaccin car plusieurs vaccins (MMR-II, Varivax, certains vaccins polio…) contiennent des traces de néomycine. En cas d'allergie documentée sévère, une évaluation spécialisée est nécessaire. Une allergie de contact (eczéma) ne contre-indique pas la vaccination.",
    difficulte: "difficile"
  },
  {
    theme: "Vaccins vivants — immunodéprimé",
    text: "Un patient immunodéprimé peut-il recevoir un vaccin vivant atténué (ex: ROR) ?",
    options: ["Oui, avec une dose réduite", "Non, contre-indication absolue en cas d'immunodépression sévère", "À demi-dose uniquement", "Seulement si sérologie négative préalable"],
    correct: 1,
    explanation: "Les vaccins vivants atténués sont <strong>contre-indiqués en cas d'immunodépression sévère</strong>. Le risque est que le pathogène atténué se réplique de façon incontrôlée chez l'hôte immunodéprimé et provoque une maladie vaccinale grave. La décision dépend du type et du degré d'immunodépression — une immunodépression légère (corticothérapie < 10mg/j) peut ne pas contre-indiquer.",
    difficulte: "difficile"
  },
  {
    theme: "Méthotrexate",
    text: "Pour un patient sous méthotrexate, quelle conduite optimise la réponse au vaccin grippal ?",
    options: ["Doubler la dose du vaccin", "Suspendre le méthotrexate 2 semaines après la vaccination", "Arrêt définitif du méthotrexate", "Injection par voie intraveineuse"],
    correct: 1,
    explanation: "Le méthotrexate réduit la réponse immunitaire aux vaccins. Une stratégie validée consiste à <strong>suspendre le méthotrexate pendant 2 semaines après la vaccination</strong> (et non avant) pour permettre une meilleure réponse immunitaire au vaccin grippal. Cette approche a été validée par des études cliniques chez les patients rhumatoïdes, avec un bénéfice sans aggravation de la maladie.",
    difficulte: "difficile"
  },
  {
    theme: "Désensibilisation allergique",
    text: "Peut-on utiliser le même site d'injection pour un vaccin et une désensibilisation allergique ?",
    options: ["Oui, si les produits sont compatibles", "Non, il faut utiliser deux membres différents", "Oui, après 24h d'intervalle", "Uniquement si le vaccin est inactivé"],
    correct: 1,
    explanation: "Un vaccin et une désensibilisation allergique doivent être administrés sur <strong>deux membres différents</strong>. L'utilisation du même site pourrait entraîner des interactions locales et rendre difficile l'interprétation des réactions (réaction au vaccin vs réaction à l'allergène). C'est une recommandation de bonne pratique pour la sécurité et la lisibilité des réactions.",
    difficulte: "difficile"
  },
  {
    theme: "AES",
    text: "Conduite à tenir en cas d'exposition accidentelle au sang (AES) lors d'une injection à l'officine ?",
    options: ["Pansement compressif et surveillance", "Nettoyage immédiat, désinfection et orientation vers les urgences pour protocole AES", "Sérologie du patient en urgence", "Ne rien faire si le patient semble en bonne santé"],
    correct: 1,
    explanation: "En cas d'AES (piqûre accidentelle) : <strong>1/ Nettoyage immédiat</strong> (eau + savon, rinçage abondant), <strong>2/ Désinfection</strong> avec antiseptique, <strong>3/ Orientation urgente vers les urgences ou le médecin du travail</strong> pour évaluation du risque (VIH, VHB, VHC) et mise en place d'un éventuel traitement prophylactique post-exposition dans les délais requis (< 4h pour VIH).",
    difficulte: "difficile"
  },
  {
    theme: "Immunoglobulines",
    text: "Quelle précaution s'impose pour les vaccins vivants après une administration récente d'immunoglobulines ?",
    options: ["Aucune précaution particulière", "Respecter un délai de 3 à 11 mois selon la dose d'Ig (neutralisation du vaccin)", "Co-administration possible le même jour", "Doubler la dose du vaccin vivant"],
    correct: 1,
    explanation: "Les immunoglobulines neutralisent les vaccins vivants en circulant dans l'organisme. Un délai de <strong>3 à 11 mois</strong> doit être respecté entre l'administration d'immunoglobulines et un vaccin vivant, selon la dose d'Ig reçue. Ce délai est essentiel pour éviter que les anticorps passifs ne neutralisent le virus vaccinal avant qu'il puisse stimuler le système immunitaire.",
    difficulte: "difficile"
  },
  {
    theme: "Vaccin multidose",
    text: "Quelle est la durée de conservation d'un vaccin multidose après le premier prélèvement ?",
    options: ["24 heures systématiquement", "7 jours dans tous les cas", "Selon le RCP : souvent 6 à 28 jours au réfrigérateur", "1 heure uniquement"],
    correct: 2,
    explanation: "La durée de conservation d'un vaccin multidose après ouverture varie <strong>selon le RCP du produit</strong>. Elle est généralement de 6 à 28 jours au réfrigérateur pour les vaccins grippe multidoses. Toujours noter la date et l'heure d'ouverture. Respecter strictement les indications du RCP et éliminer le flacon si la durée est dépassée.",
    difficulte: "difficile"
  },
  {
    theme: "Urticaire post-injection",
    text: "Quelle est la conduite si un patient présente un urticaire 10 minutes après l'injection ?",
    options: ["Le renvoyer chez lui avec des antihistaminiques", "Administrer un antihistaminique et surveiller étroitement — évaluer la progression vers une anaphylaxie", "Adrénaline d'emblée systématique", "Ne rien faire, c'est une réaction normale"],
    correct: 1,
    explanation: "Un urticaire post-vaccinal doit être pris au sérieux. Conduite : <strong>administrer un antihistaminique</strong> et <strong>surveiller étroitement</strong> l'évolution. L'urticaire isolée peut évoluer vers une anaphylaxie (hypotension, bronchospasme) qui nécessiterait alors l'adrénaline IM (0,3-0,5mg en IM cuisse). Ne pas renvoyer le patient avant stabilisation complète. L'adrénaline n'est pas indiquée d'emblée pour un urticaire isolée sans signe systémique.",
    difficulte: "difficile"
  },
  {
    theme: "Rituximab",
    text: "Pour un patient traité par rituximab, quel est le moment optimal pour la vaccination grippe ?",
    options: ["N'importe quand, l'efficacité est maintenue", "Juste avant la perfusion de rituximab", "Au moins 4 mois après la dernière cure (repopulation des lymphocytes B)", "Pendant la perfusion pour effet synergique"],
    correct: 2,
    explanation: "Le rituximab (anti-CD20) détruit les lymphocytes B pendant plusieurs mois, rendant la réponse vaccinale insuffisante. Le moment optimal est <strong>au moins 4 mois après la dernière cure</strong>, quand la repopulation des lymphocytes B est suffisante. Vacciner trop tôt après rituximab aboutit à une protection inadéquate. Cette règle des 4 mois s'applique également aux autres vaccins.",
    difficulte: "difficile"
  },
  {
    theme: "Nombre d'injections",
    text: "Combien d'injections peuvent être réalisées au maximum au cours d'une même séance de vaccination ?",
    options: ["Une seule", "Deux", "Trois", "Pas de limite théorique, selon les sites disponibles"],
    correct: 3,
    explanation: "Il n'y a <strong>pas de limite théorique</strong> au nombre d'injections par séance. En pratique, le nombre est limité par les sites d'injection disponibles (deltoïdes, cuisses) et la tolérance du patient. Les co-administrations multiples sont courantes dans le cadre du rattrapage vaccinal ou du calendrier nourrisson.",
    difficulte: "facile"
  },
  {
    theme: "Réglementation",
    text: "Quels vaccins sont exclus de la prescription officinale et nécessitent un centre spécialisé ?",
    options: ["Hépatite A et B", "Grippe et Covid-19", "Fièvre jaune et rage (en prophylaxie pré-exposition)", "DTP et Pneumocoque"],
    correct: 2,
    explanation: "La <strong>fièvre jaune</strong> ne peut être administrée que dans des centres de vaccination internationaux agréés, en raison de la nécessité d'un certificat international. La <strong>rage en prophylaxie pré-exposition</strong> relève également de centres spécialisés. Ces deux vaccins échappent à la prescription officinale.",
    difficulte: "facile"
  },
  {
    theme: "Contre-indications",
    text: "Une infection mineure (rhume, légère fièvre < 38,5°C) contre-indique-t-elle la vaccination ?",
    options: ["Oui, toujours reporter", "Oui, risque d'inefficacité du vaccin", "Non, ce n'est pas une contre-indication", "Uniquement pour les vaccins vivants"],
    correct: 2,
    explanation: "Une infection mineure (rhume, légère fièvre < 38,5°C, otite légère…) <strong>n'est pas une contre-indication à la vaccination</strong>. Reporter systématiquement la vaccination pour ces motifs bénins fait manquer des opportunités vaccinales. Seule une maladie fébrile aiguë sévère justifie un report temporaire.",
    difficulte: "facile"
  },
  {
    theme: "Sur-vaccination",
    text: "Est-il dangereux de vacciner par erreur une personne déjà immune (ex: oubli de carnet) ?",
    options: ["Oui, risque de réaction grave", "Non, cela peut simplement augmenter les réactions locales (effet rappel)", "Oui, l'immunité s'annule", "Uniquement dangereux pour le tétanos"],
    correct: 1,
    explanation: "Vacciner une personne déjà immune n'est <strong>pas dangereux</strong>. On observe parfois un <strong>effet rappel</strong> se traduisant par des réactions locales légèrement accentuées (rougeur, douleur). L'immunité est renforcée, pas annulée. C'est pourquoi il est préférable de vacciner plutôt que de ne pas vacciner en cas de doute sur le statut vaccinal.",
    difficulte: "facile"
  },
  {
    theme: "Traçabilité",
    text: "Quel document le pharmacien doit-il impérativement remplir après l'acte vaccinal pour la traçabilité ?",
    options: ["Une facture détaillée", "La notice du vaccin", "Le carnet de santé (DMP ou papier) avec le numéro de lot du vaccin", "Une décharge de responsabilité"],
    correct: 2,
    explanation: "Après toute vaccination, le pharmacien doit renseigner <strong>le carnet de santé</strong> (papier ou DMP — Dossier Médical Partagé) avec : le nom du vaccin, le numéro de lot, la date et le site d'injection. La traçabilité du numéro de lot est obligatoire pour permettre le suivi en cas de rappel de lot par le fabricant.",
    difficulte: "facile"
  },
  {
    theme: "Élimination des déchets",
    text: "Où doit-on éliminer la seringue et l'aiguille immédiatement après l'acte vaccinal ?",
    options: ["Poubelle ménagère ordinaire", "Sac jaune des déchets d'activité de soins", "Sac DASRI rouge", "Collecteur d'aiguilles rigide (boîte jaune DASRI)"],
    correct: 3,
    explanation: "Les aiguilles et seringues doivent être éliminées immédiatement dans un <strong>collecteur d'aiguilles rigide (boîte jaune DASRI)</strong> — sans recapuchonnage de l'aiguille pour éviter les AES. Ne jamais les mettre dans une poubelle ordinaire. Les collecteurs doivent être éliminés selon la filière DASRI réglementaire.",
    difficulte: "facile"
  },
  {
    theme: "Allaitement",
    text: "Peut-on vacciner une femme qui allaite ?",
    options: ["Non, aucun vaccin n'est compatible avec l'allaitement", "Oui, l'allaitement ne contre-indique aucune vaccination (sauf exception très rare)", "Uniquement la grippe et le Covid", "Uniquement après 6 mois d'allaitement"],
    correct: 1,
    explanation: "L'<strong>allaitement ne contre-indique pratiquement aucune vaccination</strong>. Les vaccins inactivés (grippe, coqueluche, hépatite B, pneumocoque…) sont compatibles sans restriction. Les vaccins vivants (ROR, varicelle) sont également compatibles avec l'allaitement selon les référentiels actuels. C'est un point important pour ne pas reporter des vaccinations chez les mères allaitantes.",
    difficulte: "facile"
  },
  {
    theme: "Surveillance post-injection",
    text: "Quel est le temps d'observation minimal recommandé après toute vaccination à l'officine ?",
    options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
    correct: 2,
    explanation: "Une surveillance de <strong>15 minutes</strong> minimum est recommandée après toute vaccination pour détecter une réaction anaphylactique précoce. Pour certains vaccins à risque allergique plus élevé (notamment en cas d'antécédent allergique), la surveillance peut être prolongée à 30 minutes. Le matériel d'urgence (adrénaline, antihistaminiques) doit être disponible.",
    difficulte: "facile"
  },
  {
    theme: "Vaccination officinale — enfants",
    text: "Un pharmacien peut-il prescrire et vacciner un enfant de 12 ans en 2026 ?",
    options: ["Non, réservé aux médecins", "Oui, pour tous les vaccins du calendrier (hors exceptions voyage)", "Uniquement la grippe", "Uniquement sur ordonnance médicale"],
    correct: 1,
    explanation: "Depuis 2023, les pharmaciens peuvent <strong>prescrire et administrer</strong> tous les vaccins du calendrier vaccinal aux personnes de <strong>11 ans et plus</strong>. Un enfant de 12 ans peut donc être vacciné en pharmacie sans ordonnance médicale préalable. Les seules exceptions concernent les vaccins nécessitant des centres spécialisés (fièvre jaune, rage pré-exposition).",
    difficulte: "facile"
  },
  {
    theme: "Malaise vagal",
    text: "Que faire si un patient présente des signes de malaise vagal (pâleur, sueurs, nausées) après l'injection ?",
    options: ["Lui donner du sucre en position assise", "L'allonger immédiatement avec les jambes surélevées", "Administrer de l'adrénaline", "Le laisser prendre l'air à l'extérieur"],
    correct: 1,
    explanation: "Le malaise vagal (réaction vaso-vagale) est la réaction post-vaccinale la plus fréquente. La conduite est : <strong>allonger le patient immédiatement avec les jambes surélevées</strong> (position de Trendelenburg), ce qui restaure la perfusion cérébrale. Surveiller les constantes. Ne pas confondre avec une anaphylaxie (qui nécessite l'adrénaline).",
    difficulte: "facile"
  },
  {
    theme: "Conservation — congélation",
    text: "Pourquoi ne faut-il jamais congeler un vaccin, même par erreur de réglage du réfrigérateur ?",
    options: ["Il devient toxique", "Le gel détruit les adjuvants aluminiques et inactive le vaccin", "Il change de couleur définitivement", "Il ne peut plus être prélevé dans la seringue"],
    correct: 1,
    explanation: "La congélation <strong>détruit irréversiblement les adjuvants aluminiques</strong> (hydroxyde d'aluminium) qui précipitent de façon permanente. Un vaccin congelé perd son immunogénicité tout en conservant un aspect visuel parfois normal. C'est pourquoi il faut toujours vérifier que le réfrigérateur ne descend pas en dessous de +2°C et utiliser le guide de stabilité en cas de doute.",
    difficulte: "facile"
  },
  {
    theme: "Technique d'injection",
    text: "Quelle est la conduite systématique avant d'injecter une seringue pré-remplie ?",
    options: ["Purger l'air de la seringue", "Vérifier la tension artérielle du patient", "Homogénéiser la suspension par agitation douce", "Désinfecter l'aiguille avec un antiseptique"],
    correct: 2,
    explanation: "Avant d'injecter une seringue pré-remplie (notamment pour les vaccins adsorbés avec dépôt), il faut <strong>homogénéiser la suspension par agitation douce</strong>. Le dépôt blanchâtre qui se forme pendant le stockage doit être remis en suspension pour garantir une dose homogène. Ne pas agiter vigoureusement. Vérifier également l'aspect (pas d'agrégats) et la date de péremption.",
    difficulte: "facile"
  },
  {
    theme: "Technique",
    text: "Quelle distance minimale doit séparer deux sites d'injection sur un même membre ?",
    options: ["1 cm", "2,5 cm (environ deux doigts)", "10 cm", "Interdit sur le même membre"],
    correct: 1,
    explanation: "Deux sites d'injection sur un même membre doivent être espacés d'au moins <strong>2,5 cm (environ deux largeurs de doigt)</strong>. Cette distance minimise les interactions entre les vaccins et permet de distinguer les réactions locales éventuelles. En pratique, les bras différents sont préférés, mais le même membre est autorisé si nécessaire.",
    difficulte: "modere"
  },
  {
    theme: "Vaccins vivants",
    text: "Quel intervalle respecter entre deux vaccins vivants s'ils ne sont pas co-administrés le même jour ?",
    options: ["15 jours", "28 jours (4 semaines) minimum", "2 mois", "6 mois"],
    correct: 1,
    explanation: "Deux vaccins vivants non co-administrés doivent être séparés de <strong>28 jours (4 semaines) minimum</strong>. En dessous de ce délai, le premier vaccin peut interférer avec la réplication du second (compétition virale), réduisant son immunogénicité. En revanche, co-administrés le même jour, aucun délai n'est requis.",
    difficulte: "modere"
  },
  {
    theme: "Reconstitution",
    text: "Dans quel délai maximal un vaccin reconstitué doit-il être administré (règle générale) ?",
    options: ["1 heure", "Selon le RCP, généralement dans les 6 heures au réfrigérateur", "24 heures", "48 heures"],
    correct: 1,
    explanation: "La règle générale est d'administrer un vaccin reconstitué <strong>selon les indications du RCP</strong>, généralement dans les <strong>6 heures au réfrigérateur</strong>. Par exemple, Shingrix® reconstitué peut être conservé 6h au frigo. Passé ce délai, le vaccin doit être éliminé. Toujours se référer au RCP spécifique de chaque vaccin car les délais varient.",
    difficulte: "modere"
  },
  {
    theme: "Aiguille",
    text: "Quelle aiguille privilégier pour une injection IM chez une personne très menue ou un enfant ?",
    options: ["40mm verte (adulte standard)", "16mm orange (sous-cutanée)", "25mm bleue (IM standard)", "Aiguille à insuline (8mm)"],
    correct: 2,
    explanation: "Pour une injection IM chez une personne menue ou un enfant, une <strong>aiguille de 25mm bleue</strong> est adaptée. L'aiguille de 40mm (verte) est réservée aux patients obèses. L'aiguille de 16mm (orange) est sous-cutanée. Le choix de la longueur doit garantir que le produit est bien déposé dans le muscle et non dans le tissu adipeux.",
    difficulte: "modere"
  },
  {
    theme: "Aspect vaccin",
    text: "Comment doit apparaître un vaccin adsorbé (type DTCaP, pneumocoque) après agitation ?",
    options: ["Parfaitement limpide", "Suspension trouble et blanchâtre homogène", "Liquide avec dépôt solide résiduel", "Avec une coloration légèrement rosée"],
    correct: 1,
    explanation: "Un vaccin adsorbé (contenant de l'aluminium comme adjuvant) doit présenter une <strong>suspension trouble et blanchâtre homogène</strong> après agitation. Un dépôt blanc au fond qui ne se remet pas en suspension, des agrégats persistants ou une coloration anormale sont des signes que le vaccin ne doit pas être utilisé (congélation possible, dégradation).",
    difficulte: "modere"
  },
  {
    theme: "Voie d'injection",
    text: "Quel est le risque d'injecter un vaccin adsorbé par voie sous-cutanée au lieu d'intramusculaire ?",
    options: ["Inefficacité totale du vaccin", "Risque accru de réactions locales sévères ou formation de nodules", "Choc anaphylactique", "Paralysie locale"],
    correct: 1,
    explanation: "L'injection sous-cutanée d'un vaccin adsorbé (destiné à la voie IM) provoque un dépôt d'aluminium dans le tissu adipeux, entraînant un risque accru de <strong>réactions locales sévères</strong> (induration, érythème, douleur prolongée) et de <strong>nodules</strong> pouvant persister plusieurs mois. La réponse immunitaire peut également être sous-optimale.",
    difficulte: "modere"
  },
  {
    theme: "Aiguille — changement",
    text: "Pourquoi est-il recommandé de ne pas utiliser la même aiguille pour le prélèvement et l'injection ?",
    options: ["Pour des raisons de coût", "Pour préserver le biseau de l'aiguille et garantir la stérilité", "Obligation légale systématique", "Pour changer de calibre selon le site"],
    correct: 1,
    explanation: "Utiliser la même aiguille pour le prélèvement et l'injection <strong>émousse le biseau</strong>, rendant l'injection plus douloureuse. De plus, l'aiguille peut être contaminée lors du prélèvement à travers un bouchon (traces de caoutchouc). Changer l'aiguille entre le prélèvement et l'injection préserve le biseau et garantit la stérilité.",
    difficulte: "modere"
  },
  {
    theme: "Hépatite B — rattrapage",
    text: "Un patient a commencé un schéma hépatite B (2 doses reçues) et a oublié les 2 dernières doses. Que faire ?",
    options: ["Recommencer à zéro avec 3 nouvelles doses", "Reprendre là où il s'est arrêté — les doses déjà reçues sont valides", "Administrer une double dose pour compenser", "Abandonner le schéma — délai trop long"],
    correct: 1,
    explanation: "Principe fondamental du rattrapage vaccinal : <strong>on ne recommence jamais à zéro</strong>. Les doses déjà reçues restent valides quelle que soit la durée de l'interruption. On reprend le schéma là où il s'est arrêté en administrant les doses manquantes. Ce principe s'applique à tous les vaccins sauf exceptions spécifiques mentionnées dans le RCP.",
    difficulte: "modere"
  },
  {
    theme: "Rupture de chaîne du froid",
    text: "Un vaccin est resté 2h sur le comptoir à 20°C. Que faites-vous ?",
    options: ["L'éliminer immédiatement", "L'utiliser normalement sans précaution", "Le mettre en quarantaine et vérifier le guide de stabilité selon le vaccin", "Le remettre au réfrigérateur sans rien noter"],
    correct: 2,
    explanation: "En cas de doute sur la chaîne du froid, la bonne pratique est de <strong>mettre le vaccin en quarantaine</strong> et de <strong>consulter le guide de stabilité</strong> spécifique à ce vaccin. Certains vaccins tolèrent des excursions de température limitées. Il ne faut pas utiliser un vaccin potentiellement altéré ni l'éliminer systématiquement sans vérification — un guide de stabilité permet souvent de confirmer l'utilisation possible.",
    difficulte: "modere"
  },
  {
    theme: "Immunodépression",
    text: "À partir de quelle dose de prednisone (équivalent), sur plus de 2 semaines, les vaccins vivants sont-ils contre-indiqués ?",
    options: ["2 mg/j", "5 mg/j", "10 mg/j", "40 mg/j"],
    correct: 2,
    explanation: "Une corticothérapie à dose <strong>≥ 10 mg/j d'équivalent prednisone pendant plus de 2 semaines</strong> est considérée comme immunosuppressive et contre-indique les vaccins vivants atténués. En dessous de ce seuil, les vaccins vivants peuvent généralement être administrés. Cette règle des 10 mg/j est une référence pratique, à moduler selon le tableau clinique.",
    difficulte: "modere"
  },
  {
    theme: "Substitution",
    text: "Quelle est la règle de substitution d'un vaccin en pharmacie ?",
    options: ["Libre, comme pour les médicaments génériques", "Possible uniquement si biosimilaire validé ou arrêté ministériel spécifique", "Interdite dans tous les cas", "Uniquement autorisée pour la grippe"],
    correct: 1,
    explanation: "La substitution des vaccins en pharmacie est <strong>encadrée</strong> : contrairement aux médicaments génériques, les vaccins ne peuvent pas être substitués librement. Une substitution n'est possible que si elle est prévue par un <strong>arrêté ministériel spécifique</strong> (notamment en situation de pénurie). L'interchangeabilité est validée pour certains vaccins (ex: hépatite B entre marques), mais pas automatique.",
    difficulte: "modere"
  },
  {
    theme: "Anticoagulants",
    text: "Un patient sous aspirine 75mg/j peut-il être vacciné en IM ?",
    options: ["Non, voie sous-cutanée obligatoire", "Oui, injection IM standard sans précaution particulière", "Arrêt de l'aspirine 3 jours avant", "Hospitalisation nécessaire"],
    correct: 1,
    explanation: "L'aspirine à faible dose (75-100mg) <strong>ne contre-indique pas la vaccination IM</strong>. Une injection IM standard avec compression de quelques secondes suffit. Seuls les patients sous anticoagulants à dose thérapeutique (AVK avec INR élevé, AOD) requièrent une aiguille fine (23-25G) et une compression prolongée (2 minutes). L'arrêt de l'aspirine n'est pas nécessaire.",
    difficulte: "modere"
  },
  {
    theme: "ROR adulte",
    text: "Combien de doses de ROR pour un adulte né après 1980 sans preuve de vaccination ?",
    options: ["1 dose", "2 doses à 1 mois d'intervalle", "3 doses", "Aucune, sérologie préalable obligatoire"],
    correct: 1,
    explanation: "Toute personne née après 1980 sans preuve de 2 doses de ROR doit recevoir <strong>2 doses espacées d'au moins 1 mois</strong>, sans sérologie préalable. Si la première dose a été reçue avant 12 mois (anticorps maternels interférants), une 3ème dose est nécessaire. Chez les soignants nés avant 1980 : 1 dose si jamais vaccinés.",
    difficulte: "difficile"
  },
  {
    theme: "Hépatite B",
    text: "Quel est le schéma classique de rattrapage hépatite B chez l'adulte ?",
    options: ["1 dose unique", "2 doses à 6 mois d'intervalle", "3 doses (M0, M1, M6)", "2 doses à 1 mois d'intervalle"],
    correct: 2,
    explanation: "Le schéma standard de rattrapage hépatite B chez l'adulte est <strong>3 doses : M0, M1, M6</strong>. Ce schéma est valable quel que soit l'âge. Un contrôle sérologique anti-HBs est recommandé 1 à 2 mois après la 3ème dose chez les soignants et les immunodéprimés pour vérifier la réponse immunitaire (seuil protecteur : ≥ 10 mUI/mL).",
    difficulte: "difficile"
  },
  {
    theme: "Pneumocoque",
    text: "Un adulte a reçu le VPP23 (Pneumovax) il y a 8 mois. Quel délai minimal avant le VPC20 ?",
    options: ["Immédiatement", "4 mois", "1 an", "5 ans"],
    correct: 2,
    explanation: "Après un VPP23, un délai d'au moins <strong>1 an</strong> est requis avant d'administrer le VPC20. Ce délai est nécessaire pour éviter une hyporéponse immunitaire (phénomène de tolérance immunologique). En pratique, si le VPP23 a été reçu récemment, attendre ce délai avant de compléter avec le VPC20.",
    difficulte: "difficile"
  },
  {
    theme: "DTP adulte",
    text: "Un patient de 40 ans a eu son dernier DTP à 25 ans. Quel est le prochain rappel recommandé ?",
    options: ["À 45 ans", "À 45 ans puis à 65 ans", "À 40 ans puis à 60 ans", "3 doses à refaire"],
    correct: 1,
    explanation: "Après le rappel de 25 ans, les rappels DTP adulte sont espacés de <strong>20 ans</strong> jusqu'à 65 ans. Un patient à jour à 25 ans doit faire son rappel à <strong>45 ans</strong>, puis à <strong>65 ans</strong>. À 40 ans, ce patient est encore à jour (5 ans de validité restants). Le prochain rappel est donc à 45 ans, puis à 65 ans (10 ans après).",
    difficulte: "difficile"
  },
  {
    theme: "Hépatite B soignant",
    text: "Un titre anti-HBs entre 10 et 100 mUI/mL après 3 doses chez un soignant impose :",
    options: ["Rien — le seuil protecteur est atteint", "1 dose de rappel immédiate puis contrôle", "Recommencer un schéma complet", "Exclusion des soins invasifs"],
    correct: 1,
    explanation: "Un titre anti-HBs entre <strong>10 et 100 mUI/mL</strong> après primovaccination chez un soignant correspond à une réponse faible mais protectrice. Le protocole recommande <strong>1 dose de rappel immédiate</strong> puis contrôle sérologique. Si le taux reste < 10 mUI/mL après un schéma complet de 6 doses, une non-réponse est constatée et le médecin du travail gère la conduite.",
    difficulte: "difficile"
  },
  {
    theme: "Varicelle post-exposition",
    text: "Vaccination varicelle en post-exposition (cas contact) : quel est le délai maximal d'efficacité ?",
    options: ["24 heures", "72 heures (3 jours)", "7 jours", "Inutile après contact"],
    correct: 1,
    explanation: "La vaccination post-exposition contre la varicelle est efficace si administrée dans les <strong>72 heures (3 jours)</strong> suivant le contact avec un cas. Elle peut également atténuer la maladie si administrée jusqu'à 5 jours après contact. Elle est contre-indiquée pendant la grossesse et chez les immunodéprimés sévères — dans ces cas, des immunoglobulines spécifiques sont à envisager.",
    difficulte: "difficile"
  },
  {
    theme: "Zona immunodéprimé",
    text: "Quel est le schéma Shingrix® (zona) chez un patient immunodéprimé de 25 ans ?",
    options: ["1 dose unique", "2 doses (M0 et M1 ou M2)", "3 doses", "Contre-indiqué — vaccin vivant"],
    correct: 1,
    explanation: "Shingrix® est un vaccin <strong>inactivé (recombinant)</strong>, donc utilisable chez les immunodéprimés. Le schéma standard est de <strong>2 doses</strong>, mais chez l'immunodéprimé, l'intervalle minimal est réduit à <strong>1 à 2 mois</strong> (contre 2-6 mois chez l'immunocompétent) pour une protection plus rapide. Il est recommandé dès 18 ans chez les immunodéprimés.",
    difficulte: "difficile"
  },
  {
    theme: "Méningocoques",
    text: "Un enfant vacciné Men ACWY à 8 ans doit-il recevoir un rappel à 11-14 ans ?",
    options: ["Non, la protection est suffisante", "Oui, une dose de rappel Men ACWY est recommandée", "Sérologie pour décider", "Men B uniquement à cet âge"],
    correct: 1,
    explanation: "Oui — la vaccination Men ACWY est recommandée <strong>chez tous les adolescents à 11-14 ans</strong>, indépendamment de leur statut vaccinal antérieur (y compris s'ils ont été vaccinés avant). L'immunité conférée par une vaccination précoce peut décliner, et l'adolescence est une période à risque accru d'infection à méningocoque.",
    difficulte: "difficile"
  },
  {
    theme: "HPV immunodéprimé",
    text: "Quel est le schéma HPV pour un patient de 18 ans sous immunosuppresseurs ?",
    options: ["2 doses (M0, M6) — schéma standard", "3 doses (M0, M2, M6)", "Contre-indiqué", "1 dose unique"],
    correct: 1,
    explanation: "En cas d'<strong>immunodépression</strong>, le schéma HPV est de <strong>3 doses (M0, M2, M6)</strong> quelle que soit l'âge, car la réponse immunitaire est diminuée. Ce schéma s'applique pour les patients VIH+, sous immunosuppresseurs, ou présentant un déficit immunitaire. Le vaccin HPV est inactivé et donc utilisable chez les immunodéprimés.",
    difficulte: "difficile"
  },
  {
    theme: "Méningocoques splénectomisé",
    text: "Quelle est la fréquence de rappel Men ACWY pour un patient splénectomisé ?",
    options: ["Tous les 2 ans", "Tous les 5 ans", "Tous les 10 ans", "Pas de rappel après primovaccination"],
    correct: 1,
    explanation: "Les patients <strong>splénectomisés</strong> (ou aspléniques fonctionnels) présentent un risque élevé d'infections invasives à méningocoques. Un rappel Men ACWY est recommandé <strong>tous les 5 ans</strong> (contre tous les 10-20 ans en population générale). Un calendrier vaccinal renforcé complet est requis pour ces patients : pneumocoque, méningocoque ACWY et B, Haemophilus b.",
    difficulte: "difficile"
  },
  {
    theme: "Pneumocoque chimiothérapie",
    text: "Quel vaccin pneumocoque pour un adulte de 35 ans débutant une chimiothérapie ?",
    options: ["VPC13 + VPP23 séquentiel", "VPC20 dose unique avant le traitement", "VPP23 seul", "Pas de vaccination — immunodéprimé"],
    correct: 1,
    explanation: "Chez un adulte débutant une chimiothérapie, il faut vacciner <strong>avant le début du traitement</strong> (idéalement au moins 2 semaines avant). Le <strong>VPC20 en dose unique</strong> est désormais recommandé. Il est préférable d'anticiper la vaccination en amont de l'immunodépression pour obtenir une réponse immunitaire optimale.",
    difficulte: "difficile"
  },
  {
    theme: "Calendrier vaccinal",
    text: "À quel âge fixe propose-t-on le premier rappel DTP-Coqueluche de l'adulte ?",
    options: ["18 ans", "25 ans", "30 ans", "45 ans"],
    correct: 1,
    explanation: "Le calendrier vaccinal prévoit un rappel <strong>dTcaP à 25 ans</strong> (diphtérie doses réduites, tétanos, coqueluche acellulaire, polio). C'est le premier rappel adulte, qui inclut la valence coqueluche. Il s'inscrit dans la série : 6 ans (DTCaP), 11-13 ans (dTcaP), 25 ans (dTcaP), puis tous les 20 ans jusqu'à 65 ans, puis tous les 10 ans.",
    difficulte: "facile"
  },
  {
    theme: "HPV",
    text: "Quel est l'âge recommandé pour débuter la vaccination HPV (garçons et filles) ?",
    options: ["9 ans", "11 ans", "14 ans", "15 ans"],
    correct: 1,
    explanation: "La vaccination HPV est recommandée à <strong>11 ans</strong> pour les garçons et les filles. À cet âge, le schéma est à <strong>2 doses</strong> (M0 et M6-13). La vaccination avant tout contact avec le virus est la plus efficace. Un rattrapage est possible jusqu'à <strong>26 ans révolus</strong>, avec un schéma à 3 doses après 15 ans.",
    difficulte: "facile"
  },
  {
    theme: "HPV",
    text: "Jusqu'à quel âge le rattrapage HPV est-il recommandé et remboursé pour tous ?",
    options: ["19 ans", "21 ans", "26 ans révolus", "30 ans"],
    correct: 2,
    explanation: "Depuis 2023, le rattrapage HPV est recommandé et remboursé jusqu'à <strong>26 ans révolus</strong> pour les garçons et les filles non vaccinés. Au-delà, la vaccination peut être proposée au cas par cas mais n'est plus remboursée en dehors de situations particulières. Le schéma de rattrapage après 15 ans est de <strong>3 doses</strong> (M0, M2, M6).",
    difficulte: "facile"
  },
  {
    theme: "DTP seniors",
    text: "À partir de 65 ans, quelle est la fréquence des rappels DTP ?",
    options: ["Tous les 20 ans", "Une seule fois", "Tous les 10 ans", "Tous les 5 ans"],
    correct: 2,
    explanation: "Après 65 ans, les rappels DTP sont recommandés <strong>tous les 10 ans</strong> (aux âges fixes : 65, 75, 85, 95 ans), contre tous les 20 ans chez l'adulte de moins de 65 ans. Cette fréquence accrue est liée à l'immunosénescence : le déclin naturel de l'immunité avec l'âge rend les rappels plus fréquents nécessaires.",
    difficulte: "facile"
  },
  {
    theme: "HPV",
    text: "Quel est le schéma HPV recommandé pour un adolescent de 13 ans ?",
    options: ["1 dose", "2 doses à M0 et M6-13", "3 doses", "2 doses à 1 mois d'intervalle"],
    correct: 1,
    explanation: "Pour un adolescent de <strong>11 à 14 ans révolus</strong>, le schéma HPV est de <strong>2 doses</strong> espacées de 6 à 13 mois (M0 et M6-13). Ce schéma simplifié est aussi efficace que 3 doses car la réponse immunitaire est meilleure à cet âge. À partir de 15 ans ou en cas d'immunodépression, le schéma passe à 3 doses (M0, M2, M6).",
    difficulte: "facile"
  },
  {
    theme: "Méningocoques",
    text: "Quel vaccin contre le méningocoque est désormais la norme en rappel à 11-14 ans ?",
    options: ["Méningocoque C seul", "Méningocoque B", "Méningocoque ACWY", "Méningocoque A"],
    correct: 2,
    explanation: "Depuis le calendrier vaccinal 2025, le rappel méningocoque à 11-14 ans se fait avec le vaccin <strong>tétravalent ACWY</strong>, qui protège contre les sérogroupes A, C, W et Y. Il remplace l'ancien rappel méningocoque C seul. Un rattrapage est recommandé jusqu'à 24 ans. Le méningocoque B (Bexsero) peut également être proposé à cet âge.",
    difficulte: "facile"
  },
  {
    theme: "Hépatite B",
    text: "Quelle preuve suffit à valider l'immunité hépatite B d'un étudiant en santé sans dosage d'anticorps ?",
    options: ["3 doses à n'importe quel âge", "3 doses reçues avant l'âge de 13 ans", "Sérologie négative", "Déclaration sur l'honneur"],
    correct: 1,
    explanation: "Pour les étudiants en santé, <strong>3 doses d'hépatite B reçues avant 13 ans</strong> sont considérées comme suffisantes sans nécessité de dosage des anticorps anti-HBs. En revanche, pour une primo-vaccination réalisée à l'âge adulte, un contrôle sérologique est requis pour vérifier la réponse immunitaire, notamment pour les soignants.",
    difficulte: "facile"
  },
  {
    theme: "Grippe",
    text: "Le vaccin contre la grippe est-il recommandé chez la femme enceinte ?",
    options: ["Non", "Oui, quel que soit le trimestre", "Uniquement au 3e trimestre", "Uniquement si comorbidité"],
    correct: 1,
    explanation: "La vaccination grippe est recommandée <strong>à tous les trimestres de la grossesse</strong>. Les femmes enceintes présentent un risque accru de formes graves de grippe. La vaccination protège la mère et indirectement le nourrisson par transfert d'anticorps maternels. Elle peut être co-administrée avec les autres vaccins recommandés pendant la grossesse.",
    difficulte: "facile"
  },
  {
    theme: "HPV",
    text: "Un homme de 24 ans jamais vacciné contre le HPV doit recevoir combien de doses ?",
    options: ["1 dose", "2 doses", "3 doses (M0, M2, M6)", "C'est trop tard pour vacciner"],
    correct: 2,
    explanation: "Chez une personne de <strong>15 ans et plus</strong> non vaccinée, le schéma HPV est de <strong>3 doses : M0, M2, M6</strong>. À 24 ans, la vaccination reste indiquée et remboursée jusqu'à 26 ans révolus. Ce schéma à 3 doses est nécessaire car la réponse immunitaire est moins forte qu'avant 15 ans.",
    difficulte: "facile"
  },
  {
    theme: "HPV",
    text: "Quel est l'intervalle minimal recommandé entre les 2 doses de HPV chez l'enfant de 11-14 ans ?",
    options: ["1 mois", "3 mois", "6 mois", "1 an"],
    correct: 2,
    explanation: "L'intervalle minimal entre les 2 doses de HPV dans le schéma à 2 doses (11-14 ans) est de <strong>6 mois</strong>. L'intervalle peut aller jusqu'à 13 mois. Cet espacement est important pour obtenir une réponse immunitaire optimale. Si l'intervalle est inférieur à 6 mois, une 3ème dose est nécessaire.",
    difficulte: "facile"
  },
  {
    theme: "DTP adulte",
    text: "Un patient de 45 ans a eu son dernier rappel DTP à 25 ans. Que lui proposez-vous ?",
    options: ["3 doses complètes", "Rien, il est à jour", "1 dose de dTcaP immédiatement", "Une sérologie préalable"],
    correct: 2,
    explanation: "Après 25 ans et jusqu'à 65 ans, les rappels DTP sont espacés de <strong>20 ans</strong>. Un patient à jour à 25 ans doit faire son prochain rappel à <strong>45 ans</strong>, puis à 65 ans. On propose donc <strong>1 dose de dTcaP</strong> (Boostrix Tetra® ou Repevax®) immédiatement. Pas besoin de sérologie préalable.",
    difficulte: "facile"
  },
  {
    theme: "Méningocoques",
    text: "La vaccination contre le méningocoque B est obligatoire depuis 2025 pour :",
    options: ["Les adolescents", "Les nourrissons", "Les personnes de plus de 65 ans", "Les HSH uniquement"],
    correct: 1,
    explanation: "Depuis le <strong>1er janvier 2025</strong>, la vaccination contre le méningocoque B (Bexsero®) est <strong>obligatoire pour tous les nourrissons</strong> selon le schéma M3, M5 et M12. Elle est recommandée (mais non obligatoire) pour les adolescents et jeunes adultes de 15-24 ans, et pour certaines populations à risque (asplénie, déficit en complément).",
    difficulte: "facile"
  },
  {
    theme: "HPV",
    text: "Quel est le schéma du Gardasil 9® si la première dose est injectée après 15 ans ?",
    options: ["2 doses à 6 mois d'intervalle", "3 doses (M0, M2, M6)", "3 doses (M0, M1, M4)", "1 dose unique"],
    correct: 1,
    explanation: "Après <strong>15 ans</strong>, le schéma Gardasil 9® passe à <strong>3 doses : M0, M2, M6</strong>. La réponse immunitaire est moins efficace passé cet âge, ce qui nécessite une dose supplémentaire. Ce schéma s'applique également en cas d'immunodépression, quelle que soit l'âge. Avant 15 ans : 2 doses (M0, M6-13) suffisent.",
    difficulte: "modere"
  },
  {
    theme: "Coqueluche grossesse",
    text: "Une femme enceinte vaccinée contre la coqueluche il y a 1 an doit-elle être revaccinée ?",
    options: ["Non, la protection est encore suffisante", "Oui, à chaque grossesse entre 20 et 36 SA", "Uniquement si non à jour du DTP", "C'est contre-indiqué pendant la grossesse"],
    correct: 1,
    explanation: "La vaccination coqueluche doit être réalisée à <strong>chaque grossesse</strong> entre 20 et 36 SA, quelle que soit la date de la vaccination précédente. Même vaccinée récemment, la mère doit être revaccinée : seule la vaccination pendant la grossesse garantit un taux d'anticorps suffisant pour le transfert transplacentaire optimal au fœtus.",
    difficulte: "modere"
  },
  {
    theme: "Pneumocoque",
    text: "Quel vaccin pneumocoque est recommandé en dose unique pour l'adulte à risque ?",
    options: ["VPC13 (Prevenar 13)", "VPP23 (Pneumovax)", "VPC20 (Prevenar 20)", "VPC15 (Vaxneuvance)"],
    correct: 2,
    explanation: "Depuis 2025, le <strong>VPC20 (Prevenar 20®)</strong> est recommandé en <strong>dose unique</strong> pour les adultes à risque et les personnes de 65 ans et plus. Il remplace le schéma séquentiel VPC13 + VPP23. Sa couverture à 20 valences le rend plus large que ses prédécesseurs. En cas de schéma antérieur avec VPC13/VPP23, un délai est à respecter.",
    difficulte: "modere"
  },
  {
    theme: "Co-administration",
    text: "Peut-on co-administrer le vaccin Grippe et le vaccin Covid-19 en pharmacie ?",
    options: ["Non, un intervalle est nécessaire", "Oui, sur deux sites d'injection différents", "Uniquement pour les patients de plus de 65 ans", "Sur prescription médicale uniquement"],
    correct: 1,
    explanation: "La co-administration grippe + Covid-19 est <strong>possible et recommandée</strong> : elle améliore l'observance vaccinale. Les deux vaccins doivent être injectés sur <strong>deux sites différents</strong> (bras différents ou sites espacés sur le même membre). Cette co-administration peut être réalisée en pharmacie sans prescription médicale pour les personnes éligibles.",
    difficulte: "modere"
  },
  {
    theme: "Méningocoques",
    text: "Jusqu'à quel âge peut-on rattraper la vaccination contre le méningocoque ACWY ?",
    options: ["18 ans", "24 ans révolus", "26 ans", "45 ans"],
    correct: 1,
    explanation: "Le rattrapage méningocoque ACWY est recommandé jusqu'à <strong>24 ans révolus</strong>. Cette recommandation vise à protéger les adolescents et jeunes adultes, population particulièrement exposée. Les personnes ayant été vaccinées antérieurement par le méningocoque C seul peuvent bénéficier d'une dose de rattrapage ACWY.",
    difficulte: "modere"
  },
  {
    theme: "Zona",
    text: "Quel est l'intervalle recommandé entre les deux doses du vaccin Zona (Shingrix®) ?",
    options: ["1 mois", "2 à 6 mois", "1 an", "5 ans"],
    correct: 1,
    explanation: "L'intervalle recommandé entre les deux doses de Shingrix® est de <strong>2 à 6 mois</strong>. En cas d'immunodépression, l'intervalle minimal est réduit à <strong>1 à 2 mois</strong> pour une protection plus rapide. L'intervalle minimal absolu est de 1 mois. Aucune sérologie préalable n'est nécessaire.",
    difficulte: "modere"
  },
  {
    theme: "DTP adulte",
    text: "Un patient de 50 ans a eu son dernier DTP à 25 ans. Quelle est la conduite ?",
    options: ["Recommencer à zéro avec 3 doses", "1 dose de dTcaP immédiate, puis rappel à 65 ans", "Attendre 65 ans pour le prochain rappel", "Faire une sérologie tétanos"],
    correct: 1,
    explanation: "Ce patient a 25 ans de retard. Principe fondamental : <strong>on ne repart pas à zéro</strong>. On administre <strong>1 dose de dTcaP immédiatement</strong>, puis le calendrier reprend normalement avec un rappel à 65 ans (10 ans après si ce rappel tombe avant 65 ans). Pas besoin de sérologie préalable.",
    difficulte: "modere"
  },
  {
    theme: "Hépatite B",
    text: "Quel schéma alternatif propose-t-on pour l'hépatite B en cas de départ imminent ?",
    options: ["2 doses à 1 mois d'intervalle", "3 doses (M0, M1, M2) sans rappel", "3 doses (J0, J7, J21) + rappel à 12 mois", "1 dose double charge"],
    correct: 2,
    explanation: "En cas de départ imminent, le schéma accéléré hépatite B est : <strong>J0, J7, J21 + rappel à 12 mois</strong>. Ce schéma permet d'obtenir une protection rapide avant le voyage. Il est réservé aux situations d'urgence car la protection à long terme nécessite le rappel à 12 mois pour consolider l'immunité.",
    difficulte: "modere"
  },
  {
    theme: "Vaccins vivants",
    text: "Quel délai respecter entre deux vaccins vivants (ex: ROR et varicelle) s'ils ne sont pas co-administrés ?",
    options: ["15 jours", "28 jours minimum", "2 mois", "Aucun délai particulier"],
    correct: 1,
    explanation: "Deux vaccins vivants atténués administrés à des dates différentes doivent être espacés d'au moins <strong>28 jours (4 semaines)</strong>. En revanche, s'ils sont administrés le même jour, aucun délai n'est requis. Ce délai évite une interférence immunologique entre les deux virus vaccinaux qui pourrait réduire l'efficacité.",
    difficulte: "modere"
  },
  {
    theme: "Coqueluche adulte",
    text: "Un patient de 40 ans jamais vacciné contre la coqueluche depuis l'enfance doit recevoir :",
    options: ["dTP seul (sans coqueluche)", "dTcaP (Repevax® ou Boostrix Tetra®)", "Vaccin coqueluche monovalent", "Aucun vaccin — trop tard"],
    correct: 1,
    explanation: "Pour tout adulte non à jour pour la coqueluche, on administre un <strong>vaccin combiné dTcaP</strong> (Repevax® ou Boostrix Tetra®). Il n'existe pas de vaccin coqueluche monovalent disponible pour l'adulte. La valence coqueluche est toujours associée aux rappels DTP. Après ce rappel, les rappels suivants se font tous les 20 ans.",
    difficulte: "modere"
  },
  {
    theme: "Conservation",
    text: "Quelle est la température de conservation stricte des vaccins au réfrigérateur ?",
    options: ["0°C à +4°C", "+2°C à +8°C", "+4°C à +10°C", "-18°C (congélateur)"],
    correct: 1,
    explanation: "Les vaccins doivent être conservés entre <strong>+2°C et +8°C</strong>, à l'abri de la lumière et de la congélation. Un vaccin congelé par erreur (aluminium précipité) ou exposé à des températures supérieures à 8°C doit faire l'objet d'une vérification selon le guide de stabilité avant utilisation. Le gel irréversible dégrade les adjuvants aluminiques.",
    difficulte: "modere"
  },
  {
    theme: "Tétanos",
    text: "En cas de plaie souillée chez une personne non à jour pour le tétanos, quelle est la priorité ?",
    options: ["Désinfection locale seule suffit", "Vaccination immédiate +/- immunoglobulines selon le statut", "Antibiothérapie préventive", "Sérologie tétanos en urgence"],
    correct: 1,
    explanation: "Face à une plaie souillée chez une personne non à jour, la priorité est la <strong>vaccination immédiate</strong> avec un vaccin contenant la valence tétanique. Selon le statut vaccinal et le type de plaie, des <strong>immunoglobulines anti-tétaniques</strong> peuvent être ajoutées (plaie à haut risque, jamais vacciné). La désinfection seule est insuffisante.",
    difficulte: "modere"
  },
  {
    theme: "Zona — Zostavax",
    text: "Quel délai minimal doit séparer une dose de Zostavax® d'une injection de Shingrix® ?",
    options: ["1 mois", "6 mois", "1 an", "5 ans"],
    correct: 2,
    explanation: "Un délai d'au moins <strong>1 an</strong> est recommandé entre Zostavax® (vaccin vivant) et Shingrix® (vaccin inactivé). Ce délai permet à l'immunité induite par Zostavax® de se stabiliser. En pratique, ce délai d'1 an est recommandé par la HAS bien qu'il n'existe pas de contre-indication formelle à un délai plus court.",
    difficulte: "difficile"
  },
  {
    theme: "Zona — conservation",
    text: "Quelle est la durée de conservation de Shingrix® après reconstitution si non utilisé immédiatement ?",
    options: ["1h à température ambiante", "6h au réfrigérateur entre 2-8°C", "24h au réfrigérateur", "Il doit être jeté immédiatement si non utilisé"],
    correct: 1,
    explanation: "Après reconstitution, Shingrix® peut être conservé <strong>jusqu'à 6h au réfrigérateur (2-8°C)</strong>. Il ne doit pas être congelé après reconstitution. Si non utilisé dans ce délai, il doit être éliminé. Cette information est importante pour la gestion des flacons multi-doses et l'organisation des séances de vaccination en officine.",
    difficulte: "difficile"
  },
  {
    theme: "Technique d'injection",
    text: "Quelle conduite tenir chez un patient âgé présentant une amyotrophie deltoïdienne sévère ?",
    options: ["Injecter en sous-cutané au niveau du deltoïde", "Changer de site : injecter en IM au niveau du vaste latéral de la cuisse", "Ne pas vacciner", "Utiliser une aiguille plus courte (16mm)"],
    correct: 1,
    explanation: "En cas d'<strong>amyotrophie deltoïdienne sévère</strong>, il faut changer de site d'injection. Le <strong>vaste latéral de la cuisse</strong> est une excellente alternative pour une injection IM chez l'adulte et le senior. La vaccination SC n'est pas recommandée car elle réduit l'immunogénicité des vaccins adsorbés et augmente les réactions locales.",
    difficulte: "difficile"
  },
  {
    theme: "Zona — immunodéprimé",
    text: "Chez un patient immunodéprimé, quel est l'intervalle minimal réduit entre les deux doses de Shingrix® ?",
    options: ["15 jours", "1 mois", "2 mois", "6 mois"],
    correct: 1,
    explanation: "Chez l'immunodéprimé, l'intervalle minimal entre les deux doses de Shingrix® est réduit à <strong>1 mois</strong> (contre 2 mois chez l'immunocompétent). Cette réduction permet d'obtenir une protection plus rapide dans un contexte de vulnérabilité accrue. L'intervalle idéal chez l'immunodéprimé est de 1 à 2 mois.",
    difficulte: "difficile"
  },
  {
    theme: "Zona — adjuvant",
    text: "Quel composant de Shingrix® est responsable de sa forte immunogénicité chez le sujet très âgé ?",
    options: ["L'antigène viral gE seul", "Le système adjuvant AS01B", "La présence de néomycine", "Le stabilisant gélatineux"],
    correct: 1,
    explanation: "La forte immunogénicité de Shingrix® chez le sujet âgé est due à son <strong>système adjuvant AS01B</strong>. Ce système contient deux immunostimulants : le MPL (monophosphoryl lipid A) et le QS-21 (saponine). Ensemble, ils amplifient la réponse immunitaire cellulaire (lymphocytes T CD4+ et CD8+) essentielle pour contrôler le VZV latent dans les ganglions sensitifs.",
    difficulte: "difficile"
  },
  {
    theme: "Grippe haute dose",
    text: "Le vaccin grippe Efluelda® (haute dose) contient combien de fois plus d'antigènes que les vaccins standard ?",
    options: ["2 fois", "3 fois", "4 fois", "10 fois"],
    correct: 2,
    explanation: "Efluelda® contient <strong>4 fois plus d'antigènes</strong> par souche (60 µg vs 15 µg par souche pour les vaccins standard), soit 240 µg au total pour les 4 souches. Cette dose plus élevée compense la réponse immunitaire diminuée par l'immunosénescence chez les 65 ans et plus, se traduisant par une meilleure protection clinique.",
    difficulte: "difficile"
  },
  {
    theme: "DTP senior",
    text: "Une sérologie tétanos est-elle utile avant de vacciner un senior au passé vaccinal inconnu ?",
    options: ["Oui, systématiquement pour éviter les rappels inutiles", "Non, on vaccine d'emblée pour ne pas manquer une opportunité", "Uniquement après une plaie souillée", "Uniquement pour les plus de 85 ans"],
    correct: 1,
    explanation: "La sérologie tétanos <strong>n'est pas recommandée avant de vacciner</strong> : vacciner une personne déjà immune n'est pas dangereux (simple effet rappel), alors que ne pas vacciner une personne non protégée représente un risque réel. Le principe est de ne pas manquer une opportunité vaccinale. On vaccine d'emblée selon le calendrier.",
    difficulte: "difficile"
  },
  {
    theme: "Grippe — Guillain-Barré",
    text: "Le syndrome de Guillain-Barré survenu dans les 6 semaines suivant une dose est une contre-indication à quel vaccin ?",
    options: ["Shingrix®", "Vaccin grippe", "Vaccin pneumococcique", "Vaccin DTP"],
    correct: 1,
    explanation: "Un syndrome de Guillain-Barré survenu dans les <strong>6 semaines suivant une vaccination antigrippale</strong> est une contre-indication aux futures doses du <strong>vaccin grippe</strong>. Cette association, bien que rare, est documentée. Pour les autres vaccins, l'antécédent de Guillain-Barré n'est pas une contre-indication formelle mais nécessite une évaluation bénéfice/risque.",
    difficulte: "difficile"
  },
  {
    theme: "Zona — adjuvant composition",
    text: "Quelle est la particularité du système adjuvant AS01B de Shingrix® concernant sa composition ?",
    options: ["Il ne contient pas d'adjuvant", "Adjuvant aluminique classique", "Contient deux composants actifs : QS-21 et MPL", "Adjuvant à base de squalène comme les vaccins grippe"],
    correct: 2,
    explanation: "Le système adjuvant AS01B contient <strong>deux composants immunostimulants</strong> : le <strong>QS-21</strong> (saponine extraite de l'écorce d'Quillaja saponaria) et le <strong>MPL</strong> (monophosphoryl lipid A, dérivé du LPS bactérien). Leur association synergique amplifie la réponse immunitaire cellulaire et humorale de manière bien supérieure à un adjuvant aluminique classique.",
    difficulte: "difficile"
  },
  {
    theme: "Rituximab",
    text: "Pour un patient sous rituximab, quel est le moment optimal pour la vaccination grippe ?",
    options: ["N'importe quand, le vaccin reste efficace", "Juste avant la perfusion de rituximab", "Au moins 4 mois après la dernière cure (repopulation lymphocytaire B)", "Pendant la perfusion pour effet synergique"],
    correct: 2,
    explanation: "Le rituximab (anti-CD20) détruit les lymphocytes B, rendant la réponse vaccinale inefficace pendant plusieurs mois. Le moment optimal est <strong>au moins 4 mois après la dernière cure</strong>, quand la repopulation lymphocytaire B est suffisante pour monter une réponse immunitaire. Vacciner trop tôt après rituximab aboutit à une protection insuffisante.",
    difficulte: "difficile"
  },
  {
    theme: "Zona — immunologie",
    text: "Quel est l'objectif immunologique de l'adjuvant AS01B dans Shingrix® ?",
    options: ["Stabiliser le pH du vaccin", "Recruter et activer les cellules présentatrices d'antigènes (CPA) et les lymphocytes T", "Diminuer la douleur à l'injection", "Augmenter la durée de conservation"],
    correct: 1,
    explanation: "L'AS01B <strong>recrute et active les cellules présentatrices d'antigènes</strong> (CPA, notamment les cellules dendritiques) au site d'injection, et stimule puissamment les <strong>lymphocytes T cytotoxiques (CD8+) et T helper (CD4+)</strong>. Cette activation cellulaire est essentielle chez le senior dont l'immunité cellulaire décline, et c'est ce qui explique l'efficacité remarquable de Shingrix® à tout âge.",
    difficulte: "difficile"
  },
  {
    theme: "Aspirine faible dose",
    text: "Un patient sous aspirine 75mg/j doit-il prendre des précautions pour une injection IM ?",
    options: ["Arrêter l'aspirine 3 jours avant", "Non, injection standard sans précaution particulière", "Voie sous-cutanée obligatoire", "Compression de 15 minutes obligatoire"],
    correct: 1,
    explanation: "L'aspirine à faible dose (75-100mg) <strong>ne contre-indique pas la vaccination IM</strong> et ne nécessite pas de précautions particulières. Une compression standard de quelques secondes après l'injection suffit. Seuls les patients sous anticoagulants oraux à dose thérapeutique (AVK, AOD) requièrent une aiguille fine et une compression prolongée (2 minutes).",
    difficulte: "difficile"
  },
  {
    theme: "DTP senior",
    text: "Quels sont les âges fixes des rappels DTP recommandés chez le senior ?",
    options: ["70, 80, 90 ans", "75, 85, 95 ans", "65, 75, 85, 95 ans", "Tous les 20 ans, pas d'âge fixe"],
    correct: 1,
    explanation: "Après 65 ans, les rappels DTP sont recommandés aux âges fixes : <strong>75, 85 et 95 ans</strong> (tous les 10 ans). Le premier rappel senior se fait à 65 ans (dernier rappel adulte), puis à 75, 85, 95 ans. La fréquence est de 10 ans (contre 20 ans avant 65 ans) en raison de l'immunosénescence.",
    difficulte: "facile"
  },
  {
    theme: "Pneumocoque",
    text: "Quelle valence de vaccin pneumococcique est désormais recommandée en dose unique pour les seniors ?",
    options: ["VPC13 (Prevenar 13)", "VPP23 (Pneumovax)", "VPC20 (Prevenar 20)", "VPC15 (Vaxneuvance)"],
    correct: 2,
    explanation: "Depuis 2025, le <strong>VPC20 (Prevenar 20®)</strong> est recommandé en <strong>dose unique</strong> pour toutes les personnes de 65 ans et plus. Il couvre 20 sérotypes pneumococciques et remplace le schéma séquentiel VPC13 + VPP23. C'est la recommandation actuelle, simplifiée et plus large que ses prédécesseurs.",
    difficulte: "facile"
  },
  {
    theme: "Zona",
    text: "Le vaccin Shingrix® est-il un vaccin vivant ou inactivé ?",
    options: ["Vivant atténué", "Inactivé recombinant adjuvé", "À ARN messager", "À vecteur viral"],
    correct: 1,
    explanation: "Shingrix® est un vaccin <strong>inactivé recombinant adjuvé</strong> : il contient une protéine recombinante de l'enveloppe du virus varicelle-zona (gE) associée à un puissant système adjuvant (AS01B). Cette nature inactivée le rend utilisable chez les immunodéprimés — contrairement à l'ancien Zostavax® (vaccin vivant).",
    difficulte: "facile"
  },
  {
    theme: "Zona",
    text: "Peut-on vacciner contre le zona une personne qui a déjà eu la maladie ?",
    options: ["Non, inutile — elle est immunisée", "Oui, la vaccination est recommandée malgré l'antécédent", "Seulement après 10 ans sans récidive", "Contre-indiqué après zona"],
    correct: 1,
    explanation: "Oui — avoir eu le zona n'est pas une contre-indication à Shingrix®. La vaccination reste recommandée car <strong>l'immunité naturelle post-zona peut s'estomper</strong> avec l'âge, laissant le patient vulnérable à une récidive. Il est conseillé d'attendre 1 an après l'épisode de zona avant de vacciner.",
    difficulte: "facile"
  },
  {
    theme: "Zona",
    text: "Quel est le principal avantage de Shingrix® par rapport à l'ancien vaccin Zostavax® ?",
    options: ["Une seule dose suffit", "Moins d'effets secondaires locaux", "Efficacité nettement supérieure, notamment chez les plus âgés", "Absence de douleur à l'injection"],
    correct: 2,
    explanation: "La supériorité de Shingrix® réside dans son <strong>efficacité bien maintenue avec l'âge</strong> : plus de 90% d'efficacité contre le zona chez les 70 ans et plus, et plus de 85% contre les douleurs post-zostériennes. L'ancien Zostavax® (vivant) voyait son efficacité chuter rapidement avec l'âge et après quelques années.",
    difficulte: "facile"
  },
  {
    theme: "Grippe senior",
    text: "Quel vaccin grippe est spécifiquement recommandé pour les plus de 65 ans ?",
    options: ["VaxigripTetra (standard)", "Influvac Tetra (standard)", "Efluelda (haute dose)", "Fluenz (nasal)"],
    correct: 2,
    explanation: "Le vaccin <strong>Efluelda®</strong> (haute dose) est spécifiquement recommandé pour les personnes de 65 ans et plus depuis 2023. Il contient <strong>4 fois plus d'antigènes</strong> que les vaccins standard, ce qui compense la réponse immunitaire diminuée par l'immunosénescence. Il est remboursé pour cette tranche d'âge.",
    difficulte: "facile"
  },
  {
    theme: "Zona",
    text: "À quel âge s'arrête la recommandation vaccinale pour le zona chez l'adulte sain ?",
    options: ["75 ans", "80 ans", "85 ans", "Pas d'âge limite supérieur"],
    correct: 3,
    explanation: "Il n'y a <strong>pas d'âge limite supérieur</strong> pour la vaccination Shingrix® chez l'adulte sain. La vaccination reste recommandée et bénéfique à tout âge car le risque de zona et de complications (douleurs post-zostériennes) augmente avec l'âge. L'efficacité de Shingrix® se maintient même chez les très âgés grâce à son système adjuvant.",
    difficulte: "facile"
  },
  {
    theme: "Co-administration",
    text: "La co-administration Grippe et Covid-19 est-elle possible chez un patient de 70 ans ?",
    options: ["Non, un intervalle de 15 jours est nécessaire", "Oui, dans le même bras", "Oui, sur deux sites d'injection différents", "Seulement sur prescription médicale"],
    correct: 2,
    explanation: "La co-administration grippe + Covid-19 est <strong>possible et recommandée</strong> chez les seniors pour simplifier le parcours vaccinal. Les deux vaccins doivent être injectés sur <strong>deux sites d'injection différents</strong> (bras différents de préférence). Cette co-administration peut être réalisée en pharmacie.",
    difficulte: "facile"
  },
  {
    theme: "Vaccination officinale",
    text: "En 2026, un pharmacien peut-il prescrire et administrer le vaccin Shingrix® à un patient de 68 ans ?",
    options: ["Non, prescription médicale obligatoire", "Oui, le pharmacien peut prescrire et vacciner", "Uniquement si le patient est en ALD", "Uniquement pour le 2e rappel"],
    correct: 1,
    explanation: "Depuis 2023, les <strong>pharmaciens peuvent prescrire et administrer</strong> tous les vaccins du calendrier vaccinal aux personnes de 11 ans et plus, y compris Shingrix®. Un pharmacien peut donc prescrire, délivrer et injecter ce vaccin à un patient de 68 ans sans ordonnance médicale préalable.",
    difficulte: "facile"
  },
  {
    theme: "Covid-19",
    text: "Quelle est la recommandation actuelle de rappel Covid-19 pour les plus de 65 ans ?",
    options: ["Tous les 6 mois", "Annuel, en période automnale", "Tous les 2 ans", "Plus de rappel recommandé"],
    correct: 1,
    explanation: "Pour les personnes de 65 ans et plus, un rappel Covid-19 est recommandé chaque année en période automnale (<strong>rappel annuel</strong>), avant la saison hivernale. Ce rappel est co-administrable avec la grippe. La vaccination annuelle vise à maintenir une protection suffisante face à l'évolution des variants.",
    difficulte: "facile"
  },
  {
    theme: "Grippe — accès",
    text: "En 2026, un patient de 65 ans peut-il se faire vacciner contre la grippe en pharmacie sans bon de l'Assurance Maladie reçu par courrier ?",
    options: ["Non, le bon est obligatoire", "Oui, le pharmacien édite le bon et vaccine directement", "Uniquement sur prescription médicale", "Uniquement après 75 ans"],
    correct: 1,
    explanation: "Depuis 2019, les patients éligibles à la vaccination grippe gratuite peuvent se rendre directement en pharmacie : le <strong>pharmacien édite lui-même le bon de vaccination</strong> et peut vacciner sur place. Il n'est plus nécessaire d'attendre le bon envoyé par courrier par l'Assurance Maladie.",
    difficulte: "facile"
  },
  {
    theme: "Zona",
    text: "Quel est le schéma vaccinal complet du vaccin Shingrix® en population générale ?",
    options: ["1 dose unique", "2 doses (M0 et entre M2 et M6)", "3 doses (M0, M1, M6)", "2 doses à 1 an d'écart"],
    correct: 1,
    explanation: "Le schéma Shingrix® standard est <strong>2 doses</strong> : M0 puis entre <strong>M2 et M6</strong>. L'intervalle minimal est de 2 mois, l'intervalle maximal de 6 mois. Chez l'immunodéprimé, l'intervalle est réduit à 1-2 mois. Il n'existe pas de schéma à 3 doses ni de dose de rappel après ce schéma complet.",
    difficulte: "modere"
  },
  {
    theme: "DTP senior",
    text: "Pourquoi les rappels DTP sont-ils plus rapprochés (tous les 10 ans) après 65 ans ?",
    options: ["Immunodépression iatrogène systématique", "Immunosénescence : déclin naturel de l'immunité avec l'âge", "Utilisation de doses pédiatriques", "Risque de tétanos tellurique accru"],
    correct: 1,
    explanation: "L'<strong>immunosénescence</strong> est le déclin progressif et naturel des fonctions immunitaires avec l'âge. Ce phénomène réduit la durée de protection conférée par les vaccinations. C'est pourquoi les rappels DTP passent de tous les 20 ans (adulte) à <strong>tous les 10 ans</strong> après 65 ans pour maintenir une protection suffisante.",
    difficulte: "modere"
  },
  {
    theme: "Zona",
    text: "Quel délai minimal faut-il respecter après un épisode de zona avant de vacciner avec Shingrix® ?",
    options: ["15 jours", "1 mois", "1 an", "5 ans"],
    correct: 2,
    explanation: "Il est recommandé d'attendre <strong>au moins 1 an</strong> après un épisode de zona avant d'administrer Shingrix®. Ce délai permet à l'immunité naturelle post-zona de se stabiliser. Vacciner trop tôt après l'épisode n'est pas dangereux mais pourrait être moins efficace car l'immunité est alors déjà stimulée.",
    difficulte: "modere"
  },
  {
    theme: "Zona — immunodéprimé",
    text: "Peut-on injecter Shingrix® à un patient sous corticoïdes ou immunosuppresseurs ?",
    options: ["Non, c'est un vaccin vivant contre-indiqué", "Oui, car c'est un vaccin inactivé recombinant", "Uniquement après l'arrêt du traitement", "À demi-dose"],
    correct: 1,
    explanation: "Shingrix® est un vaccin <strong>inactivé recombinant</strong> — il ne contient pas de virus vivant. Il est donc <strong>utilisable chez les immunodéprimés</strong>, y compris sous corticoïdes ou immunosuppresseurs. C'est une différence majeure avec l'ancien Zostavax® (vivant, contre-indiqué sous immunosuppresseurs). La réponse immunitaire peut être réduite mais la vaccination reste bénéfique.",
    difficulte: "modere"
  },
  {
    theme: "Zona",
    text: "Doit-on revacciner avec Shingrix® une personne ayant déjà reçu le vaccin Zostavax® ?",
    options: ["Non, la vaccination est définitive", "Oui, Shingrix® est recommandé même après Zostavax®", "Uniquement après 80 ans", "Seulement si immunodéprimée"],
    correct: 1,
    explanation: "Oui — Shingrix® est recommandé même chez les personnes ayant déjà reçu Zostavax® (ancien vaccin vivant). L'<strong>efficacité nettement supérieure</strong> de Shingrix® (>90% vs ~50% pour Zostavax® chez les 70+) justifie la revaccination. Un délai d'au moins 1 an après Zostavax® est souhaitable.",
    difficulte: "modere"
  },
  {
    theme: "Anticoagulants",
    text: "Un patient de 70 ans sous anticoagulants oraux (AOD) peut-il être vacciné par voie IM ?",
    options: ["Non, voie sous-cutanée obligatoire", "Oui, avec une aiguille fine et compression prolongée de 2 minutes", "Uniquement à l'hôpital", "Contre-indiqué"],
    correct: 1,
    explanation: "La vaccination IM est possible chez un patient sous anticoagulants oraux. La technique recommandée : utiliser une <strong>aiguille fine (23G ou 25G)</strong> et appliquer une <strong>compression ferme de 2 minutes</strong> après l'injection sans masser. Aucun arrêt de l'anticoagulant n'est nécessaire. La voie SC n'est pas recommandée car elle peut réduire l'immunogénicité pour certains vaccins.",
    difficulte: "modere"
  },
  {
    theme: "Zona",
    text: "Quelle est la complication majeure du zona que la vaccination vise principalement à prévenir ?",
    options: ["La paralysie faciale", "Les douleurs post-zostériennes (DPZ)", "La cécité", "La surdité"],
    correct: 1,
    explanation: "La complication la plus redoutée du zona est la <strong>névralgie post-zostérienne (NPZ)</strong> ou douleurs post-zostériennes : des douleurs neuropathiques intenses, chroniques et invalidantes. Leur fréquence et leur sévérité augmentent avec l'âge. Shingrix® réduit ce risque de plus de <strong>85%</strong>, en plus de réduire l'incidence du zona lui-même.",
    difficulte: "modere"
  },
  {
    theme: "Pneumocoque",
    text: "Un patient à risque a reçu VPC13 à 65 ans et VPP23 à 66 ans. Doit-il recevoir le VPC20 ?",
    options: ["Non, le schéma séquentiel est définitif", "Oui, une dose de VPC20 est préconisée 5 ans après le VPP23", "Oui, tous les ans", "Non, jamais après un schéma séquentiel"],
    correct: 1,
    explanation: "Selon les recommandations actuelles, une dose de <strong>VPC20 peut être préconisée 5 ans après le VPP23</strong> chez les patients à risque élevé, pour élargir la couverture sérotypique. Le délai de 5 ans après VPP23 est nécessaire pour éviter une hyporéponse. Cette recommandation s'applique aux patients immunodéprimés et à certaines situations à risque.",
    difficulte: "modere"
  },
  {
    theme: "Remboursement",
    text: "Quelle est la prise en charge du vaccin Shingrix® pour les 65 ans et plus en 2026 ?",
    options: ["Non remboursé — à la charge du patient", "Remboursé par l'Assurance Maladie", "Uniquement remboursé pour les ALD", "Gratuit uniquement pour les plus de 80 ans"],
    correct: 1,
    explanation: "Depuis 2024, Shingrix® est <strong>remboursé par l'Assurance Maladie</strong> pour les personnes de 65 ans et plus (remboursement à 65% par l'AM, complément par la mutuelle). Cette prise en charge a considérablement amélioré l'accès à ce vaccin pour les seniors. Il est également remboursé pour les immunodéprimés dès 18 ans.",
    difficulte: "modere"
  },
  {
    theme: "Zona — mécanisme",
    text: "Pourquoi Shingrix® est-il plus efficace que l'ancien vaccin vivant Zostavax® chez le senior ?",
    options: ["Il contient plus de virus actif", "Son système adjuvant AS01B active puissamment les cellules T cytotoxiques", "Il est administré en 2 doses", "Sa meilleure stabilité thermique"],
    correct: 1,
    explanation: "La supériorité de Shingrix® est liée à son <strong>système adjuvant AS01B</strong>, qui contient deux composants immunostimulants (QS-21 et MPL). Ce système active puissamment les <strong>lymphocytes T cytotoxiques</strong>, essentiels pour le contrôle du VZV latent. C'est crucial chez le senior dont l'immunité cellulaire est diminuée par l'immunosénescence.",
    difficulte: "modere"
  },
  {
    theme: "Co-administration",
    text: "Peut-on injecter Shingrix® en même temps qu'un vaccin pneumococcique ?",
    options: ["Non, un intervalle de 15 jours est obligatoire", "Oui, sur deux sites d'injection différents", "Seulement si le patient n'est pas fatigué", "Non, 1 mois d'intervalle requis"],
    correct: 1,
    explanation: "La co-administration de Shingrix® avec le vaccin pneumococcique est <strong>possible et validée</strong>. Les vaccins sont injectés sur <strong>deux sites différents</strong> (bras différents de préférence). Cette co-administration est utile pour réduire le nombre de visites et améliorer la couverture vaccinale chez les seniors.",
    difficulte: "modere"
  },
  {
    theme: "Zona",
    text: "Quel est l'intervalle minimal entre les deux doses de Shingrix® pour une protection rapide ?",
    options: ["15 jours", "1 mois", "2 mois", "6 mois"],
    correct: 1,
    explanation: "L'intervalle <strong>minimal</strong> entre les deux doses de Shingrix® est de <strong>1 mois</strong>. En pratique, l'intervalle recommandé est de 2 à 6 mois pour une immunogénicité optimale. En cas d'immunodépression (où une protection rapide est souhaitée), un intervalle de 1 à 2 mois est préférable.",
    difficulte: "modere"
  }
];

// Helper : tire N questions aléatoires depuis le pool par difficulté
function pickQuestions(pool, facile, modere, difficile) {
  function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
  const f = shuffle(pool.filter(q=>q.difficulte==="facile")).slice(0,facile);
  const m = shuffle(pool.filter(q=>q.difficulte==="modere")).slice(0,modere);
  const d = shuffle(pool.filter(q=>q.difficulte==="difficile")).slice(0,difficile);
  return shuffle([...f,...m,...d]);
}