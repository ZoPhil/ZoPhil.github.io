 $(document).ready(function () {
   
   

    $.ajax({
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
         success: function(data) {
         console.log(data);

       for (var i=0; i<data.results.length; i++){
        var name = data.results[i].name.first + ' ' +data.results[i].name.last;
        var flag = data.results[i].nat;
        var flaglower = flag.toLowerCase();
        var gender = data.results[i].gender;
        var photo = data.results[i].picture.thumbnail;
        $("#users").append('<div class="col-lg-2 col-md-2 col-sm-6 text-center">'+
          '<br> <img class="rounded" src="'+photo+'" alt="'+name+' picture"> '+
          '<p>'+name+'</p>'+
          '<span class="flag-icon flag-icon-'+flaglower+'"></span>'+
          '<br>'+
          '<div class= "'+gender+'"> <i class="fab fa-github"></i> '+
          '<i class="fab fa-facebook-square"></i>  '+
          '<i class="fab fa-twitter-square"></i> </div>'+
        '</div>');


         }
        }
    });


    });