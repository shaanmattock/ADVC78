var images = ["https://static.tvtropes.org/pmwiki/pub/images/eddsworld_main.PNG","https://static.wikia.nocookie.net/character-stats-and-profiles/images/b/bf/Tord.png/revision/latest/scale-to-width-down/500?cb=20200809140839", "https://static.wikia.nocookie.net/p__/images/6/68/Edd_%28Plantilla_The_End%29.png/revision/latest?cb=20210604151440&path-prefix=protagonist" , "https://static.wikia.nocookie.net/eddsworld/images/0/0c/TomHoodie.png/revision/latest?cb=20201221132344", "https://static.wikia.nocookie.net/eddsworld/images/8/88/JonMain.png/revision/latest?cb=20201220022145", "https://static.wikia.nocookie.net/eddsworld/images/a/a2/DirectorMain.png/revision/latest?cb=20201213043811"];
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
