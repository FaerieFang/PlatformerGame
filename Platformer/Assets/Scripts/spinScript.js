#pragma strict

var speed : float;

function Start () {
	GetComponent.<Rigidbody2D>().rotation = speed;
	
}

function Update () {
	GetComponent.<Rigidbody2D>().rotation = GetComponent.<Rigidbody2D>().rotation +speed;
}