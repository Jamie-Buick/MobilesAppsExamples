interface Hotel {
    checkAvailability(rooms : number, occupied : number) : Boolean;
}

class Booking implements Hotel{

    checkAvailability(rooms: number, occupied: number): Boolean {
        if (rooms > occupied) {
            return true;
        }
        return false;
    }
}

let roomCheck = new Booking();
let isAvailability = roomCheck.checkAvailability(30,40);

if (isAvailability) {
    console.log("Rooms Availabile");
}
else{
    console.log("No Rooms Availabile");
}

