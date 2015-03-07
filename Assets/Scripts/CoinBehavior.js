#pragma strict

public var coinValue : int = 1;
public var coinSpeed : float = 1.3;

private var myGameState : GameManager;
private var playerInstanceData : Player;

function Start () {
	myGameState = GameObject.Find("Scene").GetComponent(GameManager);
	playerInstanceData = GameObject.Find("PlayerObj").GetComponent(Player);
}

function Update ()
{
	if (myGameState.gameState == "playing")
	{
		transform.position.x = Mathf.Lerp(transform.position.x, 500.5, coinSpeed * Time.deltaTime);
		transform.position.y = Mathf.Lerp(transform.position.y, 283.816, coinSpeed * Time.deltaTime);
		
		if (transform.position.x < 500.650)
		{
			playerInstanceData.GOLD += coinValue;
			Destroy(gameObject);
		}
	}
}