import React from 'react'

function TeamsPage() {
    const developerName = 'Spencer Good'
    const pastorName = 'Jeff Good'
    const paster2Name = 'Mike Crosser'
    return (
        <div id="team_page">
            <h1>Meet the Pastors</h1>
            <br/>
                <h2>Senior Paster: {pastorName}</h2>
                    <div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>  
                <br/>
               <h2> Pastor: {paster2Name} </h2>
                    <div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>   
        </div>
    )
}

export default TeamsPage