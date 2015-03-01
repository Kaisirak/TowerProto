#pragma strict

public var ATB : float;

public var HP : int;
public var HP_MAX : int;
public var HP_UI : UnityEngine.UI.Slider;

public var EXP : int;
public var GOLD : int;

public var STANCE : int;

public var attack : int;
public var defense : int;
public var intelligence : int;
public var luck : int;
public var speed : int;

private var sliderSpeed : float = 2.0f;

function Start () {

}

function Update ()
{


	// UI STUFF
	
	HP_UI.maxValue = HP_MAX;
	HP_UI.value -= (HP_UI.value - HP) * sliderSpeed * Time.deltaTime;
}