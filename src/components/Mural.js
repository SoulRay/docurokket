import React from 'react';

export const Mural = () => {
    return (
        <iframe src="https://app.mural.co/embed/ea3f9eda-6d51-4deb-89eb-f40294553ae3"
        width="100%"
        height="100vh"
        style={{"minWidth": "640px", "minHeight": "480px", "backgroundColor": "#F4F4F4", "border": "1px solid #EFEFEF"}} 
        sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox">
        </iframe>
    )
}