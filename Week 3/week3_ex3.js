var Booking = /** @class */ (function () {
    function Booking() {
    }
    Booking.prototype.checkAvailability = function (rooms, occupied) {
        if (rooms > occupied) {
            return true;
        }
        return false;
    };
    return Booking;
}());
var roomCheck = new Booking();
var isAvailability = roomCheck.checkAvailability(30, 40);
if (isAvailability) {
    console.log("Rooms Availabile");
}
else {
    console.log("No Rooms Availabile");
}
