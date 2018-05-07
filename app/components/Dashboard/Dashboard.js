import React, { Component } from 'react';
import Loading from '@/components/Loading';

class Dashboard extends Component {
    componentWillMount(){
        this.props.fetchDashboard();
    }
    renderDashboard(news, key){
        return (
            <div key={key}>
                {news.headline} - {news.story}
            </div>
        )
    }
    render() {
        const { loading, error, dashboard } = this.props.dashboard;
        
        if(loading){
            return (<Loading />)
        } else if(error){
            return (
                <p>{error}</p>
            )
        } else if(dashboard && dashboard.news && dashboard.news.length){
            return (
                <div>
                    {dashboard.news.map(this.renderDashboard.bind(this))}
                </div>
            );
        } else {
            return (<p>Test</p>);
        }
        
    }
}

export default Dashboard;