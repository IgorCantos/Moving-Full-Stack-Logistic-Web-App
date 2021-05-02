import React from 'react';
import propTypes from 'prop-types';
import { ProfileWrapper, UserImg } from './styles';
import profileImg from '../../../../assets/imgs/profile-img.png';

UserProfile.propTypes = {
    profileImg: propTypes.node
}

function UserProfile() {
    return (
        <ProfileWrapper>
        <UserImg src={profileImg} alt="Olá, Igor." title="Olá, Igor." />
        <p><strong>Olá, Igor.</strong></p>
    </ProfileWrapper>
    )
}

export default UserProfile;