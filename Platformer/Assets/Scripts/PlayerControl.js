#pragma strict

var PS1 : GameObject;
var PS2 : GameObject;
var PS4 : GameObject;
var destination : Transform;

var isgrounded : boolean = false;
var speed : float;
var jump : KeyCode;
var end1 : GameObject;
var moveLeft : KeyCode;
var moveRight : KeyCode;

function Start () {
	yield WaitForSeconds (1);
	this.transform.position = destination.position;

}

function Update () {

	//moving left or right
	if (Input.GetKey(moveLeft)){
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;	
	}
	else if (Input.GetKey(moveRight)){
		GetComponent.<Rigidbody2D>().velocity.x = speed;
	}
	else{
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	if (transform.position.y < -15){
		Application.LoadLevel(Application.loadedLevel);
	}
	
 
//Jump function
	if(isgrounded == true && Input.GetKeyDown(jump)){
		GetComponent.<Rigidbody2D>().velocity.y = 13;
		isgrounded = false;
		}
	}

 //make sure u replace "floor" with your gameobject name.on which player is standing
function OnCollisionEnter2D(coll : Collision2D){
	if(coll.gameObject.tag == "wall"){
		isgrounded = true;
	}
	if (coll.gameObject.tag == "enemy"){
		Instantiate (PS4, transform.position + transform.forward * 1.0, transform.rotation);
		Destroy (this.gameObject);
	}
	if (coll.gameObject.tag == "end"){
		Instantiate (PS1, transform.position + transform.forward * 1.0, transform.rotation);
		Instantiate (PS2, transform.position + transform.forward * 1.0, transform.rotation);
		GetComponent(PlayerControl).enabled = false;
	}

}
 
 //consider when character is jumping .. it will exit collision.
function OnCollisionExit2D(coll : Collision2D){
	if(coll.gameObject.tag == "wall"){
		isgrounded = false;
	}
}

