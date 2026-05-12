# ToDoList

A full-stack to-do list app with a REST API backend and a React frontend. Built as a personal project to practice the full request cycle — from UI to database.

API by me, frontend by [Yure Anjos](https://github.com/YureAnjos). Split across two branches.

---

## Stack

**Backend (`server` branch)**
- **NestJS** — modular structure for the API
- **MongoDB** — stores tasks per user

**Frontend (`client` branch)**
- **React**

---

## Branches

| Branch | What's in it |
|---|---|
| `client` | Frontend — React |
| `server` | Backend — NestJS REST API + MongoDB |

---

## Running locally

**API (server branch):**
```bash
git checkout server
npm install
# set your MONGODB_URI and any other vars in .env
npm run start:dev
```

**Frontend (client branch):**
```bash
git checkout client
npm install
npm start
```

---

## License

MIT
