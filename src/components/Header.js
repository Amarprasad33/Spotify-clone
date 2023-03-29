import '../styles/Header.css';
import Search from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className='header__left'>
              <Search />
              <input placeholder='Search for Artists, Songs or podcasts' type='text'/>   
            </div>

            <div className='header__right'>
                <Avatar src={user?.images[0].url} alt='RQ' />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}


export default Header;