import PropTypes from 'prop-types';
import css from './Friends.module.css';
import FriendListItem from './FriendlistItem/FriendListItem';



const Friends = ({friends}) => {
    return (
    <ul className={css.friendList}>
        {friends.map(friends => {
            return (
                    <FriendListItem
                      key={friends.id}
                      avatar={friends.avatar}
                      name={friends.name}
                      isOnline={friends.isOnline}
                    />
            )}
        )}
    </ul>
    )
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}


export default Friends;