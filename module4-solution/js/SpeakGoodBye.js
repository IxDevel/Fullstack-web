(function (window) {
    var speakWord = "Good Bye";
    // This make it global (Not use var, let...) and is the same than window.byeSpeaker = byeSpeaker
    byeSpeaker = {};
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);
