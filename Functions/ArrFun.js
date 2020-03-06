var array=[];
var ep;
openPromptBox();
enterpoint();
function enterpoint()
{
  ep=window.prompt("1.ADD \n 2.list \n 3. Delete \n 4.quit");
  switch (ep) {
    case "1":
        add();
        break;
    case "2":
         list();
          break;
    case "3":
    del();
    break;
    default:
    ex();
    break;
  }
}
function add()
{
  var item=prompt("Enter value");
  array.push(item);
  enterpoint();
}
function del() {
  var ch=prompt("a. to Delete last item\n b. to Delete by index")
  switch (ch) {
    case "a":
     array.pop();
     break;
     case "b":
     var del= prompt("enter index value");
     array.splice(del,1);
     break;
    default:
    break;
  }
  enterpoint();
}
function list() {
    console.log(array);
    enterpoint();
}
function ex()
{
  var c=prompt("wish to exit y.yes n.no");
  switch (c) {
    case "n":
      enterpoint();
      break;
    default:
       break;
  }

}
function openPromptBox() {
var pos = FindXY(document.promptForm);
var cont = $('promptContainer');
var searchBox = $('promptBox');

searchBox.style.left = (pos.x - 20) + "px";
searchBox.style.top = (document.body.scrollTop + 100) + "px";

cont.style.display = "block";
}
