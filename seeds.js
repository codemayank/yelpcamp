var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data  = [
        {
            name: "Black Forest",
            image : "https://handluggageonly.co.uk/wp-content/uploads/2015/01/Late-autumn-in-black-forest.jpg",
            description : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
        },
        {
            name: "white Forest",
            image : "http://hd.wallpaperswide.com/thumbs/white_forest-t2.jpg",
            description : "this another is a cool campsite that even has snow"
        },
        {
            name: "Just another Forest",
            image : "http://www.nationalgeographic.com/content/dam/environment/photos/000/003/300.ngsversion.1485547204622.adapt.1900.1.jpg",
            description : "A wonderful campsite just for you"
        }
    ];
    
function seedDB(){
    Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // console.log("Removed Campgrounds");
        
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             console.log("Added a campground");
        //             Comment.create({
        //                 text : "this is a really wonderful place",
        //                 author: "homer"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 }else{
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Created a new commnent");
        //                 }
        //             });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;