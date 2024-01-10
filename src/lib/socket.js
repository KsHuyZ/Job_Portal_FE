import {io} from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_KEY);

socket.on('connect', () => {
  console.log("socket connect: ",socket.id);
});
socket.on('disconnect', () => {
  console.log('Socket is disconnect'); // undefined
});
export default socket;
