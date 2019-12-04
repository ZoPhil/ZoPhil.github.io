 $(document).ready(function () {
   
    function jumbotron (data){
        htmlcode = '<div class="jumbotron">' +
        '<div class="container">' +
         ' <h1>'+
            data.heading+
          '</h1>'+
          '<p>' + data.subheading + '</p>'+
         ' </div>'+
         ' </div> '
        $("#main").append(htmlcode)
    };


    var content = {
                "navbar": [
                   {
                    "title": "Home",
                    "url": "index2.html"
                    },
                   {
                    "title": "About Us",
                    "url": "about.html"
                    },
                    {
                    "title": "Our Team",
                    "url": "team.html"
                    },
                    {
                    "title": "Contact Us",
                    "url": "contact.html"
                    }
                ],
                "about.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "heading": "About what you're waiting for",
                        "subheading": "the entire point of waiting is that something comes at the end"
                    }
                    ]
                },
                "index2.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "heading": "Waiting for home",
                        "subheading": "Waiting to create a home or waiting to arrive home?",
                    }
                    ]
                },
                "team.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "heading": "Someone waits for you on the other side",
                        "subheading": "The other side of what?",
                    }
                    ]
                },
                "contact.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "heading": "Prolonged waiting",
                        "subheading": "How do you contact that person waiting on the other end, to let them know that you're still coming?",
                    }
                    ]
                
                },
            }

            for (var i=0; i <content.navbar.length; i++){
                console.log (content.navbar[i].title + '|' + content.navbar[i].url);
                $('#where').append('<li class="nav-item"><a class="nav-link" href="' + content.navbar[i].url + '">' + content.navbar[i].title + '</a></li>');
            
            }


    console.log(window.location);

    var pagefile = window.location.pathname.split("/").pop();
    console.log(pagefile);

    //jumbotron();
        var blocks = content[pagefile].blocks;
        console.log(blocks);
        for(var i=0; i<blocks.length; i++){
            if(blocks[i].type == 'jumbotron'){ jumbotron(blocks[i])} 

        }


    $.ajax({
        url: 'https://randomuser.me/api/?results=5',
        dataType: 'json',
         success: function(data) {
         console.log(data);

       for (var i=0; i<data.results.length; i++){
        var firstname = data.results[i].name.first;
        var lastname = data.results[i].name.last;
        var photo = data.results[i].picture.thumbnail;
        var email = data.results[i].email;
        $("#users").append('<li> <img src ="'+photo+'"> '+firstname+' '+lastname+' - '+email+'</li>');
         }
        }
    });


    });