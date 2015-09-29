#pragma strict

var player : GameObject;
var PS2 : GameObject;

function Start () {
	yield WaitForSeconds (1);
	Instantiate (PS2, transform.position + transform.forward * 1.0, transform.rotation);
	Destroy (this.gameObject);
}

function Update () {

}