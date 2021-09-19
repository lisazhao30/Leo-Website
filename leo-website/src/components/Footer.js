import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="GitHub" icon={<GitHubIcon style={{fill: "#3b5998"}}/>} />
            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon style={{fill: "#3b5998"}}/>} />
        </BottomNavigation>
    )
}

export default Footer
