//all the middleware goes here
var middlewareObj = {};
var Campground  = require("../models/campground");
var Comment     = require("../models/comment");

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if (err || !foundCampground){
                req.flash("error", "Campground Not Found");
                res.redirect("back");
            }else{
                //does user own the campground?
                if(foundCampground.author.id.equals(req.user.id)){
                    next();
                }else{
                    //otherwise redirect
                    req.flash("error", "You Don't have permission to do that!");
                    res.redirect("back");
                }
            }
        });
    }else{
        //if not, redirect
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if (err || !foundComment){
                req.flash("error", "Comment Not Found");
                res.redirect("back");
            }else{
                //does user own the comment?
                if(foundComment.author.id.equals(req.user.id)){
                    next();
                }else{
                    //otherwise redirect
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    }else{
        //if not, redirect
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
            return next();
    }else{
            req.flash("error", "You Need to be logged In to do that!");
            return res.redirect("/login");
        }
    };

module.exports = middlewareObj;