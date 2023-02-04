let User=[];
let check;
function addUser()
{
    let tempname=document.getElementById("name").value;
    let tempemail=document.getElementById("email").value;

    User.filter((x)=>
    {
        if(x.email==tempemail)
        {
            check=1;
        }
    })

    if(check==1)
    {
        alert("User Already Exist!!!. Please Enter Your Email")
    }
    else
    {
        tempUser={
            name:tempname,
            email:tempemail,
        }
        User.push(tempUser);
        alert("Successfully Registered!!!")

        let parent=document.getElementById('container');
        let divTag=document.createElement('div');
        parent.appendChild(divTag);
        let name=document.createElement('h3');
        let email=document.createElement('h3');
        name.innerHTML=tempname;
        email.innerHTML=tempemail;
        divTag.appendChild(name);
        divTag.appendChild(email);
        divTag.classList.add('Users');
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        console.log(User);
    }
}