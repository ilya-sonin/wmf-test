# Vue микрофронты

Проект демонстрирует реализацию микрофронтенд архитектуры с использованием Vue 3 и Webpack Module Federation.

## Структура проекта

```
packages/
├── host-portal/          # Главное приложение (порт 8080)
├── microfront1/         # Первый микрофронтенд (порт 8081)
├── microfront2/         # Второй микрофронтенд (порт 8082)
└── shared-components/   # Общие компоненты (порт 8083)
```

## Быстрый старт

```bash
# Установка зависимостей
./setup.sh

# Запуск всех приложений
npm start
```

После запуска приложения доступны по адресам:
- http://localhost:8080 - Основное приложение
- http://localhost:8081 - Микрофронтенд 1
- http://localhost:8082 - Микрофронтенд 2
- http://localhost:8083 - Общие компоненты

## Технологии

- Vue 3
- Webpack 5 с Module Federation
- Lerna для монорепозитория
- Tailwind CSS + DaisyUI

## Особенности архитектуры

### Host Portal (8080)
- Основной контейнер приложения
- Маршрутизация между микрофронтендами
- Общие стили и зависимости

### Микрофронтенды (8081, 8082)
- Независимая разработка и деплой
- Доступ к общим компонентам
- Использование общих стилей

### Shared Components (8083)
- Библиотека общих компонентов
- Переиспользуемые UI элементы
- Единый дизайн-система

## Разработка

```bash
# Запуск отдельных приложений
npx lerna run start --scope=@mf/host-portal
npx lerna run start --scope=@mf/microfront1
npx lerna run start --scope=@mf/microfront2
npx lerna run start --scope=@mf/shared-components

# Сборка всех приложений
npm run build
```

## Module Federation

- Host Portal экспортирует общие зависимости (Vue, Vue Router, стили)
- Shared Components предоставляет общие UI компоненты
- Микрофронтенды потребляют общие ресурсы через Module Federation

## Общие зависимости

- Vue 3
- Vue Router
- Tailwind CSS
- DaisyUI
- Webpack 5
- Lerna

## Команды

```bash
# Установка
npm install        # корневые зависимости
lerna bootstrap   # зависимости пакетов

# Разработка
npm start         # запуск всех приложений
npm run build     # сборка всех приложений

# Очистка
npm run clean     # удаление node_modules и dist
```