
function startFunction(){
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
    var header=document.getElementById("myHeader");
    var h1=document.createElement("h1");
    var p=document.createElement("p");
    var i=document.createElement("i");
    i.appendChild(document.createTextNode("Yet another newsfeed"));
    p.appendChild(i);
    h1.appendChild(document.createTextNode("NEWSFEED"));
    header.appendChild(h1);
    header.appendChild(p);
    document.body.insertBefore(modal,header);

    //main
    var main=document.getElementById("main");
    
        //left block
        var left=document.createElement("div");
        left.setAttribute("class","left");
        var i=0;
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
        h1.appendChild(document.createTextNode("India Today"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 29 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
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

        left.appendChild(tile);

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
        h1.appendChild(document.createTextNode("NDTV 24x7"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 22 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Two"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("Mirror Now"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 20 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Three"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("CNBC TV18"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 17 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Four"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("NDTV 24x7"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 16 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Five"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("Mirror Now"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 15 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Six"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("India Today"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 13 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Seven"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("Mirror Now"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 10 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Eight"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("NDTV 24x7"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 07 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Nine"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

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
        h1.appendChild(document.createTextNode("CNBC TV18"));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createTextNode("Posted on"));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" 03 June, 2019 "));
        var graytext=document.createElement("span");
        graytext.setAttribute("class","grayText");
        graytext.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(graytext);
        h5.appendChild(document.createTextNode(" Category Ten"));
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

        left.appendChild(tile);
        
        main.appendChild(left);

        //right block
        var right=document.createElement("div");
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
        main.appendChild(right);

    

    //footer
    var footer=document.getElementById("myFooter");
    var small=document.createElement("small");
    var text=document.createTextNode("\u00A9 NewsFeed 2019");
    small.appendChild(text);
    footer.appendChild(small);

    
}
var modal;
function closeModal(){
    console.log("in close");
    modal.style.display = "none";
}

var emails=[];
window.localStorage.setItem("emails",JSON.stringify(emails));

function storeEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)){
        emails=JSON.parse(window.localStorage.getItem("emails"));
        if(emails.includes(document.getElementById("email").value)){
            document.getElementById("email").value="";
            alert("Email already registered!");
        }else{
            emails.push(document.getElementById("email").value);
            window.localStorage.setItem("emails",JSON.stringify(emails));
            document.getElementById("email").value="";
            alert("Email registered");
        }
  }
  else{
      alert("Invalid email address!")
      return ("Invalid Email");
    }
}

function optionSelect(){
    var index=document.getElementById("mySelect").selectedIndex;
    var option=document.getElementsByTagName("option")[index];
    var all=document.getElementsByTagName("option")[0];
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
        console.log(title);
    }
}

function details(temp){
    modal=document.getElementById("myModal");
    var info=document.getElementById(temp);
    var title=info.getElementsByTagName("h1")[0];
    var p1=info.getElementsByTagName("h5")[0];
    var p2=info.getElementsByTagName("p")[0];

    var header=modal.getElementsByClassName("modal-header")[0];
    header.getElementsByTagName("h2")[0].innerHTML=title.innerHTML;
    var body=modal.getElementsByClassName("modal-body")[0];
    body.getElementsByTagName("p")[0].innerHTML=p1.innerHTML;
    body.getElementsByTagName("p")[1].innerHTML=p2.innerHTML;
    console.log('modal',modal);
    modal.style.display = "block";
    console.log(p2.innerHTML);
}

window.onclick = function(event) {
    if (event.target == modal) {
        
      modal.style.display = "none";
    }
  }