var log = function (message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toISOString();
    console.log(time, message, userId);
};
log("Renuka");
//calling function parameter itself in main funtion times
function times(f, n) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}
times(function (n) { return console.log(n); }, 4);
//function reserve implementation based on above function signature
var reserve = function (from, toOrDestination, destination) {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // Book a one-way trip
    }
    else if (typeof toOrDestination === 'string') {
        // Book a round trip
    }
};
