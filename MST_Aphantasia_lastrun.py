#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on März 02, 2025, at 21:07
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'MST_Aphantasia'  # from the Builder filename that created this script
expInfo = {'VPN-Code': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['VPN-Code'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\klara\\OneDrive\\Desktop\\MASTERARBEIT\\MST\\MST_Bau\\MST_Aphantasia_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Begrüßung"
BegrüßungClock = core.Clock()
hallo = visual.TextStim(win=win, name='hallo',
    text='\nHerzlich Willkommen zum zweiten Teil dieser Studie!\n\nHier wird in einem Experiment Ihr bildliches Gedächtnis untersucht. Dafür werden Ihnen Bilder von alltäglichen Objekten gezeigt, die Sie sich bitte merken und später wiedererkennen sollen.\n\nBitte nutzen Sie keine Hilfsmittel, sondern nur Ihr Gedächtnis!\n\nFür WEITER drücken Sie bitte die Leertaste.\n\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
weiter1 = keyboard.Keyboard()
hallo.alignText = 'left'

# Initialize components for Routine "instruktion_1"
instruktion_1Clock = core.Clock()
instruktion1 = visual.TextStim(win=win, name='instruktion1',
    text='In diesem Abschnitt wird Ihr bildliches Gedächtnis untersucht, er besteht aus zwei Phasen: einer Lernphase und einer Testphase. \n\nIn der Lernphase werden Ihnen insgesamt 64 Bilder gezeigt, die Sie sich so gut wie möglich einprägen sollen. \n\nFür WEITER drücken Sie bitte die Leertaste.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
weiter2 = keyboard.Keyboard()
instruktion1.alignText = 'left'

# Initialize components for Routine "instruktion_2"
instruktion_2Clock = core.Clock()
instruktion2 = visual.TextStim(win=win, name='instruktion2',
    text='In der Testphase werden Ihnen Bilder gezeigt, die entweder\n- genau die Bilder sind, die Sie zuvor in der Lernphase gesehen haben.\n- den Bildern aus der Lernphase ähnlich sind.\n- oder gänzlich neue Bilder sind.\n\nFür WEITER drücken Sie bitte die Leertaste.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instruktion2.alignText = 'left'
weiter3 = keyboard.Keyboard()

# Initialize components for Routine "beispiel"
beispielClock = core.Clock()
beispielMST = visual.TextStim(win=win, name='beispielMST',
    text='Während Ihnen ein Bild gezeigt wird, entscheiden Sie per Tastendruck, ob dieses Bild\n- ein gelerntes Bild ist = Taste V\n- einem gelernten Bild ähnlich ist = Taste B\n- ein unbekanntes Bild ist = Taste N\n\nFür Ihre Antwort haben Sie 5 Sekunden Zeit.\n\nUm die Lernohase zu sterten, drücken Sie bitte die Leertaste.',
    font='Open Sans',
    pos=(0, -0.25), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
weiter4 = keyboard.Keyboard()
beispielMST.alignText = 'left'
beispiel_mst = visual.ImageStim(
    win=win,
    name='beispiel_mst', 
    image='D:\\\\MASTERARBEIT\\\\Abbildungen\\\\MST_Beispiel.JPG', mask=None,
    ori=0.0, pos=(0, 0.2), size=(0.798, 0.429),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "Lern"
LernClock = core.Clock()
Lernbilder = visual.ImageStim(
    win=win,
    name='Lernbilder', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
fixationskreuz1 = visual.TextStim(win=win, name='fixationskreuz1',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Instruktionen_Test"
Instruktionen_TestClock = core.Clock()
start_mst = visual.TextStim(win=win, name='start_mst',
    text='Testphase\n\nNun werden Ihnen erneut Bilder nacheinander gezeigt.\n\nNach jeden Bild geben Sie bitte an, ob es sich um ein …\n\n… bekanntes Bild handelt (Taste v).\n… ähnliches Bild handelt (Taste b).\n… neues Bild handelt (Taste n).\n\nUm die Testphase zu starten, drücken Sie bitte die Leertaste.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Start_Test = keyboard.Keyboard()
start_mst.alignText = 'left'

# Initialize components for Routine "Test"
TestClock = core.Clock()
Testbilder = visual.ImageStim(
    win=win,
    name='Testbilder', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
answer_mst = keyboard.Keyboard()
toolate = visual.TextStim(win=win, name='toolate',
    text='Das war leider zu langsam.\n\nSie haben 5 Sekunden Zeit, um eine Antwort zu geben.',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
weiter_toolate = keyboard.Keyboard()
hinweis = visual.TextStim(win=win, name='hinweis',
    text='Bitte Antworten\n\nGelerntes Bild         = V\nÄhnliches Bild        = B\nUnbekanntest Bild = N',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
fixationskreuz2 = visual.TextStim(win=win, name='fixationskreuz2',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "Ende_Experiment"
Ende_ExperimentClock = core.Clock()
bye = visual.TextStim(win=win, name='bye',
    text='Vielen Dank für Ihre Teilnahme!\n\nBitte bearbeiten Sie auch den dritten Teil des Experiments.\n\nZum Beenden des zweiten Teils drücken Sie bitte die Leertaste.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_Ende = keyboard.Keyboard()
bye.alignText = 'left'

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Begrüßung"-------
continueRoutine = True
# update component parameters for each repeat
weiter1.keys = []
weiter1.rt = []
_weiter1_allKeys = []
# keep track of which components have finished
BegrüßungComponents = [hallo, weiter1]
for thisComponent in BegrüßungComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
BegrüßungClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Begrüßung"-------
while continueRoutine:
    # get current time
    t = BegrüßungClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=BegrüßungClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *hallo* updates
    if hallo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        hallo.frameNStart = frameN  # exact frame index
        hallo.tStart = t  # local t and not account for scr refresh
        hallo.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(hallo, 'tStartRefresh')  # time at next scr refresh
        hallo.setAutoDraw(True)
    
    # *weiter1* updates
    waitOnFlip = False
    if weiter1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        weiter1.frameNStart = frameN  # exact frame index
        weiter1.tStart = t  # local t and not account for scr refresh
        weiter1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(weiter1, 'tStartRefresh')  # time at next scr refresh
        weiter1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(weiter1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(weiter1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if weiter1.status == STARTED and not waitOnFlip:
        theseKeys = weiter1.getKeys(keyList=['space'], waitRelease=False)
        _weiter1_allKeys.extend(theseKeys)
        if len(_weiter1_allKeys):
            weiter1.keys = _weiter1_allKeys[-1].name  # just the last key pressed
            weiter1.rt = _weiter1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in BegrüßungComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Begrüßung"-------
for thisComponent in BegrüßungComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('hallo.started', hallo.tStartRefresh)
thisExp.addData('hallo.stopped', hallo.tStopRefresh)
# check responses
if weiter1.keys in ['', [], None]:  # No response was made
    weiter1.keys = None
thisExp.addData('weiter1.keys',weiter1.keys)
if weiter1.keys != None:  # we had a response
    thisExp.addData('weiter1.rt', weiter1.rt)
thisExp.addData('weiter1.started', weiter1.tStartRefresh)
thisExp.addData('weiter1.stopped', weiter1.tStopRefresh)
thisExp.nextEntry()
# the Routine "Begrüßung" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruktion_1"-------
continueRoutine = True
# update component parameters for each repeat
weiter2.keys = []
weiter2.rt = []
_weiter2_allKeys = []
# keep track of which components have finished
instruktion_1Components = [instruktion1, weiter2]
for thisComponent in instruktion_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruktion_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruktion_1"-------
while continueRoutine:
    # get current time
    t = instruktion_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruktion_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruktion1* updates
    if instruktion1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruktion1.frameNStart = frameN  # exact frame index
        instruktion1.tStart = t  # local t and not account for scr refresh
        instruktion1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruktion1, 'tStartRefresh')  # time at next scr refresh
        instruktion1.setAutoDraw(True)
    
    # *weiter2* updates
    waitOnFlip = False
    if weiter2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        weiter2.frameNStart = frameN  # exact frame index
        weiter2.tStart = t  # local t and not account for scr refresh
        weiter2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(weiter2, 'tStartRefresh')  # time at next scr refresh
        weiter2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(weiter2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(weiter2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if weiter2.status == STARTED and not waitOnFlip:
        theseKeys = weiter2.getKeys(keyList=['space'], waitRelease=False)
        _weiter2_allKeys.extend(theseKeys)
        if len(_weiter2_allKeys):
            weiter2.keys = _weiter2_allKeys[-1].name  # just the last key pressed
            weiter2.rt = _weiter2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruktion_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruktion_1"-------
for thisComponent in instruktion_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instruktion1.started', instruktion1.tStartRefresh)
thisExp.addData('instruktion1.stopped', instruktion1.tStopRefresh)
# check responses
if weiter2.keys in ['', [], None]:  # No response was made
    weiter2.keys = None
thisExp.addData('weiter2.keys',weiter2.keys)
if weiter2.keys != None:  # we had a response
    thisExp.addData('weiter2.rt', weiter2.rt)
thisExp.addData('weiter2.started', weiter2.tStartRefresh)
thisExp.addData('weiter2.stopped', weiter2.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruktion_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruktion_2"-------
continueRoutine = True
# update component parameters for each repeat
weiter3.keys = []
weiter3.rt = []
_weiter3_allKeys = []
# keep track of which components have finished
instruktion_2Components = [instruktion2, weiter3]
for thisComponent in instruktion_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruktion_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruktion_2"-------
while continueRoutine:
    # get current time
    t = instruktion_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruktion_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruktion2* updates
    if instruktion2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruktion2.frameNStart = frameN  # exact frame index
        instruktion2.tStart = t  # local t and not account for scr refresh
        instruktion2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruktion2, 'tStartRefresh')  # time at next scr refresh
        instruktion2.setAutoDraw(True)
    
    # *weiter3* updates
    waitOnFlip = False
    if weiter3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        weiter3.frameNStart = frameN  # exact frame index
        weiter3.tStart = t  # local t and not account for scr refresh
        weiter3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(weiter3, 'tStartRefresh')  # time at next scr refresh
        weiter3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(weiter3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(weiter3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if weiter3.status == STARTED and not waitOnFlip:
        theseKeys = weiter3.getKeys(keyList=['space'], waitRelease=False)
        _weiter3_allKeys.extend(theseKeys)
        if len(_weiter3_allKeys):
            weiter3.keys = _weiter3_allKeys[-1].name  # just the last key pressed
            weiter3.rt = _weiter3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruktion_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruktion_2"-------
for thisComponent in instruktion_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instruktion2.started', instruktion2.tStartRefresh)
thisExp.addData('instruktion2.stopped', instruktion2.tStopRefresh)
# check responses
if weiter3.keys in ['', [], None]:  # No response was made
    weiter3.keys = None
thisExp.addData('weiter3.keys',weiter3.keys)
if weiter3.keys != None:  # we had a response
    thisExp.addData('weiter3.rt', weiter3.rt)
thisExp.addData('weiter3.started', weiter3.tStartRefresh)
thisExp.addData('weiter3.stopped', weiter3.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruktion_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "beispiel"-------
continueRoutine = True
# update component parameters for each repeat
weiter4.keys = []
weiter4.rt = []
_weiter4_allKeys = []
# keep track of which components have finished
beispielComponents = [beispielMST, weiter4, beispiel_mst]
for thisComponent in beispielComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
beispielClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "beispiel"-------
while continueRoutine:
    # get current time
    t = beispielClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=beispielClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *beispielMST* updates
    if beispielMST.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        beispielMST.frameNStart = frameN  # exact frame index
        beispielMST.tStart = t  # local t and not account for scr refresh
        beispielMST.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(beispielMST, 'tStartRefresh')  # time at next scr refresh
        beispielMST.setAutoDraw(True)
    
    # *weiter4* updates
    waitOnFlip = False
    if weiter4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        weiter4.frameNStart = frameN  # exact frame index
        weiter4.tStart = t  # local t and not account for scr refresh
        weiter4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(weiter4, 'tStartRefresh')  # time at next scr refresh
        weiter4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(weiter4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(weiter4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if weiter4.status == STARTED and not waitOnFlip:
        theseKeys = weiter4.getKeys(keyList=['space'], waitRelease=False)
        _weiter4_allKeys.extend(theseKeys)
        if len(_weiter4_allKeys):
            weiter4.keys = _weiter4_allKeys[-1].name  # just the last key pressed
            weiter4.rt = _weiter4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *beispiel_mst* updates
    if beispiel_mst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        beispiel_mst.frameNStart = frameN  # exact frame index
        beispiel_mst.tStart = t  # local t and not account for scr refresh
        beispiel_mst.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(beispiel_mst, 'tStartRefresh')  # time at next scr refresh
        beispiel_mst.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in beispielComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "beispiel"-------
for thisComponent in beispielComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('beispielMST.started', beispielMST.tStartRefresh)
thisExp.addData('beispielMST.stopped', beispielMST.tStopRefresh)
# check responses
if weiter4.keys in ['', [], None]:  # No response was made
    weiter4.keys = None
thisExp.addData('weiter4.keys',weiter4.keys)
if weiter4.keys != None:  # we had a response
    thisExp.addData('weiter4.rt', weiter4.rt)
thisExp.addData('weiter4.started', weiter4.tStartRefresh)
thisExp.addData('weiter4.stopped', weiter4.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('beispiel_mst.started', beispiel_mst.tStartRefresh)
thisExp.addData('beispiel_mst.stopped', beispiel_mst.tStopRefresh)
# the Routine "beispiel" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Lernphase = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Lernphase_MST.xlsx'),
    seed=None, name='Lernphase')
thisExp.addLoop(Lernphase)  # add the loop to the experiment
thisLernphase = Lernphase.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLernphase.rgb)
if thisLernphase != None:
    for paramName in thisLernphase:
        exec('{} = thisLernphase[paramName]'.format(paramName))

for thisLernphase in Lernphase:
    currentLoop = Lernphase
    # abbreviate parameter names if possible (e.g. rgb = thisLernphase.rgb)
    if thisLernphase != None:
        for paramName in thisLernphase:
            exec('{} = thisLernphase[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Lern"-------
    continueRoutine = True
    routineTimer.add(2.500000)
    # update component parameters for each repeat
    Lernbilder.setImage(old_pics)
    # keep track of which components have finished
    LernComponents = [Lernbilder, fixationskreuz1]
    for thisComponent in LernComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    LernClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Lern"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = LernClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=LernClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Lernbilder* updates
        if Lernbilder.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Lernbilder.frameNStart = frameN  # exact frame index
            Lernbilder.tStart = t  # local t and not account for scr refresh
            Lernbilder.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Lernbilder, 'tStartRefresh')  # time at next scr refresh
            Lernbilder.setAutoDraw(True)
        if Lernbilder.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Lernbilder.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                Lernbilder.tStop = t  # not accounting for scr refresh
                Lernbilder.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Lernbilder, 'tStopRefresh')  # time at next scr refresh
                Lernbilder.setAutoDraw(False)
        
        # *fixationskreuz1* updates
        if fixationskreuz1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixationskreuz1.frameNStart = frameN  # exact frame index
            fixationskreuz1.tStart = t  # local t and not account for scr refresh
            fixationskreuz1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixationskreuz1, 'tStartRefresh')  # time at next scr refresh
            fixationskreuz1.setAutoDraw(True)
        if fixationskreuz1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixationskreuz1.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixationskreuz1.tStop = t  # not accounting for scr refresh
                fixationskreuz1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixationskreuz1, 'tStopRefresh')  # time at next scr refresh
                fixationskreuz1.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in LernComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Lern"-------
    for thisComponent in LernComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Lernphase.addData('Lernbilder.started', Lernbilder.tStartRefresh)
    Lernphase.addData('Lernbilder.stopped', Lernbilder.tStopRefresh)
    Lernphase.addData('fixationskreuz1.started', fixationskreuz1.tStartRefresh)
    Lernphase.addData('fixationskreuz1.stopped', fixationskreuz1.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'Lernphase'


# ------Prepare to start Routine "Instruktionen_Test"-------
continueRoutine = True
# update component parameters for each repeat
Start_Test.keys = []
Start_Test.rt = []
_Start_Test_allKeys = []
# keep track of which components have finished
Instruktionen_TestComponents = [start_mst, Start_Test]
for thisComponent in Instruktionen_TestComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instruktionen_TestClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instruktionen_Test"-------
while continueRoutine:
    # get current time
    t = Instruktionen_TestClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instruktionen_TestClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *start_mst* updates
    if start_mst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        start_mst.frameNStart = frameN  # exact frame index
        start_mst.tStart = t  # local t and not account for scr refresh
        start_mst.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(start_mst, 'tStartRefresh')  # time at next scr refresh
        start_mst.setAutoDraw(True)
    
    # *Start_Test* updates
    waitOnFlip = False
    if Start_Test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Start_Test.frameNStart = frameN  # exact frame index
        Start_Test.tStart = t  # local t and not account for scr refresh
        Start_Test.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Start_Test, 'tStartRefresh')  # time at next scr refresh
        Start_Test.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Start_Test.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Start_Test.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Start_Test.status == STARTED and not waitOnFlip:
        theseKeys = Start_Test.getKeys(keyList=['space'], waitRelease=False)
        _Start_Test_allKeys.extend(theseKeys)
        if len(_Start_Test_allKeys):
            Start_Test.keys = _Start_Test_allKeys[-1].name  # just the last key pressed
            Start_Test.rt = _Start_Test_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instruktionen_TestComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruktionen_Test"-------
for thisComponent in Instruktionen_TestComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('start_mst.started', start_mst.tStartRefresh)
thisExp.addData('start_mst.stopped', start_mst.tStopRefresh)
# check responses
if Start_Test.keys in ['', [], None]:  # No response was made
    Start_Test.keys = None
thisExp.addData('Start_Test.keys',Start_Test.keys)
if Start_Test.keys != None:  # we had a response
    thisExp.addData('Start_Test.rt', Start_Test.rt)
thisExp.addData('Start_Test.started', Start_Test.tStartRefresh)
thisExp.addData('Start_Test.stopped', Start_Test.tStopRefresh)
thisExp.nextEntry()
# the Routine "Instruktionen_Test" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Testphase = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Testphase_MST.xlsx'),
    seed=None, name='Testphase')
thisExp.addLoop(Testphase)  # add the loop to the experiment
thisTestphase = Testphase.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTestphase.rgb)
if thisTestphase != None:
    for paramName in thisTestphase:
        exec('{} = thisTestphase[paramName]'.format(paramName))

for thisTestphase in Testphase:
    currentLoop = Testphase
    # abbreviate parameter names if possible (e.g. rgb = thisTestphase.rgb)
    if thisTestphase != None:
        for paramName in thisTestphase:
            exec('{} = thisTestphase[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Test"-------
    continueRoutine = True
    # update component parameters for each repeat
    Testbilder.setImage(test_pics)
    answer_mst.keys = []
    answer_mst.rt = []
    _answer_mst_allKeys = []
    weiter_toolate.keys = []
    weiter_toolate.rt = []
    _weiter_toolate_allKeys = []
    # keep track of which components have finished
    TestComponents = [Testbilder, answer_mst, toolate, weiter_toolate, hinweis, fixationskreuz2]
    for thisComponent in TestComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    TestClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Test"-------
    while continueRoutine:
        # get current time
        t = TestClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=TestClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Testbilder* updates
        if Testbilder.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            Testbilder.frameNStart = frameN  # exact frame index
            Testbilder.tStart = t  # local t and not account for scr refresh
            Testbilder.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Testbilder, 'tStartRefresh')  # time at next scr refresh
            Testbilder.setAutoDraw(True)
        if Testbilder.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Testbilder.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                Testbilder.tStop = t  # not accounting for scr refresh
                Testbilder.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Testbilder, 'tStopRefresh')  # time at next scr refresh
                Testbilder.setAutoDraw(False)
        
        # *answer_mst* updates
        waitOnFlip = False
        if answer_mst.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            answer_mst.frameNStart = frameN  # exact frame index
            answer_mst.tStart = t  # local t and not account for scr refresh
            answer_mst.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(answer_mst, 'tStartRefresh')  # time at next scr refresh
            answer_mst.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(answer_mst.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(answer_mst.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if answer_mst.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > answer_mst.tStartRefresh + 4.5-frameTolerance:
                # keep track of stop time/frame for later
                answer_mst.tStop = t  # not accounting for scr refresh
                answer_mst.frameNStop = frameN  # exact frame index
                win.timeOnFlip(answer_mst, 'tStopRefresh')  # time at next scr refresh
                answer_mst.status = FINISHED
        if answer_mst.status == STARTED and not waitOnFlip:
            theseKeys = answer_mst.getKeys(keyList=['v', 'b', 'n'], waitRelease=False)
            _answer_mst_allKeys.extend(theseKeys)
            if len(_answer_mst_allKeys):
                answer_mst.keys = _answer_mst_allKeys[-1].name  # just the last key pressed
                answer_mst.rt = _answer_mst_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *toolate* updates
        if toolate.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
            # keep track of start time/frame for later
            toolate.frameNStart = frameN  # exact frame index
            toolate.tStart = t  # local t and not account for scr refresh
            toolate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(toolate, 'tStartRefresh')  # time at next scr refresh
            toolate.setAutoDraw(True)
        
        # *weiter_toolate* updates
        waitOnFlip = False
        if weiter_toolate.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
            # keep track of start time/frame for later
            weiter_toolate.frameNStart = frameN  # exact frame index
            weiter_toolate.tStart = t  # local t and not account for scr refresh
            weiter_toolate.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(weiter_toolate, 'tStartRefresh')  # time at next scr refresh
            weiter_toolate.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(weiter_toolate.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(weiter_toolate.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if weiter_toolate.status == STARTED and not waitOnFlip:
            theseKeys = weiter_toolate.getKeys(keyList=['space'], waitRelease=False)
            _weiter_toolate_allKeys.extend(theseKeys)
            if len(_weiter_toolate_allKeys):
                weiter_toolate.keys = _weiter_toolate_allKeys[-1].name  # just the last key pressed
                weiter_toolate.rt = _weiter_toolate_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *hinweis* updates
        if hinweis.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            hinweis.frameNStart = frameN  # exact frame index
            hinweis.tStart = t  # local t and not account for scr refresh
            hinweis.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(hinweis, 'tStartRefresh')  # time at next scr refresh
            hinweis.setAutoDraw(True)
        if hinweis.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > hinweis.tStartRefresh + 2.5-frameTolerance:
                # keep track of stop time/frame for later
                hinweis.tStop = t  # not accounting for scr refresh
                hinweis.frameNStop = frameN  # exact frame index
                win.timeOnFlip(hinweis, 'tStopRefresh')  # time at next scr refresh
                hinweis.setAutoDraw(False)
        
        # *fixationskreuz2* updates
        if fixationskreuz2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixationskreuz2.frameNStart = frameN  # exact frame index
            fixationskreuz2.tStart = t  # local t and not account for scr refresh
            fixationskreuz2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixationskreuz2, 'tStartRefresh')  # time at next scr refresh
            fixationskreuz2.setAutoDraw(True)
        if fixationskreuz2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixationskreuz2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixationskreuz2.tStop = t  # not accounting for scr refresh
                fixationskreuz2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixationskreuz2, 'tStopRefresh')  # time at next scr refresh
                fixationskreuz2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in TestComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test"-------
    for thisComponent in TestComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Testphase.addData('Testbilder.started', Testbilder.tStartRefresh)
    Testphase.addData('Testbilder.stopped', Testbilder.tStopRefresh)
    # check responses
    if answer_mst.keys in ['', [], None]:  # No response was made
        answer_mst.keys = None
    Testphase.addData('answer_mst.keys',answer_mst.keys)
    if answer_mst.keys != None:  # we had a response
        Testphase.addData('answer_mst.rt', answer_mst.rt)
    Testphase.addData('answer_mst.started', answer_mst.tStartRefresh)
    Testphase.addData('answer_mst.stopped', answer_mst.tStopRefresh)
    Testphase.addData('toolate.started', toolate.tStartRefresh)
    Testphase.addData('toolate.stopped', toolate.tStopRefresh)
    # check responses
    if weiter_toolate.keys in ['', [], None]:  # No response was made
        weiter_toolate.keys = None
    Testphase.addData('weiter_toolate.keys',weiter_toolate.keys)
    if weiter_toolate.keys != None:  # we had a response
        Testphase.addData('weiter_toolate.rt', weiter_toolate.rt)
    Testphase.addData('weiter_toolate.started', weiter_toolate.tStartRefresh)
    Testphase.addData('weiter_toolate.stopped', weiter_toolate.tStopRefresh)
    Testphase.addData('hinweis.started', hinweis.tStartRefresh)
    Testphase.addData('hinweis.stopped', hinweis.tStopRefresh)
    Testphase.addData('fixationskreuz2.started', fixationskreuz2.tStartRefresh)
    Testphase.addData('fixationskreuz2.stopped', fixationskreuz2.tStopRefresh)
    # the Routine "Test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'Testphase'


# ------Prepare to start Routine "Ende_Experiment"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_Ende.keys = []
key_resp_Ende.rt = []
_key_resp_Ende_allKeys = []
# keep track of which components have finished
Ende_ExperimentComponents = [bye, key_resp_Ende]
for thisComponent in Ende_ExperimentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Ende_ExperimentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Ende_Experiment"-------
while continueRoutine:
    # get current time
    t = Ende_ExperimentClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Ende_ExperimentClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *bye* updates
    if bye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        bye.frameNStart = frameN  # exact frame index
        bye.tStart = t  # local t and not account for scr refresh
        bye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(bye, 'tStartRefresh')  # time at next scr refresh
        bye.setAutoDraw(True)
    
    # *key_resp_Ende* updates
    waitOnFlip = False
    if key_resp_Ende.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_Ende.frameNStart = frameN  # exact frame index
        key_resp_Ende.tStart = t  # local t and not account for scr refresh
        key_resp_Ende.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_Ende, 'tStartRefresh')  # time at next scr refresh
        key_resp_Ende.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_Ende.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_Ende.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_Ende.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_Ende.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_Ende_allKeys.extend(theseKeys)
        if len(_key_resp_Ende_allKeys):
            key_resp_Ende.keys = _key_resp_Ende_allKeys[-1].name  # just the last key pressed
            key_resp_Ende.rt = _key_resp_Ende_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Ende_ExperimentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Ende_Experiment"-------
for thisComponent in Ende_ExperimentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('bye.started', bye.tStartRefresh)
thisExp.addData('bye.stopped', bye.tStopRefresh)
# check responses
if key_resp_Ende.keys in ['', [], None]:  # No response was made
    key_resp_Ende.keys = None
thisExp.addData('key_resp_Ende.keys',key_resp_Ende.keys)
if key_resp_Ende.keys != None:  # we had a response
    thisExp.addData('key_resp_Ende.rt', key_resp_Ende.rt)
thisExp.addData('key_resp_Ende.started', key_resp_Ende.tStartRefresh)
thisExp.addData('key_resp_Ende.stopped', key_resp_Ende.tStopRefresh)
thisExp.nextEntry()
# the Routine "Ende_Experiment" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
