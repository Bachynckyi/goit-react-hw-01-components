import PropTypes from 'prop-types';
import './Friends.css';



const Friends = ({friends}) => {
    return (
    <ul className="friend-list">
        {friends.map(friends => {
            return (
                <li className="item" key={friends.id}> 
                    <span className="status"style={{backgroundColor: friends.isOnline ? 'green' : 'red'}}></span>
                    <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
                    <p className="name">{friends.name}</p>
                </li>
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