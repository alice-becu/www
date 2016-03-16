<?php

require_once "back/dicts/dict_fr.php";
require_once "back/dicts/dict_en.php";
require_once "back/dicts/dict_es.php";



// création de l'instance de traducteur
$_TRANSLATOR = new Translator();
// ajout des dictionnaires
$_TRANSLATOR->addDictionary($DICT_FR);
$_TRANSLATOR->addDictionary($DICT_EN);
$_TRANSLATOR->addDictionary($DICT_ES);

//
// ------------------------------------ DICTIONNAIRE LIENS ------------------------------------
//
$links = new Dictionary('');
$links->translate(StringIdentifier::LINK_HOME, "page.php?page=home");
$links->translate(StringIdentifier::LINK_DEVIS, "page.php?page=devis");
$links->translate(StringIdentifier::LINK_SKILLS, "page.php?page=skills");
$links->translate(StringIdentifier::LINK_ENGAGEMENT, "page.php?page=engagement");
$links->translate(StringIdentifier::LINK_EVENTS, "page.php?page=events");
$links->translate(StringIdentifier::LINK_PARTNERS, "page.php?page=partners");
$links->translate(StringIdentifier::LINK_STUDY, "page.php?page=study");
$links->translate(StringIdentifier::LINK_TEAM, "page.php?page=team");
$links->translate(StringIdentifier::LINK_TRUST, "page.php?page=trust");

$_TRANSLATOR->setLinks($links);