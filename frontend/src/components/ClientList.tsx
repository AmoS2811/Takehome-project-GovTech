import React, { useState } from "react";
import ClientCard from "./ClientCard";

interface IClient {
    fullName: string;
    company: string;
    visaTypes: string[];
    lastActive: number;
}

const clientData: IClient[] = [
    { 
      fullName: 'Emma Roberts', 
      company: 'ABC Company', 
      visaTypes: ['L-1A', 'O-1A', 'EB-1A'], 
      lastActive: 6
    },
    { 
        fullName: 'Fabian Ramirez', 
        company: 'Sunset Industries', 
        visaTypes: ['H-1B'], 
        lastActive: 2 
      },
      { 
        fullName: 'Ted Mosbey', 
        company: 'Green Architecture', 
        visaTypes: ['I-765', 'O-1A'], 
        lastActive: 35
      },
      { 
        fullName: 'Kira  Mishra', 
        company: 'Fabrics Inc.', 
        visaTypes: ['E-3 Transfer'], 
        lastActive: 89
      },
];

const ClientList = () => {
    const [clients, setClients] = useState<IClient[]>(clientData);
    const [currentSortField, setCurrentSortField] = useState<string>('');
    const [currentSortOrder, setCurrentSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = (field: keyof IClient) => {
        const newSortOrder = currentSortField === field && currentSortOrder === 'asc' ? 'desc' : 'asc';
    
        if (currentSortField !== field || currentSortOrder !== newSortOrder) {
            setCurrentSortField(field);
            setCurrentSortOrder(newSortOrder);
    
            const sortedClients = sortClientsByField([...clients], field, newSortOrder);
            setClients(sortedClients);
        }
    };
    
    const sortClientsByField = (clients: IClient[], field: keyof IClient, order: 'asc' | 'desc') => {
        return clients.sort((a, b) => {
            if (field === 'lastActive') {
                return order === 'asc' ? a.lastActive - b.lastActive : b.lastActive - a.lastActive;
            } else if (field === 'visaTypes') {
                return order === 'asc' 
                    ? a.visaTypes[0].localeCompare(b.visaTypes[0]) 
                    : b.visaTypes[0].localeCompare(a.visaTypes[0]);
            } else {
                return order === 'asc' 
                    ? a[field].localeCompare(b[field]) 
                    : b[field].localeCompare(a[field]);
            }
        });
    };


    return (
        <div className="max-w-6xl mx-auto p-4 mt-16">
            <div className="flex mb-1">
                <div className="flex-1">
                    <button className="font-bold hover:text-blue-400 text-left w-full" onClick={() => handleSort('fullName')}>
                        CLIENT {currentSortField === 'fullName' && (currentSortOrder === 'asc' ? '▲' : '▼')}
                    </button>
                </div>
                <div className="flex-1">
                    <button className="font-bold hover:text-blue-400 text-left w-full" onClick={() => handleSort('visaTypes')}>
                        VISA TYPE {currentSortField === 'visaTypes' && (currentSortOrder === 'asc' ? '▲' : '▼')}
                    </button>
                </div>
                <div className="flex-1">
                    <button className="font-bold hover:text-blue-400 text-left w-full" onClick={() => handleSort('lastActive')}>
                        LAST ACTIVE {currentSortField === 'lastActive' && (currentSortOrder === 'asc' ? '▲' : '▼')}
                    </button>
                </div>
            </div>

            <div className="bg-white shadow rounded-md">
                {clients.map((client, index) => (
                    <ClientCard 
                        key={index}
                        fullName={client.fullName}
                        company={client.company}
                        visaTypes={client.visaTypes}
                        lastActive={client.lastActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientList;