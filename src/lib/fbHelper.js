import firebase from '../../firebase';

export async function addDataToDB(body, collection) {
    /*
        body: JSON - body of POST request
        collection: string - name of collection to add to
    */
    const ref = await firebase.firestore().collection(collection);
    await ref.doc(body.name).set(body);
}
  
export async function getAllDataFromDB(collection) {
    /*
        collection: string - name of collection to get data from
    */
    const refSnap = await firebase.firestore().collection(collection).get();
    var allData =  [];
    for(var doc of refSnap.docs) {
        allData.push(doc.data());
    }
    
    var dataAsJSON = {}
    dataAsJSON[collection] = allData
    return dataAsJSON;
}

export async function getLongestRiderFromDB(collection, unicorn) {
    const refSnap = await firebase.firestore().collection(collection).get();
    var allData =  [];
    for(var doc of refSnap.docs) {
        const docData = doc.data();
        if(docData.unicorn == unicorn) {
            allData.push(docData);
        }
    }

    allData.sort(function(u1,u2) {
        if(u1.duration == u2.duration) {
            return u1.user < u2.user
        }
        return u1.duration > u2.duration
    });

    if(allData.length > 0) {
        return {"user": allData[0].user};
    }
    else {
        return {};
    }
    
}