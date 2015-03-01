#pragma strict


public var playerClass : String;
public var playerName : String;

public var ATB : float;
public var ATB_UI : UnityEngine.UI.Slider;

public var HP : int;
public var HP_MAX : int;
public var HP_UI : UnityEngine.UI.Slider;

public var MP : int;
public var MP_MAX : int;
public var MP_UI : UnityEngine.UI.Slider;

public var EXP : int;
public var EXP_MAX : int;
public var EXP_UI : UnityEngine.UI.Slider;

public var CRIT : int;
public var CRIT_UI : UnityEngine.UI.Slider;

public var GOLD : int;
public var GOLD_UI : UnityEngine.UI.Text;

public var STANCE : int;

public var attack : int;
public var defense : int;
public var intelligence : int;
public var luck : int;
public var speed : int;

private var sliderSpeed : float = 2.0f;

function Start ()
{

}

function Update ()
{
	// UI STUFF

	GOLD_UI.text = GOLD.ToString();

	HP_UI.maxValue = HP_MAX;
	HP_UI.value -= (HP_UI.value - HP) * sliderSpeed * Time.deltaTime;

	if (MP_UI)
	{
		MP_UI.maxValue = MP_MAX;
		MP_UI.value -= (MP_UI.value - MP) * sliderSpeed * Time.deltaTime;
	}
	
	EXP_UI.maxValue = EXP_MAX;
	EXP_UI.value -= (EXP_UI.value - EXP) * sliderSpeed * Time.deltaTime;

	ATB_UI.value = ATB;

	CRIT_UI.value -= (CRIT_UI.value - CRIT) * sliderSpeed * Time.deltaTime;

	// END UI STUFF
}

function setStance(newStance : int)
{
	STANCE = newStance;
}
