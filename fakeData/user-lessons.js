const lessons = {
  data: [
    {
      id: 1,
      title: "Урок 1",
      content: [
        {
          type: "p",
          value:
            "Основной текст. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.",
        },
        {
          type: "b",
          value:
            "Лид статьи. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях ",
        },
        {
          type: "video",
          value: "https://www.youtube.com/watch?v=_ke775ivGsI",
        },
        {
          type: "p",
          value:
            "Основной текст. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.",
        },
      ],
      order: 1,
      completed: false,
      status: "checking", // enum: ('not_started, 'checking', 'done')
    },
  ],
};
export { lessons };
