const courseslist = {
  data: [
    {
      id: 12,
      title: "Для менеджеров",
      type: "finite", // enum ('finite', 'infinite')
      placesLeft: 10,
      startAt: new Date("2011-10-05T14:48:00.000Z"), // ISOString
      endAt: new Date("2011-11-05T14:48:00.000Z"), // ISOString
      tabLink: "management",
      description: "Приходи на курс! Это круто!",
      lessonsTotal: 10,
    },
    {
      id: 14,
      title: "Знакомство с Совкомбанком",
      type: "infinite", // enum ('finite', 'infinite')
      tabLink: "operators",
      placesLeft: 50,
      description: "Приходи на курс! Это круто!",
      lessonsTotal: 8,
    },
    {
      id: 17,
      title: "React+Mobx",
      type: "finite", // enum ('finite', 'infinite')
      placesLeft: 10,
      startAt: new Date("2011-11-05T14:48:00.000Z"), // ISOString
      endAt: new Date("2011-12-05T14:48:00.000Z"), // ISOString
      tabLink: "it",
      description: "Приходи на курс! Это круто!",
      lessonsTotal: 17,
    },
  ],
};
export { courseslist };
