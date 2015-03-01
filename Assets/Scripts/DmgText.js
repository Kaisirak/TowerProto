#pragma strict

public var TTL : float = 2.0;

function Start () {
	gameObject.GetComponent(UnityEngine.UI.Text).CrossFadeAlpha(0.0f, TTL, true);
}

function Update () {
	gameObject.transform.position.y += 0.2 * Time.deltaTime;
	TTL -= Time.deltaTime;
	if (TTL < 0.0)
		Destroy(gameObject);
}