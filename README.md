# Итоговый проект React PRO

## Запуск проекта локально:

- `npm i` - установка зависимостей
- `npm run start` - запуск проекта
- `npm run build` - запуск сборки

## Цель 1: Сборка на Vite+SWC

### Проделано:

#### ✅ Инфраструктура

- [x] Миграция с Webpack на Vite
- [x] Настройка TypeScript с современным таргетом (ES2022)
- [x] Настройка ESLint с резолвером алиасов
- [x] Настройка PostCSS с autoprefixer

#### ✅ React & UI

- [x] Обновление до React 19
- [x] Настройка SWC компилятора вместо Babel
- [x] Поддержка Emotion для MUI
- [x] Настройка React Compiler (экспериментально)

## ✅ Архитектура

- [x] Настройка FSD алиасов (@app, @shared, и т.д.)
- [x] Code splitting и tree shaking
- [x] Раздельные конфиги для dev/prod сборок

## ✅ Обработка ресурсов

- [x] Настройка импорта SVG как компонентов
- [x] CSS модули с кастомными именами классов

## ✅ Производительность

- [x] Оптимизация зависимостей (pre-bundling)
- [x] Source maps для разработки и продакшена
- [x] Минификация через esbuild

### Было/Стало:

## Webpack

-- build time
-- output-size

## Vite + SWC

-- build time 6.62s
-- output-size 683Kb
