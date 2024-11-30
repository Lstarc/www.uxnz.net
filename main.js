function del_world_box(){
    var obj=document.getElementById('world_box');
    obj.parentNode.removeChild(obj);
}
function show_index(){
    del_world_box();
    var html="";
    document.getElementById('world_box').innerHTML=html;
}
function show_for_me(){
    del_world_box();
    document.write('<div class="world_box" id="world_box"><br/>原谅我还没有想好要说啥</div>');
}