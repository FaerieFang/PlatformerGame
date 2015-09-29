#pragma strict

function Start () {

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