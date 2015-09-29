#pragma strict
var speed : float;

function Start () {
	GetComponent.<Rigidbody2D>().velocity.x = speed;
}

function Update () {
	
}

function OnCollisionEnter2D(coll : Collision2D){
	if (coll.gameObject.tag == "player"){
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		yield WaitForSeconds (1);
		Application.LoadLevel(Application.loadedLevel);
	}

		
}