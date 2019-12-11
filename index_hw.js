const mongoose = require('mongoose');

// Check if some npm is missing, on class ???///

mongoose.connect('mongodb+srv://dev:DEV123!@cluster0-3tbei.mongodb.net/sportists?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        // console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

    const Basketball_player = mongoose.model(
        'basketball_player',
        new mongoose.Schema(
            {
              first_name : String, 
                last_name: String, 
                   gender: String,
               birth_date: Date,
               telephone : String, 
                   email : String, 
                password : String, 
                location : {
                  street : String, 
                  number : String, 
                   suite : String, 
                    city : String, 
                 country : String, 
                     zip : String, 
                     gps : {
                     lon : Number, 
                     lat : Number
                    }
                },
                     club: {
                  club_id: String,
                     name: String,
                     city: String,
                  country: String,
                    arena: String,
                  founded: String,
                   league: String,
                   titles: Boolean,
         number_of_titles: String
                },
          club_engagement: {
                player_id: String,
                     date: Date,
            player_number: String,
                 position: String,
                },
                   status: String,
                 transfer: {
                transfers: Boolean,
      number_of_transfers: String,
                    clubs: [String]
                },    
                 _created: Date,
                _modified: Date
         })
       );

       //instance//
       var bpOne = new Basketball_player(
        {
          first_name : "Mitko", 
            last_name: "Mitkov", 
               gender: "male",
           birth_date: new Date("1991-08-29T08:30:00Z"),
           telephone : "+38970123654", 
               email : "mitko@mitkov.mk", 
            password : "Mitko.91", 
            location : {
              street : "Narodni Heroi", 
              number : "12", 
               suite : "20", 
                city : "Gevgelija", 
             country : "Makedonija", 
                 zip : "1480", 
                 gps : {
                 lon : 15.6, 
                 lat : 15.1
                }
            },
                 club: {
              club_id: "00A23bc45#80",
                 name: "KK Vardar",
                 city: "Skopje",
              country: "North Macedonia",
                arena: "SRC Kale",
              founded: "1947",
               league: "Macedonian First League",
               titles: true,
     number_of_titles: "6"
            },
      club_engagement: {
            player_id: "AA22ABC",
                 date: new Date("2016-06-20"),
        player_number: "30",
             position: "Center",
            },
               status: "Active",
             transfer: {
             transfers: false,
  number_of_transfers: "0",
                clubs: ["/"]
            },    
             _created: new Date(),
            _modified: new Date()
     }
   ); 

   var bpTwo = new Basketball_player(
    {
      first_name : "Dima", 
        last_name: "Dimev", 
           gender: "male",
       birth_date: new Date("1989-05-21T11:30:00Z"),
       telephone : "+38970323651", 
           email : "dima@dima.mk", 
        password : "DimaDimev.89", 
        location : {
          street : "Nikola Trimpare", 
          number : "18", 
           suite : "12", 
            city : "Skopje", 
         country : "Makedonija", 
             zip : "1000", 
             gps : {
             lon : 12.4, 
             lat : 12.2
            }
        },
             club: {
          club_id: "00A23bc45#80",
             name: "KK Vardar",
             city: "Skopje",
          country: "North Macedonia",
            arena: "SRC Kale",
          founded: "1947",
           league: "Macedonian First League",
           titles: true,
 number_of_titles: "6"
        },
  club_engagement: {
        player_id: "AA18ABD",
             date: new Date("2014-03-02"),
    player_number: "12",
         position: "Power Forward",
        },
           status: "Active",
         transfer: {
         transfers: true,
number_of_transfers: "1",
            clubs: ["KK MZT Skopje"]
        },    
         _created: new Date(),
        _modified: new Date()
 }
); 

var bpThree = new Basketball_player(
  {
    first_name : "Vele", 
      last_name: "Vojcevski", 
         gender: "male",
     birth_date: new Date("1987-06-16T10:30:00Z"),
     telephone : "+38970243554", 
         email : "vele@vojc.mk", 
      password : "VeleVojc.87", 
      location : {
        street : "Nikola Tesla", 
        number : "2a", 
         suite : "08", 
          city : "Kumanovo", 
       country : "Makedonija", 
           zip : "1300", 
           gps : {
           lon : 17.2, 
           lat : 17.5
          }
      },
           club: {
        club_id: "01A13bv25#10",
           name: "KK Kumanovo",
           city: "Kumanovo",
        country: "North Macedonia",
          arena: "Sports Hall Kumanovo",
        founded: "1946",
         league: "Macedonian First League",
         titles: false,
number_of_titles: "0"
      },
club_engagement: {
      player_id: "AB12ABE",
           date: new Date("2015-05-16"),
  player_number: "12",
       position: "Center",
      },
         status: "Active",
       transfer: {
       transfers: true,
number_of_transfers: "2",
          clubs: ["KK MZT Skopje", "KK Vardar Skopje"]
      },    
       _created: new Date(),
      _modified: new Date()
}
);


var bpFour = new Basketball_player(
  {
    first_name : "Marko", 
      last_name: "Kralev", 
         gender: "male",
     birth_date: new Date("1986-04-26T09:30:00Z"),
     telephone : "+38971223474", 
         email : "marko@kralev.mk", 
      password : "MarkoK.86", 
      location : {
        street : "Bahar Mois", 
        number : "4B", 
         suite : "13", 
          city : "Gostivar", 
       country : "Makedonija", 
           zip : "1230", 
           gps : {
           lon : 17.2, 
           lat : 17.5
          }
      },
           club: {
        club_id: "04A23bh25#11",
           name: "KK Gostivar",
           city: "Gostivar",
        country: "North Macedonia",
          arena: "Mladost Gostivar",
        founded: "1954",
         league: "Macedonian First League",
         titles: true,
number_of_titles: "8"
      },
club_engagement: {
      player_id: "AK30ALE",
           date: new Date("2017-05-16"),
  player_number: "27",
       position: "Small Forward",
      },
         status: "Injured",
       transfer: {
       transfers: true,
number_of_transfers: "2",
          clubs: ["KK Vardar Skopje", "KK Partizan Belgrade"]
      },    
       _created: new Date(),
      _modified: new Date()
}
);

var bpFive = new Basketball_player(
  {
    first_name : "Cvetan", 
      last_name: "Cvelevski", 
         gender: "male",
     birth_date: new Date("1992-07-19T06:30:00Z"),
     telephone : "+38970333435", 
         email : "cvele@cvele.mk", 
      password : "CveleCvet.92", 
      location : {
        street : "Mirka Ginova", 
        number : "2A", 
         suite : "23", 
          city : "Skopje", 
       country : "Makedonija", 
           zip : "1000", 
           gps : {
           lon : 12.8, 
           lat : 12.9
          }
      },
           club: {
        club_id: "04A23bh25#11",
           name: "KK Rabotnicki",
           city: "Skopje",
        country: "North Macedonia",
          arena: "City Park",
        founded: "1946",
         league: "Macedonian First League",
         titles: true,
number_of_titles: "42"
      },
club_engagement: {
      player_id: "AK30ALE",
           date: new Date("2017-05-16"),
  player_number: "50",
       position: "Shooting Guard",
      },
         status: "Active",
       transfer: {
       transfers: true,
number_of_transfers: "3",
          clubs: [" KK Kumanovo Kumanovo", " KK MZT Skopje", " KK Vardar Skopje"]
      },    
       _created: new Date(),
      _modified: new Date()
}
);

  


// var bps = [bpOne, bpTwo, bpThree, bpFour, bpFive]

// bps.forEach((g, i) => {
//     g.save(err => {
//         if(err){
//             console.log('could not save sport players')
//         }
//         console.log('players saved successfully')
//     });
// });


    // bpFive.save(err=> {
    //     if(err){
    //         console.log('could not save sport player');
    //         return;
    //     }
    //     console.log('save successful')
    // })

    
    // //  1parameter query!,  second calback
// Basketball_player.find({ /*"location.city": "Skopje",*/ "club.name":"KK Vardar"}, (err, data)=>{
//      if(err){
//          console.log('could not read data');
//          return;
//      }
//      console.log(data);
//      data.forEach((pl, i)=>{
//          console.log("Name: "+pl.first_name,' ', "City of Origin: " +pl.location.city,'',"Transfer Clubs: "+pl.transfer.clubs,' ',
//         "Current Club and City: "+ pl.club.name, pl.club.city,',', "Player Position: "+pl.club_engagement.position);
//      })
//     });

    // Basketball_player.find({ "location.city": "Skopje", "club.city":"Skopje"}, (err, data)=>{
    //   if(err){
    //       console.log('could not read data');
    //       return;
    //   }
    //   console.log(data);
    //   data.forEach((pl, i)=>{
    //       console.log("First Name: " + pl.first_name,',', " Transfer Clubs: " + pl.transfer.clubs,',',
    //       "Player Position: " + pl.club_engagement.position,',', "Player Status: " + pl.status);
    //   })
    //  });

    

    // Basketball_player.find({ "location.city": "Skopje"}, (err, data)=>{
    //   if(err){
    //       console.log('could not read data');
    //       return;
    //   }
    //   console.log(data);
    //   data.forEach((pl, i)=>{
    //       console.log("First Name: " + pl.first_name, ' ', "Club: " + pl.club.name, ' ',
    //       " Number of Club Titles: " +  pl.club.number_of_titles);
    //   })
    //  });

    // Basketball_player.find({ "last_name": "Cvelevski"}, (err, data)=>{
    //   if(err){
    //       console.log('could not read data');
    //       return;
    //   }
    //   // console.log(data);
    //   data.forEach((pl, i)=>{
    //       console.log("Name: " + pl.first_name, ' ', " Club: " + pl.club.name, ' ',
    //        "Club Transfers: " + pl.transfer.clubs.slice(0,2));
    //   })
    //  });

    // Basketball_player.find({ "last_name": "Cvelevski"}, (err, data)=>{
    //   if(err){
    //       console.log('could not read data');
    //       return;
    //   }
    //   // console.log(data);
    //   data.forEach((pl, i)=>{
    //       console.log("Name: " + pl.first_name, ' ', " Club: " + pl.club.name, ' ',
    //        "Club Transfers: " + pl.transfer.clubs[0], pl.transfer.clubs[2]);
    //   })
    //  });

    //  Basketball_player.find({ "last_name": "Cvelevski"}, (err, data)=>{
    //   if(err){
    //       console.log('could not read data');
    //       return;
    //   }
    //   // console.log(data);
    //   data.forEach((pl, i)=>{
    //       console.log("Name: " + pl.first_name, ',', " Club: " + pl.club.name,',',
    //        "Club Transfers: " + pl.transfer.clubs.length, "Number of tarnsfers"
    //        +pl.transfer.number_of_transfers);
    //   })
    //  });

    // Basketball_player.find({ "transfer.transfers": "true"}, (err, data)=>{
    //   if(err){
    //       console.log('could not read data');
    //       return;
    //   }
    //   // console.log(data);
    //   data.forEach((pl, i)=>{
    //       console.log("Name: " + pl.first_name, ' ', " Club: " + pl.club.name, ' ',
    //        "Club Transfers: " + pl.transfer.clubs);
    //   })
    //  });

    Basketball_player.find({ "club.titles": "true", "club.city": "Skopje"}, (err, data)=>{
      if(err){
          console.log('could not read data');
          return;
      }
      // console.log(data);
      data.forEach((pl, i)=>{
          console.log("Club Name: " + pl.club.name, ',', "Number of Titles: " + pl.club.number_of_titles,
          ',',"League: " + pl.club.league);
      })
     });