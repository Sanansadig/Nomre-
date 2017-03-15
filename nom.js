document.getElementById("field").addEventListener('keydown', function(event) {
    if (event.which < 58 && event.which > 47) {
        return true;
    } else {
        event.preventDefault();
        return false;}
    })


document.getElementById('field').addEventListener('mouseover', function() {
var c = this.value="+994-";
var a = event.value.length ==3;
var b = event.value.length ==2;

c + a + "-" + b + "-" +b;

}
)







