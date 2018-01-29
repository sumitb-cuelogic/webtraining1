

function displaytask(){

var allentries= JSON.parse(localStorage.getItem("Allentries"));
var username=localStorage.getItem("username");

  var userindex=searchUser(username,allentries);
  // window.alert(userindex);
  // alert(JSON.stringify(allentries[userindex].todo[0]));
  var todolist= allentries[userindex].todo;
  //alert(todolist[0].tasktext);
  for(i=0;i<todolist.length;i++)
  {
    obj=todolist[i];
    var node = document.createElement("tr");
    node.setAttribute("id",i);
    document.getElementById("tabletask").appendChild(node);
    document.getElementById(i).innerHTML="<td>"+(i+1)+"<input type='checkbox'>"+"<td>"+obj.tasktext+"</td>"+"<td>"+obj.categary+
                                          "</td>"+"<td>"+obj.reminderdate+"</td>";
  }
  // alert(JSON.stringify(todolist));

}