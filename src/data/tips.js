import {
    HiOutlineLightBulb,
    HiOutlineClock,
    HiOutlineCalendar,
} from "react-icons/hi";

export const tips = [{
        id: 1,
        icon: < HiOutlineLightBulb className = "text-orange-500" / > ,
        title: "Active Recall",
        description: "Test yourself instead of just reading. It forces your brain to retrieve information, making memory much stronger.",
    },
    {
        id: 2,
        icon: < HiOutlineClock className = "text-orange-500" / > ,
        title: "Pomodoro Technique",
        description: "Study for 25 minutes, then take a 5-minute break. This keeps your brain fresh and prevents study fatigue.",
    },
    {
        id: 3,
        icon: < HiOutlineCalendar className = "text-orange-500" / > ,
        title: "Spaced Repetition",
        description: "Review your lessons at increasing intervals (1 day, 3 days, 1 week) to store information in long-term memory.",
    },
];