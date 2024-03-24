import FriendListItem from './FriendListItem.jsx';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem {...friend} />
                </li>
            ))}
        </ul>
    )

};

export default FriendList;