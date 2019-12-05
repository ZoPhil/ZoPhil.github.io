 $(document).ready(function () {
   



    var content = {
                "navbar": [
                   {
                    "title": "Overview",
                    "url": "#overview"
                    },
                    {
                    "title": "Professional",
                    "url": "#professional"
                    },
                    {
                    "title": "Writing",
                    "url": "#writing"
                    },
                    {
                    "title": "Hobbies",
                    "url": "#hobbies"
                    },
                    {
                    "title": "Contact",
                    "url": "#contact"
                    },
                ],
             }

            for (var i=0; i <content.navbar.length; i++){
                console.log (content.navbar[i].title + '|' + content.navbar[i].url);
                $('#where').append('<li class="nav-item px-5"><a class="nav-link" href="' + content.navbar[i].url + '">' + content.navbar[i].title + '</a></li>');
            
            }


    console.log(window.location);

    var pagefile = window.location.pathname.split("/").pop();
    console.log(pagefile);


    });