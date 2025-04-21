import { useState } from 'react';
import { ModeratorChat } from '../components/Moderator/ModeratorChat';

export const ModeratorPanel = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    return (
        <div>
            <h1>Панель модератора</h1>
            <div>
                <ModeratorChat 
                    selectedUserId={selectedUserId}
                    setSelectedUserId={setSelectedUserId}
                />
            </div>
        </div>
    );
};