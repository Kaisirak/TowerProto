#pragma strict

public var playerInstance : GameObject;

public var enemyInstance : GameObject;

public var canvasInstance : Transform;

public var dmg : Transform;
public var copper : Transform;

private var playerInstanceData : Player;
private var enemyInstanceData : Enemy;

public var gameState : String = "playing";

function Start ()
{
	playerInstanceData = playerInstance.GetComponent(Player);
	enemyInstanceData = enemyInstance.GetComponent(Enemy);
}

function Update ()
{
	if (gameState == "playing")
		playGameLoop();
	else if (gameState == "lvlup")
		playLvlUp();
}

function playLvlUp()
{

}

function choseStat(lvpts : int)
{
	if (lvpts == 0)
		playerInstanceData.attack++;
	else if (lvpts == 1)
		playerInstanceData.defense++;
	else if (lvpts == 2)
		playerInstanceData.luck++;
	else if (lvpts == 3)
		playerInstanceData.speed++;
	gameState = "playing";
	canvasInstance.FindChild("LvlUpPanel").GetComponent(Animator).SetBool("isShowing", false);
}

function playGameLoop()
{
	if (playerInstanceData.HP > 0 && enemyInstanceData.HP > 0)
	{
		if (playerInstanceData.ATB < 100)
			playerInstanceData.ATB += Time.deltaTime * playerInstanceData.speed;

		if (enemyInstanceData.ATB < 100)
			enemyInstanceData.ATB += Time.deltaTime * enemyInstanceData.speed;

		if (playerInstanceData.ATB > 100)
		{
			playerAttack();
			playerInstanceData.ATB = 0;
		}

		if (enemyInstanceData.ATB > 100)
		{
			enemyAttack();
			enemyInstanceData.ATB = 0;
		}
	}
	else if (playerInstanceData.HP < 0)
	{
		// GAMEOVER
	}
	else if (enemyInstanceData.HP < 0)
	{
		playerInstanceData.EXP += enemyInstanceData.EXP;
		spawnGold(enemyInstanceData.GOLD);
		doNext();
	}
}

function spawnGold(nbrGold : int)
{
	for (var i = 0; i < nbrGold % 10; i++)
	{
		var tmpCopper : Transform = Instantiate(copper);
		tmpCopper.position.x = enemyInstance.transform.position.x + Random.Range(-0.1f, 0.04f);
		tmpCopper.position.y = enemyInstance.transform.position.y + Random.Range(-0.05f, 0.04f);
	}
}

function setNewEnemy()
{
	if (Random.Range(0.0, 1.0) > 0.4)
		enemyInstance.GetComponent(Animator).Play("EnemySnake");
	else
		enemyInstance.GetComponent(Animator).Play("EnemyCyclop");
	enemyInstanceData.HP = enemyInstanceData.HP_MAX;
	enemyInstanceData.HP_UI.value = enemyInstanceData.HP_MAX;
}

function doLevelUp()
{
	gameState = "lvlup";
	canvasInstance.FindChild("LvlUpPanel").GetComponent(Animator).SetBool("isShowing", true);
}

function doNext()
{
	if (playerInstanceData.EXP >= playerInstanceData.EXP_MAX)
	{
		playerInstanceData.EXP -= playerInstanceData.EXP_MAX;
		playerInstanceData.EXP_MAX += playerInstanceData.EXP_MAX + 250;
		doLevelUp();
	}
	setNewEnemy();
}

function playerAttack()
{
	var tmpDmg = playerInstanceData.attack * 3 - enemyInstanceData.defense + Mathf.CeilToInt(Random.Range(playerInstanceData.attack / 5.0, playerInstanceData.attack / 2.0));
	enemyInstanceData.HP -= tmpDmg;
	var dmgInstance : Transform = Instantiate(dmg);
	dmgInstance.GetComponent(UnityEngine.UI.Text).text = tmpDmg.ToString();
	dmgInstance.position.x = 3;
	dmgInstance.position.y = 0;
	dmgInstance.SetParent(canvasInstance, false);
}

function enemyAttack()
{
	var tmpDmg = enemyInstanceData.attack * 2 - playerInstanceData.defense + Mathf.CeilToInt(Random.Range(enemyInstanceData.attack / 5.0, enemyInstanceData.attack / 2.0));
	playerInstanceData.HP -= tmpDmg;
	var dmgInstance : Transform = Instantiate(dmg);
	dmgInstance.GetComponent(UnityEngine.UI.Text).text = tmpDmg.ToString();
	dmgInstance.position.x = -435;
	dmgInstance.position.y = 10;
	dmgInstance.SetParent(canvasInstance, false);
}
