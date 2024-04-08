export enum ActionId {
	Program = 'program',
	ProgramVariables = 'programVariables',
	Preview = 'preview',
	PreviewVariables = 'previewVariables',
	Cut = 'cut',
	Auto = 'auto',
	TBar = 'tBar',
	Aux = 'aux',
	AuxVariables = 'auxVariables',
	USKSource = 'uskSource',
	USKSourceVariables = 'uskSourceVariables',
	USKOnAir = 'usk',
	USKFly = 'uskFly',
	USKMaskLumaChromaPattern = 'uskMaskLumaChromaPattern',
	USKDVEProperties = 'uskDveProperties',
	USKFlyInfinite = 'uskFlyInfinite',
	DSKSource = 'dskSource',
	DSKSourceVariables = 'dskSourceVariables',
	DSKRate = 'dskRate',
	DSKMask = 'dskMask',
	DSKPreMultipliedKey = 'dskPreMultipliedKey',
	DSKOnAir = 'dsk',
	DSKTie = 'dskTie',
	DSKAuto = 'dskAuto',
	MacroRun = 'macrorun',
	MacroContinue = 'macrocontinue',
	MacroStop = 'macrostop',
	MacroLoop = 'macroloop',
	MultiviewerWindowSource = 'setMvSource',
	MultiviewerWindowSourceVariables = 'setMvSourceVariables',
	MultiviewerLayout = 'multiviewerLayout',
	SuperSourceArt = 'ssrcArt',
	SuperSourceBoxSource = 'setSsrcBoxSource',
	SuperSourceBoxSourceVaraibles = 'setSsrcBoxSourceVariables',
	SuperSourceBoxOnAir = 'setSsrcBoxEnable',
	SuperSourceBoxProperties = 'setSsrcBoxProperties',
	SuperSourceBoxPropertiesDelta = 'setSsrcBoxPropertiesDelta',
	TransitionStyle = 'transitionStyle',
	TransitionSelection = 'transitionSelection',
	TransitionSelectionComponent = 'transitionSelectionComponent',
	TransitionSelectComponents = 'transitionSelectComponents',
	TransitionRate = 'transitionRate',
	MediaPlayerSource = 'mediaPlayerSource',
	MediaPlayerCycle = 'mediaPlayerCycle',
	MediaCaptureStill = 'mediaCaptureStill',
	MediaDeleteStill = 'mediaDeleteStill',
	FadeToBlackAuto = 'fadeToBlackAuto',
	FadeToBlackRate = 'fadeToBlackRate',
	StreamStartStop = 'streamStartStop',
	StreamService = 'streamService',
	RecordStartStop = 'recordStartStop',
	RecordSwitchDisk = 'recordSwitchDisk',
	RecordFilename = 'recordFilename',
	RecordISO = 'recordISO',
	ClassicAudioGain = 'classicAudioGain',
	ClassicAudioGainDelta = 'classicAudioGainDelta',
	ClassicAudioMixOption = 'classicAudioMixOption',
	ClassicAudioResetPeaks = 'classicAudioResetPeaks',
	ClassicAudioMasterGain = 'classicAudioMasterGain',
	ClassicAudioMasterGainDelta = 'classicAudioMasterGainDelta',
	ClassicAudioMasterPan = 'classicAudioMasterPan',
	ClassicAudioMasterPanDelta = 'classicAudioMasterPanDelta',
	FairlightAudioFaderGain = 'fairlightAudioFaderGain',
	FairlightAudioFaderGainDelta = 'fairlightAudioFaderGainDelta',
	FairlightAudioInputGain = 'fairlightAudioInputGain',
	FairlightAudioInputGainDelta = 'fairlightAudioInputGainDelta',
	FairlightAudioInputDelay = 'fairlightAudioInputDelay',
	FairlightAudioInputDelayDelta = 'fairlightAudioInputDelayDelta',
	FairlightAudioMixOption = 'fairlightAudioMixOption',
	FairlightAudioResetPeaks = 'fairlightAudioResetPeaks',
	FairlightAudioResetSourcePeaks = 'fairlightAudioResetSourcePeaks',
	FairlightAudioMasterGain = 'fairlightAudioMasterGain',
	FairlightAudioMasterGainDelta = 'fairlightAudioMasterGainDelta',
	FairlightAudioMonitorMasterMuted = 'fairlightAudioMonitorMasterMuted',
	FairlightAudioMonitorGain = 'fairlightAudioMonitorGain',
	FairlightAudioMonitorGainDelta = 'fairlightAudioMonitorGainDelta',
	// FairlightAudioMonitorMasterGain = 'fairlightAudioMonitorMasterGain',
	SaveStartupState = 'saveStartupState',
	ClearStartupState = 'clearStartupState',
	InputName = 'inputName',
	DisplayClockState = 'displayClockState',
	DisplayClockConfigure = 'displayClockConfigure',
	DisplayClockStartTime = 'displayClockStartTime',
	Timecode = 'timecode',
	TimecodeMode = 'timecodeMode',

	CameraControlLensFocus = 'cameraControlLensFocus',
	CameraControlLensAutoFocus = 'cameraControlLensAutoFocus',
	CameraControlLensIris = 'cameraControlLensIris',
	CameraControlLensAutoIris = 'cameraControlLensAutoIris',
	CameraControlLensOpticalImageStabilisation = 'cameraControlLensOpticalImageStabilisation',

	CameraControlVideoManualWhiteBalance = 'cameraControlVideoManualWhiteBalance',
	CameraControlVideoAutoWhiteBalance = 'cameraControlVideoAutoWhiteBalance',
	CameraControlVideoExposure = 'cameraControlVideoExposure',
	CameraControlVideoSharpeningLevel = 'cameraControlVideoSharpeningLevel',
	CameraControlVideoGain = 'cameraControlVideoGain',
	CameraControlVideoNdFilterStop = 'cameraControlVideoNdFilterStop',

	CameraControlDisplayColorBars = 'cameraControlDisplayColorBars',

	CameraControlColorLiftAdjust = 'cameraControlColorLiftAdjust',
	CameraControlColorGammaAdjust = 'cameraControlColorGammaAdjust',
	CameraControlColorGainAdjust = 'cameraControlColorGainAdjust',
	CameraControlColorOffsetAdjust = 'cameraControlColorOffsetAdjust',
	CameraControlColorContrastAdjust = 'cameraControlColorContrastAdjust',
	CameraControlColorLumaMix = 'cameraControlColorLumaMix',
	CameraControlColorHueSaturationAdjust = 'cameraControlColorHueSaturationAdjust',
}