import React, { useState } from "react";
import ClientCard from "./ClientCard";

interface IClient {
    fullName: string;
    company: string;
    visaTypes: string[];
    lastActive: string;
}

const clientData: IClient[] = [
    { 
      fullName: 'Emma Roberts', 
      company: 'ABC Company', 
      visaTypes: ['L-1A', 'O-1A', 'EB-1A'], 
      lastActive: '6 days ago' 
    },
    { 
        fullName: 'Fabian Ramirez', 
        company: 'Sunset Industries', 
        visaTypes: ['H-1B'], 
        lastActive: '2 days ago' 
      },
      { 
        fullName: 'Ted Mosbey', 
        company: 'Green Architecture', 
        visaTypes: ['I-765', 'O-1A'], 
        lastActive: '35 days ago'
      },
      { 
        fullName: 'Kira  Mishra', 
        company: 'Fabrics Inc.', 
        visaTypes: ['E-3 Transfer'], 
        lastActive: '89 days ago'
      },
];

const ClientList = () => {
    const [clients, setClients] = useState<IClient[]>(clientData);

    return (
        <div className="max-w-6xl mx-auto p-4 mt-16">
        <div className="flex justify-between mb-1 w-3/4">
            <button className="font-bold hover:text-blue-400">
                CLIENT ▼
            </button>
            <button className="font-bold hover:text-blue-400">
                VISA TYPE ▼
            </button>
            <button className="font-bold hover:text-blue-400">
                LAST ACTIVE ▼
            </button>
        </div>

        <div className="bg-white shadow overflow-hidden">
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

