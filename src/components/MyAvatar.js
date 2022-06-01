/* eslint-disable no-debugger */
// hooks
import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';
import { BASE_API } from '../config';
// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  
//  const BASE_API = "https://localhost:5001/" || '';
  return (
    <Avatar
      src= {BASE_API + user?.imageUrl} // ToDoLater enhance
      alt={user?.userName}
      color={user?.imageUrl ? 'default' : createAvatar(user?.userName).color}
      {...other}
    >
      {createAvatar(user?.userName).name}
    </Avatar>
  );
}
