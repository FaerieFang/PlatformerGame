#pragma strict

var PS1 : GameObject;
var PS2 : GameObject;
var player : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(coll : Collision2D){
		if (coll.gameObject.tag == "player"){
			yield WaitForSeconds (0.2);
			Destroy (player.gameObject);

			yield WaitForSeconds (3);
			Application.LoadLevel(Application.loadedLevel+1);
			
		}
}