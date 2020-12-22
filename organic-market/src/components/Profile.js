import React, { Component } from 'react'

class Profile extends Component {
    state = {
        profile: {
            id: 1,
            "name": "Isuru",
            "email": "isuru@orga.lk"
        }
    }

    render() {
        return (
            <div className="container">
                <h4>Profile</h4>
            </div>
        )
    }
}


export default Profile;