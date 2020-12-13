export interface reaction {
  id: string;
  rank: string;
  title: string;
  link: string;
}

export default interface Script {
  id: string;
  text: string;
  reaction: reaction[];
}

export let Script1: Script = {
  id: "1",
  text: "Скрипт №1",
  reaction: [
    {
      id: "1",
      rank: "",
      title: "Реакция №1",
      link: "2",
    },
    {
      id: "2",
      rank: "",
      title: "Реакция №2",
      link: "3",
    },
    {
      id: "3",
      rank: "",
      title: "Реакция №3",
      link: "4",
    },
  ],
};

export let Script2: Script = {
  id: "2",
  text: "Скрипт №2",
  reaction: [
    {
      id: "2",
      rank: "",
      title: "Реакция №2",
      link: "3",
    },
    {
      id: "3",
      rank: "",
      title: "Реакция №3",
      link: "4",
    },
    {
      id: "4",
      rank: "",
      title: "Реакция №4",
      link: "5",
    },
  ],
};

export let Script3: Script = {
  id: "3",
  text: "Скрипт №3",
  reaction: [
    {
      id: "3",
      rank: "",
      title: "Реакция №3",
      link: "4",
    },
    {
      id: "4",
      rank: "",
      title: "Реакция №4",
      link: "5",
    },
    {
      id: "5",
      rank: "",
      title: "Реакция №5",
      link: "1",
    },
  ],
};

export let Script4: Script = {
  id: "4",
  text: "Скрипт №4",
  reaction: [
    {
      id: "4",
      rank: "",
      title: "Реакция №4",
      link: "5",
    },
    {
      id: "5",
      rank: "",
      title: "Реакция №5",
      link: "1",
    },
    {
      id: "1",
      rank: "",
      title: "Реакция №1",
      link: "2",
    },
  ],
};

export let Script5: Script = {
  id: "5",
  text: "Скрипт №5",
  reaction: [
    {
      id: "5",
      rank: "",
      title: "Реакция №5",
      link: "1",
    },
    {
      id: "1",
      rank: "",
      title: "Реакция №1",
      link: "2",
    },
    {
      id: "2",
      rank: "",
      title: "Реакция №2",
      link: "3",
    },
  ],
};
