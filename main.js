var images = ["papa.JPG","mama.JPG"];
var names = ["My father","My mother"]
var i = 0;

function update()
{
    i++ ;
    var number_of_members = 2 ;
    if (i> number_of_members)
    {
        i = 0 ;
    };
    var updated_images = images(i);
    var updated_names = names(i);
    document.getElementById("img_family").src = updated_images;
    document.getElementById("name_family").src = updated_names;
}