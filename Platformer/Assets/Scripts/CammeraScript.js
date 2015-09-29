#pragma strict

var PS3 : GameObject;
var player : GameObject;
var test : boolean = false;

function Start () {
	transform.position.y = PS3.transform.position.y;
	transform.position.x = PS3.transform.position.x;
	yield WaitForSeconds (1);
	test = true;
}

function Update () {
	if (test == true){
		transform.position.y = player.transform.position.y;
		transform.position.x = player.transform.position.x;
	}

}