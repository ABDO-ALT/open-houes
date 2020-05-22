// let a = parseFloat(roomId);
// console.log(typeof parseFloat(roomId));
// console.log(a);
// console.log(typeof rooms[0].id);
// console.log(typeof roomId);
// rooms.forEach((rooms) => {
// console.log(rooms.id == roomId)
//  let a =  rooms.toString();
//    console.log(typeof a)
//    console.log(a)

//   console.log(rooms.id === a ? console.log(rooms) : false);

//  if(rooms.id == roomId){
//     console.log(rooms.id,rooms.city)
//  }
// });

// write a function
// called "getRoomInfo"

// it should have two parameters: "roomId", "rooms"
// and it should return the room info: { id: 3, city: 'baz'}
// of the roomId given.
// console.log("typeof", typeof roomId);
//       console.log("roomid", roomId);
//       console.log("rooms id", room.id);
//  console.log("false or true");

// this.state = this.state.b ind(this);
// console.log the params route props!!
// lookup react router
//
// GOAL id -> room object { id: 47, start_date: djlk, end_date...}
//
// OPTIONS:
//
// 1.  you make another GET request to server
//     to get info about this room (47)
//
// [x] you store the rooms in state of App
//     and you get them here

// app -> state.rooms ([{id: 47, ...}, {id: 49, ...}, { id:51, ...}])
//
// here you will update one room in DB (with PUT request)

// let roomId = 4;
// let rooms = [
//   { id: 2, city: "foo" },
//   { id: 5, city: "bar" },
//   { id: 3, city: "baz" },
//   { id: 4, city: "qux" },
// ];

// for in (is old, only used for iterating over objects) <-- Don't use!
// for of (is new! Used for iterating over anything (like arrays/sets/etc.))
// for... (is old, used for iterating numbers (when you WANT the number `i`))

// let response;

// if (something) {
//   response = 'hello'
// } else {
//   response = 'goodbye'
// }

// const response = something ? 'hello' : 'goodbye'

//function getRoom(rooms, roomId) {
// WITH `find`:
// return rooms.find(room => room.id === roomId)

// WITH for... of:
// for (const room of rooms) {
//   if (room.id === roomId) {
//     return room
//   }
// }

// WITH for loop:
// for (let i = 0; i < rooms.length; i++) {
//   const room = rooms[i]
//   if (room.id === roomId) {
//     return room
//   }
// }

// WITH forEach
//   let foundRoom = {};

//   rooms.forEach((room) => {

//     // foundRoom = room.id === roomId ? room : foundRoom;
//     if (room.id === roomId) {
//       foundRoom = room;
//     }
//   });

//   return foundRoom

//   //console.log(roo);
//   // if (rooms === roomId) {
//   // roomId = rooms.find((element) => (element = true));
//   //   console.log(roomId);

//   // }
// }

// console.log('with 4: ', getRoom(rooms, 4))
// console.log('with 3: ', getRoom(rooms, 3))
// console.log('with 900', getRoom(rooms, 900))
// console.log(foundRoom);
//   console.log(roomId);
//   console.log(rooms);

//   rooms.forEach((room) => {
//     if (roomId === room.id) {
//       console.log(room);
//     }
//   });

function sum(n) {
  //console.log(n);

  let d = 0;

  for (let i = 1; i <= n; i++) {
    console.log("i ", i);
    console.log("d ", d);
    d = i + d;
  }
  return d;
}
function sum(n) {
  //console.log(n);

  let d = 0;

  for (let i = 1; i <= n; i++) {
    console.log("i ", i);
    console.log("d ", d);
    d = i + d;
  }
  return d;
}

// write a test for this function!
console.log(sum(1), " should be 1");
console.log(sum(2), " should be 3");
console.log(sum(3), " should be 6");
console.log(sum(5), " should be 15");

// this is Type Casting
// Javascript "casts" your integer as a string.
// Javascript guesses that you wanted that!

// integer (whole number): -2, -1, 0, 1,2,3,4,5
// float (decimal number or 'real' number): -2.3435, 30.03490, 2.923

// if N = 1
// 0 + 1  (1)

// if N = 2
// 0 + 1 + 2  (3)

// if N = 3
// 0 + 1 + 2 + 3   (6)

// if N = 4
// 1 + 2 + 3 + 4  (10)

// if N = 5
// 1 + 2 + 3 + 4 + 5 (15)

// if N = 6
// 1 + 2 + 3 + 4 + 5 + 6  (21)
