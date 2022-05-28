/* eslint-disable no-debugger */
// hooks
import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  return (
    <Avatar
      src={user?.imageUrl}
      alt={user?.userName}
      color={user?.imageUrl ? 'default' : createAvatar(user?.userName).color}
      {...other}
    >
      {createAvatar(user?.userName).name}
    </Avatar>
  );
}
