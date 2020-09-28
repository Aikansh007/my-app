import React from 'react'

class MessageView extends React.Component
{
    render()
    {
        return(
            <p>"Inside  Child Component"  <b>{this.props.message}</b></p>
        )
    }
}

export default MessageView;