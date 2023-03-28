import React from 'react';
import '../styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from '../StateProvider';

function Sidebar() {
    const [{playlists}, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='' /> 
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        
            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.name} title={playlist.name} />
            ))}

            <SidebarOption title="Hip hop" />
            <SidebarOption title="Rock" />
            <SidebarOption title="RnB" />

        </div>
    );
}

export default Sidebar;