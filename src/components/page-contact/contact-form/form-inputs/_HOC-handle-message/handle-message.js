import React from 'react';

// Passes current messages and functions to set them
const HandleMessage=(WrappedComponent)=>(
    class extends React.Component {
        state={
            loading: false,
            goodMessage: "",
            badMessage: ""
        }   
        setLoading = (loading)=>{
            this.setState({ loading });
        }
        setGoodMessage = (goodMessage) =>{
            this.setState({ 
                goodMessage,
                badMessage: ""
            });
        }
    
        setBadMessage = (badMessage)=>{
            this.setState({ 
                badMessage,
                goodMessage: ""
            });
        }

        clearMessages = ()=>{
            this.setState({
                badMessage: "",
                goodMessage: ""
            })
        }
        render(){
            return (
                <WrappedComponent 
                {...this.props}
                {...this.state}
                setLoading={this.setLoading}
                setBadMessage={this.setBadMessage}
                setGoodMessage={this.setGoodMessage}
                clearMessages={this.clearMessages}
                />
            )
        }
    }
)
    
export default HandleMessage;