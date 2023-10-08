const myCourseslist = {
  data: [
    {
      id: 12,
      title: "Для манагеров",
      type: "infinite", // enum ('finite', 'infinite')
      lessonsTotal: 10,
      completedLessons: 5,
      isActive: true,
    },
    {
      id: 14,
      title: "Для прогеров",
      type: "finite", // enum ('finite', 'infinite')
      lessonsTotal: 10,
      completedLessons: 5,
      isActive: false,
      startAt: new Date("2011-10-05T14:48:00.000Z"), // ISOString
      endAt: new Date("2011-10-05T14:48:00.000Z"), // ISOString
    },
  ],
};
export { myCourseslist };
