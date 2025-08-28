# 📝 Приложение для управления заметками (Angular)

Простое Angular-приложение для работы с заметками с возможностью выбора источника данных: **API** или **LocalStorage**.

## 📌 Возможности
- Просмотр списка заметок
- Добавление новых заметок
- Переключение между источниками хранения:
  - **API** (json-server)
  - **LocalStorage**
- Актуальное отображение данных в зависимости от выбранного источника

---

## 🛠️ Технологии
- **Angular** 15
- **TypeScript**
- **Taiga UI** — для UI-компонентов
- **json-server** — для имитации API
- **SCSS (БЭМ)** — стилизация

---
## 🚀 Установка и запуск

1. **Клонировать проект**
git clone `git@gitlab.education.tbank.ru:js-frameworks-summer-2025/Students/padun.yelena/Homeworks/angular-2.git`
cd angular-2

2. **Установить зависимости**
npm install

3. **Установить json-server (если ещё не установлен)**
npm install -g json-server

4. **Запустить API (json-server)**
json-server --watch db.json --port 3000

5. **Запустить Angular-приложение**
ng serve




