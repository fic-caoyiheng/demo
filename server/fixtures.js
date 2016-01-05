if (Posts.find().count()===0){
    Posts.insert({
        title: 'Introducing Telescope',
       // userId: tom._id,
       // author: tom.profile.name,
        url: 'http://sachagreif.com/introducing-tilescope/',
        submitted: new Date(),
        commentsCount: 0
    });

    for (var i = 0; i < 40; i++){
        Posts.insert({
            title: 'Test post #' + i,
         //   author: sacha.profile.name,
         //   userId: sacha._id,
            url: 'http://google.com/?q=test-' + i,
            submitted: new Date(),
            commentsCount: 0
        });

    }

}