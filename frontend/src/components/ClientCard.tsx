import React from "react";

interface IClientCard {
    fullName: string;
    visaTypes: string[];
    company: string;
    lastActive: number;
}

const ClientCard = ({ fullName, company, visaTypes, lastActive }: IClientCard) => {
    return (
      <div className="border p-4 mb-3 rounded-lg shadow-md">
            <div className=" flex justify-between w-3/4 items-center">
                <div>
                    <h2 className="text-xl font-bold">{fullName}</h2>
                    <p className="text-sm pt-1">{company}</p>
                </div>
                <div className="flex flex-wrap mt-2">
                {visaTypes.map((visa, index) => (
                    <span key={index} className="bg-blue-100 px-2 py-1 mr-1 mb-2 font-bold rounded">
                    {visa}
                    </span>
                ))}
                </div>
                <p>{lastActive} days ago</p>
            </div>
      </div>
    );
  };
  
  export default ClientCard;