export class survey {
  title: string;
  questions: [
    {
      question1: String;
      a1: String;
    },
    {
      question2: String;
      a1: String;
    },
    {
      question3: String;
      a1: String;
    }
  ];
  status: Boolean;
  static onComplete: any;
}
