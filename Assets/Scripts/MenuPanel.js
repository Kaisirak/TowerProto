#pragma strict

public var isOpen : boolean;

private var _animator : Animator;
private var _canvasGroup : CanvasGroup;

function Awake(){
	this._animator = this.GetComponent(Animator);
	this._canvasGroup = this.GetComponent(CanvasGroup);
	
	var myrect = this.GetComponent(RectTransform);
	
	//myrect.offsetMax = myrect.offsetMin = Vector2(0,0);
}

function Update(){
	_animator.SetBool("isOpen", isOpen);
	if (_animator.GetCurrentAnimatorStateInfo(0).IsName("Open"))
		_canvasGroup.blocksRaycasts = _canvasGroup.interactable = true;
	else
		_canvasGroup.blocksRaycasts = _canvasGroup.interactable = false;
}