function myFunction() {
    var myMusic = {
    001: {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: {
    1: "CD",
    2: "8T",
    3: "LP"
    },
    gold: true
    },
    002: {
    artist: "Madonna",
    title: "Like a Virgin",
    release_year: 1984,
    formats: {
        1: "AD",
        2: "AM",
        3: "AF"
    }
    }
    };
    return myMusic;
    }
    myFunction()[2];
    module.exports = myFunction;
