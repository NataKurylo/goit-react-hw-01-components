import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return < FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
                })
            }
        </ul>
    )}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired
}