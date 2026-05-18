const cards = [
  {
    title: "Low Stock Items",
    value: "12",
    description: "Requires attention",
    link: "View all",
  },
  {
    title: "Today's Updates",
    value: "24",
    description: "Stock changes today",
    link: "View history",
  },
  {
    title: "Tasks",
    value: "3",
    description: "Assigned tasks",
    link: "View tasks",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="
            rounded-3xl
            border border-[#4B4038]
            bg-[#202940]
            p-7
            shadow-lg
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#CAAA98]
          "
        >
          {/* Top Label */}
          <p className="text-sm font-medium tracking-wide text-[#9A8678]">
            {card.title}
          </p>

          {/* Main Value */}
          <h2 className="mt-4 text-5xl font-bold text-[#CAAA98]">
            {card.value}
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-[#9A8678]">
            {card.description}
          </p>

          {/* Action */}
          <button
            className="
              mt-6
              rounded-xl
              bg-[#4B4038]
              px-4 py-2
              text-sm font-medium
              text-[#CAAA98]
              transition-all duration-300
              hover:bg-[#CAAA98]
              hover:text-[#202940]
            "
          >
            {card.link}
          </button>
        </div>
      ))}
    </div>
  );
}