#pragma strict

var output : float;


function Start () {

}

function Update () {
	if (output == 2){
		 Application.LoadLevel(Application.loadedLevel+1);
	}
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "PlayerOne"){
		output += 1;	
	}
	if (coll.gameObject.tag == "PlayerTwo"){
		output += 1;	
	}
}

function OnTriggerExit2D(coll: Collider2D) {
	if (coll.gameObject.tag == "PlayerOne"){
		output -= 1;	
	}
	if (coll.gameObject.tag == "PlayerTwo"){
		output -= 1;	
	
	}
}
