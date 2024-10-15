import React from 'react';

const ArchivesPage: React.FC = () => {
    return (
        <div>
            
            <h1>Archives: Minutes of Meetings</h1>
            <p>
                Here, you can access the minutes of meetings from previous years.
            </p>

            <br></br>
            <h3>Minutes of Meetings</h3>
            <p>
                The minutes of meetings are stored in a Google Drive folder. You can view and download the documents from the link below:
            </p>
            
            <ul>
                <i><u><b><li><a href="https://drive.google.com/drive/folders/1XVvCzpiF2Xwf7KiwcFFjMP4y42AQypxf" target="_blank" rel="noopener noreferrer">Minutes of Meetings of Previous Years</a></li></b></u></i>
            </ul>

        </div>
    );
};

export default ArchivesPage;
