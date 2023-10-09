const myCourseslist = {
  data: [
    {
      id: 12,
      title: "Правила сдачи проекта",
      type: "infinite", // enum ('finite', 'infinite')
      lessonsTotal: 11,
      completedLessons: 5,
      isActive: true,
    },
    {
      id: 13,
      title: "Звони, продавай, анализируй!",
      type: "finite", // enum ('finite', 'infinite')
      startAt: new Date("2011-11-05T14:48:00.000Z"), // ISOString
      endAt: new Date("2011-11-06T14:48:00.000Z"), // ISOString
      lessonsTotal: 6,
      completedLessons: 5,
      isActive: true,
    },
    {
      id: 14,
      title: "NestJS",
      type: "finite", // enum ('finite', 'infinite')
      lessonsTotal: 10,
      completedLessons: 5,
      isActive: false,
      startAt: new Date("2011-10-05T14:48:00.000Z"), // ISOString
      endAt: new Date("2011-10-06T14:48:00.000Z"), // ISOString
    },
  ],
};
export { myCourseslist };
