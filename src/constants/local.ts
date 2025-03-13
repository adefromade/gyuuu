export const initializeLocalStorage = () => {
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem(
      "accounts",
      JSON.stringify([
        {
          id: "1",
          availableBalance: 423005,
          officialName: "Natasha Krasavina",
          accountName: "Natasha Savings",
        },
        {
          id: "2",
          availableBalance: 53000,
          officialName: "Natasha Krasavina",
          accountName: "Adv Checking",
        },
      ])
    );
    console.log("Accounts initialized in local storage.");
  } else {
    console.log("Accounts already exist in local storage.");
  }

  if (!localStorage.getItem("transactions")) {
    localStorage.setItem(
      "transactions",
      JSON.stringify([
        {
          id: "0",
          type: "debit",
          amount: 5730,
          date: new Date("2025-01-18"),
          receiverName: "Fly Emirates",
          pending: false,
          receiverBank: "Fly Emirates",
          note: "Tickets",
          transactionId: "9879898476548765hsh",
          accountName: "Natasha Savings",
          availableBalance: 423005,
        },
        {
          id: "1",
          type: "credit",
          amount: 231905,
          date: new Date("2025-01-09"),
          receiverName: "DOGEVEST",
          pending: false,
          receiverBank: "CapitalOne",
          note: "ROI",
          transactionId: "9890898438238765hsh",
          accountName: "Natasha Savings",
          availableBalance: 428735,
        },
        {
          id: "2",
          type: "debit",
          amount: 13900,
          date: new Date("2024-12-29"),
          receiverName: "Gucci store",
          pending: false,
          receiverBank: "BofA",
          note: "shopping",
          transactionId: "987989843823822hsh",
          accountName: "Natasha Savings",
          availableBalance: 52830,
        },
        {
          id: "3",
          type: "debit",
          amount: 2000,
          date: new Date("2024-12-24"),
          receiverName: "Mike",
          pending: false,
          receiverBank: "WellsFargo",
          note: "Merry Xmas",
          transactionId: "987699879823822hsh",
          accountName: "Natasha Savings",
          availableBalance: 66780,
        },
        {
          id: "4",
          type: "debit",
          amount: 2000,
          date: new Date("2024-12-24"),
          receiverName: "Neal",
          pending: false,
          receiverBank: "RegionsBank",
          note: "Merry Xmas",
          transactionId: "98769889823822hsh",
          accountName: "Natasha Savings",
          availableBalance: 68830,
        },
        {
          id: "5",
          type: "debit",
          amount: 2000,
          date: new Date("2024-12-24"),
          receiverName: "Cecelia",
          pending: false,
          receiverBank: "FirstNational",
          note: "Merry Xmas",
          transactionId: "87889889823822hsh",
          accountName: "Natasha Savings",
          availableBalance: 70850,
        },
        {
          id: "6",
          type: "debit",
          amount: 5800,
          date: new Date("2024-12-12"),
          receiverName: "FlyEmirates",
          pending: false,
          receiverBank: "Wellsfargo",
          note: "tickets",
          transactionId: "8879889823822hsh",
          accountName: "Natasha Savings",
          availableBalance: 72880,
        },
        {
          id: "7",
          type: "debit",
          amount: 21330,
          date: new Date("2024-12-04"),
          receiverName: "Fendi",
          pending: false,
          receiverBank: "BofA",
          note: "Shopping",
          transactionId: "8879887353828jush",
          accountName: "Natasha Savings",
          availableBalance: 78730,
        },
        {
          id: "8",
          type: "debit",
          amount: 9000,
          date: new Date("2024-11-25"),
          receiverName: "Cecelia",
          pending: false,
          receiverBank: "FirstNational",
          note: "November",
          transactionId: "887988735908722hsh",
          accountName: "Natasha Savings",
          availableBalance: 100000,
        },
        {
          id: "9",
          type: "debit",
          amount: 42340,
          date: new Date("2024-11-17"),
          receiverName: "Neal",
          pending: false,
          receiverBank: "RegionsBank",
          note: "Renovation",
          transactionId: "8879887623822hsh",
          accountName: "Natasha Savings",
          availableBalance: 109110,
        },
        {
          id: "10",
          type: "credit",
          amount: 89800,
          date: new Date("2024-11-09"),
          receiverName: "Neal",
          pending: false,
          receiverBank: "RegionsBank",
          note: "rent",
          transactionId: "8879898273822hsh",
          accountName: "Natasha Savings",
          availableBalance: 151450,
        },
        {
          id: "11",
          type: "debit",
          amount: 38350,
          accountName: "Natasha Savings",
          date: new Date("2024-10-27"),
          receiverName: "ChanelStore",
          pending: false,
          receiverBank: "WellsFargo",
          note: "shopping",
          transactionId: "8879839443822hsh",
          availableBalance: 61650,
        },
        {
          id: "12",
          type: "debit",
          accountName: "Natasha Savings",
          amount: 18030,
          date: new Date("2024-10-14"),
          receiverName: "thomas",
          pending: false,
          receiverBank: "Capital One",
          note: "bills",
          transactionId: "887983944383uhsh",
          availableBalance: 100000,
        },
      ])
    );
    console.log("Transactions initialized in local storage.");
  } else {
    console.log("Transactions already exist in local storage.");
  }
};
