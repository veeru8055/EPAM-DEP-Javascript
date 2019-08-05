function load(){
    //popup modal
    var modal=document.createElement("div");
    modal.setAttribute("id","myModal");
    modal.setAttribute("class","modal");
    var modalContent=document.createElement("div");
    modalContent.setAttribute("class","modal-content");
    var modalHeader=document.createElement("div");
    modalHeader.setAttribute("class","modal-header");
    var span=document.createElement("span");
    span.setAttribute("class","close");
    span.setAttribute("onclick","closeModal()");
    span.appendChild(document.createTextNode("\u00D7"));
    modalHeader.appendChild(span);
    var h2=document.createElement("h2");
    h2.appendChild(document.createTextNode("Title"));
    modalHeader.appendChild(h2);
    modalContent.appendChild(modalHeader);
    var modalBody=document.createElement("div");
    modalBody.setAttribute("class","modal-body");
    var p1=document.createElement("p");
    p1.appendChild(document.createTextNode("p1"));
    var p2=document.createElement("p");
    p2.appendChild(document.createTextNode("p2"));
    modalBody.appendChild(p1);
    modalBody.appendChild(p2);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    //header
    let header=document.createElement("header");
    var h1=document.createElement("h1");
    var p=document.createElement("p");
    var i=document.createElement("i");
    i.appendChild(document.createTextNode("Yet another newsfeed"));
    p.appendChild(i);
    h1.appendChild(document.createTextNode("NEWSFEED"));
    header.appendChild(h1);
    header.appendChild(p);
    document.body.appendChild(modal);
    //main
    let main=document.createElement("main");
        //left block
        let left=document.createElement("div");
        left.setAttribute("class","left");
        var i=0;
        var titles=['India Today','NDTV 24x7','Mirror Now','CNBC TV18','NDTV 24x7','Mirror Now','India Today','Mirror Now','NDTV 24x7','CNBC TV18'];
        var fragment=document.createDocumentFragment();
        titles.forEach(function(title){
        var tile=document.createElement("div");
        tile.setAttribute("class","tile");
        var image=document.createElement("div");
        image.setAttribute("class","image");
        var img=document.createElement("img");
        img.setAttribute("src","./pic.png");
        image.appendChild(img);
        tile.appendChild(image);
        var info=document.createElement("div");
        info.setAttribute("class","info");
        info.setAttribute("id",i);
        var h1=document.createElement("h1");
        h1.appendChild(document.createTextNode(title));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var grayText=document.createElement("span");
        grayText.setAttribute("class","grayText");
        grayText.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(grayText);
        h5.appendChild(document.createTextNode(" 29 June, 2019 "));
        var grayText=document.createElement("span");
        grayText.setAttribute("class","grayText");
        grayText.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(grayText);
        h5.appendChild(document.createTextNode(" Category One"));
        info.appendChild(h5);
        var p=document.createElement("p");
        p.appendChild(document.createTextNode("Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing. Writers write persuasive and argument paragraphs because their purpose is to persuade or convince someone."));
        info.appendChild(p);
        var button=document.createElement("button");
        button.setAttribute("onclick","details("+i+")");
        i++;
        button.appendChild(document.createTextNode("Continue Reading"));
        info.appendChild(button);
        tile.appendChild(info);
        fragment.appendChild(tile);
        })
        left.appendChild(fragment);
        main.appendChild(left);
        //right block
        let right=document.createElement("div");
        right.setAttribute("class","right");
        var b=document.createElement("b");
        b.appendChild(document.createTextNode("SELECT CATEGORY"));
        right.appendChild(b);
        right.appendChild(document.createElement("br"));
        var select=document.createElement("select");
        select.setAttribute("onChange","optionSelect()");
        select.setAttribute("id","mySelect");
        var option1=document.createElement("option");
        option1.appendChild(document.createTextNode("All"));
        var option2=document.createElement("option");
        option2.appendChild(document.createTextNode("India Today"));
        var option3=document.createElement("option");
        option3.appendChild(document.createTextNode("NDTV 24x7"));
        var option4=document.createElement("option");
        option4.appendChild(document.createTextNode("Mirror Now"));
        var option5=document.createElement("option");
        option5.appendChild(document.createTextNode("CNBC TV18"));
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        right.appendChild(select);
        right.appendChild(document.createElement("br"));
        right.appendChild(document.createElement("br"));
        var b=document.createElement("b");
        b.appendChild(document.createTextNode("SUBSCRIBE"));
        right.appendChild(b);
        right.appendChild(document.createElement("br"));
        var input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","\xa0\xa0Email Address");
        input.setAttribute("id","email");
        right.appendChild(input);
        var button=document.createElement("button");
        button.setAttribute("onclick","storeEmail()");
        var b=document.createElement("b");
        b.appendChild(document.createTextNode("Subscribe"));
        button.appendChild(b);
        right.appendChild(button);
        var message=document.createElement("div");
        message.setAttribute("class","message");
        message.setAttribute("id","message");
        right.appendChild(message);
        var message2=document.createElement("div");
        message2.setAttribute("class","message2");
        message2.setAttribute("id","message2");
        right.appendChild(message2);
        main.appendChild(right);
    //footer
    let footer=document.createElement("footer");
    var small=document.createElement("small");
    var text=document.createTextNode("\u00A9 NewsFeed 2019");
    small.appendChild(text);
    footer.appendChild(small);
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);   
}
var modal;
function closeModal(){
    modal.style.display = "none";
}
var emails=[];
window.localStorage.setItem("emails",JSON.stringify(emails));
function storeEmail(){
    var message2=document.getElementById("message2");
            message2.style.display="none";
            var message=document.getElementById("message");
            message.style.display="none";            
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)){
        emails=JSON.parse(window.localStorage.getItem("emails"));
        if(emails.includes(document.getElementById("email").value)){
            document.getElementById("email").value="";
            message.innerHTML="<b>Email already registered!<b>"
            message.style.display="block";
        }else{
            emails.push(document.getElementById("email").value);
            window.localStorage.setItem("emails",JSON.stringify(emails));
            document.getElementById("email").value="";
            message2.innerHTML="<b>Email registered!<b>"
            message2.style.display="block";
        }
  }
  else{
        message.innerHTML="<b>Invalid email!<b>"
        message.style.display="block";
    }
}
function optionSelect(){
    var index=document.getElementById("mySelect").selectedIndex;
    var option=document.getElementsByTagName("option")[index];
    var selectedOption=option.text;
    var tiles=document.getElementsByClassName("tile");
    for(x=0;x<tiles.length;x++){
        var title=tiles[x].getElementsByClassName("info")[0].getElementsByTagName("h1")[0].innerHTML;
        if(selectedOption=="All"){
            tiles[x].style.display="flex";
        }
        else{
            if(title!=selectedOption){
                tiles[x].style.display="none";
            }
            else{
                tiles[x].style.display="flex";
            }
        }
    }
}
function details(tileId){
    modal=document.getElementById("myModal");
    var info=document.getElementById(tileId);
    var title=info.getElementsByTagName("h1")[0];
    var p1=info.getElementsByTagName("h5")[0];
    var p2=info.getElementsByTagName("p")[0];
    var header=modal.getElementsByClassName("modal-header")[0];
    header.getElementsByTagName("h2")[0].innerHTML=title.innerHTML;
    var body=modal.getElementsByClassName("modal-body")[0];
    body.getElementsByTagName("p")[0].innerHTML=p1.innerHTML;
    body.getElementsByTagName("p")[1].innerHTML=p2.innerHTML;
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }