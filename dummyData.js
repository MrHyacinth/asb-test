exports.insertHandler = (collection, docs) => {
    console.log('you called');
    console.log(collection);
    console.log(docs);

    let res = [];

    collection.countDocuments({}, (err, count) => {
        if (err) console.log(err.message);
        if(count === 0){
            data.forEach((item) => {
                let newDoc = new collection(item);
                let result = newDoc.save();
                res.push(result);
            });
        }  
    })

    return res;
};



