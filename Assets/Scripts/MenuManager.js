#pragma strict

public var currentMenu : MenuPanel;

function Start()
{
	showMenu(currentMenu);
}

function showMenu(menuToShow : MenuPanel)
{
	if (currentMenu != null)
		currentMenu.isOpen = false;
	
	Debug.Log(menuToShow);
	menuToShow.isOpen = true;
	currentMenu = menuToShow;
}