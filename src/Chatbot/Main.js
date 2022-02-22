import React from "react";
import ChatBot from "react-simple-chatbot";

function Main() {
  return (
    <ChatBot
      steps={[
        {
          id: "1",
          message: " Hii , What is your name?",
          trigger: "2",
        },
        {
          id: "2",
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          message: "Hi {previousValue}, nice to meet you!",
          trigger: "4",
        },
        {
          id: "4",
          message: "how is your health",

          trigger: "5",
        },
        {
          id: "5",
          options: [
            { value: 1, label: "Good", trigger: "6" },
            { value: 2, label: "Bad", trigger: "7" },
          ],
        },
        {
          id: "6",
          message: "Nice to hear that , take care bye...",
          end: true,
        },
        {
          id: "7",
          message: "What disease do you have?",

          trigger: "8",
        },
        {
          id: "8",
          options: [
            { value: 1, label: "fever", trigger: "9" },
            { value: 2, label: "cold", trigger: "10" },
            { value: 3, label: "cough", trigger: "11" },
            { value: 3, label: "headache", trigger: "12" },
          ],
        },

        {
          id: "9",
          message:
            'take "Dolo" or "Paracetamol"  medicine  From your nearest medical ',
          trigger: "99",
          // user: true,
        },
        {
          id: "99",
          user: true,
          trigger: "13",
          // user: true,
        },

        {
          id: "10",
          message: 'take "Acetaminophen"  medicine From your nearest medical',
          trigger: "110",
          // user: true,
        },
        {
          id: "110",
          user: true,
          trigger: "13",
          // user: true,
        },

        {
          id: "11",
          message:
            'take "antitussives" or "expectorants"  medicine  From your nearest medical',
          // user: true,
          trigger: "111",
        },
        {
          id: "111",
          user: true,
          trigger: "13",
          // user: true,
        },

        {
          id: "12",
          message: 'take "aspirin" medicine from your nearest medical ',
          // user: true,
          trigger: "121",
        },

        {
          id: "121",
          user: true,
          trigger: "13",
          // user: true,
        },

        {
          id: "13",
          message:
            "if you not feel well after taking those medicine then please contect Doctor ",

          trigger: "14",
        },

        {
          id: "14",
          user: true,
          trigger: "00",
          // user: true,
        },
        {
          id: "00",
          message: " bye..... take care",
          end: true,
          // user: true,
        },
      ]}
    />
  );
}

export default Main;
