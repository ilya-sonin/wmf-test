# Vue 3 Microfrontends Project

Проект демонстрирует архитектуру микрофронтендов с использованием Vue 3 и Webpack Module Federation.

## Структура проекта

Проект состоит из четырех основных частей:
- `host-portal` (порт 8080) - основное приложение-контейнер, содержащее общие стили и зависимости
- `microfront1` (порт 8081) - первый микрофронтенд
- `microfront2` (порт 8082) - второй микрофронтенд
- `shared-components` (порт 8083) - библиотека общих компонентов

### Host Portal
- Основной контейнер приложения
- Содержит маршрутизацию
- Предоставляет общие стили (Tailwind CSS и DaisyUI)
- Управляет общими зависимостями через Module Federation

### Microfront1 и Microfront2
- Независимые микрофронтенды
- Используют общие стили из host-portal
- Подключают общие компоненты из shared-components
- Могут разрабатываться и деплоиться независимо

### Shared Components
- Библиотека переиспользуемых компонентов
- Имеет свою среду разработки
- Использует стили из host-portal
- Компоненты доступны всем микрофронтендам

## Установка и запуск

Для разработки необходимо запустить все проекты одновременно в следующем порядке:

1. Сначала запускаем host-portal:
```bash
cd host-portal
npm install
npm start
```

2. Затем shared-components:
```bash
cd shared-components
npm install
npm start
```

3. Далее запускаем микрофронтенды:
```bash
cd microfront1
npm install
npm start

cd microfront2
npm install
npm start
```

## Доступ к приложениям

- Host Portal: http://localhost:8080
  - Главная страница: /
  - Microfront1: /micro1
  - Microfront2: /micro2
- Microfront1: http://localhost:8081
- Microfront2: http://localhost:8082
- Shared Components: http://localhost:8083

## Разработка

### Разработка микрофронтендов
Каждый микрофронтенд можно разрабатывать независимо. При этом необходимо, чтобы были запущены:
- host-portal (для общих стилей)
- shared-components (для общих компонентов)

### Разработка общих компонентов
1. Запустите host-portal для доступа к общим стилям
2. Запустите shared-components
3. Разрабатывайте компоненты в директории shared-components/src/components
4. Тестируйте компоненты на http://localhost:8083

## Архитектурные особенности

### Module Federation
- host-portal экспортирует общие стили и зависимости
- shared-components экспортирует общие компоненты
- microfront1 и microfront2 импортируют необходимые модули

### Общие зависимости
Следующие зависимости шарятся через host-portal:
- Vue
- Vue Router
- Tailwind CSS
- DaisyUI

### Стилизация
- Все стили управляются через host-portal
- Микрофронтенды и shared-components используют общие темы
- Каждый микрофронтенд может иметь собственные стили

## Сборка для продакшена

Для сборки всех проектов выполните:

```bash
# В каждой директории
npm run build
```

Собранные файлы будут находиться в директории `dist` каждого проекта.
