if (Meteor.isServer) {
	Meteor.startup(function () {
		if(Images.find().count() == 0) {
			for (var i = 1; i<6; i++) {
				Images.insert (
					{
					img_src: "img_" + i + ".jpg",
    				img_alt: "image number " + i
					}
				);
			} //end of for insert images
			
		} //end of if have no images	

		//count the images in database
		console.log("startup.js says: " + Images.find().count() +" images in database"); 
	});
}