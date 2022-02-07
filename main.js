var images = ["https://static.tvtropes.org/pmwiki/pub/images/eddsworld_main.PNG","https://static.wikia.nocookie.net/character-stats-and-profiles/images/b/bf/Tord.png", "https://static.wikia.nocookie.net/eddsworld/images/6/6d/EddHoodie.png" , "https://static.wikia.nocookie.net/eddsworld/images/0/0c/TomHoodie.png", "https://static.wikia.nocookie.net/eddsworld/images/8/88/JonMain.png", "https://static.wikia.nocookie.net/eddsworld/images/a/a2/DirectorMain.png"];
var names = ["Fmaily Book","Tord Larsson", "Edd Gould", " Tom Ridgewell", "Jon Lopez", "The Evil Director"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 1;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("Edd's_family_member_image").src = updatedImage;
    document.getElementById("Edd's_family_member_name").innerHTML = updatedName;
}
