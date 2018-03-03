{
  "languageModel": {
    "intents": [
      {
        "name": "AMAZON.CancelIntent",
        "samples": []
      },
      {
        "name": "AMAZON.HelpIntent",
        "samples": []
      },
      {
        "name": "AMAZON.NoIntent",
        "samples": []
      },
      {
        "name": "AMAZON.RepeatIntent",
        "samples": []
      },
      {
        "name": "AMAZON.StartOverIntent",
        "samples": [
          "start game",
          "new game",
          "start",
          "start new game"
        ]
      },
      {
        "name": "AMAZON.StopIntent",
        "samples": []
      },
      {
        "name": "AMAZON.YesIntent",
        "samples": []
      },
      {
        "name": "AnswerIntent",
        "samples": [
          "the answer is {Answer}",
          "my answer is {Answer}",
          "is it {Answer}",
          "{Answer} is my answer",
          "{Answer}"
        ],
        "slots": [
          {
            "name": "Answer",
            "type": "AMAZON.NUMBER"
          }
        ]
      },
      {
        "name": "DontKnowIntent",
        "samples": [
          "i don't know",
          "don't know",
          "skip",
          "i don't know that",
          "who knows",
          "i don't know this question",
          "i don't know that one",
          "dunno"
        ],
        "slots": []
      }
    ],
    "invocationName": "funny vocab trivia"
  }
}