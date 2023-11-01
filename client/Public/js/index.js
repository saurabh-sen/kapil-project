const GetSports = () => {
  fetch("http://localhost:3000/sports")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      // Create the main div element

      var sport_imgs = document.getElementsByClassName("sport_img");
      
      var i = 0,j=0;
      for (i = 0; i < 12; i++)
       {
        sport_imgs[i].src=data[j].image_url;
        j++;
        if(j==6)
        j=0;
       }
      var sport_pubDate=document.getElementsByClassName("sport_pubDate");
      // console.log(sport_pubDate);
      i=0;
      j=0;
      for (i = 0; i < 12; i++)
       {
        sport_pubDate[i].textContent=data[j].pubDate;
        j++;
        if(j==6)
        j=0;
       }
       var sport_title=document.getElementsByClassName("sport_title");
      //  console.log(sport_title);
       i=0;
       j=0;
       for (i = 0; i < 12; i++)
        {
          sport_title[i].href="newsPage/sport_"+data[j]._id;
         sport_title[i].textContent=data[j].title;
         j++;
         if(j==6)
         j=0;
        }


    
    })
    .catch((err) => console.error("Error: ", err));
};
GetSports();



const GetTechnology = () => {
  fetch("http://localhost:3000/technology")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      // Create the main div element

      var tech_imgs = document.getElementsByClassName("tech_img");
      
      var i = 0,j=0;
      for (i = 0; i < 12; i++)
       {
        tech_imgs[i].src=data[j].image_url;
        j++;
        if(j==6)
        j=0;
       }
      var tech_pubDate=document.getElementsByClassName("tech_pubDate");
      // console.log(sport_pubDate);
      i=0;
      j=0;
      for (i = 0; i < 12; i++)
       {
        tech_pubDate[i].textContent=data[j].pubDate;
        j++;
        if(j==6)
        j=0;
       }
       var tech_title=document.getElementsByClassName("tech_title");
      //  console.log(sport_title);
       i=0;
       j=0;
       for (i = 0; i < 12; i++)
        {
          tech_title[i].href="newsPage/tech_"+data[j]._id;
         tech_title[i].textContent=data[j].title;
         j++;
         if(j==6)
         j=0;
        }


    
    })
    .catch((err) => console.error("Error: ", err));
};
GetTechnology();
