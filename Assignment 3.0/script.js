let gettoken = document.getElementById("get_token")
gettoken.onclick = async function()
{
    // console.log("hello");
    let response = await fetch('http://localhost:12345/get_token');
    let responsetext =  await response.text();
    var line1 = document.createElement('p')
    line1.innerHTML="Here is your tokken :" + " " + responsetext + ". Copy it before it disappears in a minute! Use this token to register yourself on the server.";
    document.getElementById("div1").appendChild(line1);
    setTimeout(function() { line1.remove() }, 60000);
}

let register = document.getElementById("Register")
register.onclick = async function() {
    
    // console.log(myObj);
    var myObj = {
        "username" : String(document.getElementById("UserName").value),
        "data" : String(document.getElementById("Data").value),
        "token" : String(document.getElementById("Token").value),
    }
    let response1 = await fetch('http://localhost:12345/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(myObj)
    });
    console.log(response1);
    if (response1.ok) {
        alert("You are successfully registered!");
    }
}

let getdata = document.getElementById("AccessData");
getdata.onclick =  async function() {
    var data_token = {
        "token" : String(document.getElementById("DataToken").value)
    }
    let response2 = await fetch('http://localhost:12345/get_data' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_token)
    })
    console.log(response2);
    if(response2.ok) {
        let line2 = document.createElement('p');
        let x = await response2.text();
        line2.innerHTML = "Here is your data-" + "<br><br>" + x + "<br><br><br>" + "This will automatically disappear after 2 minutes";
        document.getElementById("div2").appendChild(line2);
        setTimeout(function() { line2.remove() }, 120000);
        }
    }
    




