import React, { Component } from 'react';

class LogoutButton extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onClick(e){
        e.preventDefault();
        this.props.logout().then(()=>{
            this.context.router.history.push("/login");
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)} className="btn btn-default">LogOut</button>
            </div>
        );
    }
}

export default LogoutButton;