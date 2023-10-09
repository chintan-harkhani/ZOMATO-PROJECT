const  {Review} = require("../models");

//create user Review
const CreateReview = async (reqBody)=>{
       return Review.create(reqBody)
};
//user Review list
const ReviewList  =async (req ,res) =>{
       return Review.find()
};
// user Review id
const ReviewId = async ( reviewId)=>{
     return Review.findById(reviewId)
};
//upadte user Review
const UpdateReview = async (reviewId , updateBody)=>{
    return Review.findByIdAndUpdate(reviewId ,{ $set  : updateBody})
};
//delete user Review
const DeleteReview =async (reviewId) =>{
     return Review.findByIdAndDelete (reviewId)
};
//find user Review message
const FindRestorant =async (restorant) =>{
      return Review.findOne({restorant});
}
//module export
module.exports ={
    CreateReview,
    ReviewList,
    ReviewId,
    DeleteReview,
    UpdateReview,
     FindRestorant
}