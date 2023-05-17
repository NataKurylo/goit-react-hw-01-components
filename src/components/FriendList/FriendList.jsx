import { FriendListItem } from 'components/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
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
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}