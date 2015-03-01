#pragma strict

private var _text : UnityEngine.UI.Text;

function Start(){

	_text = this.GetComponent(UnityEngine.UI.Text);

}

function sliderRenderText(valfloat : float)
{
	_text.text = valfloat.ToString();
}