#pragma strict
var p1 : GameObject;
var p2 : GameObject;
function Start () {

}

function Update () {
	Physics2D.IgnoreCollision(p1.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	Physics2D.IgnoreCollision(p2.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
}