import React from 'react';

const cardData = [
  {
    title: "Keep the latest and greatest intel at the fingertips of your sales reps.",
    text: "Updated Battlecards enable effective objection handling and an end to losing winnable deals."
  },
  {
    title: "Increase competitive win rates with",
    text: "Battlecards your sales team will actually use. Get automated win-loss reporting through integrations with the sales tools they work in every day."
  }
];

export const InfoCard = ({ title, text }: {title: string, text: string}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-teal-500/50 transition-shadow duration-300">
      <p className="mt-4 text-gray-700 text-2xl">
        <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600'>{title}</span>
        {` `}{text}</p>
    </div>
  );
};

export const InfoCards = () => {
  return (
    <div className="mx-14 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 md:px-20 lg:px-40 mb-36">
      {cardData.map((card, index) => (
        <InfoCard key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
};
