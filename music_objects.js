

var collection = {
    "2548": {
        "album": "Pretty Hate Machine",
        "artist": "Nine Inch Nails",
        "tracks": [
            "Head Like A Hole",
            "Terrible Lie"
        ]
    },
    "2468": {
        "album": "Dilate",
        "artist": "Ani DiFranco",
        "tracks": [
            "Napolean",
            "Dilate"
        ]
    },
    "1245": {
        "artist": "Purity Ring",
        "tracks": [ ]
    },
    "5439": {
        "album": "Mezzanine"
    }
};
// Keep a copy of the collection for testing
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value !== "") {
        if (prop !== "tracks") {
            collection[id][prop] = value;
        } else {
            if (collection[id][prop]) {
                collection[id][prop].push(value);
            } else {
                collection[id][prop] = [];
                collection[id][prop].push(value);
            }
        }
    } else {
        delete collection[id][prop];
    }
    return collection;
}
// Test
updateRecords(5439, "artist", "Massive Attack");