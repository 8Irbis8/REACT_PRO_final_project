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

#### ✅ React & UI

- [x] Обновление до React 19
- [x] Настройка SWC компилятора вместо Babel
- [x] CSS модули с кастомными именами классов

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

-- build time 18.34s
-- output-size 683Kb

## Vite + SWC

-- build time 6.62s
-- output-size 663Kb

## Цель 2: FSD

### Структура проекта

├───src
│ ├───app
│ │ └───styles
│ ├───entities
│ │ ├───counter
│ │ │ ├───cartCounter  
│ │ │ │ ├───model  
│ │ │ │ │ └───hooks
│ │ │ │ └───ui
│ │ │ └───productCartCounter
│ │ │ ├───model
│ │ │ │ └───hooks
│ │ │ └───ui
│ │ ├───filter
│ │ │ └───ui
│ │ ├───product
│ │ │ ├───Card
│ │ │ │ └───ui
│ │ │ ├───DeliveryInfo
│ │ │ │ └───ui
│ │ │ ├───Description
│ │ │ │ └───ui
│ │ │ ├───Header
│ │ │ │ └───ui
│ │ │ ├───LikeButton
│ │ │ │ ├───model
│ │ │ │ │ └───hooks
│ │ │ │ └───ui
│ │ │ └───MainInfo
│ │ │ └───ui
│ │ └───search
│ │ ├───model
│ │ │ └───hooks
│ │ └───ui
│ ├───features
│ │ ├───cart
│ │ │ ├───CartAmount
│ │ │ │ └───ui
│ │ │ └───CartItem
│ │ │ └───ui
│ │ └───infinite-scroll
│ │ ├───model
│ │ │ └───hooks
│ │ └───ui
│ ├───pages
│ │ ├───CartPage
│ │ │ └───ui
│ │ ├───FavoritesPage
│ │ │ └───ui
│ │ ├───HomePage
│ │ │ └───ui
│ │ ├───NotFoundPage
│ │ │ └───ui
│ │ ├───ProductPage
│ │ │ └───ui
│ │ ├───ProfilePage
│ │ │ └───ui
│ │ ├───SignInPage
│ │ │ └───ui
│ │ └───SignUpPage
│ │ └───ui
│ ├───shared
│ │ ├───api
│ │ │ └───hooks
│ │ ├───assets
│ │ │ ├───icons
│ │ │ └───images
│ │ ├───hooks
│ │ ├───modal
│ │ │ └───ui
│ │ ├───providers
│ │ │ └───router
│ │ │ └───config
│ │ ├───store
│ │ │ ├───api
│ │ │ ├───HOCs
│ │ │ ├───hooks
│ │ │ ├───reducers
│ │ │ └───slices
│ │ ├───types
│ │ ├───ui
│ │ │ ├───Button
│ │ │ ├───ButtonBack
│ │ │ ├───Counter
│ │ │ ├───Input
│ │ │ ├───LikeButton
│ │ │ ├───LoadMore
│ │ │ ├───Logo
│ │ │ │ └───assets
│ │ │ ├───Price
│ │ │ ├───Rating
│ │ │ ├───SearchInput
│ │ │ ├───Sort
│ │ │ └───Spinner
│ │ └───utils
│ └───widgets
│ ├───CardList
│ │ └───ui
│ ├───CartList
│ │ └───ui
│ ├───Footer
│ │ └───ui
│ ├───Header
│ │ └───ui
│ ├───Product
│ │ ├───model
│ │ └───ui
│ ├───ReviewList
│ │ └───ui
│ │ └───ReviewForm
│ ├───SignInForm
│ │ ├───ui
│ │ └───utils
│ └───SignUpForm
│ ├───ui
│ └───utils
├───vite
└───webpack

### Проделано:

- [x] Выделены entities и features
- [x] Shared ui компоненты лишены бизнес логики и апи
- [x] Строгое соблюдение правил импортов по слоям
- [x] Часто встречающиеся компоненты (Button. Input и тд) вынесены в shared

## Цель 3: Оптимизация рендеров

### Проделано:

- [x] Компоненты, получающие неизменные props, обернуты в React.memo
- [x] Применены useMemo/useCallback там, где есть вычисления или колбэки

#### ✅ До/После с профайлером

Видим, что после лайка список не ререндериться как раньше

[ТУТ ВСТАВИТЬ ГИФКИ]

## Цель 4: Модалка через React.Portal

### Проделано:

- [x] Реализован компонент Modal в src/shared/ui/Modal через ReactDOM.createPortal
- [x] Добавлена корректная обработка фокусов
- [x] Обернут в модалку компонент Product в CartList для демо

#### ✅ Демо модалки - фокусы сохраняются

[ТУТ ВСТАВИТЬ ГИФКИ]

## Цель 5: useRef — реальное применение

### Проделано:

- [x] Применение useRef для фокуса в компоненте Modal
- [x] Применение UseRef для хранения состояния в хуке usePreviousValue

## Цель 6: Применение React 19 Hooks

### Проделано:

- [x] Применен хук useOptimistic для мгновенного добавления товара в избранное

#### ✅ Демо До/После

[ТУТ ВСТАВИТЬ ГИФКИ]
