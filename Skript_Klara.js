/********************* 
 * Skript_Klara Test *
 *********************/

import { PsychoJS } from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import { TrialHandler } from './lib/data-2021.1.4.js';
import { Scheduler } from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Skript_Klara';  // from the Builder filename that created this script
let expInfo = {'VP_Code': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Begrüßung_1RoutineBegin());
flowScheduler.add(Begrüßung_1RoutineEachFrame());
flowScheduler.add(Begrüßung_1RoutineEnd());
flowScheduler.add(Begrüßung_2RoutineBegin());
flowScheduler.add(Begrüßung_2RoutineEachFrame());
flowScheduler.add(Begrüßung_2RoutineEnd());
flowScheduler.add(Begrüßung_3RoutineBegin());
flowScheduler.add(Begrüßung_3RoutineEachFrame());
flowScheduler.add(Begrüßung_3RoutineEnd());
flowScheduler.add(BeispielRoutineBegin());
flowScheduler.add(BeispielRoutineEachFrame());
flowScheduler.add(BeispielRoutineEnd());
flowScheduler.add(Anfang_ExperimentRoutineBegin());
flowScheduler.add(Anfang_ExperimentRoutineEachFrame());
flowScheduler.add(Anfang_ExperimentRoutineEnd());
const Lernphase_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Lernphase_LoopLoopBegin, Lernphase_LoopLoopScheduler);
flowScheduler.add(Lernphase_LoopLoopScheduler);
flowScheduler.add(Lernphase_LoopLoopEnd);
flowScheduler.add(test_startRoutineBegin());
flowScheduler.add(test_startRoutineEachFrame());
flowScheduler.add(test_startRoutineEnd());
const T1_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(T1_LoopLoopBegin, T1_LoopLoopScheduler);
flowScheduler.add(T1_LoopLoopScheduler);
flowScheduler.add(T1_LoopLoopEnd);
flowScheduler.add(AbschiedRoutineBegin());
flowScheduler.add(AbschiedRoutineEachFrame());
flowScheduler.add(AbschiedRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'lures/L_t004_q50_g.png', 'path': 'lures/L_t004_q50_g.png'},
    {'name': 'foils/F007.png', 'path': 'foils/F007.png'},
    {'name': 'lures/L_t001_q50_h.png', 'path': 'lures/L_t001_q50_h.png'},
    {'name': 'lures/L_t005_q50_d.png', 'path': 'lures/L_t005_q50_d.png'},
    {'name': 'foils/F015.png', 'path': 'foils/F015.png'},
    {'name': 'targets/T002.png', 'path': 'targets/T002.png'},
    {'name': 'foils/F047.png', 'path': 'foils/F047.png'},
    {'name': 'lures/L_t005_q50_b.png', 'path': 'lures/L_t005_q50_b.png'},
    {'name': 'lures/L_t002_q50_c.png', 'path': 'lures/L_t002_q50_c.png'},
    {'name': 'lures/L_t002_q50_f.png', 'path': 'lures/L_t002_q50_f.png'},
    {'name': 'lures/L_t002_q50_a.png', 'path': 'lures/L_t002_q50_a.png'},
    {'name': 'lures/L_t007_q50_d.png', 'path': 'lures/L_t007_q50_d.png'},
    {'name': 'foils/F035.png', 'path': 'foils/F035.png'},
    {'name': 'lures/L_t005_q50_g.png', 'path': 'lures/L_t005_q50_g.png'},
    {'name': 'foils/F051.png', 'path': 'foils/F051.png'},
    {'name': 'foils/F045.png', 'path': 'foils/F045.png'},
    {'name': 'foils/F072.png', 'path': 'foils/F072.png'},
    {'name': 'foils/F031.png', 'path': 'foils/F031.png'},
    {'name': 'lures/L_t006_q50_a.png', 'path': 'lures/L_t006_q50_a.png'},
    {'name': 'foils/F052.png', 'path': 'foils/F052.png'},
    {'name': 'lures/L_t010_q50_h.png', 'path': 'lures/L_t010_q50_h.png'},
    {'name': 'lures/L_t006_q50_d.png', 'path': 'lures/L_t006_q50_d.png'},
    {'name': 'lures/L_t009_q50_f.png', 'path': 'lures/L_t009_q50_f.png'},
    {'name': 'foils/F066.png', 'path': 'foils/F066.png'},
    {'name': 'foils/F080.png', 'path': 'foils/F080.png'},
    {'name': 'foils/F086.png', 'path': 'foils/F086.png'},
    {'name': 'lures/L_t007_q50_e.png', 'path': 'lures/L_t007_q50_e.png'},
    {'name': 'lures/L_t009_q50_d.png', 'path': 'lures/L_t009_q50_d.png'},
    {'name': 'foils/F009.png', 'path': 'foils/F009.png'},
    {'name': 'foils/F017.png', 'path': 'foils/F017.png'},
    {'name': 'foils/F069.png', 'path': 'foils/F069.png'},
    {'name': 'foils/F041.png', 'path': 'foils/F041.png'},
    {'name': 'foils/F032.png', 'path': 'foils/F032.png'},
    {'name': 'foils/F046.png', 'path': 'foils/F046.png'},
    {'name': 'foils/F075.png', 'path': 'foils/F075.png'},
    {'name': 'lures/L_t002_q50_h.png', 'path': 'lures/L_t002_q50_h.png'},
    {'name': 'lures/L_t003_q50_h.png', 'path': 'lures/L_t003_q50_h.png'},
    {'name': 'foils/F055.png', 'path': 'foils/F055.png'},
    {'name': 'targets/T003.png', 'path': 'targets/T003.png'},
    {'name': 'foils/F076.png', 'path': 'foils/F076.png'},
    {'name': 'foils/F050.png', 'path': 'foils/F050.png'},
    {'name': 'lures/L_t009_q50_a.png', 'path': 'lures/L_t009_q50_a.png'},
    {'name': 'foils/F037.png', 'path': 'foils/F037.png'},
    {'name': 'lures/L_t009_q50_c.png', 'path': 'lures/L_t009_q50_c.png'},
    {'name': 'lures/L_t003_q50_d.png', 'path': 'lures/L_t003_q50_d.png'},
    {'name': 'lures/L_t004_q50_d.png', 'path': 'lures/L_t004_q50_d.png'},
    {'name': 'foils/F063.png', 'path': 'foils/F063.png'},
    {'name': 'targets/T007.png', 'path': 'targets/T007.png'},
    {'name': 'lures/L_t001_q50_g.png', 'path': 'lures/L_t001_q50_g.png'},
    {'name': 'lures/L_t001_q50_e.png', 'path': 'lures/L_t001_q50_e.png'},
    {'name': 'foils/F077.png', 'path': 'foils/F077.png'},
    {'name': 'targets/T008.png', 'path': 'targets/T008.png'},
    {'name': 'targets/T009.png', 'path': 'targets/T009.png'},
    {'name': 'Stimuli.xlsx', 'path': 'Stimuli.xlsx'},
    {'name': 'lures/L_t006_q50_h.png', 'path': 'lures/L_t006_q50_h.png'},
    {'name': 'foils/F054.png', 'path': 'foils/F054.png'},
    {'name': 'lures/L_t001_q50_d.png', 'path': 'lures/L_t001_q50_d.png'},
    {'name': 'foils/F060.png', 'path': 'foils/F060.png'},
    {'name': 'lures/L_t003_q50_c.png', 'path': 'lures/L_t003_q50_c.png'},
    {'name': 'targets/T001.png', 'path': 'targets/T001.png'},
    {'name': 'foils/F003.png', 'path': 'foils/F003.png'},
    {'name': 'foils/F081.png', 'path': 'foils/F081.png'},
    {'name': 'lures/L_t006_q50_c.png', 'path': 'lures/L_t006_q50_c.png'},
    {'name': 'lures/L_t003_q50_b.png', 'path': 'lures/L_t003_q50_b.png'},
    {'name': 'lures/L_t010_q50_f.png', 'path': 'lures/L_t010_q50_f.png'},
    {'name': 'foils/F004.png', 'path': 'foils/F004.png'},
    {'name': 'foils/F021.png', 'path': 'foils/F021.png'},
    {'name': 'foils/F058.png', 'path': 'foils/F058.png'},
    {'name': 'VSMT Beispiel.JPG', 'path': 'VSMT Beispiel.JPG'},
    {'name': 'lures/L_t004_q50_h.png', 'path': 'lures/L_t004_q50_h.png'},
    {'name': 'lures/L_t007_q50_g.png', 'path': 'lures/L_t007_q50_g.png'},
    {'name': 'foils/F048.png', 'path': 'foils/F048.png'},
    {'name': 'foils/F030.png', 'path': 'foils/F030.png'},
    {'name': 'lures/L_t007_q50_h.png', 'path': 'lures/L_t007_q50_h.png'},
    {'name': 'lures/L_t003_q50_g.png', 'path': 'lures/L_t003_q50_g.png'},
    {'name': 'foils/F067.png', 'path': 'foils/F067.png'},
    {'name': 'lures/L_t006_q50_f.png', 'path': 'lures/L_t006_q50_f.png'},
    {'name': 'foils/F064.png', 'path': 'foils/F064.png'},
    {'name': 'foils/F065.png', 'path': 'foils/F065.png'},
    {'name': 'lures/L_t007_q50_b.png', 'path': 'lures/L_t007_q50_b.png'},
    {'name': 'lures/L_t004_q50_b.png', 'path': 'lures/L_t004_q50_b.png'},
    {'name': 'foils/F088.png', 'path': 'foils/F088.png'},
    {'name': 'foils/F008.png', 'path': 'foils/F008.png'},
    {'name': 'foils/F040.png', 'path': 'foils/F040.png'},
    {'name': 'foils/F078.png', 'path': 'foils/F078.png'},
    {'name': 'lures/L_t008_q50_c.png', 'path': 'lures/L_t008_q50_c.png'},
    {'name': 'lures/L_t005_q50_a.png', 'path': 'lures/L_t005_q50_a.png'},
    {'name': 'lures/L_t004_q50_e.png', 'path': 'lures/L_t004_q50_e.png'},
    {'name': 'foils/F002.png', 'path': 'foils/F002.png'},
    {'name': 'lures/L_t001_q50_f.png', 'path': 'lures/L_t001_q50_f.png'},
    {'name': 'foils/F053.png', 'path': 'foils/F053.png'},
    {'name': 'lures/L_t007_q50_f.png', 'path': 'lures/L_t007_q50_f.png'},
    {'name': 'lures/L_t008_q50_f.png', 'path': 'lures/L_t008_q50_f.png'},
    {'name': 'lures/L_t010_q50_e.png', 'path': 'lures/L_t010_q50_e.png'},
    {'name': 'foils/F027.png', 'path': 'foils/F027.png'},
    {'name': 'foils/F074.png', 'path': 'foils/F074.png'},
    {'name': 'foils/F090.png', 'path': 'foils/F090.png'},
    {'name': 'foils/F049.png', 'path': 'foils/F049.png'},
    {'name': 'foils/F087.png', 'path': 'foils/F087.png'},
    {'name': 'foils/F011.png', 'path': 'foils/F011.png'},
    {'name': 'foils/F061.png', 'path': 'foils/F061.png'},
    {'name': 'lures/L_t002_q50_d.png', 'path': 'lures/L_t002_q50_d.png'},
    {'name': 'lures/L_t006_q50_b.png', 'path': 'lures/L_t006_q50_b.png'},
    {'name': 'foils/F056.png', 'path': 'foils/F056.png'},
    {'name': 'lures/L_t010_q50_b.png', 'path': 'lures/L_t010_q50_b.png'},
    {'name': 'lures/L_t003_q50_e.png', 'path': 'lures/L_t003_q50_e.png'},
    {'name': 'foils/F014.png', 'path': 'foils/F014.png'},
    {'name': 'foils/F083.png', 'path': 'foils/F083.png'},
    {'name': 'lures/L_t005_q50_c.png', 'path': 'lures/L_t005_q50_c.png'},
    {'name': 'foils/F085.png', 'path': 'foils/F085.png'},
    {'name': 'lures/L_t006_q50_g.png', 'path': 'lures/L_t006_q50_g.png'},
    {'name': 'lures/L_t005_q50_e.png', 'path': 'lures/L_t005_q50_e.png'},
    {'name': 'lures/L_t009_q50_e.png', 'path': 'lures/L_t009_q50_e.png'},
    {'name': 'targets/T010.png', 'path': 'targets/T010.png'},
    {'name': 'lures/L_t004_q50_f.png', 'path': 'lures/L_t004_q50_f.png'},
    {'name': 'lures/L_t010_q50_g.png', 'path': 'lures/L_t010_q50_g.png'},
    {'name': 'foils/F036.png', 'path': 'foils/F036.png'},
    {'name': 'lures/L_t010_q50_d.png', 'path': 'lures/L_t010_q50_d.png'},
    {'name': 'lures/L_t005_q50_f.png', 'path': 'lures/L_t005_q50_f.png'},
    {'name': 'targets/T005.png', 'path': 'targets/T005.png'},
    {'name': 'foils/F034.png', 'path': 'foils/F034.png'},
    {'name': 'lures/L_t008_q50_h.png', 'path': 'lures/L_t008_q50_h.png'},
    {'name': 'lures/L_t006_q50_e.png', 'path': 'lures/L_t006_q50_e.png'},
    {'name': 'foils/F001.png', 'path': 'foils/F001.png'},
    {'name': 'foils/F057.png', 'path': 'foils/F057.png'},
    {'name': 'foils/F028.png', 'path': 'foils/F028.png'},
    {'name': 'lures/L_t004_q50_a.png', 'path': 'lures/L_t004_q50_a.png'},
    {'name': 'lures/L_t009_q50_g.png', 'path': 'lures/L_t009_q50_g.png'},
    {'name': 'foils/F026.png', 'path': 'foils/F026.png'},
    {'name': 'lures/L_t001_q50_a.png', 'path': 'lures/L_t001_q50_a.png'},
    {'name': 'foils/F073.png', 'path': 'foils/F073.png'},
    {'name': 'foils/F059.png', 'path': 'foils/F059.png'},
    {'name': 'foils/F012.png', 'path': 'foils/F012.png'},
    {'name': 'lures/L_t001_q50_b.png', 'path': 'lures/L_t001_q50_b.png'},
    {'name': 'lures/L_t004_q50_c.png', 'path': 'lures/L_t004_q50_c.png'},
    {'name': 'lures/L_t001_q50_c.png', 'path': 'lures/L_t001_q50_c.png'},
    {'name': 'lures/L_t010_q50_a.png', 'path': 'lures/L_t010_q50_a.png'},
    {'name': 'lures/L_t010_q50_c.png', 'path': 'lures/L_t010_q50_c.png'},
    {'name': 'foils/F022.png', 'path': 'foils/F022.png'},
    {'name': 'lures/L_t003_q50_f.png', 'path': 'lures/L_t003_q50_f.png'},
    {'name': 'foils/F010.png', 'path': 'foils/F010.png'},
    {'name': 'foils/F016.png', 'path': 'foils/F016.png'},
    {'name': 'foils/F023.png', 'path': 'foils/F023.png'},
    {'name': 'lures/L_t002_q50_b.png', 'path': 'lures/L_t002_q50_b.png'},
    {'name': 'lures/L_t007_q50_c.png', 'path': 'lures/L_t007_q50_c.png'},
    {'name': 'foils/F038.png', 'path': 'foils/F038.png'},
    {'name': 'foils/F013.png', 'path': 'foils/F013.png'},
    {'name': 'foils/F042.png', 'path': 'foils/F042.png'},
    {'name': 'foils/F070.png', 'path': 'foils/F070.png'},
    {'name': 'lures/L_t008_q50_a.png', 'path': 'lures/L_t008_q50_a.png'},
    {'name': 'lures/L_t009_q50_b.png', 'path': 'lures/L_t009_q50_b.png'},
    {'name': 'targets/T006.png', 'path': 'targets/T006.png'},
    {'name': 'foils/F006.png', 'path': 'foils/F006.png'},
    {'name': 'foils/F079.png', 'path': 'foils/F079.png'},
    {'name': 'foils/F029.png', 'path': 'foils/F029.png'},
    {'name': 'foils/F071.png', 'path': 'foils/F071.png'},
    {'name': 'lures/L_t009_q50_h.png', 'path': 'lures/L_t009_q50_h.png'},
    {'name': 'foils/F033.png', 'path': 'foils/F033.png'},
    {'name': 'lures/L_t008_q50_b.png', 'path': 'lures/L_t008_q50_b.png'},
    {'name': 'lures/L_t008_q50_g.png', 'path': 'lures/L_t008_q50_g.png'},
    {'name': 'foils/F084.png', 'path': 'foils/F084.png'},
    {'name': 'foils/F068.png', 'path': 'foils/F068.png'},
    {'name': 'targets/T004.png', 'path': 'targets/T004.png'},
    {'name': 'lures/L_t003_q50_a.png', 'path': 'lures/L_t003_q50_a.png'},
    {'name': 'lures/L_t005_q50_h.png', 'path': 'lures/L_t005_q50_h.png'},
    {'name': 'foils/F020.png', 'path': 'foils/F020.png'},
    {'name': 'foils/F024.png', 'path': 'foils/F024.png'},
    {'name': 'foils/F062.png', 'path': 'foils/F062.png'},
    {'name': 'foils/F089.png', 'path': 'foils/F089.png'},
    {'name': 'foils/F019.png', 'path': 'foils/F019.png'},
    {'name': 'foils/F005.png', 'path': 'foils/F005.png'},
    {'name': 'foils/F082.png', 'path': 'foils/F082.png'},
    {'name': 'foils/F043.png', 'path': 'foils/F043.png'},
    {'name': 'foils/F039.png', 'path': 'foils/F039.png'},
    {'name': 'foils/F025.png', 'path': 'foils/F025.png'},
    {'name': 'lures/L_t007_q50_a.png', 'path': 'lures/L_t007_q50_a.png'},
    {'name': 'foils/F044.png', 'path': 'foils/F044.png'},
    {'name': 'lures/L_t002_q50_g.png', 'path': 'lures/L_t002_q50_g.png'},
    {'name': 'lures/L_t008_q50_e.png', 'path': 'lures/L_t008_q50_e.png'},
    {'name': 'foils/F018.png', 'path': 'foils/F018.png'},
    {'name': 'lures/L_t002_q50_e.png', 'path': 'lures/L_t002_q50_e.png'},
    {'name': 'lures/L_t008_q50_d.png', 'path': 'lures/L_t008_q50_d.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Begrüßung_1Clock;
var hallo_1;
var key_resp;
var Begrüßung_2Clock;
var instruktion_1;
var key_resp_8;
var Begrüßung_3Clock;
var instruktion_2;
var key_resp_2;
var BeispielClock;
var beispiel;
var key_resp_7;
var Beispielnbild;
var Anfang_ExperimentClock;
var LernphaseClock;
var Targets_Lernphase;
var fix_1;
var test_startClock;
var testphase_start;
var key_resp_5;
var T1Clock;
var Stimuli_T1;
var test_answer;
var fixationskreuz;
var tooslow;
var hinweis;
var space_tooslow;
var AbschiedClock;
var bye;
var key_resp_6;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Begrüßung_1"
  Begrüßung_1Clock = new util.Clock();
  hallo_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hallo_1',
    text: 'Willkommen zum letzten Teil der Studie!\nHier wird in einem Experiment Ihr bildliches Gedächtnis untersucht. Dafür werden so genannte Rauschbilder gezeigt, die Sie sich bitte merken und später wiedererkennen sollen.\nBitte nutzen Sie keine Hilfsmittel, sondern nur Ihr Gedächtnis!\n\n\nFür WEITER drücken Sie bitte SPACE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  hallo_1.alignText = "left";
  
  // Initialize components for Routine "Begrüßung_2"
  Begrüßung_2Clock = new util.Clock();
  instruktion_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruktion_1',
    text: 'Dieser Abschnitt besteht wie der vorherige Teil aus zwei Phasen: einer Lernphase und einer Testphase. \nIn der Lernphase werden Ihnen Bilder gezeigt, die Sie sich so gut wie möglich einprägen sollen. Es handelt sich hier um so genannte Rauschbilder. Es werden Ihnen 4 Bilder immer in unterschiedlicher Reihenfolge insgesamt 6 mal gezeigt. \n\n\nFür WEITER drücken Sie bitte SPACE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instruktion_1.alignText = "left";
  
  // Initialize components for Routine "Begrüßung_3"
  Begrüßung_3Clock = new util.Clock();
  instruktion_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruktion_2',
    text: 'In der Testphase werden Ihnen Bilder gezeigt, die entweder\n- genau die Bilder sind, die Sie zuvor in der Lernphase gesehen haben.\n- den Bildern aus der Lernphase ähnlich sind.\n- oder gänzlich neue Bilder sind.\n\nFür WEITER drücken Sie bitte SPACE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instruktion_2.alignText = "left";
  
  // Initialize components for Routine "Beispiel"
  BeispielClock = new util.Clock();
  beispiel = new visual.TextStim({
    win: psychoJS.window,
    name: 'beispiel',
    text: 'Während Ihnen ein Bild gezeigt wird, entscheiden Sie per Tastendruck, ob dieses Bild\n- ein gelerntes Bild ist = Taste V\n- einem gelernten Bild ähnlich ist = Taste B\n- ein unbekanntes Bild ist = Taste N\n\nFür Ihre Antwort haben Sie 5 Sekunden Zeit.\n\nWenn Sie SPACE drücken, beginnt die Lernphase.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Beispielnbild = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Beispielnbild', units : undefined, 
    image : 'VSMT Beispiel.JPG', mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.718, 0.421],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  beispiel.alignText = "left";
  
  // Initialize components for Routine "Anfang_Experiment"
  Anfang_ExperimentClock = new util.Clock();
  // Initialize components for Routine "Lernphase"
  LernphaseClock = new util.Clock();
  Targets_Lernphase = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Targets_Lernphase', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.0, 1.0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  fix_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_1',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "test_start"
  test_startClock = new util.Clock();
  testphase_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'testphase_start',
    text: 'Jetzt beginnt die Testphase\nBitte bestimmen Sie, ob es sich um ein gelerntes Bild (Taste V), ein ähnliches Bild (B) oder ein neues Bild handelt (N). Sie haben für Ihre Antwort maximal 5 Sekunden Zeit.\n\nDrücken Sie SPACE, wenn sie die Testphase starten möchten.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  testphase_start.alignText = "left";
  
  // Initialize components for Routine "T1"
  T1Clock = new util.Clock();
  Stimuli_T1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stimuli_T1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  test_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fixationskreuz = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationskreuz',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  tooslow = new visual.TextStim({
    win: psychoJS.window,
    name: 'tooslow',
    text: 'Das war leider zu langsam. \n\nBitte geben Sie innerhalb von 5 Sekunden eine Antwort.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  hinweis = new visual.TextStim({
    win: psychoJS.window,
    name: 'hinweis',
    text: 'Antwort:\n\nBekannt  = V\nÄhnlich   = B\nNeu         = N',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  space_tooslow = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  tooslow.alignText = "left";
  hinweis.alignText = "left";
  
  // Initialize components for Routine "Abschied"
  AbschiedClock = new util.Clock();
  bye = new visual.TextStim({
    win: psychoJS.window,
    name: 'bye',
    text: 'Vielen Dank für Ihre Teilnahme an dieser Studie!\n\nBei Fragen wenden Sie sich bitte an Klara Boje (klara.boje@stu.uni-kiel.de).\n\nSie können das Fenster nun schließen.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  bye.alignText = "left";
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var Begrüßung_1Components;
function Begrüßung_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Begrüßung_1'-------
    t = 0;
    Begrüßung_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Begrüßung_1Components = [];
    Begrüßung_1Components.push(hallo_1);
    Begrüßung_1Components.push(key_resp);
    
    for (const thisComponent of Begrüßung_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Begrüßung_1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Begrüßung_1'-------
    // get current time
    t = Begrüßung_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hallo_1* updates
    if (t >= 0.0 && hallo_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hallo_1.tStart = t;  // (not accounting for frame time here)
      hallo_1.frameNStart = frameN;  // exact frame index
      
      hallo_1.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Begrüßung_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Begrüßung_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Begrüßung_1'-------
    for (const thisComponent of Begrüßung_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Begrüßung_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var Begrüßung_2Components;
function Begrüßung_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Begrüßung_2'-------
    t = 0;
    Begrüßung_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    Begrüßung_2Components = [];
    Begrüßung_2Components.push(instruktion_1);
    Begrüßung_2Components.push(key_resp_8);
    
    for (const thisComponent of Begrüßung_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Begrüßung_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Begrüßung_2'-------
    // get current time
    t = Begrüßung_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruktion_1* updates
    if (t >= 0.0 && instruktion_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruktion_1.tStart = t;  // (not accounting for frame time here)
      instruktion_1.frameNStart = frameN;  // exact frame index
      
      instruktion_1.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Begrüßung_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Begrüßung_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Begrüßung_2'-------
    for (const thisComponent of Begrüßung_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "Begrüßung_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Begrüßung_3Components;
function Begrüßung_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Begrüßung_3'-------
    t = 0;
    Begrüßung_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Begrüßung_3Components = [];
    Begrüßung_3Components.push(instruktion_2);
    Begrüßung_3Components.push(key_resp_2);
    
    for (const thisComponent of Begrüßung_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Begrüßung_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Begrüßung_3'-------
    // get current time
    t = Begrüßung_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruktion_2* updates
    if (t >= 0.0 && instruktion_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruktion_2.tStart = t;  // (not accounting for frame time here)
      instruktion_2.frameNStart = frameN;  // exact frame index
      
      instruktion_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Begrüßung_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Begrüßung_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Begrüßung_3'-------
    for (const thisComponent of Begrüßung_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Begrüßung_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var BeispielComponents;
function BeispielRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Beispiel'-------
    t = 0;
    BeispielClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    BeispielComponents = [];
    BeispielComponents.push(beispiel);
    BeispielComponents.push(key_resp_7);
    BeispielComponents.push(Beispielnbild);
    
    for (const thisComponent of BeispielComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BeispielRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Beispiel'-------
    // get current time
    t = BeispielClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *beispiel* updates
    if (t >= 0.0 && beispiel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beispiel.tStart = t;  // (not accounting for frame time here)
      beispiel.frameNStart = frameN;  // exact frame index
      
      beispiel.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Beispielnbild* updates
    if (t >= 0.0 && Beispielnbild.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Beispielnbild.tStart = t;  // (not accounting for frame time here)
      Beispielnbild.frameNStart = frameN;  // exact frame index
      
      Beispielnbild.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BeispielComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BeispielRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Beispiel'-------
    for (const thisComponent of BeispielComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Beispiel" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var foils_gesamt;
var Targets;
var Target_0;
var Target_9;
var Target_18;
var Target_27;
var Target_36;
var Target_45;
var Target_54;
var Target_63;
var Target_72;
var Target_81;
var Teststimuli;
var Testblock;
var Anfang_ExperimentComponents;
function Anfang_ExperimentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Anfang_Experiment'-------
    t = 0;
    Anfang_ExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    foils_gesamt = list(range(90, 179));
    shuffle(foils_gesamt);
    Targets = np.random.choice([0, 9, 18, 27, 36, 45, 54, 63, 72, 81], {"size": 4, "replace": false});
    Target_0 = (list(range(0, 9)) + list(range(180, 187)));
    Target_9 = (list(range(9, 18)) + list(range(187, 194)));
    Target_18 = (list(range(18, 27)) + list(range(194, 201)));
    Target_27 = (list(range(27, 36)) + list(range(201, 208)));
    Target_36 = (list(range(36, 45)) + list(range(208, 215)));
    Target_45 = (list(range(45, 54)) + list(range(215, 222)));
    Target_54 = (list(range(54, 63)) + list(range(222, 229)));
    Target_63 = (list(range(63, 72)) + list(range(229, 236)));
    Target_72 = (list(range(72, 81)) + list(range(236, 243)));
    Target_81 = (list(range(81, 90)) + list(range(243, 250)));
    Teststimuli = [];
    if (_pj.in_es6(0, Targets)) {
        Teststimuli = (Teststimuli + Target_0);
    }
    if (_pj.in_es6(9, Targets)) {
        Teststimuli = (Teststimuli + Target_9);
    }
    if (_pj.in_es6(18, Targets)) {
        Teststimuli = (Teststimuli + Target_18);
    }
    if (_pj.in_es6(27, Targets)) {
        Teststimuli = (Teststimuli + Target_27);
    }
    if (_pj.in_es6(36, Targets)) {
        Teststimuli = (Teststimuli + Target_36);
    }
    if (_pj.in_es6(45, Targets)) {
        Teststimuli = (Teststimuli + Target_45);
    }
    if (_pj.in_es6(54, Targets)) {
        Teststimuli = (Teststimuli + Target_54);
    }
    if (_pj.in_es6(63, Targets)) {
        Teststimuli = (Teststimuli + Target_63);
    }
    if (_pj.in_es6(72, Targets)) {
        Teststimuli = (Teststimuli + Target_72);
    }
    if (_pj.in_es6(81, Targets)) {
        Teststimuli = (Teststimuli + Target_81);
    }
    Testblock = (Teststimuli + foils_gesamt.slice(0, 80));
    
    // keep track of which components have finished
    Anfang_ExperimentComponents = [];
    
    for (const thisComponent of Anfang_ExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Anfang_ExperimentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Anfang_Experiment'-------
    // get current time
    t = Anfang_ExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Anfang_ExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Anfang_ExperimentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Anfang_Experiment'-------
    for (const thisComponent of Anfang_ExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Anfang_Experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Lernphase_Loop;
var currentLoop;
function Lernphase_LoopLoopBegin(Lernphase_LoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Lernphase_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Stimuli.xlsx', Targets),
    seed: undefined, name: 'Lernphase_Loop'
  });
  psychoJS.experiment.addLoop(Lernphase_Loop); // add the loop to the experiment
  currentLoop = Lernphase_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLernphase_Loop of Lernphase_Loop) {
    const snapshot = Lernphase_Loop.getSnapshot();
    Lernphase_LoopLoopScheduler.add(importConditions(snapshot));
    Lernphase_LoopLoopScheduler.add(LernphaseRoutineBegin(snapshot));
    Lernphase_LoopLoopScheduler.add(LernphaseRoutineEachFrame(snapshot));
    Lernphase_LoopLoopScheduler.add(LernphaseRoutineEnd(snapshot));
    Lernphase_LoopLoopScheduler.add(endLoopIteration(Lernphase_LoopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Lernphase_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(Lernphase_Loop);

  return Scheduler.Event.NEXT;
}


var T1_Loop;
function T1_LoopLoopBegin(T1_LoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  T1_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Stimuli.xlsx', Testblock),
    seed: undefined, name: 'T1_Loop'
  });
  psychoJS.experiment.addLoop(T1_Loop); // add the loop to the experiment
  currentLoop = T1_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisT1_Loop of T1_Loop) {
    const snapshot = T1_Loop.getSnapshot();
    T1_LoopLoopScheduler.add(importConditions(snapshot));
    T1_LoopLoopScheduler.add(T1RoutineBegin(snapshot));
    T1_LoopLoopScheduler.add(T1RoutineEachFrame(snapshot));
    T1_LoopLoopScheduler.add(T1RoutineEnd(snapshot));
    T1_LoopLoopScheduler.add(endLoopIteration(T1_LoopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function T1_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(T1_Loop);

  return Scheduler.Event.NEXT;
}


var LernphaseComponents;
function LernphaseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Lernphase'-------
    t = 0;
    LernphaseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    Targets_Lernphase.setImage(Bild);
    // keep track of which components have finished
    LernphaseComponents = [];
    LernphaseComponents.push(Targets_Lernphase);
    LernphaseComponents.push(fix_1);
    
    for (const thisComponent of LernphaseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function LernphaseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Lernphase'-------
    // get current time
    t = LernphaseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Targets_Lernphase* updates
    if (t >= 0.5 && Targets_Lernphase.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Targets_Lernphase.tStart = t;  // (not accounting for frame time here)
      Targets_Lernphase.frameNStart = frameN;  // exact frame index
      
      Targets_Lernphase.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Targets_Lernphase.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Targets_Lernphase.setAutoDraw(false);
    }
    
    // *fix_1* updates
    if (t >= 0.0 && fix_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_1.tStart = t;  // (not accounting for frame time here)
      fix_1.frameNStart = frameN;  // exact frame index
      
      fix_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LernphaseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LernphaseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Lernphase'-------
    for (const thisComponent of LernphaseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var test_startComponents;
function test_startRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test_start'-------
    t = 0;
    test_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    test_startComponents = [];
    test_startComponents.push(testphase_start);
    test_startComponents.push(key_resp_5);
    
    for (const thisComponent of test_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_startRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test_start'-------
    // get current time
    t = test_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *testphase_start* updates
    if (t >= 0.0 && testphase_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testphase_start.tStart = t;  // (not accounting for frame time here)
      testphase_start.frameNStart = frameN;  // exact frame index
      
      testphase_start.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_startRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test_start'-------
    for (const thisComponent of test_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "test_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _test_answer_allKeys;
var _space_tooslow_allKeys;
var T1Components;
function T1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'T1'-------
    t = 0;
    T1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Stimuli_T1.setImage(Bild);
    test_answer.keys = undefined;
    test_answer.rt = undefined;
    _test_answer_allKeys = [];
    space_tooslow.keys = undefined;
    space_tooslow.rt = undefined;
    _space_tooslow_allKeys = [];
    // keep track of which components have finished
    T1Components = [];
    T1Components.push(Stimuli_T1);
    T1Components.push(test_answer);
    T1Components.push(fixationskreuz);
    T1Components.push(tooslow);
    T1Components.push(hinweis);
    T1Components.push(space_tooslow);
    
    for (const thisComponent of T1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function T1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'T1'-------
    // get current time
    t = T1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stimuli_T1* updates
    if (t >= 0.5 && Stimuli_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimuli_T1.tStart = t;  // (not accounting for frame time here)
      Stimuli_T1.frameNStart = frameN;  // exact frame index
      
      Stimuli_T1.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimuli_T1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimuli_T1.setAutoDraw(false);
    }
    
    // *test_answer* updates
    if (t >= 0.5 && test_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_answer.tStart = t;  // (not accounting for frame time here)
      test_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_answer.clearEvents(); });
    }

    frameRemains = 0.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_answer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_answer.status = PsychoJS.Status.FINISHED;
  }

    if (test_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = test_answer.getKeys({keyList: ['v', 'b', 'n'], waitRelease: false});
      _test_answer_allKeys = _test_answer_allKeys.concat(theseKeys);
      if (_test_answer_allKeys.length > 0) {
        test_answer.keys = _test_answer_allKeys[_test_answer_allKeys.length - 1].name;  // just the last key pressed
        test_answer.rt = _test_answer_allKeys[_test_answer_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fixationskreuz* updates
    if (t >= 0.0 && fixationskreuz.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationskreuz.tStart = t;  // (not accounting for frame time here)
      fixationskreuz.frameNStart = frameN;  // exact frame index
      
      fixationskreuz.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationskreuz.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationskreuz.setAutoDraw(false);
    }
    
    // *tooslow* updates
    if (t >= 5.5 && tooslow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tooslow.tStart = t;  // (not accounting for frame time here)
      tooslow.frameNStart = frameN;  // exact frame index
      
      tooslow.setAutoDraw(true);
    }

    
    // *hinweis* updates
    if (t >= 2.5 && hinweis.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hinweis.tStart = t;  // (not accounting for frame time here)
      hinweis.frameNStart = frameN;  // exact frame index
      
      hinweis.setAutoDraw(true);
    }

    frameRemains = 2.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (hinweis.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      hinweis.setAutoDraw(false);
    }
    
    // *space_tooslow* updates
    if (t >= 5.5 && space_tooslow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_tooslow.tStart = t;  // (not accounting for frame time here)
      space_tooslow.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_tooslow.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_tooslow.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_tooslow.clearEvents(); });
    }

    if (space_tooslow.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_tooslow.getKeys({keyList: ['space'], waitRelease: false});
      _space_tooslow_allKeys = _space_tooslow_allKeys.concat(theseKeys);
      if (_space_tooslow_allKeys.length > 0) {
        space_tooslow.keys = _space_tooslow_allKeys[_space_tooslow_allKeys.length - 1].name;  // just the last key pressed
        space_tooslow.rt = _space_tooslow_allKeys[_space_tooslow_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of T1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function T1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'T1'-------
    for (const thisComponent of T1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test_answer.keys', test_answer.keys);
    if (typeof test_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test_answer.rt', test_answer.rt);
        routineTimer.reset();
        }
    
    test_answer.stop();
    psychoJS.experiment.addData('space_tooslow.keys', space_tooslow.keys);
    if (typeof space_tooslow.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_tooslow.rt', space_tooslow.rt);
        routineTimer.reset();
        }
    
    space_tooslow.stop();
    // the Routine "T1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var AbschiedComponents;
function AbschiedRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Abschied'-------
    t = 0;
    AbschiedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    AbschiedComponents = [];
    AbschiedComponents.push(bye);
    AbschiedComponents.push(key_resp_6);
    
    for (const thisComponent of AbschiedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AbschiedRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Abschied'-------
    // get current time
    t = AbschiedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bye* updates
    if (t >= 0.0 && bye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bye.tStart = t;  // (not accounting for frame time here)
      bye.frameNStart = frameN;  // exact frame index
      
      bye.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AbschiedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AbschiedRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Abschied'-------
    for (const thisComponent of AbschiedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Abschied" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
